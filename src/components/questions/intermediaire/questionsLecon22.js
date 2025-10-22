// Questions pour la leçon 22 - Liens entre feuilles et classeurs (Niveau intermédiaire)
export const questionsLecon22 = [
    {
        question: "Quelle est la syntaxe correcte pour une référence à une cellule d'un autre classeur Excel ?",
        options: [
            "=ClasseurSource.xlsx!A1",
            "=[ClasseurSource.xlsx]Feuille1!A1", 
            "=Feuille1!A1 dans ClasseurSource.xlsx",
            "={ClasseurSource.xlsx}Feuille1!A1"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que se passe-t-il si vous renommez un classeur source sans mettre à jour les liens ?",
        options: [
            "Excel met automatiquement à jour tous les liens",
            "Les formules affichent l'erreur #REF!",
            "Rien ne change, les liens continuent de fonctionner",
            "Excel crée une copie du fichier renommé"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle méthode de création de liens est recommandée pour éviter les erreurs de syntaxe ?",
        options: [
            "La saisie manuelle de la référence complète",
            "La copie-coller des valeurs",
            "Le pointage souris entre classeurs ouverts",
            "L'utilisation de macros VBA"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Où se trouve l'outil 'Éditer les liens' dans Excel pour gérer les connexions externes ?",
        options: [
            "Formules → Gestion des noms",
            "Données → Éditer les liens", 
            "Accueil → Mise en forme conditionnelle",
            "Fichier → Informations du classeur"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quel est l'avantage principal des liens entre classeurs par rapport à la duplication des données ?",
        options: [
            "Les fichiers deviennent plus légers",
            "Les données se mettent à jour automatiquement à la source",
            "Supprime le besoin de sauvegardes",
            "Améliore la vitesse de calcul"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon22 = "Quiz : Liens entre Feuilles et Classeurs - Maîtrisez les Connexions Dynamiques (Intermédiaire)";