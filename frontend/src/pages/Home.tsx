import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Stack from '../components/Stack'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
