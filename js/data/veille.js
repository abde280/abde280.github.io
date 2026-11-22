/* =========================================================
   📝 Page VEILLE TECHNOLOGIQUE
   ---------------------------------------------------------
   Sujet : la double authentification (MFA).
   Pour ajouter un article : copie un bloc { ... } en haut de
   la liste "articles" (du plus récent au plus ancien).
   ========================================================= */
window.PORTFOLIO = window.PORTFOLIO || {};
Object.assign(PORTFOLIO, {
  /* ===================== VEILLE TECHNOLOGIQUE ===================== */
  veille: {
    miseAJour: "17 novembre 2026",
    sujet: "La double authentification (MFA) : protéger les comptes des utilisateurs",
    problematique: "La double authentification suffit-elle à protéger les comptes des utilisateurs ?",
    pourquoi:
      "En alternance, je gère les comptes utilisateurs sur Microsoft Entra ID, là où la MFA se configure. " +
      "C'est un sujet précis, qui touche tout le monde au quotidien, et qui me prépare à l'épreuve E7 de cybersécurité.",
    axes: [
      "La MFA devient obligatoire (Microsoft, Google…)",
      "Comment les pirates la contournent",
      "Les méthodes : SMS, application, passkeys",
      "Sur le terrain : la gestion des comptes dans Entra ID"
    ],
    articles: [
      {
        date: "24/09/2026", source: "IT-Connect",
        titre: "97 % des victimes de ransomware avaient la MFA : où sont les angles morts ?",
        url: "https://www.it-connect.fr/97-des-victimes-de-ransomware-avaient-le-mfa-ou-sont-les-angles-morts/",
        resume:
          "D'après le rapport State of Ransomware 2026 de Sophos, presque toutes les victimes attaquées via un identifiant volé avaient la MFA. " +
          "Mais elle était souvent activée sur Microsoft 365 et absente du VPN, du bureau à distance ou des consoles d'administration.",
        retenu:
          "La MFA n'est pas inutile, elle est souvent incomplète. Il faut la mettre sur tous les accès, pas seulement sur la messagerie."
      },
      {
        date: "09/09/2026", source: "IT-Connect",
        titre: "Phishing Microsoft 365 : BigBear 2.0 a contourné la MFA de 258 entreprises",
        url: "https://www.it-connect.fr/bigbear-2-0-phishing-microsoft-365-mfa/",
        resume:
          "Un kit de phishing place une fausse page entre la victime et le vrai portail Microsoft (attaque « AiTM »). " +
          "Il récupère le cookie de session une fois la MFA validée. La France est le 2ᵉ pays le plus touché.",
        retenu:
          "Si un compte est compromis, changer le mot de passe ne suffit pas : il faut aussi révoquer les sessions actives."
      },
      {
        date: "23/07/2026", source: "IT-Connect",
        titre: "Microsoft 365 : la fin de la MFA par SMS et appel au profit des passkeys",
        url: "https://www.it-connect.fr/entra-id-fin-authentification-sms-appel-passkeys/",
        resume:
          "Microsoft arrête la MFA par SMS et appel dans Entra ID. À partir de septembre 2026, les utilisateurs sont invités à créer une passkey, " +
          "qui deviendra obligatoire après le 1ᵉʳ février 2027. Raison : le SMS est trop facile à intercepter.",
        retenu:
          "Ça touche directement les comptes que je gère : il faudra accompagner les utilisateurs pour qu'ils enregistrent leur passkey à temps."
      },
      {
        date: "12/05/2026", source: "Journal du Geek",
        titre: "L'IA peut contourner la protection la plus sécurisée du web en quelques minutes",
        url: "https://www.journaldugeek.com/2026/05/12/lia-peut-contourner-la-protection-la-plus-securisee-du-web-en-quelques-minutes/",
        resume:
          "Des kits prêts à l'emploi permettent de contourner la MFA en temps réel pour quelques centaines de dollars. " +
          "L'IA rend les e-mails de phishing plus crédibles et plus nombreux.",
        retenu:
          "L'utilisateur reste le maillon clé : il faut le sensibiliser à vérifier l'adresse du site avant de se connecter."
      },
      {
        date: "14/01/2026", source: "Okta",
        titre: "Pourquoi l'authentification multifacteur de base ne suffit pas à contrer le phishing moderne",
        url: "https://www.okta.com/fr-fr/newsroom/articles/why-basic-mfa-isnt-enough/",
        resume:
          "Les codes à usage unique et les notifications push peuvent être interceptés ou validés par erreur. " +
          "L'article recommande des méthodes résistantes au phishing, comme FIDO2 et les passkeys.",
        retenu:
          "Toutes les MFA ne se valent pas : une clé de sécurité ou une passkey protège mieux qu'un code reçu par SMS."
      }
    ],
    synthese: {
      constat:
        "La MFA devient la règle : Microsoft et Google l'imposent progressivement, et elle bloque la grande majorité des piratages de comptes.",
      effets:
        "Les pirates s'adaptent avec des kits qui volent la session après la MFA. Et dans beaucoup d'entreprises, la MFA protège la messagerie " +
        "mais pas le VPN, le bureau à distance ou les consoles d'administration. Les méthodes faibles comme le SMS sont abandonnées au profit des passkeys.",
      pourAdmin: [
        "Activer la MFA pour tous les comptes, en commençant par les administrateurs",
        "Préférer l'application ou les passkeys plutôt que le SMS",
        "Couvrir aussi le VPN, le bureau à distance et les consoles d'administration",
        "En cas de compte piraté : nouveau mot de passe ET révocation des sessions",
        "Apprendre aux utilisateurs à ne jamais valider une demande qu'ils n'ont pas faite"
      ],
      avis:
        "Pour moi, la MFA reste la base : un mot de passe seul ne suffit plus. Mais ce n'est pas une protection magique. " +
        "Il faut l'activer partout, choisir des méthodes solides et former les utilisateurs. Dans mon alternance, je gère des comptes " +
        "sur Entra ID : c'est exactement là que ces réglages se font."
    },
    methode: {
      outils: [
        "Feedly — flux RSS des sites spécialisés",
        "Google Alerts — alertes sur « MFA », « double authentification », « passkey », « Entra ID »",
        "LinkedIn — publications de professionnels de la cybersécurité"
      ],
      sources: ["IT-Connect", "Journal du Geek", "Blog Okta (éditeur de solutions d'identité)", "CERT-FR et ANSSI", "Documentation Microsoft Learn"],
      regle: "Aucun chiffre sans sa source.",
      rythme: "Un passage rapide chaque semaine, et un nouvel article ajouté au journal dès qu'une actualité est importante."
    }
  }
});
