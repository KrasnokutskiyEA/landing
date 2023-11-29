import React from 'react'
import NavLink from './navLink'
import type { TLinks } from '@/lib/types'

const MenuOverlay = ({ links }: { links: TLinks }): React.ReactElement => {
  return (
    <ul className='flex flex-col items-center bg-gray-900 py-4 shadow-[0_50vh_0_50vh_rgba(0,0,0,0.6)]'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.hash} title={link.name} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
