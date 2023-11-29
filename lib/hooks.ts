import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName, SectionHash } from './types'

export function useSectionInView(
  sectionName: SectionName,
  sectionHash: SectionHash,
  threshold = 0.75
): { ref: () => void } {
  const { ref, inView } = useInView({
    threshold
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection({ name: sectionName, hash: sectionHash })
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
