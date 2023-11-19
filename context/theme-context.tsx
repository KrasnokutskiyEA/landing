'use client'

import React, { useEffect, useState, createContext, useContext } from 'react'

type Theme = 'light' | 'dark'

interface IThemeContextProviderProps {
  children: React.ReactNode
}

interface IThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContextType | null>(null)

export default function ThemeContextProvider({
  children
}: IThemeContextProviderProps): React.ReactElement {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme

    if (localTheme !== undefined) {
      setTheme(localTheme)

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): IThemeContextType {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }

  return context
}
