// Composant Quiz pour la leçon 4 du niveau débutant avec affichage des réponses
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

export default function QuizLecon4({ onResult }) {
	const [step, setStep] = useState(0);
	const [score, setScore] = useState(0);
	const [done, setDone] = useState(false);
	const [selected, setSelected] = useState(null);
	const [userAnswers, setUserAnswers] = useState([]); // Pour stocker les réponses de l'utilisateur

	function handleSelect(idx) {
		setSelected(idx);
	}

	function handleNext() {
		let newScore = score;
		const isCorrect = selected === questions[step].answer;
		
		// Enregistrer la réponse de l'utilisateur
		const newUserAnswers = [...userAnswers, {
			questionIndex: step,
			selectedAnswer: selected,
			isCorrect: isCorrect
		}];
		setUserAnswers(newUserAnswers);

		if (isCorrect) {
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

	function resetQuiz() {
		setStep(0);
		setScore(0);
		setDone(false);
		setSelected(null);
		setUserAnswers([]);
	}

	if (done) {
		const isSuccess = score >= 1;
		const incorrectAnswers = userAnswers.filter(answer => !answer.isCorrect);

		return (
			<div className="mt-8 space-y-6">
				{/* Résultat principal */}
				<div
					className={`p-4 rounded-xl border text-center ${
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
				</div>

				{/* Affichage des réponses incorrectes */}
				{incorrectAnswers.length > 0 && (
					<div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
						<div className="font-bold mb-4 text-gray-800">
							Révision des réponses :
						</div>
						<div className="space-y-4">
							{incorrectAnswers.map((userAnswer, idx) => {
								const question = questions[userAnswer.questionIndex];
								return (
									<div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white">
										<div className="font-medium mb-3 text-gray-700">
											{question.question}
										</div>
										<div className="space-y-2">
											{question.options.map((option, optIdx) => {
												const isUserAnswer = optIdx === userAnswer.selectedAnswer;
												const isCorrectAnswer = optIdx === question.answer;
												
												let className = "px-3 py-2 rounded-md text-sm ";
												
												if (isCorrectAnswer) {
													className += "bg-green-100 text-green-800 border border-green-300";
												} else if (isUserAnswer) {
													className += "bg-red-100 text-red-800 border border-red-300";
												} else {
													className += "bg-gray-50 text-gray-600 border border-gray-200";
												}

												return (
													<div key={optIdx} className={className}>
														<div className="flex items-center justify-between">
															<span>{option}</span>
															{isCorrectAnswer && (
																<span className="text-green-600 font-bold">✓ Bonne réponse</span>
															)}
															{isUserAnswer && !isCorrectAnswer && (
																<span className="text-red-600 font-bold">✗ Votre réponse</span>
															)}
														</div>
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}

				{/* Bouton pour refaire le quiz */}
				{!isSuccess && (
					<div className="text-center">
						<button
							className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
							onClick={resetQuiz}
						>
							Refaire le quiz
						</button>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
			<div className="font-bold mb-2">
				Quiz : testez vos connaissances
			</div>
			<div className="mb-4 text-sm text-gray-600">
				Question {step + 1} sur {questions.length}
			</div>
			<div className="mb-4 font-medium">{questions[step].question}</div>
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
					className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
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