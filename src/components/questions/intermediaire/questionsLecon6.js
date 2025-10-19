// Questions pour la leçon 6 - Tableaux Structurés Avancés (Niveau intermédiaire)
export const questionsLecon6 = [
    {
        question: "Quel est l'avantage principal des références structurées dans les tableaux Excel ?",
        options: [
            "Elles rendent les formules plus courtes",
            "Elles s'adaptent automatiquement à l'ajout de données et sont plus lisibles",
            "Elles fonctionnent plus rapidement que les références classiques",
            "Elles sont compatibles avec toutes les versions d'Excel"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que fait la formule =[@Quantité]*[@PrixUnitaire] dans un tableau structuré ?",
        options: [
            "Calcule le total général de toutes les quantités et prix",
            "Multiplie la quantité par le prix unitaire pour chaque ligne du tableau",
            "Crée une nouvelle colonne avec le nom \"Quantité*PrixUnitaire\"",
            "Filtre le tableau pour afficher seulement les produits avec quantité positive"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que signifie la syntaxe TableVentes[#Données] ?",
        options: [
            "Toutes les données du tableau incluant les en-têtes et totaux",
            "Uniquement la ligne des totaux du tableau",
            "La plage des données du tableau (hors en-têtes et totaux)",
            "Les en-têtes de colonnes du tableau"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Pourquoi utiliser SOUS.TOTAL plutôt que SOMME dans la ligne des totaux d'un tableau ?",
        options: [
            "SOUS.TOTAL est plus rapide à calculer",
            "SOUS.TOTAL s'actualise automatiquement quand le tableau est filtré",
            "SOUS.TOTAL peut additionner du texte et des nombres",
            "SOUS.TOTAL fonctionne avec des tableaux de plus de 1000 lignes"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quel est l'avantage d'utiliser un tableau structuré comme source pour un TCD ?",
        options: [
            "Le TCD se met à jour automatiquement sans intervention",
            "La plage source du TCD s'ajuste automatiquement quand le tableau grandit",
            "Le TCD devient plus coloré et attrayant",
            "Le TCD peut contenir plus de données qu'avec une plage normale"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon6 = "Quiz : Tableaux Structurés Avancés (Intermédiaire)";