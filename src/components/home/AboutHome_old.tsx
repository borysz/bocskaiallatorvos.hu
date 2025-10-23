import { Award, Clock, Users, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';


const stats = [
    { icon: Award, value: '15+', label: 'Év tapasztalat' },
    { icon: Users, value: '2000+', label: 'Elégedett ügyfél' },
    { icon: Heart, value: '5000+', label: 'Kezelt állat' },
    { icon: Clock, value: '24/7', label: 'Elérhetőség' },
];


// WordPress post típus
interface WPPage {
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    menu_order: number;
}

interface WPMedia {
    guid: { rendered: string };
    caption: { rendered: string };
}

export default function AboutHomeOld() {

    const [pages, setPages] = useState<WPPage[]>([]);
    const [media, setMedia] = useState<WPMedia[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        setLoading(true); // <-- itt már működik
        Promise.all([
            fetch(`${apiUrl}/pages?parent=18&_fields=menu_order,slug,title,content&slug=rolunk,kepzett-orvosok&orderby=menu_order&order=asc`).then((res) => res.json()),
            fetch(`${apiUrl}/media?slug=bocskaiallatorvos-udvozles&_fields=guid,caption`).then((res) => res.json()),
        ])
            .then(([pagesData, mediaData]) => {
                setPages(pagesData);
                setMedia(mediaData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [apiUrl]);

    if (loading) return <div>Betöltés...</div>;
    if (error) return <div>Hiba: {error.message}</div>;

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {media.map((mediaItem) => (
                            <img 
                                src={mediaItem.guid.rendered} 
                                alt={mediaItem.caption.rendered} 
                                className="rounded-2xl shadow-2xl w-full h-auto"
                            />
                        ))}                        
                    </div>
                    <div>
                        {pages.map((page) => {
                            // minden <p> taghez hozzáadjuk a class attribútumot
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
