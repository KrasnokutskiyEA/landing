'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight /*, BsLinkedin */ } from 'react-icons/bs'
// import { HiDownload } from 'react-icons/hi'
// import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import { Playfair_Display_SC } from 'next/font/google'
import hero from '../public/hero.webp'

const playfair = Playfair_Display_SC({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export default function Intro(): React.ReactElement {
  const { ref } = useSectionInView('Home', '#home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home'>
      <div className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <div className='absolute -z-10 h-full w-full bg-emerald-600 brightness-[0.4] saturate-[0.3]'>
          <Image
            src={hero}
            placeholder='blur'
            alt='Hero'
            quality='60'
            fill
            priority={true}
            sizes='100vw'
            style={{
              objectFit: 'cover'
            }}
            className='mix-blend-overlay'
          />
        </div>

        <motion.div
          className={`${playfair.className} space-y-6 text-center`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className='bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-4xl italic text-transparent sm:text-7xl md:text-8xl'>
            {'International Volunteer'}
          </h1>

          <h3 className='bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-2xl text-transparent sm:text-3xl md:text-5xl'>
            {'Best volunteer travel organization'}
          </h3>
        </motion.div>

        <motion.div
          className='absolute bottom-20 gap-2 justify-self-end px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1
          }}
        >
          <Link
            href='#contact'
            className='group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 px-7 py-3 shadow-2xl outline-none transition hover:scale-110 focus:scale-110 active:scale-105'
            onClick={() => {
              setActiveSection('Contact')
              setTimeOfLastClick(Date.now())
            }}
          >
            <h1
              className={`${playfair.className} text-2xl font-[700] italic text-white`}
            >
              Contact us{' '}
            </h1>
            <BsArrowRight className='text-2xl font-[700] text-white opacity-70 transition group-hover:translate-x-1' />
          </Link>
          {/*
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
          */}
        </motion.div>
      </div>
    </section>
  )
}
