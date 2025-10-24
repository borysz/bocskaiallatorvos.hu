import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactHome() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kapcsolat</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keressen minket bizalommal bármilyen kérdéssel kapcsolatban!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Cím</h3>
                <p className="text-gray-600">4241 Bocskaikert, Debreceni út 25</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600"><a href="tel:+36302390940" title="+36 30 239 0940">+36 30 239 0940</a></p>
                <p className="text-sm text-gray-500 mt-1">Sürgősségi: +36 30 555 5678</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@bocskaiallatorvos.hu</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
            <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Nyitvatartás</h3>
              <div className="space-y-2 text-gray-600">
                <p>Hétfő - Péntek: 8:00 - 19:00</p>
                <p>Szombat: 9:00 - 12:00</p>
                <p>Vasárnap: Zárva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
