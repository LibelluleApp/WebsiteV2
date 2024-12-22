"use client";

import Tag from "@/src/components/tag";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Globe } from "lucide-react";

export default function TimelineSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col gap-10 w-[90%] mx-auto max-w-9xl">
        <div>
          <p className="text-blue-900 text-2xl font-semibold font-host-grotesk">
            Qui sommes-nous ?
          </p>
          <p className="text-grey text-lg font-normal font-outfit">
            Deux étudiants passionnés pour développer un projet 100% bénévole et
            indépendant.
          </p>
        </div>
        <div className="md:gap-14 lg:flex-row lg:gap-6 flex flex-col gap-8 w-full">
          <div className="w-full">
            <div className="relative">
              <div className="flex flex-col gap-2 border-l-2 px-6 border-grey">
                <p className="text-blue-900 text-xl font-extrabold font-host-grotesk ">
                  De septembre 2024 à aujourd&apos;hui
                </p>
                <Tag
                  name="Libellule"
                  icon="/logo_libellule.svg"
                  alt="Logo en forme de L"
                />
                <div className="flex flex-col gap-2 mb-10">
                  <p className="text-blue-800 text-base font-normal leading-[27px]">
                    Après la réussite de MMI Companion, nous avons réalisé que
                    notre projet pouvait répondre à{" "}
                    <span className="font-semibold">un besoin plus large</span>.
                  </p>
                  <p className="text-blue-800 text-base font-normal leading-[27px]">
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
              <div className="absolute top-1 left-[-6.5px] h-4 w-4 rounded-full bg-blue-900"></div>
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
                  <p className="text-blue-800 text-base font-normal leading-[27px]">
                    Après notre première année en MMI, nous avons pu nous rendre
                    compte du{" "}
                    <span className="font-semibold">manque de simplicité</span>{" "}
                    et de <span className="font-semibold">modernité</span> des
                    outils de l’université de Poitiers.
                  </p>
                  <p className="text-blue-800 text-base font-normal leading-[27px]">
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
              <div className="absolute top-1 left-[-6.5px] h-4 w-4 rounded-full bg-blue-900"></div>
            </div>
          </div>
          <div className="md:h-[430px] lg:items-stretch lg:w-[1000px] lg:h-auto h-[400px] relative w-full items-center">
            <div className="s:w-[500px] md:w-[600px] lg:w-[500px] md:h-[430px] lg:h-[400px] absolute w-[480px] h-[370px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 flex justify-between items-center">
              <div className="s:right-64 s:top-0 s:scale-100 md:w-80 md:h-72 lg:w-60 lg:h-72 scale-90 right-56 top-0 absolute w-60 h-72 z-6 rotate-[-10deg]">
                <Image
                  src="/rapahel_tiphonet.png"
                  layout="fill"
                  objectFit="cover"
                  alt={""}
                  className="rounded-2xl relative"
                />
                <div className="absolute h-full w-full bg-gradient-to-t from-[#ecf7fe] to-[#ecf7fe00] rounded-2xl"></div>
                <div className="flex flex-col gap-1 absolute bottom-2 w-full p-4 bg-gradient-to-t from-[#ecf7fe] to-[#ecf7fe00] rounded-b-2xl">
                  <p className="text-blue-900 text-xl font-semibold font-host-grotesk">
                    Raphaël Tiphonet
                  </p>
                  <div className="flex gap-3 items-center">
                    <Tag name="Développeur" icon={false} alt="" />
                    <div className="flex gap-2">
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link
                          href="https://www.instagram.com/raph_tiph/"
                          target="_blank"
                        >
                          <Instagram
                            strokeWidth={1.75}
                            size={20}
                            className="text-blue-700"
                          />
                        </Link>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link
                          href="https://www.linkedin.com/in/rapha%C3%ABl-tiphonet-a28067257/"
                          target="_blank"
                        >
                          <Linkedin
                            strokeWidth={1.75}
                            size={20}
                            className="text-blue-700"
                          />
                        </Link>
                      </motion.div>
                      {/* <motion.div whileTap={{ scale: 0.8 }}>
                    <Link
                      href="https://rtiphonet.me/"
                      target="_blank"
                    >
                      <Globe
                        strokeWidth={1.75}
                        size={20}
                        className="text-blue-700"
                      />
                    </Link>
                  </motion.div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="s:right-0 s:top-20 s:scale-100 md:w-80 md:h-72 md:top-28 lg:w-60 lg:h-72 lg:top-20 scale-90 right-4 top-20 absolute w-60 h-72 z-5 rotate-[10deg]">
                <Image
                  src="/arnaud_graciet.png"
                  layout="fill"
                  objectFit="cover"
                  alt={""}
                  className="rounded-2xl relative"
                />
                <div className="absolute h-full w-full bg-gradient-to-t from-[#ecf7fe] to-[#ecf7fe00] rounded-2xl"></div>
                <div className="flex flex-col gap-1 absolute bottom-2 w-full p-4 bg-gradient-to-t from-[#ecf7fe] to-[#ecf7fe00] rounded-b-2xl">
                  <p className="text-blue-900 text-xl font-semibold font-host-grotesk">
                    Arnaud Graciet
                  </p>
                  <div className="flex gap-3 items-center">
                    <Tag name="Designer" icon={false} alt="" />
                    <div className="flex gap-2">
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link
                          href="https://www.instagram.com/arnaud_gct/"
                          target="_blank"
                        >
                          <Instagram
                            strokeWidth={1.75}
                            size={20}
                            className="text-blue-700"
                          />
                        </Link>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link
                          href="https://www.linkedin.com/in/arnaud-graciet/"
                          target="_blank"
                        >
                          <Linkedin
                            strokeWidth={1.75}
                            size={20}
                            className="text-blue-700"
                          />
                        </Link>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.8 }}>
                        <Link href="https://arnaudgct.fr/" target="_blank">
                          <Globe
                            strokeWidth={1.75}
                            size={20}
                            className="text-blue-700"
                          />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
