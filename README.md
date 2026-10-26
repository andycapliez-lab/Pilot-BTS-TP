# BTS TP Pilot V3

## Nouveauté majeure
La V3 ajoute une vraie recherche Google Drive depuis l'application.

### Fonctionnement
- Source prioritaire : Drive partagé `BTS andy`
- Recherche par matière : topographie, terrassement, assainissement, laboratoire, chaussée, réseaux, béton, implantation...
- Recherche dans tous les sous-dossiers
- Support de plusieurs sources Drive
- Priorité automatique à `BTS andy`
- Affichage de la source de chaque résultat
- Association d'un fichier/dossier trouvé à une séance
- Conservation du suivi pédagogique sur 2 ans

## Dossier principal
BTS andy
ID : `0AJGPXCEfotQeUk9PVA`

## Connexion Google Drive obligatoire pour la recherche
Pour que GitHub Pages puisse lire le Drive privé :
1. Créer un projet sur Google Cloud Console.
2. Activer Google Drive API.
3. Configurer l'écran de consentement OAuth.
4. Créer un identifiant OAuth 2.0 de type "Application Web".
5. Ajouter l'URL de ton site GitHub Pages dans "Origines JavaScript autorisées".
6. Copier le Client ID `...apps.googleusercontent.com`.
7. Dans l'application : Drive -> OAuth Client ID Google -> Enregistrer.
8. Cliquer "Se connecter à Google Drive".

L'application demande uniquement la portée `drive.readonly`.

## Déploiement GitHub Pages
Remplacer les anciens fichiers par :
- `index.html`
- `manifest.webmanifest`
- `sw.js`

Puis recharger le site.


## Identité visuelle
- nouveau logo BTS TP Pilot intégré dans l'en-tête
- logo utilisé comme icône PWA
- écran d'accueil enrichi avec le logo
