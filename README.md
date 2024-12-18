# SportSee - Projet OpenClassRoom

Projet d'OpenClassRoom pour la formation développeur front-end React.

## Scénario

> Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif.
>
> En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur.
>
> Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Objectifs pédagogiques

- Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript
- Interagir avec un service Web
- Assurer la qualité des données d'une application

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure) ou yarn

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/piirk/sportsee.git
```

2. Accédez au repertoire du projet :

```bash
cd sportsee
```

3. Installez les dépendances :

```bash
npm install
```

ou

```bash
npm install
```

L'application sera accessible à l'adresse http://localhost:3000.

## Scripts

- `npm start` ou `yarn start` : Démarre l'application en mode développement.
- `npm run build` ou `yarn build` : Compile l'application pour la production.
- `npm test` ou `yarn test` : Lance les tests unitaires.

## Structure du projet

```plaintext
src/
├── assets/            # Fichiers statiques (images, icônes, polices, etc.)
├── components/        # Composants réutilisables
├── config/            # Fichiers de configuration
├── models/            # Modèles de données
├── pages/             # Pages de l'application
├── services/          # Services pour interagir avec l'API
├── types/             # Définitions de types TypeScript
├── index.tsx          # Point d'entrée de l'application
```

## API

L'application interagit avec une API pour récupérer les données de l'utilisateur. Assurez-vous que l'API est disponible et configurée correctement.

### Endpoints disponibles

- `GET /user/:userId` : Récupère les informations de l'utilisateur.
- `GET /user/:userId/activity` : Récupère les données d'activité de l'utilisateur.
- `GET /user/:userId/average-sessions` : Récupère les sessions moyennes de l'utilisateur.
- `GET /user/:userId/performance` : Récupère les données de performance de l'utilisateur.

## Licence

Ce projet est sous licence MIT.
