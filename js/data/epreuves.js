/* =========================================================
   📝 Page ÉPREUVES : référentiel du bloc 1 et épreuves E5 / E6 / E7
   ---------------------------------------------------------
   Remplace tout ce qui est entre [crochets].
   Ne modifie que ce fichier pour cette page.
   ========================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};
Object.assign(PORTFOLIO, {
  /* ===================== RÉFÉRENTIEL BLOC 1 (E5) =====================
     Ne change pas les id : ils servent aux compétences affichées sous les projets. */
  competencesE5: [
    { id: "C1", nom: "Gérer le patrimoine informatique" },
    { id: "C2", nom: "Répondre aux incidents et aux demandes d'assistance et d'évolution" },
    { id: "C3", nom: "Développer la présence en ligne de l'organisation" },
    { id: "C4", nom: "Travailler en mode projet" },
    { id: "C5", nom: "Mettre à disposition des utilisateurs un service informatique" },
    { id: "C6", nom: "Organiser son développement professionnel" }
  ],
  /* ===================== ÉPREUVES =====================
     statut : "Terminé", "En cours" ou "À venir"
     ⚠️ Le jour de l'examen, tout doit être "Terminé". */
  epreuves: [
    {
      code: "E5",
      titre: "Support et mise à disposition de services informatiques",
      format: "Oral · 40 min · coef. 4",
      bloc: "Bloc 1 — Support et mise à disposition de services informatiques", codeBloc: "B1",
      competences: "bloc1",   // = la liste competencesE5 ci-dessus
      statut: "En cours",
      description:
        "Épreuve orale appuyée sur ce portfolio et sur mes réalisations professionnelles menées en formation et en entreprise. " +
        "L'ensemble des réalisations doit mobiliser toutes les compétences du bloc 1.",
      documents: []
    },
    {
      code: "E6",
      titre: "Administration des systèmes et des réseaux",
      format: "Pratique et orale · coef. 4",
      bloc: "Bloc 2 — Administration des systèmes et des réseaux (option SISR)", codeBloc: "B2",
      competences: [
        "Concevoir une solution d'infrastructure réseau",
        "Installer, tester et déployer une solution d'infrastructure réseau",
        "Exploiter, dépanner et superviser une solution d'infrastructure réseau"
      ],
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
      bloc: "Bloc 3 — Cybersécurité des services informatiques", codeBloc: "B3",
      competences: [
        "Protéger les données à caractère personnel",
        "Préserver l'identité numérique de l'organisation",
        "Sécuriser les équipements et les usages des utilisateurs",
        "Garantir la disponibilité, l'intégrité et la confidentialité des services informatiques et des données de l'organisation face à des cyberattaques",
        "Assurer la cybersécurité d'une infrastructure réseau, d'un système, d'un service"
      ],
      statut: "À venir",
      description:
        "Épreuve écrite sur un cas d'entreprise. Elle se prépare en cours, en pratiquant sur mes maquettes et en suivant " +
        "les alertes du CERT-FR et de l'ANSSI (voir ma veille).",
      documents: []
    }
  ]
});
