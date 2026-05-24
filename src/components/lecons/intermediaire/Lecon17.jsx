import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon17 from "../../quizz/intermediaire/QuizLecon17";
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
  Square, // Use 'Square' or 'Circle' instead of 'Circle'
  Terminal,
  Shield,
  Brain,
  Rocket,
  Circle,
  
} from "lucide-react";

export default function Lecon17({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    concepts: true,
    activation: true,
    premiere_macro: true,
    utilisation: true,
    securite: true,
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
      {/* En-tête avec nouveau dégradé violet/rose */}
    <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Rocket className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-4xl font-bold break-words">Macros Excel : Automatisation Intelligente</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Enregistrez, Exécutez, Automatisez - Gagnez un temps précieux</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 17 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Circle className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Enregistrement</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Play className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Exécution</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Brain className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Automatisation</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Shield className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Sécurité</p>
      </div>
    </div>
  </div>
</div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-violet-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            Découverte des Macros : Votre Assistant Personnel dans Excel
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                  L'Automatisation à Votre Portée
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Une macro Excel est une <strong>séquence d'actions enregistrée</strong> que vous pouvez exécuter automatiquement pour accomplir des tâches répétitives en un clic . 
                  Imaginez pouvoir reproduire des heures de travail en quelques secondes !
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gain de temps exceptionnel</h4>
                      <p className="text-gray-600 text-sm">Automatisez les tâches répétitives et gagnez plusieurs heures par semaine </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Élimination des erreurs</h4>
                      <p className="text-gray-600 text-sm">Une macro exécute toujours les mêmes actions parfaitement, sans oubli ni erreur humaine </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Accessible à tous</h4>
                      <p className="text-gray-600 text-sm">Aucune connaissance en programmation requise grâce à l'enregistreur de macros </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon17/macro-process.png" 
                  alt="Diagramme montrant le processus d'enregistrement et d'exécution d'une macro"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                
              </div>
            </div>

            {/* Tableau comparatif Avant/Après */}
            <div className="mt-12 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <GitCompare className="w-5 h-5" />
                  Avant vs Après les Macros : La Révolution de Votre Productivité
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Sans Macro</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avec Macro</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Mise en forme de rapport</td>
                      <td className="p-4 text-gray-700">15 minutes manuelles</td>
                      <td className="p-4 text-gray-700">3 secondes</td>
                      <td className="p-4 text-green-600 font-semibold">99.7%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Import de données mensuel</td>
                      <td className="p-4 text-gray-700">2 heures de manipulation</td>
                      <td className="p-4 text-gray-700">30 secondes</td>
                      <td className="p-4 text-green-600 font-semibold">99.6%</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="p-4 font-semibold text-purple-700 border-l-4 border-purple-500">Création de tableau de bord</td>
                      <td className="p-4 text-gray-700">45 minutes de configuration</td>
                      <td className="p-4 text-gray-700">10 secondes</td>
                      <td className="p-4 text-green-600 font-semibold">99.6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Concepts Fondamentaux */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('concepts')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            1. Comprendre les Macros : Notions Essentielles
          </h2>
          {expandedSections.concepts ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.concepts && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Bookmark className="w-6 h-6 text-blue-600" />
                Qu'est-ce qu'une Macro Exactement ?
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Définition Simple</h4>
                  <p className="text-gray-700 mb-4">
                    Une macro est un <strong>enregistrement de vos actions</strong> dans Excel qui peut être rejoué à l'identique autant de fois que nécessaire . 
                    C'est comme si vous pouviez enregistrer votre façon de travailler et la rejouer en accéléré.
                  </p>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 mb-4">
                    <h5 className="font-semibold text-blue-800 mb-2">🧠 Analogie :</h5>
                    <p className="text-blue-700 text-sm">
                      "Une macro, c'est comme apprendre un nouveau raccourci clavier, mais en mille fois plus puissant. 
                      Au lieu de mémoriser Ctrl+C pour copier, vous mémorisez une séquence complète de 50 actions en un seul raccourci !"
                    </p>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-3">Comment ça marche ?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-700 text-sm">
                        <strong>Enregistrement :</strong> Excel observe et note chaque clic, frappe au clavier et action que vous effectuez 
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-700 text-sm">
                        <strong>Traduction :</strong> Ces actions sont converties en code VBA (Visual Basic for Applications) 
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-700 text-sm">
                        <strong>Exécution :</strong> Le code est rejoué exactement, reproduisant fidèlement vos actions 
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon17/concept-macro.png" 
                    alt="Schéma expliquant le fonctionnement d'une macro"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-white p-4 rounded-xl border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-green-600" />
                      Le Saviez-vous ?
                    </h5>
                    <p className="text-gray-700 text-sm">
                      <strong>VBA</strong> (Visual Basic for Applications) est le langage de programmation derrière les macros. 
                      Mais bonne nouvelle : <strong>vous n'avez pas besoin de le connaître</strong> pour utiliser les macros ! 
                      L'enregistreur fait tout le travail pour vous .
                    </p>
                  </div>
                </div>
              </div>

              {/* Types de macros */}
              <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Les Deux Types de Macros</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Circle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Macros Enregistrées</h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Idéal pour débutants</strong><br/>
                      Créées avec l'enregistreur<br/>
                      Aucune programmation requise<br/>
                      Parfaites pour l'automatisation simple
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Terminal className="w-8 h-8 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Macros Programmées</h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Niveau avancé</strong><br/>
                      Écrites manuellement en VBA<br/>
                      Plus de flexibilité et puissance<br/>
                      Logique conditionnelle possible
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <p className="text-amber-700 text-sm text-center">
                    <strong>Dans cette leçon :</strong> Nous nous concentrons sur les <strong>macros enregistrées</strong>, 
                    la méthode la plus accessible pour commencer l'automatisation dans Excel .
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Activation et Préparation */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('activation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            2. Préparer Excel : Activer l'Onglet Développeur
          </h2>
          {expandedSections.activation ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.activation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-green-600" />
                L'Onglet Développeur : Votre Centre de Contrôle des Macros
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Par mesure de sécurité, l'onglet Développeur contenant les outils macros est <strong>masqué par défaut</strong> dans Excel. 
                    Voici comment l'activer :
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étapes détaillées :</h5>
                      <ol className="text-sm text-gray-600 space-y-3 list-decimal pl-4">
                        <li>
                          <strong>Cliquez sur Fichier</strong> puis <strong>Options</strong> 
                        </li>
                        <li>
                          Sélectionnez <strong>Personnaliser le ruban</strong> dans le volet de gauche
                        </li>
                        <li>
                          Dans la colonne de droite <strong>Onglets principaux</strong>, cochez la case <strong>Développeur</strong> 
                        </li>
                        <li>
                          <strong>Cliquez sur OK</strong> pour valider
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Vérification
                      </h5>
                      <p className="text-green-700 text-sm">
                        L'onglet <strong>Développeur</strong> apparaît maintenant dans votre ruban Excel, 
                        avec les groupes <strong>Code</strong> et <strong>Contrôles</strong> contenant vos outils macros.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon17/onglet-developpeur.png" 
                    alt="Capture d'écran montrant l'activation de l'onglet Développeur"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">📍 À retenir :</h5>
                    <p className="text-blue-700 text-sm">
                      L'onglet Développeur reste activé <strong>définitivement</strong> une fois configuré. 
                      Vous n'aurez plus à refaire cette manipulation sur votre ordinateur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Découverte de l'onglet Développeur */}
              <div className="bg-white rounded-2xl border-2 border-purple-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Explorez Votre Nouvel Onglet Développeur
                  </h4>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Circle className="w-6 h-6 text-purple-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Enregistrer une macro</h5>
                      <p className="text-gray-600 text-sm">
                        Démarre l'enregistrement de vos actions
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Square className="w-6 h-6 text-green-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Arrêter l'enregistrement</h5>
                      <p className="text-gray-600 text-sm">
                        Termine l'enregistrement en cours
                      </p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Macros</h5>
                      <p className="text-gray-600 text-sm">
                        Voir, exécuter et gérer vos macros
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Première Macro */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('premiere_macro')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Circle className="w-6 h-6 text-orange-600" />
            </div>
            3. Enregistrer Votre Première Macro
          </h2>
          {expandedSections.premiere_macro ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.premiere_macro && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" />
                Guide Pas-à-Pas : Macro de Mise en Forme
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Pratique</h4>
                  <p className="text-gray-700 mb-4">
                    Créons une macro qui <strong>automatise la mise en forme d'un titre de rapport</strong> : 
                    centrage, couleur de fond, police en gras et taille augmentée.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        Démarrer l'Enregistrement
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span>Onglet <strong>Développeur</strong> → <strong>Enregistrer une macro</strong> </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span>Nom : <code className="bg-gray-100 px-1 rounded">MiseEnFormeTitre</code> (pas d'espaces!)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span>Raccourci : <code className="bg-gray-100 px-1 rounded">Ctrl+Shift+T</code> (facultatif)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span>Description : <em>"Met en forme un titre de rapport"</em></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span>Cliquez sur <strong>OK</strong> pour démarrer </span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        Effectuer les Actions
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Sélectionnez une cellule contenant du texte</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Appliquez <strong>Centré</strong> (onglet Accueil)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Police : <strong>Gras</strong>, taille <strong>14</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Couleur de fond : <strong>Bleu clair</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Couleur de police : <strong>Blanc</strong></span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        Arrêter l'Enregistrement
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Onglet <strong>Développeur</strong> → <strong>Arrêter l'enregistrement</strong> </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Square className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Félicitations ! Votre première macro est créée 🎉</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon17/enregistrement-macro.gif" 
                    alt="Capture des étapes d'enregistrement d'une macro"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 className="font-semibold text-purple-800 mb-2">💡 Conseil Pro :</h5>
                    <p className="text-purple-700 text-sm">
                      <strong>Répétez mentalement vos actions avant d'enregistrer</strong>. 
                      Plus votre séquence est fluide, plus votre macro sera propre et efficace .
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400">
                    <h5 className="font-semibold text-amber-800 mb-2">⚠️ Attention :</h5>
                    <p className="text-amber-700 text-sm">
                      <strong>Toutes vos actions sont enregistrées</strong>, même les erreurs ! 
                      Si vous vous trompez, il vaut mieux tout recommencer plutôt que de corriger pendant l'enregistrement .
                    </p>
                  </div>
                </div>
              </div>

              {/* Bonnes pratiques d'enregistrement */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 mt-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">📝 Checklist de Pré-enregistrement</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-3">✅ À FAVORISER :</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Répéter la séquence</strong> à blanc plusieurs fois</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Utiliser des raccourcis clavier</strong> quand possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Travailler lentement</strong> et méthodiquement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-3">❌ À ÉVITER :</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Actions inutiles</strong> ou hésitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Sélections à la souris</strong> imprécises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Ouvrir d'autres applications</strong> pendant l'enregistrement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Utilisation des Macros */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-red-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-pink-50 text-left hover:from-red-100 transition-all"
          onClick={() => toggleSection('utilisation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <Play className="w-6 h-6 text-red-600" />
            </div>
            4. Exécuter et Utiliser Vos Macros
          </h2>
          {expandedSections.utilisation ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.utilisation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-red-600" />
                Plusieurs Façons d'Exécuter Vos Macros
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Méthode 1 : Raccourci clavier */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Copy className="w-5 h-5" />
                      Raccourci Clavier
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Le moyen <strong>le plus rapide</strong> si vous avez défini un raccourci lors de la création.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Extrêmement rapide</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Mémorisation facile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Idéal pour les macros fréquentes</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 text-sm font-semibold">Exemple :</p>
                      <code className="text-blue-700 text-sm">Ctrl+Shift+T</code>
                    </div>
                  </div>
                </div>

                {/* Méthode 2 : Onglet Développeur */}
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Onglet Développeur
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      La méthode <strong>la plus complète</strong> pour gérer toutes vos macros.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Vue d'ensemble de toutes les macros</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Possibilité de modification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Options avancées</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 text-sm font-semibold">Accès :</p>
                      <code className="text-green-700 text-sm">Développeur → Macros → Sélectionner → Exécuter</code>
                    </div>
                  </div>
                </div>

                {/* Méthode 3 : Bouton */}
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Box className="w-5 h-5" />
                      Bouton dans la Feuille
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Le plus intuitif</strong> pour partager avec d'autres utilisateurs.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Très visuel et accessible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Idéal pour les tableaux de bord</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Personnalisable</span>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-800 text-sm font-semibold">Création :</p>
                      <code className="text-purple-700 text-sm">Développeur → Insérer → Bouton (Contrôles de formulaire)</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tutoriel détaillé bouton */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Créer un Bouton pour Votre Macro</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Étapes :</h5>
                    <ol className="text-sm text-gray-600 space-y-3 list-decimal pl-4">
                      <li>
                        <strong>Onglet Développeur</strong> → <strong>Insérer</strong> → <strong>Bouton (Contrôles de formulaire)</strong> 
                      </li>
                      <li>
                        <strong>Dessinez le bouton</strong> dans votre feuille avec la souris
                      </li>
                      <li>
                        La boîte de dialogue <strong>Affecter une macro</strong> s'ouvre automatiquement
                      </li>
                      <li>
                        <strong>Sélectionnez votre macro</strong> dans la liste
                      </li>
                      <li>
                        <strong>Cliquez sur OK</strong> - Votre bouton est maintenant opérationnel !
                      </li>
                      <li>
                        <strong>Personnalisez le texte</strong> du bouton en cliquant droit → Modifier le texte
                      </li>
                    </ol>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon17/bouton-macro.gif" 
                      alt="Capture montrant la création d'un bouton pour macro"
                      className="rounded-xl shadow-md max-w-xs"
                    />
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-semibold text-green-800 mb-2">✅ Avantage :</h5>
                    <p className="text-green-700 text-sm">
                      Les boutons rendent les macros <strong>accessibles à tous</strong>, même aux utilisateurs qui ne connaissent pas Excel. 
                      Parfait pour les rapports partagés !
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-semibold text-blue-800 mb-2">💡 Astuce :</h5>
                    <p className="text-blue-700 text-sm">
                      Utilisez des <strong>noms explicites</strong> pour vos boutons : "GénérerLeRapport" plutôt que "Macro1". 
                      Cela améliore l'expérience utilisateur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Sécurité et Bonnes Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-slate-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-slate-50 to-gray-50 text-left hover:from-slate-100 transition-all"
          onClick={() => toggleSection('securite')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-slate-100 p-3 rounded-xl">
              <Shield className="w-6 h-6 text-slate-600" />
            </div>
            5. Sécurité et Gestion des Macros
          </h2>
          {expandedSections.securite ? 
            <ChevronUp className="w-6 h-6 text-slate-600" /> : 
            <ChevronDown className="w-6 h-6 text-slate-600" />
          }
        </button>
        
        {expandedSections.securite && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-slate-600" />
                  Comprendre la Sécurité des Macros
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">⚠️ Pourquoi Excel bloque les macros ?</h5>
                    <p className="text-gray-700 text-sm mb-3">
                      Les macros peuvent contenir du code malveillant. Par mesure de sécurité, Excel les désactive par défaut .
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Risque de virus</strong> et programmes malveillants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Protection des données</strong> sensibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span><strong>Prévention des actions</strong> non désirées</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">✅ Niveaux de Sécurité Recommandés</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>"Désactiver toutes les macros avec notification"</strong><br/>
                          <em>Meilleur compromis sécurité/commodité</em> 
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Activer les macros uniquement</strong> pour les fichiers de confiance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Vérifier la source</strong> avant d'activer des macros
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-slate-600" />
                  Configurer la Sécurité des Macros
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">🔧 Accès aux Paramètres de Sécurité</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li><strong>Fichier</strong> → <strong>Options</strong></li>
                      <li><strong>Centre de gestion de la confidentialité</strong> → <strong>Paramètres du Centre de gestion...</strong></li>
                      <li><strong>Paramètres des macros</strong></li>
                      <li><strong>Choisir le niveau de sécurité</strong></li>
                      <li><strong>OK</strong> pour valider</li>
                    </ol>
                       <ImageZoomable 
                      src="/cours/intermediaire/lecon17/parametres_securite_macro.png" 
                      alt="Capture montrant la création d'un bouton pour macro"
                      className="rounded-xl shadow-md max-w-xs"
                    />
                  </div>
                 
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">💾 Enregistrement avec Macros</h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Les fichiers contenant des macros doivent être enregistrés avec une extension spéciale :
                    </p>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-semibold">Classeur Excel prenant en charge les macros</span>
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm">.xlsm</code>
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Excel vous proposera automatiquement ce format lorsque vous enregistrerez un fichier contenant des macros .
                    </p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Message d'alerte typique */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-amber-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🚨 Reconnaître les Messages de Sécurité</h4>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-amber-800 mb-1">Macros ont été désactivées</h5>
                    <p className="text-amber-700 text-sm">
                      Excel a détecté des macros dans ce fichier. Les macros peuvent contenir des virus et sont potentiellement dangereuses. 
                      N'activez ce contenu que si vous faites confiance à la source du fichier.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button className="bg-amber-600 text-white px-3 py-1 rounded text-xs font-semibold">
                        Activer le contenu
                      </button>
                      <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-semibold">
                        Plus d'informations
                      </button>
                    </div>
                  </div>
                </div>
                 
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 text-xs">
                    <strong>✅ À FAIRE :</strong> Cliquez sur "Activer le contenu" uniquement si le fichier provient d'une source de confiance (vous-même, un collègue, un service interne).
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-red-800 text-xs">
                    <strong>❌ À ÉVITER :</strong> N'activez jamais les macros provenant de sources inconnues (emails non sollicités, sites web non vérifiés).
                  </p>
                </div>
              </div>
            </div>
             
          </div>
          
        )}
      </div>

      {/* Section 6 : Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('cas_pratique')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <PieChart className="w-6 h-6 text-emerald-600" />
            </div>
            6. Cas Pratique : Automatisation d'un Rapport Hebdomadaire
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
                Scénario Réel : Économiser 2 Heures par Semaine
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">La Situation Initiale</h4>
                  <p className="text-gray-700 mb-4">
                    Chaque lundi matin, Julie, assistante commerciale, passe <strong>2 heures à préparer le rapport de vente hebdomadaire</strong>. 
                    Sa tâche comprend :
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <Clock className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Mise en forme des données brutes</h5>
                        <p className="text-gray-600 text-sm">15 minutes de manipulation manuelle</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <BarChart3 className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Création des tableaux croisés dynamiques</h5>
                        <p className="text-gray-600 text-sm">45 minutes de configuration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <LineChart className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Génération des graphiques</h5>
                        <p className="text-gray-600 text-sm">30 minutes de design et mise en forme</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                      <Copy className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-gray-800">Finalisation et vérification</h5>
                        <p className="text-gray-600 text-sm">30 minutes de relecture et ajustements</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon17/rapport-ventes.png" 
                    alt="Avant/Après l'automatisation du rapport de vente"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                  <div className="mt-4 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                    <h5 className="font-semibold text-emerald-800 mb-2">Objectif de l'Automatisation</h5>
                    <p className="text-emerald-700 text-sm">
                      Remplacer ces <strong>2 heures de travail manuel</strong> par une macro qui exécute l'ensemble du processus en <strong>moins de 30 secondes</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution macro */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 mb-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">💡 La Solution : Macro "RapportHebdo"</h4>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        Actions Automatisées
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Nettoyage</strong> des données brutes importées</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Création automatique</strong> des tableaux croisés dynamiques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Génération des graphiques</strong> pré-formatés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Application du template</strong> de mise en forme</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Enregistrement</strong> dans le dossier des rapports</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon17/macro-rapport.png" 
                        alt="Capture de la macro d'automatisation de rapport"
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
                        Mise en Œuvre
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Enregistrement</strong> de la macro en une seule séquence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Test</strong> sur différents jeux de données</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Création d'un bouton</strong> "Générer le rapport"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Circle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span><strong>Formation</strong> des collègues à son utilisation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center lg:order-1">
                      <ImageZoomable 
                        src="/cours/intermediaire/lecon17/bouton-rapport.png" 
                        alt="Bouton d'exécution de la macro de rapport"
                        className="rounded-lg shadow-md max-w-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Résultats et bénéfices */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">📊 Résultats et Bénéfices Obtenus</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-xl border-2 border-green-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Avant/Après</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Temps de traitement :</span>
                        <div className="flex gap-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm line-through">2h00</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">0h00:30</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Risque d'erreur :</span>
                        <div className="flex gap-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm line-through">Élevé</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Nul</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Reproductibilité :</span>
                        <div className="flex gap-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm line-through">Variable</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">Parfaite</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="text-gray-700 font-semibold">Gain annuel estimé :</span>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">100+ heures</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-2 border-blue-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Bénéfices Collatéraux</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Standardisation</strong> de la présentation des rapports</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Formation accélérée</strong> des nouveaux collaborateurs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Capacité</strong> à traiter plus de données</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span><strong>Meilleure humeur</strong> le lundi matin !</span>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Conclusion :</strong> En investissant <strong>2 heures pour créer la macro</strong>, 
                        Julie a économisé <strong>100 heures de travail fastidieux</strong> sur une année. 
                        C'est ce qu'on appelle un excellent retour sur investissement !
                      </p>
                    </div>
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
            Exercice Pratique : Créer Votre Première Macro Utile
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
                Mission : Automatiser le Nettoyage de Données Brutes
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Réeliste</h4>
                  <p className="text-gray-700 mb-4">
                    Vous recevez quotidiennement un export de données depuis votre logiciel de gestion. 
                    Ces données brutes nécessitent toujours les mêmes corrections avant analyse.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">20-30 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Débutant/Intermédiaire</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-purple-200">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Compétences évaluées</p>
                        <p className="text-sm text-gray-600">Enregistrement, Exécution, Gestion</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon17/exercice-donnees-brutes.png" 
                    alt="Aperçu des données brutes à nettoyer"
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
                    Tâches à Automatiser
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Supprimer les lignes vides</strong> dans le dataset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Uniformiser la mise en forme</strong> des dates (JJ/MM/AAAA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Corriger les en-têtes</strong> de colonnes (Première lettre en majuscule)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Appliquer un filtre automatique</strong> sur toutes les colonnes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Mettre en forme</strong> les montants en euros (style monétaire)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Contraintes Techniques
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Nom de la macro : <code className="bg-gray-100 px-1 rounded">NettoyageDonneesBrutes</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Raccourci clavier : <code className="bg-gray-100 px-1 rounded">Ctrl+Shift+N</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Description explicite obligatoire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span>Enregistrement dans <strong>ce classeur</strong></span>
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
                    Étapes de Création
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Préparer</strong> : Télécharger le fichier d'exercice et repérer les actions nécessaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Circle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Enregistrer</strong> : Démarrer l'enregistrement et effectuer toutes les tâches de nettoyage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Square className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Arrêter</strong> : Terminer l'enregistrement et vérifier le nom attribué</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Play className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Tester</strong> : Exécuter la macro sur un nouveau jeu de données brutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Box className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Optimiser</strong> : Créer un bouton pour une exécution simplifiée</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Validation des Résultats
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Vérifier que <strong>toutes les lignes vides sont supprimées</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Confirmer l'<strong>uniformisation des formats</strong> de date et monétaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Tester le <strong>fonctionnement des filtres automatiques</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span>Vérifier que la macro est <strong>opérationnelle via le bouton</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Critères d'Évaluation
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">📊 Aspects techniques :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enregistrement correct de la macro</li>
                    <li>• Respect du nommage et du raccourci</li>
                    <li>• Exécution sans erreur</li>
                    <li>• Fonctionnalité du bouton</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">💡 Qualité des résultats :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nettoyage complet des données</li>
                    <li>• Uniformisation des formats</li>
                    <li>• Mise en forme professionnelle</li>
                    <li>• Gain de temps démontré</li>
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
                  Téléchargez le jeu de données brutes à nettoyer :
                </p>
                <a href="/cours/intermediaire/lecon17/exercice-donnees-brutes.xlsx" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger l'Exercice (.xlsx)
                </a>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-purple-600" />
                  Solution Guidée
                </h4>
                <p className="text-gray-700 mb-4">
                  Correction complète avec explications détaillées :
                </p>
                <PremiumVideo
                  url="/cours/intermediaire/lecon17/correction-macro-nettoyage.mp4"
                  title="Correction de la macro de nettoyage de données"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon17 onResult={onResult} />
      </div>
    </div>
  );
}