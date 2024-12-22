"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstallApp() {
  return (
    <section className="s:y-14 s:px-12 flex flex-col gap-10 w-full bg-background py-10 px-8 overflow-hidden">
      <div className="md:items-stretch md:flex-row md:gap-20 md:h-96 xl:gap-40 flex flex-col gap-14 max-w-9xl mx-auto h-[675px] items-center">
        <div className="md:gap-10 flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-1">
            <p className="lg:text-3xl text-blue-900 text-2xl font-semibold font-host-grotesk">
              Essayez Libellule dès maintenant pour construire ensemble une
              application qui nous ressemble !
            </p>
            <p className="text-grey text-lg font-normal font-outfit">
              Déjà +200 étudiant.e.s sur l’application. Si vous êtes étudiant à
              l’IUT d’Angoulême, c’est l’application à avoir dans sa poche.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="s:gap-4 flex gap-2">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.libellule.libellule"
                  target="_blank"
                >
                  <Image
                    src="/playstore.svg"
                    alt="Bouton Play Store"
                    width={150}
                    height={40}
                    className="w-[140px]"
                  />
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link
                  href="https://apps.apple.com/fr/app/libelluleapp/id6502843331"
                  target="_blank"
                >
                  <Image
                    src="/appstore.svg"
                    alt="Bouton App Store"
                    width={150}
                    height={40}
                    className="w-[140px]"
                  />
                </Link>
              </motion.div>
            </div>
            <p className="lg:text-sm text-grey text-start font-outfit text-xs">
              En téléchargeant l’app, vous acceptez les 
              <Link href="/cgu" className="underline">
                conditions générales d’utilisation
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/screens/themes/Blue/Light/Accueil.png"
            alt="Mockup de l'application"
            width={350}
            height={800}
            className="s:w-[350px] md:w-[300px] lg:w-[350px] w-[275px] rounded-3xl border-8 border-blue-200 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
