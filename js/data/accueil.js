/* =========================================================
   📝 Page ACCUEIL (et CONTACT) : profil, école, entreprise, compétences, parcours
   ---------------------------------------------------------
   Remplace tout ce qui est entre [crochets].
   Ne modifie que ce fichier pour cette page.
   ========================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};
Object.assign(PORTFOLIO, {
  /* ===================== PROFIL ===================== */
  profil: {
    prenom: "Abdesamad",
    nom: "ATMANE",
    badge: "BTS SIO SISR · 2ᵉ année en alternance",
    accroche: [
      "je résous les incidents utilisateurs",
      "j'installe des bornes Wi-Fi",
      "je prépare les postes Windows 11",
      "je gère les comptes Entra ID"
    ],
    intro:
      "Assistant applicatifs et infrastructure réseaux en alternance, étudiant en BTS SIO option SISR. " +
      "J'interviens sur la gestion d'incidents, le support utilisateurs et des missions en réseaux, systèmes et applicatifs.",
    // Un élément de la liste = un paragraphe
    presentation: [
      "Après l’obtention d’un baccalauréat professionnel en électricité, suivi d’une année en BTS Électrotechnique, j’ai réalisé que, malgré mon intérêt pour ce domaine, je ne souhaitais pas en faire mon métier à long terme. Souhaitant m’orienter vers un domaine qui correspond davantage à mes centres d’intérêt et à mes aspirations professionnelles, j’ai décidé de poursuivre mes études en BTS SIO, option SISR, en alternance au sein du Groupe GIFT.",
      "Je m’intéresse principalement aux systèmes et aux réseaux informatiques. J’apprécie particulièrement le fait d’analyser les problèmes techniques, d’en comprendre l’origine et d’y apporter des solutions concrètes.",
      "Aujourd’hui, mes missions consistent notamment à traiter quotidiennement des tickets d’assistance informatique. À l’issue de mon BTS SIO, je souhaite poursuivre mes études en licence AIS (Administrateur d’infrastructures sécurisées) afin d’approfondir mes connaissances techniques et de développer mes compétences dans l’administration et la sécurisation des systèmes et des réseaux informatiques."
    ],
    ville: "Chartres / Île-de-France",
    photo: "images/photo.jpg",      // ta photo dans /images (sinon tes initiales s'affichent)
    cv: "documents/CV.pdf",
    objectif: ""   // à compléter plus tard (vide = non affiché)
  },
  /* ===================== CONTACT =====================
     Pas de numéro de téléphone : l'email suffit (protection de tes données). */
  contact: {
    email: "",   // laissé vide volontairement : la page Contact renvoie alors vers LinkedIn
    linkedin: "https://www.linkedin.com/in/abdesamad-atmane-3b085b230/",
    github: ""     // pas encore de compte (vide = non affiché)
  },
  /* ===================== LE BTS ===================== */
  bts:
    "Le BTS Services Informatiques aux Organisations propose deux options : SLAM, principalement orientée vers la conception, le développement et la maintenance d’applications, et SISR, axée sur l’administration des systèmes, des réseaux et la sécurisation des infrastructures informatiques. J’ai choisi l’option SISR parce que je suis davantage attiré par les systèmes et les réseaux. Ce qui me plaît particulièrement, c’est de comprendre l’origine des problèmes techniques et de trouver des solutions pour les résoudre.",
  /* ===================== L'ÉCOLE ===================== */
  ecole: {
    nom: "Schola Nova", logo: "images/logo-schola-nova.png",
    description: "École privée parisienne qui forme uniquement en alternance, reconnue Entreprise Solidaire d'Utilité Sociale (ESUS) et certifiée Qualiopi. Sa mission : aider chaque étudiant à trouver à la fois sa formation et son emploi.",
    infos: [
      { label: "Adresse", valeur: "51 quai de la Seine, 75019 Paris" },
      { label: "Formation", valeur: "BTS SIO option SISR · 2ᵉ année" },
      { label: "Rythme", valeur: "Alternance" },
      { label: "Session d'examen", valeur: "2027" }
    ],
    site: "https://www.scholanova.fr"
  },
  /* ===================== ENTREPRISE =====================
     type : "Alternance" ou "Stage" */
  entreprise: {
    type: "Alternance",
    nom: "Groupe GIFT Education", logo: "images/logo-gift.png",
    description: "Groupe de formation présent depuis 30 ans, qui réunit 8 écoles — dont l'IAAG (Institut Aéronautique Amaury de la Grange) — et plus de 5 000 étudiants sur une vingtaine de campus. Les écoles partagent des fonctions support communes.",
    role:
      "Assistant applicatifs et infrastructure réseaux depuis octobre 2025. Je traite les incidents et le support utilisateurs " +
      "de niveau 1 via GetSup, j'installe des bornes Wi-Fi Zyxel sur plusieurs sites (mise en service avec Nebula Control Center), " +
      "je fais du brassage en baie, je réinstalle et prépare les postes sous Windows 11 pour les nouveaux collaborateurs, " +
      "et je gère les comptes utilisateurs sur Microsoft Entra ID.",
    site: "https://www.gift-education.fr/"
  },
  /* ===================== COMPÉTENCES TECHNIQUES ===================== */
  competencesTech: [
    { categorie: "Systèmes", icone: "🖥️", items: ["Windows Server", "Windows 10/11", "Réinstallation par clé USB bootable", "Déploiement de logiciels", "Debian / Linux", "VMware Workstation"] },
    { categorie: "Réseaux", icone: "🌐", items: ["Cisco Packet Tracer", "VLAN / Trunk", "Routage", "Bornes Wi-Fi Zyxel", "Nebula Control Center", "Brassage en baie"] },
    { categorie: "Services", icone: "⚙️", items: ["Active Directory", "Microsoft Entra ID", "DNS", "DHCP", "Apache / MariaDB / PHP", "GLPI"] },
    { categorie: "Sécurité", icone: "🛡️", items: ["pfSense", "ACL Cisco"] },
    { categorie: "Support & applicatifs", icone: "🎧", items: ["Support N1 (GetSup)", "Tickets applicatifs", "HubSpot", "YPAREO", "Installation d'imprimantes", "Accueil des nouveaux collaborateurs"] }
  ],
  interets: ["Cisco Packet Tracer", "IT-Connect (veille)"],
  langues: ["Français", "Anglais — niveau A2-B1"],   // vide = carte masquée
  /* ===================== PARCOURS (formation) ===================== */
  parcours: [
    { periode: "2025 — 2027", titre: "BTS SIO option SISR", lieu: "Schola Nova, Paris", details: "En alternance au Groupe GIFT — examen en session 2027." },
    { periode: "2022 — 2023", titre: "BTS Électrotechnique", lieu: "Lycée Jehan de Beauce, Chartres", details: "" },
    { periode: "2019 — 2022", titre: "Bac pro MELEC — Métiers de l'électricité et de ses environnements connectés", lieu: "Lycée Jehan de Beauce, Chartres", details: "Mention Bien." }
  ],
  /* ===================== EXPÉRIENCES ===================== */
  experiences: [
    { periode: "Depuis octobre 2025", titre: "Assistant applicatifs et infrastructure réseaux (alternance)", lieu: "Groupe GIFT, Paris 19ᵉ",
      details: "Incidents et support N1 via GetSup, bornes Wi-Fi Zyxel multi-sites (Nebula Control Center), brassage en baie, réinstallation et préparation de postes Windows 11, accompagnement des nouveaux collaborateurs, comptes Microsoft Entra ID, tickets applicatifs (HubSpot, YPAREO)." },
    { periode: "2024 — 2025", titre: "Livreur Amazon", lieu: "Marathon (sous-traitant Amazon), Lucé", details: "" },
    { periode: "2021 — 2022", titre: "Monteur-câbleur (CDD / stage)", lieu: "B2EI, Chartres", details: "Câblage électrique et assemblage d'armoires." }
  ]
});
