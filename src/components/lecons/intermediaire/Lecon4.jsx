import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon4 from "../../quizz/intermediaire/QuizLecon4";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Calculator,
  Code,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  Download,
  Video,
  BookOpen,
  TrendingUp,
  Search,
  Table,
  Zap,
  Filter,
  Navigation
} from "lucide-react";

export default function Lecon4({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Navigation className="w-8 h-8 text-purple-600" />
        Leçon 4 - RECHERCHEV & RECHERCHEH : Maîtriser les recherches dans Excel
      </h2>
      
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser les fonctions de recherche les plus utilisées dans Excel. RECHERCHEV et RECHERCHEH vous permettront de trouver et d'extraire automatiquement des informations spécifiques dans vos tableaux de données, gagnant ainsi un temps précieux et réduisant les erreurs manuelles.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous apprendrez à :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Comprendre la différence fondamentale entre RECHERCHEV (verticale) et RECHERCHEH (horizontale)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Maîtriser la syntaxe exacte de chaque fonction avec tous leurs paramètres
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les recherches exactes et approximatives dans des scénarios réels
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Éviter et corriger les erreurs courantes comme #N/A et #REF!
            </span>
          </li>
        </ul>
      </div>

      {/* TABLEAU COMPARATIF */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Table className="w-6 h-6 text-blue-600" />
        Vue d'ensemble : RECHERCHEV vs RECHERCHEH
        </h3>
        
        {/* Image suggestion: Un schéma comparatif montrant les directions de recherche */}
        <ImageZoomable 
          src="/cours/intermediaire/Lecon4/comparaison-recherchev-rechercheh.png" 
          alt="Schéma comparatif montrant RECHERCHEV recherche verticalement dans une colonne, RECHERCHEH recherche horizontalement dans une ligne"
          className="mb-6"
          style={{ maxHeight: 400 }}
        />

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caractéristique</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RECHERCHEV (Verticale)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RECHERCHEH (Horizontale)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Direction de recherche</td>
                <td className="px-4 py-3 text-sm text-gray-600">Colonne (verticale)</td>
                <td className="px-4 py-3 text-sm text-gray-600">Ligne (horizontale)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Emplacement de la valeur cherchée</td>
                <td className="px-4 py-3 text-sm text-gray-600">Première colonne du tableau</td>
                <td className="px-4 py-3 text-sm text-gray-600">Première ligne du tableau</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Syntaxe de base</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <code className="bg-gray-100 px-1 rounded">=RECHERCHEV(valeur; tableau; no_colonne; type)</code>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <code className="bg-gray-100 px-1 rounded">=RECHERCHEH(valeur; tableau; no_ligne; type)</code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Cas d'usage typique</td>
                <td className="px-4 py-3 text-sm text-gray-600">Rechercher un prix avec un code produit</td>
                <td className="px-4 py-3 text-sm text-gray-600">Trouver un chiffre mensuel avec le mois en en-tête</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>

      {/* SECTION RECHERCHEV */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-green-600" />
        1. RECHERCHEV : LA RECHERCHE VERTICALE
      </h3>

      <div className="mb-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700">
            <strong>RECHERCHEV</strong> (VLOOKUP en anglais) recherche une valeur dans la <strong>première colonne</strong> d'un tableau et renvoie une valeur correspondante dans la <strong>même ligne</strong> mais d'une <strong>colonne différente</strong>.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600" />
            Syntaxe détaillée de RECHERCHEV
          </h5>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            =RECHERCHEV(valeur_cherchée; table_matrice; no_index_col; [valeur_proche])
          </div>

          {/* GIF suggestion: Animation montrant comment RECHERCHEV parcourt un tableau */}
          <ImageZoomable 
            src="/cours/intermediaire/Lecon4/recherchev-animation.gif" 
            alt="Animation montrant le fonctionnement de RECHERCHEV avec des flèches qui se déplacent"
            className="mb-6"
            style={{ maxHeight: 400 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètres obligatoires</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>valeur_cherchée</strong> : La valeur à rechercher dans la première colonne du tableau</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>table_matrice</strong> : La plage de cellules contenant les données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>no_index_col</strong> : Le numéro de la colonne contenant la valeur à renvoyer</span>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètre optionnel</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>valeur_proche</strong> : FAUX pour une correspondance exacte, VRAI pour une correspondance approximative</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple concret : Recherche de prix</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEV("P003";A2:C5;3;FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Recherche "P003" dans la première colonne de A2:C5 et renvoie la valeur de la 3ème colonne (le prix).
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec référence de cellule</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEV(B11;$I$3:$K$22;2;FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Recherche la valeur de B11 dans la plage fixe I3:K22 et renvoie la 2ème colonne.
              </p>
            </div>
          </div>
        </div>

        {/* RECHERCHEV - Correspondance exacte vs approximative */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-green-600" />
            Correspondance exacte (FAUX) vs approximative (VRAI)
          </h5>
          
          {/* Image suggestion: Tableau montrant la différence entre recherche exacte et approximative */}
          <ImageZoomable 
            src="/cours/intermediaire/Lecon4/correspondance-exacte-approximative.png" 
            alt="Tableau comparatif montrant les résultats de recherche exacte vs approximative"
            className="mb-6"
            style={{ maxHeight: 400 }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                FAUX - Correspondance exacte
              </h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Recherche la valeur exacte uniquement</li>
                <li>• Retourne #N/A si la valeur n'existe pas</li>
                <li>• Idéal pour les codes, identifiants, noms</li>
                <li>• Aucun tri préalable nécessaire</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                VRAI - Correspondance approximative
              </h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Trouve la plus grande valeur inférieure ou égale</li>
                <li>• Nécessite un tableau trié par ordre croissant</li>
                <li>• Idéal pour les tranches, seuils, intervalles</li>
                <li>• Utilisé pour les tables de commission</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION RECHERCHEH */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Navigation className="w-6 h-6 text-orange-600" />
        2. RECHERCHEH : LA RECHERCHE HORIZONTALE
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            <strong>RECHERCHEH</strong> (HLOOKUP en anglais) recherche une valeur dans la <strong>première ligne</strong> d'un tableau et renvoie une valeur correspondante dans la <strong>même colonne</strong> mais d'une <strong>ligne différente</strong>.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Syntaxe détaillée de RECHERCHEH
          </h5>
          
          <div className="bg-gray-800 text-orange-400 p-4 rounded-lg font-mono text-sm mb-4">
            =RECHERCHEH(valeur_cherchée; table_matrice; no_index_lig; [valeur_proche])
          </div>

          {/* GIF suggestion: Animation montrant comment RECHERCHEH parcourt un tableau horizontalement */}
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple de recherche exacte</h6>
              <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEH("Cahier";A1:C3;3;FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Recherche "Cahier" dans la première ligne et renvoie la valeur de la 3ème ligne (le prix).
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Recherche avec caractères génériques</h6>
              <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEH("Cah*";A1:C3;2;FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Recherche tout mot commençant par "Cah" et renvoie la valeur de la 2ème ligne.
              </p>
            </div>
         
          </div>
                <ImageZoomable 
            src="/cours/intermediaire/Lecon4/syntaxe_rechercheh.gif" 
            alt="Animation montrant le fonctionnement de RECHERCHEH avec des flèches qui se déplacent horizontalement"
            className="mb-6"
            style={{ maxHeight: 400 }}
          />
        </div>
      </div>

      {/* SECTION ERREURS COURANTES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        3. GESTION DES ERREURS COURANTES
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            Apprenez à identifier et corriger les erreurs les plus fréquentes avec RECHERCHEV et RECHERCHEH pour créer des formules robustes et fiables.
          </p>
        </div>

        {/* Image suggestion: Capture d'écran montrant les différentes erreurs Excel */}
        <ImageZoomable 
          src="/cours/intermediaire/Lecon4/erreurs-excel.png" 
          alt="Capture d'écran Excel montrant les erreurs #N/A, #REF! et #VALUE!"
          className="mb-6"
          style={{ maxHeight: 400 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Erreur #N/A
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Cause :</strong> Valeur non trouvée dans la première colonne/ligne
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Solution :</strong> Vérifier l'existence de la valeur et utiliser SIERREUR
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Erreur #REF!
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Cause :</strong> Numéro de colonne/ligne supérieur au tableau
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Solution :</strong> Vérifier le numéro de colonne/ligne dans la plage
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION BONNES PRATIQUES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-yellow-600" />
        4. BONNES PRATIQUES ET ASTUCES AVANCÉES
      </h3>

      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700">
            Adoptez ces techniques professionnelles pour optimiser l'utilisation de RECHERCHEV et RECHERCHEH dans vos projets Excel.
          </p>
        </div>

        {/* Image suggestion: Schéma montrant l'utilisation des références absolues */}
        <ImageZoomable 
          src="/cours/intermediaire/Lecon4/references-absolues.png" 
          alt="Schéma expliquant la différence entre références relatives et absolues avec le signe $"
          className="mb-6"
          style={{ maxHeight: 400 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Références absolues
            </h5>
            
            <p className="text-sm text-gray-700 mb-3">
              Utilisez les <strong>références absolues</strong> ($) pour figer la plage de recherche lors de la copie de formules.
            </p>

            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
              =RECHERCHEV(A10;$E$2:$G$100;2;FAUX)
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Recherche sur plusieurs feuilles
            </h5>
            
            <p className="text-sm text-gray-700 mb-3">
              RECHERCHEV peut rechercher des données sur une autre feuille de calcul.
            </p>

            <div className="bg-gray-800 text-blue-400 p-3 rounded font-mono text-sm mb-2">
              =RECHERCHEV(B11;"Table produits"!$I$3:$K$22;2;FAUX)
            </div>
          </div>
        </div>
      </div>

      {/* EXERCICE PRATIQUE */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        EXERCICE PRATIQUE : SYSTÈME DE GESTION COMMERCIAL
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en créant un système complet de gestion commerciale utilisant RECHERCHEV et RECHERCHEH.
        </p>
      </div>

   

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier d'exercice sur la gestion commerciale :
          </p>
          <a href="/cours/intermediaire/Lecon4/exercice_recherchev_rechercheh.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
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
            Solution complète et détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/intermediaire/Lecon4/correction_recherchev_rechercheh.mp4"
            title="Correction de l'exercice sur RECHERCHEV et RECHERCHEH"
          />
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
    <Calculator className="w-6 h-6 text-indigo-600" />
    Consignes de l'exercice pratique
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* PARTIE RECHERCHEV */}
    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-green-600" />
        Partie 1 : RECHERCHEV (Feuille "Produits")
      </h4>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            1
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B17 :</p>
            <p className="text-gray-600 text-sm">Afficher le <strong>Prix Unitaire</strong> du produit dont le code est saisi en A17</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            2
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B18 :</p>
            <p className="text-gray-600 text-sm">Afficher la <strong>Désignation</strong> du produit dont le code est saisi en A18</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            3
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B19 :</p>
            <p className="text-gray-600 text-sm">Afficher la <strong>Désignation</strong> du produit dont le code est saisi en A19</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded">
        <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Contraintes RECHERCHEV :
        </h5>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Utiliser <strong>RECHERCHEV</strong> avec plage dynamique (références absolues)</li>
          <li>• Gérer les erreurs avec <strong>SIERREUR</strong></li>
          <li>• Afficher <strong>"Produit introuvable"</strong> si code inexistant</li>
        </ul>
      </div>
    </div>

    {/* PARTIE RECHERCHEH */}
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
      <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-orange-600" />
        Partie 2 : RECHERCHEH (Feuille "Ventes")
      </h4>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            1
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B8 :</p>
            <p className="text-gray-600 text-sm">Afficher la <strong>quantité vendue</strong> pour le mois saisi en A8</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            2
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B9 :</p>
            <p className="text-gray-600 text-sm">Afficher la <strong>quantité vendue</strong> pour le mois saisi en A9</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
            3
          </div>
          <div>
            <p className="text-gray-700 font-medium">En cellule B10 :</p>
            <p className="text-gray-600 text-sm">Afficher la <strong>quantité vendue</strong> pour le mois saisi en A10</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-orange-100 border border-orange-200 rounded">
        <h5 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Contraintes RECHERCHEH :
        </h5>
        <ul className="text-sm text-orange-700 space-y-1">
          <li>• Utiliser <strong>RECHERCHEH</strong> avec plage dynamique (références absolues)</li>
          <li>• Gérer les erreurs avec <strong>SIERREUR</strong></li>
          <li>• Afficher <strong>"Mois introuvable"</strong> si mois inexistant</li>
        </ul>
      </div>
    </div>
  </div>

 
</div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon4 onResult={onResult} />
      </div>
    </div>
  );
}