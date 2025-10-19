// Questions pour la leçon 5 - Fonctions INDEX, EQUIV et INDEX-EQUIV (Niveau intermédiaire)
export const questionsLecon5 = [
    {
        question: "Quel est le rôle principal de la fonction EQUIV dans Excel ?",
        options: [
            "Renvoie la valeur d'une cellule à une position spécifique",
            "Renvoie la position relative d'un élément dans une plage",
            "Effectue une addition conditionnelle sur une plage de cellules",
            "Fusionne le contenu de deux cellules"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que fait la formule =INDEX(A1:C10; 3; 2) ?",
        options: [
            "Additionne les 3 premières lignes et 2 premières colonnes",
            "Renvoie la valeur située à la 3ème ligne et 2ème colonne de la plage A1:C10",
            "Recherche la valeur '3' dans la colonne A et renvoie la valeur de la colonne B",
            "Tri le tableau par ordre croissant sur la colonne B"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quel est le principal avantage de la combinaison INDEX-EQUIV par rapport à RECHERCHEV ?",
        options: [
            "Elle est plus simple à écrire",
            "Elle permet des recherches de la gauche vers la droite uniquement",
            "Elle permet des recherches vers la gauche et ne casse pas si une colonne est insérée",
            "Elle ne peut renvoyer que des valeurs numériques"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Que renvoie la formule =EQUIV(\"Pomme\"; A1:A10; 0) si \"Pomme\" se trouve dans la cellule A4 ?",
        options: [
            "La valeur de la cellule A4",
            "La valeur 0",
            "La valeur 4",
            "La valeur VRAI"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Comment écrire une combinaison INDEX-EQUIV pour trouver un prix à partir d'un code produit ?",
        options: [
            "=INDEX(Code_Produit; EQUIV(Prix; Plage_Prix; 0))",
            "=EQUIV(Code_Produit; INDEX(Plage_Prix; 0))",
            "=INDEX(Plage_Prix; EQUIV(Code_Produit; Plage_Code; 0))",
            "=INDEX(EQUIV(Code_Produit; Plage_Code; 0); Plage_Prix)"
        ],
        answer: 0, // Bonne réponse à l'index 0
    },
];

export const titleLecon5 = "Quiz : Fonctions INDEX et EQUIV (Intermédiaire)";