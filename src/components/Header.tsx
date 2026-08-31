import React from "react";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-bafe-blue flex items-center justify-between sticky top-0 z-50">
      <div className="flex flex-col items-start gap-2">
        {/* Logo Container (White pill) */}
        <div className="bg-white rounded-2xl px-6 py-2 flex items-center justify-center shadow-sm">
          <Image src="/logo.jpg" alt="BAFE & Associés" width={1004} height={650} className="h-9 w-auto" priority />
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
