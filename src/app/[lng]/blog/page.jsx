import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '../../../lib/mdx'
import { serverSideTranslation, useTranslation } from '@/app/i18n'
import placeholderPortrait from '@/images/clients/placeholder/placeholderPortrait.jpg'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await serverSideTranslation(lng)

  return {
    title: t('Blog'),
    description: t('BlogSupportText'),
  }
}

export default async function Blog({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  let articles = await loadArticles(lng)

  return (
    <>
      <PageIntro eyebrow={t('Blog')} title={t('BlogPageTitle')}>
        <p>{t('BlogPageTitleSupportText')}</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <p>
        </p>
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="text-2xl font-semibold font-display text-accent-950">
                        <Link href={`${article.href}`}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">{t('Published')}</dt>
                        <dd className="absolute top-0 left-0 text-sm text-accent-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date, lng)}
                          </time>
                        </dd>
                        <dt className="sr-only">{t('Author')}</dt>
                        <dd className="flex mt-6 gap-x-4">
                          <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                            {article.author.image ? (
                              <Image
                                alt=""
                                {...article.author.image}
                                className="object-cover w-12 h-12 grayscale"
                              />
                            ) : (
                              <Image
                                alt=""
                                src={placeholderPortrait}
                                className="object-cover w-12 h-12 grayscale"
                              />
                            )}
                          </div>
                          <div className="text-sm text-accent-950">
                            <div className="font-semibold">
                              {article.author.name}
                            </div>
                            <div>{article.author.role}</div>
                          </div>
                        </dd>
                      </dl>
                      <p className="max-w-2xl mt-6 text-base text-secondary">
                        {article.description}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`${t('ReadMore')}: ${article.title}`}
                        className="mt-8"
                      >
                        {t('ReadMore')}
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection lng={lng} />
    </>
  )
}
