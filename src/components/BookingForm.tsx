"use client";

import React, { useState } from "react";

export function BookingForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      profession: formData.get("profession"),
      organisation: formData.get("organisation"),
      pays: formData.get("pays"),
      niveauExcel: formData.get("niveauExcel"),
      attentes: formData.get("attentes"),
      modePaiement: paymentMethod,
    };

    try {
      const response = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Une erreur est survenue lors de l'envoi.");
      }

      setStatus("success");
      form.reset();
      setPaymentMethod("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi.");
    }
  }

  return (
    <section id="inscription" className="py-16 px-6 md:px-12 bg-background flex justify-center scroll-mt-24">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h3 className="text-blue-500 font-bold text-sm tracking-wider uppercase mb-2">NE MANQUEZ PAS CETTE OPPORTUNITÉ</h3>
          <h2 className="text-3xl font-bold text-bafe-blue">Réservez votre place</h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Nom *</label>
                <input name="nom" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Prénom *</label>
                <input name="prenom" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Email *</label>
                <input name="email" required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Téléphone (WhatsApp de préférence) *</label>
                <input name="telephone" required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Profession / Fonction *</label>
                <input name="profession" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Organisation / Entreprise</label>
                <input name="organisation" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Pays / Ville de résidence *</label>
                <input name="pays" required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Ex: Togo, Lomé" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Connaissance actuelle d'Excel *</label>
                <select name="niveauExcel" required defaultValue="" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <option value="" disabled>Choisir un niveau</option>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Quelles sont vos attentes pour cette formation ?</label>
              <textarea name="attentes" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Décrivez brièvement vos attentes..."></textarea>
            </div>

            <div className="bg-yellow-50/50 border border-yellow-200/50 rounded-xl p-6 my-8">
              <p className="text-sm font-medium text-bafe-blue mb-4">
                Paiement requis pour valider l'inscription. Choisissez votre mode de paiement.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <button type="button" onClick={() => setPaymentMethod('t-money')} className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${paymentMethod === 't-money' ? 'bg-bafe-blue text-white border-bafe-blue' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}>T-Money</button>
                <button type="button" onClick={() => setPaymentMethod('flooz')} className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${paymentMethod === 'flooz' ? 'bg-bafe-blue text-white border-bafe-blue' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'}`}>Flooz</button>
              </div>

              <p className="text-xs text-gray-500 mb-4 bg-white p-3 rounded border border-gray-100">
                Envoyez le montant au : <strong>+228 90 15 31 70</strong> (Nom: BAFE Associes). Renseignez ensuite vos informations ci-dessous.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-bafe-blue text-white font-bold text-lg py-4 rounded-xl hover:bg-[#060c1d] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Envoi en cours..." : "Confirmer mon inscription à la formation"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm font-semibold text-green-600 bg-green-50 border border-green-200 rounded-lg py-3">
                Inscription envoyée avec succès ! Nous vous recontacterons rapidement.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg py-3">
                {errorMessage}
              </p>
            )}

            <p className="text-center text-xs text-gray-400 mt-4">
              En soumettant ce formulaire, vous acceptez d'être recontacté(e) par l'équipe de BAFE & Associés. Vos données sont sécurisées.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
