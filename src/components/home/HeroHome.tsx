import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCms } from '../../context/CmsContext';


export default function HeroHome() {

  const { pages, error } = useCms();

  //if (loading) return <p>Betöltés...</p>;
  if (error) return <p>Hiba: {error}</p>;

  const introductionPage = pages.find((p) => p.slug === "bemutatkozas");

 
    return (
        <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-brand to-stone-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center bg-brandHero text-stlone-950 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Heart className="w-4 h-4 mr-2" />
                            Professzionális állatorvosi ellátás
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: introductionPage?.title.rendered || "" }} />

                        <p className="text-lg text-gray-600 mb-8 max-w-xl"
                            dangerouslySetInnerHTML={{ __html: introductionPage?.content.rendered || "" }} />

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/kapcsolat"
                                className="bg-brandButton hover:bg-brandButtonHover text-black px-8 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-xl text-center"
                            >
                                Kapcsolat
                            </Link>
                            <Link
                                to="/szolgaltatasok"
                                className="bg-white hover:bg-lime-50 text-black px-8 py-3 rounded-lg font-medium transition border-2 border-brandButton text-center"
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
