import { RootLayout } from '@/components/RootLayout'
import { dir } from 'i18next'
import '@/styles/tailwind.css'
import { languages } from '../i18n/settings'
import { serverSideTranslation } from '../i18n'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: {
      template: '%s - Alliedsoft',
      default: `Alliedsoft`,
    },
    description: t('OurServicesPageTitleSupportText'),
  }
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Layout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className="h-full bg-accent-950 text-base antialiased"
    >
      <Head>
        <link rel="icon" type='image/png' href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout lng={lng}>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
