import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon5 from "../../quizz/debutant/QuizLecon5";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  MousePointer2, 
  Edit3, 
  Type, 
  Search, 
  Check, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ArrowDown, 
  Calendar, 
  Clock, 
  Hash, 
  AlignLeft, 
  AlignRight, 
  Keyboard, 
  Target, 
  Copy, 
  RotateCcw, 
  FileText,
  Grid3X3,
  Save,
  X,
  Home,
  Navigation
} from "lucide-react";

export default function Lecon5({ onResult }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizComplete = (score) => {
    setShowQuiz(false);
    onResult(score);
  };

  if (showQuiz) {
    return <QuizLecon5 onComplete={handleQuizComplete} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Leçon 5 - SÉRIES DE DONNÉES
    </h2>
    
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
      <p className="text-gray-700 mb-4">
        La procédure de création d'une série évite de saisir une à une les
        données. Elle est plus rapide et plus fiable que la saisie individuelle de
        chaque élément d'une série.
      </p>
      <p className="text-gray-700">
        On peut créer une série dans tous les sens (vers le bas, le haut, la
        droite ou la gauche).
      </p>
    </div>

    <div className="bg-gray-50 rounded-lg p-5 mb-6">
      <p className="text-gray-700 mb-4">
        Pour créer une série numérique, une série chronologique ou une série
        alphanumérique, on se servira :
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">
            Du cliqué-glissé sur la poignée ■ d'une sélection de cellules, le
            pointeur revêt l'aspect d'une croix noire <strong>+</strong>.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Du menu de la balise active qui apparaît en fin de cliqué-glissé</span>
        </li>
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">
            De la fenêtre « Série de données ». Pour l'afficher : sous l'onglet
            Accueil, dans le groupe « Edition », activez le bouton « Remplissage
            Instantané » &gt; Série.
          </span>
        </li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
      1. SÉRIE NUMÉRIQUE
    </h3>

    <div className="mb-8">
      <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        Série linéaire
      </h4>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p className="text-gray-700 mb-2">
          Une série linéaire est une suite de nombres, chacun (à partir du 2ème) étant obtenu en ajoutant un nombre fixe à l'élément précédent.
        </p>
        <p className="text-gray-700 mb-2">
          Le nombre ajouté est appelé « incrément » ou « pas ».
        </p>
        <p className="text-gray-700">
          <u>Exemple :</u> 5, 8, 11, 14, 17, 20. Le pas de cette série linéaire est 3.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Pour créer une série linéaire, procédez ainsi :
        </h5>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
            <span className="text-gray-700">
              Saisissez les 2 premiers éléments de la série, sur deux cellules
              adjacentes, en ligne ou en colonne. Exemple : saisissez 5 et 8.
              Excel en déduit le pas de la série. Dans l'exemple, le pas est 3.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
            <span className="text-gray-700">
              Sélectionnez les 2 cellules ainsi remplies, puis cliquez-glissez à
              partir de la poignée ▪ de la sélection sur les cellules à remplir
              avec les termes suivants de la série.
            </span>
          </li>
        </ul>
        
        <ImageZoomable 
          src="/cours/debutant/lecon5/serie_numerique_lineaire_excel.gif" 
          alt="Série numérique linéaire Excel" 
          style={{ maxHeight: 350 }} 
        />
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Pour créer une suite de nombres de valeur constante
        </h5>
        <p className="text-gray-700 mb-4">
          (exemple : 12, 12, 12) : saisissez ce nombre. Après validation,
          sélectionnez la cellule et effectuez un cliqué-glissé sur la poignée.
          Une seule cellule étant sélectionnée, Excel applique un pas nul.
        </p>
        <p className="text-gray-700 mb-4">
          On peut ouvrir le menu de la balise pour incrémenter de 1, ou bien
          afficher la fenêtre « Série de données » pour incrémenter du pas
          souhaité. Pour afficher cette fenêtre : sous l'onglet Accueil, dans le
          groupe « Edition », activez le bouton « Remplissage Instantané» &gt;
          Série.
        </p>
        <p className="text-gray-700 mb-4">
          Dans la fenêtre, l'option « Tendance » aboutit au même résultat qu'un
          cliqué-glissé.
        </p>
        
        <ImageZoomable 
          src="/cours/debutant/lecon5/serie_numerique_lineaire_constante_excel.gif" 
          alt="Série numérique linéaire constante Excel" 
          style={{ maxHeight: 350 }} 
        />
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          Série géométrique
        </h5>
        <p className="text-gray-700 mb-2">
          Une série géométrique est une suite de nombres, chacun (à partir du
          2ème) étant obtenu en multipliant par un nombre fixe l'élément
          précédent.
        </p>
        <p className="text-gray-700 mb-4">
          <u>Exemple :</u> 4, 8, 16, 32, 64. Le pas de cette série géométrique
          est 2.
        </p>
        
        <h6 className="font-medium text-gray-700 mb-3">Pour créer une série géométrique, procédez ainsi :</h6>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
            <span className="text-gray-700">Saisissez le 1er élément. Validez.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
            <div className="text-gray-700">
              <p className="mb-2">Puis, au choix, sélectionnez :</p>
              <ul className="ml-4 space-y-1">
                <li>• Soit toutes les cellules à remplir,</li>
                <li>• Soit uniquement la cellule du 1er élément. Indiquez alors la
                  dernière valeur (exacte ou approximative) de la série. Le nombre
                  de termes sera fonction de cette dernière valeur.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
            <span className="text-gray-700">
              Affichez la fenêtre « Série de données » : sous l'onglet Accueil,
              dans le groupe « Edition », activez le bouton « Remplissage » &gt;
              Série. Choisissez vos options. Si vous n'avez sélectionné que la
              cellule du 1er élément, indiquez la dernière valeur de la série.
            </span>
          </li>
        </ul>
      </div>
    </div>

    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-5 8H9m10 0a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v10z" />
      </svg>
      2. SÉRIE CHRONOLOGIQUE
    </h3>

    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
      <p className="text-gray-700 mb-2">
        Une série chronologique est une suite de dates, chacune (à partir de la
        2ème) étant obtenue en ajoutant la même durée à la date précédente. La
        durée ajoutée est le « pas » de la série.
      </p>
      <p className="text-gray-700 mb-2">
        <u>Exemple :</u> 07/04/2025, 14/04/2025, 21/04/2025. Le pas de cette
        série chronologique est 7.
      </p>
      <p className="text-gray-700">
        Comme pour la création d'une série linéaire, on peut utiliser pour créer une série chronologique : 
        cliqué-glissé sur la poignée de la sélection, balise active et fenêtre « Série de données ».
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Pour créer une série chronologique, procédez ainsi :
      </h5>
      <ul className="space-y-3 mb-4">
        <li className="flex items-start gap-3">
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
          <span className="text-gray-700">
            Saisissez la date du 1er élément. Exemple : saisissez 07/04/2025. Puis validez.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
          <span className="text-gray-700">
            Cliquez-glissez sur les cellules à remplir. Excel applique par défaut
            une incrémentation de pas un. Exemple : 07/04/2025, 08/04/2025, 09/04/2025…
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
          <div className="text-gray-700">
            <p className="mb-2">Modifiez les saisies si vous le souhaitez, en utilisant :</p>
            <ul className="ml-4 space-y-1">
              <li>• Soit une option proposée dans le menu de la balise active. Excel
                prend en compte que le 1er élément est une date, et propose des
                options en conséquence (exemple : « Incrémenter les mois »).</li>
              <li>• Soit des options proposées dans la fenêtre « Série de données »
                (exemple : choisissez un pas de 7).</li>
            </ul>
          </div>
        </li>
      </ul>
      <p className="text-gray-600 italic">
        L'utilisation de la balise active est plus rapide. La fenêtre « Série de
        données » offre davantage de possibilités.
      </p>
    </div>

    <ImageZoomable 
      src="/cours/debutant/lecon5/serie_chronologique_excel.gif" 
      alt="Série chronologique Excel" 
      style={{ maxHeight: 350 }} 
    />

    <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
      3. SÉRIE ALPHANUMÉRIQUE
    </h3>

    <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
      <p className="text-gray-700">
        Les valeurs d'une série alphanumérique sont constituées d'un texte fixe et
        d'un nombre qui peut être incrémenté.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Pour créer une série alphanumérique, procédez ainsi :
      </h5>
      <ul className="space-y-3 mb-4">
        <li className="flex items-start gap-3">
          <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
          <span className="text-gray-700">
            Saisissez le 1er élément (exemple : Eleve 1) ou les deux premiers
            éléments (exemple : classe5 et classe7). Validez (cliquez dans une autre cellule).
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
          <span className="text-gray-700">
            Étendez le contenu de la cellule, ou des deux cellules, par
            cliqué-glissé sur la poignée de la sélection (on obtient dans le premier
            exemple : Eleve 2, Eleve 3... et dans le second exemple : Classe9, Classe11...).
          </span>
        </li>
      </ul>
    </div>

    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
      <p className="text-gray-700 mb-2">
        <strong>Important :</strong> La fenêtre « Série de données » n'est pas utilisable pour une série alphanumérique.
      </p>
      <p className="text-gray-700 mb-2">
        Dans l'incrémentation, Excel ne prend en compte que le nombre situé le plus à droite (c'est-à-dire la dernière décimale).
      </p>
      <p className="text-gray-700">
        <u>Exemple :</u> saisissez hauteur 1,84. Validez. Cliquez-glissez sur la poignée de la
        cellule. Vous obtenez hauteur 1,85 puis hauteur 1,86…
      </p>
    </div>

    <ImageZoomable 
      src="/cours/debutant/lecon5/serie_alphanumerique_excel.gif" 
      alt="Série alphanumérique Excel" 
      style={{ maxHeight: 350 }} 
    />

    <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      4. SÉRIE CRÉÉE À PARTIR D'UNE LISTE PERSONNALISÉE
    </h3>

    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
      <p className="text-gray-700">
        Avant de créer la série, il convient de créer la liste personnalisée.
      </p>
    </div>

    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Création d'une liste personnalisée
        </h4>
        
        <h5 className="font-semibold text-gray-700 mb-3">Pour créer une liste personnalisée, procédez ainsi :</h5>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
            <span className="text-gray-700">
              Affichez la fenêtre « Listes personnalisées » : ouvrez le menu
              Fichier &gt; Options &gt; Options avancées. Dans la rubrique Général,
              cliquez sur le bouton « Modifier les listes personnalisées » (en bas de la rubrique).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
            <span className="text-gray-700">
              Dans la zone « Listes personnalisées », choisissez « Nouvelle liste ».
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
            <div className="text-gray-700">
              <p className="mb-2">Pour entrer les éléments dans la liste :</p>
              <ul className="ml-4 space-y-2">
                <li>• <strong>Soit vous les écrivez :</strong> dans la zone « Entrées de la liste »,
                  tapez chaque élément, en validant avec Entrée après chaque
                  saisie. Pour terminer, cliquez sur le bouton Ajouter.</li>
                <li>• <strong>Soit vous les importez :</strong> cliquez dans la zone à côté du bouton
                  Importer. Sélectionnez la plage contenant les éléments que doit
                  contenir la liste. Cliquez sur le bouton Importer.</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
            <span className="text-gray-700">Validez.</span>
          </li>
        </ul>
        
        <ImageZoomable 
          src="/cours/debutant/lecon5/fenetre_liste_personnalisee.png" 
          alt="Fenêtre des listes personnalisées Excel" 
          style={{ maxHeight: 350 }} amine123456
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Création de la série à partir d'une liste personnalisée
        </h4>
        <div className="space-y-2 mb-4">
          <p className="text-gray-700">Dans une cellule, saisissez un élément de la liste. Validez.</p>
          <p className="text-gray-700">Cliquez-glissez sur la poignée de la cellule dans le sens souhaité.</p>
          <p className="text-gray-700">
            Les éléments de la liste s'affichent dans les cellules adjacentes. Si on
            a cliqué sur un nombre de cellules supérieur au nombre d'éléments de la
            liste, celle-ci se répète.
          </p>
        </div>
        
        <ImageZoomable 
          src="/cours/debutant/lecon5/creer_liste_personnalisee_exccel.gif" 
          alt="Création d'une série avec liste personnalisée" 
          style={{ maxHeight: 350 }} 
        />
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Récapitulatif des méthodes
      </h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Type de série</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Méthode recommandée</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Icône</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b text-gray-700">Numérique (linéaire)</td>
              <td className="py-3 px-4 border-b text-gray-700">Cliqué-glissé avec 2 valeurs initiales</td>
              <td className="py-3 px-4 border-b">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b text-gray-700">Numérique (géométrique)</td>
              <td className="py-3 px-4 border-b text-gray-700">Fenêtre "Série de données"</td>
              <td className="py-3 px-4 border-b">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b text-gray-700">Chronologique</td>
              <td className="py-3 px-4 border-b text-gray-700">Cliqué-glissé + menu contextuel</td>
              <td className="py-3 px-4 border-b">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b text-gray-700">Alphanumérique</td>
              <td className="py-3 px-4 border-b text-gray-700">Cliqué-glissé direct</td>
              <td className="py-3 px-4 border-b">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-700">Liste personnalisée</td>
              <td className="py-3 px-4 text-gray-700">Configuration préalable + cliqué-glissé</td>
              <td className="py-3 px-4">
                <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200">
      <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Bonnes pratiques
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800">À faire</h4>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Toujours vérifier l'incrément après création</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Utiliser le menu contextuel pour les séries complexes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Créer des listes personnalisées pour les séries récurrentes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800">À éviter</h4>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Saisir manuellement des longues séries de données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Oublier de vérifier le sens de remplissage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Utiliser la fenêtre Série pour les données alphanumériques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Exercices pratiques */}
    <section id="exercices" className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
        <Target className="text-pink-600" />
         Exercice pratique
      </h2>
      {/* Exercice sur les séries de données */}
      <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Edit3 className="text-blue-500" />
          Exercice : Créer différentes séries de données
        </h3>
        <ol className="list-decimal ml-6 space-y-4 text-gray-700">
          <li>
            <strong>Série numérique linéaire :</strong> <br />
            Dans une colonne vide, saisissez les valeurs <b>2</b> et <b>5</b> dans deux cellules adjacentes. Sélectionnez-les, puis utilisez la poignée de recopie pour étendre la série jusqu'à obtenir 6 valeurs au total. <br />
            <span className="text-sm text-gray-500">(Quel est le pas de la série obtenue ?)</span>
          </li>
          <li>
            <strong>Série chronologique :</strong> <br />
            Dans une autre colonne, saisissez la date <b>01/01/2026</b> dans une cellule. Utilisez la poignée de recopie pour étendre la série sur 7 cellules. Modifiez ensuite le pas pour obtenir une série de lundis (une semaine d'écart entre chaque date).
          </li>
          <li>
            <strong>Série alphanumérique :</strong> <br />
            Dans une colonne, saisissez <b>Produit 1</b> dans une cellule. Utilisez la poignée de recopie pour générer automatiquement <b>Produit 2</b>, <b>Produit 3</b>, etc., jusqu'à <b>Produit 10</b>.
          </li>
          <li>
            <strong>Série à partir d'une liste personnalisée :</strong> <br />
            Créez une liste personnalisée avec les valeurs suivantes : <b>Or, Argent, Bronze</b>. Utilisez ensuite cette liste pour remplir une colonne de façon répétée sur 9 cellules.
          </li>
        </ol>
        <div className="mt-4 text-sm text-gray-600">
          <b>Astuce :</b> Utilisez la fenêtre « Série de données » ou le menu contextuel pour ajuster le type de série et l'incrément si besoin.
        </div>
      </div>
      <div className="mb-8">
        <PremiumVideo
          url="/cours/debutant/lecon5/correction_exercice.mp4"
          title="Correction vidéo de l'exercice"
        />
      </div>
    </section>

    {/* Exercice pratique adapté au cours */}
    <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Target className="text-pink-600" />
        Exercice pratique : Maîtriser les séries de données dans Excel
      </h3>
      <ol className="list-decimal ml-6 space-y-4 text-gray-700">
        <li>
          <strong>Série numérique linéaire</strong><br />
          Dans la colonne A d’une nouvelle feuille Excel, saisissez les deux premiers nombres de la série suivante : <b>10</b> et <b>15</b>.<br />
          Utilisez la poignée de recopie pour compléter la série jusqu’à la cellule A10.<br />
          Quel est le pas de la série ?<br />
          Quel nombre apparaît en A10 ?
        </li>
        <li>
          <strong>Série géométrique</strong><br />
          Dans la colonne B, saisissez le nombre <b>2</b> en B1.<br />
          Utilisez la fenêtre « Série de données » pour compléter la colonne jusqu’à B8 en multipliant chaque valeur par 2.<br />
          Quel est le contenu de la cellule B8 ?
        </li>
        <li>
          <strong>Série chronologique</strong><br />
          En C1, saisissez la date du jour.<br />
          Utilisez la poignée de recopie pour remplir les cellules jusqu’à C7, en incrémentant d’un jour.<br />
          Modifiez ensuite la série pour qu’elle affiche uniquement les lundis (pas de 7 jours).<br />
          Quelles sont les dates obtenues ?
        </li>
        <li>
          <strong>Série alphanumérique</strong><br />
          En D1, saisissez « Produit 1 ».<br />
          Utilisez la poignée de recopie pour remplir jusqu’à D5.<br />
          Quels sont les contenus des cellules D2 à D5 ?
        </li>
        <li>
          <strong>Liste personnalisée</strong><br />
          Créez une liste personnalisée avec les éléments suivants : « Printemps », « Été », « Automne », « Hiver ».<br />
          Saisissez « Printemps » en E1 puis utilisez la poignée de recopie pour remplir jusqu’à E8.<br />
          Que constatez-vous ?
        </li>
      </ol>
    </div>
    <div className="mt-12">
      <QuizLecon5 onResult={onResult} />
    </div>
  </div>
  );
}