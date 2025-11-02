import { useEffect, useState } from "react";
//import { Link } from 'react-router-dom';
import { useCms } from "../context/CmsContext";
import { WPPosts } from "../interfaces/WordpressInterfaces";
import { Loader2 } from "lucide-react";

const FAQPage = () => {
  const [faqs, setFaqs] = useState<WPPosts[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { posts, error } = useCms();

  useEffect(() => {
    async function fetchFaqs() {
      try {
        setLoading(true);
        if (error) throw error;

        const faqs = posts.filter(item => item.categories.includes(9));
        setFaqs(faqs);
      } catch (err) {
        console.error('Hiba a FAQ bejegyzések lekérése közben:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);



  //const faqs = posts.filter(item => item.categories.includes(9));

  /*const faqs = [
    {
      question: "Milyen állatokat fogad a rendelő?",
      answer: "Kutyákat, macskákat, nyulakat és kisebb háziállatokat fogadunk.",
    },
    {
      question: "Szükséges időpontot foglalni?",
      answer: "Igen, javasoljuk az előzetes időpontfoglalást telefonon vagy online.",
    },
    {
      question: "Van ügyeleti ellátás?",
      answer: "Igen, sürgős esetben hívja a megadott telefonszámot az ügyeleti információkért.",
    },
    {
      question: "Hol található a rendelő?",
      answer: (
        <>
          Rendelőnk címe: 4241 Bocskaikert, Debreceni út 25<br />
          Részletes térképet talál a{" "}
          <Link to="/kapcsolat#terkep" className="text-brandButton underline hover:text-brandButtonHover">
            kapcsolat
          </Link>{" "}
          oldalon.
        </>
      ),
    },
    {
      question: "Fogadnak bankkártyát?",
      answer: "Igen, minden rendelőnkben lehet bankkártyával fizetni.",
    },
  ]; */

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">GYIk elemek betöltése...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-red-600 font-medium mb-2">Hiba a GYIK bejegyzéseinek betöltése közben! </p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-brand to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Gyakran Ismételt Kérdések
          </h1>
        </div>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.title.rendered}
                </span>
                <span className="text-brandButton text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p
                  className="faq-answer mt-3 text-gray-600 transition-all duration-300"
                  dangerouslySetInnerHTML={{ __html: faq.content.rendered || "" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
