import React from "react";

export function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-bafe-blue flex items-center justify-between sticky top-0 z-50">
      <div className="flex flex-col items-start gap-2">
        {/* Logo Container (White pill) */}
        <div className="bg-white rounded-2xl px-6 py-2 flex items-center justify-center shadow-sm">
          {/* Textual representation of the logo since we don't have the file in public/ yet */}
          <div className="flex items-center gap-2">
            <div className="flex items-end">
              <div className="w-3 h-3 bg-[#00a0df] mb-3 -mr-1 z-10" />
              <div className="text-3xl font-black leading-none tracking-tighter">b</div>
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[10px] font-black tracking-widest text-black">BAFE &</span>
              <span className="text-[10px] font-black tracking-widest text-[#00a0df]">ASSOCIÉS</span>
            </div>
          </div>
        </div>

        {/* Formation Title */}
        <div className="text-bafe-yellow font-bold tracking-[0.2em] text-xs uppercase pl-1">
          Formation Excel <span className="mx-2">•</span> Lomé
        </div>
      </div>
      
      {/* CTA Button */}
      <a
        href="#inscription"
        className="bg-bafe-yellow text-bafe-blue font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
      >
        S'inscrire
      </a>
    </header>
  );
}
