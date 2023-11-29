import type { links } from './data'

export type SectionName = (typeof links)[number]['name']
export type SectionHash = (typeof links)[number]['hash']
export type TLinks = ReadonlyArray<{ name: SectionName, hash: SectionHash }>
