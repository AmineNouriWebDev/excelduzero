import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon7 from "../../quizz/intermediaire/QuizLecon7";
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
  Search
} from "lucide-react";

export default function Lecon7({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <BarChart3 className="w-8 h-8 text-blue-600" />
        Leçon 7 - TABLEAUX CROISÉS DYNAMIQUES : L'outil ultime d'analyse de données Excel
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Les tableaux croisés dynamiques (TCD) sont l'une des fonctionnalités les plus puissantes d'Excel pour analyser et synthétiser rapidement de grandes quantités de données. Cette leçon vous apprendra à créer des tableaux de bord professionnels en quelques clics seulement .
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
              Comprendre le concept et l'utilité des tableaux croisés dynamiques
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer votre premier TCD en moins d'une minute 
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Organiser les champs dans les zones Lignes, Colonnes, Valeurs et Filtres
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Personnaliser les calculs et les formats des valeurs
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser des astuces avancées pour optimiser vos analyses
            </span>
          </li>
        </ul>
      </div>

      {/* SECTION QU'EST-CE QU'UN TCD */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-blue-600" />
        Qu'est-ce qu'un Tableau Croisé Dynamique ?
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            Un tableau croisé dynamique est un outil de rapport interactif qui permet de <strong>calculer, synthétiser et analyser</strong> vos données afin de voir des comparaisons, des tendances et des modèles . Contrairement à un rapport statique, le TCD fournit une vue interactive de vos données .
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Avantages principaux</h5>
              <ul className="text-sm text-green-700 space-y-2">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Analyse rapide sans formules complexes</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mise à jour facile avec de nouvelles données</span>
                </li>
                <li className="flex items-start gap-2">
                  <Filter className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Filtrage et tri interactifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Création de tableaux de bord professionnels</span>
                </li>
              </ul>
            </div>
            
            <ImageZoomable 
              src="/cours/intermediaire/Lecon7/tcd-visualisation-concept.png" 
              alt="Schéma expliquant le concept de tableau croisé dynamique : données brutes transformées en rapport synthétique"
              className="rounded-lg"
              style={{ maxHeight: 250 }}
            />
          </div>
        </div>
      </div>

      {/* SECTION PRÉPARATION DES DONNÉES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6 text-orange-600" />
        1. Préparer vos données correctement
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            La qualité de votre tableau croisé dynamique dépend de la structure de vos données sources. Suivez ces règles pour des TCD optimaux.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-orange-600" />
            Règles d'or pour la structure des données
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">✅ Ce qu'il faut faire</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>En-têtes de colonnes uniques</strong> sur une seule ligne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Données en format tabulaire</strong> avec lignes et colonnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Types de données cohérents</strong> dans chaque colonne</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Utiliser un Tableau Excel</strong> pour des plages dynamiques </span>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">❌ Ce qu'il faut éviter</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Lignes ou colonnes vides</strong> dans les données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Sous-totaux intégrés</strong> aux données sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Cellules fusionnées</strong> dans le corps des données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Mélange de types</strong> dans une même colonne</span>
                </li>
              </ul>
            </div>
          </div>

          <ImageZoomable 
            src="/cours/intermediaire/Lecon7/structure-donnees-correcte.png" 
            alt="Exemple visuel montrant la structure correcte de données pour un TCD avec en-têtes clairs et données cohérentes"
            className="mt-4 rounded-lg"
            style={{ maxHeight: 300 }}
          />
        </div>
      </div>

      {/* SECTION CRÉATION DU TCD */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-green-600" />
        2. Créer votre premier TCD en 4 étapes 
      </h3>

      <div className="mb-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-gray-700">
            Vous pouvez créer un tableau croisé dynamique de base en moins d'une minute ! Suivez ces étapes simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              Sélectionnez vos données
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Cliquez sur n'importe quelle cellule dans vos données. Excel détectera automatiquement la plage.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Données → Tableau croisé dynamique
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              Choisissez l'emplacement
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Sélectionnez "Nouvelle feuille" pour un TCD propre ou "Feuille existante" pour l'intégrer.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Nouvelle feuille ✓
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              Glissez les champs
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Dans le volet des champs, faites glisser les champs vers les zones Lignes, Colonnes et Valeurs.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Produit → Lignes | Ventes → Valeurs
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                4
              </div>
              Personnalisez
            </h5>
            <p className="text-sm text-gray-600 mb-3">
              Ajustez les calculs, les filtres et la mise en forme selon vos besoins.
            </p>
            <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
              Somme → Moyenne | Ajouter filtre
            </div>
          </div>
        </div>

        <ImageZoomable 
          src="/cours/intermediaire/Lecon7/creation-tcd-animation.gif" 
          alt="Animation montrant la création d'un TCD étape par étape dans Excel"
          className="rounded-lg mb-4"
          style={{ maxHeight: 400 }}
        />

        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Astuce professionnelle : Utilisez un Tableau Excel 
          </h5>
          <p className="text-sm text-blue-700">
            Convertissez vos données en Tableau Excel (<code className="bg-blue-100 px-1 rounded">Ctrl + T</code>) avant de créer votre TCD. 
            Ainsi, lorsque vous ajouterez de nouvelles données, il suffira d'actualiser le TCD (<code className="bg-blue-100 px-1 rounded">Alt + F5</code>) 
            pour les voir apparaître automatiquement sans modifier la source.
          </p>
        </div>
      </div>

      {/* SECTION ZONES DU TCD */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Table className="w-6 h-6 text-purple-600" />
        3. Comprendre les 4 zones du TCD
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            Le volet des champs TCD contient 4 zones principales qui déterminent la structure de votre rapport .
          </p>
          
          <ImageZoomable 
            src="/cours/intermediaire/Lecon7/zones-tcd.png" 
            alt="Schéma des 4 zones du TCD : Filtres, Colonnes, Lignes et Valeurs avec explication de chaque zone"
            className="mb-6 rounded-lg"
            style={{ maxHeight: 400 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold text-gray-800 mb-1">📊 Lignes</h5>
                <p className="text-sm text-gray-600">
                  Définit les catégories qui s'affichent en lignes. Généralement des champs textuels comme Produit, Région, Catégorie.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold text-gray-800 mb-1">📈 Colonnes</h5>
                <p className="text-sm text-gray-600">
                  Définit les catégories qui s'affichent en colonnes. Souvent des dates, des périodes ou des sous-catégories.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h5 className="font-semibold text-gray-800 mb-1">🔢 Valeurs</h5>
                <p className="text-sm text-gray-600">
                  Contient les données numériques à synthétiser. Excel applique automatiquement SOMME ou NB.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-semibold text-gray-800 mb-1">🎛️ Filtres</h5>
                <p className="text-sm text-gray-600">
                  Permet de filtrer l'ensemble du rapport selon des critères spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION CALCULS AVANCÉS */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-indigo-600" />
        4. Personnaliser les calculs et valeurs
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-600" />
            Types de calcul disponibles
          </h5>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calcul</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilité</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exemple</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">SOMME</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Additionne les valeurs (défaut pour les nombres)</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Chiffre d'affaires total</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">MOYENNE</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Calcule la moyenne des valeurs</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Prix moyen de vente</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">NB</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Compte le nombre d'occurrences (défaut pour texte)</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Nombre de commandes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">MAX/MIN</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Trouve la valeur maximum ou minimum</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Meilleure et pire vente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Afficher les valeurs sous forme de pourcentages 
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Pourcentage du total général</h6>
              <div className="bg-gray-800 text-indigo-400 p-3 rounded font-mono text-sm mb-2">
                Clic droit → Options des champs → "% du total général"
              </div>
              <p className="text-sm text-gray-600">
                Montre la contribution de chaque élément au total global.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Pourcentage de la ligne/colonne</h6>
              <div className="bg-gray-800 text-indigo-400 p-3 rounded font-mono text-sm mb-2">
                Clic droit → Options des champs → "% de la ligne parente"
              </div>
              <p className="text-sm text-gray-600">
                Affiche la répartition en pourcentage dans chaque catégorie.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION ASTUCES AVANCÉES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-yellow-600" />
        5. Astuces avancées des professionnels 
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-yellow-600" />
                  Actualisation automatique
                </h5>
                <p className="text-sm text-yellow-700">
                  Après modification des données sources, <strong>clic droit → Actualiser</strong> pour mettre à jour le TCD. Avec un Tableau Excel, cette actualisation inclut automatiquement les nouvelles lignes .
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-600" />
                  Regroupement de dates
                </h5>
                <p className="text-sm text-blue-700">
                  <strong>Clic droit sur une date → Grouper</strong> pour regrouper par années, trimestres ou mois. Idéal pour les analyses temporelles.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Tri personnalisé
                </h5>
                <p className="text-sm text-green-700">
                  <strong>Clic droit sur une valeur → Trier</strong> pour classer du plus grand au plus petit ou inversement. Essentiel pour identifier les tops et flops.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Graphiques croisés dynamiques
                </h5>
                <p className="text-sm text-purple-700">
                  Créez des graphiques interactifs liés à vos TCD. Ils se mettent à jour automatiquement quand vous modifiez le TCD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION ERREURS COURANTES */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        6. Éviter les erreurs courantes
      </h3>

      <div className="mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Problèmes et solutions</h5>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h6 className="font-medium text-red-800 mb-1">Données manquantes après actualisation</h6>
                  <p className="text-sm text-gray-600">
                    Vérifiez que la source inclut toutes les nouvelles données. Utilisez un Tableau Excel pour éviter ce problème .
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h6 className="font-medium text-orange-800 mb-1">Cellules vides dans le TCD</h6>
                  <p className="text-sm text-gray-600">
                    <strong>Clic droit → Options → Afficher les cellules vides</strong> pour remplacer par 0 ou un texte.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h6 className="font-medium text-blue-800 mb-1">Mauvais type de calcul</h6>
                  <p className="text-sm text-gray-600">
                    <strong>Clic droit → Paramètres des champs</strong> pour changer SOMME en MOYENNE, NB, etc.
                  </p>
                </div>
              </div>
            </div>
            
            <ImageZoomable 
              src="/cours/intermediaire/Lecon7/erreurs-tcd-correction.png" 
              alt="Capture d'écran montrant comment corriger les erreurs courantes dans les TCD"
              className="rounded-lg"
              style={{ maxHeight: 300 }}
            />
          </div>
        </div>
      </div>

      {/* EXERCICE PRATIQUE */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        EXERCICE PRATIQUE : TABLEAU DE BORD COMMERCIAL
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Créez un tableau de bord commercial complet analysant les ventes par produit, région et période.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-indigo-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier avec les données commerciales à analyser :
          </p>
          <a href="/cours/intermediaire/Lecon7/exercice_tableau_croise_dynamique.xlsx" 
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
            url="/cours/intermediaire/Lecon7/correction-tcd.mp4"
            title="Correction de l'exercice sur les Tableaux Croisés Dynamiques"
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
              <Table className="w-5 h-5 text-green-600" />
              TCD 1 : Analyse des ventes par produit
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Produits dans la zone Lignes</p>
                  <p className="text-gray-600 text-sm">Affichez tous les produits dans les lignes du TCD</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Montant des ventes en Valeurs</p>
                  <p className="text-gray-600 text-sm">Affichez la somme des ventes pour chaque produit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Triez par ventes décroissantes</p>
                  <p className="text-gray-600 text-sm">Classez les produits du plus vendeur au moins vendeur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              TCD 2 : Analyse par région et trimestre
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Régions en Lignes, Dates en Colonnes</p>
                  <p className="text-gray-600 text-sm">Structurez le TCD pour voir l'évolution temporelle par région</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Groupez les dates par trimestres</p>
                  <p className="text-gray-600 text-sm">Utilisez la fonction de regroupement sur les dates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Ajoutez les pourcentages</p>
                  <p className="text-gray-600 text-sm">Affichez les valeurs en % du total de la ligne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon7 onResult={onResult} />
      </div>
    </div>
  );
}