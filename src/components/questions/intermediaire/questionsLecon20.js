// Questions pour la leçon 20 - Formats de Nombres Personnalisés (Niveau intermédiaire)
export const questionsLecon20 = [
    {
        question: "Quelle est la structure correcte d'un format personnalisé avec les 4 sections ?",
        options: [
            "POSITIF; NÉGATIF; ZÉRO; TEXTE",
            "NOMBRE; TEXTE; COULEUR; ALIGNEMENT", 
            "FORMAT; CONDITION; VALEUR; UNITÉ",
            "ENTRÉE; SORTIE; CALCUL; AFFICHAGE"
        ],
        answer: 0, // Bonne réponse à l'index 0
    },
    {
        question: "Quel code formaterait le nombre 12500 pour qu'il s'affiche comme '12.5K' ?",
        options: [
            "#,##0.00K",
            "0.0,\"K\"", 
            "#,##0.0,\"K\"",
            "12500/1000+\"K\""
        ],
        answer: 2, // Bonne réponse à l'index 2 (#,##0.0,"K")
    },
    {
        question: "Que fait le placeholder '0' dans un format personnalisé ?",
        options: [
            "Affiche les zéros non significatifs pour l'alignement",
            "Cache les valeurs nulles dans le tableau",
            "Convertit le nombre en texte uniquement",
            "Applique une couleur bleue au nombre"
        ],
        answer: 0, // Bonne réponse à l'index 0
    },
    {
        question: "Comment ajouter la couleur rouge aux nombres négatifs dans un format personnalisé ?",
        options: [
            "{Red}-#,##0.00",
            "[Rouge]#,##0.00", 
            "[Red]-#,##0.00",
            "(Red)#,##0.00"
        ],
        answer: 2, // Bonne réponse à l'index 2 ([Red]-#,##0.00)
    },
    {
        question: "Quel format personnalisé utiliseriez-vous pour afficher '4.75' comme '4h 45min' ?",
        options: [
            "h\"h \"mm\"min\"",
            "H:MM", 
            "hh:mm",
            "heures\"h \"minutes\"min\""
        ],
        answer: 0, // Bonne réponse à l'index 0 (h"h "mm"min")
    },
];

export const titleLecon20 = "Quiz : Formats de Nombres Personnalisés - Maîtrisez l'Affichage des Données (Intermédiaire)";