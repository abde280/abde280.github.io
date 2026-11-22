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
      documents: []   // ajouter le tableau officiel quand il est prêt : [{ label: "Tableau de synthèse", url: "documents/tableau-synthese-E5.xlsx" }]
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
