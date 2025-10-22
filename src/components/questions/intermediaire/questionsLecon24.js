// Questions pour la leçon 24 - Nettoyage et transformation de données (Niveau intermédiaire)
export const questionsLecon24 = [
    {
        question: "Quelle est la stratégie recommandée pour gérer des données manquantes importantes (>20%) dans une colonne numérique ?",
        options: [
            "Supprimer toutes les lignes concernées",
            "Remplir avec la valeur 0",
            "Remplir avec la moyenne ou une valeur par défaut",
            "Ignorer les données manquantes dans l'analyse"
        ],
        answer: 2, // Bonne réponse à l'index 2
    },
    {
        question: "Quelle transformation utiliser pour séparer 'Dupont;Jean;Paris' en trois colonnes distinctes ?",
        options: [
            "Changer le type de données",
            "Diviser la colonne par délimiteur",
            "Supprimer les espaces",
            "Format majuscules/minuscules"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle technique permet de copier les valeurs des cellules supérieures pour combler les vides dans des données hiérarchiques ?",
        options: [
            "Suppression des doublons",
            "Remplissage vers le bas",
            "Filtrage conditionnel",
            "Remplacement de valeurs"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle est la bonne pratique de performance la plus importante dans Power Query ?",
        options: [
            "Utiliser toujours l'éditeur avancé",
            "Appliquer les filtres le plus tôt possible",
            "Travailler avec toutes les colonnes",
            "Sauvegarder après chaque étape"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
    {
        question: "Quelle opération effectuer en premier lors du nettoyage d'une base clients avec des noms en majuscules et emails mélangés ?",
        options: [
            "Supprimer les doublons",
            "Standardiser la casse des textes",
            "Changer les types de données",
            "Diviser les colonnes"
        ],
        answer: 1, // Bonne réponse à l'index 1
    },
];

export const titleLecon24 = "Quiz : Nettoyage et Transformation de Données - Maîtrisez les Techniques Avancées (Intermédiaire)";