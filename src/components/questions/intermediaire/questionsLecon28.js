// Questions pour la leçon 28 - Statistiques Descriptives Excel (Niveau intermédiaire)
export const questionsLecon28 = [
    {
        question: "Quelle fonction Excel permet de calculer la valeur qui sépare un ensemble de données en deux parties égales, résistant aux valeurs extrêmes ?",
        options: [
            "=MOYENNE()",
            "=MEDIANE()", 
            "=MODE.SIMPLE()",
            "=ECARTYPE.S()"
        ],
        answer: 1, // MEDIANE()
    },
    {
        question: "Vous analysez les revenus annuels d'une entreprise. La moyenne est de 45 000€ mais la médiane est de 32 000€. Que cela indique-t-il ?",
        options: [
            "Les données sont normalement distribuées",
            "Il y a des valeurs extrêmes qui tirent la moyenne vers le haut",
            "L'échantillon est trop petit",
            "Tous les employés ont le même salaire"
        ],
        answer: 1, // Valeurs extrêmes
    },
    {
        question: "Quelle fonction Excel est la plus appropriée pour mesurer la variabilité ou dispersion des données autour de la moyenne ?",
        options: [
            "=MOYENNE()",
            "=VAR.S()", 
            "=ECARTYPE.S()",
            "=MEDIANE()"
        ],
        answer: 2, // ECARTYPE.S()
    },
    {
        question: "Quel complément Excel fournit une analyse statistique complète avec plus de 15 mesures calculées automatiquement ?",
        options: [
            "Solver",
            "Analysis ToolPak",
            "Power Query", 
            "Data Analysis Plus"
        ],
        answer: 1, // Analysis ToolPak
    },
    {
        question: "Dans un contrôle qualité, vous avez un écart-type faible. Quelle interprétation est correcte ?",
        options: [
            "Le processus est incontrôlable",
            "Les données sont très dispersées",
            "Le processus est stable et contrôlé", 
            "La moyenne est faussée"
        ],
        answer: 2, // Processus stable
    },
];

export const titleLecon28 = "Quiz : Statistiques Descriptives avec Excel (Intermédiaire)";