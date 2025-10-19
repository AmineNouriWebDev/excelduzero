import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon8 from "../../quizz/intermediaire/QuizLecon8";
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
  Link,
  AlignLeft,
  Columns
} from "lucide-react";

export default function Lecon8({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Layers className="w-8 h-8 text-indigo-600" />
        Leçon 8 - CONSOLIDATION DE DONNÉES : Fusionnez vos rapports en un seul
      </h2>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          La **consolidation de données** est l'outil idéal pour synthétiser des informations identiques ou similaires provenant de plusieurs feuilles de calcul ou de plusieurs classeurs Excel distincts. Elle vous permet d'obtenir un **rapport récapitulatif centralisé** sans écrire une seule formule complexe .
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
              Comprendre la différence entre consolidation par **Position** et par **Catégorie**
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Préparer vos données sources pour une consolidation efficace 
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Consolider des données provenant de **plusieurs feuilles** ou **classeurs**
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer des **liens dynamiques** avec les données source 
            </span>
          </li>
        </ul>
      </div>
      
      {/* SECTION QU'EST-CE QUE LA CONSOLIDATION */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-indigo-600" />
        Qu'est-ce que la Consolidation de Données ?
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            La consolidation est un outil qui agrège les données d'une ou plusieurs plages (appelées **références**) dans une feuille de calcul unique de destination. L'agrégation s'effectue à l'aide d'une fonction de synthèse, la plus courante étant la **SOMME** .
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Quand l'utiliser ?</h5>
              <ul className="text-sm text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Rapports de ventes de plusieurs régions ou mois.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Link className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Fusionner des budgets ou des inventaires séparés.</span>
                </li>
              </ul>
            </div>
            
            <ImageZoomable 
              src="/cours/intermediaire/Lecon8/consolidation-concept.png" 
              alt="Schéma expliquant le concept de consolidation : plusieurs tables fusionnées en une seule somme"
              className="rounded-lg"
              style={{ maxHeight: 250 }}
            />
          </div>
        </div>
      </div>
      
      {/* SECTION PRÉPARATION ET MÉTHODES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6 text-orange-600" />
        1. Préparation et choix de la méthode
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Une bonne consolidation commence par des données sources bien structurées. Le choix de la méthode dépend ensuite de l'alignement de vos tableaux .
          </p>
        </div>
        
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-orange-600" />
          Les deux méthodes de consolidation
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <AlignLeft className="w-5 h-5 text-blue-600" />
              Consolidation par **Position**
            </h5>
            <p className="text-sm text-gray-600">
              Méthode la plus simple, utilisée uniquement si **toutes les données sources ont la même disposition** (même nombre de colonnes, mêmes étiquettes et dans le même ordre).
            </p>
            <div className="bg-blue-50 p-2 rounded text-xs mt-3 font-mono text-blue-700">
              Magasin A: B2:D10, Magasin B: B2:D10
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Columns className="w-5 h-5 text-blue-600" />
              Consolidation par **Catégorie** (Étiquettes)
            </h5>
            <p className="text-sm text-gray-600">
              Méthode plus flexible, utilisée lorsque **les colonnes/lignes sont dans un ordre différent** ou sont incomplètes. Excel utilise les **étiquettes** (en-têtes de colonnes/lignes) pour aligner les données.
            </p>
            <div className="bg-blue-50 p-2 rounded text-xs mt-3 font-mono text-blue-700">
              Nécessite de cocher "Ligne du haut" et/ou "Colonne de gauche"
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Préparation Cruciale pour la Catégorie
          </h5>
          <p className="text-sm text-red-700">
            Pour la consolidation par Catégorie, assurez-vous que les **étiquettes de colonnes et de lignes sont écrites exactement de la même manière** dans toutes les sources (majuscules, espaces, orthographe) pour qu'Excel puisse les identifier correctement .
          </p>
        </div>
      </div>
      
      {/* SECTION ÉTAPES DE CONSOLIDATION */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-green-600" />
        2. Les étapes de la consolidation
      </h3>

      <div className="mb-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700">
            L'outil de consolidation se trouve dans l'onglet **Données** et le groupe **Outils de données**.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <ol className="space-y-4 list-decimal list-inside text-gray-700">
            <li className="font-semibold">
              <span className="font-normal">Sélectionnez la cellule de destination</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Cliquez sur la cellule supérieure gauche de la feuille où vous souhaitez le résultat (par exemple, **A1** d'une nouvelle feuille).
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Ouvrez l'outil Consolider</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Allez dans l'onglet **Données** puis cliquez sur **Consolider** (<BarChart3 className="w-4 h-4 inline" />).
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Choisissez la fonction de synthèse</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Sélectionnez **SOMME**, **MOYENNE**, **NB**, etc., dans la liste déroulante **Fonction**.
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Ajoutez chaque référence de données</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Cliquez dans la zone **Référence**, sélectionnez la plage de la **première source** (incluez les étiquettes si vous consolidez par Catégorie), puis cliquez sur **Ajouter**. Répétez l'opération pour toutes les autres sources, même si elles se trouvent dans d'autres classeurs (utilisez le bouton **Parcourir** si besoin).
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Définissez les options (pour Catégorie)</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Si vous consolidez par Catégorie, cochez **Ligne du haut** et/ou **Colonne de gauche** sous *Utiliser des étiquettes dans* .
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Créez des liens si besoin</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Cochez **Lier aux données source** si vous souhaitez que la consolidation soit mise à jour automatiquement lorsque les données sources changent. (Attention : cela crée un plan) .
              </p>
            </li>
            <li className="font-semibold">
              <span className="font-normal">Validez et examinez le résultat</span>
              <p className="text-sm text-gray-600 ml-5 font-normal">
                Cliquez sur **OK**. Excel affichera le rapport consolidé, regroupant les valeurs des sources selon la fonction choisie.
              </p>
            </li>
          </ol>
        </div>
      </div>
      
      {/* SECTION LIENS ET PLAN */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Link className="w-6 h-6 text-purple-600" />
        3. Options avancées : Liens et Plan
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            L'option **Lier aux données source** est essentielle pour maintenir votre rapport à jour.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Link className="w-5 h-5 text-purple-600" />
            Lier aux données source
          </h4>
          <p className="text-gray-700 mb-4">
            Lorsque vous cochez cette option, Excel n'insère pas de valeurs statiques, mais des **formules** qui font référence aux cellules sources.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                **Avantage :** Le rapport consolidé est mis à jour automatiquement si les données sources sont modifiées.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                **Inconvénient :** La consolidation crée automatiquement un **plan de groupe** à gauche, et n'est pas possible si la source et la destination sont sur la même feuille .
              </span>
            </li>
          </ul>
          
          <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Le Plan de Groupe
          </h4>
          <p className="text-gray-700">
            Les boutons **1, 2, 3...** qui apparaissent à gauche vous permettent de **développer** (<span className="font-bold">+</span>) ou de **réduire** (<span className="font-bold">-</span>) les lignes pour voir le détail des données source qui composent la valeur consolidée.
          </p>
        </div>
      </div>

      {/* SECTION CONSOLIDATION ET TCD (DIFFÉRENCE) */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-yellow-600" />
        4. Consolidation vs. TCD : Quand utiliser quoi ?
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-yellow-600" />
                Consolidation
              </h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>**Idéal pour :** Synthétiser des données ayant une structure similaire (ventes de plusieurs mois).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>**Flexibilité :** Limitée. Le rapport est statique ou lié par le plan.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Table className="w-5 h-5 text-blue-600" />
                Tableau Croisé Dynamique (TCD)
              </h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>**Idéal pour :** Analyser et explorer une grande table de données unique (ou plusieurs si Power Pivot est utilisé).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>**Flexibilité :** Élevée. Réorganisation facile des champs, filtres, tris, pourcentages.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* EXERCICE PRATIQUE */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        EXERCICE PRATIQUE : CONSOLIDATION DE BUDGETS
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Consolidez les données budgétaires de trois départements dans une feuille de synthèse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les budgets à consolider :
          </p>
          <a href="/cours/intermediaire/Lecon8/exercice_consolidation_budgets.xlsx" 
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
            Solution détaillée et bonnes pratiques :
          </p>
          <PremiumVideo
            url="/cours/intermediaire/Lecon8/correction-consolidation.mp4"
            title="Correction de l'exercice sur la Consolidation de Données"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-indigo-600" />
          Consignes de l'exercice
        </h3>

        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-green-600" />
              Tâche : Consolidation par Catégorie avec Liens
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Créer une feuille "Synthèse"</p>
                  <p className="text-gray-600 text-sm">Préparez une feuille vide pour la consolidation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Consolider par Catégorie (Étiquettes)</p>
                  <p className="text-gray-600 text-sm">Utilisez les étiquettes pour regrouper les données des feuilles "Budget A", "Budget B" et "Budget C".</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Activer les liens vers la source</p>
                  <p className="text-gray-600 text-sm">Cochez l'option pour créer un plan et lier la synthèse aux données originales.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Vérifiez les totaux</p>
                  <p className="text-gray-600 text-sm">Développez le plan et assurez-vous que les totaux correspondent bien à la somme des différents budgets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon8 onResult={onResult} />
      </div>
    </div>
  );
}