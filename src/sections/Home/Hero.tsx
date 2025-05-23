"use client";

import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Palette } from "lucide-react";
import Switcher from "@/src/components/switch";
import { useState } from "react";
import { motion } from "framer-motion";

const THEMES = {
  azure: {
    name: "Azure",
    color: "bg-blue-bg",
    textColor: "text-blue-bg",
    border: "border-blue-border",
  },
  petal: {
    name: "Petal",
    color: "bg-pink-bg",
    textColor: "text-pink-bg",
    border: "border-pink-border",
  },
  amethyst: {
    name: "Améthyst",
    color: "bg-purple-bg",
    textColor: "text-purple-bg",
    border: "border-purple-border",
  },
  corail: {
    name: "Corail",
    color: "bg-orange-bg",
    textColor: "text-orange-bg",
    border: "border-orange-border",
  },
  emerald: {
    name: "Emerald",
    color: "bg-green-bg",
    textColor: "text-green-bg",
    border: "border-green-border",
  },
};

const SCREEN_IMAGES = {
  light: {
    azure: {
      agenda: "/screens/themes/Blue/Light/devoirs/Devoirs.webp",
      accueil: "/screens/themes/Blue/Light/Accueil.webp",
      emploi_du_temps:
        "/screens/themes/Blue/Light/emploi_du_temps/week/Emploi_du_temps.webp",
    },
    petal: {
      agenda: "/screens/themes/Pink/Light/Agenda.webp",
      accueil: "/screens/themes/Pink/Light/Accueil.webp",
      emploi_du_temps: "/screens/themes/Pink/Light/Emploi_du_temps.webp",
    },
    amethyst: {
      agenda: "/screens/themes/Purple/Light/Agenda.webp",
      accueil: "/screens/themes/Purple/Light/Accueil.webp",
      emploi_du_temps: "/screens/themes/Purple/Light/Emploi_du_temps.webp",
    },
    corail: {
      agenda: "/screens/themes/Orange/Light/Agenda.webp",
      accueil: "/screens/themes/Orange/Light/Accueil.webp",
      emploi_du_temps: "/screens/themes/Orange/Light/Emploi_du_temps.webp",
    },
    emerald: {
      agenda: "/screens/themes/Green/Light/Agenda.webp",
      accueil: "/screens/themes/Green/Light/Accueil.webp",
      emploi_du_temps: "/screens/themes/Green/Light/Emploi_du_temps.webp",
    },
  },
  dark: {
    azure: {
      agenda: "/screens/themes/Blue/Dark/Agenda.webp",
      accueil: "/screens/themes/Blue/Dark/Accueil.webp",
      emploi_du_temps: "/screens/themes/Blue/Dark/Emploi_du_temps.webp",
    },
    petal: {
      agenda: "/screens/themes/Pink/Dark/Agenda.webp",
      accueil: "/screens/themes/Pink/Dark/Accueil.webp",
      emploi_du_temps: "/screens/themes/Pink/Dark/Emploi_du_temps.webp",
    },
    amethyst: {
      agenda: "/screens/themes/Purple/Dark/Agenda.webp",
      accueil: "/screens/themes/Purple/Dark/Accueil.webp",
      emploi_du_temps: "/screens/themes/Purple/Dark/Emploi_du_temps.webp",
    },
    corail: {
      agenda: "/screens/themes/Orange/Dark/Agenda.webp",
      accueil: "/screens/themes/Orange/Dark/Accueil.webp",
      emploi_du_temps: "/screens/themes/Orange/Dark/Emploi_du_temps.webp",
    },
    emerald: {
      agenda: "/screens/themes/Green/Dark/Agenda.webp",
      accueil: "/screens/themes/Green/Dark/Accueil.webp",
      emploi_du_temps: "/screens/themes/Green/Dark/Emploi_du_temps.webp",
    },
  },
};

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("azure");
  const [animateKey, setAnimateKey] = useState(0); // State pour déclencher l'animation

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
    setAnimateKey((prevKey) => prevKey + 1); // Incrémenter la clé pour forcer l'animation
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setAnimateKey((prevKey) => prevKey + 1); // Incrémenter la clé pour forcer l'animation
  };

  const getThemeBorder = (): string => {
    return THEMES[currentTheme as ThemeKey]?.border || "border-blue-border";
  };

  return (
    <section className="s:gap-20 md:pt-[112px] flex flex-col relative gap-4 items-center justify-center pt-[111px] overflow-hidden bg-gradient-to-b from-[#f3f7ff] to-[#deebfe]">
      <div className="flex flex-col items-center justify-center gap-8 z-2 px-[5%]">
        <div className="md:items-center flex flex-col items-start gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0,
            }}
            className="s:text-4xl md:text-center text-3xl text-start font-host-grotesk text-blue-900 font-extrabold"
          >
            Votre vie universitaire dans votre smartphone 📱
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.1,
            }}
            className="s:text-xl md:text-center text-lg text-start text-grey font-outfit max-w-[700px]"
          >
            Libellule a été imaginé par des étudiants de l’IUT d’Angoulême pour regrouper tous
            les services de l’université de Poitiers.
          </motion.h3>
        </div>
        <div className="md:items-center flex flex-col items-start gap-2 w-full">
          <div className="s:gap-4 flex gap-0">
            <motion.div
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Final state
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.libellule.libellule"
                target="_blank"
              >
                <Image
                  src="/playstore.svg"
                  alt="Bouton Play Store"
                  width={143}
                  height={40}
                  className="s:scale-100 scale-90"
                />
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Final state
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.4,
              }}
            >
              <Link
                href="https://apps.apple.com/fr/app/libelluleapp/id6502843331"
                target="_blank"
              >
                <Image
                  src="/appstore.svg"
                  alt="Bouton App Store"
                  width={135}
                  height={40}
                  className="s:scale-100 scale-90"
                />
              </Link>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.5,
            }}
            className="md:text-center text-grey text-start font-outfit text-xs"
          >
            En téléchargeant l’app, vous acceptez les 
            <Link href="/cgu" className="underline">
              conditions générales d’utilisation
            </Link>
          </motion.p>
        </div>
      </div>
      <div className="sm:h-[400px] flex items-center justify-center relative h-[500px]">
        {/* <div className="md:flex absolute hidden flex-col justify-center items-center bottom-2 left-1/2 transform -translate-x-1/2 z-9">
          <Mouse strokeWidth={1.75} className="text-blue-900" />
          <p className="text-xs font-medium font-host-grotesk text-center text-blue-900">
            Scroll
          </p>
        </div> */}
        <div className="sm:h-[300px] sm:from-0% absolute bottom-0 h-[475px] w-[100vw] bg-gradient-to-t from-[#f3f7ff] from-40% to-[#f3f8ff00] z-8 pointer-events-none"></div>
        <motion.div
          key={`${animateKey}-emploi_du_temps`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          }}
          className="sm:left-[100px] s:left-[50px] absolute left-[25px] top-24 z-6 pointer-events-none"
        >
          <Image
            src={getScreenImage("emploi_du_temps")}
            alt="Mockup de l'application"
            width={218}
            height={472}
            className={`s:scale-100 scale-90 border-8 rounded-3xl shadow ${getThemeBorder()}`}
          />
        </motion.div>

        <motion.div
          key={`${animateKey}-accueil`} // Clé unique pour l'écran accueil
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }} // Durée de l'animation
          className="absolute left-1/2 top-0 z-7 pointer-events-none"
        >
          <Image
            src={getScreenImage("accueil")}
            alt="Mockup de l'application"
            width={276}
            height={472}
            className={`s:scale-100 scale-90 border-8 transform -translate-x-1/2 rounded-3xl shadow ${getThemeBorder()}`}
          />
        </motion.div>

        <motion.div
          key={`${animateKey}-agenda`} // Clé unique pour l'écran agenda
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.1,
          }} // Durée de l'animation
          className="sm:right-[100px] s:right-[50px] absolute right-[25px] top-24 z-6 pointer-events-none"
        >
          <Image
            src={getScreenImage("agenda")}
            alt="Mockup de l'application"
            width={218}
            height={472}
            className={`s:scale-100 scale-90 border-8 rounded-3xl shadow ${getThemeBorder()}`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.1,
          }}
          className="xs:right-[-60px] xs:bottom-40 s:right-[0px] s:bottom-36 sm:right-[30px] sm:top-[-10px] md:right-[80px] md:top-8 md:z-7 lg:z-5 lg:right-[140px] lg:top-10 absolute right-[-100px] bottom-44 z-9"
        >
          <div className="s:scale-90 s:rotate-[-10deg] sm:scale-95 sm:rotate-[-12deg] lg:scale-95 rotate-[-10deg] scale-90">
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
              <Switcher setDarkMode={toggleDarkMode} darkMode={darkMode} />
              <div className="md:top-[-65px] absolute top-[-50px] right-14 flex flex-col items-end">
                <p className="font-gochi-hand text-grey text-lg mr-10">
                  Test le mode sombre
                </p>
                <Image
                  src="/arrow_01.svg"
                  alt="Flèche"
                  width={39}
                  height={20}
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          }}
          className="xs:left-[-145px] s:left-[-90px] sm:left-[-40px] sm:top-[-40px] md:left-[0px] md:top-[-30px] lg:left-[120px] lg:top-[-10px] lg:z-5 xl:left-[120px] xl:top-[-10px] absolute left-[-170px] bottom-2 z-9"
        >
          <div className="sm:rotate-[12deg] lg:scale-95 scale-90 rotate-[10deg]">
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
                <Image
                  src="/arrow_02.svg"
                  alt="Flèche"
                  width={39}
                  height={20}
                />
              </div>
            </div>
          </div>
        </motion.div>
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
    </section>
  );
}
