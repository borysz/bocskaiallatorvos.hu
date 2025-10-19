import About from '../components/About';
import Hero from '../components/Hero';
import ContactHome from '../components/home/ContactHome';
import Reviews from '../components/Reviews';
import Services from '../components/Services';

export default function HomePage() {
  return (
    <div>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <ContactHome />
    </div>
  );
}
