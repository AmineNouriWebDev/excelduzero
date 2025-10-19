// Questions pour la leçon 4 - Fonctions RECHERCHEV et RECHERCHEH (Niveau intermédiaire)
export const questionsLecon4 = [
	{
		question: "Quelle est la principale différence entre RECHERCHEV et RECHERCHEH ?",
		options: [
			"RECHERCHEV recherche verticalement, RECHERCHEH horizontalement",
			"RECHERCHEV est plus rapide que RECHERCHEH",
			"RECHERCHEH ne fonctionne qu'avec du texte",
			"RECHERCHEV ne peut chercher que des nombres"
		],
		answer: 0,
	},
	{
		question: "Que renvoie =RECHERCHEV(\"A103\";A2:C10;3;FAUX) si \"A103\" n'existe pas dans la colonne A ?",
		options: [
			"#N/A",
			"0",
			"FAUX", 
			"\"Non trouvé\""
		],
		answer: 0,
	},
	{
		question: "Dans la formule =RECHERCHEH(\"Janvier\";A1:M5;3;FAUX), que représente le chiffre 3 ?",
		options: [
			"Le numéro de la ligne à renvoyer",
			"Le numéro de la colonne à renvoyer",
			"Le nombre de caractères à comparer", 
			"Le type de recherche"
		],
		answer: 0,
	},
	{
		question: "Quand doit-on utiliser VRAI comme quatrième argument dans RECHERCHEV ?",
		options: [
			"Pour une recherche approximative dans un tableau trié",
			"Pour accélérer la recherche",
			"Pour rechercher uniquement des valeurs textuelles", 
			"Pour ignorer les erreurs"
		],
		answer: 0,
	},
	{
		question: "Que se passe-t-il si on utilise =RECHERCHEV(\"Produit\";A2:D10;5;FAUX) alors qu'il n'y a que 4 colonnes dans A2:D10 ?",
		options: [
			"#REF!",
			"#N/A",
			"#VALEUR!", 
			"La formule renvoie la dernière colonne disponible"
		],
		answer: 0,
	},
];

export const titleLecon4 = "Quiz : Fonctions RECHERCHEV et RECHERCHEH (Intermédiaire)";