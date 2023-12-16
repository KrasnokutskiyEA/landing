'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { clsx } from 'clsx'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
// import { useTheme } from '@/context/theme-context'

const isOdd = (x: number): boolean => x % 2 !== 0

const scaleAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8
    }
  })
}

export default function Experience(): React.ReactElement {
  const { ref } = useSectionInView('Experience', '#experience')
  // const { theme } = useTheme()

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>

      <div className='relative container mx-auto px-6 flex flex-col space-y-8'>
        <div className='absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0'/>

        {
          experiencesData.map((experience, index) => (
            <motion.div
              key={index}
              className='relative z-1'
              variants={scaleAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true
              }}
              custom={index}
            >
              <div className='timeline-img'>
                <div className='w-10 h-10'>{experience.icon}</div>
              </div>

              <div className={clsx('timeline-container', isOdd(index) && 'timeline-container-left')}>
                <div className={clsx('timeline-pointer', isOdd(index) && 'timeline-pointer-left')} aria-hidden='true' />

                <div className='bg-white p-6 rounded-md shadow-md'>
                  <span className='font-bold text-indigo-600 text-sm tracking-wide'>{experience.date}</span>
                  <h1 className='text-2xl font-bold pt-1'>{experience.title}</h1>
                  <p className='pt-1'>{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}
