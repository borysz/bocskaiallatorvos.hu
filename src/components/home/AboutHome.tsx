import { Award, Clock, Users, Heart } from 'lucide-react';
import { useCms } from '../../context/CmsContext';


const stats = [
    { icon: Award, value: '15+', label: 'Év tapasztalat' },
    { icon: Users, value: '2000+', label: 'Elégedett ügyfél' },
    { icon: Heart, value: '5000+', label: 'Kezelt állat' },
    { icon: Clock, value: '24/7', label: 'Elérhetőség' },
];



export default function AboutHome() {

     const { pages, media, error } = useCms();
   
     //if (loading) return <p>Betöltés...</p>;
     if (error) return <p>Hiba: {error}</p>;
   
     const aboutPages = pages.filter((p) => ["rolunk", "kepzett-orvosok"].includes(p.slug));
     const heroImage = media.find((m) => m.slug === "bocskaiallatorvos-udvozles");

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-brand to-stone-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {heroImage && <img className="rounded-2xl shadow-2xl w-full h-auto" 
                        src={heroImage.guid.rendered} alt={heroImage.caption.rendered} />}                        
                    </div>
                    <div>
                        {aboutPages.map((page) => {
                            const replacedContent = page.content.rendered
                                .replace(/<p>/g, '<p class="text-lg text-gray-600 leading-relaxed mb-6">')
                            /*.replace(/<span>/g,'<span class="text-lg text-gray-800 mb-6">')*/;

                            return (
                                <div key={page.slug} className='mb-6'>
                                    <h2
                                        className="text-4xl font-bold text-gray-800 mb-6"
                                        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                                    />
                                    <div
                                        dangerouslySetInnerHTML={{ __html: replacedContent }}
                                    />
                                </div>
                            );
                        })}

                        <div className="grid grid-cols-2 gap-6 mt-6">
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
