'use client'

import Image from 'next/image'
import React from 'react'
// import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight /*, BsLinkedin */ } from 'react-icons/bs'
// import { HiDownload } from 'react-icons/hi'
// import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import { Playfair_Display_SC } from 'next/font/google'
import Globe from './svgs/globe.svg'
import hero from '../public/hero.webp'

const playfair = Playfair_Display_SC({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export default function Intro(): React.ReactElement {
  const { ref } = useSectionInView('Home', '#home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id='home'>
      <div className='relative mb-28 flex h-screen min-h-[620px] w-screen flex-col items-center justify-evenly overflow-hidden sm:mb-0'>
        <div className='absolute -z-10 h-full w-full'>
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
          />
        </div>

        <div className='w-1/3 sm:w-3/12 md:w-2/12'>
          <Globe />
        </div>

        <div className={`${playfair.className} space-y-6 text-center`}>
          <h1 className='text-4xl italic text-white sm:text-7xl md:text-8xl'>
            {'International Volunteer'}
          </h1>

          <h3 className='text-2xl text-white sm:text-3xl md:text-5xl'>
            {'Best volunteer travel organization'}
          </h3>
        </div>

        <div className='gap-2 justify-self-end px-4 text-lg font-medium'>
          <Link
            href='#contact'
            className='group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 px-7 py-3 shadow-2xl outline-none transition hover:scale-110 focus:scale-110 active:scale-105'
            onClick={() => {
              setActiveSection({ name: 'Contact', hash: '#contact' })
              setTimeOfLastClick(Date.now())
            }}
          >
            <h1 className='text-2xl font-[700] text-white'>Contact us </h1>
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
        </div>
      </div>
    </section>
  )
}
