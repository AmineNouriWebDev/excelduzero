// Questions pour la leçon 32 - Graphiques dynamiques avec contrôles (Niveau intermédiaire)
export const questionsLecon32 = [
    {
        question: "Quelle fonction Excel est principalement utilisée pour extraire des données basées sur la position d'un contrôle ?",
        options: [
            "SOMME()",
            "INDEX()", 
            "RECHERCHEV()",
            "SI()"
        ],
        answer: 1, // INDEX()
    },
    {
        question: "Quel type de contrôle est le plus adapté pour permettre une sélection multiple dans un graphique dynamique ?",
        options: [
            "Boutons radio",
            "Cases à cocher", 
            "Liste déroulante",
            "Barre de défilement"
        ],
        answer: 1, // Cases à cocher
    },
    {
        question: "Comment crée-t-on un titre de graphique dynamique qui change automatiquement selon les sélections ?",
        options: [
            "En modifiant manuellement le titre à chaque fois",
            "En utilisant une formule liée à une cellule de titre dynamique",
            "En programmant une macro VBA",
            "En utilisant la mise en forme conditionnelle sur le titre"
        ],
        answer: 1, // En utilisant une formule liée à une cellule de titre dynamique
    },
    {
        question: "Que retourne la fonction NA() lorsqu'elle est utilisée avec des contrôles de graphiques dynamiques ?",
        options: [
            "Une valeur zéro",
            "Une erreur #N/A pour masquer les données non sélectionnées",
            "Un texte vide",
            "La valeur VRAI"
        ],
        answer: 1, // Une erreur #N/A pour masquer les données non sélectionnées
    },
    {
        question: "Quelle est la principale différence entre l'approche par graphiques croisés dynamiques et l'approche par contrôles de formulaire ?",
        options: [
            "Les graphiques croisés dynamiques sont plus flexibles",
            "L'approche par contrôles offre plus de personnalisation",
            "Les deux méthodes sont identiques",
            "Seuls les graphiques croisés dynamiques fonctionnent avec les listes déroulantes"
        ],
        answer: 1, // L'approche par contrôles offre plus de personnalisation
    },
];

export const titleLecon32 = "Quiz : Graphiques dynamiques avec contrôles (Intermédiaire)";