// Composant Quiz pour la leçon 1 du niveau débutant
import { useState } from "react";

const questions = [
	{
		question: "Quel est le rôle principal d'Excel ?",
		options: [
			"Créer des présentations animées",
			"Gérer et manipuler des données dans des feuilles de calcul",
			"Éditer des vidéos",
			"Programmer des applications web",
		],
		answer: 1,
	},
	{
		question: "Comment s'appelle la barre d'outils principale en haut d'Excel ?",
		options: [
			"La barre de navigation",
			"Le ruban",
			"La barre d'état",
			"La barre latérale",
		],
		answer: 1,
	},
	{
		question: "Quelle est la référence d'une cellule située à la colonne B et à la ligne 3 ?",
		options: ["3B", "B3", "2C", "C2"],
		answer: 1,
	},
	{
		question: "Comment sélectionner plusieurs cellules non adjacentes ?",
		options: [
			"Maj + clic",
			"Ctrl + clic",
			"Alt + clic",
			"Double-clic",
		],
		answer: 1,
	},
	{
		question: "Quel est le format de fichier par défaut d'Excel depuis 2007 ?",
		options: [".xls", ".xlsx", ".docx", ".csv"],
		answer: 1,
	},
];

export default function QuizLecon1({ onResult }) {
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
			const status = newScore >= 4 ? "success" : "failed";
			onResult?.(status);
		}
	}

	if (done) {
		const isSuccess = score >= 4;
		return (
			<div className={`mt-8 p-4 rounded-xl border text-center ${isSuccess ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
				<div className="text-lg font-bold mb-2">Quiz terminé !</div>
				<div>Votre score : {score} / {questions.length}</div>
				<div className="mt-2">{isSuccess ? "Bravo, vous avez validé la leçon !" : "Vous pouvez réessayer pour progresser."}</div>
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
		<div className="mt-8 rounded-xl border bg-gray-50 p-4">
			<div className="mb-2 font-bold">Quiz : testez vos connaissances</div>
			<div className="mb-2">{questions[step].question}</div>
			<div className="space-y-2">
				{questions[step].options.map((opt, idx) => (
					<button
						key={idx}
						className={`block w-full rounded-lg border px-4 py-2 text-left transition focus:outline-none ${
							selected === idx
								? "border-green-400 bg-green-100"
								: "border-gray-200 bg-white hover:bg-gray-100"
						}`}
						onClick={() => handleSelect(idx)}
					>
						{opt}
					</button>
				))}
			</div>
			{selected !== null && (
				<button
					className="mt-4 rounded-lg bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700"
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
