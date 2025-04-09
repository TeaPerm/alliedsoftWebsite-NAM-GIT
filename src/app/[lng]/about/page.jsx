import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '../../../lib/mdx'
import { serverSideTranslation, useTranslation } from '@/app/i18n'
import { team } from '@/utilities/constants'

function Culture({ t }) {
  return (
    <div className="py-24 mt-24 rounded-4xl bg-accent-950 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow={t('OurCulture')}
        title={t('OurCultureTitle')}
        invert
      >
        <p>{t('OurCultureTitleSupportText')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={t('OurCulturePoint1')} invert>
            {t('OurCultureDescription1')}
          </GridListItem>
          <GridListItem title={t('OurCulturePoint2')} invert>
            {t('OurCultureDescription2')}
          </GridListItem>
          <GridListItem title={t('OurCulturePoint3')} invert>
            {t('OurCultureDescription3')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Team({ t }) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="text-2xl font-semibold font-display text-accent-950">
                  {t(group.title)}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="relative overflow-hidden group rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="object-cover w-full transition duration-500 h-96 grayscale motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-semibold tracking-wide text-white font-display text-base/6">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {t(person.role)}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: t('AboutUs'),
    description: t('HeroMainTitleSupportText'),
  }
}

export default async function About({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  let blogArticles = (await loadArticles(lng)).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow={t('AboutUs')} title={t('AboutUsPageTitle')}>
        <p>{t('AboutUsTitleSupportText')}</p>
        <div className="max-w-2xl mt-10 space-y-6 text-base">
          {/* <p>{t('AboutUsParagraph1')}</p>
          <p>{t('AboutUsParagraph2')}</p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value={t('AboutUsStat1')}
            label={t('AboutUsStatDescription1')}
          />
          <StatListItem
            value={t('AboutUsStat2')}
            label={t('AboutUsStatDescription2')}
          />
          <StatListItem
            value={t('AboutUsStat3')}
            label={t('AboutUsStatDescription3')}
          />
        </StatList>
      </Container>

      <Culture t={t} />

      <Team t={t} />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title={t('FromTheBlog')}
        intro={t('FromTheBlogSupportText')}
        pages={blogArticles}
        lng={lng}
      />

      <ContactSection lng={lng} />
    </>
  )
}
