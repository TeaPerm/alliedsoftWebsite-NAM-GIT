import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { navigation } from '@/utilities/constants'

function Navigation({ lng, t }) {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation(lng).map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-accent-950">
              {t(section.title)}
            </div>
            <ul role="list" className="mt-4 text-sm text-secondary">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    target='_blank'
                    className="transition hover:text-accent-950"
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm({ t }) {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-accent-950">
        {t('SignUpNewsLetter')}
      </h2>
      <p className="mt-4 text-sm text-secondary">
        {t('WhySignUpToNewsletter')}
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={t('EmailAddress')}
          autoComplete="email"
          aria-label={t('EmailAddress')}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-accent-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-accent-950 text-white transition hover:bg-accent-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer({ lng, t }) {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation t={t} lng={lng} />
          <iframe
            title="Map"
            className="w-full rounded-[12px]"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.9158475207432!2d19.02859587678682!3d47.47206929725737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddc818dc4e8b%3A0xa110f25ee7504b07!2sAllied%20Software%20Systems%20Kft.!5e0!3m2!1shu!2shu!4v1739186143643!5m2!1shu!2shu"
            loading="lazy"
          />
          {/* <div className="flex lg:justify-end">
            <NewsletterForm t={t} />
          </div> */}
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={`/${lng}`} aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-secondary">
            © Alliedsoft, {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
