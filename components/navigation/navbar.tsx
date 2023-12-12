'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { lock, unlock } from 'tua-body-scroll-lock'
import { MdVolunteerActivism } from 'react-icons/md'
import NavLinks from './navLinks'
import BurgerBtn from './burgerBtn'
import { useWindowWidth } from '@react-hook/window-size'
import debounce from 'lodash/debounce'
import { useActiveSectionContext } from '@/context/active-section-context'
import { links } from '@/lib/data'

const Navbar = (): React.ReactElement => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const { activeSection } = useActiveSectionContext()
  const activeSectionHashRef = useRef('#home')
  const navbarRef = useRef(null)

  useEffect(() => {
    isNavbarOpen ? lock(navbarRef.current) : unlock(navbarRef.current)
  }, [isNavbarOpen])

  useEffect(() => {
    if (windowWidth >= 768) {
      setNavbarOpen(false)
      unlock()
    }
  }, [windowWidth])

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => { handleScroll() }, 200)
    window.addEventListener('scroll', handleDebouncedScroll)
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll)
    }
  }, [])

  useEffect(() => {
    activeSectionHashRef.current = activeSection.hash
  }, [activeSection])

  function handleScroll(): void {
    if (location.hash !== activeSectionHashRef.current) {
      history.pushState(null, '', activeSectionHashRef.current)
    }
  }

  function closeOverlay(): void {
    setNavbarOpen(false)
  }

  function toggleMenu(): void {
    setNavbarOpen(!isNavbarOpen)
  }

  return (
    <nav ref={navbarRef} className='fixed left-0 right-0 top-0 z-10 backdrop-blur-md'>
      <div className='flex flex-wrap items-center justify-between px-8 py-2 bg-black bg-opacity-50'>
        <Link href='/' className='text-2xl font-semibold text-white'>
          <MdVolunteerActivism className='hover:text-orange-400' />
        </Link>

        <BurgerBtn isNavbarOpen={isNavbarOpen} onToggleMenu={toggleMenu} />

        <div id='nav-links-container-desktop' className='menu hidden md:block md:w-auto'>
          <NavLinks
            links={links}
            activeSection={activeSection}
            className='mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0'
          />
        </div>
      </div>

      {
        isNavbarOpen &&
          <div id='nav-links-container-mobile' onClick={closeOverlay} className='h-screen animate-open-menu'>
            <NavLinks
              links={links}
              activeSection={activeSection}
              className='flex flex-col items-center bg-black bg-opacity-50 py-4 shadow-[0_50vh_0_50vh_rgba(0,0,0,0.3)]'
            />
          </div>
      }
    </nav>
  )
}

export default Navbar
