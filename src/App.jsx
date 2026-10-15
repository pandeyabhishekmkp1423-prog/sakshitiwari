import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { HomePage, AboutPage, WorkPage, MediaKitPage } from './components/Pages';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper text-ink font-sans selection:bg-rose selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main className="page-enter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/media-kit" element={<MediaKitPage />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
