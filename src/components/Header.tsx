import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false); 

  /*const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };*/

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Stethoscope className="w-8 h-8 text-brandButton" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bocskai Állatorvos</h1>
              <p className="text-sm text-gray-600">Állatorvosi Rendelő</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/rolunk"
              className={`transition ${isActive('/rolunk') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Rólunk
            </Link>
            <Link
              to="/szolgaltatasok"
              className={`transition ${isActive('/szolgaltatasok') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Szolgáltatások
            </Link>
            <Link
              to="/blog"
              className={`transition ${isActive('/blog') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Blog
            </Link>

            <Link
              to="/gyik"
              className={`transition ${isActive('/gyik') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              GYIK
            </Link>

            {/* ÚJ LEGÖRDÜLŐ MENÜ */}
            <div className="relative group">
              <button
                className={`transition flex items-center space-x-1 ${
                  isActive('/arlista') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'
                }`}
              >
                <span>Árlista</span>
                <svg
                  className="w-4 h-4 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Legördülő tartalom */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg -mt-1 py-2 w-48">
                <Link
                  to="/arlista/altalanos-dijak"
                  className="block px-4 py-2 text-gray-700 hover:bg-brandSection hover:text-brandButtonHover"
                >
                  Általános díjak
                </Link>
                <Link
                  to="/arlista/oltasok"
                  className="block px-4 py-2 text-gray-700 hover:bg-brandSection hover:text-brandButtonHover"
                >
                  Oltások
                </Link>
                <Link
                  to="/arlista/tesztek"
                  className="block px-4 py-2 text-gray-700 hover:bg-brandSection hover:text-brandButtonHover"
                >
                  Tesztek
                </Link>
                <Link
                  to="/arlista/borgyogyaszat"
                  className="block px-4 py-2 text-gray-700 hover:bg-brandSection hover:text-brandButtonHover"
                >
                  Bőrgyógyászat
                </Link>
                <Link
                  to="/arlista/endoszkopia"
                  className="block px-4 py-2 text-gray-700 hover:bg-brandSection hover:text-brandButtonHover"
                >
                  Endoszkópia
                </Link>
              </div>
            </div>

            <Link
              to="/kapcsolat"
              className={`transition ${isActive('/kapcsolat') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Kapcsolat
            </Link>
            {/*<button
              onClick={onAdminClick}
              className="text-xs text-gray-400 hover:text-brandButtonHover transition"
            >
              Admin
            </button>
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-brandButtonHover transition">Rólunk</button>
            */}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {/*<button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-700 hover:text-brandButtonHover transition py-2">Rólunk</button>*/}
            <Link
              to="/rolunk"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/rolunk') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Rólunk
            </Link>
            <Link
              to="/szolgaltatasok"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/szolgaltatasok') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Szolgáltatások
            </Link>

            <Link
              to="/blog"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/blog') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Blog
            </Link>

            <Link
              to="/gyik"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/gyik') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              GYIK
            </Link>

            <div>
              <p className="text-gray-700 font-medium mt-2">Árlista</p>
              <div className="ml-4 space-y-1">
                <Link to="/arlista/altalanos-dijak" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">Általános díjak</Link>
                <Link to="/arlista/oltasok" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">Oltások</Link>
                <Link to="/arlista/tesztek" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">Tesztek</Link>
                <Link to="/arlista/borgyogyaszat" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">Bőrgyógyászat</Link>
                <Link to="/arlista/endoszkopia" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">Endoszkópia</Link>
              </div>
            </div>

            <Link
              to="/kapcsolat"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/kapcsolat') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Kapcsolat
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
