"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:py-24 w-full mx-auto py-20">
      <div className="flex flex-col gap-20 max-w-9xl w-[90%] mx-auto">
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
          <div className="col-start-1 row-start-1 row-span-1 md:col-span-3 lg:col-span-2 lg:row-span-1 lg:col-start-1 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/logo_libellule.svg"
                alt="Logo de Libellule"
                width={24}
                height={150}
              />
              <p className="text-grey text-2xl font-bold font-ubuntu tracking-tight-custom">
                Libellule
              </p>
            </div>
            <div>
              <p className="text-blue-800 text-lg font-normal">
                Des questions, des problèmes, des bugs, des améliorations ?
              </p>
              <Link
                href="mailto:support@libellule.app"
                className="text-blue-800 font-semibold text-lg underline"
              >
                support@libellule.app
              </Link>
            </div>
          </div>
          <div className="col-start-1 row-start-2 row-span-1 lg:col-span-1 lg:row-start-1 lg:col-start-3 flex flex-col gap-2">
            <p className="text-blue-900 text-xl font-bold font-host-grotesk">
              Nos réseaux sociaux
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="https://www.instagram.com/libelluleapp/"
                target="_blank"
                className="text-blue-800 font-normal text-lg"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/libelluleapp/"
                target="_blank"
                className="text-blue-800 font-normal text-lg"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCHpn7nUzjKGCi0bSPLvLDqA"
                target="_blank"
                className="text-blue-800 font-normal text-lg"
              >
                YouTube
              </Link>
            </div>
          </div>
          <div className="col-start-1 md:col-start-2 row-start-3 md:row-start-2 row-span-1 lg:col-span-1 lg:row-start-1 lg:col-start-4 flex flex-col gap-4">
            <p className="text-blue-900 text-xl font-bold font-host-grotesk">
              Nos ressources
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="https://github.com/LibelluleApp/LibelluleApp"
                target="_blank"
                className="text-blue-800 font-normal text-lg"
              >
                Github
              </Link>
              <Link
                href="https://www.figma.com/design/zZKYcCDHp4bXGOJc6M65o4/Libellule?node-id=0-1&t=v9fxudCar8s8TSYq-1"
                target="_blank"
                className="text-blue-800 font-normal text-lg"
              >
                Figma
              </Link>
            </div>
          </div>
          <div className="col-start-1 md:col-start-3 row-start-4 md:row-start-2 row-span-1 lg:col-span-1 lg:row-start-1 lg:col-start-5 flex flex-col gap-4">
            <p className="text-blue-900 text-xl font-bold font-host-grotesk">
              À propos
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="/patchnotes"
                className="text-blue-800 font-normal text-lg"
              >
                Journal de mises à jour
              </Link>
              <Link
                href="/mentions-legales"
                className="text-blue-800 font-normal text-lg"
              >
                Mentions légales
              </Link>
              <Link href="/cgu" className="text-blue-800 font-normal text-lg">
                CGU
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-grey text-sm font-normal">
            Une application créée par 
            <Link
              href="https://github.com/Raphitpt"
              target="_blank"
              className="underline"
            >
              Raphaël Tiphonet
            </Link>
             et 
            <Link
              href="https://arnaudgct.fr/"
              target="_blank"
              className="underline"
            >
              Arnaud Graciet
            </Link>
          </p>
          <p className="text-grey text-sm font-normal">
            © 2025 - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
