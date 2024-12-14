import type { Metadata } from "next";
import { Host_Grotesk, Outfit, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";

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
  title: "Libellule",
  description: "Une app oui !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${outfit.variable} ${hostGrotesk.variable} ${ubuntu.variable} antialiased h-full font-outfit`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
