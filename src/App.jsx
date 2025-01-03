import About from './sections/About';
import Reviews from './sections/Reviews';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Reviews /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
