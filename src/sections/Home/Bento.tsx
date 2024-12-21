"use client";
import Card from "@/src/components/cardBento";

export default function BentoSection() {
  return (
    <section className="flex flex-col gap-10 mt-20 w-[90%] mx-auto max-w-9xl">
      <div>
        <p className="text-blue-900 text-2xl font-semibold font-host-grotesk">
          Une{" "}
          <span className="text-blue-900 text-2xl font-extrabold font-host-grotesk">
            seule application
          </span>{" "}
          pour répondre à{" "}
          <span className="text-blue-900 text-2xl font-extrabold font-host-grotesk">
            vos besoins
          </span>
        </p>
        <p className="text-grey text-lg font-normal font-outfit">
          Découvrez les fonctionnalités qui vont simplifier votre vie étudiante.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[300px_200px_200px] lg:grid-cols-6 lg:grid-rows-[300px_200px]">
        <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-1 h-fit">
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
                "/screens/themes/Blue/Light/Emploi_du_temps.png",
                "top-[60px]",
                "right-[100px]",
              ],
              [
                "/screens/themes/Blue/Light/Emploi_du_temps.png",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"lg"}
          />
        </div>
        <div className="col-start-1 row-start-2 md:col-start-4 md:row-start-1 md:col-span-3 md:row-span-1 h-fit">
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
                "/screens/themes/Blue/Light/Agenda.png",
                "top-[60px]",
                "right-[100px]",
              ],
              [
                "/screens/themes/Blue/Light/Agenda.png",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"xl"}
          />
        </div>
        <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-2 md:col-span-6 md:row-span-1 lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit">
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
                "/screens/themes/Blue/Light/Mails.png",
                "top-[40px]",
                "right-[70px]",
              ],
              [
                "/screens/themes/Blue/Light/Mails.png",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
          />
        </div>
        <div className="col-start-1 row-start-4 md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-1 lg:col-start-3 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit">
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
                "/screens/themes/Blue/Light/Restauration.png",
                "bottom-[-105px]",
                "right-[-20px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
          />
        </div>
        <div className="col-start-1 row-start-5 md:col-start-4 md:row-start-3 md:col-span-3 md:row-span-1 lg:col-start-5 lg:row-start-2 lg:col-span-2 lg:row-span-1 h-fit">
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
            screens={[
              [
                "/screens/themes/Blue/Light/Paramètres.png",
                "top-[40px]",
                "right-[50px]",
              ],
              [
                "/screens/themes/Blue/Light/Couleurs.png",
                "top-[10px]",
                "right-[-70px]",
              ],
            ]}
            alt={["Mockup de l'application", "Mockup de l'application"]}
            size={"md"}
          />
        </div>
      </div>
    </section>
  );
}
