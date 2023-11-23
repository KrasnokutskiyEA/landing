'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import MenuOverlay from './menuOverlay'

const navLinks = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
]

const Navbar = (): React.ReactElement => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed left-0 right-0 top-0 z-10 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100'>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4'>
        <Link
          href={'/'}
          className='text-2xl font-semibold text-white md:text-5xl'
        >
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
              <button
                onClick={() => {
                  setNavbarOpen(false)
                }}
                className='flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white'
              >
                <LuGraduationCap className='h-5 w-5' />
              </button>
              )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
