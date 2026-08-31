import React from "react";

export function Pricing() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background flex justify-center">
      <div className="bg-bafe-blue rounded-3xl w-full max-w-4xl p-10 md:p-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-bafe-yellow font-bold text-sm tracking-widest uppercase mb-2">INVESTISSEMENT</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frais de participation</h2>
            
            <div className="flex items-end gap-2 mb-4">
              <span className="text-bafe-yellow text-5xl md:text-6xl font-black">70 000</span>
              <span className="text-bafe-yellow font-bold text-xl mb-1">FCFA</span>
            </div>
            
            <p className="text-white/70 text-sm">Tarif étudiant : 50 000 FCFA</p>
            
            <div className="flex items-center gap-6 mt-6 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                Places limitées
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                Attestation de formation délivrée
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <button className="bg-bafe-yellow text-bafe-blue font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-500 transition-colors shadow-lg shadow-bafe-yellow/20">
              S'inscrire maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
