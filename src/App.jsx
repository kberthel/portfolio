import './styles.css';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="container">
        <p>© 2026 KaBéka</p>
      </footer>
    </>
  );
}
