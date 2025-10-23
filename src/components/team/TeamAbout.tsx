export default function TeamAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Rólunk
        </h2>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <p className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
              "A cél az volt, hogy a lehető legszélesebb körű ellátást nyújtsuk a helyi állatgazdáknak."
            </p>
          </div>

          <p className="text-lg">
            Rendelőnk <strong className="text-gray-900">2019-ben nyitotta meg kapuit Bocskaikerten</strong>, mindössze 8 km-re Debrecentől.
            Fő profilunk a <strong className="text-gray-900">kutyák és macskák állatorvosi ellátása</strong>, amelyet empátiával és folyamatos szakmai fejlődéssel
            végzünk.
          </p>

          <p className="text-lg">
            Küldetésünk, hogy <strong className="text-gray-900">átfogó állategészségügyi szolgáltatást</strong> nyújtsunk, amely magában foglalja
            a megelőzést, a diagnosztikát és a kezelést egyaránt. Csapatunk elkötelezett amellett, hogy kedvencei a
            legjobb ellátásban részesüljenek, legyen szó rutinvizsgálatról vagy bonyolultabb egészségügyi problémáról.
          </p>

          <p className="text-lg">
            Számunkra minden állat egyedi, és mindegyik megérdemli a személyre szabott, gondos ellátást.
            Szakmai tudásunkat folyamatosan bővítjük, hogy mindig a legkorszerűbb módszerekkel dolgozzunk.
          </p>
        </div>
      </div>
    </section>
  );
}
