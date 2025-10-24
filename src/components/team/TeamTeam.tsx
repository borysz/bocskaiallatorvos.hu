import { Stethoscope, Users, X } from 'lucide-react';
import { useState } from 'react';

const doctors = [
  {
    name: 'Dr. Fekete Zoltán',
    role: 'Rendelővezető',
    graduation: '2010',
    specialization: 'Kistállat belgyógyászat és lágyszöveti sebészet',
    isLeader: true,
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2022/08/BIP_5998-1-scaled.jpg',
    bio: '2010-ben végeztem a budapesti Szent István Egyetem Állatorvos-tudományi Karán. Végzés után a debreceni Jupet Nagyerdei Állatorvosi Rendelőben kezdtem dolgozni. 2010 őszétől 2019 decemberéig a Nyíregyházi Oktató Állatkórházban dolgoztam klinikus állatorvosként. Ezen a nagyforgalmú klinikán eltöltött éveim alatt lehetőségem volt elmélyíteni tudásom a kutyák és macskák belgyógyászatában és lágyszervi sebészetében. Alkalmam volt a különböző képalkotó eljárások megismerésére és ezeken a területeken jelentős tapasztalatot is szereztem. Posztgraduális képzés keretében endoszkópos, ultrahangos és plasztikai sebészeti workshop-okon is részt vettem.Hosszú tervezgetés után 2019. szeptemberében nyitottuk meg a Bocskai Állategészségügyi Centrumot és azóta már kizárólag itt folytatom a szakmai munkát. 2021-ben elvégeztem a Magyar Állatorvosi Kamara Praxisvezető képzését. Elsődlegesen a kisállatok belgyógyászati betegségei, a kardiológia és a gasztroenterológia a fő érdeklődési területem.'
  },
  {
    name: 'Dr. Kuczmog Zita',
    role: 'Állatorvos',
    graduation: '2015',
    specialization: 'Bőrgyógyászat, onkológia, külső hallójárati gyulladások',
    isLeader: false,
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/BIP_5989-1-scaled-1.jpg',
    bio: '2015-ben végeztem állatorvos-doktorként a Szent István Egyetem Állatorvostudományi Karán, majd 5 évig egy nagyforgalmú nyíregyházi állatorvosi rendelőben dolgoztam. 2020 óta a Bocskai Állategészségügyi Centrum csapatának tagja vagyok, itt a napi általános betegellátás mellett főleg bőrgyógyászati kivizsgálásokkal és kezelésekkel foglalkozom. Fő érdeklődési területem a bőrgyógyászat, az onkológia és a hallójárat gyulladások. A bőrgyógyászat keretein belül napi szinten végzek citológiai vizsgálatokat, látok el allergiás, daganatos, fülgyulladásos, valamint autoimmun betegeket. A Magyar Bőrgyógyász Állatorvosok Egyesületének 2020 óta pártoló, 2022 novembere óta pedig rendes, vizsgázott tagja vagyok, így a kelet-magyarországi régióban egyedüliként jogosultságot szereztem állatorvosi bőrgyógyászati szakrendelés tartására. Rendszeresen rész veszek – előadóként is – bőrgyógyászati témájú szakmai továbbképzéseken és journal clubokon, több cikkem jelent meg bőrgyógyászati témában hazai állatorvosi lapokban. Többször részt vettem az Európai Állatorvosi Bőrgyógyászati Kongresszuson (ECVD-ESVD 2022. Portó, 2023. Göteborg). Kiemelten fontosnak tartom a daganatos betegek mielőbbi szakszerű diagnózisát és ellátását, terveim között szerepel onkológiai ismereteim bővítése és elmélyítése.'
  },
  {
    name: 'Dr. Balogh-Bakos Nóra',
    role: 'Állatorvos',
    graduation: '2010',
    specialization: 'Kutya és macska fogászat, szájüregi betegségek',
    isLeader: false,
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/11/dr-balogh-1.jpg',
    bio: '2010-ben végeztem a Szent István Egyetem Állatorvos-tudományi Karán állatorvos-doktorként. A végzést követően több mint tíz évig az állami állategészségügyi szolgálatnál dolgoztam, elsősorban járványügyi szakterületen. 2022-ben ismerkedtem meg a Bocskai Állategészségügyi Centrum csapatával, ahol rögtön megfogott az ott tapasztalt szakmai és emberi hozzáállás, ezért előbb részmunkaidőben, majd teljes állásban csatlakoztam a rendelő dolgozói közé. Legfőbb érdeklődési területem a kutyák, a macskák fogászata és szájüregi betegségei, mely témában több elméleti és gyakorlati képzésen is részt vettem, veszek jelenleg is. Tizennégy éve macskatartó vagyok, sokat tanultam saját állataimtól erről a különleges fajról, ezért is kiemelten fontos számomra a cicák egészségvédelme, és a minél stresszmentesebb rendelői ellátásuk.'
  }
];

const staff = [
  {
    name: 'Puporka Nadinka',
    role: 'Állatorvosi asszisztens',
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/BIP_5983-1-scaled-1.jpg',
    bio: 'Gyerekkorom óta meg vagyok bolondulva az állatokért, ezért mindig is szerettem volna egy olyan munkahelyet, ahol a közelükben lehetek. Így az érettségi mellett 2012-ben elvégeztem az állatorvosi asszisztens képzést is. Szerencsésnek mondhatom magam, hogy azzal foglalkozhatok, amire mindig is vágytam. Szinte a kezdetektől erősítem a Bocskai Állategészségügyi Centrum csapatát.'
  },
  {
    name: 'Csábi Tímea',
    role: 'Munkatárs',
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/Csabi-timea-e1730385922282.jpg',
    bio: 'Születésem óta kísérik életemet az állatok, főleg a kutyák és macskák iránt érzett szeretet, tisztelet.Szerencsés voltam, kertes házban rengeteg háziállattal körül véve nőhettem fel, családtagként tekintek rájuk.Mindig is olyan munkahelyre vágytam, ahol állatok vesznek körül. Válassz olyan munkát amit szeretsz csinálni, és soha többet nem kell majd dolgoznod.'
  },
  {
    name: 'Turán Mátyás',
    role: 'Munkatárs',
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/matyi.jpg',
    bio: '2024 januárjától dolgozom a Bocskai Állategészségügyi Centrumban. Előtte Egerben az Eszterházy Károly egyetemen tanultam testnevelés tanári szakon. Munkám mellett gyerekekkel foglalkozok, kézilabda edzőként. Ezt a sportágat hobbi szinten én is gyakorlom. Természet iránti rajongásom miatt választottam ezt a hivatást, a rendelőben pedig rátaláltam arra a környezetre, ahol szívesen dolgozom. Munkám során örömömre szolgál, hogy láthatom az állatok gyógyulását, gazdáik elégedettségét.'
  },
  {
    name: 'Hamvai Alexandra',
    role: 'Munkatárs',
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/hamvai-alexandra-1050x933-2.jpg',
    bio: 'Mindig is éreztem,hogy  állatok között szeretném eltölteni az életemet.  Főként a gazdasági állatok körében kezdtem a pályafutásomat, családi gazdaságban,  valamint  munkalovasként . Pár évvel ezelőtt adódott egy lehetőség ,hogy kisállatokkal is foglalkozhassak és akkor éreztem, hogy ez nekem való. Örömmel végzem a munkám, tudván hogy megannyi élet megmentésre kerülhet a segítségemmel. 2024-ben kezdtem erősìteni a Bocskai Állategészségügyi Centrum családias és szakmailag kiemelkedő csapatát.'
  },
  {
    name: 'Borosné Szoboszlai Beatrix',
    role: 'Munkatárs',
    image: 'https://bocskaiallatorvos.hu/wp-content/uploads/2024/10/borosne-1000-1070.jpg',
    bio: 'Már gyermekkoromtól kezdve nagyon érdekeltek a kutyák, mindig is rajongtam értük mérettől, színtől és fajtától függetlenül. Kutyákkal 2015-ben kezdtem foglalkozni, amikor az egyetem elvégzése után egy menhelyen kezdtem el dolgozni. Két évvel később belecsöppentem az állatasszisztált terápiák világába, ahol a kutyák kiképzésében tehettem szert jelentős tapasztalatokra. Igazán ekkor értettem meg, hogy minden kutya milyen különleges, egyedi személyiség és mennyire meg tudja változtatni egy ember életét. Az ez idő alatt megszerzett tudásomat jelenleg asszisztensként bővíthetem és kamatoztathatom a Bocskai Állategészségügyi Centrumban.'
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Csapatunk
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Tapasztalt állatorvosok és szakképzett munkatársak, akik szívvel-lélekkel dolgoznak kedvenceiért
        </p>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-10 flex items-center justify-center gap-3">
            <Stethoscope className="w-7 h-7 text-brandButton" />
            Állatorvosaink
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(doctor)}
                className={`bg-gradient-to-br ${doctor.isLeader
                  ? 'from-emerald-50 to-sky-50 border-2 border-emerald-200'
                  : 'from-brand to-white border border-gray-200'
                  } p-8 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="animate-pulse-soft">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className={`w-64 h-64 rounded-full object-cover object-[center_top] transition-all duration-300 hover:scale-110 hover:rotate-3 ${doctor.isLeader ? 'ring-4 ring-emerald-400' : 'ring-2 ring-gray-300'
                        }`}
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {doctor.name}
                </h4>
                <p className={`text-sm font-medium mb-4 text-center ${doctor.isLeader ? 'text-emerald-700' : 'text-gray-600'
                  }`}>
                  {doctor.role}
                </p>

                <div className="space-y-2 text-gray-700">
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
            <Users className="w-7 h-7 text-brandButton" />
            Munkatársaink
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <div className="animate-pulse-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover object-[center_top] ring-2 ring-gray-300 mb-4 group-hover:ring-brandSection group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300"
                  />
                </div>
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
                  className="w-40 h-40 rounded-full object-cover ring-4 ring-brandButton mb-4"
                />
                <p className="text-lg font-medium text-brandButtonHover">
                  {selectedMember.role}
                </p>
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
