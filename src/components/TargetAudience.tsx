import React from "react";
import { BarChart3, Briefcase, LineChart, GraduationCap, Users } from "lucide-react";

const audiences = [
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Analystes et Data Analysts"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Comptables & Chefs d'entreprises"
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Commerçants & Chargés de clientèle"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Chercheurs et Doctorants"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Étudiants & Jeunes Diplômés"
  }
];

export function TargetAudience() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-blue-500 font-bold text-sm tracking-wider uppercase mb-2">CIBLE DE LA FORMATION</h3>
        <h2 className="text-3xl font-bold text-bafe-blue mb-12">Cette formation est faite pour vous</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {audiences.map((aud, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 flex flex-col items-center justify-center w-64 hover:shadow-md transition-shadow"
            >
              {aud.icon}
              <h4 className="text-bafe-blue font-bold leading-tight">{aud.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
