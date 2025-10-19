import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Professzionális állatorvosi ellátás
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Gondoskodunk<br />kedvenceiről
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Modern állatorvosi rendelőnkben tapasztalt szakemberek várják kedvenceit.
              Megelőző ellátás, diagnosztika és sürgősségi ellátás egy helyen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/kapcsolat"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-xl text-center"
              >
                Időpontfoglalás
              </Link>
              <Link
                to="/szolgaltatasok"
                className="bg-white hover:bg-gray-50 text-teal-600 px-8 py-3 rounded-lg font-medium transition border-2 border-teal-600 text-center"
              >
                Szolgáltatások
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Állatorvos kedvencekkel"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
