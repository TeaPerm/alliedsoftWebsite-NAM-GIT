'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import Slovakia from '@/images/flags/sk.svg'
import Hungary from '@/images/flags/hu.svg'
import UK from '@/images/flags/gb.svg'
import Serbia from '@/images/flags/sr.svg'
import Slovenia from '@/images/flags/sl.svg'
import Link from 'next/link'
import Image from 'next/image'

const languages = [
  { id: '/en', name: 'English', image: UK },
  { id: '/hu', name: 'Magyar', image: Hungary },
  { id: '/sl', name: 'Slovenščina', image: Slovenia },
  { id: '/sr', name: 'Srpski', image: Serbia },
  { id: '/sk', name: 'Slovenčina', image: Slovakia },
]

let regex = /^\/([^\/]+)/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageSelector({ invert, lng }) {
  const [selected, setSelected] = useState(
    languages.filter((language) => language?.id === `/${lng}`)?.[0] ??
      languages[0],
  )

  const pathname = usePathname()

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className={`peer block w-40  rounded-xl border border-accent-100  bg-transparent py-[5px] pl-4 pr-4 text-base/6  ring-1 ring-transparent transition  focus:outline-none  group-first:rounded-t-2xl group-last:rounded-b-2xl ${invert ? 'focus:ring-gray-100-/5 text-white focus:border-white' : 'text-accent-950 focus:border-accent-600 focus:ring-accent-950/5'}`}
            >
              <div className="flex items-center gap-1 truncate">
                <Image src={selected.image} className="w-5" />
                <span>{selected.name}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon
                  className={`h-5 w-5 ${invert ? 'text-white' : 'text-accent-200'}`}
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 rounded-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-accent-600 text-white' : 'text-accent-900',
                        'relative cursor-default select-none ',
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <Link
                          href={pathname.replace(regex, language.id)}
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'flex items-center gap-2 truncate py-2 pl-3 pr-9',
                          )}
                        >
                          <Image src={language.image} className="w-5" />
                          {language.name}
                        </Link>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-accent-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
