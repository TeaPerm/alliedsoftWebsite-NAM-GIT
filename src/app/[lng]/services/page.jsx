import { serverSideTranslation, useTranslation } from '@/app/i18n'
import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import placeholderStockPhoto from '@/images/laptop.jpg'
import keyLoopLogo from '@/images/keyloop_logo.png'
import alliedsoft_saas_logo from '@/images/alliedsoft_saas_logo.png'
import rhodecode_logo from '@/images/rhodecode_logo.png'
import stromshield_logo from '@/images/stormshield_logo.png'
import f_secure_logo from '@/images/f_secure_logo.png'
import { clients } from '@/utilities/constants'
import Image from 'next/image'
import {
  ArrowPathIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  CloudIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'

function Section({ title, support, image, children, titleHref }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            {/* <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
              /> */}
            <div className="flex justify-center">
              <a href={image.href} target="_blank">
                <Image
                  {...image}
                  alt={image.alt}
                  height={350}
                  width={350}
                  className="transform justify-center transition-all duration-500 hover:translate-y-[-8px] lg:justify-end lg:group-even/section:justify-start"
                />
              </a>
            </div>
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-accent-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h1 className="mt-2 font-display text-3xl font-medium uppercase tracking-tight text-accent-950 sm:text-4xl">
              <a href={titleHref} target="_blank">
                {title}
              </a>
            </h1>
            <h2 className="mt-2 font-display text-xl tracking-tight text-accent-950/60">
              {support}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const Service1Paragraphs = [
  {
    translateId: 'Service1Paragraph1',
  },
  {
    translateId: 'Service1Paragraph2',
  },
  {
    translateId: 'Service1Paragraph3',
  },
  {
    translateId: 'Service1Paragraph4',
  },
  {
    translateId: 'Service1Paragraph5',
  },
  {
    translateId: 'Service1Paragraph6',
  },
]

const Service2Paragraphs = [
  {
    translateId: 'Service2Paragraph1',
  },
  {
    translateId: 'Service2Paragraph2',
  },
  {
    translateId: 'Service2Paragraph3',
  },
  {
    translateId: 'Service2Paragraph4',
  },
  {
    translateId: 'Service2Paragraph5',
  },
]
const Service3Paragraphs = [
  {
    translateId: 'Service3Paragraph1',
  },
  {
    translateId: 'Service3Paragraph2',
  },
  {
    translateId: 'Service3Paragraph3',
  },
  {
    translateId: 'Service3Paragraph4',
  },
  {
    translateId: 'Service3Paragraph5',
  },
  {
    translateId: 'Service3Paragraph6',
  },
]
const Service4Paragraphs = [
  {
    translateId: 'Service4Paragraph1',
  },
  {
    translateId: 'Service4Paragraph2',
  },
  {
    translateId: 'Service4Paragraph3',
  },
  {
    translateId: 'Service4Paragraph4',
  },
  {
    translateId: 'Service4Paragraph5',
  },
]
const Service5Paragraphs = [
  {
    translateId: 'Service5Paragraph1',
  },
  {
    translateId: 'Service5Paragraph2',
  },
  {
    translateId: 'Service5Paragraph3',
  },
  {
    translateId: 'Service5Paragraph4',
  },
  {
    translateId: 'Service5Paragraph5',
  },
  {
    translateId: 'Service5Paragraph6',
  },
  {
    translateId: 'Service5Paragraph7',
  },
]

const service1Tags = [
  {
    translateId: 'Service1Tag1',
  },
  {
    translateId: 'Service1Tag2',
  },
  {
    translateId: 'Service1Tag3',
  },
]

function Service1({ t }) {
  return (
    <Section
      title={t('ServiceTitle1')}
      support={t('ServiceSupport1')}
      image={{
        src: keyLoopLogo,
        alt: 'Automaster Logo',
      }}
    >
      <div className="space-y-2 text-base text-secondary">
        <ul className="list-inside list-disc">
          {Service1Paragraphs.map((included) => {
            return <li key={included.translateId}>{t(included.translateId)}</li>
          })}
        </ul>
      </div>
      <TagList className="mt-4">
        {service1Tags.map((included) => {
          return (
            <TagListItem key={included.translateId} className="bg-accent-200">
              {t(included.translateId)}
            </TagListItem>
          )
        })}
      </TagList>
    </Section>
  )
}

function Service2({ t }) {
  return (
    <Section
      title={t('ServiceTitle2')}
      support={t('ServiceSupport2')}
      image={{
        src: alliedsoft_saas_logo,
        alt: 'AlliedSoft logo',
        href: 'https://alliedsoft.hu',
      }}
      titleHref="https://alliedsoft.hu"
    >
      <div className="space-y-6 text-base text-secondary">
        <ul className="list-inside list-disc">
          {Service2Paragraphs.map((included) => {
            return <li key={included.translateId}>{t(included.translateId)}</li>
          })}
        </ul>
      </div>
    </Section>
  )
}

function Service3({ t }) {
  return (
    <Section
      title={t('ServiceTitle3')}
      support={t('ServiceSupport3')}
      image={{
        src: stromshield_logo,
        alt: 'Stormshield logo',
        href: 'https://www.stormshield.com/',
      }}
      titleHref={'https://www.stormshield.com/'}
    >
      <div className="space-y-6 text-base text-secondary">
        <ul className="list-inside list-disc">
          {Service3Paragraphs.map((included) => {
            return <li key={included.translateId}>{t(included.translateId)}</li>
          })}
        </ul>
      </div>
    </Section>
  )
}
function Service4({ t }) {
  return (
    <Section
      title={t('ServiceTitle4')}
      support={t('ServiceSupport4')}
      image={{
        src: f_secure_logo,
        alt: 'F-Secure logo',
        href: 'https://www.f-secure.com/en',
      }}
      titleHref={'https://www.f-secure.com/en'}
    >
      <div className="space-y-6 text-base text-secondary">
        <ul className="list-inside list-disc">
          {Service4Paragraphs.map((included) => {
            return <li key={included.translateId}>{t(included.translateId)}</li>
          })}
        </ul>
      </div>
    </Section>
  )
}

function Service5({ t }) {
  return (
    <Section
      title={t('ServiceTitle5')}
      support={t('ServiceSupport5')}
      image={{
        src: rhodecode_logo,
        alt: 'Rhodecode logo',
        href: 'https://rhodecode.com/',
      }}
      titleHref={'https://rhodecode.com/'}
    >
      <div className="space-y-6 text-base text-secondary">
        <ul className="list-inside list-disc">
          {Service5Paragraphs.map((included) => {
            return <li key={included.translateId}>{t(included.translateId)}</li>
          })}
        </ul>
      </div>
    </Section>
  )
}

const Value1Descriptions = [
  {
    translateId: 'Value1Description1',
  },
  {
    translateId: 'Value1Description2',
  },
  {
    translateId: 'Value1Description3',
  },
  {
    translateId: 'Value1Description4',
  },
  {
    translateId: 'Value1Description5',
  },
]
const Value2Descriptions = [
  {
    translateId: 'Value2Description1',
  },
  {
    translateId: 'Value2Description2',
  },
  {
    translateId: 'Value2Description3',
  },
  {
    translateId: 'Value2Description4',
  },
  {
    translateId: 'Value2Description5',
  },
]

const Value3Descriptions = [
  {
    translateId: 'Value3Description1',
  },
  {
    translateId: 'Value3Description2',
  },
  {
    translateId: 'Value3Description3',
  },
  {
    translateId: 'Value3Description4',
  },
  {
    translateId: 'Value3Description5',
  },
]

function Values({ t }) {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-accent-50/80 stroke-accent-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={t('OurValues')} title={t('OurValuesTitle')}>
        <p>{t('OurValuesSupportText')}</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem
            title={t('Value1')}
            className="col-span-2 lg:col-span-1"
          >
            <ul className="list-inside list-disc">
              {Value1Descriptions.map((included) => {
                return (
                  <li key={included.translateId}>{t(included.translateId)}</li>
                )
              })}
            </ul>
          </GridListItem>
          <GridListItem
            title={t('Value2')}
            className="col-span-2 lg:col-span-1"
          >
            <ul className="list-inside list-disc">
              {Value2Descriptions.map((included) => {
                return (
                  <li key={included.translateId}>{t(included.translateId)}</li>
                )
              })}
            </ul>
          </GridListItem>
          <GridListItem
            title={t('Value3')}
            className="col-span-2 lg:col-span-1"
          >
            <ul className="list-inside list-disc">
              {Value3Descriptions.map((included) => {
                return (
                  <li key={included.translateId}>{t(included.translateId)}</li>
                )
              })}
            </ul>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function References({ t }) {
  return (
    <FadeInStagger>
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-lg font-semibold leading-8 text-black">
            {t('ReferencesTitle')}
          </h2>
        </FadeIn>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {clients.map((client, index) => (
            <FadeIn key={index}>
              <div className="m-4 flex justify-center">
                <Image
                  alt={client[0]}
                  src={client[1]}
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeInStagger>
  )
}

const features = [
  {
    description: 'OurServicesPageTitleSupport1',
    icon: UserCircleIcon,
  },
  {
    description: 'OurServicesPageTitleSupport2',
    icon: LockClosedIcon,
  },
  {
    description: 'OurServicesPageTitleSupport3',
    icon: ArrowPathIcon,
  },
  {
    description: 'OurServicesPageTitleSupport4',
    icon: GlobeAltIcon,
  },
  {
    description: 'OurServicesPageTitleSupport5',
    icon: Cog6ToothIcon,
  },
  {
    description: 'OurServicesPageTitleSupport6',
    icon: ServerIcon,
  },
  {
    description: 'OurServicesPageTitleSupport7',
    icon: CloudIcon,
  },
  {
    description: 'OurServicesPageTitleSupport8',
    icon: FingerPrintIcon,
  },
]

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: t('OurServices'),
    description: t('OurServicesPageTitleSupportText'),
  }
}

export default async function Process({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <FadeInStagger>
        <PageIntro
          eyebrow={t('OurServices')}
          title={t('OurServicesPageTitle')}
          className="max-w-none"
        >
          <FadeIn>
            <p>{t('OurServicesPageTitleSupportText')}</p>
          </FadeIn>
          <dl className="mt-16 grid grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {features.map((feature) => (
              <FadeIn key={feature.description}>
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-accent-800"
                    />
                  </dt>{' '}
                  <dd className="inline">{t(feature.description)}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </PageIntro>
      </FadeInStagger>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Service1 t={t} />
        <Service2 t={t} />
        <Service3 t={t} />
        <Service4 t={t} />
        <Service5 t={t} />
      </div>

      <Values t={t} />

      <References t={t} />

      <ContactSection lng={lng} />
    </>
  )
}
