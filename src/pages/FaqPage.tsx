import { useState } from "react";
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
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
          <Link to="/kapcsolat#terkep" className="text-teal-600 underline hover:text-teal-800">
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
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
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
                    {faq.question}
                </span>
                <span className="text-teal-600 text-2xl">
                    {openIndex === index ? "−" : "+"}
                </span>
                </button>
                {openIndex === index && (
                <p className="mt-3 text-gray-600 transition-all duration-300">
                    {faq.answer}
                </p>
                )}
            </div>
            ))}
        </div>
        </div>
    </section>
  );
};

export default FAQPage;
