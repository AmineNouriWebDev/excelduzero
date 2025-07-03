// Composant Quiz pour la leçon 3 du niveau débutant
// Questions sur les séries de données Excel
import { useState } from "react";

const questions = [
	{
		question:
			"Dans une série linéaire, comment Excel détermine-t-il le pas de la série ?",
		options: [
			"En analysant les 3 premiers éléments saisis",
			"En calculant la différence entre les 2 premiers éléments",
			"En demandant à l'utilisateur de spécifier le pas",
		],
		answer: 1,
	},
	{
		question:
			"Pour créer une série chronologique avec un pas de 7 jours, que devez-vous faire après avoir saisi la première date ?",
		options: [
			"Utiliser uniquement le cliqué-glissé sur la poignée",
			"Saisir la deuxième date puis faire un cliqué-glissé",
			"Utiliser la balise active ou la fenêtre 'Série de données' pour spécifier le pas",
		],
		answer: 2,
	},
	{
		question:
			"Dans une série alphanumérique comme 'Eleve 1.5', quel nombre Excel va-t-il incrémenter ?",
		options: [
			"Le nombre 1",
			"Le nombre 5 (dernière décimale)",
			"Toute la valeur numérique 1.5",
		],
		answer: 1,
	},
	{
		question:
			"Pour créer une série géométrique, quelle méthode est obligatoire ?",
		options: [
			"Le cliqué-glissé sur la poignée",
			"La balise active",
			"La fenêtre 'Série de données'",
		],
		answer: 2,
	},
	{
		question:
			"Où trouve-t-on l'option pour créer des listes personnalisées dans Excel ?",
		options: [
			"Onglet Accueil > Remplissage",
			"Fichier > Options > Options avancées > Modifier les listes personnalisées",
			"Onglet Insertion > Listes",
		],
		answer: 1,
	},
];

// Correction du calcul du score pour éviter de dépasser le nombre de questions
export default function QuizLecon3({ onResult }) {
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
			const status = newScore >= 3 ? "success" : "failed";
			onResult?.(status);
		}
	}

	if (done) {
		const isSuccess = score >= 3;
		return (
			<div
				className={`mt-8 p-4 rounded-xl border text-center ${
					isSuccess
						? "bg-green-50 border-green-200 text-green-800"
						: "bg-red-50 border-red-200 text-red-800"
				}`}
			>
				<div className="text-lg font-bold mb-2 flex items-center justify-center gap-2">
					{isSuccess ? (
						<>
							<svg
								className="w-6 h-6 text-green-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
							Quiz réussi ! Leçon validée
						</>
					) : (
						<>
							<svg
								className="w-6 h-6 text-red-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
							Quiz échoué
						</>
					)}
				</div>
				<div>
					Votre score : {score} / {questions.length}
				</div>
				<div className="mt-2">
					{isSuccess
						? "Bravo, vous avez validé la leçon !"
						: "Il faut au moins 3 bonnes réponses. Révisez la leçon et réessayez !"}
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
		<div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
			<div className="flex items-center gap-3 mb-4">
				<svg
					className="w-6 h-6 text-blue-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
				<div className="font-bold text-blue-800">
					Quiz : Séries de données Excel
				</div>
			</div>

			<div className="mb-4 text-sm text-blue-600">
				Question {step + 1} sur {questions.length}
			</div>

			<div className="bg-white rounded-lg p-4 mb-4 border border-blue-100">
				<div className="font-medium text-gray-800 mb-4">
					{questions[step].question}
				</div>

				<div className="space-y-3">
					{questions[step].options.map((opt, idx) => (
						<button
							key={idx}
							className={`block w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
								selected === idx
									? "bg-blue-100 border-blue-400 text-blue-800 shadow-md"
									: "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
							}`}
							onClick={() => handleSelect(idx)}
						>
							<div className="flex items-center gap-3">
								<span
									className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
										selected === idx
											? "bg-blue-500 border-blue-500 text-white"
											: "border-gray-300 text-gray-500"
									}`}
								>
									{String.fromCharCode(65 + idx)}
								</span>
								<span>{opt}</span>
							</div>
						</button>
					))}
				</div>
			</div>

			{selected !== null && (
				<div className="flex justify-center">
					<button
						className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
						onClick={handleNext}
					>
						{step + 1 < questions.length
							? "Question suivante"
							: "Voir le résultat"}
					</button>
				</div>
			)}

			<div className="mt-4 bg-blue-100 rounded-lg p-3">
				<div className="flex justify-between items-center">
					<span className="text-sm text-blue-700">Progression</span>
					<span className="text-sm font-medium text-blue-800">
						{Math.round(((step + 1) / questions.length) * 100)}%
					</span>
				</div>
				<div className="mt-2 w-full bg-blue-200 rounded-full h-2">
					<div
						className="bg-blue-600 h-2 rounded-full transition-all duration-300"
						style={{
							width: `${((step + 1) / questions.length) * 100}%`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}