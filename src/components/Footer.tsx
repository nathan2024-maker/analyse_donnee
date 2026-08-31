import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bafe-light-blue pt-16 pb-8 border-t border-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and About */}
          <div>
            <h3 className="text-xl font-black text-bafe-blue mb-4">BAFE & Associés</h3>
            <p className="text-bafe-blue/70 text-sm leading-relaxed max-w-sm">
              Cabinet d'expertise comptable, de conseil et d'ingénierie de la formation. BAFE & Associés accompagne les entreprises dans leur structuration financière et la montée en compétences de leurs équipes.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 inline-block">
            <h4 className="font-bold text-bafe-blue mb-4 text-sm">
              Bureaux et Contacts au Togo
            </h4>
            <div className="space-y-4 text-sm text-bafe-blue/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Siège : Forever, Rue Koulaa, derrière Pharmacie Yembla, Lomé</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+228 90 15 31 70</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>contact@bafe-associes.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-blue-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-bafe-blue/60 font-medium">
          <p>© {new Date().getFullYear()} BAFE & Associés. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-bafe-blue transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-bafe-blue transition-colors">Conditions générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
