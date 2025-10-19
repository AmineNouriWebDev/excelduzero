// Questions pour la leçon 8 - Consolidation de Données (Niveau intermédiaire)
export const questionsLecon8 = [
    {
        question: "Quelle est la principale exigence pour effectuer une consolidation de données **par Position** ?",
        options: [
            "La fonction de synthèse doit obligatoirement être MOYENNE.",
            "Les données sources doivent avoir exactement la même disposition et la même séquence de cellules.",
            "Les sources doivent toutes provenir de classeurs différents.",
            "Les données sources doivent être au format 'Tableau Croisé Dynamique'."
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Pour consolider des données dont l'ordre des colonnes est différent dans les sources (consolidation par Catégorie), quelle option doit être cochée dans la boîte de dialogue Consolider ?",
        options: [
            "Lier aux données source.",
            "Total général.",
            "Ligne du haut et/ou Colonne de gauche.",
            "Développer les données source."
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Quel est l'effet de l'activation de l'option \"**Lier aux données source**\" lors de la consolidation ?",
        options: [
            "Le rapport est mis à jour seulement après une actualisation manuelle (Clic droit → Actualiser).",
            "Le rapport consolidé est mis à jour automatiquement si les données sources changent, et un plan de groupe est créé.",
            "Cela convertit la consolidation en un Graphique Croisé Dynamique.",
            "Cela garantit que toutes les données sources sont dans le même classeur."
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Pourquoi est-il crucial que les étiquettes (en-têtes) de lignes et de colonnes soient orthographiées **exactement** de la même manière dans toutes les sources lors d'une consolidation par Catégorie ?",
        options: [
            "Pour accélérer le temps de calcul du rapport final.",
            "Cela permet d'inclure automatiquement les nouvelles lignes de données.",
            "Pour permettre à Excel d'aligner correctement les données de même nature, sinon elles sont considérées comme des catégories distinctes.",
            "Parce que l'outil ne prend pas en charge les caractères spéciaux ou les accents."
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Quelle fonction de synthèse est appliquée par défaut par Excel dans l'outil de consolidation lorsque vous ajoutez une plage de données numériques ?",
        options: [
            "NB (Compte).",
            "MOYENNE.",
            "SOMME.",
            "MAX."
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
];

export const titleLecon8 = "Quiz : Consolidation de Données (Intermédiaire)";