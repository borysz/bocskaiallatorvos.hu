import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Stethoscope className="w-8 h-8 text-brandButton" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bocskai <span className="hidden sm:inline">Állategészségügyi Centrum</span></h1>
              <span className="hidden sm:inline">Állatorvosi Rendelő</span>
              <span className="inline sm:hidden">Állategészségügyi Centrum</span>
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

            <Link
              to="/arlista"
              className={`transition ${isActive('/arlista') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Árlista
            </Link>

            <Link
              to="/galeria"
              className={`transition ${isActive('/galeria') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Galéria
            </Link>

            <Link
              to="/kapcsolat"
              className={`transition ${isActive('/kapcsolat') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Kapcsolat
            </Link>

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

            <Link
              to="/arlista"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/arlista') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Árlista
            </Link>

            <Link
              to="/galeria"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/galeria') ? 'text-brandButton font-medium' : 'text-gray-700 hover:text-brandButtonHover'}`}
            >
              Galéria
            </Link>

            <div>
              <p className="text-gray-700 font-medium mt-2">Pályázatok</p>
              <div className="ml-4 space-y-1">
                <Link to="/palyazatok/ginop-2017-01597" onClick={closeMenu} className="block text-gray-600 hover:text-brandButtonHover">GINOP-2017-01597</Link>
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
