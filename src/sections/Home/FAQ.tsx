"use client";

import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionItem } from "@/src/components/accordion";
import TitleSection from "@/src/components/titleSection";
import Link from "next/link";

interface FAQProps {
  initialOpenIndex?: number | null;
}

// Type personnalisé pour l'événement
declare global {
  interface WindowEventMap {
    openFaqSection: CustomEvent<{ index: number }>;
  }
}

export const FAQ: React.FC<FAQProps> = ({ initialOpenIndex = null }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    initialOpenIndex
  );
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gestionnaire d'événement pour ouvrir une section
    const handleOpenSection = (event: CustomEvent<{ index: number }>) => {
      const { index } = event.detail;
      setActiveIndex(index);

      // Attendre que le DOM se mette à jour
      setTimeout(() => {
        faqRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 400); // Délai ajustable si nécessaire
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener(
      "openFaqSection",
      handleOpenSection as EventListener
    );

    // Nettoyer l'écouteur
    return () => {
      window.removeEventListener(
        "openFaqSection",
        handleOpenSection as EventListener
      );
    };
  }, []);

  const faqItems: AccordionItem[] = [
    {
      title: "Je suis en MMI, je ne peux pas créer de compte, pourquoi ?",
      content: (
        <div className="flex flex-col">
          <p className="text-blue-800">
            Les étudiants de MMI ne peuvent pas créer de compte car ils ont un
            compte déjà créé. Pour <span>recevoir vos identifiants</span>,
            veuillez contacter l&apos;équipe de Libellule depuis la page{" "}
            <Link href="/contact">contact</Link> ou directement sur notre{" "}
            <Link
              href="https://www.instagram.com/libelluleapp/"
              target="_blank"
              className="font-semibold"
            >
              compte Instagram
            </Link>{" "}
            en renseignant votre adresse mail étudiante.
          </p>
        </div>
      ),
    },
    {
      title: "Comment fonctionne les devoirs ?",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-blue-800">
            Avant Libellule, chaque étudiant devait inscrire les devoirs et les
            évaluations dans son propre agenda, qu&apos;il soit papier ou
            numérique. Nous proposons maintenant qu&apos;
            <span className="font-semibold">un seul étudiant</span> par groupe
            de classe se charge de noter les devoirs et les évaluations pour{" "}
            <span className="font-semibold">
              l&apos;ensemble de ses camarades
            </span>
            .
          </p>
          <p className="text-blue-800">
            Le <span className="font-semibold">principal avantage</span> est
            pour les étudiants qui peuvent être absents lors d&apos;un cours où
            un enseignant annonce une évaluation. Grâce à Libellule, ces
            étudiants seront informés des évaluations prévues.
          </p>
        </div>
      ),
    },
    {
      title: "Comment est choisi le responsable des devoirs ?",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-blue-800">
            Au début de l&apos;année, le{" "}
            <span className="font-semibold">premier étudiant</span> à
            s&apos;inscrire est désigné comme responsable des devoirs de son
            groupe de classe. Cependant, cet étudiant peut{" "}
            <span className="font-semibold">déléguer ce rôle</span> à un autre
            volontaire via son profil.
          </p>
          <p className="text-blue-800">
            En effet, étant donné que le responsable peut déléguer son rôle à
            tout moment, l&apos;objectif est que chaque groupe de classe
            choisisse son responsable des devoirs en concertation. Cela permet
            une{" "}
            <span className="font-semibold">organisation personnalisée</span>,
            comme par exemple, changer de responsable chaque semaine.
          </p>
        </div>
      ),
    },
    {
      title: "En tant que responsable des devoirs, que devez-vous faire ?",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-blue-800">
            Le responsable des devoirs a la responsabilité d’
            <span className="font-semibold">ajouter</span> et de{" "}
            <span className="font-semibold">maintenir à jour</span> les devoirs
            de son groupe de classe.
          </p>
          <li className="text-blue-800 font-medium">Pour ajouter un devoir</li>
          <p className="text-blue-800">
            En bas de l’onglet “Devoirs”, vous avez un bouton “+”. Vous devez
            alors renseigner la <span>date du devoir</span>, la{" "}
            <span className="font-semibold">matière</span>, le{" "}
            <span className="font-semibold">type du devoir</span> (devoir à
            rendre ou évaluation), le{" "}
            <span className="font-semibold">titre</span> et une{" "}
            <span className="font-semibold">potentielle description</span>. En
            cliquant sur “Valider”, le devoir s’ajoute à la date indiquée et est
            visible par tous les étudiants de votre groupe de classe.
          </p>
          <li className="text-blue-800 font-medium">
            Pour modifier/supprimer un devoir
          </li>
          <p className="text-blue-800">
            En cliquant sur un devoir, vous avez un onglet qui s’ouvre avec les
            différents détails de celui-ci. En bas de l’onglet, vous avez deux
            boutons permettant de supprimer ou de modifier le devoir en cliquant
            dessus.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      className="lg:flex-row lg:gap-20 flex flex-col gap-8 mt-20 w-[90%] mx-auto max-w-9xl"
      ref={faqRef}
      data-faq
    >
      <TitleSection
        title={
          <p className="text-blue-900 text-2xl font-semibold font-host-grotesk">
            Questions les plus fréquentes
          </p>
        }
        subtitle={
          <p className="text-grey text-lg font-normal font-outfit">
            Voici les questions les plus fréquemment posées. Si vous avez
            d&apos;autres questions, n&apos;hésitez pas à nous contacter.
          </p>
        }
      />
      <Accordion
        items={faqItems}
        openIndex={activeIndex}
        onOpenChange={setActiveIndex}
      />
    </section>
  );
};
