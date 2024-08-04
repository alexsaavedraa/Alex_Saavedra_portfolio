import React, { useRef, useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackgroundT from './components/backgroundT/BackgroundT';
import useVisibleComponent from './components/backgroundT/visable_comp'; // Adjust the import path as needed
import trackVisitor from './components/Metrics/trackVisitors'
import useHoveredComponent from './components/Metrics/hovered_comp'
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  useEffect(() => {
    // This code will run only once when the component mounts
    trackVisitor(["Load", 0]);
  }, []);


  // Create references for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Use the custom hook to get the visible component
  const visibleComponent = useVisibleComponent([aboutRef, projectsRef, skillsRef, contactRef]);
  const hoveredComp = useHoveredComponent([aboutRef, projectsRef, skillsRef, contactRef]);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <section ref={aboutRef} data-component="About">
          <About />
        </section>
        <section ref={projectsRef} data-component="Projects">
          <Projects />
        </section>
        <section ref={skillsRef} data-component="Skills">
          <Skills />
        </section>
        <section ref={contactRef} data-component="Contact">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
      <BackgroundT visibleComponent={visibleComponent} />
      
    </div>
  );
};

export default App;
