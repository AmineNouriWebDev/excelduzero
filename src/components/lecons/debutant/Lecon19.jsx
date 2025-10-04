import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon19 from "../../quizz/debutant/QuizLecon19";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  BarChart2, 
  PieChart, 
  LineChart,
  Plus,
  Settings,
  LayoutTemplate,
  Palette,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  Target,
  Download,
  Video,
  MoveRight,
  Lightbulb,
  Type,
  Hash,
  ArrowDownUp,
  Filter,
  GanttChart,
  TrendingUp,
  BarChart3,
  AreaChart
} from "lucide-react";

export default function Lecon19({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    histogrammes: true,
    camemberts: true,
    courbes: true,
    autres: true,
    personnalisation: true,
    sparklines: true,
    exercice: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <BarChart2 className="w-8 h-8" />
              Graphiques Simples dans Microsoft Excel
            </h1>
            <p className="mt-2 opacity-90">Formation niveau débutant - Excel 2016 et versions ultérieures</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
            Leçon 19
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-blue-50 rounded-lg p-5 mb-6">
          <p className="text-gray-700">
            Dans cette leçon, vous apprendrez à créer et personnaliser différents types de graphiques dans Excel pour visualiser vos données de manière professionnelle.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            Les compétences que vous allez acquérir :
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Créer des histogrammes, camemberts et graphiques en ligne</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Personnaliser l'apparence des graphiques</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Ajouter des éléments d'analyse comme des courbes de tendance</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Utiliser les graphiques Sparkline dans les cellules</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Choisir le bon type de graphique pour vos données</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section Introduction */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 text-left"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <BarChart2 className="w-5 h-5 text-blue-600" />
            Introduction aux Graphiques Excel
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Pourquoi utiliser des graphiques dans Excel ?
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Les graphiques transforment des données brutes en représentations visuelles faciles à comprendre. Ils permettent de :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Révéler des tendances et patterns dans vos données</li>
                  <li>Comparer visuellement des valeurs et catégories</li>
                  <li>Communiquer efficacement des informations complexes</li>
                  <li>Prendre des décisions basées sur des données</li>
                  <li>Créer des rapports professionnels et attrayants</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  Créer un graphique en 3 étapes
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    <strong>Sélectionnez vos données</strong> (incluant les en-têtes de ligne et colonne)
                  </li>
                  <li className="text-gray-700">
                    Onglet <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">"Insertion"</strong> → Choisissez un type de graphique
                  </li>
                  <li className="text-gray-700">
                    Personnalisez votre graphique avec les outils Excel
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon19/creation-graphique.gif" 
                    alt="Création d'un graphique dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">Processus de création d'un graphique en courbes</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Histogrammes */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-100 text-left"
          onClick={() => toggleSection('histogrammes')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-700" />
            Histogrammes et Graphiques en Barres
          </h2>
          {expandedSections.histogrammes ? 
            <ChevronUp className="w-5 h-5 text-blue-700" /> : 
            <ChevronDown className="w-5 h-5 text-blue-700" />
          }
        </button>
        
        {expandedSections.histogrammes && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quand utiliser un histogramme ?
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Les histogrammes (ou graphiques en barres) sont idéaux pour :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comparer des valeurs entre différentes catégories</li>
                  <li>Montrer l'évolution dans le temps lorsque les périodes sont limitées</li>
                  <li>Visualiser des classements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Exemple Pratique : Ventes trimestrielles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Données :</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2">Trimestre</th>
                            <th className="border p-2">Ventes (€)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">T1</td><td className="border p-2">15 000</td></tr>
                          <tr><td className="border p-2">T2</td><td className="border p-2">22 500</td></tr>
                          <tr><td className="border p-2">T3</td><td className="border p-2">18 750</td></tr>
                          <tr><td className="border p-2">T4</td><td className="border p-2">27 300</td></tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Étapes :</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Sélectionnez les données (A1:B5)</li>
                      <li>Onglet Insertion → Histogramme → Histogramme groupé</li>
                      <li>Ajoutez un titre significatif</li>
                      <li>Personnalisez les couleurs des barres</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/exemple-histogramme.gif" 
                      alt="Exemple d'histogramme des ventes trimestrielles" 
                      className="rounded-lg border shadow-sm"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Histogramme des ventes trimestrielles</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Astuce : Variantes d'histogrammes
                </h4>
                <p className="text-gray-700">
                  Essayez les histogrammes empilés pour montrer la composition des valeurs, ou les histogrammes 3D pour un effet visuel plus marqué (à utiliser avec modération).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Camemberts */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-green-100 text-left"
          onClick={() => toggleSection('camemberts')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <PieChart className="w-5 h-5 text-green-700" />
            Graphiques en Secteurs (Camemberts)
          </h2>
          {expandedSections.camemberts ? 
            <ChevronUp className="w-5 h-5 text-green-700" /> : 
            <ChevronDown className="w-5 h-5 text-green-700" />
          }
        </button>
        
        {expandedSections.camemberts && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quand utiliser un camembert ?
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Les camemberts sont parfaits pour :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Montrer les proportions d'un tout (parts de marché, répartition budgétaire)</li>
                  <li>Visualiser la composition d'une valeur totale</li>
                  <li>Comparer des pourcentages (limité à environ 6-7 catégories maximum)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Exemple Pratique : Répartition du budget marketing
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Données :</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2">Poste</th>
                            <th className="border p-2">Budget (€)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">Publicité en ligne</td><td className="border p-2">12 000</td></tr>
                          <tr><td className="border p-2">Événements</td><td className="border p-2">8 000</td></tr>
                          <tr><td className="border p-2">Impression</td><td className="border p-2">5 000</td></tr>
                          <tr><td className="border p-2">Relations presse</td><td className="border p-2">4 500</td></tr>
                          <tr><td className="border p-2">Autres</td><td className="border p-2">2 500</td></tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Étapes :</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Sélectionnez les données (A1:B6)</li>
                      <li>Onglet Insertion → Graphique en secteurs → Camembert</li>
                      <li>Ajoutez des étiquettes de données avec pourcentages</li>
                      <li>Excentrez le secteur le plus important pour le mettre en valeur</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/exemple-camembert.gif" 
                      alt="Exemple de camembert du budget marketing" 
                      className="rounded-lg border shadow-sm"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Répartition du budget marketing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Attention aux limites des camemberts
                </h4>
                <p className="text-gray-700">
                  Évitez les camemberts avec trop de secteurs (plus de 6-7) car ils deviennent illisibles. Pour de nombreuses catégories, préférez un histogramme ou un graphique en barres.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Graphiques en Courbes */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-100 text-left"
          onClick={() => toggleSection('courbes')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <LineChart className="w-5 h-5 text-purple-700" />
            Graphiques en Courbes
          </h2>
          {expandedSections.courbes ? 
            <ChevronUp className="w-5 h-5 text-purple-700" /> : 
            <ChevronDown className="w-5 h-5 text-purple-700" />
          }
        </button>
        
        {expandedSections.courbes && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quand utiliser un graphique en courbes ?
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Les graphiques en courbes sont excellents pour :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Visualiser les tendances et évolutions dans le temps</li>
                  <li>Comparer plusieurs séries de données continues</li>
                  <li>Identifier des patterns saisonniers ou cycliques</li>
                  <li>Projeter des tendances futures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Exemple Pratique : Évolution des températures mensuelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Données :</h4>
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2">Mois</th>
                            <th className="border p-2">Paris (°C)</th>
                            <th className="border p-2">Marseille (°C)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border p-2">Jan</td><td className="border p-2">5</td><td className="border p-2">8</td></tr>
                          <tr><td className="border p-2">Fév</td><td className="border p-2">6</td><td className="border p-2">9</td></tr>
                          <tr><td className="border p-2">Mar</td><td className="border p-2">10</td><td className="border p-2">12</td></tr>
                          <tr><td className="border p-2">Avr</td><td className="border p-2">13</td><td className="border p-2">15</td></tr>
                          <tr><td className="border p-2">Mai</td><td className="border p-2">17</td><td className="border p-2">19</td></tr>
                          <tr><td className="border p-2">Juin</td><td className="border p-2">20</td><td className="border p-2">23</td></tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Étapes :</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Sélectionnez les données (A1:C7)</li>
                      <li>Onglet Insertion → Graphique en courbes</li>
                      <li>Activez le lissage des courbes pour un aspect plus professionnel</li>
                      
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/exemple-courbes.gif" 
                      alt="Exemple de graphique en courbes des températures" 
                      className="rounded-lg border shadow-sm"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center">Évolution des températures mensuelles</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Ajouter une courbe de tendance
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Pour projeter une tendance future sur votre graphique en courbes :
                    </p>
                    
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Cliquez droit sur la série de données</li>
                      <li>Sélectionnez "Ajouter une courbe de tendance"</li>
                      <li>Choisissez le type de tendance (linéaire, exponentielle, etc.)</li>
                      <li>Optionnel : Affichez l'équation et le coefficient R²</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/courbe-tendance.png" 
                      alt="Ajout d'une courbe de tendance" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Autres types de graphiques */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-100 text-left"
          onClick={() => toggleSection('autres')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <AreaChart className="w-5 h-5 text-orange-700" />
            Autres Types de Graphiques
          </h2>
          {expandedSections.autres ? 
            <ChevronUp className="w-5 h-5 text-orange-700" /> : 
            <ChevronDown className="w-5 h-5 text-orange-700" />
          }
        </button>
        
        {expandedSections.autres && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Graphiques en Aires
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Les graphiques en aires sont similaires aux graphiques en courbes mais avec la zone sous la courbe remplie de couleur. Ils sont utiles pour :
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Montrer l'accumulation de valeurs dans le temps</li>
                      <li>Visualiser la contribution de différentes parties à un tout</li>
                      <li>Représenter des volumes ou des quantités cumulées</li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/graphique-aires.png" 
                      alt="Exemple de graphique en aires" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Graphiques à Nuage de Points (XY)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Les nuages de points montrent la relation entre deux variables. Ils sont parfaits pour :
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Identifier des corrélations entre variables</li>
                      <li>Détecter des regroupements ou patterns</li>
                      <li>Analyser des données scientifiques ou statistiques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/nuage-points.png" 
                      alt="Exemple de nuage de points" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Guide de sélection du type de graphique
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Comparaison</strong> : Histogrammes, barres</li>
                  <li>• <strong>Proportion</strong> : Camemberts, graphiques en secteurs</li>
                  <li>• <strong>Tendance</strong> : Courbes, aires</li>
                  <li>• <strong>Relation</strong> : Nuages de points, bulles</li>
                  <li>• <strong>Distribution</strong> : Histogrammes, boîtes à moustaches</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Personnalisation */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-50 text-left"
          onClick={() => toggleSection('personnalisation')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Palette className="w-5 h-5 text-purple-600" />
            Personnalisation des Graphiques
          </h2>
          {expandedSections.personnalisation ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </button>
        
        {expandedSections.personnalisation && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5 text-purple-600" />
                  Dispositions et styles prédéfinis
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Excel propose des dispositions prédéfinis qui ajoutent automatiquement des éléments comme les titres, légendes et étiquettes de données.
                    </p>
                    
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Sélectionnez votre graphique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Onglet <strong>Création</strong> → Dispositions du graphique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Choisissez une disposition adaptée à vos données</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/dispositions-graphiques.png" 
                      alt="Dispositions prédéfinies dans Excel" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-600" />
                  Personnalisation avancée
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mettre en évidence un point</h4>
                    <p className="text-gray-700 mb-4">
                      Cliquez deux fois sur un point de données → Personnalisez sa couleur ou sa taille
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Excentrer un secteur</h4>
                    <p className="text-gray-700">
                      Pour les camemberts : cliquez-glissez sur un secteur pour le mettre en valeur
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Ajouter des étiquettes de données</h4>
                    <p className="text-gray-700">
                      Clic droit → Ajouter des étiquettes de données → Personnaliser le format
                    </p>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/excentration-secteurs.gif" 
                      alt="Excentration d'un secteur dans un camembert" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-purple-600" />
                  Lissage des courbes
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Pour adoucir les angles d'un graphique en courbes :
                    </p>
                    
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Clic droit sur une courbe</li>
                      <li>Mettre en forme une série de données</li>
                      <li>Cochez <strong>Lissage</strong> dans les options de ligne</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/courbe-lissee.png" 
                      alt="Comparaison entre courbe lissée et non lissée" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Sparklines */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-indigo-50 text-left"
          onClick={() => toggleSection('sparklines')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <LineChart className="w-5 h-5 text-indigo-600" />
            Graphiques Sparkline
          </h2>
          {expandedSections.sparklines ? 
            <ChevronUp className="w-5 h-5 text-indigo-600" /> : 
            <ChevronDown className="w-5 h-5 text-indigo-600" />
          }
        </button>
        
        {expandedSections.sparklines && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600" />
                  Création de Sparklines
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Les Sparklines sont des mini-graphiques dans des cellules :
                    </p>
                    
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Sélectionnez la cellule de destination</li>
                      <li>Onglet <strong>Insertion</strong> → <strong>Sparklines</strong></li>
                      <li>Choisissez un type (Ligne, Colonne, Gain/Perte)</li>
                      <li>Sélectionnez la plage de données</li>
                      <li>Validez</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/creation-sparkline.gif" 
                      alt="Création d'un Sparkline dans Excel" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-indigo-600" />
                  Personnalisation des Sparklines
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Quand vous sélectionnez un Sparkline, l'onglet <strong>Création</strong> apparaît :
                    </p>
                    
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Changer le type (Ligne → Colonne)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Afficher les points (Haut, Bas, Première, Dernière)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>Personnaliser les couleurs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/sparkline-personnalisation.png" 
                      alt="Personnalisation d'un Sparkline" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Utilisation pratique des Sparklines
                </h4>
                <p className="text-gray-700">
                  Les Sparklines sont parfaits pour :
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>Visualiser les tendances de ventes dans des rapports</li>
                  <li>Suivre l'évolution des performances dans des tableaux de bord</li>
                  <li>Ajouter une dimension visuelle sans occuper trop d'espace</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique Amélioré */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-50 text-left"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Target className="w-5 h-5 text-orange-600" />
            Exercice Pratique Complet - Analyse Commerciale
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-5 h-5 text-orange-600" /> : 
            <ChevronDown className="w-5 h-5 text-orange-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-orange-600" />
                Données de ventes et performances
              </h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 font-semibold">Produit</th>
                      <th className="border p-2 font-semibold">Jan</th>
                      <th className="border p-2 font-semibold">Fév</th>
                      <th className="border p-2 font-semibold">Mar</th>
                      <th className="border p-2 font-semibold">Avr</th>
                      <th className="border p-2 font-semibold">Mai</th>
                      <th className="border p-2 font-semibold">Juin</th>
                      <th className="border p-2 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Ordinateurs</td>
                      <td className="border p-2">45</td>
                      <td className="border p-2">52</td>
                      <td className="border p-2">48</td>
                      <td className="border p-2">60</td>
                      <td className="border p-2">55</td>
                      <td className="border p-2">62</td>
                      <td className="border p-2 font-semibold">322</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Smartphones</td>
                      <td className="border p-2">120</td>
                      <td className="border p-2">135</td>
                      <td className="border p-2">110</td>
                      <td className="border p-2">145</td>
                      <td className="border p-2">160</td>
                      <td className="border p-2">175</td>
                      <td className="border p-2 font-semibold">845</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Tablettes</td>
                      <td className="border p-2">75</td>
                      <td className="border p-2">80</td>
                      <td className="border p-2">70</td>
                      <td className="border p-2">85</td>
                      <td className="border p-2">90</td>
                      <td className="border p-2">95</td>
                      <td className="border p-2 font-semibold">495</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Accessoires</td>
                      <td className="border p-2">200</td>
                      <td className="border p-2">180</td>
                      <td className="border p-2">220</td>
                      <td className="border p-2">210</td>
                      <td className="border p-2">230</td>
                      <td className="border p-2">250</td>
                      <td className="border p-2 font-semibold">1290</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="border rounded-lg p-5 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Mission à compléter :</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-700">
                    <strong>Histogramme groupé</strong> : <br /> Créez un histogramme comparant les ventes mensuelles des 4 produits (Jan à Juin). <br />
                    Appliquez un style prédéfini au graphique. <br />
                    Ajoutez un titre clair et une légende.
                  </li>
                  <li className="text-gray-700">
                    <strong>Camembert</strong> : <br />
                    Représentez la part de marché de chaque produit dans le total des ventes. <br />
                    Excentrez le secteur Accessoires pour le mettre en valeur. <br />
                 

                  </li>
                  <li className="text-gray-700">
                    <strong>Graphique en courbes</strong> : <br />
                    Montrez l'évolution des ventes de chaque produit sur les 6 mois. <br />
                    Ajoutez une courbe de tendance linéaire pour la série Smartphones.
                  </li>
                  <li className="text-gray-700">
                    <strong>Personnalisation avancée</strong> :  <br />
                    <ul className="list-disc pl-6 mt-2">
                    Ajoutez un axe secondaire pour la série Accessoires dans l'histogramme.
                    </ul>
                  </li>
                  <li className="text-gray-700">
                    <strong>Sparklines</strong> : <br /> Ajoutez une colonne Tendance et insérez des Sparklines (mini-graphiques) pour chaque produit.
                  </li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-orange-600" />
                    Fichier d'exercice
                  </h4>
                  <a href="/cours/debutant/lecon19/exercice_graphique.xlsx" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger (.xlsx)
                  </a>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    Correction vidéo
                  </h4>
                  <PremiumVideo
                    url="/cours/debutant/graphiques/correction-exercice.mp4"
                    title="Correction de l'exercice sur les graphiques"
                  />
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Conseils pour réussir l'exercice
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Commencez par sélectionner les données appropriées pour chaque type de graphique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pour l'axe secondaire : clic droit sur la série → Mettre en forme une série de données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Les Sparklines se créent via l'onglet Insertion → Sparklines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>N'oubliez pas d'ajouter des titres significatifs à chaque graphique</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-8 border-t pt-8">
        <QuizLecon19 onResult={onResult} />
      </div>
    </div>
  );
}