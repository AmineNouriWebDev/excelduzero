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
  GanttChart
} from "lucide-react";

export default function Lecon19({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    creation: true,
    personnalisation: true,
    analyse: true,
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

      {/* Section Création */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 text-left"
          onClick={() => toggleSection('creation')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Plus className="w-5 h-5 text-blue-600" />
            Création et Modification des Graphiques
          </h2>
          {expandedSections.creation ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </button>
        
        {expandedSections.creation && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-blue-600" />
                  Types de graphiques essentiels
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border rounded-lg p-4 text-center">
                    <BarChart2 className="w-12 h-12 mx-auto text-blue-500 mb-2" />
                    <h4 className="font-semibold">Histogrammes</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Idéal pour comparer des valeurs entre différentes catégories
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 text-center">
                    <PieChart className="w-12 h-12 mx-auto text-green-500 mb-2" />
                    <h4 className="font-semibold">Camemberts</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Montre les proportions d'un tout (part de marché, répartition budgétaire)
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 text-center">
                    <LineChart className="w-12 h-12 mx-auto text-purple-500 mb-2" />
                    <h4 className="font-semibold">Graphiques en ligne</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Visualise les tendances et évolutions dans le temps
                    </p>
                  </div>
                </div>
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
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Modifier un graphique existant
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Changer le type de graphique</h4>
                    <p className="text-gray-700 mb-3">
                      Clic droit sur le graphique → <strong>Modifier le type de graphique</strong>
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Ajouter un axe secondaire</h4>
                    <p className="text-gray-700">
                      Pour les données de grandeurs différentes : clic droit sur la série → <strong>Mettre en forme une série de données</strong> → Axe secondaire
                    </p>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/axe-secondaire.gif" 
                      alt="Ajout d'un axe secondaire dans Excel" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Astuce importante
                </h4>
                <p className="text-gray-700">
                  Pour déplacer un graphique sur une nouvelle feuille : onglet <strong>Création</strong> → <strong>Déplacer le graphique</strong>
                </p>
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
                      Excel propose des dispositions prédéfinies qui ajoutent automatiquement des éléments comme les titres, légendes et étiquettes de données.
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

      {/* Section Analyse */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-teal-50 text-left"
          onClick={() => toggleSection('analyse')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <GanttChart className="w-5 h-5 text-teal-600" />
            Analyse des Données avec Graphiques
          </h2>
          {expandedSections.analyse ? 
            <ChevronUp className="w-5 h-5 text-teal-600" /> : 
            <ChevronDown className="w-5 h-5 text-teal-600" />
          }
        </button>
        
        {expandedSections.analyse && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-teal-600" />
                  Courbes de tendance
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Les courbes de tendance montrent l'évolution générale de vos données :
                    </p>
                    
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Sélectionnez une série de données</li>
                      <li>Onglet <strong>Disposition</strong> → <strong>Courbe de tendance</strong></li>
                      <li>Choisissez un type (linéaire, exponentielle, etc.)</li>
                      <li>Optionnel : Affichez l'équation sur le graphique</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/courbe-tendance.png" 
                      alt="Courbe de tendance dans Excel" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-teal-600" />
                  Barres d'erreur et lignes de projection
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Pour les analyses statistiques ou scientifiques :
                    </p>
                    
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Barres d'erreur</strong> : indiquent la marge d'erreur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Lignes de projection</strong> : relient les points entre différentes séries</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon19/barres-erreur.png" 
                      alt="Barres d'erreur dans Excel" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Quand utiliser chaque type de graphique
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Histogrammes</strong> : Comparer des valeurs entre catégories</li>
                  <li>• <strong>Camemberts</strong> : Montrer les proportions d'un tout</li>
                  <li>• <strong>Graphiques en ligne</strong> : Visualiser des tendances dans le temps</li>
                  <li>• <strong>Graphiques en aires</strong> : Montrer l'accumulation de valeurs</li>
                </ul>
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

      {/* Exercice Pratique */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-50 text-left"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Target className="w-5 h-5 text-orange-600" />
            Exercice Pratique - Analyse de Transport
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
                Données sur les moyens de transport
              </h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 font-semibold">Transport</th>
                      <th className="border p-2 font-semibold">Janvier</th>
                      <th className="border p-2 font-semibold">Février</th>
                      <th className="border p-2 font-semibold">Mars</th>
                      <th className="border p-2 font-semibold">Avril</th>
                      <th className="border p-2 font-semibold">Mai</th>
                      <th className="border p-2 font-semibold">Juin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Par avion</td>
                      <td className="border p-2">1500</td>
                      <td className="border p-2">2900</td>
                      <td className="border p-2">3200</td>
                      <td className="border p-2">2000</td>
                      <td className="border p-2">3000</td>
                      <td className="border p-2">2000</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Par train</td>
                      <td className="border p-2">1800</td>
                      <td className="border p-2">2300</td>
                      <td className="border p-2">2500</td>
                      <td className="border p-2">2400</td>
                      <td className="border p-2">2200</td>
                      <td className="border p-2">2100</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Par camion</td>
                      <td className="border p-2">2000</td>
                      <td className="border p-2">1000</td>
                      <td className="border p-2">2500</td>
                      <td className="border p-2">2600</td>
                      <td className="border p-2">1600</td>
                      <td className="border p-2">2800</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Par vélo</td>
                      <td className="border p-2">20</td>
                      <td className="border p-2">30</td>
                      <td className="border p-2">40</td>
                      <td className="border p-2">60</td>
                      <td className="border p-2">30</td>
                      <td className="border p-2">50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="border rounded-lg p-5 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Missions :</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-700">
                    Créez un <strong>graphique en courbes</strong> montrant l'évolution des 4 moyens de transport
                  </li>
                  <li className="text-gray-700">
                    Ajoutez un <strong>axe secondaire</strong> pour la série "Par vélo"
                  </li>
                  <li className="text-gray-700">
                    Transformez le graphique en <strong>histogramme groupé</strong>
                  </li>
                  <li className="text-gray-700">
                    Ajoutez une <strong>courbe de tendance linéaire</strong> pour la série "Par avion"
                  </li>
                  <li className="text-gray-700">
                    Créez des <strong>Sparklines</strong> dans une nouvelle colonne pour chaque moyen de transport
                  </li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-orange-600" />
                    Fichier d'exercice
                  </h4>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
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
                    <span>Commencez par sélectionner toutes les données avant de créer le graphique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Pour l'axe secondaire : clic droit sur la série → Mettre en forme une série de données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Les Sparklines se créent via l'onglet Insertion → Sparklines</span>
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