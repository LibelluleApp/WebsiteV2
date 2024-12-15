"use client";

import Image from "next/image";
import Link from "next/link";
import { Mouse, Lightbulb, Palette } from "lucide-react";
import Switcher from "@/src/components/switch";
import { useState } from "react";
import { motion } from "framer-motion";

const THEMES = {
  azure: { name: "Azure", color: "bg-blue-900", textColor: "text-blue-900" },
  petal: { name: "Petal", color: "bg-pink", textColor: "text-pink" },
  amethyst: { name: "Améthyst", color: "bg-purple", textColor: "text-purple" },
  corail: { name: "Corail", color: "bg-orange", textColor: "text-orange" },
  emerald: { name: "Emerald", color: "bg-green", textColor: "text-green" },
};

const SCREEN_IMAGES = {
  light: {
    azure: {
      agenda: "/screens/themes/Blue/Light/Agenda.png",
      accueil: "/screens/themes/Blue/Light/Accueil.png",
      emploi_du_temps: "/screens/themes/Blue/Light/Emploi_du_temps.png",
    },
    petal: {
      agenda: "/screens/themes/Pink/Light/Agenda.png",
      accueil: "/screens/themes/Pink/Light/Accueil.png",
      emploi_du_temps: "/screens/themes/Pink/Light/Emploi_du_temps.png",
    },
    amethyst: {
      agenda: "/screens/themes/Purple/Light/Agenda.png",
      accueil: "/screens/themes/Purple/Light/Accueil.png",
      emploi_du_temps: "/screens/themes/Purple/Light/Emploi_du_temps.png",
    },
    corail: {
      agenda: "/screens/themes/Orange/Light/Agenda.png",
      accueil: "/screens/themes/Orange/Light/Accueil.png",
      emploi_du_temps: "/screens/themes/Orange/Light/Emploi_du_temps.png",
    },
    emerald: {
      agenda: "/screens/themes/Green/Light/Agenda.png",
      accueil: "/screens/themes/Green/Light/Accueil.png",
      emploi_du_temps: "/screens/themes/Green/Light/Emploi_du_temps.png",
    },
  },
  dark: {
    azure: {
      agenda: "/screens/themes/Blue/Dark/Agenda.png",
      accueil: "/screens/themes/Blue/Dark/Accueil.png",
      emploi_du_temps: "/screens/themes/Blue/Dark/Emploi_du_temps.png",
    },
    petal: {
      agenda: "/screens/themes/Pink/Dark/Agenda.png",
      accueil: "/screens/themes/Pink/Dark/Accueil.png",
      emploi_du_temps: "/screens/themes/Pink/Dark/Emploi_du_temps.png",
    },
    amethyst: {
      agenda: "/screens/themes/Purple/Dark/Agenda.png",
      accueil: "/screens/themes/Purple/Dark/Accueil.png",
      emploi_du_temps: "/screens/themes/Purple/Dark/Emploi_du_temps.png",
    },
    corail: {
      agenda: "/screens/themes/Orange/Dark/Agenda.png",
      accueil: "/screens/themes/Orange/Dark/Accueil.png",
      emploi_du_temps: "/screens/themes/Orange/Dark/Emploi_du_temps.png",
    },
    emerald: {
      agenda: "/screens/themes/Green/Dark/Agenda.png",
      accueil: "/screens/themes/Green/Dark/Accueil.png",
      emploi_du_temps: "/screens/themes/Green/Dark/Emploi_du_temps.png",
    },
  },
};

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("azure");

  // Récupérer les images selon le mode et le thème
  type ScreenName = "agenda" | "accueil" | "emploi_du_temps";
  type ThemeKey = keyof typeof THEMES;

  const getScreenImage = (screenName: ScreenName): string => {
    const mode = darkMode ? "dark" : ("light" as const);
    return SCREEN_IMAGES[mode][currentTheme as ThemeKey][screenName];
  };

  // Fonction pour changer de thème
  const changeTheme = (theme: ThemeKey): void => {
    setCurrentTheme(theme);
  };

  return (
    <div className="s:gap-20 flex flex-col relative gap-4 items-center justify-center pt-14 overflow-hidden bg-gradient-to-b from-[#f3f7ff] to-[#deebfe]">
      <div className="flex flex-col items-center justify-center gap-8 z-2 px-[5%]">
        <div className="md:items-center flex flex-col items-start gap-2">
          <h2 className="s:text-4xl md:text-center text-3xl text-start font-host-grotesk text-blue-900 font-extrabold">
            Votre vie universitaire dans votre smartphone 📱
          </h2>
          <h3 className="s:text-xl md:text-center text-lg text-start text-grey font-outfit max-w-[700px]">
            Libellule a été imaginée par des étudiants de l’IUT d’Angoulême pour
            regrouper tous les services de l’université de Poitiers.
          </h3>
        </div>
        <div className="md:items-center flex flex-col items-start gap-2 w-full">
          <div className="s:gap-4 flex gap-2">
            <Image
              src="/playstore.svg"
              alt="Bouton Play Store"
              width={135}
              height={40}
              className="s:scale-100 scale-90"
            />
            <Image
              src="/appstore.svg"
              alt="Bouton App Store"
              width={135}
              height={40}
              className="s:scale-100 scale-90"
            />
          </div>
          <p className="md:text-center text-grey text-start font-outfit text-xs">
            En téléchargeant l’app, vous acceptez les 
            <Link href="">conditions générales d’utilisation</Link>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center relative h-[400px]">
        <div className="absolute flex flex-col justify-center items-center bottom-2 left-1/2 transform -translate-x-1/2 z-9">
          <Mouse strokeWidth={1.75} className="text-blue-900" />
          <p className="text-xs font-medium font-host-grotesk text-center text-blue-900">
            Scroll
          </p>
        </div>
        <div className="absolute bottom-0 h-[300px] w-[100vw] bg-gradient-to-t from-[#f3f7ff] to-[#f3f8ff00] z-8 pointer-events-none"></div>
        <Image
          src={`${getScreenImage("emploi_du_temps")}?v=${Date.now()}`}
          alt="Mockup de l'application"
          width={218}
          height={472}
          className="sm:left-[100px] s:left-[50px] s:scale-100 scale-90 absolute left-[25px] top-24 z-6 border-8 border-blue-200 rounded-3xl shadow"
        />
        <Image
          src={`${getScreenImage("accueil")}?v=${Date.now()}`}
          alt="Mockup de l'application"
          width={276}
          height={472}
          className="s:scale-100 scale-90 absolute left-1/2 transform -translate-x-1/2 top-0 z-7 border-8 border-blue-200 rounded-3xl shadow"
        />
        <Image
          src={`${getScreenImage("agenda")}?v=${Date.now()}`}
          alt="Mockup de l'application"
          width={218}
          height={472}
          className="sm:right-[100px] s:right-[50px] s:scale-100  scale-90 absolute right-[25px] top-24 z-6 border-8 border-blue-200 rounded-3xl shadow"
        />
        <div className="lg:block hidden absolute right-[150px] top-10 z-5 rotate-[-12deg]">
          <div className="relative flex justify-between items-center gap-4 bg-white p-4 rounded-lg w-[300px]">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Lightbulb
                  strokeWidth={1.75}
                  className="bg-blue-900 text-blue-50 w-4 h-4"
                />
              </div>
              <p className="text-center text-blue-900 font-ubuntu font-medium tracking-tight-custom">
                Thème sombre
              </p>
            </div>
            <Switcher setDarkMode={setDarkMode} darkMode={darkMode} />
            <div className="absolute top-[-65px] right-14 flex flex-col items-end">
              <p className="font-gochi-hand text-grey text-lg mr-10">
                Test le mode sombre
              </p>
              <Image src="/arrow_01.svg" alt="Flèche" width={39} height={20} />
            </div>
          </div>
        </div>
        <div className="lg:block xl:left-[150px] xl:top-0 hidden absolute left-[120px] top-[-10px] z-5 rotate-[12deg]">
          <div className="relative flex flex-col justify-center items-start gap-3 bg-white p-4 rounded-lg">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Palette
                  strokeWidth={1.75}
                  className="bg-blue-900 text-blue-50 w-4 h-4"
                />
              </div>
              <p className="text-center text-blue-900 font-ubuntu font-medium tracking-tight-custom">
                Thème de couleur
              </p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              {Object.entries(THEMES).map(([themeKey, themeInfo]) => (
                <motion.button
                  key={themeKey}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => changeTheme(themeKey as ThemeKey)}
                  className={`flex flex-col items-center justify-center ${
                    currentTheme === themeKey ? "opacity-100" : "opacity-25"
                  }`}
                >
                  <div
                    className={`w-14 h-7 ${themeInfo.color} rounded-lg`}
                  ></div>
                  <p
                    className={`text-xs text-center ${themeInfo.textColor} font-ubuntu font-medium tracking-tight-custom`}
                  >
                    {themeInfo.name}
                  </p>
                </motion.button>
              ))}
            </div>
            <div className="xl:right-0 absolute top-[-40px] right-4 flex flex-col items-start">
              <p className="font-gochi-hand text-grey text-lg">
                Personnalise ton app !
              </p>
              <Image src="/arrow_02.svg" alt="Flèche" width={39} height={20} />
            </div>
          </div>
        </div>
        <Image
          src="/rectangle.svg"
          alt="Rectangle"
          width={300}
          height={300}
          className="absolute top-4 left-[100px] transform z-4"
        />
        <Image
          src="/ellipse.svg"
          alt="Ellipse"
          width={300}
          height={300}
          className="absolute bottom-[-25px] right-[125px] transform z-4"
        />
      </div>
      <div className="absolute bottom-0 h-[400px] w-[100vw] bg-gradient-to-t from-[#f3f7ff] to-[#f3f8ff00] z-2"></div>
      <div className="bg-[url('/grille.svg')] absolute w-full h-full top-0 z-1"></div>
    </div>
  );
}
