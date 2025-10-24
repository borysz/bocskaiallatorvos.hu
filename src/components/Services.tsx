import { Stethoscope, Syringe, Scissors, HeartPulse, Shield, Pill } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Általános vizsgálat',
    description: 'Teljes körű egészségügyi vizsgálat és diagnosztika tapasztalt szakemberek által.',
  },
  {
    icon: Syringe,
    title: 'Oltások',
    description: 'Kötelező és ajánlott védőoltások minden korú állat számára, naprakész oltási nyilvántartással.',
  },
  {
    icon: Scissors,
    title: 'Sebészeti beavatkozások',
    description: 'Modern eszközökkel felszerelt műtő, ivartalanítás és egyéb sebészeti eljárások.',
  },
  {
    icon: HeartPulse,
    title: 'Sürgősségi ellátás',
    description: 'Azonnali segítség sürgős esetekben, gyors diagnózis és hatékony kezelés.',
  },
  {
    icon: Shield,
    title: 'Megelőzés',
    description: 'Parazitaellenes kezelések, fogászati ellátás és preventív egészségügyi tanácsadás.',
  },
  {
    icon: Pill,
    title: 'Gyógyszerkiadás',
    description: 'Helyben elérhető gyógyszerek és táplálék-kiegészítők kedvence számára.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Szolgáltatásaink</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komplett állatorvosi ellátást biztosítunk kedvenceinek, a megelőzéstől a gyógyításig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-brand to-stone-50 p-8 rounded-xl hover:shadow-xl transition group"
            >
              <div className="bg-brandButton w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
