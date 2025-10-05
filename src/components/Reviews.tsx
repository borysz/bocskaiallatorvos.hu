import { Star, Facebook } from 'lucide-react';

const googleReviews = [
  {
    name: 'Nagy Éva',
    rating: 5,
    text: 'Rendkívül kedves és szakértő csapat! Cicánkat mindig szeretettel fogadják, és látszik, hogy igazán értik a dolgukat.',
    date: '2024. március',
  },
  {
    name: 'Kovács János',
    rating: 5,
    text: 'Profi ellátás, modern eszközök. Kutyánk műtétje tökéletesen sikerült, köszönjük a gondoskodást!',
    date: '2024. február',
  },
  {
    name: 'Szabó Anna',
    rating: 5,
    text: 'Sürgősségi esetben is gyorsan tudtak fogadni minket. Nagyon hálásak vagyunk a segítségért!',
    date: '2024. január',
  },
];

const facebookReviews = [
  {
    name: 'Tóth Péter',
    rating: 5,
    text: 'Legjobb állatorvos a környéken! Mindig időpontot kapunk, és kedvesek mindenkivel.',
    date: '2024. március',
  },
  {
    name: 'Kiss Mária',
    rating: 5,
    text: 'Macskánk oltását itt végeztettük el. Tiszta rendelő, barátságos személyzet. Csak ajánlani tudom!',
    date: '2024. február',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ügyfeleink véleménye</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Büszkék vagyunk arra, hogy elégedett ügyfelek ezrei bíznak bennünk.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-bold text-gray-800">Google Vélemények</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {googleReviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-800">Facebook Vélemények</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">5.0/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facebookReviews.map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-bold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
