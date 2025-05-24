"use client";
import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const questions = [
	// Débutant (1-7)
	{
		question: "Quelle formule permet d’additionner une plage de cellules dans Excel ?",
		options: ["=SOMME(A1:A10)", "=SOMME.SI(A1:A10;\"\")", "=MOYENNE(A1:A10)", "=SOMMEPROD(A1:A10)"],
		answer: 0,
	},
	{
		question: "Quel raccourci clavier permet d’insérer la date du jour ?",
		options: ["Ctrl + ;", "Ctrl + Shift + ;", "Ctrl + :", "Alt + ;"],
		answer: 0,
	},
	{
		question: "Comment figer la première ligne d’un tableau ?",
		options: [
			"Onglet Affichage > Figer les volets > Figer la première ligne",
			"Onglet Affichage > Figer les volets > Figer la première colonne",
			"Onglet Données > Figer la première ligne",
			"Onglet Accueil > Figer la première ligne",
		],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de compter les cellules non vides ?",
		options: ["=NBVAL(A1:A10)", "=NB(A1:A10)", "=NB.VIDE(A1:A10)", "=NB.SI(A1:A10;\"<>\")"],
		answer: 0,
	},
	{
		question: "Quel est le raccourci pour enregistrer un fichier ?",
		options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + E", "Ctrl + O"],
		answer: 0,
	},
	{
		question: "Comment masquer une colonne ?",
		options: ["Clic droit sur la colonne > Masquer", "Clic droit sur la colonne > Supprimer", "Clic droit sur la colonne > Masquer la ligne", "Clic droit sur la colonne > Insérer"],
		answer: 0,
	},
	{
		question: "Comment ajouter une nouvelle feuille ?",
		options: ["Clic sur le + en bas", "Clic droit sur une feuille > Insérer", "Onglet Accueil > Nouvelle feuille", "Onglet Données > Nouvelle feuille"],
		answer: 0,
	},

	// Intermédiaire (8-15)
	{
		question: "Quelle est la fonction pour rechercher une valeur dans la première colonne d’un tableau ?",
		options: ["=RECHERCHEV(A1;B1:C10;2;FAUX)", "=RECHERCHEH(A1;B1:C10;2;FAUX)", "=INDEX(A1:B10;2;2)", "=EQUIV(A1;B1:B10;0)"],
		answer: 0,
	},
	{
		question: "Comment transformer rapidement une colonne de texte en majuscules ?",
		options: ["=MAJUSCULE(A1)", "=MINUSCULE(A1)", "=NOMPROPRE(A1)", "=GRANDE(A1)"],
		answer: 0,
	},
	{
		question: "Quelle fonctionnalité permet de créer un graphique rapidement ?",
		options: ["Alt + F1", "F11", "Ctrl + F1", "Ctrl + G"],
		answer: 0,
	},
	{
		question: "Comment appliquer un filtre automatique à un tableau ?",
		options: [
			"Onglet Données > Filtrer",
			"Onglet Accueil > Trier",
			"Onglet Données > Trier",
			"Onglet Insertion > Filtrer",
		],
		answer: 0,
	},
	{
		question: "Comment verrouiller une cellule pour la recopier sans changer la référence ?",
		options: [
			"Utiliser le $ dans la référence (ex: $A$1)",
			"Utiliser la fonction Figer les volets",
			"Mettre la cellule en gras",
			"Utiliser la fonction Protéger la feuille",
		],
		answer: 0,
	},
	{
		question: "Quel est le format pour afficher une date sous la forme JJ/MM/AAAA ?",
		options: ["jj/mm/aaaa", "mm/jj/aaaa", "aaaa/jj/mm", "jj-mm-aaaa"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de calculer la moyenne d'une plage de cellules ?",
		options: ["=MOYENNE(A1:A10)", "=SOMME(A1:A10)/NB(A1:A10)", "=MOYENNE.SI(A1:A10;\">0\")", "=MOYENNE.SI.ENS(A1:A10;B1:B10;\">0\")"],
		answer: 0,
	},
	{
		question: "Quel raccourci permet de copier une cellule ?",
		options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
		answer: 0,
	},
	{
		question: "Comment insérer un commentaire dans une cellule ?",
		options: ["Clic droit > Nouveau commentaire", "Clic droit > Insérer une note", "Onglet Données > Validation", "Onglet Accueil > Insérer un lien"],
		answer: 0,
	},

	// Avancé (16-24)
	{
		question: "Quelle fonction permet de concaténer deux cellules ?",
		options: ["=CONCATENER(A1;B1)", "=CONCAT(A1;B1)", "=JOINDRE.TEXTE(\"\";VRAI;A1;B1)", "=COLLER(A1;B1)"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de trouver la valeur maximale ?",
		options: ["=MAX(A1:A10)", "=GRAND(A1:A10;1)", "=MAX.SI(A1:A10;\">0\")", "=MIN(A1:A10)"],
		answer: 0,
	},
	{
		question: "Quel format permet d'afficher un nombre avec deux décimales ?",
		options: ["0.00", "0,00", "0.0", "0"],
		answer: 0,
	},
	{
		question: "Comment verrouiller la feuille entière ?",
		options: ["Onglet Révision > Protéger la feuille", "Onglet Révision > Protéger le classeur", "Onglet Données > Protéger la feuille", "Onglet Accueil > Protéger la feuille"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de compter les cellules selon un critère ?",
		options: ["=NB.SI(A1:A10;\"critère\")", "=NBVAL(A1:A10)", "=NB(A1:A10)", "=SOMME.SI(A1:A10;\"critère\")"],
		answer: 0,
	},
	{
		question: "Quel raccourci permet de passer à la cellule suivante ?",
		options: ["Tab", "Entrée", "Ctrl + Flèche droite", "Ctrl + Tab"],
		answer: 0,
	},
	{
		question: "Comment afficher la barre de formule ?",
		options: ["Onglet Affichage > Barre de formule", "Onglet Accueil > Barre de formule", "Onglet Données > Barre de formule", "Onglet Insertion > Barre de formule"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet d’arrondir un nombre ?",
		options: ["=ARRONDI(A1;2)", "=ARRONDI.SUP(A1;2)", "=ARRONDI.INF(A1;2)", "=TRONQUE(A1;2)"],
		answer: 0,
	},
	{
		question: "Comment afficher les formules dans la feuille ?",
		options: ["Ctrl + ` (accent grave)", "Ctrl + ' (apostrophe)", "Ctrl + F", "Ctrl + Alt + F9"],
		answer: 0,
	},
	{
		question: "Quel est le raccourci pour annuler une action ?",
		options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + A"],
		answer: 0,
	},

	// Expert (25-30)
	{
		question: "Comment insérer une image dans une feuille ?",
		options: ["Onglet Insertion > Image", "Onglet Insertion > Graphique", "Onglet Accueil > Image", "Onglet Données > Image"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de remplacer un texte par un autre ?",
		options: ["=SUBSTITUE(A1;\"ancien\";\"nouveau\")", "=REMPLACER(A1;1;3;\"nouveau\")", "=GAUCHE(A1;3)", "=NBCAR(A1)"],
		answer: 0,
	},
	{
		question: "Comment fusionner plusieurs cellules ?",
		options: ["Onglet Accueil > Fusionner et centrer", "Onglet Accueil > Grouper", "Onglet Données > Fusionner", "Onglet Insertion > Fusionner"],
		answer: 0,
	},
	{
		question: "Quel est le raccourci pour sélectionner toute la feuille ?",
		options: ["Ctrl + A", "Ctrl + Maj + A", "Ctrl + S", "Ctrl + Entrée"],
		answer: 0,
	},
	{
		question: "Comment ajouter une bordure à une cellule ?",
		options: ["Onglet Accueil > Bordures", "Onglet Accueil > Remplissage", "Onglet Données > Bordures", "Onglet Insertion > Bordures"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de trouver la plus petite valeur ?",
		options: ["=MIN(A1:A10)", "=PETITE.VALEUR(A1:A10;1)", "=MIN.SI(A1:A10;\">0\")", "=MAX(A1:A10)"],
		answer: 0,
	},
	{
		question: "Comment afficher l’aperçu avant impression ?",
		options: ["Ctrl + F2", "Ctrl + P", "Ctrl + F", "Ctrl + O"],
		answer: 0,
	},
	{
		question: "Quel est le format pour afficher un pourcentage ?",
		options: ["0%", "0.00%", "0,00%", "0.0%"],
		answer: 0,
	},
	{
		question: "Comment insérer une nouvelle ligne ?",
		options: ["Clic droit > Insérer", "Clic droit > Ajouter", "Onglet Accueil > Insérer une ligne", "Onglet Données > Insérer une ligne"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de compter les cellules vides ?",
		options: ["=NB.VIDE(A1:A10)", "=NB(A1:A10)", "=NBVAL(A1:A10)", "=NB.SI(A1:A10;\"\")"],
		answer: 0,
	},
	{
		question: "Comment afficher les lignes de grille ?",
		options: ["Onglet Affichage > Lignes de grille", "Onglet Affichage > Quadrillage", "Onglet Données > Lignes de grille", "Onglet Insertion > Lignes de grille"],
		answer: 0,
	},
	{
		question: "Quel est le raccourci pour ouvrir un nouveau classeur ?",
		options: ["Ctrl + N", "Ctrl + O", "Ctrl + Maj + N", "Ctrl + Alt + N"],
		answer: 0,
	},
	{
		question: "Comment ajouter un commentaire à une cellule ?",
		options: ["Clic droit > Nouveau commentaire", "Clic droit > Insérer une note", "Onglet Données > Validation", "Onglet Accueil > Insérer un lien"],
		answer: 0,
	},
	{
		question: "Quelle fonction permet de convertir un texte en nombre ?",
		options: ["=CNUM(A1)", "=TEXTE(A1;\"0\")", "=NBCAR(A1)", "=GAUCHE(A1;3)"],
		answer: 0,
	},
];

const niveaux = [
	{ min: 0, max: 7, label: "Débutant", link: "/cours?page=debutant" },
	{ min: 8, max: 15, label: "Intermédiaire", link: "/cours?page=intermediaire" },
	{ min: 16, max: 24, label: "Avancé", link: "/cours?page=avance" },
	{ min: 25, max: 30, label: "Expert", link: "/cours?page=expert" },
];

export default function TestNiveauExcel() {
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [answers, setAnswers] = useState(Array(questions.length).fill(null));

	function handleAnswer(idx) {
		const newAnswers = [...answers];
		newAnswers[current] = idx;
		setAnswers(newAnswers);
	}

	function handleNext() {
		if (current < questions.length - 1) setCurrent(current + 1);
		else setShowResult(true);
	}

	function handlePrev() {
		if (current > 0) setCurrent(current - 1);
	}

	function handleRestart() {
		setCurrent(0);
		setScore(0);
		setShowResult(false);
		setAnswers(Array(questions.length).fill(null));
	}

	function getNiveau(score) {
		return niveaux.find((n) => score >= n.min && score <= n.max);
	}

	function computeScore() {
		let s = 0;
		for (let i = 0; i < questions.length; i++) {
			if (answers[i] === questions[i].answer) s++;
		}
		return s;
	}

	return (
		<div className="bg-gray-50 min-h-screen text-gray-800">
			<Header />
			<section className="gradient-hero pt-24 pb-20 min-h-[60vh] flex items-center justify-center">
				<div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-2xl mx-auto gradient-card">
					{!showResult ? (
						<>
							<h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Test de niveau Excel</h2>
							<div className="mb-8 text-lg font-semibold text-gray-700 text-center">
								Question {current + 1} / {questions.length}
							</div>
							<div className="mb-6 text-xl text-gray-900 font-bold text-center">
								{questions[current].question}
							</div>
							<div className="grid gap-4 mb-6">
								{questions[current].options.map((opt, idx) => (
									<button
										key={idx}
										onClick={() => handleAnswer(idx)}
										className={`w-full px-6 py-4 rounded-xl font-semibold shadow card-hover transition
                      ${answers[current] === idx ? "bg-gradient-to-r from-green-400 to-green-500 text-white" : "bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 text-green-900"}
                    `}
									>
										{opt}
									</button>
								))}
							</div>
							<div className="flex justify-between">
								<button
									onClick={handlePrev}
									disabled={current === 0}
									className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-bold shadow hover:bg-gray-300 transition disabled:opacity-50"
								>
									Précédent
								</button>
								<button
									onClick={handleNext}
									disabled={answers[current] === null}
									className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow hover:from-green-600 hover:to-green-700 transition disabled:opacity-50"
								>
									{current === questions.length - 1 ? "Voir le résultat" : "Suivant"}
								</button>
							</div>
						</>
					) : (
						<div className="text-center">
							<h2 className="text-3xl font-bold text-green-800 mb-4">Résultat</h2>
							<div className="text-2xl mb-6">
								Vous avez obtenu {computeScore()} / {questions.length}
							</div>
							<div className="text-lg text-gray-700 mb-4">
								{(() => {
									const niveau = getNiveau(computeScore());
									if (!niveau) return null;
									const niveauColors = {
										"Débutant": "bg-red-100 text-red-700 border-red-400",
										"Intermédiaire": "bg-yellow-100 text-yellow-800 border-yellow-400",
										"Avancé": "bg-blue-100 text-blue-800 border-blue-400",
										"Expert": "bg-green-100 text-green-800 border-green-400",
									};
									return (
										<div className={`inline-block px-6 py-3 rounded-2xl border-2 font-bold text-xl mb-2 shadow transition ${niveauColors[niveau.label]}`}
										>Niveau {niveau.label}</div>
									);
								})()}
							</div>
							<div className="flex flex-col items-center gap-4">
								<button
									className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow hover:from-green-600 hover:to-green-700 transition"
									onClick={handleRestart}
								>
									Recommencer le test
								</button>
								<a
									href={getNiveau(computeScore())?.link}
									className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold shadow hover:from-yellow-300 hover:to-yellow-400 transition"
								>
									Commencer le cours {getNiveau(computeScore())?.label}
								</a>
								<div className="text-sm text-gray-500">Vous devez être connecté pour accéder au cours</div>
							</div>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</div>
	);
}
