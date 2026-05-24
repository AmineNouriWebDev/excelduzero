import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon31 from "../../quizz/intermediaire/QuizLecon31";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Sliders,
  CheckSquare,
  List,
  Menu,
  Zap,
  Shield,
  Code,
  Lightbulb,
  PlayCircle,
  Building,
  Download
} from "lucide-react";

export default function Lecon31({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    types: true,
    implementation: true,
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
      {/* En-tête avec dégradé vert */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-green-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Sliders className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Contrôles de Formulaire Excel</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Rendez vos feuilles de calcul interactives et professionnelles</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 31 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <List className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Listes Déroulantes</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <CheckSquare className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cases à Cocher</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Menu className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Boutons Radio</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Interactivité</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-emerald-600" />
            </div>
            Pourquoi Utiliser les Contrôles de Formulaire ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Révolutionnez l'Expérience Utilisateur dans Excel</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les contrôles de formulaire transforment vos feuilles de calcul statiques en <strong>tableaux de bord interactifs</strong> et <strong>formulaires professionnels</strong>. Ils guident les utilisateurs et réduisent les erreurs de saisie :cite[1]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckSquare className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Réduction des Erreurs</h4>
                      <p className="text-gray-600">Limitez les choix possibles avec des listes déroulantes et cases à cocher :cite[1]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Zap className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Interface Intuitive</h4>
                      <p className="text-gray-600">Créez des tableaux de bord faciles à utiliser sans formation complexe :cite[6]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Building className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Automatisation des Processus</h4>
                      <p className="text-gray-600">Standardisez la saisie des données dans toute l'organisation :cite[9]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon31/interface-controles.png" 
                  alt="Tableau de bord Excel avec différents contrôles de formulaire"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Interface utilisateur enrichie
                </div>
              </div>
            </div>

            {/* Section Activation Développeur */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Activer l'Onglet Développeur</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-base md:text-2xl font-bold mb-2">1</div>
                  <p className="text-sm opacity-90">Fichier → Options → Personnaliser le ruban :cite[1]:cite[2]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-base md:text-2xl font-bold mb-2">2</div>
                  <p className="text-sm opacity-90">Cocher &ldquo;Développeur&rdquo; dans onglets principaux</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-base md:text-2xl font-bold mb-2">3</div>
                  <p className="text-sm opacity-90">Cliquer sur OK pour valider</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Types de Contrôles */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('types')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <List className="w-6 h-6 text-blue-600" />
            </div>
            Tour d'Horizon des Contrôles Disponibles
          </h2>
          {expandedSections.types ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.types && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Choisissez le Bon Contrôle pour Chaque Besoin</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                {/* Liste déroulante */}
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📋 Liste Déroulante (Combo Box)</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Utilisation :</strong> Sélection unique dans une liste prédéfinie :cite[1]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Économise de l&apos;espace, idéal pour les longues listes</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        Plage d&apos;entrée: H1:H20 → Cellule liée: G1
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case à cocher */}
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">☑️ Case à Cocher (Check Box)</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Utilisation :</strong> Options Oui/Non, Vrai/Faux :cite[5]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Permet des sélections multiples</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        VRAI si cochée, FAUX sinon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Bouton radio */}
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🔘 Bouton Radio (Option Button)</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Utilisation :</strong> Choix unique dans un groupe :cite[5]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Choix mutuellement exclusifs</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        Retourne 1, 2, 3... selon le bouton sélectionné
                      </div>
                    </div>
                  </div>
                </div>

                {/* Barre de défilement */}
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📊 Barre de Défilement (Scroll Bar)</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Utilisation :</strong> Navigation dans plages de valeurs :cite[1]</p>
                      <p className="text-gray-700"><strong>Avantage :</strong> Ajustement visuel et précis</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        Valeur min: 1 → Valeur max: 100 → Incrément: 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Comparatif */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau Comparatif des Contrôles de Formulaire</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Contrôle</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Valeur Retournée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-600">Liste Déroulante</td>
                      <td className="p-4 text-gray-700">Choix dans liste limitée</td>
                      <td className="p-4 text-gray-600">Position dans liste (1, 2, 3...)</td>
                      <td className="p-4 text-gray-600">Choix département</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Case à Cocher</td>
                      <td className="p-4 text-gray-700">Option binaire</td>
                      <td className="p-4 text-gray-600">VRAI/FAUX</td>
                      <td className="p-4 text-gray-600">&ldquo;Client actif&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-purple-600">Bouton Radio</td>
                      <td className="p-4 text-gray-700">Choix exclusif</td>
                      <td className="p-4 text-gray-600">Numéro option (1, 2, 3...)</td>
                      <td className="p-4 text-gray-600">Type de contrat</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-amber-600">Bouton Spinner</td>
                      <td className="p-4 text-gray-700">Valeur numérique</td>
                      <td className="p-4 text-gray-600">Nombre entier</td>
                      <td className="p-4 text-gray-600">Quantité commande</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mise en Œuvre */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('implementation')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            Mise en Œuvre Pas à Pas
          </h2>
          {expandedSections.implementation ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.implementation && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Créez Votre Premier Contrôle en 5 Minutes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Étape 1: Insérer un Contrôle</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Onglet Développeur</h5>
                          <p className="text-gray-600 text-sm">Cliquer sur &ldquo;Insérer&rdquo; dans le groupe Contrôles :cite[1]</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Choisir le Contrôle</h5>
                          <p className="text-gray-600 text-sm">Sélectionner sous &ldquo;Contrôles de formulaire&rdquo;</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Dessiner sur la Feuille</h5>
                          <p className="text-gray-600 text-sm">Cliquer-glisser pour définir la taille</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">⚙️ Étape 2: Configurer le Format</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Clic droit → Format de contrôle :cite[1]</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Plage d&apos;entrée: =$H$1:$H$10<br/>
                          Cellule liée: =$G$1
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          <strong>Astuce :</strong> Utilisez la fonction <strong>INDEX()</strong> avec la cellule liée pour afficher la valeur sélectionnée :cite[1]:cite[2].
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon31/insertion-controle.gif" 
                  alt="Animation montrant l'insertion et configuration d'un contrôle"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">💡 Bonnes Pratiques de Configuration</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Plage d&apos;entrée :</strong> Utilisez des plages nommées pour plus de clarté</p>
                    <p><strong>Cellule liée :</strong> Choisissez une cellule discrète pour stocker la valeur</p>
                    <p><strong>Ombre 3D :</strong> Cochez l&apos;option pour un aspect professionnel :cite[1]</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Dépannage Courant</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>Contrôle ne fonctionne pas :</strong> Vérifiez que la feuille n&apos;est pas protégée</p>
                    <p><strong>Valeurs incorrectes :</strong> Contrôlez la plage d&apos;entrée et cellule liée</p>
                    <p><strong>Onglet Développeur manquant :</strong> Activez-le dans les options Excel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple Code Formule */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
              <div className="bg-amber-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemple: Liste Déroulante avec INDEX()</h4>
              </div>
              <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Configuration</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Plage source (H1:H5):</span>
                        <span className="text-green-600 font-mono">Paris, Lyon, Marseille, Toulouse, Bordeaux</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Cellule liée (G1):</span>
                        <span className="text-blue-600 font-mono">=2 (si Lyon sélectionné)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-semibold text-gray-700">Formule d&apos;affichage (A1):</span>
                        <span className="text-purple-600 font-mono">=INDEX(H1:H5, G1)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon31/exemple-liste.png" 
                      alt="Exemple complet de liste déroulante fonctionnelle"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('pratique')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <PlayCircle className="w-6 h-6 text-amber-600" />
            </div>
            Cas Pratique: Formulaire de Saisie Client
          </h2>
          {expandedSections.pratique ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.pratique && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Créez un Formulaire Professionnel de Gestion Client</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">👤 Structure du Formulaire</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Liste déroulante &ldquo;Civilité&rdquo;</h5>
                          <p className="text-gray-600 text-sm">M., Mme, Mlle avec cellule liée en B2</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Cases à cocher &ldquo;Centres d&apos;intérêt&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Newsletter, Promotions, Partenaires (multi-sélection)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Boutons radio &ldquo;Type de client&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Particulier, Professionnel, Entreprise (choix unique)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Bouton spinner &ldquo;Nombre de commandes&rdquo;</h5>
                          <p className="text-gray-600 text-sm">Valeur entre 1 et 100 avec incrément de 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">🎯 Projet Pratique: Implémentez Ce Formulaire</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">1</div>
                      <span>Téléchargez le fichier d&apos;exercice ci-contre</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">2</div>
                      <span>Créez tous les contrôles décrits</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">3</div>
                      <span>Configurez les plages et cellules liées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">4</div>
                      <span>Testez l&apos;interactivité du formulaire</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon31/formulaire-client.png" 
                  alt="Capture d'écran d'un formulaire client complet avec contrôles"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-green-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon31/formulaire-client-exercice.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger l&apos;Exercice Pratique
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon31/creation-formulaire-complet.mp4"
                      title="Création d'un formulaire client de A à Z"
                      duration="22:15"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Fonctions Avancées */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Fonctions Excel Essentielles avec les Contrôles</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">INDEX</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">INDEX()</h5>
                  <p className="text-sm text-gray-600">Affiche la valeur sélectionnée :cite[1]</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">SI</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">SI()</h5>
                  <p className="text-sm text-gray-600">Logique conditionnelle avec cases</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">CHOISIR</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">CHOISIR()</h5>
                  <p className="text-sm text-gray-600">Sélection basée sur position :cite[5]</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-600">RECHERCHEV</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">RECHERCHEV()</h5>
                  <p className="text-sm text-gray-600">Recherche dans tableaux</p>
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
            Techniques Avancées et Bonnes Pratiques
          </h2>
          {expandedSections.avance ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.avance && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Optimisez l&apos;Utilisation de Vos Contrôles</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
                  <div className="bg-red-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🛡️ Protection et Sécurité</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Protéger la Feuille</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          Révision → Protéger la feuille → Autoriser les cellules déverrouillées
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          <strong>Important :</strong> Déverrouillez les cellules de saisie avant de protéger la feuille pour permettre l&apos;interaction avec les contrôles :cite[9].
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎨 Design et Expérience Utilisateur</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Cohérence visuelle :</strong> Utilisez les mêmes styles pour tous les contrôles</p>
                      <p className="text-gray-700"><strong>Groupement logique :</strong> Utilisez des cadres pour regrouper les contrôles liés :cite[6]</p>
                      <p className="text-gray-700"><strong>Libellés clairs :</strong> Expliquez clairement l&apos;usage de chaque contrôle</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon31/dashboard-avance.png" 
                  alt="Tableau de bord avancé avec multiples contrôles interactifs"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">🚀 Passage au Niveau Supérieur</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Combinez plusieurs contrôles pour des tableaux de bord complexes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Utilisez les contrôles pour filtrer des tableaux croisés dynamiques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Créez des modèles réutilisables pour votre équipe :cite[9]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan compétences */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Compétences Maîtrisées - Leçon 31</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Sliders className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Fondamentaux</h5>
                  <p className="text-sm text-gray-600">Onglet Développeur, types de contrôles</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Configuration</h5>
                  <p className="text-sm text-gray-600">Plages, cellules liées, formules</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <PlayCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Cas Pratique</h5>
                  <p className="text-sm text-gray-600">Formulaire client complet</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Techniques Avancées</h5>
                  <p className="text-sm text-gray-600">Protection, design, bonnes pratiques</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon31 onResult={onResult} />
      </div>
    </div>
  );
}