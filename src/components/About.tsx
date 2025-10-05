import { Award, Clock, Users, Heart } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Év tapasztalat' },
  { icon: Users, value: '2000+', label: 'Elégedett ügyfél' },
  { icon: Heart, value: '5000+', label: 'Kezelt állat' },
  { icon: Clock, value: '24/7', label: 'Elérhetőség' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/zoli-udvozlo.jpg"
              alt="Rendelő"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Rólunk</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Rendelőnk több mint 15 éve működik, ahol a legmodernebb eszközökkel és
              módszerekkel segítjük kedvencei egészségének megőrzését. Szakembereink folyamatosan
              képzik magukat, hogy a legfrissebb állatorvosi tudást alkalmazzák.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hiszünk abban, hogy minden állat megérdemli a legjobb ellátást. Barátságos
              környezetünkben mindent megteszünk, hogy kedvence és Ön is kényelmesen érezze magát.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <stat.icon className="w-8 h-8 text-teal-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
