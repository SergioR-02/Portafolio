import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/template/Header';
import Hero from './components/template/Hero';
import AboutMe from './components/template/AboutMe';
import About from './components/template/Experience';
import Projects from './components/template/Projects';
import Skills from './components/template/Skills';
import Contact from './components/template/Contact';
import Footer from './components/template/Footer';
import StarsBackground from './components/organisms/StarsBackground';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

const LandingSections: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="relative overflow-hidden isolate">
      <StarsBackground theme={theme} />
      <AboutMe />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <LandingSections />
                </>
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
