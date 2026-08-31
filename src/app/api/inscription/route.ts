import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      nom,
      prenom,
      email,
      telephone,
      profession,
      organisation,
      pays,
      niveauExcel,
      attentes,
      modePaiement,
    } = data;

    if (!nom || !prenom || !email || !telephone || !profession || !pays || !niveauExcel) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const recipients = [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].filter(
      (value): value is string => Boolean(value)
    );

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || recipients.length === 0) {
      console.error("Configuration email manquante (GMAIL_USER / GMAIL_APP_PASSWORD / NOTIFY_EMAIL_1 / NOTIFY_EMAIL_2).");
      return NextResponse.json({ error: "Le service d'inscription n'est pas encore configuré." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Formation Excel - BAFE & Associés" <${process.env.GMAIL_USER}>`,
      to: recipients,
      replyTo: email,
      subject: `Nouvelle inscription : ${prenom} ${nom}`,
      text: [
        `Nom : ${nom}`,
        `Prénom : ${prenom}`,
        `Email : ${email}`,
        `Téléphone : ${telephone}`,
        `Profession / Fonction : ${profession}`,
        `Organisation : ${organisation || "-"}`,
        `Pays / Ville de résidence : ${pays}`,
        `Connaissance actuelle d'Excel : ${niveauExcel}`,
        `Attentes : ${attentes || "-"}`,
        `Mode de paiement choisi : ${modePaiement || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'inscription :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous contacter directement." },
      { status: 500 }
    );
  }
}
