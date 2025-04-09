import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { serverSideTranslation, useTranslation } from '@/app/i18n'
import ContactForm from './ContactForm'

function ContactDetails({ t }) {
  return (
    <FadeIn>
      <h2 className="text-base font-semibold font-display text-accent-950">
        {t('OurOffice')}
      </h2>
      <p className="mt-6 text-base text-secondary">
        {t('ContactUsInPerson')}
      </p>

      <Offices t={t} className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2" />
    </FadeIn>
  )
}

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: t('ContactUs'),
    description: t('ContactUsTitleSupportText'),
  }
}

export default async function Contact({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <PageIntro eyebrow={t('ContactUs')} title={t('ContactUsPageTitle')}>
        <p>{t('ContactUsTitleSupportText')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails t={t} />
          <ContactForm
            workInquiries={t('WorkInquiries')}
            fullName={t('FullName')}
            email={t('Email')}
            company={t('Company')}
            phone={t('Phone')}
            message={t('Message')}
            contactUsPageTitle={t('ContactUsPageTitle')}
            contactFeedbackTitle={t('ContactFeedbackTitle')}
            contactFeedback={t('ContactFeedback')}
            contactErrorMessage={t('ContactErrorMessage')}
          />
        </div>
      </Container>
    </>
  )
}