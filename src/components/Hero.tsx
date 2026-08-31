import React from "react";

export function Hero() {
  return (
    <section className="w-full bg-[#0A1128] text-white py-16 px-6 md:px-12 lg:py-24 relative overflow-hidden">
      {/* Decorative Network Graphic Background for the right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden md:block opacity-70">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]"></div>
        
        {/* Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5"></div>
        
        {/* Glowing sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full" 
             style={{ background: 'radial-gradient(circle, rgba(245,176,39,0.8) 0%, rgba(37,99,235,0.8) 50%, rgba(10,17,40,0) 80%)' }}>
        </div>
        
        {/* Connecting lines and dots (simplified approximation) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
          <line x1="150" y1="150" x2="300" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="300" y1="300" x2="450" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="300" y1="300" x2="150" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="300" y1="300" x2="450" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          <circle cx="150" cy="150" r="3" fill="#f5b027" />
          <circle cx="450" cy="150" r="3" fill="#60a5fa" />
          <circle cx="150" cy="450" r="3" fill="#94a3b8" />
          <circle cx="450" cy="450" r="3" fill="#f5b027" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
        <div className="flex flex-col items-start gap-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm">
            <span className="text-lg">📊</span>
            <span className="text-bafe-yellow font-medium">Module 1 - Excel pour l'analyse de données</span>
          </div>
          
          {/* Overline */}
          <div className="text-bafe-yellow font-bold tracking-[0.2em] text-sm uppercase">
            FORMATION PRÉSENTIELLE <span className="mx-2 text-white/30">•</span> LOMÉ, TOGO
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            De la donnée brute au <span className="text-bafe-yellow">tableau de bord</span> décisionnel
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-white/80 leading-relaxed max-w-lg font-medium">
            Un module intensif pour structurer, trier, calculer et synthétiser vos données dans Excel — jusqu'à la construction de votre propre mini-dashboard.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-bafe-yellow text-bafe-blue font-bold px-8 py-3.5 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,176,39,0.3)]">
              <span className="text-xl leading-none">✦</span> Réserver ma place
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              Voir le programme <span className="text-lg leading-none">→</span>
            </button>
          </div>
        </div>
        
        {/* Spacer for mobile to show background */}
        <div className="h-48 md:hidden relative flex items-center justify-center">
           {/* Simple mobile glowing sphere */}
           <div className="w-32 h-32 rounded-full" 
               style={{ background: 'radial-gradient(circle, rgba(245,176,39,0.8) 0%, rgba(37,99,235,0.8) 50%, rgba(10,17,40,0) 80%)' }}>
          </div>
        </div>
      </div>
    </section>
  );
}
