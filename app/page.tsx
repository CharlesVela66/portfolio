import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Home;