﻿# Application Liste de Tâches

Une application web simple et élégante de gestion de tâches, construite avec HTML, JavaScript, Node.js et Express.

## 🚀 Fonctionnalités

- Ajout de nouvelles tâches
- Modification du nom de la tâche (clickez sur le texte pour le modifier)
- Marquage des tâches comme complétées
- Suppression des tâches
- Sauvegarde automatique dans le localStorage
- Interface utilisateur responsive
- Design épuré avec Tailwind CSS
- API REST avec Express.js
- Conteneurisation avec Docker

## 🛠️ Technologies utilisées

- HTML5
- JavaScript (ES6+)
- Node.js
- Express.js
- Tailwind CSS (via CDN)
- Docker
- LocalStorage pour la persistance des données
- Monitoring avec PRTG Network Monitor

## 📦 Installation

### Installation locale

1. Clonez ce dépôt :
```bash
git clone [URL_DU_REPO]
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur :
```bash
npm start
```

4. Ouvrez votre navigateur à l'adresse `http://localhost:3000` (lien dans le terminal)

### Installation avec Docker

1. Construisez l'image Docker :
```bash
docker build -t todolist .
```

2. Lancez le conteneur :
```bash
docker run -p 3000:3000 todolist
```

## 💻 Utilisation

1. Pour ajouter une nouvelle tâche :
   - Saisissez votre tâche dans le champ de texte
   - Cliquez sur le bouton "Ajouter" ou appuyez sur Entrée

2. Pour marquer une tâche comme complétée :
   - Cochez la case à côté de la tâche

3. Pour supprimer une tâche :
   - Cliquez sur le bouton "×" à droite de la tâche

## 🔧 Structure du projet
![image](https://github.com/user-attachments/assets/264c07db-e416-490b-a4ed-32364bed53a1)

## 📝 Notes

- Les données sont sauvegardées localement dans le navigateur
- L'application fonctionne hors ligne
- Interface entièrement en français
- Le serveur Express écoute sur le port 3000
- L'application est conteneurisée pour un déploiement facile

