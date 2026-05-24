import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon18 from "../../quizz/intermediaire/QuizLecon18";
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
  Workflow,
  Play,
  Square,
  Terminal,
  Shield,
  Brain,
  Rocket,
  Circle,
  Search,
  GitPullRequest,
  ArrowRightLeft,
  Bug
} from "lucide-react";

export default function Lecon18({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    outils_base: true,
    precedents_dependants: true,
    evaluer_formule: true,
    fenetre_espion: true,
    gestion_erreurs: true,
    cas_pratique: true,
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
      {/* En-tête avec nouveau dégradé bleu/vert */}
    <div className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Search className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Audit de Formules Excel</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Déboguez, Analysez, Maîtrisez - Devenez Expert de Vos Feuilles de Calcul</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 18 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <GitPullRequest className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Relations</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Bug className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Débogage</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Eye className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Surveillance</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Shield className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Fiabilité</p>
      </div>
    </div>
  </div>
</div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-cyan-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-cyan-50 to-blue-50 text-left hover:from-cyan-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-cyan-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-cyan-600" />
            </div>
            Pourquoi l'Audit de Formules est Essentiel ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-cyan-600" /> : 
            <ChevronDown className="w-6 h-6 text-cyan-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-600" />
                  Ne Laissez Plus Vos Calculs Vous Résister
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  L'audit de formules est l'ensemble des techniques qui permettent de <strong>comprendre, vérifier et déboguer</strong> 
                  vos calculs Excel. Indispensable pour garantir la fiabilité de vos analyses:cite[5]:cite[9].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Évitez les erreurs coûteuses</h4>
                      <p className="text-gray-600 text-sm">Une simple erreur de formule peut fausser des décisions importantes:cite[8]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gagnez un temps précieux</h4>
                      <p className="text-gray-600 text-sm">Trouvez l'origine des problèmes en secondes au lieu de minutes:cite[5]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Maîtrisez les classeurs complexes</h4>
                      <p className="text-gray-600 text-sm">Comprenez les relations entre des centaines de cellules:cite[3]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon18/audit-overview.png" 
                  alt="Diagramme montrant l'importance de l'audit de formules"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-semibold">90% d'erreurs en moins</span>
                </div>
              </div>
            </div>

            {/* Tableau des problèmes courants */}
            <div className="mt-12 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Les Problèmes Que l'Audit de Formules Résout
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Problème</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Symptôme</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Solution d'audit</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Références circulaires</td>
                      <td className="p-4 text-gray-700">Calcul incorrect, avertissement Excel</td>
                      <td className="p-4 text-gray-700">Vérification des dépendances circulaires:cite[8]</td>
                      <td className="p-4 text-red-600 font-semibold">Élevé</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Cellules cachées</td>
                      <td className="p-4 text-gray-700">Résultats inexpliqués</td>
                      <td className="p-4 text-gray-700">Trace precedents/dépendants:cite[4]</td>
                      <td className="p-4 text-orange-600 font-semibold">Moyen</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-4 font-semibold text-blue-700 border-l-4 border-blue-500">Erreurs #VALEUR! #DIV/0!</td>
                      <td className="p-4 text-gray-700">Affichage d'erreurs Excel</td>
                      <td className="p-4 text-gray-700">Évaluation pas-à-pas:cite[9]</td>
                      <td className="p-4 text-red-600 font-semibold">Critique</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Outils de Base */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-indigo-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('outils_base')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            1. Découverte des Outils d'Audit
          </h2>
          {expandedSections.outils_base ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.outils_base && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Box className="w-6 h-6 text-blue-600" />
                Le Ruban d'Audit de Formules
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Excel met à votre disposition une <strong>boîte à outils complète</strong> pour auditer vos formules, 
                    accessible depuis l'onglet <strong>Formules → Vérification des formules</strong>:cite[4]:cite[5].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">📍 Où trouver les outils ?</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Ouvrez Excel et cliquez sur l'onglet <strong>Formules</strong></li>
                        <li>Repérez le groupe <strong>Vérification des formules</strong></li>
                        <li>Explorez les différents boutons disponibles</li>
                      </ol>
                    </div>
                    
                    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-cyan-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-cyan-600" />
                        Astuce d'accès rapide
                      </h5>
                      <p className="text-cyan-700 text-sm">
                        Utilisez le raccourci <strong>Alt + M</strong> pour accéder directement au menu d'audit, 
                        puis les lettres soulignées pour chaque fonction.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon18/ruban-audit.png" 
                    alt="Capture d'écran du ruban d'audit de formules Excel"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>

              {/* Présentation des outils */}
              <div className="bg-white rounded-2xl border-2 border-purple-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 text-white">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Panorama des Outils d'Audit
                  </h4>
                </div>
                <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <GitPullRequest className="w-6 h-6 text-blue-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Antécédents</h5>
                      <p className="text-gray-600 text-xs">
                        Montre les cellules utilisées dans la formule:cite[4]
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <GitBranch className="w-6 h-6 text-green-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Dépendants</h5>
                      <p className="text-gray-600 text-xs">
                        Montre les cellules qui utilisent cette cellule:cite[5]
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-6 h-6 text-amber-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Évaluer</h5>
                      <p className="text-gray-600 text-xs">
                        Affiche le calcul étape par étape:cite[4]
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Eye className="w-6 h-6 text-red-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Fenêtre Espion</h5>
                      <p className="text-gray-600 text-xs">
                        Surveille des cellules importantes:cite[7]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Antécédents et Dépendants */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('precedents_dependants')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <GitPullRequest className="w-6 h-6 text-green-600" />
            </div>
            2. Antécédents et Dépendants : Cartographiez Vos Calculs
          </h2>
          {expandedSections.precedents_dependants ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.precedents_dependants && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <ArrowRightLeft className="w-6 h-6 text-green-600" />
                Comprenez les Relations Entre Vos Cellules
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🎯 Antécédents : "D'où viennent mes données ?"</h4>
                  
                  <div className="space-y-4">
                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        Utilisation Pratique
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Sélectionnez une cellule contenant une formule</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Cliquez sur <strong>Repérer les antécédents</strong>:cite[4]</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Observez les flèches bleues pointant vers les cellules sources</span>
                        </li>
                      </ul>
                    </div>

                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        Cas Concret
                      </h5>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Cellule C10</strong> contient <code>=A10+B10</code><br/>
                          Les antécédents sont <strong>A10</strong> et <strong>B10</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon18/trace-precedents.gif" 
                    alt="Animation montrant l'utilisation de Repérer les antécédents"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 className="font-semibold text-blue-800 mb-2">💡 À retenir :</h5>
                    <p className="text-blue-700 text-sm">
                      Les <strong>antécédents</strong> répondent à la question : 
                      <em>"Quelles cellules sont utilisées pour calculer cette valeur ?"</em>:cite[5]
                    </p>
                  </div>
                </div>
              </div>

              {/* Dépendants */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="lg:order-2">
                  <h4 className="font-semibold text-gray-800 mb-4">🎯 Dépendants : "Qui utilise mes données ?"</h4>
                  
                  <div className="space-y-4">
                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        Utilisation Pratique
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Sélectionnez une cellule contenant une valeur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Cliquez sur <strong>Repérer les dépendants</strong>:cite[5]</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Observez les flèches pointant vers les cellules utilisatrices</span>
                        </li>
                      </ul>
                    </div>

                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-amber-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        Cas Concret
                      </h5>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Cellule B5</strong> contient un taux de TVA<br/>
                          Les dépendants sont toutes les cellules qui utilisent <strong>B5</strong> dans leurs calculs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 lg:order-1">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon18/trace-dependants.gif" 
                    alt="Animation montrant l'utilisation de Repérer les dépendants"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 className="font-semibold text-purple-800 mb-2">💡 À retenir :</h5>
                    <p className="text-purple-700 text-sm">
                      Les <strong>dépendants</strong> répondent à la question : 
                      <em>"Quelles cellules seront affectées si je modifie cette valeur ?"</em>:cite[9]
                    </p>
                  </div>
                </div>
              </div>

              {/* Tableau comparatif */}
              <div className="bg-white rounded-2xl border-2 border-teal-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">📊 Antécédents vs Dépendants : Le Duel</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GitPullRequest className="w-8 h-8 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Antécédents</h5>
                    <p className="text-gray-600 text-sm mb-3">
                      <strong>Question :</strong> "D'où viennent mes données ?"<br/>
                      <strong>Réponse :</strong> Montre les cellules sources
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 text-sm font-semibold">Utilisation typique :</p>
                      <p className="text-blue-700 text-xs">Déboguer une formule qui donne un résultat incorrect</p>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GitBranch className="w-8 h-8 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Dépendants</h5>
                    <p className="text-gray-600 text-sm mb-3">
                      <strong>Question :</strong> "Qui utilise mes données ?"<br/>
                      <strong>Réponse :</strong> Montre les cellules impactées
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 text-sm font-semibold">Utilisation typique :</p>
                      <p className="text-green-700 text-xs">Évaluer l'impact d'une modification avant de la faire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Évaluer une Formule */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('evaluer_formule')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Search className="w-6 h-6 text-amber-600" />
            </div>
            3. Évaluer une Formule : Le Débogage Pas-à-Pas
          </h2>
          {expandedSections.evaluer_formule ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.evaluer_formule && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-600" />
                Voyez Comment Excel Calcule Votre Formule
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Le Microscope de Vos Calculs</h4>
                  <p className="text-gray-700 mb-4">
                    L'outil <strong>Évaluer la formule</strong> vous permet d'observer <strong>chaque étape de calcul</strong> 
                    comme si vous regardiez Excel réfléchir:cite[4]:cite[9].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-amber-200">
                      <h5 className="font-semibold text-gray-800 mb-3">🎯 Quand l'utiliser ?</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Formules complexes avec des erreurs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Comprendre l'ordre d'évaluation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex- shrink-0" />
                          <span>Vérifier les résultats intermédiaires</span>
                        </li>
                      </ul>
                    </div>

                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-3">📝 Procédure Pas-à-Pas</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Sélectionnez la cellule à analyser</li>
                        <li>Cliquez sur <strong>Évaluer la formule</strong>:cite[4]</li>
                        <li>Cliquez sur <strong>Évaluer</strong> pour avancer d'une étape</li>
                        <li>Observez la partie soulignée qui va être calculée</li>
                        <li>Continuez jusqu'au résultat final</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon18/evaluer-formule.gif" 
                    alt="Animation montrant l'évaluation pas-à-pas d'une formule"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400">
                    <h5 className="font-semibold text-amber-800 mb-2">💡 Exemple concret :</h5>
                    <p className="text-amber-700 text-sm">
                      Pour <code>=(A1+B1)*C1</code>, Excel évalue d'abord <code>A1+B1</code>, 
                      puis multiplie le résultat par <code>C1</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Démontration détaillée */}
              <div className="bg-white rounded-2xl border-2 border-green-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none mb-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">🔍 Démontration : Évaluation d'une Formule Complexe</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Formule à analyser :</h5>
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
      =SI(SOMME(B2:B10){">"}1000; SOMME(B2:B10)*0.9; SOMME(B2:B10)*1.1)
                    </div>
                    
                    <h5 className="font-semibold text-gray-800 mb-2">Étapes d'évaluation :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Calcul de <code>SOMME(B2:B10)</code> → <strong>1250</strong></li>
                      <li>Évaluation <code>1250{">"}1000</code> → <strong>VRAI</strong></li>
                      <li>Exécution de la branche VRAI : <code>1250*0.9</code></li>
                      <li>Résultat final : <strong>1125</strong></li>
                    </ol>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon18/demo-evaluation.png" 
                      alt="Capture de la fenêtre d'évaluation de formule"
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Bonnes pratiques */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                  <h5 className="font-semibold text-green-800 mb-2">✅ À FAIRE :</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Utiliser pour les formules imbriquées complexes</li>
                    <li>• Vérifier chaque résultat intermédiaire</li>
                    <li>• Noter les étapes problématiques</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                  <h5 className="font-semibold text-red-800 mb-2">❌ À ÉVITER :</h5>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Ignorer les erreurs dans les calculs intermédiaires</li>
                    <li>• Utiliser pour des formules simples évidentes</li>
                    <li>• Oublier de vérifier les références de cellules</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Fenêtre Espion */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('fenetre_espion')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            4. Fenêtre Espion : Surveillez l'Essentiel
          </h2>
          {expandedSections.fenetre_espion ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.fenetre_espion && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-600" />
                Votre Tableau de Bord Personnel
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Ne Perdez Plus de Vue Vos Cellules Importantes</h4>
                  <p className="text-gray-700 mb-4">
                    La <strong>Fenêtre Espion</strong> est un outil remarquable qui vous permet de <strong>surveiller 
                    des cellules stratégiques</strong> où qu'elles se trouvent dans votre classeur:cite[7].
                  </p>
                  
                  <div className="space-y-4">
                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-3">🎯 Configuration</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Onglet <strong>Formules → Fenêtre Espion</strong>:cite[7]</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Cliquez sur <strong>Ajouter une montre</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Sélectionnez les cellules à surveiller</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>La fenêtre reste visible pendant votre travail</span>
                        </li>
                      </ul>
                    </div>

                    <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-3">💾 Avantages Clés</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Évite le défilement</strong> permanent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Surveillance en temps réel</strong> des modifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span><strong>Fonctionne sur plusieurs feuilles</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon18/fenetre-espion.png" 
                    alt="Capture de la Fenêtre Espion Excel"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 className="font-semibold text-purple-800 mb-2">🎯 Cellules à surveiller :</h5>
                    <p className="text-purple-700 text-sm">
                      • Totaux généraux • Taux de calcul • Cellules de validation • Résultats finaux • 
                      Cellules avec des formules complexes
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide d'utilisation */}
              <div className="bg-white rounded-2xl border-2 border-teal-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Guide Complet : Maîtriser la Fenêtre Espion</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-teal-800 font-bold">1</span>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Ajouter des Espions</h5>
                    <p className="text-gray-600 text-sm">
                      Sélectionnez les cellules critiques et ajoutez-les à la fenêtre pour un monitoring constant.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-800 font-bold">2</span>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Organiser la Surveillance</h5>
                    <p className="text-gray-600 text-sm">
                      Triez les espions par valeur, formule ou feuille pour une consultation efficace.
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-800 font-bold">3</span>
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Analyser les Changements</h5>
                    <p className="text-gray-600 text-sm">
                      Observez en direct l'impact de vos modifications sur l'ensemble du classeur.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">💡 Scénario d'utilisation avancée :</h5>
                  <p className="text-gray-700 text-sm">
                    <strong>Dans un modèle financier complexe</strong>, ajoutez en surveillance : le résultat net, 
                    les ratios clés, et les hypothèses principales. Ainsi, toute modification d'une hypothèse 
                    montre immédiatement son impact sur les résultats finaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Le reste du contenu continuerait avec les sections Gestion des Erreurs, Cas Pratique et Exercice... */}

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon18 onResult={onResult} />
      </div>
    </div>
  );
}