"use client";
import Card from "@/src/components/cardBento";
import { motion } from "framer-motion";

export default function BentoSection() {
  return (
    <section className="flex flex-col gap-10 mt-20 w-[90%] mx-auto max-w-9xl">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
          className="text-blue-900 text-2xl font-semibold font-host-grotesk"
        >
          Une{" "}
          <span className="text-blue-900 text-2xl font-extrabold font-host-grotesk">
            seule application
          </span>{" "}
          pour répondre à{" "}
          <span className="text-blue-900 text-2xl font-extrabold font-host-grotesk">
            vos besoins
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="text-grey text-lg font-normal font-outfit"
        >
          Découvrez les fonctionnalités qui vont simplifier votre vie étudiante.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[300px_200px_200px] lg:grid-cols-6 lg:grid-rows-[300px_200px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
          className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-1 h-fit"
        >
          <Card
            name={"Emploi du temps"}
            description={
              <p className="text-blue-800 text-lg font-normal">
                <span className="text-blue-800 text-lg font-semibold">
                  Ne perdez plus de temps
                </span>{" "}
                à vous connecter sur UPPlanning ou à installer TimeCalendar.
              </p>
            }
            alignCenter={true}
            btn={false}
            screens={[
              [
                "/screens/themes/Blue/Light/emploi_du_temps/day/Emploi_du_temps.webp",
                "top-[60px]",
                "right-[100px]",
              ],
              [
                "/screens/themes/Blue/Light/emploi_du_temps/week/Emploi_du_temps.webp",
                "top-[10px]",
                "right-[-60px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"lg"}
            feature={"Emploi du temps"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="col-start-1 row-start-2 md:col-start-4 md:row-start-1 md:col-span-3 md:row-span-1 h-fit"
        >
          <Card
            name={"Devoirs"}
            description={
              <p className="text-blue-800 text-lg font-normal">
                Liste de{" "}
                <span className="text-blue-800 text-lg font-semibold">
                  vos devoirs à faire
                </span>{" "}
                et{" "}
                <span className="text-blue-800 text-lg font-semibold">
                  vos évaluations
                </span>{" "}
                en commun avec votre groupe de classe.
              </p>
            }
            alignCenter={true}
            btn={"En savoir plus"}
            screens={[
              [
                "/screens/themes/Blue/Light/devoirs/Devoirs_Add.webp",
                "top-[60px]",
                "right-[100px]",
              ],
              [
                "/screens/themes/Blue/Light/devoirs/Devoirs.webp",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"xl"}
            feature={"Devoirs"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="col-start-1 row-start-3 md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-1 lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit"
        >
          <Card
            name={"Mails"}
            description={
              <p className="text-blue-800 text-lg font-normal">
                <span className="text-blue-800 text-lg font-semibold">
                  Ne passez plus à côté
                </span>{" "}
                de vos mails étudiants.
              </p>
            }
            alignCenter={false}
            btn={false}
            screens={[
              [
                "/screens/themes/Blue/Light/mails/Mails_Details.webp",
                "top-[40px]",
                "right-[70px]",
              ],
              [
                "/screens/themes/Blue/Light/mails/Mails.webp",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
            feature={"Mails"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="col-start-1 row-start-4 md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-1 lg:col-start-3 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit"
        >
          <Card
            name={"Menu du Crousty"}
            description={
              <p className="text-blue-800 text-lg font-normal">
                Soyez au courant du{" "}
                <span className="text-blue-800 text-lg font-semibold">
                  menu du midi.
                </span>{" "}
              </p>
            }
            alignCenter={false}
            btn={false}
            screens={[
              [""],
              [
                "/screens/themes/Blue/Light/restauration/Restauration.webp",
                "bottom-[-105px]",
                "right-[-20px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
            feature={"Restauration"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="col-start-1 row-start-5 md:col-start-4 md:row-start-3 md:col-span-3 md:row-span-1 lg:col-start-5 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit"
        >
          <Card
            name={"Personnalisation"}
            description={
              <p className="text-blue-800 text-lg font-normal">
                Faites de Libellule, une application qui vous{" "}
                <span className="text-blue-800 text-lg font-semibold">
                  ressemble.
                </span>{" "}
              </p>
            }
            alignCenter={false}
            btn={false}
            screens={[[""], [""]]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
            feature={"Personnalisation"}
          />
        </motion.div>
      </div>
    </section>
  );
}
