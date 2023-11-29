import React from 'react'

interface ISectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: ISectionHeadingProps): React.ReactElement {
  return (
    <h2 className='mb-8 text-center text-3xl font-medium capitalize'>
      {children}
    </h2>
  )
}
