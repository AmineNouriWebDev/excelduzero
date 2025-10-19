// Questions pour la leçon 1 - Fonctions SI et alternatives (Niveau intermédiaire)
export const questionsLecon1 = [
	{
		question: "Que renvoie la formule =SI(A2>80; \"Bon\"; \"Moyen\") si A2 vaut 85 ?",
		options: ["Moyen", "Bon", "Erreur", "Aucune de ces réponses"],
		answer: 1,
	},
	{
		question: "Pourquoi faut-il trier la colonne 'Note Min' du plus petit au plus grand lorsqu'on utilise RECHERCHEV(...;VRAI) ?",
		options: [
			"Parce que RECHERCHEV exige toujours un tri décroissant",
			"Pour que RECHERCHEV trouve la plus grande valeur inférieure ou égale à la valeur recherchée",
			"Pour accélérer le calcul",
			"Ce n'est pas nécessaire, l'ordre n'a aucune importance",
		],
		answer: 1,
	},
	{
		question: "Que fait une référence absolue comme $H$2:$I$6 dans une formule RECHERCHEV ?",
		options: [
			"Elle empêche la plage de se modifier lors du recopiage de la formule",
			"Elle convertit les valeurs en texte",
			"Elle trie automatiquement la table",
			"Elle force une recherche exacte (FAUX)",
		],
		answer: 0,
	},
	{
		question: "Si vous voulez qu'une formule donne la catégorie 'A' pour >=90, 'B' pour 80-89 etc., quelle approche est recommandée pour plus de maintenabilité ?",
		options: [
			"Imbriquer 10 SI dans la cellule",
			"Créer une table de correspondance et utiliser RECHERCHEV",
			"Écrire une macro pour chaque cas",
			"Utiliser uniquement calculs manuels sans formules",
		],
		answer: 1,
	},
	{
 		question: "Quelle formule est équivalente à une RECHERCHEV approximative pour attribuer une lettre à une note en C2 sans utiliser RECHERCHEV ?",
 		options: [
 			"=RECHERCHEV(C2;$H$2:$I$6;2;FAUX)",
 			"=INDEX($I$2:$I$6;EQUIV(C2;$H$2:$H$6;1))",
 			"=SOMME(SI(C2>$H$2:$H$6;$I$2:$I$6))",
 			"=EQUIV(C2;$H$2:$H$6;0)"
 		],
 		answer: 1,
 	},
];

export const titleLecon1 = "Quiz : SI, SI imbriqués et alternatives (Intermédiaire)";