import About from '@/components/about'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
// import SectionDivider from '@/components/section-divider'

export default function Home(): React.ReactElement {
  return (
    <main className='flex flex-col items-center'>
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/*
    <Skills />
    <Experience />
    <Contact />
     */}
    </main>
  )
}
