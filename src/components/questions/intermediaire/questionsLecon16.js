// Questions pour la leçon 16 - Solveur Excel (Niveau intermédiaire)
export const questionsLecon16 = [
    {
        question: "Quelle est la principale différence entre la Valeur Cible et le Solveur Excel ?",
        options: [
            "Le Solveur ne fonctionne qu'avec des formules linéaires",
            "La Valeur Cible ne gère qu'une variable, le Solveur gère plusieurs variables avec contraintes",
            "Le Solveur est inclus par défaut, la Valeur Cible nécessite un complément",
            "La Valeur Cible est plus rapide pour les problèmes complexes"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle méthode de résolution du Solveur est recommandée pour les problèmes linéaires avec des relations proportionnelles ?",
        options: [
            "GRG Nonlinéaire",
            "Evolutionary", 
            "Simplex LP",
            "Méthode du point intérieur"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Quelle contrainte utiliser dans le Solveur pour s'assurer qu'une variable ne prenne que des valeurs 0 ou 1 ?",
        options: [
            "int (entier)",
            "bin (binaire)",
            "dif (toutes différentes)",
            ">= 0 et <= 1"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Dans l'exemple de la boulangerie, quelle était la contrainte la plus limitante pour la production optimale ?",
        options: [
            "La quantité de farine disponible",
            "Le temps de production disponible", 
            "La demande du marché",
            "Le coût des ingrédients"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que signifie le message 'Solveur n'a pas trouvé de solution faisable' ?",
        options: [
            "Le Solveur a besoin de plus de temps pour calculer",
            "Les contraintes sont trop restrictives et aucune solution ne les respecte toutes",
            "La cellule objectif contient une erreur de formule",
            "La méthode de résolution choisie est inadaptée"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon16 = "Quiz : Solveur Excel - Optimisation Avancée sous Contraintes (Intermédiaire)";