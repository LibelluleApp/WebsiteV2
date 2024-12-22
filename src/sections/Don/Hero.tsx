"use client";
import { HandCoins, Laptop, Handshake } from "lucide-react";
// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="md:pt-[112px] pt-[111px] bg-gradient-to-b from-blue-50 to-background">
      <div className="lg:flex-row lg:gap-20 flex flex-col gap-10 w-[90%] mx-auto max-w-9xl">
        <div className="flex flex-col gap-6 items-start justify-center">
          <div className="flex flex-col gap-1 items-start justify-center">
            <div className="flex gap-2 items-center">
              <HandCoins strokeWidth={1.75} className="text-blue-900" />
              <p className="text-blue-900 text-3xl font-extrabold font-host-grotesk">
                Soutenez l&apos;application Libellule
              </p>
            </div>
            <p className="text-grey text-xl font-normal">
              Soutenez notre travail avec un don
            </p>
          </div>
          <p className="text-blue-800 text-lg font-normal leading-relaxed">
            Libellule, c&apos;est bien plus qu&apos;une application : c&apos;est
            une initiative portée par des étudiants, pour les étudiants. Notre
            mission est de centraliser les services essentiels pour simplifier
            votre quotidien et répondre aux défis que nous partageons tous dans
            la vie étudiante.
          </p>
          <div className="flex flex-col gap-1 items-start justify-center">
            <div className="flex gap-2 items-center">
              <Laptop strokeWidth={1.75} className="text-blue-900" />
              <p className="text-blue-900 text-lg font-semibold font-host-grotesk">
                Un projet 100% bénévole et indépendant
              </p>
            </div>
            <p className="text-blue-800 text-lg font-normal leading-relaxed">
              Créée avec cœur et détermination, Libellule est le fruit du
              travail bénévole de deux étudiants convaincus qu&apos;une vie
              étudiante épanouie passe par des outils accessibles et bien
              conçus. Ce projet n’a qu’un seul but : être utile à la communauté.
              Mais pour continuer à le développer et le maintenir, Libellule a
              besoin de vous.
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <div className="flex gap-2 items-center">
              <Handshake strokeWidth={1.75} className="text-blue-900" />
              <p className="text-blue-900 text-lg font-semibold font-host-grotesk">
                Pourquoi avons-nous besoin de votre soutien ?
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center">
              <p className="text-blue-800 text-lg font-normal leading-relaxed">
                Libellule est un projet sans publicités ni revente de données
                garantissant une transparence totale dans nos actions sur notre
                Github et Figma. Cela signifie que nous prenons en charge tous
                les frais nécessaires pour garantir sa qualité et sa fiabilité.
              </p>
              <p className="text-blue-800 text-lg font-normal leading-relaxed">
                Ces frais incluent :
                <ul className="list-disc list-inside">
                  <li>
                    La licence développeur,{" "}
                    <span className="text-grey">
                      indispensable pour diffuser et mettre à jour
                      l&apos;application sur les stores d’application.
                    </span>
                  </li>
                  <li>
                    L&apos;hébergement,{" "}
                    <span className="text-grey">
                      pour pouvoir stocker en base de données les devoirs, les
                      liens des emplois du temps, des comptes...
                    </span>
                  </li>
                  <li>
                    Le nom de domaine,{" "}
                    <span className="text-grey">
                      pour offrir un espace en ligne professionnel et
                      accessible.
                    </span>
                  </li>
                </ul>
              </p>
              <p className="text-blue-800 text-lg font-normal leading-relaxed">
                En tant qu&apos;étudiants, ces dépenses représentent un
                investissement important. Votre contribution, qu’elle soit
                ponctuelle ou mensuelle, nous aidera à rembourser ces coûts et à
                continuer à faire grandir Libellule.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2 items-start justify-center">
            <Link href="https://ko-fi.com/libelluleapp" target="_blank">
              <button className="flex px-16 py-2 bg-blue-600 rounded-lg justify-center items-center text-blue-50 font-medium">
                Faire un don
              </button>
            </Link>
            <p className="text-grey text-base font-normal leading-relaxed">
              Merci d’avance pour votre générosité et pour croire en notre
              projet !
            </p>
          </div> */}
        </div>
        <div className="flex items-center justify-center">
          <iframe
            id="kofiframe"
            title="libelluleapp"
            src="https://ko-fi.com/libelluleapp/?hidefeed=true&widget=true&embed=true&preview=true"
            height="502"
            className="s:w-[415px] lg:w-auto rounded-lg w-[325px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
