import React from "react";

export function ExpertProfile() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-blue-500 font-bold text-sm tracking-wider uppercase mb-2">NOTRE FORMATEUR</h3>
        <h2 className="text-3xl font-bold text-bafe-blue mb-12">Un expert spécialisé</h2>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start text-left gap-8">
          <div className="w-24 h-24 flex-shrink-0 bg-bafe-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
            EX
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-bafe-blue mb-2">Formateur expert, Data Analyst Senior</h3>
            <p className="text-bafe-blue/80 mb-6 text-sm md:text-base leading-relaxed">
              Auteur de la méthode d'analyse de données sur Excel. Consultant certifié en tableaux de bord avec Excel. Expert en ingénierie de la formation. Formateur certifié Microsoft. Il accompagne au quotidien des professionnels pour améliorer leurs performances.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Microsoft Excel</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Tableaux de bord</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Data Analyse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
