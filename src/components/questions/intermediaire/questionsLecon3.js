// Questions pour la leçon 3 - Gestion des erreurs #N/A et #VALUE! (Niveau intermédiaire)
export const questionsLecon3 = [
    {
        question: "Quelle est la cause la plus probable de l'erreur #N/A dans une formule RECHERCHEV ?",
        options: [
            "La valeur recherchée est introuvable dans la plage de données",
            "Une division par zéro dans la formule",
            "Les données de la plage de recherche ne sont pas triées",
            "La formule fait référence à une cellule vide"
        ],
        answer: 0,
    },
    {
        question: "Quelle fonction doit-on utiliser pour capturer spécifiquement une erreur #N/A et la remplacer par une valeur personnalisée ?",
        options: [
            "=SIERREUR(ma_formule; \"Valeur de remplacement\")",
            "=SI(ESTNA(ma_formule); \"Valeur de remplacement\"; ma_formule)",
            "=ESTNA(ma_formule; \"Valeur de remplacement\")",
            "=SI(ESTERREUR(ma_formule); \"Valeur de remplacement\")"
        ],
        answer: 1,
    },
    {
        question: "Que renvoie la formule =A2+B2 si la cellule A2 contient le texte \"123\" et B2 le nombre 456 ?",
        options: [
            "579",
            "#VALUE!",
            "\"123456\"",
            "#N/A"
        ],
        answer: 1,
    },
    {
        question: "Quelle est la principale différence entre SIERREUR et ESTNA ?",
        options: [
            "ESTNA est plus récent et remplace SIERREUR",
            "SIERREUR gère tous les types d'erreurs, ESTNA ne cible que #N/A",
            "SIERREUR ne fonctionne qu'avec les fonctions de recherche",
            "ESTNA peut corriger les erreurs automatiquement"
        ],
        answer: 1,
    },
    {
        question: "Pourquoi la formule =GAUCHE(A5; \"deux\") renvoie-t-elle l'erreur #VALUE! ?",
        options: [
            "La cellule A5 est vide",
            "Il manque des guillemets autour de \"deux\"",
            "La fonction GAUCHE ne peut pas traiter de texte",
            "Le deuxième argument de GAUCHE doit être un nombre, pas du texte"
        ],
        answer: 3,
    },
];

export const titleLecon3 = "Quiz : Gestion des erreurs #N/A et #VALUE! (Intermédiaire)";