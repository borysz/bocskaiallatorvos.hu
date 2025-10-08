import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (isAdminMode) {
    return <AdminPanel onExit={() => setIsAdminMode(false)} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header onAdminClick={() => setIsAdminMode(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/szolgaltatasok" element={<ServicesPage />} />
            <Route path="/rolunk" element={<AboutPage />} />
            <Route path="/arlista" element={<PricingPage />} />
            <Route path="/velemenyek" element={<ReviewsPage />} />
            <Route path="/kapcsolat" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
