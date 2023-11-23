'use client'

import React from 'react'
import { type FeatureBundle, LazyMotion, m } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Header(): React.ReactElement {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  const loadFeatures = async (): Promise<FeatureBundle> =>
    await import('./../lib/features').then((res) => res.default)

  return (
    <header className='relative z-[999]'>
      <LazyMotion features={loadFeatures}>
        <m.div
          className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
          initial={{ x: '-50%', opacity: 0 }}
          animate={{ x: '-50%', opacity: 1 }}
        />

        <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
          <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map((link) => (
              <m.li
                className='relative flex h-3/4 items-center justify-center'
                key={link.hash}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2
                }}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 transition hover:text-orange-900 dark:text-gray-500 dark:hover:text-gray-300',
                    {
                      'text-white dark:text-gray-200':
                        activeSection === link.name
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <m.span
                      className='absolute inset-0 -z-10 rounded-full bg-orange-500 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </m.li>
            ))}
          </ul>
        </nav>
      </LazyMotion>
    </header>
  )
}
