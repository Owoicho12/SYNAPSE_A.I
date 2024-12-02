import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Roadmap } from './components/Roadmap/Roadmap';
import { Footer } from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;