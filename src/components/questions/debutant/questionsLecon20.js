// Questions pour la leçon 20 - Calendrier Dynamique dans Excel (Niveau débutant)
export const questionsLecon20 = [
	{
	  question: "Quelle fonction Excel est utilisée pour créer la première date du mois dans un calendrier dynamique?",
	  options: [
		"AUJOURDHUI()",
		"DATE()",
		"DATEDIF()"
	  ],
	  answer: 1 // index 1 (DATE)
	},
	{
	  question: "Quelle formule permet de générer la suite des jours pour un mois donné?",
	  options: [
		"=SI(MOIS(B3+1)=1; B3+1; \"\")",
		"=B3 + 1",
		"=JOUR(B3) + 1"
	  ],
	  answer: 0 // index 0 (Formule conditionnelle)
	},
	{
	  question: "Comment formater les cellules pour n'afficher que le numéro du jour (ex: 15 au lieu de 15/01/2025)?",
	  options: [
		"Format standard",
		"Format personnalisé avec 'j'",
		"Utiliser la fonction TEXTE"
	  ],
	  answer: 1 // index 1 (Format personnalisé)
	},
	{
	  question: "Quelle fonction permet d'obtenir le jour de la semaine en texte (ex: 'Lundi')?",
	  options: [
		"JOURSEM()",
		"TEXTE(date; \"dddd\")",
		"NO.SEMAINE()"
	  ],
	  answer: 1 // index 1 (TEXTE)
	},
	{
	  question: "Quelle formule utiliser dans la mise en forme conditionnelle pour colorer les week-ends?",
	  options: [
		"=ESTWEEKEND(B3)",
		"=OU(JOURSEM(B3;2)=6; JOURSEM(B3;2)=7)",
		"=B3 > 5"
	  ],
	  answer: 1 // index 1 (Formule JOURSEM)
	}
  ];
  
  export const titleLecon20 = "Quiz : Calendrier Dynamique dans Excel";