"use client";

import Tag from "@/src/components/tag";

export default function TimelineSection() {
  return (
    <section className="flex flex-col gap-10 mt-20 w-[90%] mx-auto max-w-9xl">
      <div>
        <p className="text-blue-900 text-2xl font-semibold font-host-grotesk">
          Qui sommes-nous ?
        </p>
        <p className="text-grey text-lg font-normal font-outfit">
          Deux étudiants passionnés pour développer un projet 100% bénévole et
          indépendant.
        </p>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center justify-center">
          <div>
            <div className="relative">
              <div className="flex flex-col gap-2 border-l-2 px-6 border-grey">
                <p className="text-blue-900 text-xl font-extrabold font-host-grotesk">
                  De septembre 2024 à aujourd&apos;hui
                </p>
                <Tag
                  name="Libellule"
                  icon="/logo_libellule.svg"
                  alt="Logo en forme de L"
                />
                <div className="flex flex-col gap-2 mb-10">
                  <p className="text-blue-800 text-lg font-normal leading-[27px]">
                    Après la réussite de MMI Companion, nous avons réalisé que
                    notre projet pouvait répondre à{" "}
                    <span className="font-semibold">un besoin plus large</span>.
                  </p>
                  <p className="text-blue-800 text-lg font-normal leading-[27px]">
                    Nous avons donc imaginé{" "}
                    <span className="font-semibold">Libellule</span> avec le
                    même objectif qui est de rendre la vie étudiante à
                    l&apos;IUT{" "}
                    <span className="font-semibold">plus simple</span> et{" "}
                    <span className="font-semibold">plus fluide</span>, en
                    offrant des outils pratiques et adaptés aux besoins des
                    étudiant.e.s.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-blue-900"></div>
            </div>
            <div className="relative">
              <div className="flex flex-col gap-2 border-l-2 px-6 border-grey">
                <p className="text-blue-900 text-xl font-extrabold font-host-grotesk">
                  De septembre 2023 à juin 2024
                </p>
                <Tag
                  name="MMI Companion"
                  icon="/logo_mmicompanion.svg"
                  alt="Logo en forme de M de trois couleurs différentes"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-blue-800 text-lg font-normal leading-[27px]">
                    Après notre première année en MMI, nous avons pu nous rendre
                    compte du{" "}
                    <span className="font-semibold">manque de simplicité</span>{" "}
                    et de <span className="font-semibold">modernité</span> des
                    outils de l’université de Poitiers.
                  </p>
                  <p className="text-blue-800 text-lg font-normal leading-[27px]">
                    Nous avons donc imaginé et développé une première
                    application qui se nommait{" "}
                    <span className="font-semibold">MMI Companion</span> et qui
                    permettait déjà de regrouper tous les outils nécessaires
                    pour les étudiants en MMI{" "}
                    <span className="text-grey">
                      (emploi du temps, agenda collaboratif, une partie
                      informations, voir ses absences et ses notes)
                    </span>
                  </p>
                </div>
              </div>
              <div className="absolute top-0 -ml-1.5 h-4 w-4 rounded-full bg-blue-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
