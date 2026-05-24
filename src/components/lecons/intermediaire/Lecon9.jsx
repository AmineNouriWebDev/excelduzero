import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon9 from "../../quizz/intermediaire/QuizLecon9";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Table,
  Filter,
  TrendingUp,
  Zap,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Download,
  Video,
  BookOpen,
  Calculator,
  RefreshCw,
  Settings,
  BarChart3,
  Search,
  Layers,
  List,
  FileText,
  ArrowUpDown
} from "lucide-react";

export default function Lecon9({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Layers className="w-8 h-8 text-blue-600" />
        Leçon 9 - SOUS-TOTAUX AUTOMATIQUES : L'analyse structurée et hiérarchique dans Excel
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Les sous-totaux automatiques sont une fonctionnalité puissante d'Excel permettant de créer rapidement des rapports structurés et hiérarchiques directement dans vos données sources. Cette leçon vous apprendra à maîtriser cet outil pour l'analyse rapide tout en comprenant ses limites .
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous découvrirez :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              La différence fondamentale entre l'outil Sous-total et la fonction SOUS.TOTAL
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Le prérequis obligatoire : le tri des données pour un regroupement correct
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              La création de plans hiérarchiques pour naviguer entre synthèse et détail
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Les techniques avancées pour les sous-totaux imbriqués
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Quand choisir les sous-totaux vs les tableaux croisés dynamiques
            </span>
          </li>
        </ul>
      </div>

      {/* SECTION INTRODUCTION */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-blue-600" />
        Introduction à l'Analyse Structurée des Données
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <h4 className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Définition et Utilité des Sous-totaux Automatiques
          </h4>
          
          <p className="text-gray-700 mb-4">
            L'outil des <strong>Sous-totaux automatiques</strong> est une fonctionnalité puissante d'Excel permettant l'insertion rapide de lignes récapitulatives au sein d'une liste de données brutes. Son rôle principal est de résumer les informations (totaux, moyennes, comptes) en regroupant les données selon une catégorie spécifique .
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Ce que fait l'outil</h5>
              <ul className="text-sm text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Insère des lignes de récapitulatif automatiquement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Crée une structure de plan hiérarchique</span>
                </li>
                <li className="flex items-start gap-2">
                  <Filter className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Permet de naviguer entre synthèse et détail</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Distinction fondamentale</h5>
              <p className="text-sm text-orange-700 mb-2">
                <strong>Outil Sous-total</strong> vs <strong>Fonction SOUS.TOTAL</strong>
              </p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• <strong>Outil</strong>: Commande du ruban qui automatise l'insertion</li>
                <li>• <strong>Fonction</strong>: Formule qui ignore les lignes masquées</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION PRÉREQUIS TRI */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ArrowUpDown className="w-6 h-6 text-orange-600" />
        1. Le Prérequis Fondamental : Le Tri des Données
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            <strong>Attention :</strong> L'utilisation des sous-totaux automatiques est conditionnée par un tri préalable des données. L'omission de cette étape conduit à des résultats erronés .
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Pourquoi le tri est obligatoire
          </h5>
          
          <p className="text-gray-700 mb-4">
            L'outil fonctionne en détectant les <strong>ruptures de groupe</strong> dans la colonne spécifiée. Si les données ne sont pas triées, une même catégorie apparaît à plusieurs endroits, créant des sous-totaux partiels incorrects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="text-center">
              <div className="bg-red-50 p-4 rounded-lg mb-2">
                <h6 className="font-semibold text-red-800 mb-2">❌ Sans tri</h6>
                <p className="text-sm text-red-700">
                  Données dispersées → Multiples sous-totaux pour une même catégorie
                </p>
              </div>
              <ImageZoomable 
                src="/cours/intermediaire/lecon9/sans-tri-erreur.png" 
                alt="Exemple montrant des sous-totaux incorrects sans tri préalable"
                className="rounded-lg"
                style={{ maxHeight: 200 }}
              />
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 p-4 rounded-lg mb-2">
                <h6 className="font-semibold text-green-800 mb-2">✅ Avec tri</h6>
                <p className="text-sm text-green-700">
                  Données regroupées → Un seul sous-total par catégorie
                </p>
              </div>
              <ImageZoomable 
                src="/cours/intermediaire/lecon9/avec-tri-correct.png" 
                alt="Exemple montrant des sous-totaux corrects après tri"
                className="rounded-lg"
                style={{ maxHeight: 200 }}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              Procédure de tri adéquate
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h6 className="font-medium text-blue-800 mb-1">Tri simple (un niveau)</h6>
                <p className="text-sm text-blue-700">
                  Triez uniquement par la colonne de regroupement (ex: Région)
                </p>
              </div>
              <div>
                <h6 className="font-medium text-blue-800 mb-1">Tri multi-niveau</h6>
                <p className="text-sm text-blue-700">
                  Triez d'abord par le groupe externe, puis par le groupe interne
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION MISE EN ŒUVRE */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-green-600" />
        2. Créer des Sous-totaux en 4 Étapes 
      </h3>

      <div className="mb-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700">
            La procédure d'insertion des sous-totaux automatiques suit des étapes précises pour garantir un résultat correct.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              Préparation et tri
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Triez vos données par la colonne de regroupement. Vérifiez qu'il n'y a pas de lignes vides.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Données → Trier A→Z
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              Accès à l'outil
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Sélectionnez une cellule dans vos données et accédez à l'outil Sous-total.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Données → Plan → Sous-total
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              Configuration
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Choisissez la colonne de regroupement, la fonction de calcul et les colonnes cibles.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Région → SOMME → Montant
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                4
              </div>
              Options avancées
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Activez "Saut de page entre les groupes" pour l'impression ou désactivez "Remplacer" pour l'imbrication.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Saut de page ✓ | Remplacer ✗
            </div>
          </div>
        </div>

        <ImageZoomable 
          src="/cours/intermediaire/lecon9/boite-dialogue-sous-total.png" 
          alt="Capture d'écran de la boîte de dialogue Sous-total avec explication des paramètres"
          className="rounded-lg mb-4"
          style={{ maxHeight: 400 }}
        />
      </div>

      {/* SECTION PLAN HIÉRARCHIQUE */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Layers className="w-6 h-6 text-purple-600" />
        3. Maîtriser le Plan Hiérarchique
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <p className="text-gray-700 mb-4">
            L'un des avantages majeurs des sous-totaux automatiques est la création d'un <strong>plan hiérarchique</strong> qui permet de naviguer rapidement entre différentes vues de vos données .
          </p>
          
          <ImageZoomable 
            src="/cours/intermediaire/lecon9/plan-hierarchique.png" 
            alt="Schéma montrant les différents niveaux du plan hiérarchique avec les symboles 1, 2, 3 et + -"
            className="mb-6 rounded-lg"
            style={{ maxHeight: 300 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                1
              </div>
              <h5 className="font-semibold text-blue-800 mb-1">Niveau 1</h5>
              <p className="text-sm text-blue-700">
                Vue la plus synthétique : <strong>Total général uniquement</strong>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                2
              </div>
              <h5 className="font-semibold text-green-800 mb-1">Niveau 2</h5>
              <p className="text-sm text-green-700">
                Vue intermédiaire : <strong>Sous-totaux + Total général</strong>
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                3
              </div>
              <h5 className="font-semibold text-purple-800 mb-1">Niveau 3</h5>
              <p className="text-sm text-purple-700">
                Vue détaillée : <strong>Toutes les données brutes</strong>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Navigation interactive avec + et -
            </h5>
            <p className="text-sm text-yellow-700">
              Utilisez les symboles <strong>+</strong> et <strong>-</strong> pour développer ou réduire individuellement chaque groupe, 
              permettant une exploration ciblée de vos données sans affecter les autres groupes.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION FONCTION SOUS.TOTAL */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-indigo-600" />
        4. Comprendre la Fonction SOUS.TOTAL
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-indigo-600" />
            L'avantage dynamique de SOUS.TOTAL
          </h5>
          
          <p className="text-gray-700 mb-4">
            Contrairement aux fonctions standards comme <code>SOMME()</code>, la fonction <code>SOUS.TOTAL()</code> possède une intelligence unique : 
            elle <strong>ignore automatiquement les lignes masquées</strong>, que ce soit par filtrage ou par réduction du plan hiérarchique .
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro (inclut masquées)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro (ignore masquées)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fonction</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">1</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">101</td>
                  <td className="px-4 py-3 text-sm text-gray-600">MOYENNE</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Calcule la moyenne des valeurs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">2</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">102</td>
                  <td className="px-4 py-3 text-sm text-gray-600">NB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Compte les cellules numériques</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">9</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">109</td>
                  <td className="px-4 py-3 text-sm text-gray-600">SOMME</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Calcule la somme des valeurs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">4</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">104</td>
                  <td className="px-4 py-3 text-sm text-gray-600">MAX</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Trouve la valeur maximale</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">💡 Comment Excel utilise SOUS.TOTAL</h5>
            <p className="text-sm text-blue-700">
              L'outil Sous-total automatique utilise généralement les codes <strong>101-111</strong> qui ignorent à la fois les lignes masquées 
              par filtrage ET par le plan hiérarchique, garantissant des calculs toujours cohérents avec ce qui est visible à l'écran.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION TECHNIQUES AVANCÉES */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-yellow-600" />
        5. Techniques Avancées des Professionnels 
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-yellow-600" />
                  Sous-totaux imbriqués
                </h5>
                <p className="text-sm text-yellow-700">
                  <strong>Étape cruciale :</strong> Pour ajouter un second niveau de sous-totaux, 
                  <strong>désactivez "Remplacer les sous-totaux actuels"</strong> dans la boîte de dialogue.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Sauts de page automatiques
                </h5>
                <p className="text-sm text-blue-700">
                  Cochez "Saut de page entre les groupes" pour générer automatiquement des documents imprimables 
                  séparés par catégorie, idéal pour les rapports par commercial ou région.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-green-600" />
                  Maintenance facile
                </h5>
                <p className="text-sm text-green-700">
                  Pour tout supprimer : <strong>Données → Plan → Sous-total → Supprimer tout</strong>. 
                  N'essayez pas de supprimer manuellement les lignes !
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-purple-600" />
                  Compatibilité avec les filtres
                </h5>
                <p className="text-sm text-purple-700">
                  Les sous-totaux se mettent à jour automatiquement quand vous appliquez un filtre, 
                  affichant uniquement les totaux des données visibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION COMPARAISON TCD */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-red-600" />
        6. Choix Stratégique : Sous-totaux vs Tableaux Croisés Dynamiques
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caractéristique</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sous-totaux Automatiques</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tableaux Croisés Dynamiques</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Prérequis</td>
                  <td className="px-4 py-3 text-sm text-red-600">
                    <strong>Tri obligatoire</strong> de la source
                  </td>
                  <td className="px-4 py-3 text-sm text-green-600">
                    Aucun tri nécessaire
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Impact sur les données</td>
                  <td className="px-4 py-3 text-sm text-red-600">
                    Modifie la source (insertion de lignes)
                  </td>
                  <td className="px-4 py-3 text-sm text-green-600">
                    Aucune modification de la source
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Flexibilité</td>
                  <td className="px-4 py-3 text-sm text-orange-600">
                    Limitée, doit être recréé pour changer
                  </td>
                  <td className="px-4 py-3 text-sm text-green-600">
                    Excellente, glisser-déposer immédiat
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Usage recommandé</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    Rapports imprimables structurés, vérification rapide
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    Analyse exploratoire, tableaux de bord, synthèses multiples
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">✅ Choisir les SOUS-TOTAUX quand :</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Besoin de rapports imprimables avec sauts de page</li>
                <li>• Vérification rapide avec contexte des détails</li>
                <li>• Source stable et analyse simple</li>
                <li>• Structure hiérarchique fixe</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">🔀 Choisir les TCD quand :</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Analyse exploratoire et itérative</li>
                <li>• Besoin de flexibilité (changements fréquents)</li>
                <li>• Environnement collaboratif</li>
                <li>• Analyses multidimensionnelles complexes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* EXERCICE PRATIQUE */}
      <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        EXERCICE PRATIQUE : RAPPORT COMMERCIAL STRUCTURÉ
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Créez un rapport commercial complet avec sous-totaux imbriqués et structure hiérarchique pour analyser les performances par région et commercial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier avec les données commerciales à structurer :
          </p>
          <a href="/cours/intermediaire/lecon9/exercice_sous_totaux.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Solution détaillée et bonnes pratiques :
          </p>
          <PremiumVideo
            url="/cours/intermediaire/lecon9/correction-sous-totaux.mp4"
            title="Correction de l'exercice sur les Sous-totaux Automatiques"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-6 md:rounded-lg rounded-none mb-8">
        <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-indigo-600" />
          Consignes de l'exercice
        </h3>

        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-green-600" />
              Niveau 1 : Sous-totaux par région
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Triez par région</p>
                  <p className="text-gray-600 text-sm">Commencez par trier vos données par la colonne "Région"</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Appliquez les sous-totaux</p>
                  <p className="text-gray-600 text-sm">Insérez des sous-totaux SOMME pour le "Chiffre d'affaires" à chaque changement de région</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Testez le plan hiérarchique</p>
                  <p className="text-gray-600 text-sm">Naviguez entre les niveaux 1, 2 et 3 pour vérifier la structure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              Niveau 2 : Sous-totaux imbriqués par commercial
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Tri multi-niveau</p>
                  <p className="text-gray-600 text-sm">Triez d'abord par région, puis par nom du commercial</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Option cruciale</p>
                  <p className="text-gray-600 text-sm">Désactivez "Remplacer les sous-totaux actuels"</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Sous-totaux imbriqués</p>
                  <p className="text-gray-600 text-sm">Ajoutez des sous-totaux SOMME à chaque changement de commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon9 onResult={onResult} />
      </div>
    </div>
  );
}