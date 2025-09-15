# PRD — Application « Pet‑Friendly Places »

## Contexte
Application web permettant aux propriétaires d’animaux de compagnie de rechercher, ajouter, évaluer et sauvegarder des lieux accueillant les animaux. Objectif : offrir une expérience simple et communautaire pour découvrir et conserver des endroits adaptés aux animaux.

## Objectifs produit
- Permettre la recherche rapide de lieux acceptant les animaux.  
- Permettre à la communauté d’ajouter et d’évaluer des lieux.  
- Permettre de sauvegarder des lieux favoris et, à terme, gérer des profils d’animaux.

## Personas
- Propriétaire occasionnel : cherche un café ou un parc proche.  
- Contributeur : ajoute des lieux et rédige des avis.  
- Utilisateur multi‑animaux : gère des profils pour différents animaux et sauvegarde ses lieux préférés.

## Périmètre MVP (fonctionnalités essentielles)
- Recherche de lieux (par nom, catégorie ou localisation simple).  
- Liste de résultats avec tri/filtre basique (catégorie, note).  
- Page détail d’un lieu : informations principales, photos, note moyenne, avis.  
- Ajout d’un lieu via formulaire simple.  
- Rédaction d’un avis / notation (1–5 étoiles + commentaire).  
- Sauvegarde d’un lieu en favoris (persistant côté client ou lié à un compte selon évolution).  
- Interface responsive et utilisable sur mobile.

## Fonctionnalités envisagées ultérieures (hors MVP)
- Profils utilisateurs et profils d’animaux.  
- Modération et signalement.  
- Recherche par proximité avancée et intégration cartographique.  
- Partage de favoris et recommandations.

## User stories clés
- Recherche : « En tant qu’utilisateur, je veux chercher un lieu par nom ou par ville pour le trouver rapidement. »  
  - Critère d’acceptation : la recherche retourne une liste pertinente et triable.  
- Détail lieu : « En tant qu’utilisateur, je veux voir les détails d’un lieu pour décider de m’y rendre. »  
  - Critère d’acceptation : la page détail affiche adresse, photos, note moyenne et avis.  
- Ajout lieu : « En tant que contributeur, je veux ajouter un lieu manquant. »  
  - Critère d’acceptation : le lieu ajouté devient visible dans la liste après validation minimale.  
- Avis : « En tant qu’utilisateur, je veux laisser une note et un commentaire. »  
  - Critère d’acceptation : l’avis est visible et la note moyenne est mise à jour.  
- Favoris : « En tant qu’utilisateur, je veux sauvegarder des lieux pour y revenir plus tard. »  
  - Critère d’acceptation : les favoris sont accessibles depuis un espace dédié.

## Modèle de données (haut niveau)
- Venue : id, nom, description, adresse, ville, coordonnées, catégorie, photos, note moyenne, date de création.  
- Review : id, venueId, note (1..5), commentaire, date.  
- User (optionnel) : id, nom, email, favoris, pets.  
- Pet (optionnel) : id, ownerId, nom, espèce, photo.

> Remarque : pour le MVP, l’identification utilisateur peut être optionnelle ; les favoris peuvent être persistés côté client.

## Flux utilisateur succinct
1. Page d’accueil → champ de recherche.  
2. Résultats → filtrer/tri → ouvrir page détail.  
3. Page détail → lire avis, ajouter avis, ajouter aux favoris.  
4. Ajouter lieu → formulaire guidé → confirmation.

## Critères d’acceptation MVP
- Les fonctionnalités listées dans le périmètre MVP (recherche, détail, ajout lieu, avis, favoris) sont accessibles et fonctionnelles côté interface.  
- Les données créées (lieux, avis, favoris) sont persistantes selon la configuration choisie (local ou associée à un compte).  
- L’interface est responsive et utilisable sur mobile.

## Mesures de succès (KPIs)
- Nombre de recherches quotidiennes.  
- Nombre de lieux ajoutés par période.  
- Pourcentage de lieux avec au moins un avis.  
- Nombre de favoris sauvegardés par utilisateur/session.

## Roadmap simplifiée (jalons)
- Milestone 1 : MVP — recherche, listing, page détail, ajout lieu, avis, favoris.  
- Milestone 2 : profils utilisateurs et profils d’animaux.  
- Milestone 3 : fonctionnalités communautaires (modération, signalement, partage).  
- Milestone 4 : améliorations (cartes, recommandations).

## Prochaines étapes
- Valider ce PRD et le sauvegarder dans la documentation (`PRD.md`).  
- Créer quelques tickets pour les éléments du MVP (Recherche, Page Détail, Formulaire Ajout Lieu, Avis, Favoris).  
- Prioriser et planifier la première milestone.