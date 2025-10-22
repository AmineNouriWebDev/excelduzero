// Questions pour la leçon 27 - Fonctions Financières Excel (Niveau intermédiaire)
export const questionsLecon27 = [
    {
        question: "Quelle fonction Excel permet de calculer la valeur future d'un investissement avec des versements réguliers ?",
        options: [
            "=VA()",
            "=VC()", 
            "=VPM()",
            "=TAUX()"
        ],
        answer: 1, // VC()
    },
    {
        question: "Vous voulez calculer votre mensualité pour un prêt de 200 000€ sur 20 ans à 3%. Quelle fonction utiliser ?",
        options: [
            "=VC(3%/12; 20*12; 200000)",
            "=VA(3%/12; 20*12; 200000)", 
            "=VPM(3%/12; 20*12; 200000)",
            "=VPM(3%; 20; 200000)"
        ],
        answer: 2, // VPM avec taux mensuel
    },
    {
        question: "Selon la convention des signes Excel, comment doivent être représentés les investissements (sorties d'argent) ?",
        options: [
            "Toujours positifs",
            "Toujours négatifs", 
            "Dépend de la fonction utilisée",
            "Toujours nuls"
        ],
        answer: 1, // Toujours négatifs
    },
    {
        question: "Quelle fonction permet de déterminer le montant maximum que vous pouvez emprunter avec une capacité de remboursement de 1 000€/mois ?",
        options: [
            "=VC()",
            "=VA()", 
            "=VPM()",
            "=TAUX()"
        ],
        answer: 1, // VA()
    },
    {
        question: "Pour un calcul avec des versements mensuels, que doit-on faire avec un taux d'intérêt annuel de 6% ?",
        options: [
            "Utiliser 6% directement",
            "Diviser par 12 : 6%/12", 
            "Multiplier par 12 : 6%*12",
            "Utiliser 0.06"
        ],
        answer: 1, // Diviser par 12
    },
];

export const titleLecon27 = "Quiz : Fonctions Financières Excel VC, VA, VPM (Intermédiaire)";