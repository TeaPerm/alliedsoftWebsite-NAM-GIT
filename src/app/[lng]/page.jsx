import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoAlliedsoft from '@/images/alliedsoft_blue_logo.png'
import { loadCaseStudies } from '../../lib/mdx'
import { useTranslation } from '@/app/i18n'
import { clients } from '@/utilities/constants'
import { Button } from '@/components/Button'

function Clients({ t }) {
  return (
    <div className="mt-24 rounded-4xl bg-accent-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            {t('WeHaveWorkedWithPeople')}
          </h2>
          <div className="h-px flex-auto bg-accent-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="items-center mt-10 gap-x-8 gap-y-10 grid grid-cols-2 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <div className='flex justify-center'>

                  <Image src="https://elev-8.co.uk/wp-content/uploads/2023/10/Keyloop-Logo-RGB-White_hi_res.png.png" alt={client} width={100} height={60} />
                  </div>
                  {/* <span className="text-lg font-semibold text-white">
                    {client}
                  </span> */}
                </FadeIn>
              </li>
            ))}
            <FadeIn className="col-span-2 lg:col-span-4 flex justify-center text-lg font-semibold text-white">
              <span>{t('ManyMoreDealers')}</span>
            </FadeIn>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ t, caseStudies }) {
  return (
    <>
      <SectionIntro
        title={t('CaseStudyIntroTitle')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('CaseStudyIntroDescription')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-accent-950/5 transition hover:bg-accent-50/50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-accent-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{t('CaseStudy')}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-accent-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-secondary">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services({ t, lng }) {
  return (
    <>
      <SectionIntro
        eyebrow={t('OurServices')}
        title={t('ServicesSectionTitle')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('ServicesSectionSupportText')}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=1080&q=75"
                sizes="(min-width: 1024px) 41rem, 31rem"
                width={200}
                height={200}
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t('ServiceName1')} uppercase={true}>
              {t('ServiceDescription1')}
            </ListItem>
            <ListItem title={t('ServiceName2')} uppercase={true}>
              {t('ServiceDescription2')}
            </ListItem>
            <ListItem title={t('ServiceName3')} uppercase={true}>
              {t('ServiceDescription3')}
            </ListItem>
            <ListItem title={t('ServiceName4')} uppercase={true}>
              {t('ServiceDescription4')}
            </ListItem>
            <ListItem title={t('ServiceName5')} uppercase={true}>
              {t('ServiceDescription5')}
            </ListItem>
          </List>
        </div>
        <FadeIn>
          <div className="mt-2 flex justify-end">
          <Button href={`/${lng}/services`}>{t('ReadMore')}</Button>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

export default async function Home({ params: { lng } }) {
  let caseStudies = (await loadCaseStudies(lng)).slice(0, 3)
  const { t } = await useTranslation(lng)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <div className="max-w-3xl items-center justify-between md:flex">
            <div className=" md:w-full">
              <h1 className="font-display text-6xl font-semibold tracking-tight text-accent-950 [text-wrap:balance]">
                {t('HeroMainTitle')}
              </h1>
              <p className="mt-6 text-xl text-secondary">
                {t('HeroMainTitleSupportText')}
              </p>
            </div>
            <div>
              {/* <Image
                src={laptopAlliedsoft}
                width={500}
                height={100}
                alt="Allied Software Systems Kft."
              /> */}
            </div>
          </div>
        </FadeIn>
      </Container>

      <Clients t={t} />

      <CaseStudies t={t} caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'AlliedSoft logo', logo: logoAlliedsoft }}
      >
        {t('Testimonial1')}
      </Testimonial>

      <Services t={t} lng={lng} />

      <ContactSection lng={lng} />
    </>
  )
}
