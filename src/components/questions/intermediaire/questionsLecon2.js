// Questions pour la leçon 2 - Fonctions ET et OU (Niveau intermédiaire)
export const questionsLecon2 = [
	{
		question: "Que renvoie la formule =ET(A2>50; B2<100) si A2 vaut 60 et B2 vaut 80 ?",
		options: ["VRAI", "FAUX", "Erreur", "Aucune de ces réponses"],
		answer: 0,
	},
	{
		question: "Quelle formule utilise correctement ET avec SI pour vérifier si un nombre est entre 20 et 50 ?",
		options: [
			"=SI(ET(A2>20; A2<50); \"Valide\"; \"Invalide\")",
			"=SI(OU(A2>20; A2<50); \"Valide\"; \"Invalide\")", 
			"=ET(SI(A2>20; A2<50); \"Valide\"; \"Invalide\")",
			"=SI(A2>20; A2<50; ET(\"Valide\"); \"Invalide\")",
		],
		answer: 0,
	},
	{
		question: "Que renvoie =OU(A3=\"Rouge\"; B3=\"Vert\") si A3 est \"Rouge\" et B3 est \"Bleu\" ?",
		options: [
			"VRAI",
			"FAUX", 
			"Erreur",
			"\"Rouge\"",
		],
		answer: 0,
	},
	{
		question: "Pourquoi utilise-t-on souvent ET et OU avec la fonction SI ?",
		options: [
			"Pour créer des tests logiques complexes avec plusieurs conditions",
			"Pour accélérer les calculs Excel",
			"Pour remplacer toutes les autres fonctions Excel", 
			"Pour éviter d'utiliser des formules",
		],
		answer: 0,
	},
	{
		question: "Dans une mise en forme conditionnelle, quelle formule mettrait en vert les cellules où la vente > 1000 ET le profit > 100 ?",
		options: [
			"=ET(B2>1000; C2>100)",
			"=OU(B2>1000; C2>100)",
			"=SI(ET(B2>1000; C2>100); \"Vert\")", 
			"=ET(B2>1000; OU(C2>100))",
		],
		answer: 0,
	},
];

export const titleLecon2 = "Quiz : Fonctions ET et OU (Intermédiaire)";