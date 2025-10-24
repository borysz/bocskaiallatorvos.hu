import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
/*import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact'; */
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FaqPage';
import { ScrollToHash } from './components/ScrollToHash';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import OurTeamPage from './pages/OurTeamPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (isAdminMode) {
    return <AdminPanel onExit={() => setIsAdminMode(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rolunk" element={<OurTeamPage />} />
            <Route path="/szolgaltatasok" element={<ServicesPage />} />
            <Route path="/szolgaltatasok/:slug" element={<ServiceDetailPage />} />
            <Route path="/kapcsolat" element={<ContactPage />} />
            <Route path="/gyik" element={<FAQPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

    /*
    <Route path="/rolunk" element={<AboutPage />} />
    <Route path="/arlista" element={<PricingPage />} />
    <Route path="/velemenyek" element={<ReviewsPage />} />
    <Route path="/kapcsolat" element={<ContactPage />} />
    */

    /*<div className="min-h-screen bg-white">
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>*/
  );
}


export default App;
