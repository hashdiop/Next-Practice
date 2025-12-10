import Hero from "./_components/Hero"
import About from "./_components/About"
import Projects from "./_components/Projects"
import Skills from "./_components/Skills"
import Contact from "./Contact"
function Home () {
  return (
    <div className="bg-blue-100">
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>  
    </div>
  )
}

export default Home