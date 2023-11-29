'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { lock, unlock } from 'tua-body-scroll-lock'
import NavLink from './navLink'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import MenuOverlay from './menuOverlay'
import { useWindowWidth } from '@react-hook/window-size'
import debounce from 'lodash/debounce'
import { useActiveSectionContext } from '@/context/active-section-context'
import { links } from '@/lib/data'

const Navbar = (): React.ReactElement => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const activeHashRef = useRef('#home')
  const onlyWidth = useWindowWidth()
  const navRef = useRef(null)

  useEffect(() => {
    navbarOpen ? lock(navRef.current) : unlock(navRef.current)
  }, [navbarOpen])

  useEffect(() => {
    if (onlyWidth >= 768) {
      setNavbarOpen(false)
      unlock()
    }
  }, [onlyWidth])

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => { handleScroll() }, 200)
    window.addEventListener('scroll', handleDebouncedScroll)
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll)
    }
  }, [])

  const { activeSection } = useActiveSectionContext()

  useEffect(() => {
    const activeHash = links.find(link => link.name === activeSection)?.hash
    if (activeHash !== undefined) {
      activeHashRef.current = activeHash
    }
  }, [activeSection])

  function handleScroll(): void {
    if (location.hash !== activeHashRef.current) {
      history.pushState(null, '', activeHashRef.current)
    }
  }

  function closeOverlay(): void {
    setNavbarOpen(false)
  }

  return (
    <nav ref={navRef} className='fixed left-0 right-0 top-0 z-10'>
      <div className='flex flex-wrap items-center justify-between px-4 py-2 lg:py-4 bg-[#121212] bg-opacity-100'>
        <Link href='/' className='text-2xl font-semibold text-white md:text-5xl'>
          LOGO
        </Link>

        <div className='mobile-menu block md:hidden'>
          {
          !navbarOpen
            ? (
              <button
                onClick={() => { setNavbarOpen(true) }}
                className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
              >
                <FaReact className='h-5 w-5' />
              </button>
              )
            : (
              <button onClick={() => { setNavbarOpen(false) }}
                className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
              >
                <LuGraduationCap className='h-5 w-5' />
              </button>
              )}
        </div>

        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0'>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.hash} title={link.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {
        navbarOpen
          ? (
            <div onClick={closeOverlay} className='h-screen'>
              <MenuOverlay links={links} />
            </div>
            )
          : null
      }
    </nav>
  )
}

export default Navbar
