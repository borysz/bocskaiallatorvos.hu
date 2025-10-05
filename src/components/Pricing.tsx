import { DollarSign } from 'lucide-react';

const vaccinations = {
  title: 'Oltások',
  validFrom: '2024.11.04-tól visszavonásig',
  categories: [
    {
      name: 'Kutyák',
      items: [
        { name: 'Veszettség elleni oltás', price: '7.000 Ft/db' },
        { name: 'Veszettség + kombinált oltás', price: '13.000 Ft/db' },
        { name: 'Parvo vírus elleni oltás', price: '9.000 Ft/db' },
        { name: 'Parvo + szopornyica elleni oltás', price: '13.000 Ft/db' },
        { name: 'Kombinált oltás', price: '12.000 Ft/db' },
        { name: 'Kennel köhögés elleni oltás', price: '12.500 Ft/db' },
      ],
    },
    {
      name: 'Macskák',
      items: [
        { name: 'Kis-kombinált oltás', price: '9.000 Ft/db' },
        { name: 'Nagy-kombinált oltás', price: '14.000 Ft/db' },
      ],
    },
    {
      name: 'Nyulak',
      items: [
        { name: 'Kombinált oltás', price: '9.000 Ft/db' },
      ],
    },
  ],
};

const generalFees = {
  title: 'Általános díjak',
  validFrom: '2024.11.04-től visszavonásig',
  categories: [
    {
      name: 'Útlevél és Microchip',
      items: [
        { name: 'Útlevél kiállítás', price: '13.000 Ft/db' },
        { name: 'Microchip beültetés (normál)', price: '9.000 Ft/db' },
        { name: 'Microchip beültetés (mini)', price: '10.000 Ft/db' },
      ],
    },
    {
      name: 'Vizsgálatok',
      items: [
        { name: 'Alapdíj', price: '10.000 Ft/alkalom' },
        { name: 'Kontroll', price: '5.000 Ft/alkalom' },
      ],
    },
    {
      name: 'Konzultációk',
      items: [
        { name: 'Negyedóra', price: '6.000 Ft/alkalom' },
        { name: 'Félóra', price: '11.000 Ft/alkalom' },
        { name: 'Egy óra', price: '20.000 Ft/alkalom' },
        { name: 'Egy óra fölött', price: '25.000 Ft/alkalom' },
      ],
    },
    {
      name: 'Utókezelés',
      items: [
        { name: 'Utókezelés', price: '6.000 Ft/alkalom' },
      ],
    },
  ],
};

const tests = {
  title: 'Tesztek',
  validFrom: '2024.11.04-tól visszavonásig',
  categories: [
    {
      name: 'Laboratóriumi tesztek',
      items: [
        { name: 'Szívférgesség szűrése (Bionote)', price: '7.500 Ft/alkalom' },
        { name: 'Szívférgesség szűrése (IDEXX)', price: '13.000 Ft/alkalom' },
        { name: 'Microfilariosis (vastagcsepp vizsgálat)', price: '1.500 Ft/alkalom' },
        { name: 'FeLV-FIV teszt (Bionote)', price: '8.500 Ft/alkalom' },
        { name: 'Parvo teszt (Bionote)', price: '8.500 Ft/alkalom' },
        { name: 'Giardia teszt (Bionote)', price: '8.500 Ft/alkalom' },
        { name: 'Giardia teszt (IDEXX)', price: '9.500 Ft/alkalom' },
      ],
    },
  ],
};

const dermatology = {
  title: 'Bőrgyógyászati szakrendelés díjak',
  validFrom: '2025.09.01-tól visszavonásig',
  categories: [
    {
      name: 'Szakrendelési díjak',
      items: [
        { name: 'Bőrgyógyászati szakrendelés (fél óra alatt)', price: '25.000 Ft/alkalom' },
        { name: 'Bőrgyógyászati szakrendelés (egy óra alatt)', price: '35.000 Ft/alkalom' },
        { name: 'Bőrgyógyászati szakrendelés (egy óra fölött)', price: '45.000 Ft/alkalom' },
      ],
    },
    {
      name: 'Bőrgyógyászati kontroll',
      items: [
        { name: '15 perc alatt', price: '8.500 Ft/alkalom' },
        { name: '30 perc alatt', price: '12.500 Ft/alkalom' },
        { name: '30 perc fölött', price: '20.000 Ft/alkalom' },
      ],
    },
    {
      name: 'Vizsgálatok',
      items: [
        { name: 'Kenet készítése és vizsgálata helyben (1-2 minta)', price: '5.000 Ft' },
        { name: 'Kenet készítése és vizsgálata helyben (3 vagy több minta)', price: '7.500 Ft' },
        { name: 'Fülészeti vizsgálat (30 perc alatt)', price: '15.000 Ft' },
        { name: 'Fülészeti vizsgálat (30 perc fölött)', price: '25.000 Ft' },
      ],
    },
  ],
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Árlista</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rendelőnk díjszabása átlátható és versenyképes. Az alábbi árak tájékoztató jellegűek.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-teal-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{vaccinations.title}</h3>
                <p className="text-sm text-gray-600">Érvényes: {vaccinations.validFrom}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vaccinations.categories.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow">
                  <h4 className="text-xl font-bold text-teal-600 mb-4">{category.name}</h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start">
                        <span className="text-gray-700 flex-1">{item.name}</span>
                        <span className="text-gray-900 font-semibold ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{generalFees.title}</h3>
                <p className="text-sm text-gray-600">Érvényes: {generalFees.validFrom}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generalFees.categories.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow">
                  <h4 className="text-xl font-bold text-blue-600 mb-4">{category.name}</h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start">
                        <span className="text-gray-700 flex-1">{item.name}</span>
                        <span className="text-gray-900 font-semibold ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{tests.title}</h3>
                <p className="text-sm text-gray-600">Érvényes: {tests.validFrom}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow max-w-3xl mx-auto">
              {tests.categories.map((category, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-bold text-green-600 mb-4">{category.name}</h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start">
                        <span className="text-gray-700 flex-1">{item.name}</span>
                        <span className="text-gray-900 font-semibold ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{dermatology.title}</h3>
                <p className="text-sm text-gray-600">Érvényes: {dermatology.validFrom}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dermatology.categories.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow">
                  <h4 className="text-xl font-bold text-purple-600 mb-4">{category.name}</h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start">
                        <span className="text-gray-700 flex-1 text-sm">{item.name}</span>
                        <span className="text-gray-900 font-semibold ml-4 text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
          <p className="text-gray-700 text-center">
            <strong>Megjegyzés:</strong> Az itt feltüntetett árak tájékoztató jellegűek.
            A végleges ár az állatunk állapotától és a szükséges kezelésektől függően változhat.
            Részletes árajánlatért kérjük, vegye fel velünk a kapcsolatot!
          </p>
        </div>
      </div>
    </section>
  );
}
