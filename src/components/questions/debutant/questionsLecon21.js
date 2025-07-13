// Questions pour la leçon 21 - Validation de Données Basique (Listes Déroulantes)
export const questionsLecon21 = [
	{
	  question: "Où se trouve l'option de validation des données dans le ruban Excel?",
	  options: [
		"Onglet Accueil → groupe Style",
		"Onglet Données → groupe Outils de données",
		"Onglet Formules → groupe Vérification"
	  ],
	  answer: 1 // Onglet Données
	},
	{
	  question: "Quel type de validation permet de créer un menu déroulant avec des options prédéfinies?",
	  options: [
		"Validation numérique",
		"Validation par liste",
		"Validation par formule"
	  ],
	  answer: 1 // Validation par liste
	},
	{
	  question: "Comment spécifier les options d'une liste déroulante dans Excel?",
	  options: [
		"En tapant les valeurs séparées par des virgules",
		"En référençant une plage de cellules contenant les valeurs",
		"En important un fichier CSV"
	  ],
	  answer: 1 // Référence de plage
	},
	{
	  question: "Quelle formule personnalisée permet de valider une adresse email dans Excel?",
	  options: [
		"=ESTEMAIL(A1)",
		"=ET(TROUVE(\"@\",A1)>0, TROUVE(\".\",A1)>TROUVE(\"@\",A1))",
		"=NB.SI(A1;\"*@*.*\")"
	  ],
	  answer: 1 // Formule avec TROUVE
	},
	{
	  question: "Quel type d'alerte bloque complètement la saisie d'une valeur non valide?",
	  options: [
		"Avertissement",
		"Arrêt",
		"Information"
	  ],
	  answer: 1 // Arrêt
	}
  ];
  
  export const titleLecon21 = "Quiz : Validation de Données dans Excel";