import React from 'react'
import { clsx } from 'clsx'
import { Burger } from '../svgs'

export default function burgerBtn({
  isNavbarOpen,
  onToggleMenu
}: {
  isNavbarOpen: boolean
  onToggleMenu: () => void
}): React.ReactElement {
  return (
    <button
      className={clsx('burger-menu-btn block md:hidden', isNavbarOpen && 'opened')}
      aria-expanded={isNavbarOpen}
      aria-label='Navigation Menu'
      onClick={onToggleMenu}
    >
      <Burger className='line-outer line-inner' />
    </button>
  )
}
