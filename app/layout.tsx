import type { Metadata } from "next";
import {
  Host_Grotesk,
  Outfit,
  Ubuntu_Sans,
  Gochi_Hand,
} from "next/font/google";
import "./globals.css";
import Header from "@/src/sections/Header";
import Footer from "@/src/sections/Footer";

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

const ubuntu = Ubuntu_Sans({
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libellule - L'application des étudiants de l'IUT d'Angoulême",
  description: "Une app oui !",
  itunes: {
    appId: 'id6502843331',
  },
  openGraph: {
    title: "Libellule - L'application des étudiants de l'IUT d'Angoulême",
    type: "website",
    url: "https://libellule.app",
    siteName: "Libellule",
    description: "Libellule : l'app pour les étudiants de l'IUT d'Angoulême. Emploi du temps, notes, absences, e-mails et agenda collaboratif en un clic. Téléchargez-la et rejoignez 200+ utilisateurs !",
    locale: "fr_FR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${outfit.variable} ${hostGrotesk.variable} ${ubuntu.variable} ${gochiHand.variable} antialiased h-full font-outfit`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
