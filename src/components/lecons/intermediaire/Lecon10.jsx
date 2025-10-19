import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon10 from "../../quizz/intermediaire/QuizLecon10";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  LineChart,
  BarChart3,
  TrendingUp,
  Layers,
  Zap,
  Settings,
  Palette,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Download,
  Video,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Type,
  GanttChart,
  PieChart,
  ScatterChart,
  AreaChart,
  GitBranch,
  Cpu,
  Eye,
  EyeOff,
  Filter,
  MoveRight,
  Clock,
  Sparkles
} from "lucide-react";

export default function Lecon10({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    courbes: true,
    combinés: true,
    axes: true,
    tendances: true,
    interactivite: true,
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
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <LineChart className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Graphiques Avancés</h1>
                <p className="text-xl opacity-90 mt-2">Courbes, Combinés & Techniques Professionnelles</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3 text-lg font-semibold">
              Leçon 10 - Niveau Avancé
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 mb-2" />
              <p className="font-semibold">Visualisation Multi-Séries</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Layers className="w-6 h-6 mb-2" />
              <p className="font-semibold">Graphiques Combinés</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-6 h-6 mb-2" />
              <p className="font-semibold">Axes Secondaires</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            Maîtriser les Graphiques Avancés Excel
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  Au-delà des Bases : Visualisation Professionnelle
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Passez de simples graphiques à des tableaux de bord interactifs et des analyses complexes. 
                  Cette leçon vous révèle les techniques utilisées par les analystes de données professionnels.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Graphiques combinés multi-types</h4>
                      <p className="text-gray-600 text-sm">Associez histogrammes, courbes et aires dans un même visuel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Axes secondaires avancés</h4>
                      <p className="text-gray-600 text-sm">Maîtrisez l'art de représenter des échelles différentes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Courbes de tendance complexes</h4>
                      <p className="text-gray-600 text-sm">Linéaire, exponentielle, polynomiale - choisissez le bon modèle</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/graphique-combine-avance.png" 
                  alt="Exemple avancé de graphique combiné avec axes secondaires"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
              
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Graphiques en Courbes Avancés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('courbes')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            1. Graphiques en Courbes Avancés
          </h2>
          {expandedSections.courbes ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.courbes && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <LineChart className="w-6 h-6 text-purple-600" />
                Techniques Multi-Séries Professionnelles
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Gestion des séries multiples</h4>
                  <p className="text-gray-700 mb-4">
                    Apprenez à superposer intelligemment jusqu'à 12 séries de données sans perdre en lisibilité.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Séries principales (2-3 maximum)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">Séries contextuelles (références, moyennes)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Séries d'alerte (seuils, objectifs)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon10/multi-series-courbes.gif" 
                    alt="Animation montrant l'ajout de séries multiples dans un graphique en courbes"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Astuce de Pro : Hiérarchie visuelle
                </h4>
                <p className="text-blue-700">
                  Utilisez des épaisseurs de ligne différentes : <strong>2.25 pt</strong> pour les séries principales, 
                  <strong>1.5 pt</strong> pour les séries secondaires, et <strong>1 pt</strong> pour les séries de référence.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Personnalisation avancée des marqueurs</h4>
                <p className="text-gray-700 mb-4">
                  Transformez des points standards en indicateurs significatifs avec des formes, couleurs et tailles variables.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/marqueurs-personnalises.png" 
                  alt="Exemples de marqueurs personnalisés pour graphiques en courbes"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Lissage professionnel des courbes</h4>
                <p className="text-gray-700 mb-4">
                  Passez du lissage basique aux courbes de Bézier pour des visualisations plus élégantes.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/comparaison-lissage.gif" 
                  alt="Comparaison entre courbe standard et courbe lissée professionnellement"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Graphiques Combinés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('combinés')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Layers className="w-6 h-6 text-orange-600" />
            </div>
            2. Graphiques Combinés Avancés
          </h2>
          {expandedSections.combinés ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.combinés && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-orange-600" />
                Combinaisons Créatives et Efficaces
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Histogramme + Courbe : Le Classique</h4>
                  <p className="text-gray-700 mb-4">
                    Parfait pour montrer à la fois les volumes (histogramme) et les tendances (courbe) sur la même période.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Ventes mensuelles + Tendance</p>
                        <p className="text-sm text-gray-600">Histogramme pour le volume, courbe pour l'évolution</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Budget vs Réel</p>
                        <p className="text-sm text-gray-600">Histogramme pour le budget, courbe pour le réalisé</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon10/histogramme-courbe-combine.gif" 
                    alt="Animation création graphique combiné histogramme-courbe"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/aire-histogramme-combine.png" 
                  alt="Graphique combiné aires et histogrammes"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Aires Empilées + Courbes</h4>
                <p className="text-gray-700 mb-4">
                  Idéal pour visualiser la composition détaillée (aires) et les totaux ou objectifs (courbes).
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">Cas d'usage typique</h5>
                  <p className="text-orange-700 text-sm">
                    Répartition des canaux marketing (aires) avec objectif de croissance global (courbe)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Méthode Rapide : Graphique Combiné en 4 Étapes
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm font-medium text-gray-800">Créez un graphique de base</p>
                  <p className="text-xs text-gray-600">Avec toutes vos séries</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm font-medium text-gray-800">Clic droit → Type de graphique</p>
                  <p className="text-xs text-gray-600">Sur la série à modifier</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm font-medium text-gray-800">Choisissez Combiné</p>
                  <p className="text-xs text-gray-600">Sélectionnez le type secondaire</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    4
                  </div>
                  <p className="text-sm font-medium text-gray-800">Activez l'axe secondaire</p>
                  <p className="text-xs text-gray-600">Si échelles différentes</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Maîtrise des Axes Secondaires */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('axes')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-teal-600" />
            </div>
            3. Axes Secondaires : Techniques Avancées
          </h2>
          {expandedSections.axes ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.axes && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-teal-600" />
                Synchronisation Intelligente des Échelles
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Quand utiliser un axe secondaire ?</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-800">Unités différentes</span>
                      </div>
                      <p className="text-sm text-gray-600">€ vs %, quantités vs pourcentages, etc.</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-800">Échelles très éloignées</span>
                      </div>
                      <p className="text-sm text-gray-600">Milliers vs millions, petites vs grandes valeurs</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-800">Séries de nature différente</span>
                      </div>
                      <p className="text-sm text-gray-600">Ventes vs marge, température vs précipitations</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon10/axe-secondaire-demonstration.gif" 
                    alt="Démonstration de l'ajout et configuration d'un axe secondaire"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Configuration avancée</h4>
                <p className="text-gray-700 mb-4">
                  Maîtrisez les paramètres fins pour des visualisations parfaitement synchronisées.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium text-gray-700">Échelle logarithmique</span>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">Expert</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium text-gray-700">Inverser l'ordre des valeurs</span>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Avancé</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium text-gray-700">Alignement des zéros</span>
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Pro</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Pièges à éviter</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Échelles trompeuses</p>
                      <p className="text-sm text-red-600">Des rapports d'échelle incorrects peuvent induire en erreur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-yellow-800">Surcharge visuelle</p>
                      <p className="text-sm text-yellow-600">Trop de séries sur axes différents rendent le graphique illisible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Courbes de Tendance Avancées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('tendances')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            4. Courbes de Tendance & Projections
          </h2>
          {expandedSections.tendances ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.tendances && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <GanttChart className="w-6 h-6 text-purple-600" />
                Modèles Mathématiques pour la Prédiction
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Linéaire</h4>
                  <div className="text-center mb-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                      y = ax + b
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Croissance constante, tendance régulière
                  </p>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      R² élevé = Bon ajustement
                    </span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Exponentielle</h4>
                  <div className="text-center mb-3">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                      y = ae^bx
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Croissance accélérée, phénomènes viraux
                  </p>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                      Données positives uniquement
                    </span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Polynomiale</h4>
                  <div className="text-center mb-3">
                    <div className="bg-red-100 text-red-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                      y = ax² + bx + c
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Variations complexes, pics et creux
                  </p>
                  <div className="mt-3 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      Ordre 2-4 recommandé
                    </span>
                  </div>
                </div>
              </div>
              
              <ImageZoomable 
                src="/cours/intermediaire/Lecon10/comparaison-tendances.gif" 
                alt="Animation comparant les différents types de courbes de tendance"
                className="rounded-xl shadow-lg mb-6"
              />
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Guide de Sélection du Modèle
              </h4>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utilisation</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">R² Minimum</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Complexité</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Linéaire</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Tendance régulière</td>
                      <td className="px-4 py-3 text-sm text-green-600">0.7</td>
                      <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Exponentielle</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Croissance rapide</td>
                      <td className="px-4 py-3 text-sm text-yellow-600">0.8</td>
                      <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Polynomiale (Ordre 2)</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Courbe avec un virage</td>
                      <td className="px-4 py-3 text-sm text-orange-600">0.85</td>
                      <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Interactivité Avancée */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('interactivite')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            5. Interactivité & Tableaux de Bord
          </h2>
          {expandedSections.interactivite ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.interactivite && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-indigo-600" />
                Graphiques Dynamiques et Interactifs
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Sélecteurs de Plage Dynamique</h4>
                  <p className="text-gray-700 mb-4">
                    Créez des graphiques qui s'adaptent automatiquement lorsque vous ajoutez de nouvelles données.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Tables Excel</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Noms dynamiques</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Formules OFFSET</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon10/plages-dynamiques.gif" 
                    alt="Démonstration des plages dynamiques pour graphiques auto-actualisants"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Contrôles de Filtrage</h4>
                <p className="text-gray-700 mb-4">
                  Ajoutez des listes déroulantes et des barres de défilement pour créer des tableaux de bord interactifs.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/controles-filtrage.png" 
                  alt="Exemple de contrôles de filtrage pour graphiques interactifs"
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Mise en Forme Conditionnelle</h4>
                <p className="text-gray-700 mb-4">
                  Faites réagir visuellement vos graphiques aux seuils et conditions métier.
                </p>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon10/formatage-conditionnel.gif" 
                  alt="Animation montrant la mise en forme conditionnelle des graphiques"
                  className="rounded-xl shadow-lg"
                />
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
                <BarChart3 className="w-6 h-6 text-amber-600" />
                Mission : Créer un Tableau de Bord Interactif
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Réel d'Entreprise</h4>
                  <p className="text-gray-700 mb-4">
                    Vous êtes l'analyste commercial d'une entreprise multi-produits. Créez un tableau de bord complet 
                    pour le comité de direction avec visualisations avancées et interactivité.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">45-60 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Avancé - Techniques professionnelles</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon10/tableau-bord-final.png" 
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
                    Graphique Combiné Principal
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Histogramme groupé : Ventes par produit et région</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Courbe superposée : Objectifs de vente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Axe secondaire : Pourcentage de réalisation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Analyse des Tendances
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Courbe de tendance polynomiale (ordre 3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Projection sur 6 mois avec intervalle de confiance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Affichage du R² et de l'équation</span>
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
                      <span>Liste déroulante de sélection de région</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Curseur de période (12 mois glissants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Boutons d'export PDF/PPT</span>
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
                <a href="/cours/intermediaire/Lecon10/exercice-tableau-bord.xlsx" 
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
                  url="/cours/intermediaire/Lecon10/correction-tableau-bord.mp4"
                  title="Correction de l'exercice Tableau de Bord Avancé"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon10 onResult={onResult} />
      </div>
    </div>
  );
}