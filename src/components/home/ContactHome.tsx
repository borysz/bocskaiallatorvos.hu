import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useCms } from '../../context/CmsContext';

export default function ContactHome() {
  const { pages, error } = useCms();

  if (error) return <p>Hiba: {error}</p>;

  const contactPage = pages.find((p) => p.slug === "kapcsolat-adatok");

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" 
            dangerouslySetInnerHTML={{ __html: contactPage?.title.rendered  || ""}} />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" 
            dangerouslySetInnerHTML={{ __html: contactPage?.content.rendered  || ""}} />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-brandButton w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Cím</h3>
                <p className="text-gray-600" 
                  dangerouslySetInnerHTML={{ __html: contactPage?.meta?.address?.[0]  || ""}} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-brandButton w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Telefon</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:${contactPage?.meta?.phone?.[0] || ""}`}
                      title={contactPage?.meta?.phone?.[0] || ""}
                    >
                      {contactPage?.meta?.phone?.[0] || ""}
                    </a>
                  </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <div className="bg-brandButton w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">{contactPage?.meta?.email?.[0] || ""}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-4">
            <div className="bg-brandButton w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Nyitvatartás</h3>
              <div className="space-y-2 text-gray-600" 
                dangerouslySetInnerHTML={{ __html: contactPage?.meta?.opening?.[0]  || ""}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
