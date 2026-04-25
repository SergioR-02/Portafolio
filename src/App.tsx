import { useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import Header from './components/template/Header';
import Hero from './components/template/Hero';
import AboutMe from './components/template/AboutMe';   // above fold → eager
import StarsBackground from './components/organisms/StarsBackground';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Below-fold sections — loaded only after the initial paint
const Experience = lazy(() => import('./components/template/Experience'));
const Projects   = lazy(() => import('./components/template/Projects'));
const Skills     = lazy(() => import('./components/template/Skills'));
const Contact    = lazy(() => import('./components/template/Contact'));
const Footer     = lazy(() => import('./components/template/Footer'));

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
      <Suspense fallback={<div className="h-96" />}>
        <Experience />
        <Projects />
        <Skills />
      </Suspense>
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
              <Route path="/contact" element={<Suspense fallback={<div className="min-h-screen" />}><Contact /></Suspense>} />
            </Routes>
          </main>
          <Suspense fallback={null}><Footer /></Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
