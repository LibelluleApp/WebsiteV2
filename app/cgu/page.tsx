import Link from "next/link";

export default function CGU() {
  return (
    <section className="md:pt-[112px] pt-[111px] w-[90%] mx-auto max-w-9xl">
      <div className="flex flex-col gap-10">
        <div className="s:items-center flex flex-col items-start justify-center">
          <h2 className="text-blue-900 font-extrabold text-2xl font-host-grotesk">
            Politique de Confidentialité (Privacy Policy)
          </h2>
          <p className="text-grey font-medium text-lg">
            En vigueur au 02/09/2024
          </p>
        </div>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            1. Introduction
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Cette politique de confidentialité explique comment Libellule
            collecte, utilise, stocke et protège vos données personnelles.
            L&apos;application est développée et gérée par :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col text-blue-800 text-lg font-normal">
              <p>TIPHONET Raphaël</p>
              <p>5 ALL DES VIGNES</p>
              <p>16730 TROIS-PALIS</p>
              <p>07 71 18 59 89</p>
              <Link href="mailto:rtiphonet@gmail.com" className="underline">
                rtiphonet@gmail.com
              </Link>
            </div>
            <div className="flex flex-col text-blue-800 text-lg font-normal">
              <p>GRACIET Arnaud</p>
              <p>32 R DU PORT THUREAU</p>
              <p>16000 ANGOULEME</p>
              <p>06 52 55 15 18</p>
              <Link href="mailto:contact@arnaudgct.fr" className="underline">
                contact@arnaudgct.fr
              </Link>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            2. Données Collectées et Utilisation
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Nous collectons et utilisons les types de données suivants :
          </p>
          <ul className="flex flex-col gap-4 list-disc list-inside">
            <li className="text-blue-800 text-lg font-normal">
              Données d'identification :
              <ul className="list-disc list-inside ml-6">
                <li className="text-grey">Nom et prénom</li>
                <li className="text-grey">Adresse e-mail étudiante</li>
                <li className="text-grey">Année du BUT et numéro de TP</li>
              </ul>
            </li>
            <li className="text-blue-800 text-lg font-normal">
              Données optionnelles (que l'utilisateur peut choisir d'ajouter) :
              <ul className="list-disc list-inside ml-6">
                <li className="text-grey">Date de naissance</li>
                <li className="text-grey">Numéro de téléphone</li>
                <li className="text-grey">Site internet</li>
                <li className="text-grey">
                  Comptes sociaux (Instagram, Discord, Snapchat, TikTok)
                </li>
              </ul>
            </li>
            <li className="text-blue-800 text-lg font-normal">
              Données de localisation :
              <ul className="list-disc list-inside ml-6">
                <li className="text-grey">
                  Utilisées uniquement pour le service météo via l'API Apple
                  Weather
                </li>
                <li className="text-grey">Non stockées sur nos serveurs</li>
                <li className="text-grey">
                  Non utilisées pour le suivi ou le profilage
                </li>
                <li className="text-grey">
                  Accessibles uniquement après consentement explicite de
                  l'utilisateur
                </li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            3. Stockage et Sécurité des Données
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Les données sont hébergées en France par la société PULSEHEBERG (9
            BOULEVARD DE STRASBOURG, 83000 TOULON). Nous mettons en œuvre des
            mesures de sécurité appropriées pour protéger vos données contre
            l'accès, la modification, la divulgation ou la destruction non
            autorisés.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Pour le service de messagerie, les mots de passe sont stockés de
            manière sécurisée uniquement sur les appareils des utilisateurs via
            :
          </p>
          <ul className="flex flex-col list-disc list-inside text-blue-800 text-lg font-normal">
            <li>Keychain Service pour les appareils Apple</li>
            <li>Keystore System pour les appareils Android</li>
          </ul>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            4. Durée de Conservation
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Les données personnelles sont conservées jusqu'à la fin de la
            période universitaire de l'utilisateur ou jusqu'à la suppression du
            compte par l'utilisateur. Les données de localisation ne sont pas
            conservées au-delà de leur utilisation immédiate pour le service
            météo.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            5. Droits des Utilisateurs
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="flex flex-col list-disc list-inside text-blue-800 text-lg font-normal">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p className="text-blue-800 text-lg font-normal">
            Pour exercer ces droits ou pour toute question sur le traitement de
            vos données, vous pouvez contacter notre support à{" "}
            <a href="mailto:support@libellule.app">support@libellule.app</a>.
            Nous traiterons votre demande dans un délai maximum de 48 heures
            ouvrées.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            6. Services Tiers
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Notre application utilise les services tiers suivants :
          </p>
          <ul className="flex flex-col list-disc list-inside text-blue-800 text-lg font-normal">
            <li>
              Google Analytics : pour l'analyse de l'utilisation de
              l'application
            </li>
            <li>API Apple Weather : pour les services météorologiques</li>
            <li>API Zimbra : pour la gestion des emails</li>
          </ul>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            7. Modifications de la Politique de Confidentialité
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications entrent en vigueur
            dès leur publication dans l'application. Nous vous informerons des
            changements importants par notification dans l'application.
          </p>
        </article>

        <div className="s:items-center flex flex-col items-start justify-center">
          <h2 className="text-blue-900 font-extrabold text-2xl font-host-grotesk">
            Conditions Générales d'Utilisation
          </h2>
          <p className="text-grey font-medium text-lg">
            En vigueur au 02/09/2024
          </p>
        </div>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 1 : Préambule
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Les présentes Conditions Générales d'Utilisation (ci-après dénommées
            "CGU") encadrent l'utilisation de l'application Libellule,
            développée par Arnaud Graciet et Raphaël Tiphonet. Elles définissent
            les conditions d'accès et d'utilisation des services proposés par
            l'application par l'utilisateur. Ces CGU sont accessibles sur le
            site à la rubrique "CGU".
          </p>
          <p className="text-blue-800 text-lg font-normal">
            L'inscription ou l'utilisation de l'application implique
            l'acceptation sans réserve des CGU par l'utilisateur.{" "}
            <Link
              href="https://libellule.app/"
              target="_blank"
              className="underline"
            >
              https://libellule.app
            </Link>{" "}
            se réserve le droit de modifier unilatéralement le contenu des CGU à
            tout moment.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 2 : Mentions Légales
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            L'édition et la direction de la publication de l'application
            Libellule sont assurées par :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col text-blue-800 text-lg font-normal">
              <p>TIPHONET Raphaël</p>
              <p>5 ALL DES VIGNES</p>
              <p>16730 TROIS-PALIS</p>
              <p>07 71 18 59 89</p>
              <Link href="mailto:rtiphonet@gmail.com" className="underline">
                rtiphonet@gmail.com
              </Link>
            </div>
            <div className="flex flex-col text-blue-800 text-lg font-normal">
              <p>GRACIET Arnaud</p>
              <p>32 R DU PORT THUREAU</p>
              <p>16000 ANGOULEME</p>
              <p>06 52 55 15 18</p>
              <Link href="mailto:contact@arnaudgct.fr" className="underline">
                contact@arnaudgct.fr
              </Link>
            </div>
          </div>
          <p className="text-blue-800 text-lg font-normal">
            Libellule est hébergé sur le sol français et par la société
            française :
          </p>
          <div>
            <div>
              <p className="text-blue-800 text-lg font-normal">PULSEHEBERG</p>
              <p className="text-blue-800 text-lg font-normal">
                9 BOULEVARD DE STRASBOURG
              </p>
              <p className="text-blue-800 text-lg font-normal">83000 TOULON</p>
              <p className="text-blue-800 text-lg font-normal">
                04 22 14 13 60
              </p>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 3 : Accès à l'application
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            L'application Libellule offre un accès gratuit à ses services,
            regroupant divers outils universitaires tels que l'emploi du temps,
            les devoirs, les mails, le relevé de notes ainsi que les absences
            (pour les étudiants en MMI), dans le but de simplifier la vie des
            étudiants. Cet accès est gratuit pour tout utilisateur disposant
            d'une connexion Internet, et tous les frais associés à cette
            connexion sont à la charge de l'utilisateur.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Pour bénéficier des services de l'application, les utilisateurs
            non-membres doivent s'inscrire en remplissant le formulaire avec des
            informations sincères et exactes. L'accès aux fonctionnalités
            requiert une identification via un identifiant et un mot de passe,
            qui sont communiqués après l'inscription. Tout utilisateur a la
            possibilité de demander sa désinscription à tout moment en envoyant
            un mail à{" "}
            <a href="mailto:support@libellule.app">support@libellule.app</a>, il
            peut également supprimer son compte à tout moment sur l'application
            depuis son profil.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Il est important de noter que l'accès à l'application est
            exclusivement réservé aux étudiants, aux professeurs et au personnel
            appartenant ou intervenant à l'IUT d'Angoulême.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 4 : Service Mails
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Le service de messagerie de l'application Libellule est conçu pour
            offrir un accès sécurisé et pratique aux emails des utilisateurs. Ce
            service est entièrement gratuit et fonctionne en utilisant l'API de
            Zimbra pour la gestion et l'échange des messages. Il est important
            de noter que nos serveurs ne traitent aucun email ; tous les
            processus liés à la gestion des messages sont délégués à l'API de
            Zimbra, que vous acceptez d'utiliser lorsque vous utiliser
            l'interface web de Zimbra / Upmail.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Pour garantir une connexion continue au service de messagerie et
            éviter les déconnexions fréquentes, les mots de passe des
            utilisateurs sont stockés de manière sécurisée sur leurs appareils.
            Ce stockage est réalisé dans des espaces encryptés, spécifiquement
            le Keychain Service pour les appareils Apple et le Keystore System
            pour les appareils Android. Pour des informations détaillées sur ces
            mécanismes de sécurité, veuillez consulter les documentations
            suivantes :{" "}
            <Link
              href="https://developer.apple.com/documentation/security/keychain_services"
              target="_blank"
              className="text-blue-800 text-lg font-normal underline"
            >
              Documentation Keychain Services pour Apple
            </Link>{" "}
            et{" "}
            <Link
              href="https://developer.android.com/training/articles/keystore"
              target="_blank"
              className="text-blue-800 text-lg font-normal underline"
            >
              Documentation Keystore System pour Android
            </Link>
            .
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Afin de protéger les informations sensibles et garantir le bon
            fonctionnement du service, il est impératif que les appareils des
            utilisateurs ne soient pas rootés ou jailbreakés. Un appareil
            modifié peut compromettre la sécurité des mécanismes de stockage des
            mots de passe et ainsi affecter la sécurité globale du service de
            messagerie.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 5 : Service Emploi du Temps
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Le service d'emploi du temps de l'application Libellule permet aux
            utilisateurs de consulter et gérer leurs horaires universitaires de
            manière efficace. Les emplois du temps sont récupérés grâce à
            l'export iCal, une fonctionnalité intégrée dans l'outil ADE Campus
            de Adesoft.com / UPPlanning. Ce format d'exportation facilite la
            récupération et la synchronisation des données.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Afin d'assurer la pérennité des données sur l'application, les
            emplois du temps sont sauvegardés à un rythme continu. Cette
            sauvegarde régulière garantit que les informations restent toujours
            à jour et disponibles pour les utilisateurs.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Les données d'emploi du temps sont collectées exclusivement auprès
            des personnes ayant un compte valide à l'Université de Poitiers, via
            le système UpPlanning. Cette restriction d'accès assure que seules
            les personnes autorisées peuvent consulter les informations,
            protégeant ainsi la confidentialité des données.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            L'exportation des emplois du temps en format iCal, qui est intégrée
            dans l'outil ADE Campus, ne nécessite pas d'authentification
            supplémentaire. Cela permet aux utilisateurs d'intégrer facilement
            leurs horaires dans divers outils de gestion de calendrier sans
            nécessiter de connexion additionnelle.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 6 : Service Météo et Localisation
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Le service météo de l'application Libellule utilise l'API météo
            d'Apple Weather pour fournir des informations météorologiques
            précises et pertinentes. Pour ce faire, l'application demande
            l'accès aux données de localisation de l'appareil.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Il est important de noter que :
          </p>
          <ul className="flex flex-col list-disc list-inside text-blue-800 text-lg font-normal">
            <li>
              Les données de localisation sont utilisées exclusivement pour le
              service météo
            </li>
            <li>
              Ces données ne sont ni stockées sur nos serveurs, ni conservées
              après leur utilisation
            </li>
            <li>
              Aucune donnée de localisation n'est utilisée à des fins de suivi
              ou d'analyse
            </li>
            <li>
              L'accès à la localisation est entièrement optionnel et peut être
              révoqué à tout moment via les paramètres de votre appareil
            </li>
          </ul>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 7 : Google Analytics
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Notre application utilise Google Analytics, un service d'analyse de
            site internet fourni par Google Inc. ('Google'). Google Analytics
            utilise des cookies, qui sont des fichiers texte placés sur votre
            ordinateur, pour aider l'application à analyser son utilisation par
            ses utilisateurs. Les données générées par les cookies concernant
            votre utilisation de l'application (y compris votre adresse IP)
            seront transmises et stockées par Google sur des serveurs situés aux
            États-Unis. Google utilisera ces informations dans le but d'évaluer
            votre utilisation de l'application, de compiler des rapports sur son
            activité à l'intention de son éditeur et de fournir d'autres
            services relatifs à son activité et à l'utilisation d'Internet.
            Google est susceptible de communiquer ces données à des tiers en cas
            d'obligation légale ou lorsque ces tiers traitent ces données pour
            le compte de Google. Google ne recoupera pas votre adresse IP avec
            d'autres données détenues par Google.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 8 : Publication par l'utilisateur
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Les membres peuvent publier des contenus sur l'application
            Libellule, tels que des tâches ou des évaluations dans les devoirs.
            En publiant un contenu, le membre s'engage à respecter les règles de
            la Netiquette et les règles de droit en vigueur. L'application peut
            exercer une modération sur les publications et se réserve le droit
            de refuser leur mise en ligne sans justification auprès du membre.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Le membre reste titulaire de l'intégralité de ses droits de
            propriété intellectuelle. En publiant un contenu sur l'application,
            il cède à la société éditrice le droit non exclusif et gratuit de
            représenter, reproduire, adapter, modifier, diffuser et distribuer
            sa publication, directement ou par un tiers autorisé, dans le monde
            entier, sur tout support (numérique ou physique), pour la durée de
            la propriété intellectuelle. Le membre cède notamment le droit
            d'utiliser sa publication sur Internet et sur les réseaux de
            téléphonie mobile.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            La société éditrice s'engage à faire figurer le nom du membre à
            proximité de chaque utilisation de sa publication. Tout contenu mis
            en ligne par l'utilisateur est de sa seule responsabilité.
            L'utilisateur s'engage à ne pas mettre en ligne de contenus pouvant
            porter atteinte aux intérêts de tierces personnes. Tout recours en
            justice engagé par un tiers lésé contre l'application sera pris en
            charge par l'utilisateur. Le contenu de l'utilisateur peut être à
            tout moment et pour n'importe quelle raison supprimé ou modifié par
            l'application, sans préavis.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 9 : Propriété intellectuelle
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Les contenus de l'application Libellule (marques, logos, textes,
            images, son) sont protégés par le Code de la propriété
            intellectuelle. Toute reproduction, publication ou copie nécessite
            l'autorisation préalable de l'application. L'utilisation à des fins
            commerciales et publicitaires est strictement interdite.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 10 : Responsabilité
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            Malgré les efforts déployés par l'application pour fournir des
            informations fiables, il est important de noter que leur fiabilité
            n'est pas garantie. Des défauts, erreurs ou omissions peuvent
            survenir dans les informations fournies, lesquelles sont présentées
            à titre indicatif et général. Ces données n'ont aucune valeur
            contractuelle, et l'application décline toute responsabilité en cas
            de force majeure, d'interruption ou de modification du service.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Concernant le relevé de notes et les absences, il est crucial de
            souligner que seule l'information officielle délivrée par
            l'université en fin de semestre est considérée comme valide. Les
            données relatives aux notes et aux absences présentes dans
            l'application sont fournies à titre informatif uniquement et ne
            doivent en aucun cas être considérées comme exhaustives ou
            définitives.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Nous déclinons toute responsabilité en cas d'erreurs qui pourraient
            survenir lors de la saisie des informations.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 11 : Liens hypertextes
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            L'application peut contenir des liens hypertextes vers des pages
            externes. L'utilisateur est informé qu'en cliquant sur ces liens, il
            quittera l'application Libellule. Cette dernière n'a aucun contrôle
            sur ces pages et ne saurait être responsable de leur contenu.
          </p>
        </article>

        <article>
          <h3 className="text-blue-900 text-xl font-extrabold font-host-grotesk">
            Article 12 : Droit applicable et juridiction compétente
          </h3>
          <p className="text-blue-800 text-lg font-normal">
            La législation française s'applique au présent contrat. En cas
            d'absence de résolution amiable d'un litige né entre les parties,
            les tribunaux français seront seuls compétents pour en connaître.
            Pour toute question relative à l'application des présentes CGU, vous
            pouvez joindre l'éditeur aux coordonnées indiquées à l'article 2.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            Ces Conditions Générales d'Utilisation ont été établies en accord
            avec la réglementation française et européenne en vigueur, notamment
            le RGPD, pour assurer la protection des droits et de la vie privée
            des utilisateurs de l'application Libellule.
          </p>
          <p className="text-blue-800 text-lg font-normal">
            En téléchargeant l'application, vous acceptez ces CGU et vous
            reconnaissez donc avoir pris connaissance et accepté les
            dispositions qui y sont contenues.
          </p>
        </article>
      </div>
    </section>
  );
}
