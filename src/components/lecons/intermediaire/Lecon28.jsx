import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon28 from "../../quizz/intermediaire/QuizLecon28";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Clock,
  Calculator,
  BarChart3,
  Target,
  PieChart,
  Home,
  Car,
  GraduationCap,
  Lightbulb,
  Zap,
  AlertTriangle,
  CheckCircle,
  Play,
  Download,
  Calendar,
  Sigma
} from "lucide-react";

export default function Lecon28({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    concepts_base: true,
    tendance_centrale: true,
    dispersion: true,
    toolpak: true,
    cas_pratique: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec dégradé bleu/professionnel */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Statistiques Descriptives avec Excel</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez l'analyse et la synthèse de vos données</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 28 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Sigma className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Tendance Centrale</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Dispersion</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <PieChart className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Distribution</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cas Réels</p>
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
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            Pourquoi les Statistiques Descriptives dans Excel ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Donnez du sens à vos données</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les statistiques descriptives vous permettent de **résumer, organiser et visualiser** vos données de manière compréhensible. 
                  Elles transforment des données brutes en informations actionnables:cite[8].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <BarChart3 className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Analyse Commerciale</h4>
                      <p className="text-gray-600">Comprendre les performances de vente et les tendances clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <GraduationCap className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Études Académiques</h4>
                      <p className="text-gray-600">Analyser des résultats de recherche et des données expérimentales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <TrendingUp className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Contrôle Qualité</h4>
                      <p className="text-gray-600">Surveiller la variabilité des processus de production:cite[8]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon28/statistiques-overview.png" 
                  alt="Diagramme montrant le processus des statistiques descriptives"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Données brutes → Insights
                </div>
              </div>
            </div>

            {/* Section Avantages */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Les Avantages des Statistiques Descriptives</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">90%</div>
                  <p className="text-sm opacity-90">Gain de temps d'analyse:cite[3]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-90">Exactitude des calculs</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">⭐</div>
                  <p className="text-sm opacity-90">Décisions éclairées</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Concepts de Base */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('concepts_base')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Sigma className="w-6 h-6 text-indigo-600" />
            </div>
            Concepts de Base des Statistiques Descriptives
          </h2>
          {expandedSections.concepts_base ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.concepts_base && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Les Trois Piliers de l'Analyse Descriptive</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📊 Qu'est-ce que les statistiques descriptives ?</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Les **statistiques descriptives** résument et décrivent les caractéristiques principales 
                      d'un ensemble de données grâce à des mesures et visualisations:cite[8].
                    </p>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Tendance centrale :</span> Où se situent les données ?
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Dispersion :</span> Comment les données sont-elles réparties ?
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Forme de distribution :</span> Quelle est la forme générale ?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Applications Concrètes</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-red-600">Analyse de ventes :</span> Performance moyenne, meilleurs/moins bons mois
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-green-600">Contrôle qualité :</span> Variabilité des processus de production
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-purple-600">Études marché :</span> Profil type du client, comportements moyens
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-700">
                        <strong>Différence clé :</strong> Les statistiques descriptives résument ce qui s'est passé, 
                        tandis que les statistiques inférentielles font des prédictions:cite[8].
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon28/concepts-statistiques.gif" 
                  alt="Animation illustrant les concepts de statistiques descriptives"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">💡 Pourquoi Excel ?</h5>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Accessibilité :</strong> Disponible pour la plupart des professionnels</p>
                    <p><strong>Automatisation :</strong> Calculs complexes simplifiés par les fonctions</p>
                    <p><strong>Visualisation :</strong> Création rapide de graphiques et tableaux:cite[5]</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">📈 Avantage Clé</h5>
                  <p className="text-gray-600 text-sm">
                    <strong>"Les statistiques descriptives transforment des milliers de données brutes en quelques indicateurs compréhensibles."</strong> 
                    - Expert en analyse données
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau concepts */}
            <div className="bg-white rounded-2xl border-2 border-indigo-200 overflow-hidden">
              <div className="bg-indigo-500 p-4 text-white">
                <h4 className="font-bold text-lg">Les 3 Types de Mesures Statistiques</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Type de Mesure</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Objectif</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemples</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage Typique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Tendance Centrale</td>
                      <td className="p-4 text-gray-700">Identifier le centre des données</td>
                      <td className="p-4 text-gray-600">Moyenne, Médiane, Mode</td>
                      <td className="p-4 text-gray-600">Valeur "typique" ou "centrale"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Dispersion</td>
                      <td className="p-4 text-gray-700">Mesurer la variabilité</td>
                      <td className="p-4 text-gray-600">Écart-type, Variance, Étendue</td>
                      <td className="p-4 text-gray-600">Stabilité et cohérence</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-purple-600">Forme</td>
                      <td className="p-4 text-gray-700">Décrire la distribution</td>
                      <td className="p-4 text-gray-600">Asymétrie, Aplatissement</td>
                      <td className="p-4 text-gray-600">Comprendre les patterns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mesures de Tendance Centrale */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('tendance_centrale')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            Mesures de Tendance Centrale
          </h2>
          {expandedSections.tendance_centrale ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.tendance_centrale && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Trouvez le Centre de Vos Données</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">MOYENNE() - La Valeur Moyenne</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =MOYENNE(plage):cite[3]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Définition :</span> Somme des valeurs divisée par leur nombre
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Avantage :</span> Utilise toutes les données
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Inconvénient :</span> Sensible aux valeurs extrêmes
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 text-sm">
                        <strong>Exemple :</strong> =MOYENNE(B2:B100) calcule la moyenne des ventes quotidiennes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">MEDIANE() - La Valeur du Milieu</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =MEDIANE(plage):cite[3]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Définition :</span> Valeur qui sépare la série en deux parties égales
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Avantage :</span> Résiste aux valeurs extrêmes
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Usage :</span> Revenus, prix immobiliers (données asymétriques)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">MODE() - La Valeur la Plus Fréquente</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =MODE.SIMPLE(plage):cite[3]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Définition :</span> Valeur qui apparaît le plus fréquemment
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Usage :</span> Tailles de vêtements, scores les plus communs
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Note :</span> Un ensemble peut avoir plusieurs modes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon28/tendance-centrale-demo.gif" 
                  alt="Animation comparant moyenne, médiane et mode"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Quand Utiliser Quelle Mesure ?</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Moyenne :</strong> Données symétriques sans valeurs extrêmes</p>
                    <p><strong>Médiane :</strong> Données asymétriques ou avec valeurs aberrantes</p>
                    <p><strong>Mode :</strong> Données catégorielles ou pour identifier les pics</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Exemple Concret : Revenus</h5>
                  <p className="text-gray-600 text-sm">
                    Dans une entreprise : <br/>
                    <strong>Moyenne : 45 000€</strong> (faussée par le PDG à 500 000€) <br/>
                    <strong>Médiane : 32 000€</strong> (reflète mieux la situation typique) <br/>
                    <strong>Mode : 30 000€</strong> (salaire le plus commun)
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">🎯 Bonne Pratique</h5>
                  <p className="text-blue-700 text-sm">
                    Calculez toujours <strong>moyenne ET médiane</strong>. Une grande différence indique 
                    des valeurs extrêmes qui déforment la moyenne.
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau comparaison */}
            <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-500 p-4 text-white">
                <h4 className="font-bold text-lg">Comparaison des Mesures de Tendance Centrale</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Mesure</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction Excel</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avantages</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Inconvénients</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage Idéal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Moyenne</td>
                      <td className="p-4 font-mono text-sm">=MOYENNE()</td>
                      <td className="p-4 text-gray-600 text-sm">Utilise toutes les données, facile à comprendre</td>
                      <td className="p-4 text-gray-600 text-sm">Sensible aux valeurs extrêmes</td>
                      <td className="p-4 text-gray-600 text-sm">Données symétriques</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Médiane</td>
                      <td className="p-4 font-mono text-sm">=MEDIANE()</td>
                      <td className="p-4 text-gray-600 text-sm">Résiste aux valeurs aberrantes</td>
                      <td className="p-4 text-gray-600 text-sm">Ignore les valeurs extrêmes</td>
                      <td className="p-4 text-gray-600 text-sm">Revenus, prix</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-purple-600">Mode</td>
                      <td className="p-4 font-mono text-sm">=MODE.SIMPLE()</td>
                      <td className="p-4 text-gray-600 text-sm">Meilleur pour données catégorielles</td>
                      <td className="p-4 text-gray-600 text-sm">Peut ne pas exister ou être multiple</td>
                      <td className="p-4 text-gray-600 text-sm">Tailles, couleurs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mesures de Dispersion */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('dispersion')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <PieChart className="w-6 h-6 text-orange-600" />
            </div>
            Mesures de Dispersion et Variabilité
          </h2>
          {expandedSections.dispersion ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.dispersion && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Mesurez la Variabilité de Vos Données</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">ECARTYPE() - Dispersion Autour de la Moyenne</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =ECARTYPE.S(plage):cite[3]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Définition :</span> Distance moyenne des points par rapport à la moyenne
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Interprétation :</span> Plus l'écart-type est faible, plus les données sont homogènes
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Règle empirique :</span> 68% des données dans ±1 écart-type
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 text-sm">
                        <strong>Exemple qualité :</strong> Écart-type faible = processus stable et contrôlé
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">VAR() - Variance des Données</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =VAR.S(plage):cite[3]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Définition :</span> Carré de l'écart-type
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Utilité :</span> Utilisée dans les calculs statistiques avancés
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Note :</span> Difficile à interpréter directement (unités au carré)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">MIN() / MAX() / ETENDUE()</h4>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gray-800 text-green-400 p-2 rounded-lg font-mono text-sm text-center">
                        =MIN(plage)
                      </div>
                      <div className="bg-gray-800 text-green-400 p-2 rounded-lg font-mono text-sm text-center">
                        =MAX(plage)
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Étendue :</span> =MAX() - MIN() (différence entre valeurs extrêmes)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Avantage :</span> Simple à calculer et comprendre
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Limite :</span> Très sensible aux valeurs aberrantes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon28/dispersion-demo.gif" 
                  alt="Animation montrant l'impact de l'écart-type sur la distribution"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">📊 Interprétation de l'Écart-Type</h5>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>Écart-type faible :</strong> Données regroupées autour de la moyenne → Processus stable</p>
                    <p><strong>Écart-type élevé :</strong> Données dispersées → Variabilité importante</p>
                    <p><strong>Comparaison :</strong> Toujours comparer à la moyenne (écart-type relatif)</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🏭 Exemple Industrie</h5>
                  <p className="text-gray-600 text-sm">
                    <strong>Processus A :</strong> Moyenne = 100mm, Écart-type = 2mm (excellent contrôle) <br/>
                    <strong>Processus B :</strong> Moyenne = 100mm, Écart-type = 10mm (problème de qualité) <br/>
                    <strong>→ Même moyenne, stabilité très différente !</strong>
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Application Métier</h5>
                  <p className="text-green-700 text-sm">
                    En analyse de ventes : <br/>
                    <strong>Écart-type faible</strong> = ventes stables, prévisions fiables <br/>
                    <strong>Écart-type élevé</strong> = ventes volatiles, besoin de plus de stock de sécurité
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples dispersion */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau d'Exemples de Mesures de Dispersion</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Écart-type</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Interprétation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Température four industriel</td>
                      <td className="p-4 font-mono text-green-600">±2°C</td>
                      <td className="p-4 text-gray-600 text-sm">Contrôle excellent</td>
                      <td className="p-4 text-gray-600 text-sm">Maintenir le processus</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Délais livraison</td>
                      <td className="p-4 font-mono text-orange-600">±3 jours</td>
                      <td className="p-4 text-gray-600 text-sm">Variabilité modérée</td>
                      <td className="p-4 text-gray-600 text-sm">Amélioration possible</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Satisfaction clients</td>
                      <td className="p-4 font-mono text-red-600">±1.5 points/5</td>
                      <td className="p-4 text-gray-600 text-sm">Expérience incohérente</td>
                      <td className="p-4 text-gray-600 text-sm">Investigation urgente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Analysis ToolPak */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('toolpak')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Calculator className="w-6 h-6 text-purple-600" />
            </div>
            Analysis ToolPak - L'Assistant Statistique d'Excel
          </h2>
          {expandedSections.toolpak ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.toolpak && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Analyse Statistique Complète en Quelques Clics</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📥 Activation de l'Analysis ToolPak</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">
                      L'Analysis ToolPak est un complément Excel qui fournit des outils d'analyse statistique et d'ingénierie avancés:cite[3].
                    </p>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold">Fichier → Options → Compléments</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold">Gérer : Compléments Excel → Atteindre</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold">Cocher "Analysis ToolPak" → OK</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-green-50 p-3 rounded-lg">
                      <p className="text-green-700 text-sm">
                        <strong>Vérification :</strong> Onglet "Données" → groupe "Analyse" → bouton "Analyse de données"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📊 Statistiques Descriptives avec ToolPak</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Données → Analyse de données → Statistiques descriptives</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Sélectionner la plage de données</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Cocher "Étiquettes en première ligne" si nécessaire</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Choisir "Nouvelle feuille" et "Statistiques récapitulatives"</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 text-sm">
                        <strong>Résultat :</strong> Un tableau complet avec 15+ statistiques calculées automatiquement !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon28/toolpak-activation.gif" 
                  alt="Animation montrant l'activation et l'utilisation de l'Analysis ToolPak"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🎯 Ce que ToolPak Vous Apporte</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Gain de temps :</strong> Plus besoin de taper chaque fonction individuellement</p>
                    <p><strong>Exhaustivité :</strong> 15+ statistiques en une seule opération</p>
                    <p><strong>Précision :</strong> Calculs complexes gérés automatiquement:cite[3]</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-orange-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">📈 Statistiques Incluses</h5>
                  <p className="text-gray-600 text-sm">
                    Moyenne, erreur-type, médiane, mode, écart-type, variance, kurtosis, asymétrie, 
                    étendue, minimum, maximum, somme, décompte, plus grande valeur, plus petite valeur, 
                    niveau de confiance:cite[3].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau output ToolPak */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemple de Sortie Statistics Descriptives</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Statistique</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Valeur</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Interprétation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction Excel Équivalente</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Moyenne</td>
                      <td className="p-4 font-mono text-sm">45 250€</td>
                      <td className="p-4 text-gray-600 text-sm">Revenu annuel moyen</td>
                      <td className="p-4 font-mono text-sm">=MOYENNE()</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Erreur type</td>
                      <td className="p-4 font-mono text-sm">1 245€</td>
                      <td className="p-4 text-gray-600 text-sm">Précision de l'estimation</td>
                      <td className="p-4 font-mono text-sm">=ECARTYPE.S()/√NB()</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Médiane</td>
                      <td className="p-4 font-mono text-sm">38 500€</td>
                      <td className="p-4 text-gray-600 text-sm">Revenu médian (plus représentatif)</td>
                      <td className="p-4 font-mono text-sm">=MEDIANE()</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Écart type</td>
                      <td className="p-4 font-mono text-sm">12 450€</td>
                      <td className="p-4 text-gray-600 text-sm">Forte dispersion des revenus</td>
                      <td className="p-4 font-mono text-sm">=ECARTYPE.S()</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Niveau confiance (95%)</td>
                      <td className="p-4 font-mono text-sm">2 489€</td>
                      <td className="p-4 text-gray-600 text-sm">Intervalle de confiance de la moyenne</td>
                      <td className="p-4 font-mono text-sm">Calcul complexe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-rose-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-rose-50 to-pink-50 text-left hover:from-rose-100 transition-all"
          onClick={() => toggleSection('cas_pratique')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-rose-600" />
            </div>
            Cas Pratique : Analyse des Ventes d'une Boutique en Ligne
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Analyser les Performances de Vente</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">📋 Scénario de l'Entreprise</h4>
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                    <div>Boutique : "TechStyle Accessories"</div>
                    <div>Période : 6 mois de données</div>
                    <div>Produits : 5 catégories principales</div>
                    <div>Données : 1500 transactions</div>
                    <div>Objectif : Comprendre les performances</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Questions Business</p>
                        <p className="text-sm text-gray-600">Quels produits performant ? Quelle stabilité des ventes ?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Méthode</p>
                        <p className="text-sm text-gray-600">Statistics descriptives avec fonctions Excel et ToolPak</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon28/cas-pratique-donnees.png" 
                    alt="Extrait des données de vente avant analyse"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Analyse par Catégorie</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Ventes Moyennes par Catégorie</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =MOYENNE.SI(catégorie; "Smartphones"; ventes)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Smartphones : 45 000€/mois (Écart-type : 5 200€)</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Comparaison Médiane vs Moyenne</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =MEDIANE(ventes_accessoires)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Médiane : 12 500€ vs Moyenne : 18 000€ → valeurs extrêmes</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Stabilité des Ventes</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =ECARTYPE.S(ventes_mensuelles)/MOYENNE(ventes_mensuelles)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Coefficient variation : 15% → stabilité correcte</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon28/cas-pratique-ventes.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Données d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon28/analysis-toolpak-demo.mp4"
                      title="Démonstration complète Analysis ToolPak"
                      duration="18:30"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Insights Business Découverts</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Smartphones : ventes élevées mais très variables</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Accessoires : ventes stables, clients fidèles</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Recommandation : Diversifier les produits smartphones</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Utilisez l'Analysis ToolPak pour générer un rapport complet et comparez les statistiques 
                    entre les catégories haut de gamme et entrée de gamme.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mt-2">
                    <div className="font-mono text-sm text-green-600">
                      =COEFFICIENT.ASYMETRIE(ventes_haut_gamme)
                    </div>
                    <div className="font-mono text-sm text-blue-600 mt-1">
                      =COEFFICIENT.Aplatissement(ventes_entree_gamme)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan apprentissage */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Ce Que Vous Maîtrisez Maintenant</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sigma className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Tendance Centrale</h5>
                  <p className="text-sm text-gray-600">Moyenne, Médiane, Mode et leurs usages</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Dispersion</h5>
                  <p className="text-sm text-gray-600">Écart-type, Variance, Étendue</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calculator className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Analysis ToolPak</h5>
                  <p className="text-sm text-gray-600">Analyse statistique automatisée</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon28 onResult={onResult} />
      </div>
    </div>
  );
}