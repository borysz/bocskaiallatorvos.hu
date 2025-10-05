import { Stethoscope, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Stethoscope className="w-8 h-8 text-teal-400" />
              <div>
                <h3 className="text-xl font-bold">Bocskai Állatorvos</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professzionális állatorvosi ellátás több mint 15 éve.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Gyors linkek</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-teal-400 transition">Főoldal</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">Szolgáltatások</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition">Rólunk</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Kapcsolat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Elérhetőség</h4>
            <ul className="space-y-2 text-gray-400">
              <li>1146 Budapest</li>
              <li>Bocskai utca 20.</li>
              <li>+36 1 555 1234</li>
              <li>info@bocskaiallatorvos.hu</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kövessen minket</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bocskai Állatorvosi Rendelő. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
