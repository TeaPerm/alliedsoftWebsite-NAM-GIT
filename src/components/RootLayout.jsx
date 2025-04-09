'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { Footer } from './Footer'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from '@/app/i18n/client'

const RootLayoutContext = createContext(null)

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  t,
  panelId,
  icon: Icon,
  expanded,
  lng,
  onToggle,

  toggleRef,
  invert = false,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href={`/${lng}`}
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <div className={`${invert && 'text-white'}`}>
            <div className="hidden md:block">
              <LanguageSelector invert={invert} lng={lng} />
            </div>
          </div>
          <Button href={`/${lng}/contact`} invert={invert}>
            {t('ContactUs')}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-accent-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-accent-200'
                  : 'fill-accent-950 group-hover:fill-accent-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="even:mt-px sm:bg-accent-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-6 py-10 -mx-6 group isolate bg-accent-950 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-accent-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 w-screen transition opacity-0 -z-10 bg-accent-900 group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation({ t, lng }) {
  return (
    <nav className="mt-px text-5xl font-medium tracking-tight text-white font-display">
      <NavigationRow>
        <NavigationItem href={`/${lng}/work`}>{t('OurWork')}</NavigationItem>
        <NavigationItem href={`/${lng}/about`}>{t('AboutUs')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={`/${lng}/services`}>
          {t('OurServices')}
        </NavigationItem>
        <NavigationItem href={`/${lng}/blog`}>{t('Blog')}</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children, t, lng }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 z-40 top-2 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            t={t}
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            lng={lng}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 pt-2 overflow-hidden bg-accent-950"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-accent-800">
            <div ref={navRef} className="pb-16 bg-accent-950 pt-14">
              <Header
                t={t}
                invert
                panelId={panelId}
                icon={XIcon}
                lng={lng}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation t={t} lng={lng} />
            <div className="relative bg-accent-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-accent-800">
              <Container>
                <div className="pt-12 w-fit md:hidden">
                  <h2 className="mb-8 text-base font-semibold text-white font-display">
                    {t('Language')}
                  </h2>
                  <LanguageSelector lng={lng} invert={true} />
                </div>
                <div className="grid grid-cols-1 pt-10 pb-16 gap-y-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="text-base font-semibold text-white font-display">
                      {t('OurOffice')}
                    </h2>
                    <Offices
                      t={t}
                      invert
                      className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="text-base font-semibold text-white font-display">
                      {t('FollowUs')}
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative flex flex-col w-full isolate pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-accent-50/80 stroke-accent-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className="flex-auto w-full">{children}</main>

          <Footer lng={lng} t={t} />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children, lng }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)
  const { t } = useTranslation(lng)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname} lng={lng} t={t}>
        {children}
      </RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
