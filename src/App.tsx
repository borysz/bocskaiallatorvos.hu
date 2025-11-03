import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FaqPage';
import { ScrollToHash } from './components/ScrollToHash';
import OurTeamPage from './pages/OurTeamPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ScrollToTop from './components/ScrollToTop';
import SzechenyiBanner from './components/SzechenyiBanner';
import PalyazatokPage from './pages/PalyazatokPage';
import PricelistPage from './pages/PricelistPage';
import GalleryPage from './pages/GalleryPage';
import { BlogList } from './pages/BlogList';
import { BlogDetail } from './pages/BlogDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rolunk" element={<OurTeamPage />} />
            <Route path="/arlista" element={<PricelistPage />} />
            <Route path="/szolgaltatasok" element={<ServicesPage />} />
            <Route path="/szolgaltatasok/:slug" element={<ServiceDetailPage />} />
            <Route path="/palyazatok/:slug" element={<PalyazatokPage />} />
            <Route path="/kapcsolat" element={<ContactPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/gyik" element={<FAQPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <SzechenyiBanner />
    </BrowserRouter>
  );
}


export default App;
