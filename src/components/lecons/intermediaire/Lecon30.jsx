import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon30 from "../../quizz/intermediaire/QuizLecon30";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  LayoutTemplate,
  Download,
  Upload,
  Shield,
  CheckSquare,
  Sliders,
  Zap,
  Lightbulb,
  Target,
  FileText,
  Building,
  Play,
  Save
} from "lucide-react";

export default function Lecon30({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    conception: true,
    composants: true,
    professionnel: true,
    deploiement: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec dégradé indigo */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <LayoutTemplate className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Création de Modèles Personnalisés</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Concevez des modèles Excel professionnels, réutilisables et automatisés</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 30 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <FileText className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Structure</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Sliders className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Contrôles</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Shield className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Protection</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Building className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-indigo-600" />
            </div>
            Pourquoi Créer des Modèles Excel Personnalisés ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Standardisez et Automatisez vos Processus</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les modèles Excel personnalisés permettent de <strong>gagner un temps considérable</strong> et d'<strong>assurer la cohérence</strong> dans toute votre organisation. Ils servent de fondation pour une gestion efficace des données :cite[1]:cite[2].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Zap className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gain de Temps Exceptionnel</h4>
                      <p className="text-gray-600">Réduction jusqu'à 80% du temps passé sur les tâches répétitives :cite[2]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckSquare className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cohérence et Exactitude</h4>
                      <p className="text-gray-600">Formatage uniforme et formules standardisées pour tous les utilisateurs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Building className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Standardisation Organisationnelle</h4>
                      <p className="text-gray-600">Tous les départements utilisent les mêmes outils et méthodologies :cite[7]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon30/avantages-modeles.png" 
                  alt="Diagramme montrant les avantages des modèles Excel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Processus brut → Workflow standardisé
                </div>
              </div>
            </div>

            {/* Section Chiffres Clés */}
            <div className="mt-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">📊 Impact Business des Modèles Excel</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">80%</div>
                  <p className="text-sm opacity-90">Réduction du temps sur tâches répétitives :cite[2]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">100%</div>
                  <p className="text-sm opacity-90">Cohérence dans les rapports et analyses</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">⭐</div>
                  <p className="text-sm opacity-90">Meilleure prise de décision avec données fiables</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Principes de Conception */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('conception')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <LayoutTemplate className="w-6 h-6 text-amber-600" />
            </div>
            Principes de Conception d'un Modèle Efficace
          </h2>
          {expandedSections.conception ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.conception && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Structurez Votre Modèle pour le Succès</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Étape 1: Structure de Base</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">En-tête et Identification</h5>
                          <p className="text-gray-600 text-sm">Logo société, titre du modèle, version, date :cite[1]</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Zone des Paramètres</h5>
                          <p className="text-gray-600 text-sm">Cellules d'entrée principales, variables modifiables</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Zone de Calculs</h5>
                          <p className="text-gray-600 text-sm">Formules, tableaux de bord, indicateurs clés</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Zone de Sortie/Rapport</h5>
                          <p className="text-gray-600 text-sm">Résultats finaux, graphiques, synthèses :cite[1]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💾 Sauvegarde comme Modèle</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Fichier → Enregistrer sous</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Type: Modèle Excel (*.xltx)
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Emplacement Automatique</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          C:\Users\[User]\Documents\Modèles personnalisés
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          <strong>Astuce :</strong> Le modèle apparaîtra dans <strong>Fichier → Nouveau → Personnel</strong> pour un accès rapide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon30/structure-modele.gif" 
                  alt="Animation montrant la structure type d'un modèle Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <h5 className="font-semibold text-amber-800 mb-2">🎨 Bonnes Pratiques de Conception</h5>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p><strong>Cohérence visuelle :</strong> Utilisez 2-3 polices maximum et une palette de couleurs cohérente :cite[1]</p>
                    <p><strong>Zones distinctes :</strong> Séparez clairement entrées, calculs et résultats</p>
                    <p><strong>Documentation intégrée :</strong> Ajoutez des instructions d'utilisation dans le modèle</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Erreurs Courantes à Éviter</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>Formules complexes non documentées</strong></p>
                    <p><strong>Absence de validation des données</strong></p>
                    <p><strong>Protection oubliée des cellules de calcul</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Structure */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
              <div className="bg-amber-500 p-4 text-white">
                <h4 className="font-bold text-lg">Structure Type d'un Modèle Professionnel</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Zone</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Contenu</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Couleur</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Protection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">En-tête</td>
                      <td className="p-4 text-gray-700">Logo, titre, informations société</td>
                      <td className="p-4"><div className="w-6 h-6 bg-blue-100 rounded"></div></td>
                      <td className="p-4 text-gray-600">Verrouillée</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Paramètres</td>
                      <td className="p-4 text-gray-700">Données d'entrée, variables</td>
                      <td className="p-4"><div className="w-6 h-6 bg-green-100 rounded"></div></td>
                      <td className="p-4 text-gray-600">Déverrouillée</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-purple-600">Calculs</td>
                      <td className="p-4 text-gray-700">Formules, tableaux croisés</td>
                      <td className="p-4"><div className="w-6 h-6 bg-purple-100 rounded"></div></td>
                      <td className="p-4 text-gray-600">Verrouillée</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-amber-600">Résultats</td>
                      <td className="p-4 text-gray-700">Graphiques, synthèses, KPI</td>
                      <td className="p-4"><div className="w-6 h-6 bg-amber-100 rounded"></div></td>
                      <td className="p-4 text-gray-600">Verrouillée</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Composants Avancés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('composants')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Sliders className="w-6 h-6 text-purple-600" />
            </div>
            Composants Avancés pour Modèles Intelligents
          </h2>
          {expandedSections.composants ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.composants && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Rendez Vos Modèles Interactifs et Sûrs</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎛️ Contrôles de Formulaire</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Activer l'onglet Développeur</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Fichier → Options → Personnaliser le ruban → Développeur
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="bg-gray-100 p-3 rounded-lg mb-2">
                            <span className="font-semibold text-gray-700">Liste déroulante</span>
                          </div>
                          <p className="text-gray-600 text-sm">Validation des données ou contrôles de formulaire</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-gray-100 p-3 rounded-lg mb-2">
                            <span className="font-semibold text-gray-700">Cases à cocher</span>
                          </div>
                          <p className="text-gray-600 text-sm">Pour les options oui/non, vrai/faux</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🛡️ Protection du Modèle</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Protéger les cellules de calcul</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Format de cellule → Protection → Verrouillée
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Protéger la feuille</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Révision → Protéger la feuille → Sélectionner les actions autorisées
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-purple-700 text-sm">
                          <strong>Astuce :</strong> Déverrouillez les cellules d'entrée avant de protéger la feuille pour permettre la saisie utilisateur :cite[1].
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon30/controles-formulaire.gif" 
                  alt="Animation montrant l'ajout de contrôles de formulaire"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">✅ Validation des Données</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Listes déroulantes :</strong> Assurent la cohérence des données saisies</p>
                    <p><strong>Plages numériques :</strong> Limitent les valeurs possibles</p>
                    <p><strong>Messages d'erreur :</strong> Guident l'utilisateur en cas de saisie incorrecte :cite[1]</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🚀 Formules Essentielles pour Modèles</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>SI, SI.CONDITIONS :</strong> Logique conditionnelle</p>
                    <p><strong>RECHERCHEV, XLOOKUP :</strong> Recherche de données</p>
                    <p><strong>SOMME.SI, SOMME.SI.ENS :</strong> Sommes conditionnelles (Leçon 29)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Validation Données */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Types de Validation des Données</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Type</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Configuration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Liste</td>
                      <td className="p-4 text-gray-700">Choix dans une liste prédéfinie</td>
                      <td className="p-4 text-gray-600">Départements: Ventes, Marketing, IT</td>
                      <td className="p-4 font-mono text-sm">Source: Ventes,Marketing,IT</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Nombre entier</td>
                      <td className="p-4 text-gray-700">Valeurs entières dans une plage</td>
                      <td className="p-4 text-gray-600">Quantité entre 1 et 100</td>
                      <td className="p-4 font-mono text-sm">Entre 1 et 100</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Date</td>
                      <td className="p-4 text-gray-700">Dates dans un intervalle</td>
                      <td className="p-4 text-gray-600">Date après aujourd'hui</td>
                      <td className="p-4 font-mono text-sm">Supérieure à =AUJOURD'HUI()</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Longueur de texte</td>
                      <td className="p-4 text-gray-700">Limite de caractères</td>
                      <td className="p-4 text-gray-600">Code produit max 10 caractères</td>
                      <td className="p-4 font-mono text-sm">Longueur max: 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Templates pour différents secteurs */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('professionnel')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            Modèles par Secteur d'Activité
          </h2>
          {expandedSections.professionnel ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.professionnel && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Adaptez Vos Modèles à Votre Métier</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                <div className="bg-green-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">💰 Finance & Comptabilité</h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Budget prévisionnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>État des flux de trésorerie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Suivi des factures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Tableau de bord financier :cite[7]</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                <div className="bg-blue-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">📦 Vente & Marketing</h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Suivi des leads et prospects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Analyse des performances ventes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Budget marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>ROI des campagnes :cite[7]</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                <div className="bg-purple-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">🏭 Production & Logistique</h4>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Gestion des stocks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Suivi de production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Planification des livraisons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Contrôle qualité :cite[7]</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
              <div className="bg-amber-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">📊 Modèle de Budget d'Entreprise - Exemple Complet</h4>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-4">Structure du Modèle</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Revenus</span>
                        <span className="text-green-600 font-semibold">=SOMME(B2:B12)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Dépenses</span>
                        <span className="text-red-600 font-semibold">=SOMME(C2:C20)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Résultat Net</span>
                        <span className="text-blue-600 font-semibold">=B1-C1</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Marge</span>
                        <span className="text-purple-600 font-semibold">=D1/B1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon30/modele-budget.png" 
                      alt="Capture d'écran d'un modèle de budget professionnel"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Déploiement et Partage */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('deploiement')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            Déploiement et Partage des Modèles
          </h2>
          {expandedSections.deploiement ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.deploiement && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Diffusez Vos Modèles dans Votre Organisation</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📤 Méthodes de Partage</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                        <FileText className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-gray-800">Fichier modèle direct</h5>
                          <p className="text-gray-600 text-sm">Envoi du fichier .xltx par email ou plateforme collaborative</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                        <Upload className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-gray-800">Dossier réseau partagé</h5>
                          <p className="text-gray-600 text-sm">Dépot dans un répertoire accessible à toute l'équipe</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                        <Building className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-gray-800">Intégration CRM/ERP</h5>
                          <p className="text-gray-600 text-sm">Déploiement via des systèmes comme Dynamics 365 :cite[6]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">🎯 Projet Pratique: Créez Votre Premier Modèle</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">1</div>
                      <span>Choisissez un processus répétitif dans votre travail</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">2</div>
                      <span>Concevez la structure avec zones distinctes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">3</div>
                      <span>Ajoutez formules et validation des données</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">4</div>
                      <span>Protégez et sauvegardez comme modèle</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon30/deploiement-organisation.gif" 
                  alt="Animation montrant le processus de déploiement d'un modèle dans une organisation"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon30/kit-modeles-professionnels.zip" 
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger le Kit de Modèles Professionnels
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon30/creation-modele-complet.mp4"
                      title="Création d'un modèle professionnel de A à Z"
                      duration="28:40"
                    />

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">📚 Ressources Externes</h5>
                      <p className="text-blue-700 text-sm">
                        Explorez les modèles officiels Microsoft et les plateformes spécialisées comme Worksheetexcel.com et Canva pour trouver l'inspiration :cite[2].
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan compétences */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Compétences Maîtrisées - Leçon 30</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                <div className="text-center">
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <LayoutTemplate className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Conception Structure</h5>
                  <p className="text-sm text-gray-600">Zones logiques, mise en page professionnelle</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sliders className="w-6 h-6 text-amber-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Contrôles Interactifs</h5>
                  <p className="text-sm text-gray-600">Validation, listes déroulantes, protection</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Modèles Sectoriels</h5>
                  <p className="text-sm text-gray-600">Adaptation aux besoins métier</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Upload className="w-6 h-6 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Déploiement</h5>
                  <p className="text-sm text-gray-600">Partage, déploiement organisationnel</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon30 onResult={onResult} />
      </div>
    </div>
  );
}