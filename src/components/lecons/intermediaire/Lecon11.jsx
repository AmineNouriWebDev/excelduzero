import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon11 from "../../quizz/intermediaire/QuizLecon11";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  LineChart,
  BarChart3,
  TrendingUp,
  Zap,
  Settings,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Download,
  Video,
  ChevronDown,
  ChevronUp,
  Sparkles,
  LayoutGrid,
  Filter,
  Eye,
  EyeOff,
  Palette,
  Type,
  GanttChart,
  MoveRight,
  Clock,
  BarChart,
  Activity,
  ArrowRight,
  RotateCcw,
  Maximize2,
  Minimize2
} from "lucide-react";

export default function Lecon11({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    fondamentaux: true,
    types: true,
    personnalisation: true,
    dynamiques: true,
    tableaux: true,
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
      {/* En-tête avec dégradé moderne */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Activity className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Sparklines Avancés</h1>
                <p className="text-xl opacity-90 mt-2">Mini-graphiques, Maximum d'Impact</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3 text-lg font-semibold">
              Leçon 11 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <LayoutGrid className="w-6 h-6 mb-2" />
              <p className="font-semibold">Intégration Cellulaire</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-6 h-6 mb-2" />
              <p className="font-semibold">Visualisation en Temps Réel</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 mb-2" />
              <p className="font-semibold">Tableaux de Bord Dynamiques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            Maîtriser les Sparklines Professionnels
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  Au-delà des Bases : L'art de la Micro-Visualisation
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les Sparklines ne sont pas de simples mini-graphiques. Ce sont des outils puissants qui transforment 
                  vos tableaux de données en tableaux de bord interactifs et professionnels.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Intégration native dans les cellules</h4>
                      <p className="text-gray-600 text-sm">Visualisations contextuelles sans perturber la mise en page</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Mise à jour automatique</h4>
                      <p className="text-gray-600 text-sm">Réagissent instantanément aux modifications des données</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Personnalisation avancée</h4>
                      <p className="text-gray-600 text-sm">Points marqueurs, couleurs conditionnelles, échelles dynamiques</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/sparklines-tableau-dashboard.png" 
                  alt="Tableau de bord professionnel avec Sparklines intégrés"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                  Exemple de tableau de bord pro
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Fondamentaux Avancés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('fondamentaux')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            1. Fondamentaux Avancés des Sparklines
          </h2>
          {expandedSections.fondamentaux ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.fondamentaux && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <LayoutGrid className="w-6 h-6 text-blue-600" />
                Architecture et Gestion des Plages
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Plages Dynamiques Intelligentes</h4>
                  <p className="text-gray-700 mb-4">
                    Maîtrisez l'art de créer des Sparklines qui s'adaptent automatiquement à l'ajout de nouvelles données.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Tables Excel structurées</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Formules OFFSET dynamiques</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Noms définis avec COUNT</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon11/plages-dynamiques-sparklines.gif" 
                    alt="Animation montrant les Sparklines s'adaptant aux nouvelles données"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Astuce Pro : Gestion des erreurs
                </h4>
                <p className="text-blue-700">
                  Utilisez <code className="bg-blue-100 px-1 rounded">SIERREUR()</code> dans vos plages de données pour éviter 
                  que les Sparklines n'affichent des erreurs lorsque vos formules échouent.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Références absolues vs relatives</h4>
                <p className="text-gray-700 mb-4">
                  Comprenez quand utiliser des références absolues ($A$1) pour des Sparklines identiques, 
                  et des références relatives (A1) pour des visualisations adaptées à chaque ligne.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/references-absolues-relatives.png" 
                  alt="Comparaison entre références absolues et relatives pour Sparklines"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Gestion des groupes</h4>
                <p className="text-gray-700 mb-4">
                  Contrôlez plusieurs Sparklines simultanément grâce aux groupes, tout en préservant 
                  les personnalisations individuelles lorsque nécessaire.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/gestion-groupes-sparklines.gif" 
                  alt="Démonstration de la gestion des groupes de Sparklines"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Types de Sparklines et Cas d'Usage */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('types')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            2. Types de Sparklines & Applications Stratégiques
          </h2>
          {expandedSections.types ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.types && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Choisir le Bon Type pour Chaque Scénario
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border-2 border-blue-200 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <LineChart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sparklines Ligne</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Parfaits pour les tendances et évolutions temporelles
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Ventes mensuelles</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Performance boursière</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Suivi de projets</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-200 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sparklines Colonne</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Idéaux pour comparer des valeurs discrètes
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Comparaison produits</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Performance équipes</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Analyse régionale</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-200 text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sparklines Gain/Perte</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Excellents pour les données binaires ou de seuil
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Objectifs atteints</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Alertes seuils</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Statut projets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Cas d'Usage Avancés</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Tableaux de Bord RH</h5>
                    <p className="text-sm text-gray-600">
                      Suivi des performances individuelles avec tendances sur 12 mois
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Analyse Financière</h5>
                    <p className="text-sm text-gray-600">
                      Évolution des indicateurs clés directement dans les rapports
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Suivi de Production</h5>
                    <p className="text-sm text-gray-600">
                      Tendance des indicateurs qualité et productivité
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/cas-usage-sparklines.png" 
                  alt="Exemples concrets d'utilisation des Sparklines dans différents secteurs"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Personnalisation Avancée */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('personnalisation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Palette className="w-6 h-6 text-orange-600" />
            </div>
            3. Personnalisation Avancée & Design Pro
          </h2>
          {expandedSections.personnalisation ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.personnalisation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-orange-600" />
                Maîtrise des Points Marqueurs
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Points stratégiques à mettre en évidence</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">Point haut</p>
                        <p className="text-xs text-gray-600">Maximum de la série</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">Point bas</p>
                        <p className="text-xs text-gray-600">Minimum de la série</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">Premier point</p>
                        <p className="text-xs text-gray-600">Valeur de départ</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">Dernier point</p>
                        <p className="text-xs text-gray-600">Valeur actuelle</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-800">Points négatifs</p>
                        <p className="text-xs text-gray-600">Valeurs sous un seuil</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon11/points-marqueurs-avances.gif" 
                    alt="Animation montrant la configuration des points marqueurs"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Couleurs conditionnelles avancées</h4>
                <p className="text-gray-700 mb-4">
                  Utilisez des couleurs intelligentes qui changent selon des conditions métier spécifiques.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/couleurs-conditionnelles.png" 
                  alt="Exemple de Sparklines avec couleurs conditionnelles"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Gestion des axes personnalisés</h4>
                <p className="text-gray-700 mb-4">
                  Contrôlez l'échelle verticale pour une visualisation cohérente entre différentes séries.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/axes-personnalises.gif" 
                  alt="Configuration des axes personnalisés pour Sparklines"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-orange-600" />
                Charte Graphique Professionnelle
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="flex justify-center gap-1 mb-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Cohérence des couleurs</p>
                  <p className="text-xs text-gray-600">Même palette dans tout le tableau de bord</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="flex justify-center items-center gap-1 mb-2">
                    <div className="w-1 h-3 bg-gray-800"></div>
                    <div className="w-2 h-4 bg-gray-800"></div>
                    <div className="w-3 h-5 bg-gray-800"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Épaisseurs adaptées</p>
                  <p className="text-xs text-gray-600">1.5pt pour l'équilibre parfait</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="flex justify-center gap-1 mb-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Points stratégiques</p>
                  <p className="text-xs text-gray-600">Seulement quand ils ajoutent de la valeur</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Sparklines Dynamiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('dynamiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-teal-600" />
            </div>
            4. Sparklines Dynamiques & Interactifs
          </h2>
          {expandedSections.dynamiques ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.dynamiques && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Filter className="w-6 h-6 text-teal-600" />
                Intégration avec les Contrôles de Filtrage
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Filtres interactifs en temps réel</h4>
                  <p className="text-gray-700 mb-4">
                    Combinez Sparklines avec des segments, listes déroulantes et barres de défilement 
                    pour créer des tableaux de bord entièrement interactifs.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Segments temporels</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Filter className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Filtres par région/produit</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Plages glissantes</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon11/filtres-interactifs.gif" 
                    alt="Démonstration des Sparklines réagissant aux filtres"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Formules conditionnelles avancées</h4>
                <p className="text-gray-700 mb-4">
                  Utilisez des formules complexes pour créer des Sparklines qui changent d'apparence 
                  selon des conditions métier spécifiques.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <code className="text-sm text-gray-800">
                    =SI(MAX(plage){">"}seuil, "Vert", "Rouge")
                  </code>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/formules-conditionnelles.png" 
                  alt="Exemple de formules conditionnelles pour Sparklines"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Intégration avec mise en forme conditionnelle</h4>
                <p className="text-gray-700 mb-4">
                  Combinez Sparklines et mise en forme conditionnelle des cellules pour 
                  des alertes visuelles puissantes.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon11/mfc-sparklines-combines.gif" 
                  alt="Combinaison Sparklines et mise en forme conditionnelle"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Tableaux de Bord avec Sparklines */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('tableaux')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <LayoutGrid className="w-6 h-6 text-indigo-600" />
            </div>
            5. Tableaux de Bord Professionnels
          </h2>
          {expandedSections.tableaux ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.tableaux && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <GanttChart className="w-6 h-6 text-indigo-600" />
                Architecture de Tableaux de Bord Efficaces
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Hiérarchie visuelle optimale</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Niveau 1 : Indicateurs clés</h5>
                      <p className="text-sm text-gray-600">Sparklines pour les KPI principaux avec tendance</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Niveau 2 : Analyse détaillée</h5>
                      <p className="text-sm text-gray-600">Sparklines par catégorie/produit/région</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Niveau 3 : Données de détail</h5>
                      <p className="text-sm text-gray-600">Sparklines pour le drill-down et l'analyse fine</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon11/architecture-tableau-dashboard.png" 
                    alt="Architecture d'un tableau de bord professionnel avec Sparklines"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Bonnes pratiques de design</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Espacement cohérent</p>
                      <p className="text-xs text-gray-600">Marge de 2-3 pixels autour des Sparklines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Alignement parfait</p>
                      <p className="text-xs text-gray-600">Tous les Sparklines alignés verticalement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Cohérence des échelles</p>
                      <p className="text-xs text-gray-600">Même échelle pour des comparaisons justes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Exemples sectoriels</h4>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800">📊 Tableau de bord commercial</p>
                    <p className="text-xs text-gray-600">Tendances des ventes par vendeur et produit</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800">🏭 Suivi de production</p>
                    <p className="text-xs text-gray-600">Performance des lignes de production</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800">💻 Monitoring IT</p>
                    <p className="text-xs text-gray-600">Tendances d'utilisation des ressources</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-indigo-600" />
                Workflow de Création Professionnel
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm font-medium text-gray-800">Structure des données</p>
                  <p className="text-xs text-gray-600">Préparez le tableau source</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm font-medium text-gray-800">Sparklines de base</p>
                  <p className="text-xs text-gray-600">Créez les visualisations</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm font-medium text-gray-800">Personnalisation</p>
                  <p className="text-xs text-gray-600">Ajustez couleurs et points</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    4
                  </div>
                  <p className="text-sm font-medium text-gray-800">Intégration</p>
                  <p className="text-xs text-gray-600">Ajoutez titres et contrôles</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-amber-600" />
            </div>
            Exercice Pratique : Tableau de Bord Commercial Avancé
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-amber-600" />
                Mission : Créer un Tableau de Bord avec Sparklines Avancés
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Entreprise Réel</h4>
                  <p className="text-gray-700 mb-4">
                    Vous êtes l'analyste commercial d'une entreprise multi-régionale. Créez un tableau de bord 
                    de performance des vendeurs avec Sparklines avancés pour le directeur commercial.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">30-45 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Intermédiaire avancé</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon11/tableau-dashboard-final.png" 
                    alt="Aperçu du tableau de bord final à créer"
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
                    Sparklines Ligne Avancés
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Tendance des ventes sur 12 mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Points marqueurs : Haut, Bas, Dernier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Couleur conditionnelle selon objectif</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Sparklines Colonne pour Objectifs
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Performance trimestrielle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Colonnes rouges si objectif non atteint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Ligne de référence à 100%</span>
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
                    Interactivité Avancée
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Segments pour filtrer par région</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Liste déroulante pour sélection produit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Plage dynamique auto-ajustable</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Design Professionnel
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Charte graphique cohérente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Alignement parfait des éléments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Titres et légendes explicites</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-amber-600" />
                  Fichier d'Exercice
                </h4>
                <p className="text-gray-700 mb-4">
                  Téléchargez le fichier avec les données commerciales structurées :
                </p>
                <a href="/cours/intermediaire/Lecon11/exercice-sparklines-avances.xlsx" 
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger l'Exercice (.xlsx)
                </a>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-indigo-600" />
                  Correction Détaillée
                </h4>
                <p className="text-gray-700 mb-4">
                  Solution complète avec explications des techniques avancées :
                </p>
                <PremiumVideo
                  url="/cours/intermediaire/Lecon11/correction-sparklines-avances.mp4"
                  title="Correction de l'exercice Sparklines Avancés"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon11 onResult={onResult} />
      </div>
    </div>
  );
}