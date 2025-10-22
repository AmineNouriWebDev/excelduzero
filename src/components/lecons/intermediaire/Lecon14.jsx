import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon14 from "../../quizz/intermediaire/QuizLecon14";
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
  Layers
} from "lucide-react";

export default function Lecon14({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    creation: true,
    utilisation: true,
    bonnes_pratiques: true,
    integration: true,
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
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Tag className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-4xl font-bold break-words">Maîtrise des Noms de Plages</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Formules lisibles, Références stables et Automatisation avancée</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 14 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Bookmark className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Références Absolues Stables</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Navigation className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Formules Compréhensibles</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Navigation Rapide</p>
      </div>
    </div>
  </div>
</div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Tag className="w-6 h-6 text-blue-600" />
            </div>
            L'Art de Nommer : Pourquoi les Noms de Plages sont Essentiels
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  Au-delà des Références Cellules : Travailler avec Intelligence
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Passez des références cryptiques comme <code className="bg-gray-100 px-1 rounded">'Feuil1'!$B$2:$K$50</code> 
                  à des noms explicites comme <code className="bg-gray-100 px-1 rounded">CHIFFRE_AFFAIRES_ANNUEL</code>. 
                  Les noms de plages transforment vos feuilles Excel en documents professionnels, maintenables et compréhensibles par tous.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Clarté et lisibilité des formules</h4>
                      <p className="text-gray-600 text-sm">Comprenez <code className="bg-gray-100 px-1 rounded">=SOMME(Ventes_Q2)</code> plus facilement que <code className="bg-gray-100 px-1 rounded">=SOMME(B2:B50)</code></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Maintenance facilitée</h4>
                      <p className="text-gray-600 text-sm">Modifiez la plage dans le Gestionnaire de noms, toutes les formules utilisant ce nom sont mises à jour automatiquement:cite[4]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Navigation ultra-rapide</h4>
                      <p className="text-gray-600 text-sm">Atteignez instantanément n'importe quelle zone de votre classeur via la zone de liste déroulante Nom:cite[1]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon14/plages-nommees-overview.png" 
                  alt="Comparaison entre formules avec références standards et formules avec plages nommées"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-semibold">+80%</span> de lisibilité
                </div>
              </div>
            </div>

            {/* Tableau comparatif */}
            <div className="mt-12 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Avant/Après : La Révolution des Noms de Plages
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Sans noms de plages</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avec noms de plages</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">
                        <code className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">=SOMME(Feuil2!$D$2:$D$100)</code>
                      </td>
                      <td className="p-4">
                        <code className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">=SOMME(Ventes_Total)</code>
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Compréhension immédiate</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">=B2*$M$2</code>
                      </td>
                      <td className="p-4">
                        <code className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">=Quantite * Taux_TVA</code>
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Logique métier explicite</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="text-gray-700">Modifier manuellement 15 formules si la plage s'agrandit</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-700">Modifier une seule fois la plage nommée</div>
                      </td>
                      <td className="p-4 text-gray-700">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Maintenance centralisée:cite[4]</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Création et Gestion des Plages Nommées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('creation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Bookmark className="w-6 h-6 text-green-600" />
            </div>
            1. Création et Gestion des Plages Nommées
          </h2>
          {expandedSections.creation ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.creation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-green-600" />
                Les Trois Méthodes de Création
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Méthode 1 : Zone Nom (Rapide)</h4>
                  <p className="text-gray-700 mb-4">
                    La méthode la plus directe pour nommer une plage sélectionnée. Parfait pour les plages simples et fréquemment utilisées.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étapes :</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Sélectionnez la plage de cellules</li>
                        <li>Cliquez sur la <strong>Zone Nom</strong> en haut à gauche de la barre de formule:cite[1]</li>
                        <li>Tapez le nom (sans espaces) et appuyez sur <code className="bg-gray-100 px-1 rounded">Entrée</code></li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                        Astuce : Conventions de nommage
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Utilisez des majuscules et des tirets bas _ pour séparer les mots. 
                        Par exemple : <code className="bg-blue-100 px-1 rounded">CHIFFRE_AFFAIRES_Q1</code> ou <code className="bg-blue-100 px-1 rounded">Taux_Remise_Standard</code>:cite[4]
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/creation-zone-nom.gif" 
                    alt="Animation montrant la création d'une plage nommée via la zone nom"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/creation-selection.png" 
                    alt="Interface de création de noms à partir d'une sélection"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Méthode 2 : Création à partir d'une sélection (Intelligente)</h4>
                  <p className="text-gray-700 mb-4">
                    Excel peut créer automatiquement plusieurs plages nommées en une seule opération en utilisant les étiquettes de votre tableau comme noms.
                  </p>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Étapes :</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Sélectionnez votre tableau complet avec les en-têtes</li>
                      <li>Accédez à <strong>Formules → Créer à partir de la sélection</strong>:cite[5]</li>
                      <li>Choisissez la position de vos étiquettes (Ligne du haut, Colonne de gauche, etc.)</li>
                      <li>Validez avec <strong>OK</strong></li>
                    </ol>
                  </div>
                  
                  <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Résultat :</h5>
                    <p className="text-sm text-gray-600">
                      Si votre tableau a des en-têtes "Ventes", "Coûts" et "Bénéfices" en ligne du haut, 
                      Excel créera automatiquement les plages nommées correspondantes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Méthode 3 : Gestionnaire de Noms (Complet)</h4>
                <p className="text-gray-700 mb-4">
                  Le centre de contrôle pour toutes vos plages nommées. Idéal pour créer des plages complexes, définir leur portée et les gérer à l'échelle du classeur.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Accès et fonctionnalités :</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Accédez via <strong>Formules → Gestionnaire de noms</strong>:cite[1]</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Créez, modifiez, supprimez des plages nommées</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Définissez la portée (Classeur ou Feuille spécifique):cite[8]</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Ajoutez des commentaires pour documenter chaque plage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/Lecon14/gestionnaire-noms.png" 
                      alt="Interface du Gestionnaire de noms d'Excel"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Utilisation Avancée dans les Formules */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('utilisation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Navigation className="w-6 h-6 text-purple-600" />
            </div>
            2. Utilisation Avancée dans les Formules et Fonctions
          </h2>
          {expandedSections.utilisation ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.utilisation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-600" />
                Formules Expressives et Maintenance Simplifiée
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Intégration dans les formules de calcul</h4>
                  <p className="text-gray-700 mb-4">
                    Remplacer les références cellulaires cryptiques par des noms significatifs transforme 
                    vos formules en véritables phrases explicites.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Exemple : Calcul de bénéfice</h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">SANS noms de plages :</p>
                          <code className="block text-sm bg-red-50 text-red-700 p-3 rounded-lg">
                            =C2*$F$2-D2
                          </code>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">AVEC noms de plages :</p>
                          <code className="block text-sm bg-green-50 text-green-700 p-3 rounded-lg">
                            =Quantite * Prix_Unitaire - Cout_Production
                          </code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-xl">
                      <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600" />
                        Productivité : Saisie semi-automatique
                      </h5>
                      <p className="text-green-700 text-sm">
                        Dans une formule, commencez à taper le nom de votre plage, Excel proposera 
                        la saisie semi-automatique. Appuyez sur Tab pour l'insérer:cite[1].
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/saisie-automatique-formules.gif" 
                    alt="Démonstration de la saisie semi-automatique des noms de plages dans les formules"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Plages dynamiques avec DECALER()</h4>
                <p className="text-gray-700 mb-4">
                  Créez des plages nommées qui s'adaptent automatiquement lorsque vous ajoutez ou supprimez 
                  des données, éliminant ainsi les mises à jour manuelles.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Formule DECALER() dynamique</h5>
                  <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                    =DECALER($A$1,0,0,NBVAL($A:$A),1)
                  </code>
                  <p className="text-sm text-gray-600 mb-4">
                    Cette formule crée une plage qui commence en A1 et s'étend vers le bas du nombre de cellules non vides dans la colonne A.
                  </p>
                  
                  <h5 className="font-semibold text-gray-800 mb-2">Application :</h5>
                  <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                    <li>Ouvrez le Gestionnaire de noms</li>
                    <li>Créez une nouvelle plage nommée <code className="bg-gray-100 px-1 rounded">DONNEES_DYNAMIQUES</code></li>
                    <li>Dans "Fait référence à :", entrez la formule DECALER() ci-dessus</li>
                    <li>Utilisez <code className="bg-gray-100 px-1 rounded">DONNEES_DYNAMIQUES</code> dans vos tableaux croisés dynamiques et graphiques</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Fonction INDIRECT() pour références flexibles</h4>
                <p className="text-gray-700 mb-4">
                  La fonction INDIRECT() permet de construire des références à partir de texte, 
                  ouvrant la voie à des systèmes de validation et calculs extrêmement flexibles.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Application : Listes dépendantes avancées</h5>
                    <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                      =INDIRECT($B$2)
                    </code>
                    <p className="text-sm text-gray-600">
                      Si B2 contient "France", la validation cherchera une plage nommée "France". 
                      Parfait pour créer des systèmes de navigation hiérarchique.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Bonne pratique : Gestion des erreurs
                    </h5>
                    <p className="text-blue-700 text-sm">
                      Combinez INDIRECT() avec SIERREUR() pour éviter les messages d'erreur si une plage nommée n'existe pas :
                      <code className="block bg-blue-100 p-2 rounded mt-2 text-sm">
                        =SIERREUR(INDIRECT($B$2), "Plage non trouvée")
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Bonnes Pratiques et Gestion à l'Échelle du Classeur */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            3. Architecture et Bonnes Pratiques Professionnelles
          </h2>
          {expandedSections.bonnes_pratiques ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.bonnes_pratiques && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-orange-600" />
                Structurer pour l'Efficacité et la Maintenance
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Portée : Classeur vs Feuille</h4>
                  <p className="text-gray-700 mb-4">
                    Comprendre la différence entre ces deux portées est crucial pour architecturer 
                    un classeur Excel professionnel et éviter les conflits.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-800">Plage de Classeur (Globale)</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Accessible depuis n'importe quelle feuille du classeur. Idéale pour les constantes, 
                        paramètres et données de référence utilisées dans tout le classeur.
                      </p>
                      <code className="block text-xs bg-gray-100 p-2 rounded mt-2">
                        TAUX_TVA, NOM_ENTREPRISE, ANNEE_EN_COURS
                      </code>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-gray-800">Plage de Feuille (Spécifique)</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Accessible seulement depuis la feuille où elle est définie. Parfaite pour réutiliser 
                        le même nom dans différentes feuilles avec des valeurs différentes:cite[8].
                      </p>
                      <code className="block text-xs bg-gray-100 p-2 rounded mt-2">
                        Feuille1!Ventes, Feuille2!Ventes, Feuille3!Ventes
                      </code>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/portee-plages.png" 
                    alt="Diagramme illustrant la différence entre portée classeur et portée feuille"
                    className="rounded-xl shadow-lg"
                  />
                  
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Comment définir la portée
                    </h5>
                    <p className="text-blue-700 text-sm">
                      Dans le Gestionnaire de noms, lors de la création ou modification, 
                      utilisez le champ "Étendue" pour choisir entre "Classeur" ou une feuille spécifique:cite[8].
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Conventions de nommage professionnelles</h4>
                <p className="text-gray-700 mb-4">
                  Adopter des standards de nommage cohérents rend vos classeurs compréhensibles 
                  par d'autres utilisateurs et par vous-même dans le futur.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Règles essentielles :</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Pas d'espaces (utilisez le tiret bas _ à la place)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Ne commencez pas par un chiffre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Évitez les caractères spéciaux (%, &, -, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Maximum 255 caractères (mais restez concis!)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Exemples de bonnes pratiques :</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">✅ À faire :</p>
                        <code className="block bg-green-50 text-green-700 p-2 rounded text-xs">TAUX_TVA</code>
                        <code className="block bg-green-50 text-green-700 p-2 rounded text-xs mt-1">VENTES_TRIMESTRE_1</code>
                        <code className="block bg-green-50 text-green-700 p-2 rounded text-xs mt-1">NBR_EMPLOYES</code>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 mb-1">❌ À éviter :</p>
                        <code className="block bg-red-50 text-red-700 p-2 rounded text-xs">Taux TVA</code>
                        <code className="block bg-red-50 text-red-700 p-2 rounded text-xs mt-1">Ventes%</code>
                        <code className="block bg-red-50 text-red-700 p-2 rounded text-xs mt-1">1erTrimestre</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Audit et Documentation</h4>
                <p className="text-gray-700 mb-4">
                  Maintenez vos plages nommées organisées et documentées pour assurer la pérennité 
                  de vos classeurs, surtout lorsqu'ils sont utilisés par plusieurs personnes.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-yellow-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Utilisation du Gestionnaire de noms</h5>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Tri et filtrage des plages nommées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Vérification des références cassées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Ajout de commentaires explicatifs pour chaque plage:cite[1]</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      Travail collaboratif
                    </h5>
                    <p className="text-purple-700 text-sm">
                      Dans un environnement multi-utilisateurs, créez une feuille "Documentation" 
                      listant toutes les plages nommées, leur usage et leur propriétaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Intégration avec les Fonctions et Tableaux */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('integration')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            4. Intégration Avancée avec les Autres Fonctionnalités Excel
          </h2>
          {expandedSections.integration ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.integration && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-teal-600" />
                Synergies avec l'Ecosystème Excel
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Tableaux Croisés Dynamiques et Graphiques</h4>
                  <p className="text-gray-700 mb-4">
                    Utilisez des plages nommées dynamiques comme source pour vos tableaux croisés 
                    dynamiques et graphiques pour qu'ils s'actualisent automatiquement avec vos nouvelles données.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Configuration :</h5>
                      <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                        <li>Créez une plage nommée dynamique avec DECALER()</li>
                        <li>Insérez un tableau croisé dynamique</li>
                        <li>Dans "Plage de tableau", entrez le nom de votre plage dynamique</li>
                        <li>Actualisez simplement vos données, le TCD capturera les nouvelles lignes automatiquement</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                        Actualisation automatique
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Après avoir ajouté des données, actualisez votre tableau croisé dynamique 
                        (Clic droit → Actualiser) pour inclure les nouvelles informations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/tcd-plages-dynamiques.gif" 
                    alt="Tableau croisé dynamique utilisant une plage nommée dynamique"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Automatisation VBA avec plages nommées</h4>
                <p className="text-gray-700 mb-4">
                  En VBA, référencer des plages par leur nom plutôt que par leur adresse rend 
                  votre code plus robuste aux modifications structurelles de vos feuilles.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Exemple de code VBA :</h5>
                  <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                    {`' ACCÈS À UNE PLAGE NOMMÉE
Range("TAUX_TVA").Value = 0.2

' BOUCLE SUR CHAQUE CELLULE D'UNE PLAGE NOMMÉE
Dim cell As Range
For Each cell In Range("LISTE_PRODUITS")
    If cell.Value > 100 Then
        cell.Interior.Color = RGB(255, 200, 200)
    End If
Next cell`}
                  </code>
                  <p className="text-sm text-gray-600">
                    Ce code est beaucoup plus lisible et maintenable qu'avec des références cellulaires directes:cite[4]:cite[8].
                  </p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon14/vba-plages-nommees.png" 
                  alt="Exemple de code VBA utilisant des plages nommées"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Validation de données avancée</h4>
                <p className="text-gray-700 mb-4">
                  Combinez les plages nommées avec la validation de données pour créer des systèmes 
                  de saisie cohérents et professionnels.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Listes de validation basées sur plages nommées</h5>
                    <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-4">
                      <li>Créez une plage nommée pour votre liste de valeurs</li>
                      <li>Sélectionnez la cellule à valider</li>
                      <li>Accédez à Données → Validation des données</li>
                      <li>Choisissez "Liste" comme critère</li>
                      <li>Dans "Source", tapez <code className="bg-gray-100 px-1 rounded">=NOM_DE_VOTRE_PLAGE</code></li>
                    </ol>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Attention aux références externes
                    </h5>
                    <p className="text-yellow-700 text-sm">
                      Si votre plage nommée fait référence à un autre classeur, assurez-vous que 
                      ce dernier est ouvert pour que la validation fonctionne correctement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Crosshair className="w-6 h-6 text-amber-600" />
            </div>
            Exercice Pratique : Optimisation d'un Tableau de Bord Commercial
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-amber-600" />
                Mission : Professionnaliser un Système Existant
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Réel d'Entreprise</h4>
                  <p className="text-gray-700 mb-4">
                    Vous héritez d'un tableau de bord commercial avec des formules complexes et illisibles. 
                    Votre mission est de le transformer en un système professionnel, maintenable et compréhensible 
                    en appliquant toutes les techniques des plages nommées.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">45-75 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Intermédiaire</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-purple-200">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Concepts appliqués</p>
                        <p className="text-sm text-gray-600">Plages statiques, dynamiques, gestionnaire de noms</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon14/exercice-tableau-bord.png" 
                    alt="Aperçu du tableau de bord commercial à optimiser"
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
                    Analyse et Préparation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Identifier les plages critiques utilisées dans les formules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Repérer les constantes (taux, paramètres) à nommer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Établir une convention de nommage cohérente</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Implémentation des Plages Statiques
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer des plages nommées pour tous les paramètres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Nommer les principales zones de données</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Remplacer les références dans les formules de calcul</span>
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
                    Développement des Plages Dynamiques
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer des plages dynamiques avec DECALER()</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Configurer les TCD et graphiques avec ces plages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Tester l'ajout de données pour vérifier l'extension automatique</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Documentation et Validation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Documenter chaque plage dans le Gestionnaire de noms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Vérifier que toutes les formules fonctionnent correctement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Créer une feuille de documentation récapitulative</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Défi Bonus : Mesure des Performances
              </h4>
              <p className="text-gray-700 mb-4">
                <strong>Objectif :</strong> Comparez le "AVANT/APRÈS" en mesurant la réduction du temps de maintenance
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl border-2 border-blue-100">
                  <p className="text-2xl font-bold text-blue-600">-60%</p>
                  <p className="text-sm text-gray-600">Temps de modification des formules</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-green-100">
                  <p className="text-2xl font-bold text-green-600">+80%</p>
                  <p className="text-sm text-gray-600">Lisibilité des formules</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-2 border-purple-100">
                  <p className="text-2xl font-bold text-purple-600">-90%</p>
                  <p className="text-sm text-gray-600">Erreurs de référence</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5 text-amber-600" />
                  Fichier d'Exercice
                </h4>
                <p className="text-gray-700 mb-4">
                  Téléchargez le tableau de bord commercial à optimiser :
                </p>
                <a href="/cours/intermediaire/Lecon14/exercice-tableau-bord-commercial.xlsx" 
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger l'Exercice (.xlsx)
                </a>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-indigo-600" />
                  Correction Détaillée
                </h4>
                <p className="text-gray-700 mb-4">
                  Solution complète avec explications des techniques avancées :
                </p>
                <PremiumVideo
                  url="/cours/intermediaire/Lecon14/correction-plages-nommees.mp4"
                  title="Correction de l'optimisation avec plages nommées"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon14 onResult={onResult} />
      </div>
    </div>
  );
}