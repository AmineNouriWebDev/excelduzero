import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon24 from "../../quizz/intermediaire/QuizLecon24";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  RefreshCw,
  Zap,
  Settings,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Download,
  Users,
  BarChart3,
  Sparkles,
  Target,
  Search,
  FileText,
  Layers,
  Wrench,
  Play,
  Code,
  Trash2,
  Type,
  Columns,
  Split
} from "lucide-react";

export default function Lecon24({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    techniques_nettoyage: true,
    transformations_texte: true,
    gestion_donnees_manquantes: true,
    bonnes_pratiques: true,
    cas_pratique_complet: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec nouveau dégradé vert/émeraude */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Filter className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Nettoyage et Transformation de Données</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Techniques avancées pour des données impeccables et exploitables</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 24 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Trash2 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Nettoyage avancé</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Type className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Transformations texte</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Columns className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Gestion des valeurs</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Bonnes pratiques</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-emerald-50 to-green-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            Pourquoi le Nettoyage des Données est Essentiel ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-emerald-600" /> : 
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">La Base d'une Analyse Fiable</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Le nettoyage des données n'est pas une option, mais une nécessité. Des données propres garantissent 
                  des analyses précises et des décisions éclairées. Power Query offre tous les outils pour 
                  cette transformation cruciale:cite[6]:cite[8].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Problèmes Courants</h4>
                      <p className="text-gray-600">Données manquantes, incohérences de format, doublons, erreurs de saisie...</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Solution Power Query</h4>
                      <p className="text-gray-600">Processus automatisé et reproductible pour un nettoyage systématique:cite[6]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Impact sur l'Analyse</h4>
                      <p className="text-gray-600">Jusqu'à 80% de réduction du temps de préparation des données:cite[6]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon24/data-quality-impact.png" 
                  alt="Diagramme montrant l'impact de la qualité des données sur l'analyse"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Qualité des Données = Fiabilité de l'Analyse
                </div>
              </div>
            </div>

            {/* Section Statistiques */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4 text-center">📊 L'Impact du Nettoyage en Chiffres</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">65%</div>
                  <p className="text-sm opacity-90">Des entreprises considèrent la qualité des données comme critique</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">80%</div>
                  <p className="text-sm opacity-90">Réduction du temps de préparation</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">40%</div>
                  <p className="text-sm opacity-90">Amélioration de la précision des rapports</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-90">Processus reproductible:cite[6]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Techniques de Nettoyage */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('techniques_nettoyage')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Wrench className="w-6 h-6 text-blue-600" />
            </div>
            Techniques Fondamentales de Nettoyage
          </h2>
          {expandedSections.techniques_nettoyage ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.techniques_nettoyage && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Outils Essentiels pour des Données Propres</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Gestion des Colonnes</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Maîtrisez l'art de sélectionner et organiser vos colonnes efficacement:cite[5].
                    </p>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Choisir les colonnes :</span> Sélectionnez uniquement les colonnes nécessaires
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Supprimer les colonnes :</span> Éliminez les données superflues
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Réorganiser :</span> Changez l'ordre pour une meilleure lisibilité
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Suppression des Doublons</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Éliminez les enregistrements dupliqués pour éviter les biais d'analyse:cite[8].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Sélectionnez une ou plusieurs colonnes pour la détection</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Power Query conserve la première occurrence</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Appliquez sur des combinaisons de colonnes spécifiques</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon24/remove-duplicates-demo.gif" 
                  alt="Animation montrant la suppression des doublons dans Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">💡 Conseil Important</h5>
                  <p className="text-blue-700 text-sm">
                    Utilisez <strong>"Choisir les colonnes"</strong> plutôt que <strong>"Supprimer les autres colonnes"</strong> 
                    pour éviter d'inclure involontairement de nouvelles colonnes ajoutées à la source:cite[5].
                  </p>
                </div>
              </div>
            </div>

            {/* Gallerie des techniques */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🛠️ Techniques de Nettoyage Disponibles</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 border-2 border-blue-200 rounded-lg">
                  <Filter className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Filtrage Avancé</h5>
                  <p className="text-gray-600 text-sm mt-2">Filtrez par valeurs, plages, conditions personnalisées</p>
                </div>
                
                <div className="text-center p-4 border-2 border-green-200 rounded-lg">
                  <Trash2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Suppression</h5>
                  <p className="text-gray-600 text-sm mt-2">Doublons, lignes vides, erreurs, colonnes inutiles</p>
                </div>
                
                <div className="text-center p-4 border-2 border-purple-200 rounded-lg">
                  <Type className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Types de Données</h5>
                  <p className="text-gray-600 text-sm mt-2">Définissez les types appropriés pour chaque colonne:cite[4]</p>
                </div>
                
                <div className="text-center p-4 border-2 border-amber-200 rounded-lg">
                  <Columns className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Gestion Colonnes</h5>
                  <p className="text-gray-600 text-sm mt-2">Renommage, réorganisation, sélection intelligente</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Transformations de Texte */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('transformations_texte')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Type className="w-6 h-6 text-purple-600" />
            </div>
            Transformations Avancées du Texte
          </h2>
          {expandedSections.transformations_texte ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.transformations_texte && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Maîtrisez la Manipulation des Chaînes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Formatage du Texte</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Standardisez la casse et le format de vos données textuelles:cite[5].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Majuscules/Miniscules : Uniformisez la casse</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Supprimer les espaces : Éliminez les espaces superflus</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Nettoyer : Enlevez les caractères non imprimables</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Préfixe/Suffixe : Ajoutez du texte avant/après</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Division de Colonnes</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Séparez une colonne en plusieurs selon un délimiteur ou une position:cite[5].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Par délimiteur : Virgule, point-virgule, espace, tabulation...</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Par nombre de caractères : Position fixe</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Par positions : Majuscule/minuscule, chiffre/lettre</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon24/text-transformation-demo.gif" 
                  alt="Animation montrant les transformations de texte dans Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🎯 Cas d'Usage Réel</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Noms propres :</strong> "JEAN DUPONT" → "Jean Dupont"</p>
                    <p><strong>Adresses email :</strong> Standardisation de la casse</p>
                    <p><strong>Codes postaux :</strong> Suppression des espaces superflus</p>
                    <p><strong>Numéros de téléphone :</strong> Formatage uniforme</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau des transformations texte */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Transformations de Texte Disponibles</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Transformation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Description</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Format → Minuscules</td>
                      <td className="p-4 text-gray-600 text-sm">Convertit tout le texte en minuscules</td>
                      <td className="p-4 text-gray-600 text-sm">Standardisation emails</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Format → Majuscules</td>
                      <td className="p-4 text-gray-600 text-sm">Convertit tout le texte en majuscules</td>
                      <td className="p-4 text-gray-600 text-sm">Codes, acronymes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Format → Capitalisation</td>
                      <td className="p-4 text-gray-600 text-sm">Première lettre de chaque mot en majuscule</td>
                      <td className="p-4 text-gray-600 text-sm">Noms propres, titres</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Supprimer les espaces</td>
                      <td className="p-4 text-gray-600 text-sm">Élimine les espaces début/fin et les doubles espaces</td>
                      <td className="p-4 text-gray-600 text-sm">Nettoyage général</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Diviser par délimiteur</td>
                      <td className="p-4 text-gray-600 text-sm">Sépare une colonne en plusieurs au délimiteur</td>
                      <td className="p-4 text-gray-600 text-sm">Prénom/Nom, Ville/Code postal:cite[5]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gestion des Données Manquantes */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('gestion_donnees_manquantes')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            Gestion des Données Manquantes et Erronées
          </h2>
          {expandedSections.gestion_donnees_manquantes ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.gestion_donnees_manquantes && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Stratégies Intelligentes pour Données Incomplètes</h4>
                  <p className="text-blue-700 text-sm">
                    Les données manquantes peuvent fausser vos analyses. Power Query offre plusieurs approches 
                    pour gérer ces situations selon le contexte et l'impact sur votre analyse:cite[8].
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Techniques de Remplissage</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Remplissage Vers le Bas/Haut</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Copiez les valeurs des cellules adjacentes pour combler les vides:cite[5].
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Idéal pour les données hiérarchiques</li>
                      <li>Conserve le contexte des données</li>
                      <li>Applique la valeur précédente/suivante</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Remplacement de Valeurs</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Remplacez les valeurs nulles ou erronées par des valeurs par défaut:cite[8].
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li><strong>Valeurs nulles :</strong> Remplacer par 0, "N/A", moyenne</li>
                      <li><strong>Erreurs :</strong> Corriger ou remplacer</li>
                      <li><strong>Valeurs spécifiques :</strong> Mettre à jour selon la logique métier</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon24/fill-down-demo.gif" 
                  alt="Animation montrant le remplissage vers le bas dans Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="text-center text-sm text-gray-600">
                  Démonstration du remplissage vers le bas pour les données hiérarchiques
                </div>
              </div>
            </div>

            {/* Tableau stratégies */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
              <div className="bg-amber-500 p-4 text-white">
                <h4 className="font-bold text-lg">Stratégies de Gestion des Données Manquantes</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Situation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Stratégie Recommandée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Peu de valeurs manquantes (&lt;5%)</td>
                      <td className="p-4 text-gray-600 text-sm">Supprimer les lignes concernées</td>
                      <td className="p-4 text-gray-600 text-sm">Impact minimal sur l'analyse</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Valeurs manquantes importantes</td>
                      <td className="p-4 text-gray-600 text-sm">Remplir avec valeur par défaut ou moyenne</td>
                      <td className="p-4 text-gray-600 text-sm">Préserve le volume mais peut biaiser</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Données hiérarchiques</td>
                      <td className="p-4 text-gray-600 text-sm">Remplissage vers le bas</td>
                      <td className="p-4 text-gray-600 text-sm">Conserve la structure logique:cite[5]</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Données temporelles</td>
                      <td className="p-4 text-gray-600 text-sm">Interpolation ou moyenne mobile</td>
                      <td className="p-4 text-gray-600 text-sm">Préserve les tendances</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bonnes Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-teal-50 to-cyan-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <CheckCircle className="w-6 h-6 text-teal-600" />
            </div>
            Bonnes Pratiques et Optimisation
          </h2>
          {expandedSections.bonnes_pratiques ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.bonnes_pratiques && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Optimisez Votre Flux de Travail</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🎯 Principes Essentiels</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Filtrez Tôt</h5>
                    <p className="text-gray-600 text-sm">
                      Appliquez les filtres le plus tôt possible dans votre processus. 
                      Cela réduit la quantité de données traitées et améliore les performances:cite[4].
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Types de Données Corrects</h5>
                    <p className="text-gray-600 text-sm">
                      Définissez les types de données appropriés dès le début. 
                      Cela active les transformations spécifiques et améliore l'analyse:cite[4].
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Étapes Bien Nommées</h5>
                    <p className="text-gray-600 text-sm">
                      Renommez vos étapes appliquées pour une meilleure compréhension 
                      et une maintenance facilitée:cite[8].
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon24/optimization-workflow.png" 
                  alt="Diagramme montrant l'optimisation du workflow Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
                  <h5 className="font-semibold text-teal-800 mb-2">🚀 Performance Tips</h5>
                  <div className="text-teal-700 text-sm space-y-2">
                    <p><strong>Query Folding :</strong> Laissez le traitement à la source quand c'est possible:cite[8]</p>
                    <p><strong>Opérations coûteuses en dernier :</strong> Triez et agrégez en fin de processus:cite[4]</p>
                    <p><strong>Échantillonnage :</strong> Travaillez sur un sous-ensemble pendant le développement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist bonnes pratiques */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4">✅ Checklist des Bonnes Pratiques</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Structure et Organisation</h5>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Étapes clairement nommées
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Filtrage précoce des données
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Types de données définis
                    </li>
                  </ul>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Performance et Maintenance</h5>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Opérations coûteuses en dernier
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Documentation des étapes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Gestion des erreurs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-rose-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-rose-50 to-pink-50 text-left hover:from-rose-100 transition-all"
          onClick={() => toggleSection('cas_pratique_complet')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-rose-600" />
            </div>
            Cas Pratique Complet : Base Clients
          </h2>
          {expandedSections.cas_pratique_complet ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique_complet && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Restructurer une Base Clients Chaotique</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte Réel d'Entreprise</h4>
                  <p className="text-gray-700 mb-4">
                    Une entreprise possède une base clients accumulée sur 5 ans avec des formats incohérents, 
                    des doublons, des champs fusionnés et des données manquantes. Votre mission : 
                    créer un processus reproductible de nettoyage.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-red-200">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Problèmes Identifiés</p>
                        <p className="text-sm text-gray-600">Noms en majuscules, adresses fusionnées, téléphones incohérents, doublons</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-green-200">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif Business</p>
                        <p className="text-sm text-gray-600">Base standardisée pour campagne marketing et analyse clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon24/client-database-before.png" 
                    alt="Capture de la base clients avant nettoyage"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white px-4 py-4 md:p-6 md:rounded-lg rounded-none rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Étapes de Transformation</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <span>Importer la base clients et inspecter les problèmes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Diviser la colonne "Nom Complet" en "Prénom" et "Nom"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Standardiser la casse des noms et emails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Nettoyer et formater les numéros de téléphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        5
                      </div>
                      <span>Supprimer les doublons basés sur l'email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        6
                      </div>
                      <span>Remplir les données manquantes et valider les types</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white px-4 py-4 md:p-6 md:rounded-lg rounded-none rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon24/cas-pratique-clients.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers du Cas Pratique
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon24/correction-cas-pratique.mp4"
                      title="Correction détaillée pas à pas"
                      duration="15:23"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères de Réussite</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Colonnes "Prénom" et "Nom" correctement séparées</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Format email uniforme en minuscules</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Numéros de téléphone au format international</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Zéro doublon basé sur l'email</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Étapes clairement nommées et documentées</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Créez une colonne "Segment" qui classe les clients en "Actif" (dernier achat &lt; 6 mois), 
                    "Inactif" (dernier achat &gt; 6 mois) et "Nouveau" (premier achat &lt; 3 mois) en utilisant 
                    des colonnes conditionnelles.
                  </p>
                </div>
              </div>
            </div>

            {/* Avant/Après */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Transformation Complète : Avant vs Après</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🔴 Avant Nettoyage</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon24/client-database-before.png" 
                    alt="Base clients avant nettoyage - désorganisée"
                    className="rounded-lg border-2 border-red-200"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🟢 Après Nettoyage</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon24/client-database-after.png" 
                    alt="Base clients après nettoyage - structurée"
                    className="rounded-lg border-2 border-green-200"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon24 onResult={onResult} />
      </div>
    </div>
  );
}