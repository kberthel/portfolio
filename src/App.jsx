import './styles.css';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const isMaintenance = true;

export default function App() {
  if (isMaintenance) {
    return (
      <main style={{ textAlign: 'center', marginTop: '40vh' }}>
        <h1>kabeka.studio</h1>
        <p>Under construction — updating soon ✨</p>
      </main>
    );
  }

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
