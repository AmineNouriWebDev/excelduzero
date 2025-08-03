import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon14 from "../../quizz/debutant/QuizLecon14";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  FunctionSquare,
  Sigma,
  Plus,
  Minus,
  Divide,
  Equal,
  Calculator,
  Type,
  List,
  ChevronRight,
  Search,
  HelpCircle,
  Check,
  X,
  ArrowRight,
  Download,
  BookOpen,
  Video,
  Lightbulb,
  Target
} from "lucide-react";

export default function Lecon14({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <FunctionSquare className="w-8 h-8 text-blue-600" />
        MAÎTRISER LES FONCTIONS EXCEL
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous initie aux fonctions Excel, outils puissants qui automatisent les calculs et 
          simplifient la manipulation des données. Vous apprendrez à utiliser plus de 470 fonctions intégrées 
          pour transformer vos feuilles de calcul en outils professionnels.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous apprendrez à :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Comprendre la syntaxe des fonctions Excel
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Rechercher et insérer des fonctions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les fonctions essentielles (SOMME, MOYENNE, SI, etc.)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Combiner des fonctions et des textes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre des problèmes pratiques avec des fonctions
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-purple-600" />
        1. SYNTAXE DES FONCTIONS EXCEL
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Toute fonction Excel commence par le signe égal (=) et suit une structure précise. 
            Comprendre cette syntaxe est la clé pour utiliser efficacement les fonctions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Equal className="w-5 h-5 text-purple-600" />
            Structure de base d'une fonction
          </h5>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
            <code className="text-lg">=NOM_FONCTION(argument1; argument2; ...)</code>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Signe égal (=) :</strong> Obligatoire au début de toute fonction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Nom de la fonction :</strong> En majuscules, mais Excel corrige la casse
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Arguments :</strong> Entre parenthèses, séparés par des points-virgules
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                <strong>Types d'arguments :</strong> Nombres, texte, références de cellules, plages, autres fonctions
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/syntaxe_fonction.png" 
            alt="Structure d'une fonction Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-purple-600" />
            Résoudre les problèmes courants
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                Signes dièse (#####)
              </h6>
              <p className="text-gray-700 text-sm">
                Si votre cellule affiche <code className="bg-gray-100 px-1">#####</code>, cela signifie que la colonne est trop étroite. 
                Élargissez la colonne en faisant glisser le bord droit de l'en-tête.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                #NOM?
              </h6>
              <p className="text-gray-700 text-sm">
                Cette erreur signifie qu'Excel ne reconnaît pas le nom de votre fonction. 
                Vérifiez l'orthographe ou utilisez l'assistant de fonctions.
              </p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/erreurs_fonctions.gif" 
            alt="Résolution des erreurs courantes" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Astuce importante
          </h5>
          <p className="text-gray-700">
            Les fonctions sans arguments nécessitent quand même des parenthèses vides. 
            Par exemple: <code className="bg-gray-100 px-1">=AUJOURDHUI()</code> ou <code className="bg-gray-100 px-1">=MAINTENANT()</code>.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Type className="w-6 h-6 text-teal-600" />
        2. COMBINER TEXTE ET FONCTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            La concaténation vous permet de créer des messages dynamiques en combinant 
            du texte avec les résultats de fonctions. Utilisez l'opérateur & pour créer 
            des libellés intelligents.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-teal-600" />
            Concaténation de base
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">= "Texte " & FONCTION(argument)</pre>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Opérateur & :</strong> Permet de joindre du texte avec des fonctions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Texte entre guillemets :</strong> Le texte statique doit être placé entre guillemets
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> <code className="bg-gray-100 px-1">="La somme est "&SOMME(A1:A5)</code>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/concatenation_fonction.gif" 
            alt="Concaténation de texte avec une fonction" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-teal-600" />
            Recopier des formules
          </h5>
          
          <p className="text-gray-700 mb-4">
            Les références relatives s'ajustent automatiquement quand vous recopiez une formule :
          </p>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Sélectionnez la cellule</strong> contenant la formule
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Glissez la poignée de recopie</strong> (petit carré en bas à droite) vers les cellules adjacentes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Double-cliquez sur la poignée</strong> pour remplir automatiquement la colonne
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/copie_formule.gif" 
            alt="Recopie automatique de formules" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Exemple pratique
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Formule originale</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">C1: ="La somme est "&SOMME(A1:B1)</pre>
              <p className="text-sm text-gray-600 mt-2">Résultat: <em>La somme est 15</em></p>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Après recopie</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">C2: ="La somme est "&SOMME(A2:B2)</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">C3: ="La somme est "&SOMME(A3:B3)</pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <List className="w-6 h-6 text-indigo-600" />
        3. LES ARGUMENTS DES FONCTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Les fonctions Excel utilisent des arguments pour effectuer leurs calculs. 
            Ces arguments peuvent être des valeurs directes, des références de cellules, 
            des plages ou même d'autres fonctions.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Plus className="w-5 h-5 text-indigo-600" />
            Types d'arguments
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Valeurs directes</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nombres: <code>5</code></li>
                <li>• Texte: <code>"Excel"</code></li>
                <li>• Dates: <code>DATE(2023,1,15)</code></li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Références</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cellule: <code>A1</code></li>
                <li>• Plage: <code>A1:B10</code></li>
                <li>• Nommée: <code>Ventes_2023</code></li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Fonctions imbriquées</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <code>=SOMME(A1:A5)*MOYENNE(B1:B5)</code></li>
                <li>• <code>=ENT(SOMME(E6:G8))</code></li>
              </ul>
            </div>
          </div>
          
          
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Minus className="w-5 h-5 text-indigo-600" />
            Fonctions sans arguments
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">AUJOURDHUI()</h6>
              <p className="text-sm text-gray-600">
                Renvoie la date actuelle du système
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">=AUJOURDHUI() → 09/07/2025</pre>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">ALEA()</h6>
              <p className="text-sm text-gray-600">
                Génère un nombre aléatoire entre 0 et 1
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">=ALEA() → 0.74321</pre>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Divide className="w-5 h-5 text-indigo-600" />
            Fonctions à plusieurs arguments
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">DROITE(texte; nb_car)</h6>
              <p className="text-sm text-gray-600">
                Extrait des caractères depuis la droite
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">=DROITE("Excel";3) → "cel"</pre>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">SOMME(arg1; arg2; ...)</h6>
              <p className="text-sm text-gray-600">
                Accepte jusqu'à 255 arguments
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">
                =SOMME(5; A1:A5; B3; Ventes)
              </pre>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/somme_multi_arguments.gif" 
            alt="Fonction SOMME avec plusieurs arguments" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Search className="w-6 h-6 text-orange-600" />
        4. RECHERCHER ET INSÉRER DES FONCTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel offre plusieurs méthodes pour trouver et insérer les bonnes fonctions, 
            même si vous ne connaissez pas leur nom exact.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-orange-600" />
            Méthode 1: Assistant de fonctions
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Formules → Insérer une fonction</strong> ou cliquez sur <code className="bg-gray-100 px-1">fx</code> dans la barre de formule
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Recherchez par description ou choisissez une catégorie
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Sélectionnez la fonction et cliquez sur OK
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Remplissez les arguments dans la boîte de dialogue
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/inserer_fonction.gif" 
            alt="Utilisation de l'assistant de fonctions" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-orange-600" />
            Méthode 2: Bibliothèque de fonctions
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Onglet <strong>Formules → Bibliothèque de fonctions</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Choisissez une catégorie (Financières, Logiques, Texte, etc.)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Sélectionnez la fonction dans la liste déroulante
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Remplissez les arguments comme avec l'assistant
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/recherche_fonction.png" 
            alt="Bibliothèque de fonctions Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-orange-600" />
            Méthode 3: Saisie directe
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Commencez par <code className="bg-gray-100 px-1">=</code> et tapez le nom de la fonction
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Après <code className="bg-gray-100 px-1">(</code>, Excel affiche une info-bulle avec les arguments
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Cliquez sur un argument dans l'info-bulle pour mettre en surbrillance la cellule correspondante
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Cliquez sur le nom de la fonction pour accéder à l'aide détaillée
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/saisie_directe.gif" 
            alt="Saisie directe de fonctions avec info-bulle" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Sigma className="w-6 h-6 text-blue-600" />
        5. FONCTIONS ESSENTIELLES
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            Découvrez les fonctions les plus utiles pour vos premières feuilles de calcul. 
            Ces fonctions vous permettront de résoudre la majorité des problèmes courants.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Plus className="w-5 h-5 text-blue-600" />
            Fonctions mathématiques
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">SOMME</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=SOMME(A1:A10)</pre>
              <p className="text-sm text-gray-600 mt-2">Additionne toutes les valeurs dans la plage</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">MOYENNE</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=MOYENNE(B2:B20)</pre>
              <p className="text-sm text-gray-600 mt-2">Calcule la moyenne des valeurs</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">PRODUIT</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=PRODUIT(C1;C2;C3)</pre>
              <p className="text-sm text-gray-600 mt-2">Multiplie les arguments entre eux</p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/fonction_somme_moy_prod.gif" 
            alt="Utilisation de la fonction SOMME" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Equal className="w-5 h-5 text-blue-600" />
            Fonctions conditionnelles
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">SI</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=SI(A1&gt;100;"Élevé";"Bas")</pre>
              <p className="text-sm text-gray-600 mt-2">
                Renvoie une valeur si la condition est vraie, une autre si elle est fausse
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Opérateurs: =, &gt;, &lt;, &lt;&gt;, &gt;=, &lt;=
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">NB.SI</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=NB.SI(B1:B10;{"\">50\""})</pre>
              <p className="text-sm text-gray-600 mt-2">
                Compte le nombre de cellules qui répondent à un critère
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">=NB.SI(C1:C10;"rouge")</pre>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/lecon14/fonction_si.gif" 
            alt="Utilisation de la fonction SI" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Type className="w-5 h-5 text-blue-600" />
            Fonctions texte
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">GAUCHE</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=GAUCHE(A1;3)</pre>
              <p className="text-sm text-gray-600 mt-2">Extrait les 3 premiers caractères</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">DROITE</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=DROITE(B1;2)</pre>
              <p className="text-sm text-gray-600 mt-2">Extrait les 2 derniers caractères</p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">MAJUSCULE</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=MAJUSCULE(C1)</pre>
              <p className="text-sm text-gray-600 mt-2">Convertit le texte en majuscules</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            Autres fonctions utiles
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <strong>NB</strong>: Compte les cellules contenant des nombres<br />
                  <code className="bg-gray-100 px-1">=NB(A1:A10)</code>
                </li>
                <li>
                  <strong>MIN</strong>: Renvoie la plus petite valeur<br />
                  <code className="bg-gray-100 px-1">=MIN(B1:B20)</code>
                </li>
                <li>
                  <strong>MAX</strong>: Renvoie la plus grande valeur<br />
                  <code className="bg-gray-100 px-1">=MAX(C1:C15)</code>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  <strong>NB.VIDE</strong>: Compte les cellules vides<br />
                  <code className="bg-gray-100 px-1">=NB.VIDE(D1:D50)</code>
                </li>
                <li>
                  <strong>MOD</strong>: Renvoie le reste d'une division<br />
                  <code className="bg-gray-100 px-1">=MOD(10;3) → 1</code>
                </li>
                <li>
                  <strong>SUPPRESPACE</strong>: Supprime les espaces superflus<br />
                  <code className="bg-gray-100 px-1">=SUPPRESPACE("  Excel  ")</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercice pratique */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-600" />
        6. EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances sur les fonctions Excel en complétant cet exercice pratique.
          Téléchargez le fichier d'exercice et suivez les consignes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à mettre en forme :
          </p>
          <a href="/cours/debutant/lecon14/exercice_fonctions_debutant.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Regardez la solution complète de l'exercice dans cette vidéo :
          </p>
          <PremiumVideo
            url="/cours/debutant/lecon14/correction_exercice_fonctions.mp4"
            title="Correction vidéo de l'exercice sur les fonctions"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          Consignes détaillées
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Calculs de base</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Calculez le <strong>total des ventes</strong> pour chaque produit</li>
              <li>Calculez la <strong>moyenne des ventes</strong> par mois</li>
              <li>Trouvez le <strong>produit le plus vendu</strong> et le moins vendu</li>
              <li>Calculez le <strong>pourcentage</strong> que représente chaque produit dans le total général</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Fonctions conditionnelles</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Marquez comme <strong>"Objectif Atteint"</strong> si les ventes dépassent 500 unités</li>
              <li>Comptez le nombre de produits ayant dépassé l'objectif</li>
              <li>Calculez la <strong>moyenne des ventes</strong> uniquement pour les produits ayant atteint l'objectif</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Formatage et présentation</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Créez une colonne <strong>"Performance"</strong> avec des libellés dynamiques combinant texte et fonctions</li>
            <li>Ajoutez un <strong>résumé statistique</strong> en bas du tableau</li>
            <li>Mettez en forme les résultats avec un style professionnel</li>
          </ol>
        </div>
      </div>

      {/* Synthèse des compétences acquises */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" />
          Synthèse des compétences acquises
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Techniques maîtrisées</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Compréhension de la syntaxe des fonctions Excel</li>
              <li>• Recherche et insertion de fonctions via différentes méthodes</li>
              <li>• Utilisation des fonctions mathématiques et statistiques</li>
              <li>• Création de formules conditionnelles avec SI et NB.SI</li>
              <li>• Combinaison de texte et fonctions pour des libellés dynamiques</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Applications professionnelles</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Analyse de données commerciales</li>
              <li>• Création de tableaux de bord simples</li>
              <li>• Automatisation de calculs récurrents</li>
              <li>• Génération de rapports avec indicateurs clés</li>
            </ul>
          </div>
        </div>
      </div>

    
      
              {/* Quiz d'évaluation */}
                  <div className="mt-12">
                    <QuizLecon14 onResult={onResult} />
                  </div>
    </div>
  );
}