// Questions pour la leçon 22 - Protection de Feuille et de Classeur
export const questionsLecon22 = [
	{
	  question: "Où se trouve l'option pour chiffrer un classeur Excel avec mot de passe?",
	  options: [
		"Onglet Accueil → groupe Style",
		"Menu Fichier → Informations → Protéger le classeur",
		"Onglet Révision → Protéger le classeur"
	  ],
	  answer: 1 // Menu Fichier → Informations
	},
	{
	  question: "Quelle est la première étape pour protéger uniquement certaines cellules dans une feuille?",
	  options: [
		"Activer directement la protection de la feuille",
		"Déverrouiller toutes les cellules puis verrouiller uniquement celles à protéger",
		"Sélectionner uniquement les cellules à protéger"
	  ],
	  answer: 1 // Déverrouiller toutes puis verrouiller celles à protéger
	},
	{
	  question: "Que se passe-t-il si vous perdez le mot de passe d'un classeur chiffré?",
	  options: [
		"Vous pouvez le récupérer via l'option 'Mot de passe oublié'",
		"Il est impossible de récupérer le fichier",
		"Microsoft peut vous aider à le récupérer"
	  ],
	  answer: 1 // Impossible de récupérer
	},
	{
	  question: "Quelle option de protection empêche l'ajout ou la suppression de feuilles?",
	  options: [
		"Protection de feuille",
		"Protection de structure du classeur",
		"Chiffrement avec mot de passe"
	  ],
	  answer: 1 // Protection de structure
	},
	{
	  question: "Comment permettre le tri des données sur une feuille protégée?",
	  options: [
		"C'est impossible sur une feuille protégée",
		"En cochant 'Autoriser le tri' dans les options de protection",
		"En déverrouillant spécifiquement les en-têtes de colonne"
	  ],
	  answer: 1 // Cocher 'Autoriser le tri'
	}
  ];
  
  export const titleLecon22 = "Quiz : Protection de Feuille et de Classeur dans Excel";