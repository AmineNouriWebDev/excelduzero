// Questions pour la leçon 15 -Utilisation des pourcentages (Niveau débutant)
export const questionsLecon15 = [
	{
		question: "Vous avez un produit à 200€ avec une remise de 15%. Quelle formule calcule correctement le prix final?",
		options: [
		  "=200 * 15%",
		  "=200 * (1 - 15%)",
		  "=200 - 15%"
		],
		answer: 1 // =200 * (1 - 15%) (index 1)
	  },
	  {
		question: "Comment calculer la variation en pourcentage entre les ventes de janvier (A1) et février (A2)?",
		options: [
		  "=(A2 - A1) / A1",
		  "=(A1 - A2) / A2",
		  "=A2 / A1 - 1"
		],
		answer: 0 // =(A2 - A1) / A1 (index 0)
	  },
	  {
		question: "Un article coûte 85€ après une réduction de 15%. Comment trouver son prix original?",
		options: [
		  "=85 * (1 + 15%)",
		  "=85 / (1 - 15%)",
		  "=85 / 15%"
		],
		answer: 1 // =85 / (1 - 15%) (index 1)
	  },
	  {
		question: "Vous avez un prix d'achat de 50€ et un prix de vente de 80€. Comment calculer la marge en pourcentage?",
		options: [
		  "=(80 - 50) / 50",
		  "=(80 - 50) / 80",
		  "=50 / 80"
		],
		answer: 1 // =(80 - 50) / 80 (index 1)
	  },
	  {
		question: "Quelle formule permet de calculer la contribution d'une valeur (B2) au total général (B10) avec une référence absolue correcte?",
		options: [
		  "=B2/$B$10",
		  "=B2/B10",
		  "=B2/$B10"
		],
		answer: 0 // =B2/$B$10 (index 0)
	  }
  ];
  
  export const titleLecon15 = "Quiz : Utilisation des pourcentages";