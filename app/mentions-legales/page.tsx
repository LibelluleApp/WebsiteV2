import Link from "next/link";

export default function MentionsLegales() {
  return (
    <section className="md:pt-[112px] pt-[111px] w-[90%] mx-auto max-w-9xl">
      <div className="flex flex-col gap-10">
        <div className="s:items-center flex flex-col items-start justify-center">
          <h2 className="text-blue-900 font-extrabold text-2xl font-host-grotesk">
            Mentions Légales
          </h2>
        </div>
        <article className="flex flex-col gap-4">
          <p className="text-blue-800 text-lg font-normal">
            En conformité aux dispositions de l&apos;article 6-III et 19 de la
            Loi numero 2004-575 du 21 juin 2004 pour la Confiance dans
            l&apos;économie numérique, dite L.C.E.N., nous portons à la
            connaissance des utilisateurs du site{" "}
            <Link
              href="https://libellule.app"
              target="_blank"
              className="underline"
            >
              https://libellule.app
            </Link>{" "}
            les informations suivantes :
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            1. Informations légales
          </h3>
          <div>
            <p className="text-blue-800 text-lg font-normal">
              Propriétaire : Raphaël Tiphonet
            </p>
            <p className="text-blue-800 text-lg font-normal">
              Pour contacter le propriétaire :{" "}
              <Link href="mailto:rtiphonet@gmail.com">rtiphonet@gmail.com</Link>
            </p>
            <p className="text-blue-800 text-lg font-normal">
              Adresse de localisation du titulaire : 16000 - Angoulême
            </p>
          </div>
          <div>
            <p className="text-blue-800 text-lg font-normal">
              Le fabriquant du site suivant est : Arnaud Graciet
            </p>
            <p className="text-blue-800 text-lg font-normal">
              Le directeur de la publication : Arnaud Graciet
            </p>
            <p className="text-blue-800 text-lg font-normal">
              Pour contacter le décideur de la publication :{" "}
              <Link href="mailto:contact@arnaudgct.fr">
                contact@arnaudgct.fr
              </Link>
            </p>
          </div>
          <div>
            <p className="text-blue-800 text-lg font-normal">
              Le concepteur et développeur est : Arnaud Graciet
            </p>
            <p className="text-blue-800 text-lg font-normal">
              Pour contacter le développeur :{" "}
              <Link href="mailto:contact@arnaudgct.fr">
                contact@arnaudgct.fr
              </Link>
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            2. Introduction
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Tout internaute qui se connecte et utilise le site internet :{" "}
            <Link
              href="https://libellule.app"
              target="_blank"
              className="underline"
            >
              https://libellule.app
            </Link>{" "}
            est considéré comme usagé du site web.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Le site{" "}
            <Link
              href="https://libellule.app"
              target="_blank"
              className="underline"
            >
              libellule.app
            </Link>{" "}
            regroupe plusieurs services, en l&apos;état, mis à disposition des
            usagés. Il est précisé que ceux-ci doivent rester honnête et faire
            preuve de bonne foi tant envers les différents usagés qu&apos;envers
            le développeur du site. Le site est actualisé de façon régulière par
            Arnaud Graciet.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Arnaud Graciet s&apos;efforce d&apos;offrir des informations les
            plus précises possibles (sous réserve de modifications apportées
            depuis leur mise en ligne), mais ne peuvent affirmer
            l&apos;exactitude, la complétude et les informations diffusées sur
            son site, qu&apos;elles soient ou non de son fait. En dépendance,
            l&apos;utilisateur reconnaît utiliser ces informations données (à
            titre indicatif, non exhaustives et susceptibles d&apos;évoluer)
            sous son unique responsabilité.
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            3. Exigence d&apos;accessibilité
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Le site internet libellule.app est habituellement accessible aux
            usagés H24 7/7, excepté en cas d&apos;interruption, programmée ou
            non, pour les besoins de la maintenance ou en cas de force majeure.
            En cas de service indisponible, libellule.app s&apos;engage à faire
            de son mieux pour rétablir l&apos;accès au site et tentera alors
            d&apos;informer préalablement aux utilisateurs Dates & heures de
            l&apos;intervention. N&apos;étant subordonné qu&apos;à une
            obligation de moyen, libellule.app ne saurait être designé comme
            responsable des dommages, peu importe sa nature, résultant
            d&apos;une indisponibilité du service
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            4. Propriété intellectuelle
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Raphaël Tiphonet est propriétaire unique de tous les droits de
            propriété intellectuelle ou détient les droits et autorisations
            d&apos;usage sur tous les éléments accessibles sur le site, tant sur
            la structure que sur les articles et textes, graphismes, logo, sons,
            logiciels, etc…
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Toute reproduction même partielle du site suivant libellule.app,
            affichage, édition, mis à jour totale ou partielle de l&apos;un
            quelconque de ces éléments, sans tenir compte du moyen ou la
            technique utilisée, est strictement interdite, excepté autorisation
            préalable de Raphaël Tiphonet, propriétaire du site web à
            l&apos;email :{" "}
            <a href="mailto:rtiphonet@gmail.com">rtiphonet@gmail.com</a>, à
            défaut elle sera considérée de la même manière qu&apos;une
            contrefaçon et passible de poursuite conformément aux dispositions
            des multiples articles L.335-2 et suivants du Code de Propriété
            Intellectuelle
          </p>
        </article>
        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            5. Liens hypertextes
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Le site web{" "}
            <Link
              href="https://libellule.app"
              target="_blank"
              className="underline"
            >
              libellule.app
            </Link>{" "}
            contient de multiple URL cliquable vers d&apos;autres sites web
            (partenaires, informations...) mis en place avec l&apos;autorisation
            de Raphaël Tiphonet. Cependant, Raphaël Tiphonet n&apos;a pas la
            possibilité de controler l&apos;intégralité des élements des sites
            visités et décline donc toute responsabilité de ce fait concernant
            les risques de contenus illicites.
          </p>
        </article>
      </div>
    </section>
  );
}
