/* =========================================================
   📝 Page PROJETS : réalisations professionnelles
   ---------------------------------------------------------
   3 projets attendus : 1 scolaire, 1 entreprise, 1 personnel.
   Chaque projet a sa procédure en PDF, téléchargeable depuis le site.
   Remplace tout ce qui est entre [crochets].
   ========================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};
Object.assign(PORTFOLIO, {
  /* ===================== RÉALISATIONS =====================
     cadre : "Scolaire", "Entreprise" ou "Personnel"
     statut : "Opérationnel", "En cours" ou "À venir"
       → un projet "À venir" s'affiche en carte grisée, sans fiche,
         et sans compétences affichées.
     resume : mini contexte de 2-3 lignes
     competences : id du bloc 1 mobilisés (C1…C6)
     architecture : les briques du schéma, dans l'ordre du flux (facultatif)
     procedure : chemin du PDF de la procédure, à placer dans /documents */
  realisations: [
    {
      id: "glpi",
      titre: "GLPI sur un serveur LAMP",
      cadre: "Scolaire",
      statut: "Opérationnel",
      // Mini contexte affiché sous le titre (2-3 lignes)
      resume: "L'entreprise fictive IT-Tech a besoin de gérer son parc informatique et les incidents de ses utilisateurs. " +
        "J'ai installé un serveur LAMP sous Debian 13 puis déployé GLPI 11, publié à l'adresse support.it-tech.fr, " +
        "en appliquant les bonnes pratiques de sécurité de l'éditeur.",
      environnement: ["Debian 13", "Apache 2", "MariaDB", "PHP 8.4-FPM", "GLPI 11", "VMware Workstation"],
      architecture: [
        { nom: "Poste client", detail: "support.it-tech.fr" },
        { nom: "Serveur Debian 13", detail: "Apache 2 · PHP 8.4-FPM" },
        { nom: "GLPI 11", detail: "Gestion de parc · Helpdesk" },
        { nom: "MariaDB", detail: "Base de données" }
      ],
      competences: ["C1", "C5"],
      // Mets ton PDF dans le dossier /documents avec exactement ce nom
      procedure: "documents/procedure-glpi.pdf"
    },
    {
      id: "projet-entreprise",
      titre: "Projet entreprise",
      cadre: "Entreprise",
      statut: "À venir",
      resume: "Projet mené en alternance au Groupe GIFT — présentation prochainement.",
      environnement: [], architecture: [], competences: [], procedure: ""
    },
    {
      id: "projet-personnel",
      titre: "Projet personnel",
      cadre: "Personnel",
      statut: "À venir",
      resume: "Projet personnel en préparation — présentation prochainement.",
      environnement: [], architecture: [], competences: [], procedure: ""
    }
  ]
});
