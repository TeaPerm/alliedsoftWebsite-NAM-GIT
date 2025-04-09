import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '../../../lib/mdx'
import { useTranslation } from '@/app/i18n'

export default async function BlogArticleWrapper({
  article,
  params: { lng },
  children,
}) {
  const { t } = await useTranslation(lng)
  let allArticles = await loadArticles(lng)
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <>

      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="flex flex-col max-w-5xl mx-auto text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-accent-950 [text-wrap:balance] sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-accent-950"
            >
              {formatDate(article.date, lng)}
            </time>
            <p className="mt-6 text-sm font-semibold text-accent-950">
              {t("By")} {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title={t('MoreArticles')}
          pages={moreArticles}
          lng={lng}
        />
      )}

      <ContactSection lng={lng} />
    </>
  )
}
