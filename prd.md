# Pet Venues — Product Requirement Document (simplifié)

Version: 1.0  
Date: 2025-09-13

## Résumé exécutif
Pet Venues est une application permettant aux propriétaires d'animaux de rechercher des lieux acceptant les animaux, d'ajouter des lieux, de laisser des évaluations, et de gérer des favoris et profils d'animaux. Ce document décrit le périmètre fonctionnel simplifié pour un MVP focalisé sur la découverte, la contribution et la conservation des favoris.

## Objectifs
- Aider les propriétaires d'animaux à trouver rapidement des lieux pet‑friendly.
- Permettre à la communauté d'ajouter et d'évaluer des lieux.
- Offrir une expérience simple pour sauvegarder et retrouver des lieux favoris.
- Lancer un MVP clair et exploitable pour validation utilisateur rapide.

## Public cible
- Propriétaires d'animaux (chiens, chats, petits animaux urbains).
- Voyageurs cherchant des lieux acceptant les animaux.
- Commerces souhaitant apparaître dans un annuaire pet‑friendly.

## MVP — Fonctionnalités prioritaires
- Recherche de lieux par texte, type et proximité.
- Fiche lieu détaillée (nom, adresse, photos, horaires, note moyenne, avis).
- Ajout / proposition de nouveaux lieux via un formulaire simple.
- Système d'évaluation (note 1–5) et commentaires.
- Favoris persistants pour utilisateurs connectés.
- Profil utilisateur minimal et possibilité d'ajouter un profil d'animal (optionnel).
- Authentification basique (inscription / connexion) — uniquement pour actions contributives.

## Données (conceptuelles)
Principales entités à modéliser (haut niveau) :
- Venue — informations publiques sur le lieu (nom, adresse, type, coordonnées, photos, note moyenne).
- User — compte utilisateur minimal (identité et contact).
- PetProfile — profil d'un animal (nom, espèce, photo optionnelle).
- Review — évaluation et commentaire rattachés à un lieu et un utilisateur.
- Favorite — lien entre un utilisateur et un lieu.

(Objectif : définir quelles données stocker sans prescrire la façon de les stocker.)

## User stories (exemples)
- En tant qu'utilisateur, je veux rechercher des cafés pet‑friendly près de chez moi.
- En tant qu'utilisateur, je veux ajouter un nouveau parc qui accepte les chiens.
- En tant qu'utilisateur, je veux noter un lieu et écrire un avis.
- En tant qu'utilisateur, je veux sauvegarder des lieux en favoris.
- En tant qu'utilisateur, je veux créer un profil pour mon animal afin de l'associer à mes favoris.

## Critères d'acceptation (par fonctionnalité)
- Recherche : renvoie des résultats pertinents et affiche nom/type/distance/note pour chaque lieu.
- Fiche lieu : affiche les informations essentielles et la liste des avis.
- Ajout de lieu : les champs obligatoires sont validés et la proposition est enregistrée.
- Évaluation : la note et le commentaire sont enregistrés et la note moyenne est mise à jour.
- Favoris : l'ajout et la suppression de favoris sont persistants pour l'utilisateur.
- Authentification : inscription et connexion fonctionnelles pour permettre la contribution.

## Cas limites et risques
- Doublons de lieux (même nom + même adresse).
- Avis frauduleux ou spam.
- Adresses incomplètes ou coordonnées manquantes.
- Utilisateurs non authentifiés tentant d'effectuer des actions réservées.
- Gestion des fichiers médias volumineux (photos).

## Non‑fonctionnels (haut‑niveau)
- Réactivité : interactions principales perçues comme rapides par l'utilisateur.
- Sécurité basique : données sensibles protégées; actions contributives restreintes aux utilisateurs authentifiés.
- Accessibilité minimale : éléments interactifs correctement libellés.
- Internationalisation possible (textes séparés) — prévoir structure pour traduction sans définir les langues obligatoires.

## KPI (mesures de succès)
- Nombre de lieux ajoutés par période (hebdo/mensuel).
- Nombre d'avis postés.
- Utilisateurs actifs (DAU/MAU).
- Taux de rétention après 7 jours.
- Taux de conversion visiteurs → comptes créés (si applicable).

## Roadmap (itérative, très synthétique)
- Phase 1 (MVP) : recherche, fiche lieu, évaluation, favoris, auth basique.
- Phase 2 : ajout de lieu par les utilisateurs, modération basique, profils d'animaux.
- Phase 3 : amélioration qualité des données (détection doublons, flags), expérience photos et UX.

## Modération & qualité des contenus
- Mécanisme de signalement pour lieux/avis.
- Flux simple de validation ou d'affichage différé pour propositions nouvelles (détails du flux à définir séparément).
- Règles de base pour limiter le spam (limites par utilisateur sur actions contributives).

## Tests minimaux recommandés (conceptuels)
- Parcours utilisateur : créer compte → rechercher → consulter fiche → poster avis → ajouter favori.
- Validation : soumettre un lieu sans champs obligatoires → recevoir erreur de validation.
- Intégrité des données : ajouter plusieurs avis → vérifier calcul de la note moyenne.
- Sécurité : action contributive sans authentification → refus.

## Prochaines étapes concrètes
- Transformer ce PRD simplifié en backlog d'issues (une issue par fonctionnalité / critère d'acceptation).
- Définir les écrans prioritaires (search, fiche lieu, ajout lieu, profil).
- Rédiger un jeu de cas de tests détaillé pour le MVP.
- Lancer un pilote utilisateur restreint pour valider hypothèses produit.

## Notes finales
Ce document est volontairement sans détails de mise en œuvre technique ni recommandations de services externes. Il vise à cadrer le produit au niveau fonctionnel et produit pour une itération MVP rapide.
