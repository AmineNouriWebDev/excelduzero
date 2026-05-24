import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon19 from "../../quizz/intermediaire/QuizLecon19";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Split,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Navigation,
  Table,
  Maximize,
  Minimize,
  Settings,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Download,
  Video,
  Users,
  BarChart3,
  Sparkles,
  Target
} from "lucide-react";

export default function Lecon19({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    difference: true,
    figer_volets: true,
    fractionner_volets: true,
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
      {/* En-tête avec dégradé moderne */}
     <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Split className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-4xl font-bold break-words">Fractionnement et Figement des Volets Excel</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez la navigation dans vos grands tableaux</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 19 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Lock className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Figement</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Split className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Fractionnement</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Navigation className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Navigation</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Table className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Productivité</p>
      </div>
    </div>
  </div>
</div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-blue-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            Pourquoi Fractionner et Figer les Volets ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gagnez en Efficacité avec les Grands Tableaux</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Lorsque vous travaillez avec des feuilles de calcul contenant des centaines de lignes et colonnes, il devient essentiel de garder visibles les en-têtes et les données importantes:cite[1]:cite[3].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Navigation intuitive</h4>
                      <p className="text-gray-600">Conservez les en-têtes visibles lors du défilement:cite[1]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Réduction des erreurs</h4>
                      <p className="text-gray-600">Évitez les mauvaises saisies en gardant le contexte visible:cite[5]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Productivité accrue</h4>
                      <p className="text-gray-600">Travaillez plus rapidement sans perdre vos repères:cite[5]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon19/navigation-optimisee.png" 
                  alt="Comparaison avant/après le figement des volets"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Différence entre Figer et Fractionner */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('difference')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            Figer vs Fractionner : Quelle Différence ?
          </h2>
          {expandedSections.difference ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.difference && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                <div className="bg-green-500 p-4 text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Figer les Volets
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Gèle des lignes et colonnes spécifiques</strong> pour les garder visibles lors du défilement:cite[1].
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Idéal pour les en-têtes de colonnes et lignes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Navigation simple et prévisible</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Plus adapté pour la plupart des utilisations courantes:cite[5]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
                <div className="bg-orange-500 p-4 text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Split className="w-5 h-5" />
                    Fractionner les Volets
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Divise la fenêtre en sections indépendantes</strong> avec leurs propres barres de défilement:cite[3].
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Parfait pour comparer différentes parties d'un tableau</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Flexibilité de navigation avancée</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Utile pour l'analyse de données complexes:cite[3]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau comparatif */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau Comparatif : Quand Utiliser Chaque Fonctionnalité</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Critère</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Figer les Volets</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Fractionner les Volets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Meilleur pour</td>
                      <td className="p-4 text-gray-600">Garder les en-têtes visibles</td>
                      <td className="p-4 text-gray-600">Comparer des sections éloignées</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Barres de défilement</td>
                      <td className="p-4 text-gray-600">Un jeu unique</td>
                      <td className="p-4 text-gray-600">Multiples (par section)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Complexité</td>
                      <td className="p-4 text-gray-600">Simple</td>
                      <td className="p-4 text-gray-600">Avancée</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Usage recommandé</td>
                      <td className="p-4 text-gray-600">90% des cas</td>
                      <td className="p-4 text-gray-600">10% des cas spécifiques</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Figer les Volets */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('figer_volets')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            Maîtriser le Figement des Volets
          </h2>
          {expandedSections.figer_volets ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.figer_volets && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Trois Méthodes de Figement</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Figer la ligne supérieure */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                <div className="bg-blue-500 p-4 text-white">
                  <h4 className="font-bold text-lg">Ligne Supérieure</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Gèle uniquement la première ligne</strong> pour les en-têtes de colonnes:cite[1].
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>Parfait pour les tableaux simples</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>1 clic : Affichage → Figer → Ligne supérieure</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm font-semibold">Raccourci :</p>
                    <code className="text-blue-700 text-sm">Alt + A + F + R</code>
                  </div>
                </div>
              </div>

              {/* Figer la première colonne */}
              <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                <div className="bg-green-500 p-4 text-white">
                  <h4 className="font-bold text-lg">Première Colonne</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Gèle uniquement la colonne A</strong> pour les libellés de lignes:cite[1].
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Idéal pour les tableaux larges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>1 clic : Affichage → Figer → Première colonne</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 text-sm font-semibold">Raccourci :</p>
                    <code className="text-green-700 text-sm">Alt + A + F + C</code>
                  </div>
                </div>
              </div>

              {/* Figer les volets personnalisés */}
              <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                <div className="bg-purple-500 p-4 text-white">
                  <h4 className="font-bold text-lg">Volets Personnalisés</h4>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-3">
                    <strong>Gèle plusieurs lignes et/ou colonnes</strong> selon vos besoins:cite[1]:cite[5].
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Maximum de flexibilité</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span>Sélectionnez la cellule puis : Affichage → Figer → Figer les volets</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 text-sm font-semibold">Règle :</p>
                    <code className="text-purple-700 text-sm">Tout ce qui est au-dessus et à gauche est gelé</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Démonstration étape par étape */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🎯 Guide Visuel : Figer les 2 Premières Lignes et la Première Colonne</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      Sélectionnez la Bonne Cellule
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Cliquez sur la cellule <strong>B3</strong> :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>À droite de la colonne à figer (A)</li>
                      <li>En dessous des lignes à figer (1-2)</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon19/selection-cellule.png" 
                      alt="Sélection de la cellule B3 pour figer ligne 1-2 et colonne A"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="lg:order-2">
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      Appliquez le Figement
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Menu : <strong>Affichage → Figer les volets → Figer les volets</strong>
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Les lignes 1-2 et colonne A sont maintenant figées</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center lg:order-1">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon19/menu-figer-volets.png" 
                      alt="Menu pour figer les volets dans Excel"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      Vérifiez le Résultat
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Faites défiler pour confirmer :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Les lignes 1-2 restent visibles</li>
                      <li>La colonne A reste visible</li>
                      <li>Le reste du tableau défile normalement</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon19/resultat-fige.gif" 
                      alt="Animation montrant le défilement avec volets figés"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Fractionner les Volets */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('fractionner_volets')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Split className="w-6 h-6 text-orange-600" />
            </div>
            Maîtriser le Fractionnement des Volets
          </h2>
          {expandedSections.fractionner_volets ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.fractionner_volets && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Fractionnement Avancé pour l'Analyse Comparative:cite[3]</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Quand Utiliser le Fractionnement ?</h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                    <h5 className="font-semibold text-gray-800 mb-2">📊 Comparaison de données éloignées</h5>
                    <p className="text-gray-600 text-sm">
                      Visualisez simultanément le début et la fin d'un grand tableau:cite[3].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                    <h5 className="font-semibold text-gray-800 mb-2">🔍 Analyse détaillée</h5>
                    <p className="text-gray-600 text-sm">
                      Étudiez des sections spécifiques tout en gardant le contexte global.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                    <h5 className="font-semibold text-gray-800 mb-2">🔄 Navigation indépendante</h5>
                    <p className="text-gray-600 text-sm">
                      Chaque section possède ses propres barres de défilement:cite[3].
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/lecon19/fractionnement-demo.gif" 
                  alt="Démonstration du fractionnement de volets en action"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
              </div>
            </div>

            {/* Méthodes de fractionnement */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">⚡ Trois Façons de Fractionner</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border-2 border-blue-200 rounded-lg">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                    1
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Barre de fractionnement</h5>
                  <p className="text-gray-600 text-sm">
                    Glissez les barres de fractionnement au-dessus de la barre de défilement verticale et à droite de la barre de défilement horizontale.
                  </p>
                </div>
                
                <div className="text-center p-4 border-2 border-green-200 rounded-lg">
                  <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                    2
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Menu Ruban</h5>
                  <p className="text-gray-600 text-sm">
                    <strong>Affichage → Fenêtre → Fractionner</strong>. Cliquez à nouveau pour supprimer le fractionnement:cite[3].
                  </p>
                </div>
                
                <div className="text-center p-4 border-2 border-purple-200 rounded-lg">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 font-bold">
                    3
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Sélection de cellule</h5>
                  <p className="text-gray-600 text-sm">
                    Sélectionnez une cellule pour définir où placer le fractionnement. Tout ce qui est au-dessus et à gauche sera dans le premier volet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-cyan-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('cas_pratique')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Users className="w-6 h-6 text-teal-600" />
            </div>
            Cas Pratique : Gestion de Base de Données Clients
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Scénario Réel : Tableau Clients de 500 Lignes</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Problème Rencontré</h4>
                  <p className="text-gray-700 mb-4">
                    Vous avez une base de données clients avec 500 entrées et 15 colonnes. Lorsque vous faites défiler vers le bas, vous perdez de vue les en-têtes. Lorsque vous faites défiler vers la droite, vous perdez les noms des clients.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                      <h5 className="font-semibold text-gray-800 mb-2">❌ Avant l'optimisation :</h5>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                        <li>En-têtes invisibles après 20 lignes</li>
                        <li>Noms clients invisibles après la colonne F</li>
                        <li>Risque d'erreurs de saisie élevé</li>
                        <li>Productivité réduite de 40%:cite[5]</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">✅ Après optimisation :</h5>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                        <li>En-têtes toujours visibles</li>
                        <li>Noms clients toujours visibles</li>
                        <li>Navigation fluide et précise</li>
                        <li>Productivité augmentée de 60%:cite[5]</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon19/cas-pratique-optimisation.png" 
                    alt="Comparaison avant/après optimisation navigation"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>

            {/* Solution étape par étape */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🛠️ Solution : Figer la Ligne 1 et les Colonnes A-B</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                    <h5 className="font-semibold text-gray-800">Sélection</h5>
                    <p className="text-gray-600 text-sm">Cliquez sur la cellule <strong>C2</strong></p>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">2</div>
                    <h5 className="font-semibold text-gray-800">Application</h5>
                    <p className="text-gray-600 text-sm">Menu : <strong>Figer les volets</strong></p>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                    <h5 className="font-semibold text-gray-800">Résultat</h5>
                    <p className="text-gray-600 text-sm">Ligne 1 et colonnes A-B figées</p>
                  </div>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                  <h5 className="font-semibold text-teal-800 mb-2">💡 Pourquoi cette configuration ?</h5>
                  <p className="text-teal-700 text-sm">
                    <strong>Ligne 1</strong> contient les en-têtes de colonnes. <strong>Colonnes A-B</strong> contiennent l'ID client et le nom. 
                    Cette configuration garde les informations essentielles toujours visibles peu importe la position dans le tableau:cite[1]:cite[5].
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 6 : Bonnes Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-slate-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-slate-50 to-gray-50 text-left hover:from-slate-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-slate-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-slate-600" />
            </div>
            Bonnes Pratiques et Pièges à Éviter
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
                    <h5 className="font-semibold text-gray-800 mb-2">Figer uniquement l'essentiel</h5>
                    <p className="text-gray-600 text-sm">
                      Ne figer que les lignes/colonnes vraiment nécessaires. Trop de contenu figé réduit l'espace de travail visible:cite[5].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Utiliser les raccourcis clavier</h5>
                    <p className="text-gray-600 text-sm">
                      <code>Alt + A + F + F</code> pour figer les volets à la position actuelle. Gain de temps significatif:cite[5].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Tester sur différents écrans</h5>
                    <p className="text-gray-600 text-sm">
                      Vérifiez que votre configuration est adaptée aux ordinateurs portables et grands écrans:cite[5].
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">❌ Pièges Courants</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Oublier de libérer avant modification</h5>
                    <p className="text-gray-600 text-sm">
                      Libérez toujours les volets avant des opérations importantes de restructuration:cite[5].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Mauvaise sélection de cellule</h5>
                    <p className="text-gray-600 text-sm">
                      Se souvenir : Excel gèle tout ce qui est AU-DESSUS et À GAUCHE de la cellule sélectionnée:cite[1].
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Confondre figer et fractionner</h5>
                    <p className="text-gray-600 text-sm">
                      Utiliser le fractionnement pour de simples en-têtes est overkill. Préférer le figement dans 90% des cas:cite[3].
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-blue-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Checklist de Configuration Optimale</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Avant de figer :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Identifier les en-têtes essentiels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Choisir la bonne cellule de départ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Sauvegarder le fichier</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Après avoir figé :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Tester le défilement vertical/horizontal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Vérifier sur différents écrans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Documenter la configuration</span>
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
            Exercice Pratique : Optimisation d'un Tableau de Ventes
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Rendre Utilisable un Grand Tableau de Ventes</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte</h4>
                  <p className="text-gray-700 mb-4">
                    Vous recevez un tableau de ventes annuelles avec 12 mois de données, 50 produits, et 15 métriques par produit. Le tableau fait 600 lignes et 20 colonnes.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Problème actuel</p>
                        <p className="text-sm text-gray-600">Impossible de voir les en-têtes et les noms de produits simultanément</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif</p>
                        <p className="text-sm text-gray-600">Permettre une navigation fluide et sans erreurs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon19/exercice-tableau-ventes.png" 
                    alt="Tableau de ventes à optimiser"
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
                      <span>Téléchargez le fichier d'exercice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Figez les lignes 1-3 (en-têtes) et les colonnes A-B (produits)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Testez la navigation dans toutes les directions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Comparez avec la situation initiale</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon19/exercice-ventes.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger l'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon19/correction-exercice.mp4"
                      title="Correction détaillée de l'exercice"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères d'Évaluation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Configuration correcte des volets figés</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Navigation fluide dans toutes les directions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Respect des bonnes pratiques</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Capacité à expliquer les choix techniques</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon19 onResult={onResult} />
      </div>
    </div>
  );
}