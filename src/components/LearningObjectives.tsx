import React from "react";
import { 
  Target, Settings, LayoutGrid, FileText, LineChart, 
  TableProperties, Search, Lightbulb, Filter, Database, 
  Calculator, BarChart2 
} from "lucide-react";

export function LearningObjectives() {
  const cards = [
    // Column 1 - Blue
    {
      borderColor: "border-blue-500/40",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      icon: <LayoutGrid className="w-5 h-5" />,
      text: "Comprendre la structure d'un jeu de données et organiser correctement un tableau Excel."
    },
    {
      borderColor: "border-yellow-500/40",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-500",
      icon: <TableProperties className="w-5 h-5" />,
      text: "Transformer une plage de données en tableau Excel structuré."
    },
    {
      borderColor: "border-cyan-500/40",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
      icon: <Filter className="w-5 h-5" />,
      text: "Trier et filtrer des données selon différents critères."
    },
    {
      borderColor: "border-green-500/40",
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      icon: <Calculator className="w-5 h-5" />,
      text: "Construire des formules et utiliser les principales fonctions de calcul et de comptage."
    },
    
    // Row 2
    {
      borderColor: "border-blue-500/40",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      icon: <FileText className="w-5 h-5" />,
      text: "Utiliser SOMME, MOYENNE, MIN, MAX, NB, NBVAL, NB.SI, SOMME.SI et MOYENNE.SI."
    },
    {
      borderColor: "border-yellow-500/40",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-500",
      icon: <Search className="w-5 h-5" />,
      text: "Rechercher et récupérer automatiquement des informations avec RECHERCHEX et RECHERCHEV."
    },
    {
      borderColor: "border-cyan-500/40",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-500",
      icon: <Database className="w-5 h-5" />,
      text: "Construire et exploiter un tableau croisé dynamique."
    },
    {
      borderColor: "border-green-500/40",
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      icon: <BarChart2 className="w-5 h-5" />,
      text: "Choisir et créer des graphiques adaptés à une question d'analyse."
    },
    
    // Row 3
    {
      borderColor: "border-blue-500/40",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      icon: <LineChart className="w-5 h-5" />,
      text: "Construire un mini-dashboard Excel avec indicateurs, tableaux et graphiques."
    },
    {
      borderColor: "border-yellow-500/40",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-500",
      icon: <Lightbulb className="w-5 h-5" />,
      text: "Interpréter les résultats et formuler des conclusions utiles à la décision."
    }
  ];

  const steps = [
    { num: 1, title: "Explication simple du concept", color: "bg-[#0d276b]" },
    { num: 2, title: "Démonstration pratique", color: "bg-blue-600" },
    { num: 3, title: "Reproduction guidée", color: "bg-cyan-400" },
    { num: 4, title: "Exercice autonome", color: "bg-green-600" },
    { num: 5, title: "Correction détaillée", color: "bg-yellow-500" },
    { num: 6, title: "Réutilisation au projet final", color: "bg-gray-900" }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#f4f7fb] flex justify-center">
      <div className="w-full max-w-6xl">
        
        {/* Top Part */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-bafe-blue mb-10 flex items-center justify-center gap-2">
            <span className="text-2xl">🎯</span> Ce que vous allez apprendre
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-6 border ${card.borderColor} shadow-sm hover:shadow-md transition-shadow h-full`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <p className="text-bafe-blue text-sm font-medium leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Part */}
        <div>
          <h2 className="text-2xl font-bold text-bafe-blue mb-16 flex items-center justify-center gap-2">
            <Settings className="w-6 h-6 text-gray-700" /> Comment se déroule chaque leçon
          </h2>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 max-w-5xl mx-auto">
            {/* Connecting Dashed Line (Desktop only) */}
            <div className="hidden md:block absolute top-6 left-[5%] right-[5%] h-px border-t-2 border-dashed border-gray-300 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center flex-1 max-w-[150px]">
                <div className={`w-12 h-12 rounded-full ${step.color} text-white font-bold text-lg flex items-center justify-center mb-4 shadow-md`}>
                  {step.num}
                </div>
                <p className="text-center text-xs font-semibold text-bafe-blue px-2 leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
