import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import getDocBySlug, { loadCaseStudies } from '../../../lib/mdx'
import { useTranslation } from '@/app/i18n'

export default async function CaseStudyLayout({
  caseStudy,
  params: { lng },
  children,
}) {
  const { t } = await useTranslation(lng)
  let allCaseStudies = await loadCaseStudies(lng)
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={t('CaseStudy')} title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="max-w-5xl mx-auto">
                  <dl className="grid grid-cols-1 -mx-6 text-sm text-accent-950 sm:mx-0 sm:grid-cols-3">
                    <div className="px-6 py-4 border-t border-neutral-200 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">{t('Client')}</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="px-6 py-4 border-t border-neutral-200 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">{t('Year')}</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="px-6 py-4 border-t border-neutral-200 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">{t('Service')}</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title={t('MoreCaseStudies')}
          pages={moreCaseStudies}
          lng={lng}
        />
      )}

      <ContactSection lng={lng} />
    </>
  )
}
