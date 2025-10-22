// Questions pour la leçon 33 - Liens dynamiques entre classeurs (Niveau intermédiaire)
export const questionsLecon33 = [
    {
        question: "Quelle fonction Excel permet de créer des références dynamiques à partir de texte, mais nécessite que le classeur source soit ouvert ?",
        options: [
            "RECHERCHEV()",
            "INDIRECT()", 
            "SIERREUR()",
            "TEXTE()"
        ],
        answer: 1, // INDIRECT()
    },
    {
        question: "Que se passe-t-il lorsqu'un classeur source lié est déplacé vers un autre dossier ?",
        options: [
            "Les liens se mettent à jour automatiquement",
            "Excel envoie un email de notification",
            "Les formules de liaison affichent une erreur #LIEN!",
            "Rien ne change, tout fonctionne normalement"
        ],
        answer: 2, // Les formules de liaison affichent une erreur #LIEN!
    },
    {
        question: "Quelle méthode de liaison est la PLUS robuste pour des tableaux de bord professionnels ?",
        options: [
            "La méthode manuelle simple",
            "Les connexions de données via l'onglet Données",
            "La fonction INDIRECT()",
            "La copie manuelle des valeurs"
        ],
        answer: 1, // Les connexions de données via l'onglet Données
    },
    {
        question: "Quel outil Excel permet de rediriger les liens brisés vers de nouveaux fichiers sources ?",
        options: [
            "L'onglet Accueil → Format",
            "Données → Connexions → Modifier le lien",
            "Formules → Gestion des noms", 
            "Développeur → Macros"
        ],
        answer: 1, // Données → Connexions → Modifier le lien
    },
    {
        question: "Quel avantage principal offre l'utilisation de liens entre classeurs pour les rapports mensuels ?",
        options: [
            "Supprime le besoin de sauvegarder les fichiers",
            "Permet la mise à jour automatique des données consolidées",
            "Rend les fichiers plus légers",
            "Élimine toutes les erreurs Excel"
        ],
        answer: 1, // Permet la mise à jour automatique des données consolidées
    },
];

export const titleLecon33 = "Quiz : Liens dynamiques entre classeurs (Intermédiaire)";