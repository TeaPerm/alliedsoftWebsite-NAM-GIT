import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({ children, className }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-secondary', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({ children, title, className, invert = false, uppercase = false }) {
  return (
    <li className="mt-10 group first:mt-0">
      <FadeIn>
        <Border
          className={clsx(
            'pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden',
            className,
          )}
          invert={invert}
        >
          {title && (
           <strong className={`font-semibold text-accent-950 ${uppercase ? 'uppercase' : ''}`}>{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
