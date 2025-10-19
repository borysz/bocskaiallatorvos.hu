import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Kapcsolat</h1>
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
                <p className="text-gray-600">4241 Bocskaikert, Debreceni út 25</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Telefon</h3>
                <p className="text-gray-600"><a href="tel:+36302390940" title="+36 30 239 0940">+36 30 239 0940</a></p>
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
                  <p>Hétfő - Péntek: 8:00 - 19:00</p>
                  <p>Szombat: 9:00 - 12:00</p>
                  <p>Vasárnap: Zárva</p>
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

        {/* Google Térkép */}
        <section id="terkep" className="mt-16 w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Térkép</h2>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86015.92644958379!2d21.577215635094642!3d47.64561149998238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47476d13b3c85163%3A0x19d5440677c3b3a3!2zQm9jc2thaSDDgWxsYXRlZ8Opc3pzw6lnw7xneWkgQ2VudHJ1bQ!5e0!3m2!1shu!2shu!4v1760900241791!5m2!1shu!2shu"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

      </div>
    </section>
  );
}
