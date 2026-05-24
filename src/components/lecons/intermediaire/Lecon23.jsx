import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon23 from "../../quizz/intermediaire/QuizLecon23";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Database,
  Filter,
  RefreshCw,
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
  Search,
  FileText,
  Layers,
  Wrench,
  Play,
  Code
} from "lucide-react";

export default function Lecon23({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    pourquoi_powerquery: true,
    interface_components: true,
    premiere_transformation: true,
    etapes_appliquees: true,
    langage_m: true,
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
      {/* En-tête avec nouveau dégradé bleu/cyan */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Database className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Introduction à Power Query</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Transformez vos données brutes en informations exploitables automatiquement</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 23 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Database className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Connecteurs multiples</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <RefreshCw className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Processus répétables</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Transformations avancées</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Automatisation complète</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            Qu'est-ce que Power Query ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Le Moteur de Transformation de Données Microsoft</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Power Query est un moteur de transformation et de préparation de données qui vous permet de connecter, nettoyer, transformer et charger vos données depuis des centaines de sources différentes:cite[1]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Solution ETL Complète</h4>
                      <p className="text-gray-600">Extraction, Transformation et Chargement des données en processus automatisé:cite[1]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Zap className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gain de Temps Massif</h4>
                      <p className="text-gray-600">Réduction de 80% du temps consacré à la préparation des données:cite[10]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <RefreshCw className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Processus Répétable</h4>
                      <p className="text-gray-600">Une fois configuré, votre nettoyage de données se reproduit d'un simple clic:cite[1]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/power-query-overview.png" 
                  alt="Diagramme Power Query connectant multiples sources de données"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Architecture ETL de Power Query:cite[1]
                </div>
              </div>
            </div>

            {/* Section Avantages Chiffrés */}
            <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4 text-center">📊 L'Impact Power Query en Chiffres</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">80%</div>
                  <p className="text-sm opacity-90">Réduction du temps de préparation</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">350+</div>
                  <p className="text-sm opacity-90">Transformations disponibles:cite[1]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">100+</div>
                  <p className="text-sm opacity-90">Connecteurs de données:cite[1]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-1">1 Click</div>
                  <p className="text-sm opacity-90">Rafraîchissement automatique</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pourquoi Power Query */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('pourquoi_powerquery')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            Pourquoi Power Query Change Tout ?
          </h2>
          {expandedSections.pourquoi_powerquery ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.pourquoi_powerquery && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Finis les Tâches Répétitives !</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">La Méthode Traditionnelle</h4>
                      <p className="text-gray-600 mb-3">Copier-coller manuel, formules complexes, perte de temps sur les mêmes tâches chaque jour...</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>• Risque d'erreurs humaines</p>
                        <p>• Processus non reproductible</p>
                        <p>• Temps considérable perdu</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">La Révolution Power Query</h4>
                      <p className="text-gray-600 mb-3">Automatisation complète, processus enregistré, rafraîchissement en un clic:cite[6]...</p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <p>• Zéro erreur de manipulation</p>
                        <p>• Processus 100% reproductible</p>
                        <p>• Gain de temps immédiat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/avant-apres-powerquery.gif" 
                  alt="Animation montrant la différence avant/après Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">💡 Scénarios Concrets</h5>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Reporting mensuel :</strong> De 4 heures à 2 minutes de traitement</p>
                    <p><strong>Consolidation de données :</strong> Fusion automatique de multiples fichiers</p>
                    <p><strong>Nettoyage :</strong> Standardisation automatique des formats</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau comparatif */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Comparatif Méthodes de Nettoyage de Données</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Critère</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Méthode Manuelle</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avec Power Query</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Temps de traitement</td>
                      <td className="p-4 text-gray-600 text-sm">30 minutes à plusieurs heures</td>
                      <td className="p-4 text-green-600 text-sm font-semibold">2 minutes (1er fois) puis 10 secondes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Risque d'erreur</td>
                      <td className="p-4 text-gray-600 text-sm">Élevé (erreurs humaines)</td>
                      <td className="p-4 text-green-600 text-sm font-semibold">Nul (processus automatisé)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Reproductibilité</td>
                      <td className="p-4 text-gray-600 text-sm">Difficile à impossible</td>
                      <td className="p-4 text-green-600 text-sm font-semibold">Parfaite (sauvegarde des étapes)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Adaptabilité</td>
                      <td className="p-4 text-gray-600 text-sm">Recréation manuelle nécessaire</td>
                      <td className="p-4 text-green-600 text-sm font-semibold">Ajustements simples et rapides:cite[1]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interface Power Query */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-cyan-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-cyan-50 to-blue-50 text-left hover:from-cyan-100 transition-all"
          onClick={() => toggleSection('interface_components')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-cyan-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-cyan-600" />
            </div>
            Découverte de l'Interface Power Query
          </h2>
          {expandedSections.interface_components ? 
            <ChevronUp className="w-6 h-6 text-cyan-600" /> : 
            <ChevronDown className="w-6 h-6 text-cyan-600" />
          }
        </button>
        
        {expandedSections.interface_components && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Naviguer comme un Pro dans l'Éditeur</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/interface-power-query.png" 
                  alt="Annotation de l'interface Power Query avec ses composants principaux"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <h5 className="font-semibold text-amber-800 mb-2">💡 Astuce de Productivité</h5>
                  <p className="text-amber-700 text-sm">
                    Utilisez le volet "Étapes appliquées" pour suivre et modifier chaque transformation. C'est votre historique de travail:cite[2].
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🧩 Les 5 Composants Principaux:cite[7]</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-600" />
                      Ruban (Ribbon)
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Contient tous les onglets et boutons de transformation : Accueil, Transformation, Ajouter une colonne...
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-green-600" />
                      Volet des Requêtes
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Liste toutes vos requêtes et transformations en cours. Gérez vos flux de données.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Aperçu des Données
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Visualisez en temps réel l'impact de chaque transformation sur vos données.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-amber-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-amber-600" />
                      Étapes Appliquées
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Historique détaillé de chaque transformation. Modifiable et réorganisable:cite[2].
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vue Schéma et Diagramme */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4">🌐 Vues Avancées Disponibles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Vue Schéma</h5>
                  <p className="text-sm opacity-90 mb-3">Interagissez uniquement avec la structure de vos données (noms de colonnes, types)</p>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon23/vue-schema.png" 
                    alt="Capture de la vue schéma Power Query"
                    className="rounded-lg border border-white/30"
                  />
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Vue Diagramme</h5>
                  <p className="text-sm opacity-90 mb-3">Visualisez le flux complet de vos transformations et leurs dépendances:cite[7]</p>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon23/vue-diagramme.png" 
                    alt="Capture de la vue diagramme Power Query"
                    className="rounded-lg border border-white/30"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Première Transformation */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('premiere_transformation')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Play className="w-6 h-6 text-green-600" />
            </div>
            Votre Première Transformation
          </h2>
          {expandedSections.premiere_transformation ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.premiere_transformation && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Connectez et Transformez en 5 Minutes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Étape 1 : Connexion aux Données</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Accédez à <strong>Données → Obtenir des données</strong> et choisissez votre source:cite[7].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Fichier Excel, CSV, base de données, web...</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Sélectionnez les tables ou feuilles à importer</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Cliquez sur "Transformer les données"</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Étape 2 : Nettoyage de Base</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Appliquez les transformations essentielles:cite[10] :
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Supprimer les lignes vides</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Changer les types de données</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Renommer les colonnes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Filtrer les données non pertinentes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/premiere-transformation.gif" 
                  alt="Animation montrant la première transformation Power Query"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🎯 Transformation en Temps Réel</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Aperçu immédiat :</strong> Voyez l'impact de chaque changement instantanément</p>
                    <p><strong>Annulation facile :</strong> Supprimez toute étape dans le volet "Étapes appliquées"</p>
                    <p><strong>Testez sans risque :</strong> Vos données originales ne sont jamais modifiées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallerie transformations */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🛠️ Transformations Disponibles (Exemples)</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border-2 border-blue-200 rounded-lg">
                  <Filter className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Filtrage</h5>
                  <p className="text-gray-600 text-sm mt-2">Filtrez par valeurs, dates, conditions complexes</p>
                </div>
                
                <div className="text-center p-4 border-2 border-green-200 rounded-lg">
                  <Wrench className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Nettoyage</h5>
                  <p className="text-gray-600 text-sm mt-2">Suppression doublons, valeurs vides, corrections</p>
                </div>
                
                <div className="text-center p-4 border-2 border-purple-200 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800">Regroupement</h5>
                  <p className="text-gray-600 text-sm mt-2">Agrégez et résumez vos données</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Étapes Appliquées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('etapes_appliquees')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <RefreshCw className="w-6 h-6 text-orange-600" />
            </div>
            Maîtrise des Étapes Appliquées
          </h2>
          {expandedSections.etapes_appliquees ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.etapes_appliquees && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800">Votre Historique de Travail Intelligent</h4>
                  <p className="text-blue-700 text-sm">
                    Chaque action que vous effectuez dans Power Query est enregistrée comme une étape dans le volet "Étapes appliquées". 
                    C'est le cœur de la reproductibilité de Power Query:cite[2].
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Gérez Votre Flux de Transformation</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Navigation dans l'Historique</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Cliquez sur n'importe quelle étape pour voir l'état de vos données à ce moment précis:cite[2].
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Visualisez l'impact de chaque transformation</li>
                      <li>Détectez facilement l'origine d'un problème</li>
                      <li>Testez différentes approches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Modification Flexible</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Adaptez votre processus à tout moment:cite[2] :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li><strong>Renommez</strong> les étapes pour plus de clarté</li>
                      <li><strong>Supprimez</strong> les étapes inutiles</li>
                      <li><strong>Réorganisez</strong> par glisser-déposer</li>
                      <li><strong>Modifiez</strong> les paramètres d'une étape</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/etapes-appliquees-detail.png" 
                  alt="Détail du volet étapes appliquées avec annotations"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="text-center text-sm text-gray-600">
                  Interface détaillée du volet étapes appliquées:cite[2]
                </div>
              </div>
            </div>

            {/* Tableau gestion étapes */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Actions Disponibles sur les Étapes</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Action</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Description</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Renommer</td>
                      <td className="p-4 text-gray-600 text-sm">Donnez un nom explicite à l'étape</td>
                      <td className="p-4 text-gray-600 text-sm">Clic droit → Renommer</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Supprimer</td>
                      <td className="p-4 text-gray-600 text-sm">Retirez l'étape et ses effets</td>
                      <td className="p-4 text-gray-600 text-sm">Icône × ou clic droit → Supprimer</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Déplacer</td>
                      <td className="p-4 text-gray-600 text-sm">Changez l'ordre des transformations</td>
                      <td className="p-4 text-gray-600 text-sm">Glisser-déposer ou flèches</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Modifier paramètres</td>
                      <td className="p-4 text-gray-600 text-sm">Ajustez les réglages d'une étape</td>
                      <td className="p-4 text-gray-600 text-sm">Clic droit → Modifier les paramètres:cite[2]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Langage M */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('langage_m')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Code className="w-6 h-6 text-indigo-600" />
            </div>
            Découverte du Langage M
          </h2>
          {expandedSections.langage_m ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.langage_m && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Le Code Secret Derrière Power Query</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🧠 Comprendre les Bases du Langage M</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Qu'est-ce que le Langage M ?</h5>
                    <p className="text-gray-600 text-sm">
                      C'est le langage de formules Power Query qui enregistre toutes vos transformations. 
                      Même quand vous utilisez l'interface graphique, Power Query génère du code M en arrière-plan:cite[1]:cite[8].
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-green-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Structure de Base</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Toute requête M suit cette structure:cite[8] :
                    </p>
                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono text-gray-800 overflow-x-auto">
{`let
    Source = ...,
    #"Étape transformée" = ...,
    #"Étape finale" = ...
in
    #"Étape finale"`}
                    </pre>
                  </div>
                  
                  <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Pourquoi Apprendre le M ?</h5>
                    <p className="text-gray-600 text-sm">
                      Pour des transformations avancées impossibles via l'interface, optimiser les performances, 
                      et créer des fonctions personnalisées:cite[9].
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon23/advanced-editor.png" 
                  alt="Capture de l'éditeur avancé Power Query montrant le code M"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">💡 Apprentissage Progressif</h5>
                  <div className="text-indigo-700 text-sm space-y-2">
                    <p><strong>Commencez par l'interface :</strong> L'interface graphique génère le code M pour vous</p>
                    <p><strong>Observez :</strong> Regardez le code créé dans l'Éditeur Avancé</p>
                    <p><strong>Modifiez :</strong> Faites de petits ajustements pour comprendre</p>
                    <p><strong>Créez :</strong> Développez vos propres fonctions:cite[9]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple concret M */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4">📝 Exemple Concret : Transformation en M</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Action Graphique</h5>
                  <p className="text-sm opacity-90 mb-3">Renommer une colonne "Ventes" en "Chiffre d'Affaires" via l'interface</p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm">Clic droit sur colonne → Renommer</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Code M Généré</h5>
                  <p className="text-sm opacity-90 mb-3">Le code équivalent créé automatiquement</p>
                  <pre className="bg-white/10 p-4 rounded-lg text-sm font-mono overflow-x-auto">
{`let
    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
    #"Colonne renommée" = Table.RenameColumns(
        Source, 
        {{"Ventes", "Chiffre d'Affaires"}}
    )
in
    #"Colonne renommée"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-teal-50 to-cyan-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            Exercice Pratique : Nettoyage de Données Ventes
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Sauver un Fichier Ventes Chaotique</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte</h4>
                  <p className="text-gray-700 mb-4">
                    Vous recevez un fichier Excel de ventes mensuelles avec de multiples problèmes : 
                    en-têtes sur plusieurs lignes, formats incohérents, dates mélangées, et des doublons.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-red-200">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Problèmes identifiés</p>
                        <p className="text-sm text-gray-600">En-têtes multiples, formats incohérents, doublons</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-green-200">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif final</p>
                        <p className="text-sm text-gray-600">Tableau propre prêt pour analyse dans Power BI</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon23/fichier-avant-nettoyage.png" 
                    alt="Capture du fichier ventes avant nettoyage montrant les problèmes"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white px-4 py-4 md:p-6 md:rounded-lg rounded-none rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Consignes de l'Exercice</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <span>Importez le fichier "Ventes_Chaotiques.xlsx" dans Power Query</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Supprimez les deux premières lignes (en-têtes multiples)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Utilisez la première ligne comme en-têtes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Changez le type des colonnes "Date", "Montant", "Quantité"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        5
                      </div>
                      <span>Supprimez les doublons et les lignes vides</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white px-4 py-4 md:p-6 md:rounded-lg rounded-none rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon23/exercice-nettoyage-ventes.zip" 
                      className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon23/correction-nettoyage-ventes.mp4"
                      title="Correction détaillée de l'exercice de nettoyage"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères d'Évaluation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">En-têtes correctement définis sur une seule ligne</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Types de données appropriés pour chaque colonne</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Zéro doublon dans les données finales</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Étapes appliquées clairement nommées et organisées</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Optionnel</h5>
                  <p className="text-sm text-gray-600">
                    Ajoutez une colonne "Catégorie de Vente" qui classe les montants en "Faible" (&lt;1000), 
                    "Moyenne" (1000-5000) et "Élevée" (&gt;5000) en utilisant une condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon23 onResult={onResult} />
      </div>
    </div>
  );
}