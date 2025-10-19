import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon5 from "../../quizz/intermediaire/QuizLecon5";
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
  Navigation,
  Layers,
  Crosshair,
  ArrowRightLeft
} from "lucide-react";

export default function Lecon5({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Layers className="w-8 h-8 text-blue-600" />
        Leçon 5 - INDEX & EQUIV : La combinaison ultime pour des recherches avancées dans Excel
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous présente la combinaison de fonctions la plus puissante d'Excel : <strong>INDEX</strong> et <strong>EQUIV</strong>. Ensemble, elles surpassent les limitations de RECHERCHEV et RECHERCHEH, offrant une flexibilité totale pour toutes vos recherches.
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
              Comprendre le fonctionnement individuel des fonctions INDEX et EQUIV
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Maîtriser la combinaison INDEX-EQUIV pour des recherches bidirectionnelles
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre les limitations de RECHERCHEV avec des recherches vers la gauche
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer des recherches dynamiques sur matrice double dimension
            </span>
          </li>
        </ul>
      </div>

      {/* TABLEAU COMPARATIF AVEC RECHERCHEV */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Table className="w-6 h-6 text-purple-600" />
          Pourquoi INDEX-EQUIV est supérieur à RECHERCHEV
        </h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caractéristique</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RECHERCHEV</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">INDEX-EQUIV</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Recherche vers la gauche</td>
                <td className="px-4 py-3 text-sm text-gray-600">Impossible</td>
                <td className="px-4 py-3 text-sm text-green-600 font-semibold">Possible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Insertion de colonnes</td>
                <td className="px-4 py-3 text-sm text-gray-600">Casse les formules</td>
                <td className="px-4 py-3 text-sm text-green-600 font-semibold">Formules robustes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Performance</td>
                <td className="px-4 py-3 text-sm text-gray-600">Plus lente sur grands tableaux</td>
                <td className="px-4 py-3 text-sm text-green-600 font-semibold">Plus rapide</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">Flexibilité</td>
                <td className="px-4 py-3 text-sm text-gray-600">Limitée</td>
                <td className="px-4 py-3 text-sm text-green-600 font-semibold">Maximale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION FONCTION INDEX */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Crosshair className="w-6 h-6 text-blue-600" />
        1. LA FONCTION INDEX : RETOURNER UNE VALEUR SPÉCIFIQUE
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            La fonction <strong>INDEX</strong> renvoie la valeur d'une cellule dans une plage spécifique, en se basant sur un numéro de ligne et éventuellement de colonne .
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Syntaxe de la fonction INDEX
          </h5>
          
          <div className="bg-gray-800 text-blue-400 p-4 rounded-lg font-mono text-sm mb-4">
            =INDEX(matrice; no_ligne; [no_colonne])
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètres obligatoires</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>matrice</strong> : La plage de cellules contenant les données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>no_ligne</strong> : Le numéro de la ligne dans la matrice (commence à 1)</span>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètre optionnel</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span><strong>no_colonne</strong> : Le numéro de la colonne dans la matrice (si la matrice est 2D)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple simple : INDEX seul</h6>
              <div className="bg-gray-800 text-blue-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX(A2:C21;4;3)
              </div>
              <p className="text-sm text-gray-600">
                Renvoie la valeur à l'intersection de la 3ème ligne et 2ème colonne de A1:C10.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec une seule dimension</h6>
              <div className="bg-gray-800 text-blue-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX(H2:H6;3)
              </div>
              <p className="text-sm text-gray-600">
                Renvoie la 5ème valeur de la plage B1:B10 (colonne unique).
              </p>
            </div>
             
          </div>
           <ImageZoomable 
                      src="/cours/intermediaire/Lecon5/index_2D_vs_1D.gif" 
                      alt="Différence entre INDEX 2D et 1D : 2D utilise ligne et colonne, 1D utilise seulement ligne"
                      className="mb-6"
                      style={{ maxHeight: 300 }}
                    />
        </div>
      </div>

      {/* SECTION FONCTION EQUIV */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Search className="w-6 h-6 text-orange-600" />
        2. LA FONCTION EQUIV : TROUVER LA POSITION D'UNE VALEUR
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            La fonction <strong>EQUIV</strong> recherche une valeur spécifique dans une plage et renvoie sa position relative  C'est comme demander "À quelle position se trouve cette valeur dans la liste ?"
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-orange-600" />
            Syntaxe de la fonction EQUIV
          </h5>
          
          <div className="bg-gray-800 text-orange-400 p-4 rounded-lg font-mono text-sm mb-4">
            =EQUIV(valeur_cherchée; matrice_recherche; [type])
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètres obligatoires</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>valeur_cherchée</strong> : La valeur dont vous voulez trouver la position</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>matrice_recherche</strong> : La plage de cellules contenant les valeurs à rechercher</span>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Paramètre type</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>0</strong> : Correspondance exacte (le plus utilisé)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>1</strong> : Plus grande valeur ≤ valeur_cherchée (tri croissant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span><strong>-1</strong> : Plus petite valeur ≥ valeur_cherchée (tri décroissant)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple EQUIV simple</h6>
              <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                =EQUIV("Paris"; A1:A50; 0)
              </div>
              <p className="text-sm text-gray-600">
                Trouve la position de "Paris" dans la plage A1:A50. Retourne 8 si Paris est en A8.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec référence de cellule</h6>
              <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                =EQUIV(D2; B1:B100; 0)
              </div>
              <p className="text-sm text-gray-600">
                Recherche la valeur de D2 dans B1:B100 et retourne sa position.
              </p>
            </div>
           
          </div>
            <ImageZoomable 
                      src="/cours/intermediaire/Lecon5/equiv.gif" 
                      alt="Exemples visuels de la fonction EQUIV : recherche de position dans une liste"
                      className="mb-6"
                      style={{ maxHeight: 300 }}
                    />  
        </div>
      </div>

      {/* SECTION COMBINAISON INDEX-EQUIV */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ArrowRightLeft className="w-6 h-6 text-purple-600" />
        3. LA COMBINAISON INDEX-EQUIV : LA SOLUTION ULTIME
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            En combinant <strong>INDEX</strong> et <strong>EQUIV</strong>, vous créez une fonction de recherche extrêmement puissante et flexible. EQUIV trouve la position, INDEX retourne la valeur.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Syntaxe de la combinaison INDEX-EQUIV
          </h5>
          
          <div className="bg-gray-800 text-purple-400 p-4 rounded-lg font-mono text-sm mb-4">
            =INDEX(plage_resultat; EQUIV(valeur_cherchée; plage_recherche; 0))
          </div>

          {/* Image suggestion: Schéma montrant le fonctionnement INDEX-EQUIV */}
          <ImageZoomable 
            src="/cours/intermediaire/Lecon5/schema-index-equiv.gif" 
            alt="Schéma expliquant le fonctionnement de INDEX-EQUIV : EQUIV trouve la ligne, INDEX retourne la valeur"
            className="mb-6"
            style={{ maxHeight: 250 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Recherche standard (équivalent RECHERCHEV)</h6>
              <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX(C1:C100; EQUIV(E2; A1:A100; 0))
              </div>
              <p className="text-sm text-gray-600">
                Recherche E2 dans A1:A100, retourne la valeur correspondante de C1:C100.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Recherche vers la GAUCHE</h6>
              <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX(A1:A100; EQUIV(E2; C1:C100; 0))
              </div>
              <p className="text-sm text-gray-600">
                Impossible avec RECHERCHEV ! Recherche E2 dans C1:C100, retourne la valeur de A1:A100.
              </p>
            </div>
          </div>
<ImageZoomable 
            src="/cours/intermediaire/Lecon5/RECHERCHEV_VS_INDEX_EQUIV.gif" 
            alt="Comparaison visuelle entre RECHERCHEV et INDEX-EQUIV : INDEX-EQUIV peut rechercher à gauche"
            className="mb-6"
            style={{ maxHeight: 250 }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Recherche matricielle (ligne et colonne)</h6>
              <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX(A1:Z100; EQUIV(E2; A1:A100; 0); EQUIV(F2; A1:Z1; 0))
              </div>
              <p className="text-sm text-gray-600">
                Recherche bidirectionnelle : trouve la ligne avec E2, la colonne avec F2.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec références absolues</h6>
              <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm mb-2">
                =INDEX($C$1:$C$100; EQUIV(E2; $A$1:$A$100; 0))
              </div>
              <p className="text-sm text-gray-600">
                Avec plages fixes pour pouvoir étirer la formule.
              </p>
            </div>
          </div>
        </div>

        {/* AVANTAGES INDEX-EQUIV */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Avantages de INDEX-EQUIV sur RECHERCHEV
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-medium text-gray-800">Recherche vers la gauche</h6>
                  <p className="text-sm text-gray-600">Peut retourner des valeurs situées à gauche de la colonne de recherche</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-medium text-gray-800">Insertion de colonnes safe</h6>
                  <p className="text-sm text-gray-600">Les insertions/suppressions de colonnes ne cassent pas les formules</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-medium text-gray-800">Plus rapide</h6>
                  <p className="text-sm text-gray-600">Meilleures performances sur les grands jeux de données</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h6 className="font-medium text-gray-800">Flexibilité totale</h6>
                  <p className="text-sm text-gray-600">Peut rechercher sur lignes ET colonnes simultanément</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION EXEMPLES CONCRETS */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-green-600" />
        4. EXEMPLES CONCRETS ET APPLICATIONS PRATIQUES
      </h3>

      <div className="mb-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700">
            Découvrez des applications réelles de INDEX-EQUIV pour résoudre des problèmes courants en entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3">Gestion de stock</h5>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
              =INDEX($D$2:$D$500; EQUIV($G$2; $A$2:$A$500; 0))
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Retrouve le stock actuel d'un produit à partir de sa référence.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• G2 = Réference produit recherchée</li>
              <li>• A2:A500 = Liste des références produits</li>
              <li>• D2:D500 = Quantités en stock</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3">Recherche employé</h5>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
              =INDEX($B$2:$B$200; EQUIV($H$3; $C$2:$C$200; 0))
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Trouve le nom d'un employé à partir de son matricule.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• H3 = Matricule recherché</li>
              <li>• C2:C200 = Liste des matricules</li>
              <li>• B2:B200 = Noms des employés</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h5 className="font-semibold text-gray-800 mb-3">Recherche bidirectionnelle avancée</h5>
          <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
            =INDEX($B$2:$G$12; EQUIV($I$2; $A$2:$A$12; 0); EQUIV($I$3; $B$1:$G$1; 0))
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Trouve une valeur à l'intersection d'une ligne et d'une colonne spécifiques.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• I2 = Valeur recherchée en ligne (ex: "Produit A")</li>
            <li>• I3 = Valeur recherchée en colonne (ex: "Mai")</li>
            <li>• Résultat = Chiffre d'affaires de Produit A au mois de Mai</li>
          </ul>
        </div>
      </div>

      {/* SECTION GESTION DES ERREURS */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        5. GESTION DES ERREURS COURANTES
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            Apprenez à identifier et corriger les erreurs fréquentes avec INDEX-EQUIV.
          </p>
        </div>

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
                  <strong>Cause :</strong> EQUIV ne trouve pas la valeur cherchée
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Solutions :</strong>
                </span>
              </li>
              <li className="ml-4">- Vérifier l'orthographe de la valeur</li>
              <li className="ml-4">- Utiliser SIERREUR pour gérer proprement</li>
              <li className="ml-4">- Vérifier les espaces invisibles</li>
            </ul>

            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mt-3">
              =SIERREUR(INDEX(...); "Non trouvé")
            </div>
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
                  <strong>Cause :</strong> INDEX référence une ligne/colonne hors de la plage
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>
                  <strong>Solutions :</strong>
                </span>
              </li>
              <li className="ml-4">- Vérifier que EQUIV retourne un numéro valide</li>
              <li className="ml-4">- Contrôler les dimensions des plages</li>
              <li className="ml-4">- Utiliser des références absolues cohérentes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION BONNES PRATIQUES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-yellow-600" />
        6. BONNES PRATIQUES ET ASTUCES AVANCÉES
      </h3>

      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700">
            Adoptez ces techniques professionnelles pour optimiser vos formules INDEX-EQUIV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Utiliser des Tables Excel
            </h5>
            
            <p className="text-sm text-gray-700 mb-3">
              Convertissez vos plages en Tables Excel pour des références dynamiques et automatiques.
            </p>

            <div className="bg-gray-800 text-blue-400 p-3 rounded font-mono text-sm mb-2">
              =INDEX(Table1[Prix]; EQUIV(E2; Table1[Référence]; 0))
            </div>
            <p className="text-sm text-gray-600">
              Les références de table s'ajustent automatiquement quand vous ajoutez des données.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              Combiner avec SIERREUR
            </h5>
            
            <p className="text-sm text-gray-700 mb-3">
              Gestion professionnelle des erreurs pour des tableaux de bord propres.
            </p>

            <div className="bg-gray-800 text-blue-400 p-3 rounded font-mono text-sm mb-2">
              =SIERREUR(INDEX(...); "Non trouvé")
            </div>
            <p className="text-sm text-gray-600">
              Affiche un message personnalisé au lieu d'une erreur Excel.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h5 className="font-semibold text-gray-800 mb-3">Validation des données en amont</h5>
          <p className="text-sm text-gray-700 mb-3">
            Utilisez des listes déroulantes pour garantir que les valeurs recherchées existent bien dans vos tables.
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>Données → Validation des données → Liste</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>Réduit considérablement les erreurs #N/A</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>Améliore l'expérience utilisateur</span>
            </li>
          </ul>
        </div>
      </div>

      {/* EXERCICE PRATIQUE */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        EXERCICE PRATIQUE : SYSTÈME DE GESTION COMMERCIAL AVANCÉ
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Créez un système de gestion commercial complet utilisant INDEX-EQUIV pour des recherches multidimensionnelles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier d'exercice sur la gestion commerciale avancée :
          </p>
          <a href="/cours/intermediaire/Lecon5/exercice_index_equiv.xlsx" 
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
            url="/cours/intermediaire/Lecon5/correction_index_equiv.mp4"
            title="Correction de l'exercice sur INDEX et EQUIV"
          />
        </div>
      </div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon5 onResult={onResult} />
      </div>
    </div>
  );
}