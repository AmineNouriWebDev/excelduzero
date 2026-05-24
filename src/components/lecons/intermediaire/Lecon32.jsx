import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon32 from "../../quizz/intermediaire/QuizLecon32";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  Filter,
  Sliders,
  Zap,
  Lightbulb,
  PlayCircle,
  Download,
  Smartphone,
  Target
} from "lucide-react";

export default function Lecon32({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    principes: true,
    methodes: true,
    pratique: true,
    avance: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec dégradé bleu - NOUVEAU THÈME */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Graphiques Dynamiques avec Contrôles</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Donnez vie à vos données avec des visualisations interactives</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 32 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Filter className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Listes Déroulantes</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Sliders className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Boutons Radio</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cases à Cocher</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Tableaux de Bord</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-indigo-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            Pourquoi des Graphiques Dynamiques ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Transformez vos Données Statiques en Expériences Interactives</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les graphiques dynamiques permettent à vos utilisateurs de <strong>filtrer, explorer et personnaliser</strong> la visualisation des données en temps réel. Idéaux pour les tableaux de bord et les présentations professionnelles :cite[2]:cite[5].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Smartphone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Interface Utilisateur Interactive</h4>
                      <p className="text-gray-600">Permet aux utilisateurs de explorer les données par eux-mêmes :cite[9]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Filter className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Visualisation Ciblée</h4>
                      <p className="text-gray-600">Affichez uniquement les données pertinentes pour éviter la surcharge :cite[5]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Target className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Présentations Impactantes</h4>
                      <p className="text-gray-600">Répondez aux questions en direct pendant vos présentations :cite[7]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon32/dashboard-interactif.png" 
                  alt="Tableau de bord Excel avec graphiques dynamiques et contrôles"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Tableau de bord interactif
                </div>
              </div>
            </div>

            {/* Section Avantages Concrets */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🎯 Cas d'Utilisation des Graphiques Dynamiques</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">📈</div>
                  <p className="text-sm opacity-90">Suivi des ventes par région ou période</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">👥</div>
                  <p className="text-sm opacity-90">Analyse des performances par équipe</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">💰</div>
                  <p className="text-sm opacity-90">Tableaux de bord financiers interactifs :cite[5]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Principes Fondamentaux */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('principes')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            Principes Fondamentaux
          </h2>
          {expandedSections.principes ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.principes && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Comment Fonctionnent les Graphiques Dynamiques ?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🔄 L'Approche par Tableau Dynamique</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Méthode native Excel</strong> via les graphiques croisés dynamiques :cite[1]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Pas de formules complexes nécessaires</p>
                      <p className="text-gray-700"><strong>Utilisation :</strong> Cliquez sur Insérer → Graphique croisé dynamique</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        Insertion automatique des champs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 L'Approche par Contrôles de Formulaire</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Méthode flexible</strong> avec formules Excel :cite[8]:cite[9]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Contrôle total sur l'affichage</p>
                      <p className="text-gray-700"><strong>Fonctions clés :</strong> INDEX, RECHERCHEV, SI, NA()</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =INDEX(plage, position_contrôle)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon32/principe-fonctionnement.png" 
                  alt="Schéma expliquant le lien entre contrôles, formules et graphiques"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">💡 Chaîne de Fonctionnement</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Contrôle utilisateur</strong> → Modifie une cellule liée</p>
                    <p><strong>Formules dynamiques</strong> → Actualisent les données affichées</p>
                    <p><strong>Graphique lié</strong> → Se met à jour automatiquement :cite[9]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Comparatif */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Comparaison des Deux Approches</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Critère</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Graphiques Croisés Dynamiques</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Contrôles de Formulaire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Complexité</td>
                      <td className="p-4 text-gray-700">Faible - méthode native</td>
                      <td className="p-4 text-gray-700">Moyenne - formules requises</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Flexibilité</td>
                      <td className="p-4 text-gray-700">Limitée aux fonctionnalités croisées dynamiques</td>
                      <td className="p-4 text-gray-700">Élevée - personnalisation totale</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Performance</td>
                      <td className="p-4 text-gray-700">Optimisée pour grands volumes :cite[1]</td>
                      <td className="p-4 text-gray-700">Dépend des formules utilisées</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Courbe d'apprentissage</td>
                      <td className="p-4 text-gray-700">Douce</td>
                      <td className="p-4 text-gray-700">Plus raide :cite[9]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Méthodes de Création */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-indigo-50 to-blue-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('methodes')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Sliders className="w-6 h-6 text-indigo-600" />
            </div>
            Méthodes de Création Pas à Pas
          </h2>
          {expandedSections.methodes ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.methodes && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Trois Techniques pour Créer vos Graphiques Dynamiques</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Méthode 1 */}
              <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                <div className="bg-green-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">📋 Liste Déroulante</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Insérer la liste</h5>
                        <p className="text-gray-600 text-sm">Développeur → Contrôles → Liste déroulante :cite[8]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Configurer</h5>
                        <p className="text-gray-600 text-sm">Plage source: catégories, Cellule liée: emplacement valeur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Créer formules</h5>
                        <p className="text-gray-600 text-sm">=INDEX(plage_données, cellule_liée) :cite[8]</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =INDEX(B2:F10, $H$1)
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 2 */}
              <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                <div className="bg-purple-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">🔘 Boutons Radio</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Groupe de boutons</h5>
                        <p className="text-gray-600 text-sm">Insérer plusieurs boutons radio :cite[8]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Lier à une cellule</h5>
                        <p className="text-gray-600 text-sm">Tous les boutons pointent vers la même cellule</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Formules conditionnelles</h5>
                        <p className="text-gray-600 text-sm">=SI(cellule_liée=1, données1, NA()) :cite[9]</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =IF($B$8=1,B3,NA())
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 3 */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                <div className="bg-amber-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">☑️ Cases à Cocher</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Cases multiples</h5>
                        <p className="text-gray-600 text-sm">Insérer pour chaque série de données :cite[9]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Cellules individuelles</h5>
                        <p className="text-gray-600 text-sm">Chaque case liée à sa propre cellule VRAI/FAUX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Formules d'affichage</h5>
                        <p className="text-gray-600 text-sm">=SI(cellule_vrai_faux, données, NA())</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =IF(F3,B3:D3,"")
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Démonstration Visuelle */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">🎬 Démonstration des Trois Méthodes</h4>
              </div>
              <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon32/demo-liste.gif" 
                      alt="Animation montrant l'utilisation d'une liste déroulante"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">Liste déroulante - Choix unique</p>
                  </div>
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon32/demo-radio.gif" 
                      alt="Animation montrant l'utilisation de boutons radio"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">Boutons radio - Alternatives exclusives</p>
                  </div>
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon32/demo-checkbox.gif" 
                      alt="Animation montrant l'utilisation de cases à cocher"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">Cases à cocher - Multi-sélection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique : Tableau de Bord Vent */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('pratique')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <PlayCircle className="w-6 h-6 text-amber-600" />
            </div>
            Cas Pratique: Tableau de Bord des Ventes
          </h2>
          {expandedSections.pratique ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.pratique && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Créez un Tableau de Bord Commercial Complet</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📊 Architecture du Tableau de Bord</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Liste déroulante &ldquo;Région&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Nord, Sud, Est, Ouest, Centre</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Boutons radio &ldquo;Période&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Mensuel, Trimestriel, Annuel</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Cases à cocher &ldquo;Produits&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Multi-sélection des familles de produits</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Graphiques multiples</h5>
                          <p className="text-gray-600 text-sm">Courbes, barres, camembert synchronisés</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">🎯 Défi Pratique: Implémentez ce Tableau de Bord</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">1</div>
                      <span>Téléchargez le fichier d&apos;exercice avec les données</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">2</div>
                      <span>Créez les contrôles et configurez les liaisons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">3</div>
                      <span>Implémentez les formules dynamiques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">4</div>
                      <span>Créez et liez les graphiques</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon32/tableau-bord-complet.png" 
                  alt="Capture d'écran d'un tableau de bord ventes complet avec multiples contrôles"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-green-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon32/tableau-bord-ventes.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger l&apos;Exercice Complet
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon32/creation-tableau-bord.mp4"
                      title="Création d'un tableau de bord dynamique de A à Z"
                      duration="28:45"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Formules Clés */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Formules Excel Essentielles pour les Graphiques Dynamiques</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">I</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">INDEX()</h5>
                  <p className="text-sm text-gray-600">Extraction valeur depuis position :cite[8]</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">SI</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">SI()</h5>
                  <p className="text-sm text-gray-600">Affichage conditionnel avec NA()</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">R</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">RECHERCHEV()</h5>
                  <p className="text-sm text-gray-600">Recherche verticale dans tableaux</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-600">N</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">NA()</h5>
                  <p className="text-sm text-gray-600">Masquer données non sélectionnées :cite[9]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Techniques Avancées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-red-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-red-50 to-pink-50 text-left hover:from-red-100 transition-all"
          onClick={() => toggleSection('avance')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            Techniques Avancées et Optimisations
          </h2>
          {expandedSections.avance ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.avance && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Optimisez vos Graphiques Dynamiques</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
                  <div className="bg-red-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🚀 Titres Dynamiques</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <p className="text-gray-700">Personnalisez les titres de graphiques pour qu&apos;ils s&apos;adaptent automatiquement aux sélections :cite[6].</p>
                      
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =&ldquo;Ventes &rdquo;&amp;TEXTE(cellule_région,&ldquo;@&rdquo;)&amp;&ldquo; - &rdquo;&amp;TEXTE(cellule_période,&ldquo;@&rdquo;)
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          <strong>Astuce :</strong> Cliquez sur le titre du graphique, puis tapez &ldquo;=&rdquo; dans la barre de formule et sélectionnez la cellule contenant votre titre dynamique :cite[6].
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🛡️ Gestion des Erreurs</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Données manquantes :</strong> Utilisez NA() pour les sélections non actives</p>
                      <p className="text-gray-700"><strong>Validation :</strong> Contrôlez les plages avec SIERREUR()</p>
                      <p className="text-gray-700"><strong>Performances :</strong> Évitez les formules volatiles comme DECALER() sur grands jeux</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon32/techniques-avancees.png" 
                  alt="Exemple de graphique avec titres dynamiques et multiples contrôles"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">💡 Bonnes Pratiques Avancées</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Utilisez des plages nommées pour plus de clarté</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Groupez les contrôles logiquement avec des cadres</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Protégez la feuille mais autorisez les contrôles :cite[9]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan compétences */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Compétences Maîtrisées - Leçon 32</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Concepts Fondamentaux</h5>
                  <p className="text-sm text-gray-600">Principes des graphiques dynamiques</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sliders className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Contrôles</h5>
                  <p className="text-sm text-gray-600">Listes, boutons, cases à cocher</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <PlayCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Cas Pratique</h5>
                  <p className="text-sm text-gray-600">Tableau de bord ventes</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Techniques Avancées</h5>
                  <p className="text-sm text-gray-600">Titres dynamiques, optimisation</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon32 onResult={onResult} />
      </div>
    </div>
  );
}