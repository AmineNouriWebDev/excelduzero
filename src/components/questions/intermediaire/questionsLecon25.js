// Questions pour la leçon 25 - Fonctions texte Excel (Niveau intermédiaire)
export const questionsLecon25 = [
    {
        question: "Quelle fonction Excel permet d'extraire les 3 premiers caractères d'une chaîne située en cellule A1 ?",
        options: [
            "=DROITE(A1; 3)",
            "=STXT(A1; 1; 3)", 
            "=GAUCHE(A1; 3)",
            "=EXTRAIRE(A1; 1; 3)"
        ],
        answer: 2, // GAUCHE(A1; 3)
    },
    {
        question: "Vous avez l'adresse email 'contact@entreprise.com' en A1. Quelle formule extrait 'entreprise.com' ?",
        options: [
            "=GAUCHE(A1; 9)",
            "=DROITE(A1; 15)",
            "=STXT(A1; 9; 20)",
            "=DROITE(A1; NBCAR(A1) - TROUVE('@'; A1))"
        ],
        answer: 3, // DROITE avec calcul dynamique
    },
    {
        question: "Quelle formule combine correctement STXT et TROUVE pour extraire le prénom depuis 'Dupont-Jean' en A1 ?",
        options: [
            "=STXT(A1; 1; TROUVE('-'; A1))",
            "=STXT(A1; TROUVE('-'; A1); 10)",
            "=STXT(A1; TROUVE('-'; A1) + 1; 20)",
            "=STXT(A1; 1; TROUVE('-'; A1) - 1)"
        ],
        answer: 2, // Extraction après le tiret
    },
    {
        question: "Vous avez 'PROD-XYZ-789' en A1. Quelle formule extrait 'XYZ' ?",
        options: [
            "=GAUCHE(A1; 3)",
            "=DROITE(A1; 3)",
            "=STXT(A1; 6; 3)",
            "=STXT(A1; 5; 3)"
        ],
        answer: 2, // STXT à partir de la position 6
    },
    {
        question: "Quelle fonction est la plus adaptée pour extraire l'extension d'un fichier 'document.pdf' ?",
        options: [
            "GAUCHE avec NBCAR",
            "DROITE avec position fixe", 
            "STXT avec position dynamique",
            "DROITE avec NBCAR"
        ],
        answer: 1, // DROITE avec position fixe
    },
];

export const titleLecon25 = "Quiz : Fonctions Texte Excel - GAUCHE, DROITE, STXT (Intermédiaire)";