import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/template/Header';
import Hero from './components/template/Hero';
import About from './components/template/Experience';
import Projects from './components/template/Projects';
import Skills from './components/template/Skills';
import Contact from './components/template/Contact';
import Footer from './components/template/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
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