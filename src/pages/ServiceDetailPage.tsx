import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { servicesMock as services }  from '../components/services/ServicesMock';


export default function ServiceDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((item) => item.slug === slug);
    console.log(service);
    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Szolgáltatás nem található
                        </h1>
                        <p className="text-gray-600 mb-6">
                            A keresett szolgáltatás nem létezik vagy már nem elérhető.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Vissza a szolgáltatásokhoz
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Vissza a szolgáltatásokhoz
                    </Link>
                </div>
            </header>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative h-96">
                        <img
                            src={service.image_url}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm">
                                {service.category && (
                                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <Tag className="w-4 h-4" />
                                        {service.category}
                                    </div>
                                )}
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(service.created_at).toLocaleDateString('hu-HU')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-emerald-600 pl-6 italic">
                                {service.description}
                            </p>

                            {service.detailed_content && (
                                <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
                                    {service.detailed_content}
                                </div>
                            )}
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="bg-emerald-50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                                    Időpontfoglalás
                                </h3>
                                <p className="text-emerald-800 mb-4">
                                    Szeretne időpontot foglalni erre a szolgáltatásra? Lépjen kapcsolatba velünk!
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="tel:+36301234567"
                                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                                    >
                                        Telefonos időpontfoglalás
                                    </a>
                                    <a
                                        href="mailto:info@allatorvos.hu"
                                        className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                                    >
                                        Email küldése
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
