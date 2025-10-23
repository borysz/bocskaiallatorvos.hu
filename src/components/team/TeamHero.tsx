import { Heart } from 'lucide-react';

export default function TeamHero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-600 p-4 rounded-full">
              <Heart className="w-12 h-12 text-white" fill="white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Bocskai Állategészségügyi Centrum
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Szívvel-lélekkel a kedvenceiért - professzionális állatorvosi ellátás 2019 óta
          </p>
        </div>
      </div>
    </section>
  );
}
