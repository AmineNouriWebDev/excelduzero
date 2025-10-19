// Questions pour la leçon 9 - Sous-totaux Automatiques (Niveau intermédiaire)
export const questionsLecon9 = [
    {
        question: "Quel est le prérequis OBLIGATOIRE avant d'appliquer des sous-totaux automatiques dans Excel ?",
        options: [
            "Convertir les données en format Tableau Excel",
            "Trier les données par la colonne de regroupement",
            "Ajouter manuellement des lignes vides entre les groupes",
            "Protéger la feuille de calcul"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle est la différence fondamentale entre l'outil Sous-total et la fonction SOUS.TOTAL ?",
        options: [
            "L'outil est payant, la fonction est gratuite",
            "L'outil insère automatiquement des lignes de récapitulatif, la fonction ignore les lignes masquées",
            "L'outil fonctionne uniquement avec des nombres, la fonction avec du texte",
            "L'outil crée des graphiques, la fonction fait des calculs"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Que se passe-t-il si vous omettez de désactiver l'option \"Remplacer les sous-totaux actuels\" lors de l'ajout d'un second niveau de sous-totaux ?",
        options: [
            "Excel crée un tableau croisé dynamique à la place",
            "Les sous-totaux existants sont supprimés et remplacés",
            "Les données sources sont définitivement corrompues",
            "Excel affiche un message d'erreur et annule l'opération"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quel avantage principal offre la fonction SOUS.TOTAL par rapport à la fonction SOMME standard ?",
        options: [
            "Elle calcule plus rapidement les totaux",
            "Elle ignore automatiquement les lignes masquées par filtrage ou plan hiérarchique",
            "Elle fonctionne avec des données en provenance de bases externes",
            "Elle permet de créer des sous-totaux multiples en une seule formule"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Dans quel scénario est-il préférable d'utiliser les sous-totaux automatiques plutôt qu'un tableau croisé dynamique ?",
        options: [
            "Pour une analyse exploratoire nécessitant des changements fréquents de structure",
            "Pour créer des rapports imprimables avec sauts de page entre les groupes",
            "Pour analyser des données provenant de multiples sources externes",
            "Pour créer des tableaux de bord interactifs avec des segments"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon9 = "Quiz : Sous-totaux Automatiques (Intermédiaire)";