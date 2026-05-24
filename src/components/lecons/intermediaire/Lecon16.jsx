import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon16 from "../../quizz/intermediaire/QuizLecon16";
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
  Trello,
  Calculator,
  PieChart,
  LineChart,
  Box,
  Workflow
} from "lucide-react";

export default function Lecon16({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    activation: true,
    terminologie: true,
    methodes: true,
    cas_pratique: true,
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
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec dégradé moderne - Nouvelle palette bleue/verte */}
     <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Calculator className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-4xl font-bold break-words">Solveur Excel : Optimisation Avancée</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maximisez vos résultats, Maîtrisez les contraintes, Prenez les meilleures décisions</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 16 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Optimisation</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Box className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Contraintes</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Workflow className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Algorithmes</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <LineChart className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Solutions Optimales</p>
      </div>
    </div>
  </div>
</div>
      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            Au-delà du "Et Si..." : L'Optimisation Scientifique avec Solveur
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
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  La Puissance de l'Optimisation Mathématique
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Le Solveur Excel va bien au-delà de l'analyse de scénarios en trouvant <strong>automatiquement</strong> la meilleure solution possible pour vos problèmes complexes, dans les limites des contraintes que vous définissez.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Résolution de problèmes complexes</h4>
                      <p className="text-gray-600 text-sm">Optimisez des problèmes avec des dizaines de variables et contraintes simultanément</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Trois méthodes spécialisées</h4>
                      <p className="text-gray-600 text-sm">Choisissez entre Simplex LP, GRG Nonlinéaire et Evolutionary selon votre problème.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Applications illimitées</h4>
                      <p className="text-gray-600 text-sm">De la planification de production à l'optimisation de portefeuille financier</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon16/solveur-overview.png" 
                  alt="Diagramme montrant le processus d'optimisation du Solveur Excel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-semibold">Jusqu'à 200 variables</span>
                </div>
              </div>
            </div>

            {/* Tableau comparatif Solveur vs autres outils */}
            <div className="mt-12 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Solveur vs Autres Outils d'Analyse : Quand Utiliser Quel Outil ?
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Outil</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Meilleur pour</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Variables</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Complexité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-orange-600">Valeur Cible</td>
                      <td className="p-4 text-gray-700">Trouver l'entrée pour un résultat souhaité</td>
                      <td className="p-4 text-gray-700">1 variable d'entrée</td>
                      <td className="p-4 text-gray-700">Simple</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Gestionnaire de Scénarios</td>
                      <td className="p-4 text-gray-700">Comparer plusieurs jeux d'hypothèses</td>
                      <td className="p-4 text-gray-700">Jusqu'à 32 variables</td>
                      <td className="p-4 text-gray-700">Intermédiaire</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-4 font-semibold text-green-600 border-l-4 border-green-500">Solveur Excel</td>
                      <td className="p-4 text-gray-700 font-semibold">Optimisation sous contraintes complexes</td>
                      <td className="p-4 text-gray-700 font-semibold">Jusqu'à 200 variables</td>
                      <td className="p-4 text-gray-700 font-semibold">Avancé</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Activation et Installation */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('activation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-teal-600" />
            </div>
            1. Activation du Solveur Excel : Préparer Votre Environnement
          </h2>
          {expandedSections.activation ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.activation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Download className="w-6 h-6 text-teal-600" />
                Le Solveur est un Complément - Voici Comment l'Activer
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Processus d'activation étape par étape</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étapes détaillées :</h5>
                      <ol className="text-sm text-gray-600 space-y-3 list-decimal pl-4">
                        <li>
                          <strong>Ouvrez Excel</strong> et cliquez sur l'onglet <strong>Fichier</strong>
                        </li>
                        <li>
                          <strong>Options → Compléments</strong> dans le volet gauche
                        </li>
                        <li>
                          En bas, dans <strong>Gérer</strong>, sélectionnez <strong>Compléments Excel</strong> et cliquez sur <strong>OK</strong>
                        </li>
                        <li>
                          Cochez la case <strong>Complément Solveur</strong> dans la liste
                        </li>
                        <li>
                          <strong>Validez</strong> et suivez les instructions si nécessaire
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-600" />
                        Vérification de l'installation
                      </h5>
                      <p className="text-amber-700 text-sm">
                        Une fois activé, l'option <strong>Solveur</strong> apparaît dans l'onglet <strong>Données</strong>, groupe <strong>Analyse</strong>. Si absent, redémarrez Excel.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon16/activation-solveur.png" 
                    alt="Capture d'écran montrant l'activation du Solveur dans les options Excel"
                    className="rounded-xl shadow-lg"
                  />
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">📍 Emplacement final :</h5>
                    <p className="text-blue-700 text-sm">
                      <strong>Données → Analyse → Solveur</strong><br/>
                      Le Solveur est maintenant disponible pour toutes vos feuilles de calcul Excel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dépannage */}
              <div className="bg-white rounded-2xl border-2 border-orange-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Dépannage : Solveur Introuvable ?
                  </h4>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Problèmes courants :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Version Excel</strong> : Certaines versions familiales n'incluent pas Solveur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Installation corrompue</strong> : Réparez l'installation Office</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span><strong>Complément désactivé</strong> : Vérifiez dans Options → Compléments</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Solutions :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Redémarrez Excel</strong> après activation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Vérifiez votre licence Excel</strong> : Solveur disponible dans la plupart des versions professionnelles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Contactez le support Microsoft</strong> si le problème persiste</span>
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

      {/* Section 2 : Terminologie Fondamentale */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-indigo-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('terminologie')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Bookmark className="w-6 h-6 text-purple-600" />
            </div>
            2. Terminologie du Solveur : Le Langage de l'Optimisation
          </h2>
          {expandedSections.terminologie ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.terminologie && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-600" />
                Maîtriser les Trois Concepts Clés
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Cellule Objectif */}
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Cellule Objectif
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>La cellule que vous voulez optimiser</strong> - maximiser, minimiser ou atteindre une valeur spécifique.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Doit contenir une formule</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Exemples : Profit total, Coûts, Rendement</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-sm font-semibold">Exemple :</p>
                      <code className="text-green-700 text-sm">=B2*C2 + B3*C3</code>
                    </div>
                  </div>
                </div>

                {/* Cellules Variables */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Box className="w-5 h-5" />
                      Cellules Variables
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Les cellules que Solveur peut modifier</strong> pour optimiser l'objectif.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Jusqu'à 200 cellules variables</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Doivent influencer la cellule objectif</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-sm font-semibold">Exemple :</p>
                      <code className="text-blue-700 text-sm">Quantité_Produit_A, Quantité_Produit_B</code>
                    </div>
                  </div>
                </div>

                {/* Contraintes */}
                <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
                  <div className="bg-red-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Contraintes
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Les limites et restrictions</strong> que la solution doit respecter.
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Types : ≤, =, ≥, entier, binaire</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Exemples : Budget, Capacité, Stocks</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-sm font-semibold">Exemple :</p>
                      <code className="text-red-700 text-sm">B2 ≤ 100, C3 = 500, D4 ≥ 0</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schéma relationnel */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Relation entre les Composants du Solveur</h4>
                <div className="flex flex-col items-center">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon16/relation-composants.png" 
                    alt="Schéma montrant les relations entre cellule objectif, variables et contraintes"
                    className="rounded-xl max-w-2xl"
                  />
                  <p className="text-gray-600 text-sm mt-4 text-center">
                    Les cellules variables influencent la cellule objectif via des formules, tandis que les contraintes limitent les valeurs possibles des variables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Méthodes de Résolution */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('methodes')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Cpu className="w-6 h-6 text-orange-600" />
            </div>
            3. Méthodes de Résolution : Choisir le Bon Algorithme
          </h2>
          {expandedSections.methodes ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.methodes && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Workflow className="w-6 h-6 text-orange-600" />
                Trois Moteurs, Trois Types de Problèmes
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Simplex LP */}
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-600 p-4 text-white">
                    <h4 className="font-bold text-lg">Simplex LP</h4>
                    <p className="text-green-100 text-sm">Problèmes Linéaires</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Pour les problèmes où <strong>toutes les relations sont linéaires</strong>.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Rapide et fiable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Trouve la solution optimale globale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Modèle : (variable × constante)</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 text-sm font-semibold">Exemples :</p>
                      <ul className="text-green-700 text-sm list-disc pl-4">
                        <li>Optimisation de mélanges</li>
                        <li>Problèmes de transport</li>
                        <li>Planification de production</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* GRG Nonlinéaire */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-600 p-4 text-white">
                    <h4 className="font-bold text-lg">GRG Nonlinéaire</h4>
                    <p className="text-blue-100 text-sm">Problèmes Lisses Non Linéaires</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Pour les problèmes avec <strong>au moins une relation non linéaire</strong>.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Fonctions lisses et continues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Peut trouver des optimums locaux</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Utilise des dérivées</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 text-sm font-semibold">Exemples :</p>
                      <ul className="text-blue-700 text-sm list-disc pl-4">
                        <li>Optimisation de courbes</li>
                        <li>Problèmes financiers complexes</li>
                        <li>Ingénierie et recherche</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evolutionary */}
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-600 p-4 text-white">
                    <h4 className="font-bold text-lg">Evolutionary</h4>
                    <p className="text-purple-100 text-sm">Problèmes Complexes Non Lisses</p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Pour les problèmes <strong>non linéaires et non convexes</strong>.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Algorithme génétique</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Plus lent mais très robuste</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Gère les fonctions discontinues</span>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-800 text-sm font-semibold">Exemples :</p>
                      <ul className="text-purple-700 text-sm list-disc pl-4">
                        <li>Optimisation combinatoire</li>
                        <li>Problèmes avec variables discrètes</li>
                        <li>Conception complexe</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arbre de décision */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Comment Choisir la Bonne Méthode ?</h4>
                <div className="flex justify-center">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon16/arbre-decision-methodes.png" 
                    alt="Arbre de décision pour choisir la méthode Solveur appropriée"
                    className="rounded-xl max-w-2xl"
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <h5 className="font-semibold text-amber-800 mb-2">💡 Conseil important</h5>
                    <p className="text-amber-700 text-sm">
                      Commencez toujours par <strong>Simplex LP</strong> si votre problème peut être linéaire. C'est le plus rapide et le plus fiable.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-semibold text-blue-800 mb-2">⚠️ Attention</h5>
                    <p className="text-blue-700 text-sm">
                      Si Simplex LP échoue, passez à <strong>GRG Nonlinéaire</strong>. N'utilisez Evolutionary qu'en dernier recours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('cas_pratique')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <PieChart className="w-6 h-6 text-emerald-600" />
            </div>
            4. Cas Pratique : Optimisation de Production en Boulangerie
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-emerald-600" /> : 
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-600" />
                Maximiser les Profits Sous Contraintes de Resources
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario de l'Entreprise</h4>
                  <p className="text-gray-700 mb-4">
                    Votre boulangerie produit des croissants et des muffins. Vous devez déterminer la quantité optimale de chaque produit à produire pour <strong>maximiser le profit</strong> tout en respectant les limites de ressources.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-emerald-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Données du problème :</h5>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex justify-between">
                          <span>Profit par croissant :</span>
                          <strong>2€</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Profit par muffin :</span>
                          <strong>1.5€</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Farine disponible :</span>
                          <strong>10 000g</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Temps disponible :</span>
                          <strong>480 minutes</strong>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Consommation des ressources :</h5>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="flex justify-between">
                          <span>Farine par croissant :</span>
                          <strong>50g</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Farine par muffin :</span>
                          <strong>80g</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Temps par croissant :</span>
                          <strong>2 min</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Temps par muffin :</span>
                          <strong>3 min</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon16/modele-boulangerie.png" 
                    alt="Modèle Excel pour l'optimisation de la boulangerie"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  <div className="mt-4 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <h5 className="font-semibold text-emerald-800 mb-2">Objectif du Solveur</h5>
                    <p className="text-emerald-700 text-sm">
                      Trouver le nombre optimal de croissants et muffins à produire pour <strong>maximiser le profit total</strong> sans dépasser les ressources disponibles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Configuration Solveur étape par étape */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Configuration du Solveur - Étapes Détaillées</h4>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        Définir la Cellule Objectif
                      </h5>
                      <p className="text-gray-700 text-sm mb-2">
                        Sélectionnez la cellule contenant le <strong>profit total</strong> :
                      </p>
                      <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">
                        = (Quantité_Croissants × 2) + (Quantité_Muffins × 1.5)
                      </code>
                      <p className="text-gray-600 text-xs">
                        Dans Solveur : <strong>Définir l'objectif → Max</strong>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon16/etape-objectif.png" 
                        alt="Capture de la définition de la cellule objectif"
                        className="rounded-lg shadow-md max-w-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="lg:order-2">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        Définir les Cellules Variables
                      </h5>
                      <p className="text-gray-700 text-sm mb-2">
                        Sélectionnez les cellules des <strong>quantités à produire</strong> :
                      </p>
                      <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">
                        Quantité_Croissants, Quantité_Muffins
                      </code>
                      <p className="text-gray-600 text-xs">
                        Dans Solveur : <strong>En modifiant les cellules variables</strong>
                      </p>
                    </div>
                    <div className="flex justify-center lg:order-1">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon16/etape-variables.png" 
                        alt="Capture de la définition des cellules variables"
                        className="rounded-lg shadow-md max-w-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        Ajouter les Contraintes
                      </h5>
                      <p className="text-gray-700 text-sm mb-2">
                        Définissez les <strong>limites de ressources</strong> :
                      </p>
                      <div className="space-y-1 text-sm text-gray-600 mb-2">
                        <div>• Farine totale ≤ 10 000g</div>
                        <div>• Temps total ≤ 480 min</div>
                        <div>• Quantités ≥ 0</div>
                        <div>• Quantités = entier</div>
                      </div>
                      <p className="text-gray-600 text-xs">
                        Dans Solveur : <strong>Ajouter → Contraintes</strong>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon16/etape-contraintes.png" 
                        alt="Capture de l'ajout des contraintes"
                        className="rounded-lg shadow-md max-w-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div className="lg:order-2">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        Choisir la Méthode et Résoudre
                      </h5>
                      <p className="text-gray-700 text-sm mb-2">
                        Sélectionnez <strong>Simplex LP</strong> (problème linéaire) :
                      </p>
                      <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">
                        Solving Method → Simplex LP
                      </code>
                      <p className="text-gray-600 text-xs">
                        Cliquez sur <strong>Résoudre</strong> et gardez la solution
                      </p>
                    </div>
                    <div className="flex justify-center lg:order-1">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon16/etape-resolution.png" 
                        alt="Capture de la méthode de résolution"
                        className="rounded-lg shadow-md max-w-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Résultats et interprétation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">📊 Résultats de l'Optimisation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl border-2 border-green-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Solution Optimale Trouvée :</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Croissants à produire :</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">120</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Muffins à produire :</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">80</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="text-gray-700 font-semibold">Profit total maximum :</span>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">360€</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-2 border-blue-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Vérification des Contraintes :</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Farine utilisée :</span>
                        <span className="text-green-600 font-semibold">120×50 + 80×80 = 12 400g ≤ 15 000g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temps utilisé :</span>
                        <span className="text-green-600 font-semibold">120×2 + 80×3 = 480 min = 480 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantités entières :</span>
                        <span className="text-green-600 font-semibold">✓ Respecté</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Analyse :</strong> La solution utilise <strong>entièrement le temps disponible</strong> et reste dans les limites de farine. C'est la combinaison optimale !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Bonnes Pratiques et Dépannage */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-slate-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-slate-50 to-gray-50 text-left hover:from-slate-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-slate-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-slate-600" />
            </div>
            5. Bonnes Pratiques et Résolution de Problèmes
          </h2>
          {expandedSections.bonnes_pratiques ? 
            <ChevronUp className="w-6 h-6 text-slate-600" /> : 
            <ChevronDown className="w-6 h-6 text-slate-600" />
          }
        </button>
        
        {expandedSections.bonnes_pratiques && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Bonnes Pratiques pour des Résultats Optimaux
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">✅ Préparer son modèle</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Vérifiez les formules</strong> avant de lancer Solveur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Utilisez des valeurs de départ réalistes</strong> pour les variables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Nommez les plages de cellules</strong> pour plus de clarté</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">✅ Gérer les contraintes</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Commencez avec peu de contraintes</strong>, ajoutez progressivement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Vérifiez la cohérence</strong> des contraintes entre elles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Utilisez <strong>int</strong> pour les variables entières, <strong>bin</strong> pour binaires</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">✅ Analyser les résultats</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span><strong>Vérifiez toujours la faisabilité</strong> de la solution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Examinez les <strong>rapports de sensibilité</strong> de Solveur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span><strong>Documentez votre modèle</strong> et les hypothèses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Dépannage des Problèmes Courants
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">❌ "Solveur n'a pas trouvé de solution faisable"</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Contraintes trop restrictives</strong> : Assouplissez certaines contraintes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Valeurs de départ inadéquates</strong> : Essayez d'autres valeurs initiales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span><strong>Contraintes contradictoires</strong> : Vérifiez la cohérence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-amber-200">
                    <h5 className="font-semibold text-gray-800 mb-2">❌ "La solution n'a pas convergé"</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <Settings className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span><strong>Augmentez le nombre d'itérations</strong> dans les options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Settings className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span><strong>Assouplissez la précision</strong> ou la convergence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Settings className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span><strong>Changez de méthode</strong> (passez à Evolutionary pour les problèmes complexes)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">❌ "Solveur a trouvé une solution non optimale"</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <RefreshCw className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Problème non linéaire</strong> : Utilisez GRG Nonlinéaire ou Evolutionary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RefreshCw className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Plusieurs optimums locaux</strong> : Essayez différentes valeurs de départ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <RefreshCw className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span><strong>Augmentez le temps de calcul</strong> pour les problèmes complexes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Options avancées */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-purple-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">⚙️ Options Avancées du Solveur</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Paramètres de convergence :</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Temps maximum :</span>
                      <code className="bg-gray-100 px-2 rounded">100 secondes</code>
                    </div>
                    <div className="flex justify-between">
                      <span>Itérations :</span>
                      <code className="bg-gray-100 px-2 rounded">100</code>
                    </div>
                    <div className="flex justify-between">
                      <span>Précision :</span>
                      <code className="bg-gray-100 px-2 rounded">0.000001</code>
                    </div>
                    <div className="flex justify-between">
                      <span>Convergence :</span>
                      <code className="bg-gray-100 px-2 rounded">0.0001</code>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Types de contraintes avancées :</h5>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <span><strong>int</strong> : Variables entières</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      <span><strong>bin</strong> : Variables binaires (0 ou 1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-purple-600" />
                      <span><strong>dif</strong> : Toutes différentes (alldifferent)</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 text-xs">
                      <strong>Astuce :</strong> Utilisez les contraintes <strong>int</strong> et <strong>bin</strong> pour les problèmes de décision discrète (oui/non, nombre entier d'unités).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Crosshair className="w-6 h-6 text-indigo-600" />
            </div>
            Exercice Pratique : Optimisation de Portefeuille d'Investissement
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <LineChart className="w-6 h-6 text-indigo-600" />
                Mission : Construire un Portefeuille Optimal Sous Contraintes
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario de Gestion Financière</h4>
                  <p className="text-gray-700 mb-4">
                    Vous êtes gestionnaire de portefeuille et devez répartir 1 000 000€ entre 5 fonds d'investissement avec différents niveaux de risque et rendement. Trouvez la répartition optimale pour <strong>maximiser le rendement</strong> tout en <strong>limitant le risque</strong>.
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
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Intermédiaire</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-purple-200">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Compétences évaluées</p>
                        <p className="text-sm text-gray-600">Solveur, Contraintes, Analyse financière</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon16/exercice-portefeuille.png" 
                    alt="Aperçu du modèle de portefeuille pour l'exercice"
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
                    Données des Fonds d'Investissement
                  </h4>
                  <div className="text-sm text-gray-600 space-y-3">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Fonds A :</span>
                      <span>Rendement 8%, Risque 2/5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Fonds B :</span>
                      <span>Rendement 6%, Risque 1/5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Fonds C :</span>
                      <span>Rendement 12%, Risque 4/5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Fonds D :</span>
                      <span>Rendement 9%, Risque 3/5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Fonds E :</span>
                      <span>Rendement 15%, Risque 5/5</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Contraintes à Respecter
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span><strong>Risque moyen ≤ 3/5</strong> (limite de risque)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span><strong>Fonds E ≤ 15%</strong> du total (limite concentration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span><strong>Fonds A + B ≥ 30%</strong> (diversification sécurité)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span><strong>Total = 1 000 000€</strong> (budget total)</span>
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
                    Configuration Solveur Requise
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Objectif :</strong> Maximiser le rendement total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Box className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Variables :</strong> Montant investi dans chaque fonds (5 variables)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Cpu className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Méthode :</strong> Simplex LP (problème linéaire)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Contraintes :</strong> 4 contraintes principales + montants ≥ 0</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Analyse des Résultats
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Calculer le <strong>rendement total obtenu</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Vérifier le <strong>respect de toutes les contraintes</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Identifier les <strong>contraintes limitantes</strong> (qui sont saturées)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Proposer une <strong>interprétation business</strong> des résultats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Critères d'Évaluation de l'Exercice
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">📊 Aspects techniques :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Configuration correcte de Solveur</li>
                    <li>• Respect de toutes les contraintes</li>
                    <li>• Méthode de résolution appropriée</li>
                    <li>• Modèle financier sans erreurs</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">💡 Analyse financière :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Interprétation des résultats obtenus</li>
                    <li>• Identification des contraintes actives</li>
                    <li>• Qualité de la recommandation</li>
                    <li>• Communication des insights business</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-indigo-600" />
                  Fichier d'Exercice
                </h4>
                <p className="text-gray-700 mb-4">
                  Téléchargez le modèle de portefeuille à optimiser :
                </p>
                <a href="/cours/intermediaire/lecon16/exercice-portefeuille.xlsx" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold">
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
                  url="/cours/intermediaire/lecon16/correction-portefeuille.mp4"
                  title="Correction de l'optimisation de portefeuille avec Solveur"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon16 onResult={onResult} />
      </div>
    </div>
  );
}