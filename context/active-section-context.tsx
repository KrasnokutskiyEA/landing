'use client'

import type { TSection } from '@/lib/types'
import React, { useState, createContext, useContext } from 'react'

interface IActiveSectionContextProviderProps {
  children: React.ReactNode
}

interface IActiveSectionContextType {
  activeSection: TSection
  setActiveSection: React.Dispatch<React.SetStateAction<TSection>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<IActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children
}: IActiveSectionContextProviderProps): React.ReactElement {
  const [activeSection, setActiveSection] = useState<TSection>({ name: 'Home', hash: '#home' })
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(): IActiveSectionContextType {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
