# Portfolio — BTS SIO option SISR (Épreuve E5)

Site statique (HTML / CSS / JavaScript) sans dépendance, prêt pour **GitHub Pages**.

## 📁 Structure

```
portfolio-e5/
├── index.html           ← Accueil : présentation, BTS, école, entreprise, compétences, parcours
├── epreuves.html        ← E5 / E6 / E7 + tableau de synthèse (généré automatiquement)
├── projets.html         ← réalisations avec fiche détaillée et schéma d'architecture
├── veille.html          ← sujet, axes, journal (« ce que j'en retiens »), synthèse, méthode
├── certifications.html  ← certifications filtrables
├── contact.html         ← email, LinkedIn, GitHub, CV + formulaire (mailto)
├── css/style.css        ← design (couleurs modifiables dans :root)
├── js/data/             ← ✏️ LE CONTENU À MODIFIER, un fichier par page :
│   ├── accueil.js       ←   profil, contact, école, entreprise, compétences, parcours
│   ├── epreuves.js      ←   référentiel bloc 1, E5 / E6 / E7
│   ├── projets.js       ←   réalisations (alimentent aussi le tableau de synthèse)
│   ├── veille.js        ←   veille technologique
│   └── certifications.js
├── js/main.js           ← logique commune (pas besoin d'y toucher)
├── images/              ← ta photo : photo.jpg
└── documents/           ← CV.pdf, tableau-synthese-E5.pdf, procédures…
```

### Garde-fous intégrés
- **Compteurs toujours justes** : nombre de projets, certifications, articles… sont calculés depuis les fichiers `js/data/`.
- **Contrôle du référentiel** : la page Épreuves signale si une compétence C1–C6 n'est couverte par aucune réalisation.
- **Champs à remplir** : ouvre la console (F12) pour voir combien de `[crochets]` il reste.
- **Pas de téléphone** affiché : l'email suffit.
- Avant l'examen, passe le `statut` de E5/E6 à `"Terminé"`.

## ✏️ Personnaliser

1. Ouvre les fichiers de `js/data/` et remplace tout ce qui est entre `[crochets]`.
2. Adapte les **réalisations** : ce sont des exemples typiques SISR. Pour chacune, indique
   les compétences du bloc 1 (`C1` à `C6`) et les briques de son schéma (`architecture`) :
   le **tableau de synthèse et les schémas se génèrent tout seuls**.
3. Ajoute ta photo (`images/photo.jpg`) et ton CV (`documents/CV.pdf`).
4. Pour ajouter une réalisation : copie un bloc `{ ... }` dans `realisations` et change son `id`.

## 🚀 Mettre en ligne sur GitHub Pages

1. Crée un compte sur [github.com](https://github.com).
2. Crée un dépôt **public** nommé `ton-pseudo.github.io` (remplace par ton pseudo exact).
3. Envoie les fichiers :
   - **Simple :** bouton *Add file → Upload files*, glisse tout le contenu du dossier, puis *Commit changes*.
   - **Avec Git (mieux pour le jury) :**
     ```bash
     git init
     git add .
     git commit -m "Premier commit du portfolio"
     git branch -M main
     git remote add origin https://github.com/ton-pseudo/ton-pseudo.github.io.git
     git push -u origin main
     ```
4. Dans le dépôt : *Settings → Pages → Source : Deploy from a branch → main / (root)* → *Save*.
5. Ton site est en ligne après 1–2 minutes sur `https://ton-pseudo.github.io`.

## 🧪 Tester en local

Double-clique sur `index.html`, ou lance un petit serveur :
```bash
python3 -m http.server 8000
```
puis ouvre http://localhost:8000
