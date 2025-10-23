import AboutHome from '../components/home/AboutHome';
import ContactHome from '../components/home/ContactHome';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import HeroHome from '../components/home/HeroHome';

export default function HomePage() {
  return (
    <div>
        <HeroHome />
        <Services />
        <AboutHome />
        <Reviews />
        <ContactHome />
    </div>
  );
}
