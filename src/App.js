import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates /> 
        <Contact />
      </main>
      <footer>
        <p>© Thangaraj M. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
