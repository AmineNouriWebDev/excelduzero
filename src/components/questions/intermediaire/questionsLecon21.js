// Questions pour la leçon 21 - Gestion des Doublons (Niveau intermédiaire)
export const questionsLecon21 = [
    {
        question: "Quelle est la première étape recommandée avant de supprimer des doublons dans Excel ?",
        options: [
            "Appliquer immédiatement la suppression des doublons",
            "Créer une sauvegarde du fichier original",
            "Modifier les formules de calcul",
            "Supprimer les colonnes non nécessaires"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle fonction Excel permet d'extraire dynamiquement une liste de valeurs uniques ?",
        options: [
            "DOUBLONS",
            "FILTRE",
            "UNIQUE",
            "DISTINCT"
        ],
        answer: 2, // Bonne réponse à l'index 2 (UNIQUE)
    },
    {
        question: "Que se passe-t-il lorsqu'on utilise l'outil 'Supprimer les doublons' avec plusieurs colonnes sélectionnées ?",
        options: [
            "Excel supprime toutes les lignes identiques sur les colonnes sélectionnées",
            "Excel conserve toutes les occurrences des doublons",
            "Excel ne supprime que la première colonne sélectionnée",
            "Excel crée une nouvelle feuille avec les doublons"
        ],
        answer: 0, // Bonne réponse à l'index 0
    },
    {
        question: "Quelle formule permet de compter le nombre de valeurs uniques dans une plage A1:A10 ?",
        options: [
            "=NBVAL(A1:A10)",
            "=SOMMEPROD(1/NB.SI(A1:A10;A1:A10))",
            "=NB.SI(A1:A10;UNIQUE)",
            "=MOYENNE(A1:A10)"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle méthode est la plus adaptée pour visualiser temporairement les doublons sans les supprimer ?",
        options: [
            "La suppression conditionnelle",
            "La mise en forme conditionnelle",
            "Le filtrage automatique",
            "La fonction RECHERCHEV"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon21 = "Quiz : Gestion des Doublons - Maîtrisez le Filtrage et la Suppression (Intermédiaire)";