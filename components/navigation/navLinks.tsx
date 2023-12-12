import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import type { TLinks, TSection } from '@/lib/types'

const NavLinks = ({
  links,
  activeSection,
  className
}: {
  links: TLinks
  activeSection: TSection
  className: string
}): React.ReactElement => {
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.hash}
            className={
              clsx(
                'block rounded py-2 pl-3 pr-4 text-xl hover:text-orange-400 md:p-0 duration-700',
                link.name === activeSection.name ? 'text-orange-400' : 'text-white'
              )
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
