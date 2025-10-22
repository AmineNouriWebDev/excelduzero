// Questions pour la leçon 34 - Création d'un tableau de bord interactif (Niveau intermédiaire)
export const questionsLecon34 = [
    {
        question: "Quelle fonction Excel est la PLUS adaptée pour calculer un chiffre d'affaires avec plusieurs critères de filtrage ?",
        options: [
            "SOMME.SI()",
            "SOMME()",
            "SOMME.SI.ENS()", 
            "SOMME.PROD()"
        ],
        answer: 2, // SOMME.SI.ENS()
    },
    {
        question: "Quel type de contrôle de formulaire est le PLUS adapté pour permettre à l'utilisateur de choisir une région dans une liste prédéfinie ?",
        options: [
            "Un curseur de défilement",
            "Un bouton radio", 
            "Une case à cocher",
            "Une liste déroulante"
        ],
        answer: 3, // Une liste déroulante
    },
    {
        question: "Quelle combinaison de fonctions permet de créer une liste dynamique des produits uniques à partir d'un tableau ?",
        options: [
            "SI() avec ET()",
            "INDEX() avec EQUIV()",
            "UNIQUE() avec FILTRE()", 
            "RECHERCHEV() avec SIERREUR()"
        ],
        answer: 2, // UNIQUE() avec FILTRE()
    },
    {
        question: "Pour que les graphiques s'adaptent automatiquement à l'ajout de nouvelles données, quelle technique recommandez-vous ?",
        options: [
            "Utiliser des plages dynamiques avec DECALER()",
            "Recréer les graphiques manuellement",
            "Utiliser la fonction COPIER()", 
            "Désactiver la mise à jour automatique"
        ],
        answer: 0, // Utiliser des plages dynamiques avec DECALER()
    },
    {
        question: "Quel est l'avantage principal d'utiliser un tableau Excel structuré (Ctrl+T) pour les données sources d'un tableau de bord ?",
        options: [
            "Les formules s'étendent automatiquement aux nouvelles lignes",
            "Les graphiques deviennent plus colorés", 
            "Les données sont compressées pour gagner de l'espace",
            "Les formules deviennent plus rapides à calculer"
        ],
        answer: 0, // Les formules s'étendent automatiquement aux nouvelles lignes
    },
];

export const titleLecon34 = "Quiz : Création d'un tableau de bord interactif (Intermédiaire)";