import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { SEO } from './components/SEO';
import LoadingScreen from './components/LoadingScreen';

const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const FloatingElements = lazy(() => import('./components/FloatingElements'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <SEO />
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-100 to-zinc-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-zinc-950 transition-colors duration-300">
            <ScrollProgress />
            <Suspense fallback={null}>
              <ParticleBackground />
              <FloatingElements />
            </Suspense>
            <Header />
            <main className="relative z-10">
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            <BackToTop />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;