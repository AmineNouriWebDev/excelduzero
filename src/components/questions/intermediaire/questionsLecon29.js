// Questions pour la leçon 29 - SOMME.SI, SOMME.SI.ENS, SOMMEPROD (Niveau intermédiaire)
export const questionsLecon29 = [
    {
        question: "Quelle fonction Excel permet de faire une somme avec un seul critère de sélection ?",
        options: [
            "=SOMMEPROD()",
            "=SOMME.SI.ENS()", 
            "=SOMME.SI()",
            "=SOMME()"
        ],
        answer: 2, // SOMME.SI()
    },
    {
        question: "Vous voulez calculer le total des ventes pour la région 'Nord' ET le produit 'Premium'. Quelle fonction est la plus adaptée ?",
        options: [
            "=SOMME.SI()",
            "=SOMMEPROD()",
            "=SOMME.SI.ENS()",
            "=SOMME()"
        ],
        answer: 2, // SOMME.SI.ENS()
    },
    {
        question: "Quelle est la syntaxe correcte de la fonction SOMME.SI ?",
        options: [
            "=SOMME.SI(critère; plage; [plage_somme])",
            "=SOMME.SI(plage; critère; [plage_somme])", 
            "=SOMME.SI(plage_somme; plage; critère)",
            "=SOMME.SI(critère; plage_somme; plage)"
        ],
        answer: 1, // =SOMME.SI(plage; critère; [plage_somme])
    },
    {
        question: "Quelle fonction Excel est la plus polyvalente pour gérer des conditions complexes avec des opérateurs ET/OU combinés ?",
        options: [
            "=SOMME.SI()",
            "=SOMME.SI.ENS()", 
            "=SOMMEPROD()",
            "=SOMME()"
        ],
        answer: 2, // SOMMEPROD()
    },
    {
        question: "Vous devez calculer la somme des produits (quantité × prix) uniquement pour les articles dont la quantité est supérieure à 100. Quelle formule utiliser ?",
        options: [
            "=SOMME.SI(B2:B11;'>100';C2:C11)",
            "=SOMME.SI.ENS(C2:C11;B2:B11;'>100')",
            "=SOMMEPROD((B2:B11)*(C2:C11)*(B2:B11>100))",
            "=SOMME(B2:B11*C2:C11)"
        ],
        answer: 2, // SOMMEPROD avec condition
    },
];

export const titleLecon29 = "Quiz : SOMME.SI, SOMME.SI.ENS et SOMMEPROD (Intermédiaire)";