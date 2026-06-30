import About from "@/components/About";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-6">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <Projects />
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
    </>
  )
}

export default Home;