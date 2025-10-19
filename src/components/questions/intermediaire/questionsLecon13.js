// Questions pour la leçon 13 - Validation des Données Avancée (Niveau intermédiaire)
export const questionsLecon13 = [
    {
        question: "Quelle fonction Excel permet de créer des listes déroulantes dépendantes qui s'adaptent dynamiquement aux sélections précédentes ?",
        options: [
            "La fonction SI() conditionnelle",
            "La fonction INDIRECT() avec plages nommées",
            "La fonction RECHERCHEV() de recherche",
            "La fonction SOMME() simple"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle combinaison de fonctions est recommandée pour valider un email professionnel avec un format spécifique ?",
        options: [
            "ET() + OU() uniquement",
            "SOMME() + MOYENNE() pour vérifier la longueur",
            "ET() + TROUVE() pour vérifier la présence de '@' et '.com'",
            "SI() + NBCAR() pour compter les caractères"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Quel est l'avantage principal d'utiliser la fonction DECALER() dans les validations de données ?",
        options: [
            "Elle rend les formules plus courtes",
            "Elle permet de créer des plages dynamiques qui s'ajustent automatiquement",
            "Elle améliore la vitesse de calcul Excel",
            "Elle ajoute des couleurs automatiquement aux listes"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quand doit-on utiliser le type d'alerte 'Arrêt' dans la validation des données ?",
        options: [
            "Pour toutes les validations sans exception",
            "Uniquement pour les données numériques",
            "Pour les données essentielles à l'intégrité du système (codes produits, IDs uniques)",
            "Seulement quand on veut afficher un message d'information"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Comment intégrer efficacement la validation des données avec les tableaux croisés dynamiques ?",
        options: [
            "En copiant les validations manuellement après chaque mise à jour",
            "En utilisant des formules basées sur les résultats des TCD avec DECALER()",
            "En évitant complètement cette intégration",
            "En convertissant les TCD en images statiques"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon13 = "Quiz : Validation des Données Avancée - Techniques Professionnelles (Intermédiaire)";