import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (isAdminMode) {
    return <AdminPanel onExit={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={() => setIsAdminMode(true)} />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
