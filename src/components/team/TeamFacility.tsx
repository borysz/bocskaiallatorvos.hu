import { Stethoscope, Microscope, Activity, Pill, Scan, DoorOpen } from 'lucide-react';

const facilities = [
  {
    icon: DoorOpen,
    title: 'Két vizsgálóhelyiség',
    description: 'Modern, jól felszerelt vizsgálóhelyiségek a kényelmes ellátásért'
  },
  {
    icon: Activity,
    title: 'Tágas váróhelyiség',
    description: 'Kényelmes várakozási környezet kedvencei számára'
  },
  {
    icon: Scan,
    title: 'Röntgen és ultrahang',
    description: 'Korszerű diagnosztikai berendezések a pontos diagnózishoz'
  },
  {
    icon: Stethoscope,
    title: 'Műtő',
    description: 'Modern sebészeti műtő a biztonságos beavatkozásokhoz'
  },
  {
    icon: Microscope,
    title: 'Saját labor',
    description: 'Helyben elvégezhető laboratóriumi vizsgálatok'
  },
  {
    icon: Pill,
    title: 'Állatgyógyszertár',
    description: 'Teljes körű gyógyszeres ellátás egy helyen'
  }
];

export default function TeamFacility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Rendelőnk felszereltsége
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Modern eszközeinkkel és átgondolt kialakításunkkal biztosítjuk kedvencei számára a legmagasabb színvonalú ellátást
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
