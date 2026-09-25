import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Journey from "../components/Journey"
import Profiles from "../components/Profiles"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Portfolio = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Profiles />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Portfolio