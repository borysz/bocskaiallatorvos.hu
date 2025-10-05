import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kapcsolat</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keressen minket bizalommal bármilyen kérdéssel kapcsolatban!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Cím</h3>
                <p className="text-gray-600">1146 Budapest, Bocskai utca 20.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600">+36 1 555 1234</p>
                <p className="text-sm text-gray-500 mt-1">Sürgősségi: +36 30 555 5678</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@bocskaiallatorvos.hu</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Nyitvatartás</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Hétfő - Péntek: 8:00 - 18:00</p>
                  <p>Szombat: 9:00 - 14:00</p>
                  <p>Vasárnap: Zárva</p>
                  <p className="text-teal-600 font-medium mt-2">Sürgősség: 0-24</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Üzenet küldése</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Név</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Az Ön neve"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="email@pelda.hu"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="+36 30 123 4567"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Üzenet</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Írja ide üzenetét..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-xl"
              >
                Küldés
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
