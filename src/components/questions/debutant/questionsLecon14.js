// Questions pour la leçon 14 - Les fonctions Excel (Niveau débutant)
export const questionsLecon14 = [
	{
	  question: "Que se passe-t-il si vous utilisez la formule '=SOMME(A1:A5)' alors que la cellule A3 contient du texte ?",
	  options: [
		"Excel renvoie une erreur #VALEUR!",
		"Excel ignore la cellule A3 et somme uniquement les valeurs numériques",
		"Excel convertit automatiquement le texte en zéro et inclut cette valeur"
	  ],
	  answer: 1 // Excel ignore la cellule avec texte (index 1)
	},
	{
	  question: "Quelle formule utiliseriez-vous pour extraire les 3 premiers caractères du nom dans la cellule A1 et les convertir en majuscules ?",
	  options: [
		"=GAUCHE(MAJUSCULE(A1);3)",
		"=MAJUSCULE(GAUCHE(A1;3))",
		"=EXTRACTION(MAJUSCULE(A1);1;3)"
	  ],
	  answer: 1 // =MAJUSCULE(GAUCHE(A1;3)) (index 1)
	},
	{
	  question: "Vous avez la formule '=B1 + C1' dans la cellule A1. Que devient cette formule si vous la copiez dans la cellule A2 ?",
	  options: [
		"=B1 + C1 (références absolues)",
		"=B2 + C2 (références relatives)",
		"=B$1 + C$1 (références mixtes)"
	  ],
	  answer: 1 // =B2 + C2 (index 1)
	},
	{
	  question: "Quelle fonction utiliseriez-vous pour compter uniquement les cellules non vides contenant du texte dans la plage A1:A10 ?",
	  options: [
		"=NB.SI(A1:A10;\"<>\")",
		"=NBVAL(A1:A10)",
		"=NB.VIDE(A1:A10)"
	  ],
	  answer: 0 // =NB.SI(A1:A10;"<>") (index 0)
	},
	{
	  question: "Vous avez un tableau avec : Colonne A (Produit), Colonne B (Prix), Colonne C (Quantité). Quelle formule utiliseriez-vous pour :\n1. Calculer le total par produit (Prix * Quantité)\n2. Ajouter \"Total : \" devant chaque résultat\n3. Afficher \"NA\" si la quantité est manquante",
	  options: [
		"=\"Total : \" & SI(ESTVIDE(C2); \"NA\"; B2*C2)",
		"=CONCAT(\"Total : \"; SI(C2=\"\"; \"NA\"; PRODUIT(B2;C2)))",
		"=\"Total : \" & SI(C2=\"\"; \"NA\"; B2*C2)"
	  ],
	  answer: 2 // La plus complète (index 2)
	}
  ];
  
  export const titleLecon14 = "Quiz : Maîtrise des fonctions Excel";