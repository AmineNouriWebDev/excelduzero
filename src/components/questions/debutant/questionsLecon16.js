// Questions pour la leçon 16 - Références relatives et absolues (Niveau débutant)
export const questionsLecon16 = [
	{
	  question: "Quelle est la différence entre une référence relative et une référence absolue dans Excel?",
	  options: [
		"Les références relatives changent lors de la copie, les absolues restent fixes",
		"Les références absolues sont toujours en majuscules, les relatives en minuscules",
		"Les références relatives sont plus rapides à calculer"
	  ],
	  answer: 0 // index 0
	},
	{
	  question: "Comment écrire une référence absolue pour la cellule B3?",
	  options: [
		"#B#3",
		"B$3",
		"$B$3"
	  ],
	  answer: 2 // index 2
	},
	{
	  question: "Vous devez créer un tableau où seule la colonne doit rester fixe lors de la copie verticale. Quelle référence utiliser?",
	  options: [
		"$A1",
		"A$1",
		"$A$1"
	  ],
	  answer: 0 // index 0
	},
	{
	  question: "Quel raccourci clavier permet de basculer entre les types de références dans Excel?",
	  options: [
		"F1",
		"F4",
		"Ctrl+$"
	  ],
	  answer: 1 // index 1
	},
	{
	  question: "Après avoir supprimé la colonne B, que devient une formule contenant =$B$2?",
	  options: [
		"Elle s'ajuste automatiquement à la nouvelle colonne",
		"Elle affiche l'erreur #REF!",
		"Elle conserve la référence $B$2 mais pointe vers une cellule vide"
	  ],
	  answer: 1 // index 1
	}
  ];
  
  export const titleLecon16 = "Quiz : Maîtriser les références Excel";