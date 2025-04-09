import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoPuma from '@/images/clients/placeholder/puma-logo.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '../../../lib/mdx'
import { serverSideTranslation, useTranslation } from '@/app/i18n'
import { clients } from '@/utilities/constants'

function CaseStudies({ caseStudies, t, lng }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold font-display text-accent-950">
          {t('CaseStudies')}
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 pt-16 gap-x-8 gap-y-8">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client + ' logo'}
                      className="flex-none w-16 h-16"
                    />
                    <h3 className="mt-6 text-sm font-semibold text-accent-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="flex mt-1 gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-accent-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {t(caseStudy.service)}
                    </p>
                    <p className="text-sm text-accent-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date, lng)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="text-4xl font-medium font-display text-accent-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-secondary">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex mt-8">
                    <Button
                      href={caseStudy.href}
                      aria-label={`${t('ReadCaseStudy')}: ${caseStudy.client}`}
                    >
                      {t('ReadCaseStudy')}
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function Clients({ t }) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold font-display text-accent-950">
          {t('OurWorkClientsTitle')}
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  {/* <Image src={logo} alt={client} unoptimized /> */}
                  <span className="text-lg font-semibold">{client}</span>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: t('OurWork'),
    description: t('OurWorkSupportText'),
  }
}

export default async function Work({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  let caseStudies = await loadCaseStudies(lng)

  return (
    <>
      <PageIntro eyebrow={t('OurWork')} title={t('OurWorkTitle')}>
        <p>{t('OurWorkSupportText')}</p>
      </PageIntro>

      <CaseStudies t={t} caseStudies={caseStudies} lng={lng} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Firm1', logo: logoPuma }}
      >
        {t('Testimonial1')}
      </Testimonial>

      <Clients t={t} />

      <ContactSection lng={lng} />
    </>
  )
}
