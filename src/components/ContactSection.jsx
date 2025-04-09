import { useTranslation } from '@/app/i18n'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import Image from 'next/image'
import logoAlliedsoft from '@/images/alliedsoft_white_logo.png'

export async function ContactSection({ lng }) {
  const { t } = await useTranslation(lng)
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-accent-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              {t('SendUsAMessage')}
            </h2>
            <div className="mt-6 flex">
              <Button href={`/${lng}/contact`} invert>
                {t('GetInContact')}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                <div className="flex items-center gap-4">
                  {t('OurOffice')}
                  <Image
                    src={logoAlliedsoft}
                    width={100}
                    height={100}
                    alt="Allied Software Systems Kft."
                  />
                </div>
              </h3>
              <Offices
                t={t}
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
