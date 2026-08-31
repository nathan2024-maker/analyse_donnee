"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const days = [
  {
    id: "J1",
    title: "Jour 1 — Fondations",
    subtitle: "4 leçons",
    colorTheme: "blue",
    bgColor: "bg-[#254ee0]",
    darkBg: "bg-[#18318e]",
    lessons: [
      {
        id: "L1",
        title: "Structurer ses données dans Excel",
        content: [
          "Comprendre ce qu'est une donnée, un jeu de données, une variable, un champ et un enregistrement.",
          "Identifier les lignes, colonnes, en-têtes et types de données.",
          "Créer un tableau Excel propre et exploitable.",
          "Nommer correctement les colonnes et éviter les cellules fusionnées dans les données.",
          "Uniformiser les formats de texte, nombres et dates.",
          "Transformer une plage en tableau avec Ctrl + T.",
          "Utiliser les filtres et les noms de tableaux."
        ],
        exercise: "Exercice : transformer un fichier de ventes brutes en tableau Excel structuré."
      },
      {
        id: "L2",
        title: "Trier et filtrer les données",
        content: [
          "Trier une colonne par ordre croissant ou décroissant.",
          "Effectuer un tri multi-critères.",
          "Filtrer par texte, nombre et date.",
          "Utiliser les filtres pour isoler une population précise.",
          "Construire une question d'analyse à partir d'un filtre."
        ],
        exercise: "Exercice : afficher les ventes réalisées à Lomé en janvier et identifier les ventes supérieures à un seuil."
      },
      {
        id: "L3",
        title: "Formules et fonctions essentielles",
        content: [
          "Comprendre la différence entre une formule et une fonction.",
          "Utiliser les références de cellules et les opérateurs de calcul.",
          "Découvrir SOMME, MOYENNE, MIN, MAX, NB et NBVAL.",
          "Utiliser NB.SI, SOMME.SI et MOYENNE.SI pour effectuer des analyses conditionnelles.",
          "Comprendre les erreurs fréquentes dans les formules."
        ],
        exercise: "Exercice : calculer le chiffre d'affaires total, la vente moyenne, la valeur minimale et maximale et le nombre de ventes répondant à une condition."
      },
      {
        id: "L4",
        title: "Rechercher et retrouver des informations",
        content: [
          "Comprendre le principe d'une recherche par identifiant ou référence.",
          "Utiliser RECHERCHEX.",
          "Découvrir RECHERCHEV et comprendre ses limites.",
          "Présenter INDEX + EQUIV comme méthode complémentaire.",
          "Récupérer automatiquement un produit, un prix, une catégorie ou toute autre information."
        ],
        exercise: "Exercice : saisir un code produit et récupérer automatiquement son libellé, sa catégorie et son prix."
      }
    ]
  },
  {
    id: "J2",
    title: "Jour 2 — Analyse & restitution",
    subtitle: "4 leçons",
    colorTheme: "yellow",
    bgColor: "bg-[#e5a925]",
    darkBg: "bg-[#bc8919]",
    lessons: [
      {
        id: "L5",
        title: "Tableaux croisés dynamiques",
        content: [
          "Comprendre l'objectif d'un tableau croisé dynamique.",
          "Créer un TCD à partir d'un tableau structuré.",
          "Utiliser les zones Lignes, Colonnes, Valeurs et Filtres.",
          "Analyser les ventes par produit, ville, commercial et mois.",
          "Modifier le mode de synthèse : somme, moyenne, nombre.",
          "Actualiser un TCD après modification des données.",
          "Ajouter des segments lorsque cela est pertinent."
        ],
        exercise: "Exercice : répondre à une demande de direction sur le chiffre d'affaires par ville et par produit."
      },
      {
        id: "L6",
        title: "Créer et choisir les graphiques",
        content: [
          "Comprendre le rôle d'une visualisation dans l'analyse.",
          "Créer un histogramme, un graphique en barres, une courbe et un graphique circulaire.",
          "Introduire le graphique combiné pour des cas adaptés.",
          "Choisir le graphique selon la question : comparaison, évolution ou répartition.",
          "Ajouter titres, étiquettes, légendes et filtres utiles.",
          "Éviter les graphiques surchargés ou trompeurs."
        ],
        exercise: "Exercice : représenter l'évolution mensuelle des ventes et comparer les performances des villes"
      },
      {
        id: "L7",
        title: "Construire un mini-dashboard Excel",
        content: [
          "Rassembler les TCD et graphiques sur une seule feuille de restitution.",
          "Créer des indicateurs clés (KPIs) en haut de page.",
          "Connecter plusieurs graphiques à un même segment (Slicer).",
          "Mettre en page pour une présentation professionnelle."
        ],
        exercise: "Exercice : assembler le mini-dashboard complet avec les éléments créés précédemment."
      },
      {
        id: "L8",
        title: "Projet pratique final : analyse des ventes",
        content: [
          "Mise en situation réelle avec un jeu de données complet.",
          "Nettoyage et préparation des données de bout en bout.",
          "Analyse complète sans guidage pas-à-pas.",
          "Restitution sous forme de tableau de bord."
        ],
        exercise: "Exercice : réaliser un projet d'analyse de A à Z."
      }
    ]
  }
];

export function Curriculum() {
  const [activeModule, setActiveModule] = useState<string>("");
  const [activeJ2Module, setActiveJ2Module] = useState<string>("");

  const toggleModule = (id: string, theme: string) => {
    if (theme === 'blue') {
      setActiveModule(activeModule === id ? "" : id);
    } else {
      setActiveJ2Module(activeJ2Module === id ? "" : id);
    }
  };

  return (
    <section id="programme" className="py-20 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-bafe-blue text-center">
          Programme détaillé
        </h2>
      </div>

      <div className="space-y-12">
        {days.map((day) => (
          <div key={day.id} className="space-y-4">
            {/* Day Header */}
            <div className={`${day.bgColor} text-white rounded-xl md:rounded-2xl p-5 md:p-6 flex items-center gap-6 shadow-md`}>
              <div className={`${day.darkBg} w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg`}>
                {day.id}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{day.title}</h3>
                <p className="text-white/80 font-medium text-sm mt-1">{day.subtitle}</p>
              </div>
            </div>

            {/* Lessons */}
            <div className="space-y-3 pl-0 md:pl-6">
              {day.lessons.map((lesson) => {
                const isActive = (day.colorTheme === 'blue' ? activeModule : activeJ2Module) === lesson.id;
                
                let cardClass = "bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md";
                let badgeClass = "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white ";
                
                if (day.colorTheme === 'blue') {
                  cardClass += isActive ? " border-blue-500 border-l-4" : " border-gray-200 border-l-4 border-l-transparent";
                  badgeClass += "bg-[#18318e]";
                } else {
                  cardClass += isActive ? " border-yellow-500 border-l-4" : " border-gray-200 border-l-4 border-l-transparent";
                  badgeClass += "bg-[#e5a925]";
                }

                return (
                  <div key={lesson.id} className={cardClass}>
                    <button
                      onClick={() => toggleModule(lesson.id, day.colorTheme)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left font-bold"
                    >
                      <div className="flex items-center gap-4">
                        <span className={badgeClass}>
                          {lesson.id}
                        </span>
                        <span className="text-bafe-blue text-base md:text-lg">
                          {lesson.title}
                        </span>
                      </div>
                      {isActive ? (
                        <ChevronUp className={`w-5 h-5 ${day.colorTheme === 'blue' ? 'text-blue-500' : 'text-yellow-500'}`} />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {lesson.content && (
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-6 pl-[4.5rem]">
                            <ul className="space-y-2 mb-6">
                              {lesson.content.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <span className="text-gray-400 text-xs mt-1.5 font-bold">•</span>
                                  <span className="text-gray-600 font-medium text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>

                            {lesson.exercise && (
                              <div className="bg-[#f0f4fa] border border-blue-100 text-blue-800 text-sm p-4 rounded-lg flex items-start gap-2">
                                <span className="font-bold text-blue-600">Exercice :</span>
                                <span className="font-medium">{lesson.exercise.replace("Exercice : ", "").replace("Exercice :", "")}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
