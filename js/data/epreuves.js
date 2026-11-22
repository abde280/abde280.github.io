/* =========================================================
   📝 Page ÉPREUVES : référentiel du bloc 1 et épreuves E5 / E6 / E7
   ---------------------------------------------------------
   Remplace tout ce qui est entre [crochets].
   Ne modifie que ce fichier pour cette page.
   ========================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};
Object.assign(PORTFOLIO, {
  /* ===================== RÉFÉRENTIEL BLOC 1 (E5) =====================
     Ne change pas les id : ils servent au tableau de synthèse. */
  competencesE5: [
    { id: "C1", nom: "Gérer le patrimoine informatique" },
    { id: "C2", nom: "Répondre aux incidents et aux demandes d'assistance et d'évolution" },
    { id: "C3", nom: "Développer la présence en ligne de l'organisation" },
    { id: "C4", nom: "Travailler en mode projet" },
    { id: "C5", nom: "Mettre à disposition des utilisateurs un service informatique" },
    { id: "C6", nom: "Organiser son développement professionnel" }
  ],
  /* ===================== TABLEAU DE SYNTHÈSE E5 =====================
     Repris du fichier officiel documents/tableau-synthese-E5.xlsx.
     Si tu modifies l'Excel, modifie aussi les lignes ici (mêmes intitulés, périodes, compétences). */
  tableauSynthese: [
    {
      section: "Réalisation en cours de formation",
      lignes: [
        { intitule: "Installation et configuration de Windows Server : déploiement du système serveur dans un environnement de TP (VMware Workstation).", periode: "Sept. 2025", competences: ["C1", "C5"] },
        { intitule: "Mise en place des services DHCP et DNS : configuration de l’attribution des adresses IP et de la résolution de noms.", periode: "Oct. 2025", competences: ["C5"] },
        { intitule: "Configuration de VLAN sur commutateurs : segmentation logique du réseau et affectation des ports.", periode: "Nov. 2025", competences: ["C1", "C5"] },
        { intitule: "Administration de switchs Cisco : configuration des interfaces, ports trunk et paramètres réseau.", periode: "Déc. 2025", competences: ["C1", "C5"] },
        { intitule: "Configuration de routeurs et du routage inter-VLAN : mise en communication de réseaux distincts.", periode: "Janv. 2026", competences: ["C5"] },
        { intitule: "Mise en place de règles de filtrage réseau : contrôle des flux autorisés et refusés.", periode: "Févr. 2026", competences: ["C1", "C5"] },
        { intitule: "Création et configuration de machines virtuelles avec VMware Workstation pour des environnements de test.", periode: "Mars 2026", competences: ["C1", "C5"] },
        { intitule: "Installation et configuration d’un serveur web Apache : mise en service d’un service HTTP.", periode: "Avr. 2026", competences: ["C5"] },
        { intitule: "Gestion des permissions et droits d’accès : attribution et vérification des autorisations sur des ressources.", periode: "Mai 2026", competences: ["C1"] },
        { intitule: "Installation et configuration de GLPI sur un serveur LAMP (Debian 13) : déploiement d’un outil de gestion de parc et de support informatique.", periode: "Juin 2026", competences: ["C1", "C5"] },
        { intitule: "Conception et publication de mon portfolio professionnel sur GitHub Pages (HTML, CSS, JavaScript) : présentation du parcours, des réalisations et de la veille.", periode: "Nov. 2026", competences: ["C3", "C6"] },
        { intitule: "Veille technologique sur la double authentification (MFA) : suivi d’articles (IT-Connect, CERT-FR…), synthèse et avis personnel publiés sur le portfolio.", periode: "Sept. 2026–mai 2027", competences: ["C6"] }
      ]
    },
    {
      section: "Réalisations en milieu professionnel en cours de première année",
      lignes: [
        { intitule: "Gestion et suivi des tickets de support informatique niveau 1 : prise en charge des demandes et traitement des incidents courants.", periode: "Oct.–nov. 2025", competences: ["C2"] },
        { intitule: "Assistance sur Outlook et Microsoft 365 : diagnostic et résolution des problèmes rencontrés par les utilisateurs.", periode: "Nov.–déc. 2025", competences: ["C2"] },
        { intitule: "Diagnostic des problèmes de connexion réseau et Wi-Fi : vérification de la connectivité et dépannage de premier niveau.", periode: "Déc. 2025–févr. 2026", competences: ["C2"] },
        { intitule: "Gestion des comptes utilisateurs : réinitialisation de mots de passe et traitement des demandes liées aux accès.", periode: "Janv.–mars 2026", competences: ["C1", "C2"] },
        { intitule: "Installation de logiciels et de périphériques : mise en place et assistance aux utilisateurs.", periode: "Mars–avr. 2026", competences: ["C2", "C5"] },
        { intitule: "Dépannage des imprimantes : diagnostic et résolution des incidents d’impression.", periode: "Avr.–juin 2026", competences: ["C2"] },
        { intitule: "Maintenance des postes Windows : identification et résolution des dysfonctionnements courants.", periode: "Juin–août 2026", competences: ["C2"] }
      ]
    },
    {
      section: "Réalisations en milieu professionnel en cours de seconde année",
      lignes: [
        { intitule: "Support informatique niveau 1 : suivi des tickets et assistance aux utilisateurs sur Windows, Outlook et Microsoft 365.", periode: "Sept.–oct. 2026", competences: ["C2"] },
        { intitule: "Résolution des incidents réseau et Wi-Fi : diagnostic des problèmes de connexion et vérification du rétablissement du service.", periode: "Oct.–déc. 2026", competences: ["C2"] },
        { intitule: "Gestion des accès utilisateurs : réinitialisation des mots de passe et assistance sur les comptes.", periode: "Nov. 2026–janv. 2027", competences: ["C1", "C2"] },
        { intitule: "Installation et dépannage de logiciels, périphériques et imprimantes sur les postes utilisateurs.", periode: "Janv.–mars 2027", competences: ["C2", "C5"] },
        { intitule: "Maintenance et dépannage des postes de travail Windows : analyse et traitement des incidents.", periode: "Mars–avr. 2027", competences: ["C2"] },
        { intitule: "Installation, configuration et mise en service de bornes Wi-Fi Zyxel sur plusieurs sites (Nebula Control Center) : planification des interventions, fixation, raccordement, paramétrage et tests de connectivité. Missions commencées dès octobre 2025.", periode: "Sept. 2026–mai 2027", competences: ["C4", "C5"] }
      ]
    }
  ],
  /* ===================== ÉPREUVES =====================
     statut : "Terminé", "En cours" ou "À venir"
     ⚠️ Le jour de l'examen, tout doit être "Terminé". */
  epreuves: [
    {
      code: "E5",
      titre: "Support et mise à disposition de services informatiques",
      format: "Oral · 40 min · coef. 4",
      statut: "En cours",
      description:
        "Épreuve orale appuyée sur ce portfolio et sur le tableau de synthèse des réalisations professionnelles " +
        "menées en formation et en entreprise. L'ensemble des réalisations doit mobiliser toutes les compétences du bloc 1.",
      documents: [{ label: "Télécharger le tableau de synthèse (Excel)", url: "documents/tableau-synthese-E5.xlsx" }]
    },
    {
      code: "E6",
      titre: "Administration des systèmes et des réseaux",
      format: "Pratique et orale · coef. 4",
      statut: "En cours",
      description:
        "Épreuve de l'option SISR. Elle s'appuie sur deux réalisations professionnelles de mon dossier, " +
        "menées dans un environnement technique conforme au référentiel (infrastructure, services réseau, sécurisation).",
      documents: []
    },
    {
      code: "E7",
      titre: "Cybersécurité des services informatiques",
      format: "Écrit · 4 h · coef. 4",
      statut: "À venir",
      description:
        "Épreuve écrite sur un cas d'entreprise. Elle se prépare en cours, en pratiquant sur mes maquettes et en suivant " +
        "les alertes du CERT-FR et de l'ANSSI (voir ma veille).",
      documents: []
    }
  ]
});
