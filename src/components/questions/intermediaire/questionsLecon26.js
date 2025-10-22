// Questions pour la leçon 26 - Fonctions Date et Heure Excel (Niveau intermédiaire)
export const questionsLecon26 = [
    {
        question: "Quelle fonction Excel retourne la date et l'heure actuelles et se met à jour à chaque calcul de la feuille ?",
        options: [
            "=AUJOURD_HUI()",
            "=MAINTENANT()", 
            "=DATE()",
            "=HEURE()"
        ],
        answer: 1, // MAINTENANT()
    },
    {
        question: "Vous devez calculer l'âge exact en années entre une date de naissance en A1 et aujourd'hui. Quelle formule utiliser ?",
        options: [
            "=AUJOURD_HUI() - A1",
            "=DATEDIF(A1; AUJOURD_HUI(); 'Y')",
            "=YEARFRAC(A1; AUJOURD_HUI())",
            "=EDATE(A1; 12)"
        ],
        answer: 0, // DATEDIF pour l'âge exact
    },
    {
        question: "Quelle fonction permet de calculer la date de fin d'un projet en excluant automatiquement les weekends et jours fériés ?",
        options: [
            "=DATE()",
            "=EDATE()", 
            "=WORKDAY()",
            "=NETWORKDAYS()"
        ],
        answer: 3, // WORKDAY() pour date de fin
    },
    {
        question: "Vous avez une date de début en A1 et voulez ajouter exactement 6 mois. Quelle formule utiliser ?",
        options: [
            "=A1 + 180",
            "=DATE(ANNEE(A1); MOIS(A1) + 6; JOUR(A1))",
            "=EDATE(A1; 6)",
            "=WORKDAY(A1; 6)"
        ],
        answer: 2, // EDATE pour ajouter des mois
    },
    {
        question: "Quelle fonction est spécialement conçue pour calculer des fractions d'année, utile dans les calculs financiers ?",
        options: [
            "=DATEDIF()",
            "=YEARFRAC()", 
            "=EDATE()",
            "=WORKDAY.INTL()"
        ],
        answer: 1, // YEARFRAC pour fractions d'année
    },
];

export const titleLecon26 = "Quiz : Fonctions Date et Heure Excel Avancées (Intermédiaire)";