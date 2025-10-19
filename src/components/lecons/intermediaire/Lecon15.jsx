import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon15 from "../../quizz/intermediaire/QuizLecon15";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Tag,
  CheckCircle,
  AlertTriangle,
  Zap,
  Settings,
  Filter,
  Code,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Crosshair,
  Download,
  Video,
  Lightbulb,
  Users,
  Database,
  RefreshCw,
  Copy,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  BarChart3,
  GitBranch,
  Cpu,
  Clock,
  Sparkles,
  Bookmark,
  Navigation,
  Layers,
  Target,
  Table,
  GitCompare,
  Trello
} from "lucide-react";

export default function Lecon15({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    scenario_manager: true,
    goal_seek: true,
    data_tables: true,
    bonnes_pratiques: true,
    exercice: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* En-tête avec dégradé moderne - Nouvelle palette de couleurs */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <GitCompare className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Analyse de Scénarios Excel</h1>
                <p className="text-xl opacity-90 mt-2">Explorez l'avenir, Préparez vos décisions, Maîtrisez l'incertain</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3 text-lg font-semibold">
              Leçon 15 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Trello className="w-6 h-6 mb-2" />
              <p className="font-semibold">Gestionnaire de Scénarios</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-6 h-6 mb-2" />
              <p className="font-semibold">Valeur Cible (Goal Seek)</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Table className="w-6 h-6 mb-2" />
              <p className="font-semibold">Tables de Données</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            L'Art de l'Exploration : Pourquoi l'Analyse de Scénarios est Essentielle
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                  Anticiper au lieu de Subir : La Puissance du "Et Si..."
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  L'analyse de scénarios vous permet d'explorer différentes situations en modifiant des valeurs clés pour voir comment ces changements affectent vos résultats. C'est un outil indispensable pour la planification financière, l'analyse de risque et la prise de décision éclairée:cite[1]:cite[2].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Évaluation de multiples possibilités</h4>
                      <p className="text-gray-600 text-sm">Testez des hypothèses de marché, des variations de coûts ou différents scénarios économiques sans risque:cite[7]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Optimisation des résultats</h4>
                      <p className="text-gray-600 text-sm">Trouvez les valeurs d'entrée nécessaires pour atteindre un objectif spécifique avec l'outil Valeur Cible:cite[1]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Visualisation d'impacts complexes</h4>
                      <p className="text-gray-600 text-sm">Analysez l'effet d'une ou deux variables sur vos résultats avec les Tables de Données:cite[2]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon15/analyse-scenarios-overview.png" 
                  alt="Diagramme montrant les trois types d'analyse de scénarios dans Excel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-semibold">3 Outils</span> complémentaires
                </div>
              </div>
            </div>

            {/* Tableau comparatif des outils */}
            <div className="mt-12 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Panorama des Outils d'Analyse de Scénarios Excel
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Outil</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Meilleur pour</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Variables</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Limites</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-orange-600">Gestionnaire de Scénarios</td>
                      <td className="p-4 text-gray-700">Comparer plusieurs jeux d'hypothèses complets</td>
                      <td className="p-4 text-gray-700">Jusqu'à 32 variables par scénario:cite[1]</td>
                      <td className="p-4 text-gray-700">Maximum 32 valeurs différentes par scénario</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Valeur Cible</td>
                      <td className="p-4 text-gray-700">Trouver l'entrée nécessaire pour un résultat souhaité</td>
                      <td className="p-4 text-gray-700">1 variable d'entrée:cite[1]</td>
                      <td className="p-4 text-gray-700">Ne fonctionne qu'avec une seule variable à la fois</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Tables de Données</td>
                      <td className="p-4 text-gray-700">Analyser l'impact d'1 ou 2 variables sur un résultat</td>
                      <td className="p-4 text-gray-700">1 ou 2 variables:cite[2]</td>
                      <td className="p-4 text-gray-700">Limité à deux variables maximum</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Gestionnaire de Scénarios */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('scenario_manager')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Trello className="w-6 h-6 text-blue-600" />
            </div>
            1. Gestionnaire de Scénarios : Comparez des Futurs Alternatifs
          </h2>
          {expandedSections.scenario_manager ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.scenario_manager && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                Création et Gestion de Scénarios Multiples
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Préparer son modèle pour les scénarios</h4>
                  <p className="text-gray-700 mb-4">
                    Avant de créer des scénarios, structurez votre feuille de calcul en identifiant clairement les cellules variables (entrées) et les cellules de résultats (sorties):cite[5].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étapes de configuration :</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Identifiez les <strong>cellules variables</strong> qui changeront selon les scénarios</li>
                        <li>Marquez les <strong>cellules de résultats</strong> qui affichent les impacts</li>
                        <li>Organisez votre modèle de façon claire et logique</li>
                        <li>Documentez vos hypothèses de base</li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-600" />
                        Bonne pratique : Nommez vos cellules variables
                      </h5>
                      <p className="text-amber-700 text-sm">
                        Utilisez des noms de plages pour vos cellules variables (ex: <code className="bg-amber-100 px-1 rounded">TAUX_CROISSANCE</code>, <code className="bg-amber-100 px-1 rounded">PRIX_VENTE</code>). Cela rendra la création de scénarios plus intuitive:cite[5].
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/modele-preparation-scenarios.png" 
                    alt="Modèle Excel préparé pour l'analyse de scénarios"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/creation-scenario.gif" 
                    alt="Animation montrant la création d'un scénario dans Excel"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Créer votre premier scénario</h4>
                  <p className="text-gray-700 mb-4">
                    Le Gestionnaire de scénarios vous permet d'enregistrer différents jeux de valeurs pour les mêmes cellules variables et de basculer entre eux facilement:cite[1].
                  </p>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Processus de création :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Allez dans <strong>Données → Analyse de scénarios → Gestionnaire de scénarios</strong></li>
                      <li>Cliquez sur <strong>Ajouter</strong> pour créer un nouveau scénario</li>
                      <li>Donnez un nom significatif (ex: "Croissance Optimiste")</li>
                      <li>Sélectionnez les cellules variables qui changeront</li>
                      <li>Entrez les valeurs pour ce scénario</li>
                      <li>Répétez pour créer d'autres scénarios</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Exemple concret :</h5>
                    <p className="text-sm text-gray-600">
                      Pour un budget, créez trois scénarios : <br/>
                      • <strong>Optimiste</strong> : Croissance à 8%, Coûts stables <br/>
                      • <strong>Realiste</strong> : Croissance à 4%, Coûts +2% <br/>
                      • <strong>Pessimiste</strong> : Croissance à 1%, Coûts +5%
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Rapport de synthèse des scénarios</h4>
                <p className="text-gray-700 mb-4">
                  Générez un rapport qui compare tous vos scénarios côte à côte dans une nouvelle feuille de calcul pour une analyse facile:cite[1].
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Création du rapport :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Ouvrez le Gestionnaire de scénarios</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Cliquez sur <strong>Synthèse</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Sélectionnez la cellule de résultat à comparer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Excel génère un tableau comparatif dans une nouvelle feuille</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-blue-600" />
                        Important : Actualisation des rapports
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Les rapports de scénarios ne se mettent pas à jour automatiquement. Si vous modifiez un scénario, vous devez générer un nouveau rapport de synthèse:cite[1].
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/Lecon15/rapport-synthese-scenarios.png" 
                      alt="Exemple de rapport de synthèse de scénarios"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Valeur Cible (Goal Seek) */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('goal_seek')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            2. Valeur Cible : Atteignez vos Objectifs en Reculant
          </h2>
          {expandedSections.goal_seek ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.goal_seek && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Navigation className="w-6 h-6 text-green-600" />
                Travaillez à l'Envers pour Trouver la Solution
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Quand utiliser la Valeur Cible ?</h4>
                  <p className="text-gray-700 mb-4">
                    La Valeur Cible (Goal Seek) est parfaite quand vous connaissez le résultat souhaité, mais ignorez la valeur d'entrée nécessaire pour l'atteindre:cite[1]:cite[7].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Cas d'usage typiques :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Calcul de prêt</strong> : Quel taux d'intérêt pour une mensualité donnée ?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Seuil de rentabilité</strong> : Combien d'unités vendre pour atteindre le profit cible ?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Fixation de prix</strong> : Quel prix pour obtenir une marge spécifique ?</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Objectifs de vente</strong> : Quel taux de croissance pour doubler le chiffre d'affaires ?</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        Limitation importante
                      </h5>
                      <p className="text-blue-700 text-sm">
                        La Valeur Cible ne fonctionne qu'avec une seule variable d'entrée. Pour plusieurs variables, utilisez le Solveur:cite[1].
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/valeur-cible-principe.png" 
                    alt="Schéma expliquant le principe de la valeur cible"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Application pas à pas : Calcul de prêt</h4>
                <p className="text-gray-700 mb-4">
                  Supposons que vous vouliez emprunter 200 000€ sur 20 ans et que vous ne pouvez pas payer plus de 1 100€ par mois. Quel taux d'intérêt pouvez-vous vous permettre ?
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Configuration :</h5>
                  <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                    <li>Créez votre modèle avec les cellules : <br/>
                      • <code className="bg-gray-100 px-1 rounded">B1</code> : Montant du prêt (200 000) <br/>
                      • <code className="bg-gray-100 px-1 rounded">B2</code> : Durée en mois (240) <br/>
                      • <code className="bg-gray-100 px-1 rounded">B3</code> : Taux d'intérêt annuel (variable à trouver) <br/>
                      • <code className="bg-gray-100 px-1 rounded">B4</code> : Mensualité <code className="bg-gray-100 px-1 rounded">=PMT(B3/12,B2,B1)</code>
                    </li>
                    <li>Allez dans <strong>Données → Analyse de scénarios → Valeur cible</strong></li>
                    <li>Remplissez la boîte de dialogue : <br/>
                      • <strong>Définir la cellule</strong> : <code className="bg-gray-100 px-1 rounded">B4</code> (mensualité) <br/>
                      • <strong>Pour la valeur</strong> : <code className="bg-gray-100 px-1 rounded">-1100</code> (valeur cible, négative car sortie de fonds) <br/>
                      • <strong>En modifiant la cellule</strong> : <code className="bg-gray-100 px-1 rounded">B3</code> (taux d'intérêt)
                    </li>
                    <li>Cliquez sur <strong>OK</strong> et Excel trouve la solution</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon15/valeur-cible-dialog.png" 
                  alt="Boîte de dialogue Valeur Cible d'Excel"
                  className="rounded-xl shadow-lg mb-4"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                    Conseil pratique : Format des valeurs
                  </h5>
                  <p className="text-green-700 text-sm">
                    Pour les calculs financiers, n'oubliez pas que les sorties de fonds (mensualités, investissements) sont négatives, et les entrées de fonds (revenus) sont positives dans les fonctions Excel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-green-600" />
                Exercice rapide : Seuil de Rentabilité
              </h4>
              <p className="text-gray-700 mb-4">
                <strong>Scenario :</strong> Votre produit a un prix de vente de 50€, des coûts fixes de 10 000€ et des coûts variables de 20€ par unité. Combien d'unités devez-vous vendre pour atteindre un profit de 15 000€ ?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-4 rounded-xl border-2 border-green-100">
                  <p className="font-semibold text-gray-800">Formule de profit :</p>
                  <code className="block bg-gray-100 p-2 rounded mt-1">
                    Profit = (Prix - CoûtVariable) × Quantité - CoûtsFixes
                  </code>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-blue-100">
                  <p className="font-semibold text-gray-800">Configuration Valeur Cible :</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Définir la cellule : <strong>Profit</strong></li>
                    <li>• Pour la valeur : <strong>15000</strong></li>
                    <li>• En modifiant : <strong>Quantité</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Tables de Données */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('data_tables')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Table className="w-6 h-6 text-purple-600" />
            </div>
            3. Tables de Données : Analyse Systématique à Grande Échelle
          </h2>
          {expandedSections.data_tables ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.data_tables && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-600" />
                Visualisez l'Impact de Centaines de Combinaisons en une Opération
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Table à une variable</h4>
                  <p className="text-gray-700 mb-4">
                    Analysez comment une seule variable affecte un ou plusieurs résultats. Parfait pour des analyses de sensibilité simples:cite[2].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Mise en place :</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Listez les valeurs à tester dans une colonne</li>
                        <li>Placez la formule de référence dans la cellule au-dessus de la première valeur</li>
                        <li>Sélectionnez la plage incluant les valeurs et la formule</li>
                        <li>Allez dans <strong>Données → Analyse de scénarios → Table de données</strong></li>
                        <li>Pour une colonne de valeurs, définissez la <strong>Cellule d'entrée en colonne</strong></li>
                        <li>Cliquez <strong>OK</strong> pour générer la table complète</li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-600" />
                        Exemple concret : Analyse de taux
                      </h5>
                      <p className="text-amber-700 text-sm">
                        Testez l'impact de différents taux de croissance (2%, 3%, 4%, 5%, 6%) sur votre chiffre d'affaires futur. La table affichera instantanément le résultat pour chaque taux.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/table-une-variable.png" 
                    alt="Exemple de table de données à une variable"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/table-deux-variables.png" 
                    alt="Exemple de table de données à deux variables"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Table à deux variables</h4>
                  <p className="text-gray-700 mb-4">
                    Analysez l'impact combiné de deux variables différentes sur un seul résultat. Idéal pour comprendre les interactions complexes:cite[2]:cite[5].
                  </p>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Configuration :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Placez les valeurs de la première variable dans une colonne</li>
                      <li>Placez les valeurs de la deuxième variable dans une ligne</li>
                      <li>La cellule en haut à gauche (intersection) contient la formule de référence</li>
                      <li>Sélectionnez toute la plage du tableau</li>
                      <li>Ouvrez <strong>Table de données</strong></li>
                      <li>Définissez <strong>Cellule d'entrée en ligne</strong> et <strong>Cellule d'entrée en colonne</strong></li>
                      <li>Validez pour générer la matrice complète des résultats</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Application marketing :</h5>
                    <p className="text-sm text-gray-600">
                      Analysez comment différentes combinaisons de <strong>prix</strong> (ligne) et de <strong>budgets publicitaires</strong> (colonne) affectent votre profit. Vous verrez immédiatement la combinaison optimale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Avantages et limitations des Tables de Données</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">✅ Points forts :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Calcul instantané</strong> de toutes les combinaisons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Visualisation claire</strong> sous forme matricielle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Mise à jour automatique</strong> si formules modifiées</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Peut gérer un <strong>grand nombre de valeurs</strong> différentes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                      <h5 className="font-semibold text-gray-800 mb-2">❌ Limitations :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>Limité à <strong>deux variables maximum</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>Ne montre qu'<strong>un seul résultat</strong> à la fois (table à 2 variables)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>Peut <strong>ralentir le classeur</strong> avec de très grandes tables</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span>Les cellules de résultat sont <strong>verrouillées en tant que formules matricielles</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Bonnes Pratiques et Intégration Avancée */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            4. Stratégies Avancées et Bonnes Pratiques
          </h2>
          {expandedSections.bonnes_pratiques ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.bonnes_pratiques && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-orange-600" />
                Combinez les Outils pour une Analyse Puissante
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Workflow professionnel d'analyse</h4>
                  <p className="text-gray-700 mb-4">
                    Utilisez les trois outils de manière complémentaire pour une analyse complète et robuste.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Processus recommandé :</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li><strong>Exploration large</strong> : Utilisez les Tables de Données pour identifier les plages de valeurs intéressantes</li>
                        <li><strong>Affinage</strong> : Utilisez la Valeur Cible pour trouver les valeurs précises d'objectifs spécifiques</li>
                        <li><strong>Documentation</strong> : Enregistrez les scénarios clés dans le Gestionnaire de Scénarios</li>
                        <li><strong>Présentation</strong> : Générez un rapport de synthèse pour partager avec les décideurs</li>
                      </ol>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600" />
                        Productivité : Raccourcis et astuces
                      </h5>
                      <p className="text-green-700 text-sm">
                        Utilisez des noms de plages pour vos cellules variables. Cela rend la configuration des analyses plus intuitive et moins sujette aux erreurs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/workflow-analyse.png" 
                    alt="Diagramme du workflow d'analyse de scénarios"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Éviter les pièges courants</h4>
                <p className="text-gray-700 mb-4">
                  Une analyse de scénarios efficace nécessite de la rigueur et une compréhension des limitations.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">❌ Erreurs à éviter :</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Oublier de documenter</strong> les hypothèses de chaque scénario</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Utiliser la Valeur Cible</strong> pour des problèmes à multiples variables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Créer des tables trop grandes</strong> qui ralentissent le classeur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Ne pas vérifier</strong> que les formules de base sont correctes avant l'analyse</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">✅ Bonnes pratiques :</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Toujours sauvegarder</strong> avant de lancer des analyses complexes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Utiliser des plages nommées</strong> pour plus de clarté</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Valider les résultats</strong> avec des calculs manuels sur quelques points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Documenter la méthodologie</strong> pour la reproductibilité</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Prochaines étapes : Solveur et analyses avancées</h4>
                <p className="text-gray-700 mb-4">
                  Quand vos analyses deviennent trop complexes pour les outils intégrés, passez au Solveur Excel.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Quand utiliser le Solveur ?</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Problèmes avec <strong>plusieurs variables</strong> d'entrée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Optimisation sous <strong>contraintes</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Recherche de <strong>solutions optimales</strong> complexes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Activation du Solveur
                    </h5>
                    <p className="text-blue-700 text-sm">
                      Le Solveur est un complément Excel. Activez-le via <strong>Fichier → Options → Compléments → Solveur</strong> puis gérez les compléments Excel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-red-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-pink-50 text-left hover:from-red-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <Crosshair className="w-6 h-6 text-red-600" />
            </div>
            Exercice Pratique : Plan d'Affaires et Analyse de Sensibilité
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-red-600" />
                Mission : Évaluer la Viabilité d'un Nouveau Produit
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario d'Entreprise Réel</h4>
                  <p className="text-gray-700 mb-4">
                    Vous êtes responsable du lancement d'un nouveau produit. Vous devez analyser la viabilité financière sous différentes hypothèses de marché et présenter une recommandation éclairée à la direction.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">60-90 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Intermédiaire à Avancé</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-purple-200">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Outils utilisés</p>
                        <p className="text-sm text-gray-600">Scénarios, Valeur Cible, Tables de Données</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon15/exercice-plan-affaires.png" 
                    alt="Aperçu du modèle de plan d'affaires pour l'exercice"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Modèle de Base et Hypothèses
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer un modèle avec : Prix de vente, Coûts variables, Coûts fixes, Volume de ventes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Calculer : Chiffre d'affaires, Marge, Profit, Seuil de rentabilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Documenter les hypothèses de base réalistes</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Analyse avec Gestionnaire de Scénarios
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer 3 scénarios : Optimiste, Réaliste, Pessimiste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Varier : Prix, Volume, Part de marché, Coûts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Générer un rapport de synthèse comparatif</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    Analyses Avancées avec Valeur Cible et Tables
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Utiliser Valeur Cible pour trouver le volume minimal pour la rentabilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer une table à 2 variables : Prix vs Volume sur le Profit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Identifier la combinaison Prix/Volume optimale</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Rapport et Recommandation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Synthétiser les résultats des différentes analyses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Identifier les risques principaux et opportunités</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Formuler une recommandation claire pour la direction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-600" />
                Critères de Réussite de l'Exercice
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">📊 Aspects techniques :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Modèle financier sans erreurs de formules</li>
                    <li>• 3 scénarios pertinents et bien documentés</li>
                    <li>• Utilisation correcte des trois outils d'analyse</li>
                    <li>• Tableaux de données fonctionnels et interprétables</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">💡 Analyse business :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Identification des variables les plus sensibles</li>
                    <li>• Évaluation réaliste des risques</li>
                    <li>• Recommandation étayée par les données</li>
                    <li>• Communication claire des résultats</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-red-600" />
                  Fichier d'Exercice
                </h4>
                <p className="text-gray-700 mb-4">
                  Téléchargez le modèle de plan d'affaires à analyser :
                </p>
                <a href="/cours/intermediaire/Lecon15/exercice-plan-affaires.xlsx" 
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger l'Exercice (.xlsx)
                </a>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-purple-600" />
                  Guide de Résolution
                </h4>
                <p className="text-gray-700 mb-4">
                  Solution complète avec explications détaillées :
                </p>
                <PremiumVideo
                  url="/cours/intermediaire/Lecon15/correction-analyse-scenarios.mp4"
                  title="Correction de l'analyse de scénarios pour un plan d'affaires"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon15 onResult={onResult} />
      </div>
    </div>
  );
}