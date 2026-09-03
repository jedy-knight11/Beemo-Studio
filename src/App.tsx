import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { PortfolioPage } from './pages/Portfolio';
import { ServicesPage } from './pages/ServicesPage';
import { ScrollToTopButton } from './components/ScrollToTopButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If document is already complete, never show loader
    if (document.readyState === 'complete') {
      return;
    }

    // Only show loader if initial resource loading takes longer than 600ms
    const slowLoadTimer = setTimeout(() => {
      if (document.readyState !== 'complete') {
        setIsLoading(true);
      }
    }, 600);

    const handleLoad = () => {
      clearTimeout(slowLoadTimer);
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      clearTimeout(slowLoadTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router basename="/Beemo-Studio">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#083eeb] selection:text-white overflow-x-clip w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}
