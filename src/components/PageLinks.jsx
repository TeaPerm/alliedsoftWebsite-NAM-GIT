'use client'
import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { formatDate } from '@/lib/formatDate'
import { useTranslation } from '@/app/i18n/client'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function PageLink({ page, lng }) {
  const { t } = useTranslation(lng)
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-accent-950">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-secondary"
        >
          {formatDate(page.date, lng)}
        </time>
        <p className="mt-2.5 text-base text-secondary">{page.description}</p>
        <Link
          href={page.href}
          className="flex mt-6 text-base font-semibold transition gap-x-3 text-accent-950 hover:text-secondary"
          aria-label={`${t("ReadMore")}: ${page.title}`}
        >
          {t("ReadMore")}
          <ArrowIcon className="flex-none w-6 fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  )
}

export function PageLinks({ title, pages, intro, className, lng }) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-accent-50/30">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-accent-50/80 stroke-accent-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} lng={lng} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
