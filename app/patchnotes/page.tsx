"use client";

import { Accordion, AccordionItem } from "@/src/components/accordion";
import { useEffect, useState } from "react";
import ItemPatchnote from "@/src/components/itemPatchnote";

export default function Patchnotes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    // Gestionnaire d'événement pour ouvrir une section
    const handleOpenSection = (event: CustomEvent<{ index: number }>) => {
      const { index } = event.detail;
      setActiveIndex(index);
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
      title: "Version 1.1.5",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Scolarité"
            content={["Changement de semestre."]}
          />
          <ItemPatchnote
            name="Profil"
            content={[
              "Ajout d'une page pour changer de TP (une fois par mois maximum)",
            ]}
          />
          <ItemPatchnote
            name="Autre"
            content={[
              "Résolution du problème d'envoi des mails à la suite du mot passe oublié.",
            ]}
          />
        </div>
      ),
      date: "10/01/2025",
    },
    {
      title: "Version 1.1.4",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Scolarité"
            content={[
              "Ajout des absences justifiées et injustifiées.",
              "Ajout des notes avec les moyennes des différentes compétences.",
            ]}
          />
          <ItemPatchnote
            name="Devoirs"
            content={[
              "Correction du scroll dans les vues : semaine et journée.",
            ]}
          />
        </div>
      ),
      date: "10/01/2025",
    },
    {
      title: "Version 1.0.1",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Accueil"
            content={[
              "L'espacement des sections a été revu pour une meilleure lisibilité.",
              "La météo ne provoque plus de crash de l'application.",
            ]}
          />
          <ItemPatchnote
            name="Emploi du temps"
            content={[
              "Les couleurs des évènements ont été revu pour un meilleur contraste avec l'arrière-plan.",
              "Le mois de la semaine est désormais affiché sur la vue semaine (comme c'était déjà le cas en vue journée).",
            ]}
          />
        </div>
      ),
      date: "20/11/2024",
    },
    {
      title: "Version 1.0.0",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Accueil"
            content={[
              "La météo affichée est désormais celle de votre localisation actuelle (c'est pourquoi on vous demande l'autorisation à la localisation).",
              "Ajout d'un message personnalisé aléatoire selon la météo du jour et du moment de la journée.",
              "Les devoirs affichés sont pour le jour suivant et non plus pour les cinq prochains jours.",
              "Affichage d'un message si aucun devoir n'est prévu pour le jour suivant.",
            ]}
          />
          <ItemPatchnote
            name="Emploi du temps"
            content={[
              "Ajout d'un bouton pour revenir à la semaine actuelle (en vue jour et semaine).",
              "Changement du système de tabs pour un bouton de sélection de la vue (jour/semaine).",
            ]}
          />
          <ItemPatchnote
            name="Devoirs"
            content={[
              "Ajout des vues pour l'affichage semaine et chronologique.",
              "Changement du système de tabs pour un bouton de sélection de la vue (jour/semaine/chronologique).",
            ]}
          />
          <ItemPatchnote
            name="Restauration"
            content={[
              "Le menu du Crousty a été déplacé sur la page d'accueil.",
              "Affichage du menu que pour le jour actuel.",
              "Ajout d'un messsage indiquant la fermeture (vacances, week-end et jours fériés).",
            ]}
          />
          <ItemPatchnote
            name="Paramètres"
            content={[
              "Ajout d'une fonctionnalité pour changer les couleurs de l'application.",
              "Ajout d'une fonctionnalité pour changer sa photo de profil.",
              "Déplacement de la connexion à ses mails Zimbra dans la partie gestion des services.",
            ]}
          />
          <ItemPatchnote
            name="Autre"
            content={[
              "refonte de l'UI/UX de l'application.",
              "Ajout de petites animations.",
            ]}
          />
        </div>
      ),
      date: "15/11/2024",
    },
    {
      title: "Version 0.8",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Accueil"
            content={[
              "Correction de l'affichage du nom de la matière : s'il est trop long, il sera tronqué avec des points de suspension dans le prochain cours.",
              "Correction du formatage de la date du jour actuel.",
            ]}
          />
          <ItemPatchnote
            name="Mails"
            content={[
              "Vous ne devriez plus être déconnecté de votre boîte mail.",
            ]}
          />
          <ItemPatchnote
            name="Autre"
            content={[
              "Après 4 semaines de bêta dans le département MMI, Libellule prend son envol et est désormais disponible pour tous les étudiants de l’IUT d’Angoulême ! (L’intégration des étudiants en GMP est en cours et arrivera prochainement)",
              "Correction de différents bugs mineurs.",
            ]}
          />
        </div>
      ),
      date: "30/09/2024",
    },
    {
      title: "Version 0.7",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Emploi du temps"
            content={[
              "Correction de l'affichage du numéro de la semaine et du nom du mois dans la vue jour.",
            ]}
          />
          <ItemPatchnote
            name="Restauration"
            content={[
              "Correction de l'affichage des jours, qui se présentent désormais correctement, en particulier les weekends.",
            ]}
          />
          <ItemPatchnote
            name="Paramètres"
            content={[
              "Correction de la vue semaine par défaut.",
              "Correction de la couleur du mode alternant.",
            ]}
          />
          <ItemPatchnote
            name="Autre"
            content={[
              "Libellule quitte sa phase de bêta fermée sur le Play Store et est désormais disponible en public.",
              "Correction de différents bugs mineurs.",
            ]}
          />
        </div>
      ),
      date: "23/09/2024",
    },
    {
      title: "Version 0.6",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Accueil"
            content={[
              "Affichage du nombre de tâches et d’évaluations pour les jours concernés.",
              "Le conteneur des tâches devient vert lorsqu'aucune tâche n'est prévue ou lorsque toutes les tâches ont été complétées.",
              "Suppression des deux éléments qui n’étaient pas activés.",
            ]}
          />
          <ItemPatchnote
            name="Emploi du temps"
            content={[
              "En vue “jour”, la date est de nouveau centrée.",
              "La hauteur de l’emploi du temps a été réglée pour s’adapter au mieux à chaque smartphone.",
              "Ajout du groupe de classe dans le vue détaillée d’un évènement.",
            ]}
          />
          <ItemPatchnote
            name="Devoirs"
            content={[
              "La modification des tâches a été corrigée et est maintenant fonctionnelle.",
            ]}
          />
          <ItemPatchnote
            name="Restauration"
            content={[
              "La fonctionnalité a été implémentée et permet donc d'afficher le menu du Crousty pour le jour en cours et les deux jours suivants.",
              "Le menu est récupéré sur le site du Crousty et peut ne pas être à jour.",
            ]}
          />
          <ItemPatchnote
            name="Paramètres"
            content={[
              "Ajout des paramètres de l’application.",
              "Le mode sombre y a été déplacé.",
              "Les alternants ont la possibilité d’activer le “mode alternant” permettant d’avoir le calendrier d’alternance sur leur emploi du temps.",
              "En activant ce mode, ils peuvent modifier la couleur de l’évènement “Alternance” sur l’emploi du temps.",
              "Possibilité de passer en vue “semaine” par défaut dans l’emploi du temps.",
              "Possibilité de changer les couleurs des évènements par défaut dans l’emploi du temps.",
            ]}
          />
          <ItemPatchnote
            name="Autre"
            content={["Correction de différents bugs mineurs."]}
          />
        </div>
      ),
      date: "13/09/2024",
    },
    {
      title: "Version 0.5",
      content: (
        <div className="flex flex-col gap-4">
          <ItemPatchnote
            name="Accueil"
            content={[
              "Ajout d’un lien vers “OpenWeather” en cliquant sur la météo.",
            ]}
          />
          <ItemPatchnote
            name="Emploi du temps"
            content={[
              "Correction des noms des intervenants. Pour l'instant, il est impossible de les récupérer.",
            ]}
          />
          <ItemPatchnote
            name="Devoirs"
            content={[
              "Remise en forme et déplacement du numéro de la semaine et le bouton pour retourner à aujourd’hui.",
              "Suppression du nombre d’évaluations.",
              "Changement du nombre de tâches en une barre de progression (comme sur la page d’accueil).",
              "Ajout du nom du responsable des devoirs.",
            ]}
          />
          <ItemPatchnote
            name="Mails"
            content={[
              "Correction de la requête vers l’API de Zimbra, plus de déconnexion.",
              "Les mails en version HTML, s’affiche désormais en texte brut.",
            ]}
          />
          <ItemPatchnote
            name="Paramètres"
            content={[
              "Ajout de la fonctionnalité permettant au responsable des devoirs de transmettre son rôle à un autre étudiant.",
              "Remise en forme et déplacement du bouton de déconnexion en bas de la page.",
              "Ajout de l’affichage du TP, Y1 = 1er année, Y2 = 2ème année, Y3 = 3ème année.",
            ]}
          />
          <ItemPatchnote
            name="Scolarité"
            content={["L’onglet scolarité restera inactif pour le moment."]}
          />
          <ItemPatchnote
            name="Autre"
            content={[
              "Il n'est plus possible de 'spam-clicker' la réinitialisation du mot de passe.",
              "Lorsque vous êtes hors connexion, vous n'êtes plus déconnecté, mais vous arrivez sur une page hors-ligne.",
            ]}
          />
        </div>
      ),
      date: "06/09/2024",
    },
  ];
  return (
    <section className="md:pt-[112px] pt-[111px] w-[90%] mx-auto max-w-9xl">
      <div className="flex flex-col gap-10">
        <div className="sm:items-center flex flex-col items-start justify-center">
          <h2 className="text-blue-900 font-extrabold text-2xl font-host-grotesk">
            Journal des mises à jour
          </h2>
          <p className="text-grey font-noirmal text-lg">
            Découvrez les changements des dernières mises à jour de Libellule.
          </p>
        </div>
        <Accordion
          items={faqItems}
          openIndex={activeIndex}
          onOpenChange={setActiveIndex}
          feature="patchnotes"
        />
      </div>
    </section>
  );
}
