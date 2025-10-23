import { Stethoscope, Users, X } from 'lucide-react';
import { useState } from 'react';

const doctors = [
  {
    name: 'Dr. Fekete Zoltán',
    role: 'Rendelővezető',
    graduation: '2010',
    specialization: 'Kistállat belgyógyászat és lágyszöveti sebészet',
    isLeader: true,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Dr. Fekete Zoltán 2010-ben szerezte meg állatorvosi diplomáját, és azóta elkötelezetten dolgozik a kistállatok egészségéért. Rendelővezetőként nemcsak szakmai tudásával, hanem empatikus személyiségével is hozzájárul ahhoz, hogy minden állat a lehető legjobb ellátásban részesüljön. Szakterülete a kistállat belgyógyászat és a lágyszöveti sebészet, ahol évek óta szerzett tapasztalatai révén számos összetett esettel foglalkozott sikeresen. Hisz abban, hogy a megelőzés és a korai diagnosztika kulcsfontosságú az állatok egészségének megőrzésében. Szabadidejében szívesen vesz részt szakmai konferenciákon, hogy naprakész tudással szolgálhassa a hozzá forduló állatgazdákat. Számára minden állat egyedi, és mindegyik megérdemli a személyre szabott, gondos kezelést. Célja, hogy rendelőnk mindig a legmagasabb színvonalú ellátást nyújtsa, modern eszközökkel és folyamatosan fejlődő szakmai tudással.'
  },
  {
    name: 'Dr. Kuczmog Zita',
    role: 'Állatorvos',
    graduation: '2015',
    specialization: 'Bőrgyógyászat, onkológia, külső hallójárati gyulladások',
    isLeader: false,
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Dr. Kuczmog Zita 2015-ben diplomázott, és már pályafutása kezdetétől fogva különös figyelmet fordított a bőrgyógyászatra és az onkológiára. Tudja, hogy ezek az állapotok gyakran komoly kihívást jelentenek az állatgazdák számára, és ezért különösen fontosnak tartja a részletes kivizsgálást és a türelmes magyarázatot. Szakterületén belül kiemelten foglalkozik külső hallójárati gyulladásokkal, amelyek gyakori problémák kutyák és macskák esetében. Munkája során nagy hangsúlyt fektet a megelőzésre és a tulajdonosok oktatására, hogy az állatok minél tovább egészségesek maradhassanak. Állandóan képezi magát, követi a legújabb kutatási eredményeket, és részt vesz szakmai továbbképzéseken. Számára az állatorvoslás nemcsak hivatás, hanem igazi szenvedély, és minden nap örömet okoz számára, ha látja, ahogy pácienseinek állapota javul a kezelés hatására.'
  },
  {
    name: 'Dr. Balogh-Bakos Nóra',
    role: 'Állatorvos',
    graduation: '2010',
    specialization: 'Kutya és macska fogászat, szájüregi betegségek',
    isLeader: false,
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Dr. Balogh-Bakos Nóra 2010-ben szerezte meg diplomáját, és különleges érdeklődést mutatott a fogászat és a szájüregi betegségek iránt. Tudatában van annak, hogy a fogak és a szájüreg egészsége mennyire fontos az állatok általános jólétéhez, ezért különös gondossággal végzi a fogászati beavatkozásokat. Munkája során számtalan fogkő-eltávolítást, foghúzást és egyéb komplex fogászati kezelést végzett el sikeresen. Nagy hangsúlyt fektet a megelőző fogászatra, és szívesen ad tanácsokat az állatgazdáknak a helyes fogápolásról. Célja, hogy csökkentse a fogászati problémákból eredő fájdalmakat és szövődményeket. Folyamatosan követi a fogászati területen történő újításokat, és modern eszközökkel dolgozik. Türelmes, precíz szakember, aki számára a legnagyobb jutalom, amikor egy állat újra boldogan ehet és játszik a sikeres kezelés után.'
  }
];

const staff = [
  {
    name: 'Puporka Nadinka',
    role: 'Állatorvosi asszisztens',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Nadinka már több mint 8 éve dolgozik állatorvosi asszisztensként, és ez idő alatt rengeteg tapasztalatot szerzett a kistállatok ellátásában. Munkája során segít az orvosoknak a vizsgálatok és műtétek során, valamint gondoskodik arról, hogy az állatok nyugodt és biztonságos környezetben érezzék magukat. Kiválóan ismeri az állatok viselkedését, és képes megnyugtatni még a legidegesesebb kedvenceket is. Precíz, megbízható munkatárs, aki mindig az állatok komfortját helyezi előtérbe. Szabadidejében szívesen olvas szakmai irodalmat, hogy naprakész tudással rendelkezzen. Számára az állatorvosi asszisztensi munka nem egyszerű feladat, hanem hivatás, amelyet szeretettel és odaadással végez minden nap.'
  },
  {
    name: 'Csábi Tímea',
    role: 'Munkatárs',
    image: 'https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Tímea a rendelő recepciós munkatársa, aki mindig mosolygós arccal fogadja az érkezőket. Munkája során koordinálja az időpontokat, kezeli a telefonhívásokat és gondoskodik arról, hogy minden simán menjen a rendelőben. Kiváló kommunikációs készséggel rendelkezik, és mindig türelmesen válaszol az állatgazdák kérdéseire. Számára fontos, hogy minden látogató barátságos és professzionális kiszolgálásban részesüljön. Pontosság és szervezőkészség jellemzi, ami nélkülözhetetlen a rendelő zavartalan működéséhez. Imádja az állatokat, és gyakran ő az első, aki megnyugtatja az ideges kisállatokat a váróban. Szabadidejében szívesen sétál kutyájával a természetben, és aktívan részt vesz állatvédelmi programokban.'
  },
  {
    name: 'Turán Mátyás',
    role: 'Munkatárs',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Mátyás a rendelő laborasszisztense, aki felelős a különböző vizsgálatok elvégzéséért és a minták feldolgozásáért. Precíz és lelkiismeretes munkavállaló, aki nagy hangsúlyt fektet a pontosságra, hiszen tudja, hogy munkája mennyire fontos a helyes diagnózis felállításában. Több éves tapasztalattal rendelkezik a laboratóriumi munkában, és kitűnően ismeri a különböző vizsgálati módszereket. Folyamatosan követi a labor területén zajló fejlesztéseket, és szívesen alkalmaz új technológiákat. Csapatjátékos, aki kiválóan együttműködik az orvosokkal és a többi munkatárssal. Számára a legnagyobb elismerés, amikor munkája hozzájárul egy állat gyógyulásához. Szabadidejében természetfotózással foglalkozik, és szívesen dokumentálja az állatok világát.'
  },
  {
    name: 'Hamvai Alexandra',
    role: 'Munkatárs',
    image: 'https://images.pexels.com/photos/5327547/pexels-photo-5327547.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Alexandra állatorvosi asszisztensként dolgozik a rendelőben, és különösen jól bánik a macskaszerű állatokkal. Tapasztalata és türelme révén képes megnyugtatni még a legfélelmetesebb cicákat is. Munkája során segít a vizsgálatokban, felkészíti az állatokat a különböző beavatkozásokra, és gondoskodik róluk a kezelések után is. Nagy hangsúlyt fektet a higiéniára és az állatok kényelmére. Szereti a kihívásokat, és mindig készen áll arra, hogy új dolgokat tanuljon. Rendszeresen részt vesz továbbképzéseken, hogy szakmai tudását bővítse. Számára az állatorvosi munka nemcsak egy foglalkozás, hanem egy életforma, amelyben minden nap lehetőséget kap arra, hogy segítsen a rászoruló állatokon.'
  },
  {
    name: 'Borosné Szoboszlai Beatrix',
    role: 'Munkatárs',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Beatrix a rendelő adminisztratív munkatársa, aki gondoskodik a pontos dokumentációról és az adatkezelésről. Munkája során kezeli a betegdokumentációt, számlázást és a biztosítási ügyintézést. Rendkívül szervezett és részletorientált, ami elengedhedetlen a rendelő zökkenőmentes működéséhez. Mindig segítőkész, és örömmel válaszol az állatgazdák adminisztratív kérdéseire. Hosszú évek óta dolgozik az egészségügyi szektorban, így kiválóan ismeri a vonatkozó szabályozásokat és előírásokat. Számára fontos, hogy minden papírmunka pontosan és időben elkészüljön, hogy az orvosok nyugodtan koncentrálhassanak a gyógyításra. Szabadidejében szívesen olvas és kertészkedik, valamint aktívan támogatja helyi állatmenhelyeket adományokkal és önkéntes munkával.'
  }
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  graduation?: string;
  specialization?: string;
  isLeader?: boolean;
}

export default function TeamTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Csapatunk
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Tapasztalt állatorvosok és szakképzett munkatársak, akik szívvel-lélekkel dolgoznak kedvenceiért
        </p>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center justify-center gap-3">
            <Stethoscope className="w-7 h-7 text-emerald-600" />
            Állatorvosaink
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(doctor)}
                className={`bg-gradient-to-br ${
                  doctor.isLeader
                    ? 'from-emerald-50 to-sky-50 border-2 border-emerald-200'
                    : 'from-gray-50 to-white border border-gray-200'
                } p-8 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="mb-6 flex justify-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className={`w-32 h-32 rounded-full object-cover ${
                      doctor.isLeader ? 'ring-4 ring-emerald-300' : 'ring-2 ring-gray-300'
                    }`}
                  />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {doctor.name}
                </h4>
                <p className={`text-sm font-medium mb-4 text-center ${
                  doctor.isLeader ? 'text-emerald-700' : 'text-gray-600'
                }`}>
                  {doctor.role}
                </p>

                <div className="space-y-2 text-gray-700">
                  <p className="text-sm">
                    <span className="font-medium">Végzés:</span> {doctor.graduation}
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium">Szakterület:</span> {doctor.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center justify-center gap-3">
            <Users className="w-7 h-7 text-emerald-600" />
            Munkatársaink
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover ring-2 ring-gray-300 mb-4 group-hover:ring-emerald-300 transition-all"
                />
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedMember.name}
              </h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-40 h-40 rounded-full object-cover ring-4 ring-emerald-300 mb-4"
                />
                <p className="text-lg font-medium text-emerald-700">
                  {selectedMember.role}
                </p>
                {selectedMember.graduation && (
                  <p className="text-sm text-gray-600 mt-1">
                    Végzés: {selectedMember.graduation}
                  </p>
                )}
                {selectedMember.specialization && (
                  <p className="text-sm text-gray-600 mt-1">
                    Szakterület: {selectedMember.specialization}
                  </p>
                )}
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
