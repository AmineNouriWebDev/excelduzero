import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon6 from "../../quizz/debutant/QuizLecon6";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Search, 
  Replace, 
  Filter, 
  Eye, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  Settings, 
  FileText, 
  Zap, 
  BookOpen, 
  Lightbulb,
  Clock,
  RefreshCw,
  MousePointer2,
  Keyboard,
  Navigation,
  Grid3X3,
  Hash,
  Type,
  Edit3,
  Save,
  X,
  Plus,
  Minus
} from "lucide-react";

export default function Lecon6({ onResult }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizComplete = (score) => {
    setShowQuiz(false);
    onResult(score);
  };

  if (showQuiz) {
    return <QuizLecon6 onComplete={handleQuizComplete} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Leçon 6 - RECHERCHE ET REMPLACEMENT
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700 mb-4">
          Les fonctions de recherche et de remplacement permettent de localiser rapidement des données spécifiques 
          dans une feuille de calcul ou dans un classeur entier, et de les remplacer par d'autres valeurs si nécessaire.
        </p>
        <p className="text-gray-700">
          Ces outils sont essentiels pour corriger des erreurs, mettre à jour des informations ou analyser 
          le contenu d'un fichier Excel volumineux.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Excel propose plusieurs méthodes pour rechercher et remplacer des données :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              La boîte de dialogue <strong>Rechercher et remplacer</strong> (Ctrl+H ou Ctrl+F)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">La fonction <strong>Rechercher</strong> via le menu Édition</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              Les options avancées pour des recherches précises (correspondance exacte, casse, etc.)
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        1. RECHERCHE SIMPLE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700 mb-2">
            La recherche simple permet de localiser une valeur, un texte ou une formule dans votre feuille de calcul.
          </p>
          <p className="text-gray-700">
            Excel surligne automatiquement les cellules contenant le terme recherché et permet de naviguer entre les occurrences.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Pour effectuer une recherche simple, procédez ainsi :
          </h5>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Appuyez sur <strong>Ctrl+F</strong> ou allez dans l'onglet <strong>Accueil</strong> {'>'} 
                groupe <strong>Édition</strong> {'>'} <strong>Rechercher et sélectionner</strong> {'>'} <strong>Rechercher</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Dans la zone <strong>Rechercher</strong>, saisissez le terme à localiser 
                (texte, nombre, formule ou caractère spécial).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Cliquez sur <strong>Suivant</strong> pour naviguer entre les occurrences, 
                ou sur <strong>Rechercher tout</strong> pour les afficher dans une liste.
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon6/recherche_simple_excel.gif" 
            alt="Recherche simple dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Options de recherche avancée
          </h5>
          <p className="text-gray-700 mb-4">
            Cliquez sur <strong>Options</strong> dans la boîte de dialogue pour accéder à des fonctions avancées :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span><strong>Dans :</strong> Rechercher dans la feuille active ou dans tout le classeur</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span><strong>Rechercher :</strong> Par lignes ou par colonnes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span><strong>Regarder dans :</strong> Formules, valeurs ou commentaires</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span><strong>Respecter la casse :</strong> Différencier majuscules et minuscules</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span><strong>Cellule entière :</strong> Correspondance exacte du contenu</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        2. REMPLACEMENT SIMPLE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <p className="text-gray-700 mb-2">
          Le remplacement permet de substituer automatiquement une valeur par une autre dans une sélection, 
          une feuille ou un classeur entier.
        </p>
        <p className="text-gray-700">
          Cette fonction est particulièrement utile pour corriger des erreurs récurrentes ou 
          mettre à jour des informations en masse.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Pour effectuer un remplacement, procédez ainsi :
        </h5>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
            <span className="text-gray-700">
              Appuyez sur <strong>Ctrl+H</strong> ou allez dans l'onglet <strong>Accueil</strong> {'>'} 
              <strong>Rechercher et sélectionner</strong> {'>'} <strong>Remplacer</strong>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
            <span className="text-gray-700">
              Dans la zone <strong>Rechercher</strong>, saisissez le terme à remplacer.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
            <span className="text-gray-700">
              Dans la zone <strong>Remplacer par</strong>, saisissez la nouvelle valeur.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
            <div className="text-gray-700">
              <p className="mb-2">Choisissez votre méthode :</p>
              <ul className="ml-4 space-y-1">
                <li>• <strong>Remplacer :</strong> Remplace une occurrence à la fois</li>
                <li>• <strong>Remplacer tout :</strong> Remplace toutes les occurrences d'un coup</li>
              </ul>
            </div>
          </li>
        </ul>
        
        <ImageZoomable 
          src="/cours/debutant/lecon6/remplacement_simple_excel.gif" 
          alt="Remplacement simple dans Excel" 
          style={{ maxHeight: 350 }} 
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Précautions importantes
        </h5>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠️</span>
            <span>
              <strong>Sauvegardez votre fichier</strong> avant d'effectuer des remplacements en masse
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠️</span>
            <span>
              Utilisez <strong>Ctrl+Z</strong> pour annuler si le résultat ne correspond pas à vos attentes
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-500">⚠️</span>
            <span>
              Testez d'abord avec <strong>Remplacer</strong> avant d'utiliser <strong>Remplacer tout</strong>
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        3. RECHERCHE ET REMPLACEMENT AVANCÉS
      </h3>

      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
        <p className="text-gray-700">
          Les options avancées permettent d'effectuer des recherches et remplacements plus précis 
          en utilisant des critères spécifiques et des caractères génériques.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Utilisation des caractères génériques
          </h4>
          
          <p className="text-gray-700 mb-4">
            Les caractères génériques permettent de rechercher des motifs plutôt que des valeurs exactes :
          </p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Caractère</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Signification</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700 font-mono">*</td>
                  <td className="py-3 px-4 border-b text-gray-700">Remplace plusieurs caractères</td>
                  <td className="py-3 px-4 border-b text-gray-700">Mar* trouve "Martin", "Marcel", "Marchand"</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700 font-mono">?</td>
                  <td className="py-3 px-4 border-b text-gray-700">Remplace un seul caractère</td>
                  <td className="py-3 px-4 border-b text-gray-700">M?rie trouve "Marie", "Matie", "Magie"</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b text-gray-700 font-mono">~</td>
                  <td className="py-3 px-4 border-b text-gray-700">Caractère d'échappement</td>
                  <td className="py-3 px-4 border-b text-gray-700">~* trouve le caractère "*" littéralement</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h5 className="font-semibold text-teal-800 mb-2">Exemples pratiques :</h5>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Rechercher :</strong> "2023*" → Trouve toutes les dates commençant par 2023</li>
              <li>• <strong>Rechercher :</strong> "Vente?" → Trouve "Vente1", "Vente2", "VenteA", etc.</li>
              <li>• <strong>Rechercher :</strong> "*@gmail.com" → Trouve toutes les adresses Gmail</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Recherche dans les formules
          </h4>
          
          <p className="text-gray-700 mb-4">
            Excel permet de rechercher et remplacer du contenu dans les formules :
          </p>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Dans les options avancées, sélectionnez <strong>Formules</strong> dans "Regarder dans"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Recherchez par exemple "A1" pour trouver toutes les formules référençant cette cellule
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Remplacez "A1" par "B1" pour mettre à jour toutes les références
              </span>
            </li>
          </ul>

          <ImageZoomable 
            src="/cours/debutant/lecon6/recherche_formules_excel.gif" 
            alt="Recherche dans les formules Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Recherche par format
          </h4>
          
          <p className="text-gray-700 mb-4">
            Vous pouvez rechercher et remplacer en fonction du format des cellules :
          </p>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Cliquez sur <strong>Format</strong> dans la boîte de dialogue
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Définissez les critères de format (couleur, police, bordure, etc.)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Recherchez toutes les cellules correspondant à ce format
              </span>
            </li>
          </ul>

          <ImageZoomable 
            src="/cours/debutant/lecon6/recherche_format_excel.png" 
            alt="Recherche par format Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        4. EXERCICE PRATIQUE
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700 mb-2">
          Appliquez vos connaissances avec cet exercice pratique. Téléchargez le fichier Excel ci-dessous et suivez les instructions.
        </p>
        <p className="text-gray-700">
          Une fois terminé, regardez la vidéo de correction pour comparer votre travail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données et les consignes pour l'exercice :
          </p>
          <a href="/cours/debutant/lecon6/exercice_recherche_remplacement.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Regardez la solution complète de l'exercice dans cette vidéo :
          </p>
          <PremiumVideo
            url="/cours/debutant/lecon6/correction_exercice.mp4"
            title="Correction vidéo de l'exercice"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Consignes de l'exercice
        </h4>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Ouvrez le fichier "Exercice_Recherche_Remplacement.xlsx"</li>
          <li>Dans la feuille "Données", recherchez toutes les cellules contenant "Dupont"</li>
          <li>Remplacez "Dupont" par "Martin" dans toute la feuille</li>
          <li>Trouvez toutes les valeurs numériques commençant par "202"</li>
          <li>Remplacez les références "A1" par "B1" dans les formules de la colonne "Calcul"</li>
          <li>Recherchez toutes les cellules au format monétaire (€) et remplacez-les par le format numérique standard</li>
        </ol>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Conseils d'utilisation professionnelle
      </h3>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <p className="text-gray-700 mb-2">
          Optimisez votre utilisation des fonctions de recherche et remplacement dans votre travail quotidien :
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Utilisez des raccourcis clavier :</strong> Ctrl+F pour rechercher, Ctrl+H pour remplacer</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Vérifiez les références :</strong> Avant un remplacement massif, testez sur une copie de votre fichier</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Combinez avec des filtres :</strong> Pour limiter la portée de votre recherche à une sélection</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Journalisez les changements :</strong> Notez les remplacements effectués pour le suivi</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Utilisez les caractères génériques :</strong> Pour des recherches complexes sur des motifs</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Récapitulatif de la leçon
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Points clés à retenir
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Ctrl+F ouvre la recherche, Ctrl+H ouvre le remplacement</li>
              <li>• Toujours sauvegarder avant un remplacement global</li>
              <li>• Utiliser les caractères génériques (*, ?, ~) pour des recherches complexes</li>
              <li>• Vérifier les options avancées (casse, cellule entière)</li>
              <li>• Le remplacement dans les formules modifie les références</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Applications pratiques
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Correction d'erreurs récurrentes dans de grands fichiers</li>
              <li>• Mise à jour d'informations obsolètes</li>
              <li>• Normalisation de formats de données</li>
              <li>• Modification de références dans les formules</li>
              <li>• Recherche de motifs spécifiques dans les données</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-gray-700 flex items-start gap-2">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>
              <strong>Attention :</strong> Le remplacement global est irréversible sans annulation (Ctrl+Z). 
              Toujours vérifier le résultat sur une petite sélection avant de l'appliquer à tout le document.
            </span>
          </p>
        </div>
      </div>

     
        {/* Quiz d'évaluation */}
          <div className="mt-12">
            <QuizLecon6 onResult={onResult} />
          </div>
    </div>
  );
}