import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon22 from "../../quizz/intermediaire/QuizLecon22";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Link,
  Filter,
  Trash2,
  Eye,
  EyeOff,
  Code,
  Zap,
  Settings,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Download,
  Video,
  Users,
  BarChart3,
  Sparkles,
  Target,
  Copy,
  RefreshCw,
  Search,
  FileText,
  Layers
} from "lucide-react";

export default function Lecon22({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    concepts_base: true,
    creation_liens: true,
    formules_references: true,
    gestion_liens: true,
    techniques_avancees: true,
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
      {/* En-tête avec nouveau dégradé */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Link className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Liens entre Feuilles et Classeurs Excel</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Créez des connections dynamiques pour automatiser vos données</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 22 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Link className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Références externes</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <FileText className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Formules liées</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Layers className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Multi-classeurs</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Automatisation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            Pourquoi Créer des Liens entre Vos Données ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-emerald-600" /> : 
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Centraliser l'Information sans la Dupliquer</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les liens entre feuilles et classeurs permettent de créer des tableaux de bord dynamiques, de centraliser des données maîtres et d'automatiser la mise à jour de vos rapports:cite[1]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Avantages principaux</h4>
                      <p className="text-gray-600">Données toujours à jour, réduction des erreurs de saisie, gain de temps considérable:cite[6]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Différence cruciale</h4>
                      <p className="text-gray-600">Un lien crée une référence dynamique, contrairement à un copier-coller statique:cite[1]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Lightbulb className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Scénarios d'utilisation</h4>
                      <p className="text-gray-600">Tableaux de bord, consolidation de données d'équipes, données maîtres partagées:cite[6]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon22/architecture-liens.png" 
                  alt="Schéma montrant les connexions entre classeurs Excel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Architecture typique avec classeur maître
                </div>
              </div>
            </div>

            {/* Section concepts clés */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-teal-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🎯 Concepts Clés à Maîtriser</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border-2 border-emerald-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-600" />
                      Référence externe
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Formule qui fait référence à une cellule dans un autre classeur. Exemple: <code>=[Budget.xlsx]Feuille1!$A$1</code>:cite[6].
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      Classeur source vs destination
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Le classeur source contient les données originales, le classeur destination les références:cite[1].
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-purple-600" />
                      Mise à jour des liens
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Excel peut mettre à jour automatiquement ou manuellement les données liées à l'ouverture:cite[1].
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-amber-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      Liens rompus
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Se produisent quand le classeur source est déplacé, renommé ou supprimé:cite[6].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Concepts de Base */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('concepts_base')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            Anatomie d'une Référence Externe
          </h2>
          {expandedSections.concepts_base ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.concepts_base && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Comprendre la Syntaxe des Liens</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🧩 Structure d'une Référence</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Entre feuilles du même classeur</h5>
                    <code className="block bg-gray-100 p-3 rounded text-sm font-mono mb-2">
                      =Feuille2!A1
                    </code>
                    <p className="text-gray-600 text-sm">
                      Référence simple à une autre feuille du même fichier:cite[6].
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Entre classeurs différents</h5>
                    <code className="block bg-gray-100 p-3 rounded text-sm font-mono mb-2">
                      =[ClasseurSource.xlsx]Feuille1!$A$1
                    </code>
                    <p className="text-gray-600 text-sm">
                      Référence complète incluant le nom du classeur:cite[6].
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Avec chemin d'accès complet</h5>
                    <code className="block bg-gray-100 p-3 rounded text-sm font-mono mb-2 break-all">
                      ='C:\Mes Documents\[ClasseurSource.xlsx]Feuille1'!$A$1
                    </code>
                    <p className="text-gray-600 text-sm">
                      Référence absolue avec emplacement exact du fichier:cite[1].
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon22/anatomie-reference.png" 
                  alt="Schéma annoté montrant les différentes parties d'une référence externe"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <h5 className="font-semibold text-amber-800 mb-2">💡 Règle importante</h5>
                  <p className="text-amber-700 text-sm">
                    Les guillemets simples <code>'</code> apparaissent automatiquement quand le nom de feuille contient des espaces. Excel les ajoute lors de la création de la référence:cite[6].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau explication syntaxe */}
            <div className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
              <div className="bg-teal-500 p-4 text-white">
                <h4 className="font-bold text-lg">Composants d'une Référence Externe</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Élément</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Description</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Obligatoire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Nom du classeur</td>
                      <td className="p-4 text-gray-600 text-sm">Fichier source entre crochets</td>
                      <td className="p-4 text-gray-600 text-sm"><code>[Ventes.xlsx]</code></td>
                      <td className="p-4 text-gray-600 text-sm">Entre classeurs seulement</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Nom de la feuille</td>
                      <td className="p-4 text-gray-600 text-sm">Feuille source</td>
                      <td className="p-4 text-gray-600 text-sm"><code>Feuille1</code> ou <code>'Nom Feuille'</code></td>
                      <td className="p-4 text-gray-600 text-sm">Toujours</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Point d'exclamation</td>
                      <td className="p-4 text-gray-600 text-sm">Sépare la référence de feuille et la cellule</td>
                      <td className="p-4 text-gray-600 text-sm"><code>!</code></td>
                      <td className="p-4 text-gray-600 text-sm">Toujours</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Référence de cellule</td>
                      <td className="p-4 text-gray-600 text-sm">Cellule ou plage cible</td>
                      <td className="p-4 text-gray-600 text-sm"><code>A1</code> ou <code>$A$1:$B$10</code></td>
                      <td className="p-4 text-gray-600 text-sm">Toujours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Création de Liens - Méthodes Manuelles */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('creation_liens')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            Création Manuelle des Liens
          </h2>
          {expandedSections.creation_liens ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.creation_liens && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Deux Méthodes pour Établir des Connexions</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Méthode 1 : Saisie Manuelle</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Pour les utilisateurs avancés qui connaissent la syntaxe exacte.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Cliquez sur la cellule destination</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Tapez <code>=</code> puis la référence complète</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Appuyez sur Entrée</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Méthode 2 : Pointage Souris</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Méthode recommandée pour éviter les erreurs de syntaxe:cite[1].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Ouvrez les deux classeurs (source et destination)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Dans le classeur destination, tapez <code>=</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Basculez vers le classeur source et cliquez sur la cellule</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Appuyez sur Entrée, Excel crée automatiquement la référence:cite[1]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon22/creation-lien-pointage.gif" 
                  alt="Animation montrant la création d'un lien par pointage souris"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🎯 Avantage du pointage</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Syntaxe automatique :</strong> Excel génère la référence correcte avec tous les guillemets et crochets nécessaires</p>
                    <p><strong>Évite les erreurs :</strong> Impossible de se tromper dans le nom du classeur ou de la feuille</p>
                    <p><strong>Chemin complet :</strong> Inclut automatiquement le chemin d'accès si les classeurs sont dans des dossiers différents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide étape par étape */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Guide Visuel : Création par Pointage</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                    <h5 className="font-semibold text-gray-800">Préparation</h5>
                    <p className="text-gray-600 text-sm mt-2">Ouvrez les deux classeurs et arrangez les fenêtres côte à côte</p>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">2</div>
                    <h5 className="font-semibold text-gray-800">Initiation</h5>
                    <p className="text-gray-600 text-sm mt-2">Dans le classeur destination, sélectionnez la cellule et tapez <code>=</code></p>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                    <h5 className="font-semibold text-gray-800">Pointage</h5>
                    <p className="text-gray-600 text-sm mt-2">Cliquez sur la cellule source dans l'autre classeur et validez</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Points d'attention</h5>
                  <p className="text-gray-600 text-sm">
                    Si vous fermez le classeur source, Excel ajoutera automatiquement le chemin complet du fichier à la référence. C'est normal et nécessaire pour maintenir le lien:cite[6].
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gestion et Maintenance des Liens */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('gestion_liens')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <RefreshCw className="w-6 h-6 text-amber-600" />
            </div>
            Gérer et Maintenir Vos Liens
          </h2>
          {expandedSections.gestion_liens ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.gestion_liens && (
          <div className="p-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Maintenance proactive</h4>
                  <p className="text-blue-700 text-sm">
                    Une bonne gestion des liens évite les erreurs et garantit l'intégrité de vos données lors des partages ou déplacements de fichiers:cite[1]:cite[6].
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Outils de Gestion Intégrés</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Éditeur de liens</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Accédez à <strong>Données → Éditer les liens</strong> pour:cite[1] :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Voir tous les liens externes du classeur</li>
                      <li>Mettre à jour les valeurs manuellement</li>
                      <li>Changer la source si un fichier a été déplacé</li>
                      <li>Rompre définitivement les liens</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Options de mise à jour</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Contrôlez le comportement à l'ouverture :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li><strong>Automatique :</strong> Excel met à jour sans demander (défaut)</li>
                      <li><strong>Manuelle :</strong> Vous contrôlez quand actualiser</li>
                      <li><strong>Demander :</strong> Excel demande à chaque ouverture:cite[1]</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon22/editeur-liens.png" 
                  alt="Capture d'écran de l'éditeur de liens d'Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="text-center text-sm text-gray-600">
                  Interface de l'éditeur de liens montrant les connexions externes
                </div>
              </div>
            </div>

            {/* Tableau résolution problèmes */}
            <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
              <div className="bg-red-500 p-4 text-white">
                <h4 className="font-bold text-lg">Résolution des Problèmes Courants</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Problème</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Symptôme</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Lien rompu</td>
                      <td className="p-4 text-gray-600 text-sm">#REF! dans les cellules</td>
                      <td className="p-4 text-gray-600 text-sm">Utilisez l'éditeur de liens pour mettre à jour la source:cite[6]</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Classeur source non trouvé</td>
                      <td className="p-4 text-gray-600 text-sm">Message d'erreur à l'ouverture</td>
                      <td className="p-4 text-gray-600 text-sm">Recherchez manuellement le fichier ou restaurez-le à son emplacement d'origine</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Liens non mis à jour</td>
                      <td className="p-4 text-gray-600 text-sm">Valeurs obsolètes</td>
                      <td className="p-4 text-gray-600 text-sm">Données → Éditer les liens → Mettre à jour les valeurs:cite[1]</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Performances lentes</td>
                      <td className="p-4 text-gray-600 text-sm">Ouverture très lente</td>
                      <td className="p-4 text-gray-600 text-sm">Passez en mise à jour manuelle ou consolidez les données</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            Exercice Pratique : Tableau de Bord Multi-Sources
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Consolider des Données Commerciales</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte</h4>
                  <p className="text-gray-700 mb-4">
                    Votre entreprise a trois fichiers Excel distincts pour les ventes par région (Nord, Sud, Est). Vous devez créer un tableau de bord central qui agrège automatiquement toutes les données.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif principal</p>
                        <p className="text-sm text-gray-600">Créer un classeur maître avec des liens vers les trois fichiers régionaux</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Layers className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Architecture</p>
                        <p className="text-sm text-gray-600">1 classeur maître + 3 classeurs sources (Nord, Sud, Est)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon22/architecture-exercice.png" 
                    alt="Architecture de l'exercice avec classeur maître et sources régionales"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Consignes de l'Exercice</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <span>Téléchargez les quatre fichiers d'exercice (maître + 3 régions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Dans le classeur maître, créez des liens vers les totaux de chaque région</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Calculez le total général qui se met à jour automatiquement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Testez en modifiant les valeurs dans les classeurs régionaux</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon22/exercice-tableau-bord.zip" 
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon22/correction-tableau-bord.mp4"
                      title="Correction détaillée de l'exercice tableau de bord"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères d'Évaluation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Liens fonctionnels créés avec la méthode de pointage</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Total général qui calcule correctement la somme des trois régions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Mise à jour automatique lorsque les données sources sont modifiées</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Gestion correcte des références absolues et relatives</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Optionnel</h5>
                  <p className="text-sm text-gray-600">
                    Ajoutez un graphique dans le classeur maître qui se met à jour automatiquement quand les données régionales changent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon22 onResult={onResult} />
      </div>
    </div>
  );
}