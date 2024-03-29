'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { type FeatureBundle, LazyMotion, m } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About(): React.ReactElement {
  const { ref } = useSectionInView('About', '#about')

  const loadFeatures = async (): Promise<FeatureBundle> =>
    await import('./../lib/features').then((res) => res.default)

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        className='my-24 hidden h-16 w-1 rounded-full bg-gray-300 dark:bg-opacity-20 sm:block'
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        id='section-divider'
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true
        }}
      />

      <m.section
        ref={ref}
        className='mb-28 max-w-[45rem] scroll-mt-28 px-10 text-center leading-8 sm:mb-40 sm:px-16'
        initial={{ opacity: 0, x: 200 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0.4, delay: 0.3 }}
        id='about'
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true
        }}
      >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3 text-start'>
          After graduating with a degree in{' '}
          <span className='font-medium'>Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{' '}
          <span className='font-medium'>full-stack web development</span>.{' '}
          <span className='italic'>My favorite part of programming</span> is the
          problem-solving aspect. I <span className='underline'>love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{' '}
          <span className='font-medium'>
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{' '}
          <span className='font-medium'>full-time position</span> as a software
          developer.
        </p>

        <p className='text-start'>
          <span className='italic'>When Im not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{' '}
          <span className='font-medium'>learning new things</span>. I am
          currently learning about{' '}
          <span className='font-medium'>history and philosophy</span>. Im also
          learning how to play the guitar.
        </p>
      </m.section>
    </LazyMotion>
  )
}
