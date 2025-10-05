import { useState } from 'react';
import { LogOut, FileText, MessageSquare, Settings, DollarSign } from 'lucide-react';

interface AdminPanelProps {
  onExit: () => void;
}

export default function AdminPanel({ onExit }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={onExit}
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Kilépés</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab('content')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                activeTab === 'content'
                  ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Tartalom kezelés</span>
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                activeTab === 'pricing'
                  ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span>Árlista</span>
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Vélemények</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                activeTab === 'settings'
                  ? 'bg-teal-50 text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Beállítások</span>
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Tartalom kezelés</h2>
                <p className="text-gray-600 mb-6">
                  Itt kezelheti a weboldal tartalmát, szolgáltatásokat és információkat.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    <strong>Megjegyzés:</strong> Az adatbázis kapcsolat konfigurálása szükséges a teljes funkcionalitáshoz.
                    Az adatbázis segítségével dinamikusan kezelheti majd a szolgáltatásokat, véleményeket és egyéb tartalmakat.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Árlista kezelése</h2>
                <p className="text-gray-600 mb-6">
                  Itt kezelheti a rendelő árlistáját, hozzáadhat új szolgáltatásokat és módosíthatja az árakat.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Oltások</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Veszettség elleni oltás (kutya)</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-900 font-semibold">7.000 Ft/db</span>
                          <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">Szerkeszt</button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Nagy-kombinált oltás (macska)</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-900 font-semibold">14.000 Ft/db</span>
                          <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">Szerkeszt</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-teal-600 hover:text-teal-700 font-medium text-sm">+ Új oltás hozzáadása</button>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Általános díjak</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Útlevél kiállítás</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-900 font-semibold">13.000 Ft/db</span>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Szerkeszt</button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span className="text-gray-700">Vizsgálat alapdíj</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-900 font-semibold">10.000 Ft/alkalom</span>
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Szerkeszt</button>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm">+ Új tétel hozzáadása</button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800">
                      <strong>Megjegyzés:</strong> Az adatbázis kapcsolat konfigurálása szükséges a teljes árlistakezelő funkcionalitáshoz.
                      Az adatbázis segítségével dinamikusan kezelheti majd az árakat, kategóriákat és érvényességi időszakokat.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Vélemények kezelése</h2>
                <p className="text-gray-600 mb-6">
                  Itt kezelheti a Google és Facebook véleményeket.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    <strong>Megjegyzés:</strong> Az adatbázis kapcsolat konfigurálása szükséges a vélemények tárolásához és kezeléséhez.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Beállítások</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Rendelő neve</label>
                    <input
                      type="text"
                      defaultValue="Bocskai Állatorvos"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email cím</label>
                    <input
                      type="email"
                      defaultValue="info@bocskaiallatorvos.hu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefonszám</label>
                    <input
                      type="tel"
                      defaultValue="+36 1 555 1234"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition">
                    Mentés
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
