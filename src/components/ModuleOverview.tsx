import React from "react";

export function ModuleOverview() {
  const details = [
    { label: "NIVEAU", value: "Débutant à intermédiaire" },
    { label: "DURÉE", value: "6 à 8 heures" },
    { label: "FORMAT", value: "Cours + démo + exercices + projet" },
    { label: "OUTIL", value: "Microsoft Excel" },
    { label: "RÉSULTAT", value: "Analyse + mini-dashboard" }
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-[#f4f7fb] flex justify-center">
      <div className="w-full max-w-6xl relative bg-[#0d276b] rounded-3xl overflow-hidden p-10 md:p-14 text-center border border-blue-900/50 shadow-lg">
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="border border-yellow-500/50 bg-yellow-500/10 text-bafe-yellow font-bold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            MODULE 1
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Excel pour l&apos;analyse de données
          </h2>
          
          <p className="text-blue-100 text-sm md:text-base max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Maîtriser Excel pour analyser, synthétiser et visualiser des données — de la donnée brute au mini-tableau de bord décisionnel.
          </p>

          <div className="flex flex-wrap justify-center gap-4 w-full">
            {details.map((item, index) => (
              <div 
                key={index}
                className="flex-1 min-w-[150px] bg-blue-600/20 border border-blue-400/30 rounded-2xl p-5 text-left backdrop-blur-sm"
              >
                <div className="text-bafe-yellow text-xs font-bold tracking-wider uppercase mb-2">
                  {item.label}
                </div>
                <div className="text-white font-semibold text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
