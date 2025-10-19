// Questions pour la leçon 15 - Analyse de scénarios (Niveau intermédiaire)
export const questionsLecon15 = [
    {
        question: "Quel outil d'analyse de scénarios Excel est le plus adapté pour comparer plusieurs jeux d'hypothèses complets avec jusqu'à 32 variables ?",
        options: [
            "La Valeur Cible (Goal Seek)",
            "Le Gestionnaire de Scénarios", 
            "Les Tables de Données",
            "La fonction DECALER()"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle est la principale limitation de l'outil Valeur Cible (Goal Seek) dans Excel ?",
        options: [
            "Il ne fonctionne qu'avec des nombres entiers",
            "Il ne peut traiter qu'une seule variable d'entrée à la fois",
            "Il nécessite l'activation d'un complément payant",
            "Il ne fonctionne pas avec les fonctions financières"
        ],
        answer: 2, // Bonne réponse à l'index 2 (mais c'est l'option 3 dans l'affichage)
    },
    {
        question: "Quel type d'analyse permet de visualiser l'impact combiné de deux variables différentes sur un seul résultat sous forme de matrice ?",
        options: [
            "Le Gestionnaire de Scénarios",
            "La Valeur Cible avec contraintes multiples",
            "La Table de Données à deux variables",
            "L'analyse de sensibilité avec DECALER()"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Dans quel cas devrait-on utiliser le Solveur Excel plutôt que la Valeur Cible ?",
        options: [
            "Pour des calculs simples de pourcentages",
            "Quand on a besoin d'optimiser sous contraintes avec plusieurs variables",
            "Pour créer des rapports de synthèse colorés",
            "Quand on travaille avec des données textuelles"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle est une bonne pratique recommandée lorsqu'on utilise le Gestionnaire de Scénarios ?",
        options: [
            "Créer uniquement des scénarios optimistes",
            "Utiliser des noms de plages pour les cellules variables",
            "Éviter de générer des rapports de synthèse",
            "Limiter à 2 scénarios maximum par classeur"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon15 = "Quiz : Analyse de Scénarios Excel - Exploration des Possibilités (Intermédiaire)";