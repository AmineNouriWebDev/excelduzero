// Composant Quiz pour la leçon 2 du niveau débutant
// À compléter avec les questions spécifiques à la leçon
import { useState } from "react";

const questions = [
	{
		question: "Quel raccourci permet d'atteindre la cellule A1?",
		options: ["Ctrl+Fin", "Ctrl+Accueil", "Alt+A"],
		answer: 1,
	},
	{
		question: "Comment saisir un nombre comme texte?",
		options: [
			"Utiliser la mise en forme",
			"Ajouter une apostrophe avant",
			"Mettre entre guillemets",
		],
		answer: 1,
	},
	{
		question: "Quelle touche annule une saisie en cours?",
		options: ["Suppr", "Échap", "F1"],
		answer: 1,
	},
	{
		question: "Comment lancer la vérification orthographique?",
		options: ["Ctrl+O", "F7", "Alt+V"],
		answer: 1,
	},
	{
		question: "Que fait Ctrl+Entrée?",
		options: [
			"Annule la saisie",
			"Valide dans toutes les cellules sélectionnées",
			"Ouvre un nouveau classeur",
		],
		answer: 1,
	},
];

// Correction du calcul du score pour éviter de dépasser le nombre de questions
export default function QuizLecon4({ onResult }) {
	const [step, setStep] = useState(0);
	const [score, setScore] = useState(0);
	const [done, setDone] = useState(false);
	const [selected, setSelected] = useState(null);

	function handleSelect(idx) {
		setSelected(idx);
	}

	function handleNext() {
		let newScore = score;
		if (selected === questions[step].answer) {
			newScore = score + 1;
			setScore(newScore);
		}
		if (step + 1 < questions.length) {
			setStep(step + 1);
			setSelected(null);
		} else {
			setDone(true);
			const status = newScore >= 1 ? "success" : "failed";
			onResult?.(status);
		}
	}

	if (done) {
		const isSuccess = score >= 1;
		return (
			<div
				className={`mt-8 p-4 rounded-xl border text-center ${
					isSuccess
						? "bg-green-50 border-green-200 text-green-800"
						: "bg-red-50 border-red-200 text-red-800"
				}`}
			>
				<div className="text-lg font-bold mb-2">Quiz terminé !</div>
				<div>
					Votre score : {score} / {questions.length}
				</div>
				<div className="mt-2">
					{isSuccess
						? "Bravo, vous avez validé la leçon !"
						: "Vous pouvez réessayer pour progresser."}
				</div>
				{!isSuccess && (
					<button
						className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700"
						onClick={() => {
							setStep(0);
							setScore(0);
							setDone(false);
							setSelected(null);
						}}
					>
						Refaire le quiz
					</button>
				)}
			</div>
		);
	}

	return (
		<div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
			<div className="font-bold mb-2">
				Quiz : testez vos connaissances
			</div>
			<div className="mb-2">{questions[step].question}</div>
			<div className="space-y-2">
				{questions[step].options.map((opt, idx) => (
					<button
						key={idx}
						className={`block w-full text-left px-4 py-2 rounded-lg border transition focus:outline-none ${
							selected === idx
								? "bg-green-100 border-green-400"
								: "bg-white border-gray-200 hover:bg-gray-100"
						}`}
						onClick={() => handleSelect(idx)}
					>
						{opt}
					</button>
				))}
			</div>
			{selected !== null && (
				<button
					className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700"
					onClick={handleNext}
				>
					{step + 1 < questions.length
						? "Question suivante"
						: "Voir le résultat"}
				</button>
			)}
		</div>
	);
}
