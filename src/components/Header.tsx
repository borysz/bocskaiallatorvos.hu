import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onAdminClick: () => void;
}

export default function Header({ onAdminClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Stethoscope className="w-8 h-8 text-teal-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bocskai Állatorvos</h1>
              <p className="text-sm text-gray-600">Állatorvosi Rendelő</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition ${isActive('/') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Főoldal
            </Link>
            <Link
              to="/szolgaltatasok"
              className={`transition ${isActive('/szolgaltatasok') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Szolgáltatások
            </Link>
            <Link
              to="/rolunk"
              className={`transition ${isActive('/rolunk') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Rólunk
            </Link>
            <Link
              to="/arlista"
              className={`transition ${isActive('/arlista') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Árlista
            </Link>
            <Link
              to="/velemenyek"
              className={`transition ${isActive('/velemenyek') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Vélemények
            </Link>
            <Link
              to="/kapcsolat"
              className={`transition ${isActive('/kapcsolat') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Kapcsolat
            </Link>
            <button
              onClick={onAdminClick}
              className="text-xs text-gray-400 hover:text-teal-600 transition"
            >
              Admin
            </button>
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
              to="/"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Főoldal
            </Link>
            <Link
              to="/szolgaltatasok"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/szolgaltatasok') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Szolgáltatások
            </Link>
            <Link
              to="/rolunk"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/rolunk') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Rólunk
            </Link>
            <Link
              to="/arlista"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/arlista') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Árlista
            </Link>
            <Link
              to="/velemenyek"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/velemenyek') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Vélemények
            </Link>
            <Link
              to="/kapcsolat"
              onClick={closeMenu}
              className={`block w-full text-left transition py-2 ${isActive('/kapcsolat') ? 'text-teal-600 font-medium' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Kapcsolat
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
