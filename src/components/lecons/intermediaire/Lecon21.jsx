import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon21 from "../../quizz/intermediaire/QuizLecon21";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
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
  Search
} from "lucide-react";

export default function Lecon21({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    methodes_detection: true,
    filtrage_avance: true,
    suppression_doublons: true,
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
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Filter className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Gestion des Doublons dans Excel</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez le filtrage et la suppression des données dupliquées</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 21 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Filter className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Filtrage Avancé</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Trash2 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Suppression</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Eye className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Visualisation</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Nettoyage</p>
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
            Pourquoi Gérer les Doublons ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">L'Impact des Données Dupliquées sur Vos Analyses</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les doublons peuvent fausser vos analyses, gonfler artificiellement vos totaux et réduire la fiabilité de vos rapports. Savoir les identifier et les gérer est crucial pour maintenir l'intégrité de vos données:cite[7].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Problèmes causés par les doublons</h4>
                      <p className="text-gray-600">Analyses faussées, décisions erronées, perte de confiance dans les données:cite[7]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Différence cruciale</h4>
                      <p className="text-gray-600">Le filtrage masque temporairement, la suppression efface définitivement:cite[1]:cite[4]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Lightbulb className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Bonnes pratiques</h4>
                      <p className="text-gray-600">Toujours faire une sauvegarde avant de supprimer des doublons:cite[3]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon21/impact-doublons.png" 
                  alt="Comparaison avant/après la gestion des doublons"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Impact visuel du nettoyage
                </div>
              </div>
            </div>

            {/* Section concepts clés */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-purple-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🎯 Concepts Clés à Comprendre</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Filter className="w-5 h-5 text-blue-600" />
                      Filtrage des valeurs uniques
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Masque temporairement les doublons sans affecter les données originales. Idéal pour l'analyse exploratoire:cite[1].
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-green-600" />
                      Mise en forme conditionnelle
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Visualisez les doublons avec des couleurs pour prendre des décisions éclairées avant suppression:cite[3]:cite[6].
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border-2 border-red-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Trash2 className="w-5 h-5 text-red-600" />
                      Suppression des doublons
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Supprime définitivement les lignes dupliquées. Excel conserve la première occurrence et supprime les suivantes:cite[1]:cite[3].
                    </p>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-600" />
                      Fonction UNIQUE
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Nouvelle fonction dynamique (Excel 365) qui extrait automatiquement les valeurs uniques:cite[7].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Méthodes de Détection */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('methodes_detection')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Search className="w-6 h-6 text-green-600" />
            </div>
            Détection et Visualisation des Doublons
          </h2>
          {expandedSections.methodes_detection ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.methodes_detection && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Identifier les Doublons Avant de les Supprimer</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🎨 Mise en Forme Conditionnelle</h4>
                <p className="text-gray-700 mb-4">
                  La méthode la plus rapide pour visualiser les doublons. Excel les colore automatiquement pour une identification immédiate:cite[3]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Étapes :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Sélectionnez la plage de données à analyser</li>
                      <li>Accueil → Mise en forme conditionnelle</li>
                      <li>Règles de mise en surbrillance → Valeurs dupliquées:cite[3]</li>
                      <li>Choisissez un format de couleur distinctif</li>
                    </ol>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h5 className="font-semibold text-yellow-800 mb-2">💡 Astuce :</h5>
                    <p className="text-yellow-700 text-sm">
                      Utilisez la formule <code>=NB.SI(A:A,A1)&gt;1</code> pour une mise en forme conditionnelle avancée avec plus de contrôle:cite[6].
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon21/mise-forme-conditionnelle.gif" 
                  alt="Animation démontrant l'application de mise en forme conditionnelle"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="text-center text-sm text-gray-600">
                  Application de la mise en forme conditionnelle pour visualiser les doublons
                </div>
              </div>
            </div>

            {/* Tableau comparaison méthodes */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Comparaison des Méthodes de Détection</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Méthode</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avantages</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Inconvénients</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Mise en forme conditionnelle</td>
                      <td className="p-4 text-gray-600 text-sm">Rapide, visuel, non destructif</td>
                      <td className="p-4 text-gray-600 text-sm">Ne supprime pas, seulement visualise</td>
                      <td className="p-4 text-gray-600 text-sm">Analyse initiale</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Fonction NB.SI</td>
                      <td className="p-4 text-gray-600 text-sm">Personnalisable, permet le comptage</td>
                      <td className="p-4 text-gray-600 text-sm">Nécessite une colonne supplémentaire</td>
                      <td className="p-4 text-gray-600 text-sm">Analyse quantitative</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Filtre avancé</td>
                      <td className="p-4 text-gray-600 text-sm">Extraction des uniques, réutilisable</td>
                      <td className="p-4 text-gray-600 text-sm">Plus complexe à configurer</td>
                      <td className="p-4 text-gray-600 text-sm">Nettoyage préparatoire</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filtrage Avancé */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('filtrage_avance')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Filter className="w-6 h-6 text-amber-600" />
            </div>
            Filtrage des Valeurs Uniques
          </h2>
          {expandedSections.filtrage_avance ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.filtrage_avance && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Extraire des Listes Uniques Sans Supprimer les Données</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Filtre Avancé - Méthode Classique</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      La méthode traditionnelle pour extraire une liste de valeurs uniques vers un nouvel emplacement:cite[1]:cite[6].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Données → Onglet Données → Filtre Avancé</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Cochez "Copier vers un autre emplacement"</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Cochez "Enregistrements uniques seulement"</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Fonction UNIQUE - Méthode Moderne</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Nouvelle fonction disponible dans Excel 365 qui renvoie dynamiquement les valeurs uniques:cite[7].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Syntaxe : <code>=UNIQUE(plage)</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Se met à jour automatiquement</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Paramètres avancés pour colonnes et occurrences uniques</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon21/filtre-avance.gif" 
                  alt="Démonstration du filtre avancé pour valeurs uniques"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🎯 Cas d'Usage : Filtre vs Fonction UNIQUE</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Filtre avancé :</strong> Idéal pour les extractions ponctuelles, partage de fichiers avec des utilisateurs d'anciennes versions Excel</p>
                    <p><strong>Fonction UNIQUE :</strong> Parfait pour les tableaux de bord dynamiques, données fréquemment mises à jour, utilisateurs Excel 365</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide étape par étape */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Guide Visuel : Filtre Avancé Pas-à-Pas</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                    <h5 className="font-semibold text-gray-800">Sélection des Données</h5>
                    <p className="text-gray-600 text-sm mt-2">Sélectionnez votre plage de données incluant les en-têtes</p>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">2</div>
                    <h5 className="font-semibold text-gray-800">Configuration</h5>
                    <p className="text-gray-600 text-sm mt-2">Données → Filtre Avancé → Cocher "Copier vers" et "Enregistrements uniques":cite[1]</p>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                    <h5 className="font-semibold text-gray-800">Extraction</h5>
                    <p className="text-gray-600 text-sm mt-2">Spécifiez l'emplacement de destination et validez</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Attention :</h5>
                  <p className="text-gray-600 text-sm">
                    Le filtre avancé ne fonctionne pas avec les données hiérarchisées ou contenant des sous-totaux. Supprimez d'abord ces éléments:cite[1].
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suppression des Doublons */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-red-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-pink-50 text-left hover:from-red-100 transition-all"
          onClick={() => toggleSection('suppression_doublons')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            Suppression Définitive des Doublons
          </h2>
          {expandedSections.suppression_doublons ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.suppression_doublons && (
          <div className="p-8">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-800">Action Irréversible</h4>
                  <p className="text-orange-700 text-sm">
                    La suppression des doublons est définitive. Excel conserve la première occurrence et supprime définitivement les doublons. Faites toujours une sauvegarde avant de procéder:cite[3].
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Utilisation de l'Outil "Supprimer les Doublons"</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Étapes de Suppression :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Sélectionnez votre plage de données ou cliquez dans votre tableau</li>
                      <li>Données → Supprimer les doublons:cite[1]:cite[3]</li>
                      <li>Sélectionnez les colonnes à vérifier pour les doublons</li>
                      <li>Validez et confirmez le nombre de doublons supprimés</li>
                    </ol>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Sélection des Colonnes :</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      La clé d'une suppression efficace réside dans le bon choix des colonnes:cite[3] :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li><strong>Toutes les colonnes :</strong> Supprime les lignes entièrement identiques</li>
                      <li><strong>Certaines colonnes :</strong> Supprime basé sur des critères spécifiques</li>
                      <li><strong>Une seule colonne :</strong> Supprime les doublons d'une colonne précise</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon21/suppression-doublons-interface.png" 
                  alt="Interface de suppression des doublons dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="text-center text-sm text-gray-600">
                  Boîte de dialogue de suppression des doublons avec sélection des colonnes
                </div>
              </div>
            </div>

            {/* Tableau stratégies suppression */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Stratégies de Suppression selon le Cas d'Usage</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Colonnes à Sélectionner</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Précautions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Liste de clients</td>
                      <td className="p-4 text-gray-600 text-sm">Email ou ID unique</td>
                      <td className="p-4 text-gray-600 text-sm">Supprime les clients en double</td>
                      <td className="p-4 text-gray-600 text-sm">Vérifier les variations d'orthographe</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Ventes</td>
                      <td className="p-4 text-gray-600 text-sm">Date, Produit, Client</td>
                      <td className="p-4 text-gray-600 text-sm">Supprime les transactions dupliquées</td>
                      <td className="p-4 text-gray-600 text-sm">S'assurer que ce sont de véritables doublons</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Inventaire</td>
                      <td className="p-4 text-gray-600 text-sm">Code produit</td>
                      <td className="p-4 text-gray-600 text-sm">Un seul enregistrement par produit</td>
                      <td className="p-4 text-gray-600 text-sm">Consolider les quantités avant suppression</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Techniques Avancées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('techniques_avancees')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            Techniques Avancées et Formules
          </h2>
          {expandedSections.techniques_avancees ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.techniques_avancees && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Méthodes Expertes pour Cas Complexes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">📊 Formules Avancées pour l'Analyse</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Compter les doublons</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Formule pour compter le nombre total de doublons dans une plage:cite[6] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =NBVAL(A1:A10)-SOMMEPROD(1/NB.SI(A1:A10;A1:A10))
                    </code>
                    <p className="text-gray-500 text-xs">
                      Donne le nombre total de valeurs dupliquées
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Compter les valeurs uniques</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Formule pour compter le nombre de valeurs distinctes:cite[6] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =SOMMEPROD(1/NB.SI(A1:A10;A1:A10))
                    </code>
                    <p className="text-gray-500 text-xs">
                      Renvoie le nombre de valeurs différentes
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg border-2 border-purple-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Identifier les doublons</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Formule pour marquer les doublons (renvoie VRAI/FAUX):cite[6] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =NB.SI(A:A,A1)&gt;1
                    </code>
                    <p className="text-gray-500 text-xs">
                      Utile pour la mise en forme conditionnelle personnalisée
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🛠️ Techniques pour Données Complexes</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border-2 border-amber-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Doublons sur plusieurs colonnes</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Identifier les lignes dupliquées basées sur plusieurs colonnes:cite[6] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =SOMMEPROD((A:A&A1)*(B:B=B1))&gt;1
                    </code>
                    <p className="text-gray-500 text-xs">
                      Combine plusieurs conditions pour une vérification précise
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg border-2 border-red-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Empêcher la saisie de doublons</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Validation de données pour prévenir les doublons:cite[6] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =NB.SI(A:A,A1)=1
                    </code>
                    <p className="text-gray-500 text-xs">
                      Données → Validation → Personnalisé avec cette formule
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg border-2 border-teal-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Fonction UNIQUE avancée</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Utilisation des paramètres optionnels:cite[7] :
                    </p>
                    <code className="block bg-gray-100 p-2 rounded text-sm font-mono mb-2">
                      =UNIQUE(plage;FAUX;VRAI)
                    </code>
                    <p className="text-gray-500 text-xs">
                      FAUX = par ligne, VRAI = valeurs apparaissant une fois
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow avancé */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">⚡ Workflow Professionnel de Nettoyage</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 border-2 border-blue-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                  <h5 className="font-semibold text-gray-800">Sauvegarde</h5>
                  <p className="text-gray-600 text-xs mt-2">Copiez vos données originales</p>
                </div>
                
                <div className="p-4 border-2 border-green-200 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">2</div>
                  <h5 className="font-semibold text-gray-800">Identification</h5>
                  <p className="text-gray-600 text-xs mt-2">Mise en forme conditionnelle</p>
                </div>
                
                <div className="p-4 border-2 border-amber-200 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-2">3</div>
                  <h5 className="font-semibold text-gray-800">Analyse</h5>
                  <p className="text-gray-600 text-xs mt-2">Formules de comptage</p>
                </div>
                
                <div className="p-4 border-2 border-red-200 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">4</div>
                  <h5 className="font-semibold text-gray-800">Action</h5>
                  <p className="text-gray-600 text-xs mt-2">Suppression ou extraction</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bonnes Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-slate-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-slate-50 to-gray-50 text-left hover:from-slate-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-slate-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-slate-600" />
            </div>
            Bonnes Pratiques et Dépannage
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
                <h3 className="text-xl font-semibold text-gray-800 mb-6">✅ Best Practices</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Toujours sauvegarder</h5>
                    <p className="text-gray-600 text-sm">
                      Copiez votre feuille originale avant toute suppression. Utilisez "Fichier → Enregistrer sous" pour créer une version de sauvegarde:cite[3].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Commencer par visualiser</h5>
                    <p className="text-gray-600 text-sm">
                      Utilisez toujours la mise en forme conditionnelle d'abord pour comprendre l'étendue des doublons avant de supprimer:cite[3]:cite[6].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Choisir les bonnes colonnes</h5>
                    <p className="text-gray-600 text-sm">
                      Réfléchissez soigneusement aux colonnes à inclure dans la recherche de doublons. Une mauvaise sélection peut supprimer des données importantes:cite[3].
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">❌ Problèmes Courants et Solutions</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Suppression involontaire</h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Problème :</strong> Suppression de données qui n'étaient pas des doublons<br />
                      <strong>Solution :</strong> Utilisez Ctrl+Z immédiatement ou restaurez depuis la sauvegarde
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Doublons non détectés</h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Problème :</strong> Excel ne détecte pas les doublons à cause d'espaces ou de formats différents:cite[1]<br />
                      <strong>Solution :</strong> Nettoyez les données avec SUPPRESPACE et ESTNUM avant
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Fonction désactivée</h5>
                    <p className="text-gray-600 text-sm">
                      <strong>Problème :</strong> "Supprimer les doublons" grisé<br />
                      <strong>Solution :</strong> Vérifiez que les données ne sont pas protégées ou en mode groupe:cite[1]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Checklist de Gestion des Doublons</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Avant suppression :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Sauvegarde créée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Doublons identifiés visuellement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Colonnes de vérification sélectionnées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Compréhension de l'impact métier</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Après suppression :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Résultats vérifiés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Totaux cohérents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Sauvegarde conservée temporairement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Processus documenté</span>
                    </li>
                  </ul>
                </div>
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
            Exercice Pratique : Nettoyage de Base de Données Clients
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Nettoyer une Base Clients Corrompue</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte</h4>
                  <p className="text-gray-700 mb-4">
                    Vous recevez une base de données clients contenant de nombreux doublons due à des imports successifs et des saisies manuelles. Votre mission est de la nettoyer pour obtenir une liste client unique et fiable.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Problèmes identifiés</p>
                        <p className="text-sm text-gray-600">Clients en double, emails dupliqués, adresses similaires</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif</p>
                        <p className="text-sm text-gray-600">Obtenir une liste unique avec conservation des données les plus récentes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon21/exercice-base-clients.png" 
                    alt="Base de données clients avec doublons à nettoyer"
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
                      <span>Téléchargez le fichier d'exercice et créez une sauvegarde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Identifiez visuellement tous les doublons d'emails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Extrayez la liste des emails uniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Supprimez les doublons en conservant les enregistrements les plus récents</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon21/exercice-base-clients.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger l'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon21/correction-nettoyage.mp4"
                      title="Correction détaillée de l'exercice de nettoyage"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères d'Évaluation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Sauvegarde correctement créée</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Doublons correctement identifiés et visualisés</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Suppression efficace avec conservation des bonnes données</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Base finale propre sans perte d'information critique</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Optionnel</h5>
                  <p className="text-sm text-gray-600">
                    Créez un système de validation qui empêche la saisie future d'emails déjà existants dans la base en utilisant la validation des données.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon21 onResult={onResult} />
      </div>
    </div>
  );
}