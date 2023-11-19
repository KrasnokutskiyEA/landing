'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import hero from '../public/hero.webp'

export default function Intro(): React.ReactElement {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home'>
      <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <div className='absolute -z-10 h-full w-full'>
          <Image
            src={hero}
            placeholder='blur'
            alt='Hero'
            quality='100'
            fill
            priority={true}
            sizes='100vw'
            style={{
              objectFit: 'cover'
            }}
          />
        </div>

        <motion.h1
          className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] text-white sm:text-4xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className='font-bold'>Hello, Im Ricardo.</span> Im a{' '}
          <span className='font-bold'>full-stack developer</span> with{' '}
          <span className='font-bold'>8 years</span> of experience. I enjoy
          building <span className='italic'>sites & apps</span>. My focus is{' '}
          <span className='underline'>React (Next.js)</span>.
        </motion.h1>

        <motion.div
          className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1
          }}
        >
          <Link
            href='#contact'
            className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
            onClick={() => {
              setActiveSection('Contact')
              setTimeOfLastClick(Date.now())
            }}
          >
            Contact me here{' '}
            <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
          </Link>

          <a
            className='borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10'
            href='/CV.pdf'
            download
          >
            Download CV{' '}
            <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
          </a>

          <a
            className='borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
            href='https://linkedin.com'
            target='_blank'
          >
            <BsLinkedin />
          </a>

          <a
            className='borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60'
            href='https://github.com'
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
