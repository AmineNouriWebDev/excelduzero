import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon20 from "../../quizz/intermediaire/QuizLecon20";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Hash,
  Percent,
  Clock,
  Calendar,
  Euro,
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
  Palette
} from "lucide-react";

export default function Lecon20({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    syntaxe: true,
    exemples_pratiques: true,
    cas_avances: true,
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
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <Hash className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Formats de Nombres Personnalisés Excel</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Donnez un impact visuel à vos données numériques</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 20 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Code className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Syntaxe Avancée</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Palette className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Personnalisation</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Productivité</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Visualisation</p>
      </div>
    </div>
  </div>
</div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            Pourquoi les Formats Personnalisés ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Au-delà de l'Apparence : La Puissance des Données</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les formats de nombres personnalisés dans Excel transforment l'affichage de vos données sans en modifier la valeur sous-jacente. C'est un outil essentiel pour rendre vos tableaux plus professionnels et facilement compréhensibles:cite[3]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cohérence visuelle</h4>
                      <p className="text-gray-600">Appliquez un format standardisé à toutes vos données similaires:cite[6]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Données contextuelles</h4>
                      <p className="text-gray-600">Ajoutez des unités (m, kg, €) directement dans l'affichage:cite[3]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Calculs préservés</h4>
                      <p className="text-gray-600">La valeur utilisée dans les calculs reste inchangée:cite[6]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon20/avant-apres-formats.png" 
                  alt="Comparaison avant/après l'application de formats personnalisés"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Exemple d'optimisation visuelle
                </div>
              </div>
            </div>

            {/* Section Accès rapide */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-amber-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">⚡ Comment Accéder aux Formats Personnalisés</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 border-2 border-blue-200 rounded-lg">
                  <div className="text-base md:text-2xl font-bold text-blue-600 mb-2">1</div>
                  <h5 className="font-semibold text-gray-800">Raccourci Clavier</h5>
                  <p className="text-gray-600 text-sm"><code>Ctrl + 1</code></p>
                  <p className="text-gray-500 text-xs mt-1">Ouvre la boîte de dialogue Format de cellule:cite[6]</p>
                </div>
                
                <div className="p-4 border-2 border-green-200 rounded-lg">
                  <div className="text-base md:text-2xl font-bold text-green-600 mb-2">2</div>
                  <h5 className="font-semibold text-gray-800">Menu Contextuel</h5>
                  <p className="text-gray-600 text-sm">Clic droit → Format de cellule</p>
                  <p className="text-gray-500 text-xs mt-1">Accès rapide depuis n'importe quelle cellule</p>
                </div>
                
                <div className="p-4 border-2 border-purple-200 rounded-lg">
                  <div className="text-base md:text-2xl font-bold text-purple-600 mb-2">3</div>
                  <h5 className="font-semibold text-gray-800">Ruban Accueil</h5>
                  <p className="text-gray-600 text-sm">Accueil → Nombre → Autres formats numériques</p>
                  <p className="text-gray-500 text-xs mt-1">Accès visuel avec aperçu</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Syntaxe et Structure */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('syntaxe')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            Syntaxe et Structure des Formats Personnalisés
          </h2>
          {expandedSections.syntaxe ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.syntaxe && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">La Structure en 4 Sections : Clé de la Maîtrise:cite[3]:cite[8]</h3>
            
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden mb-8">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">POSITIF; NÉGATIF; ZÉRO; TEXTE</h4>
              </div>
              <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <div className="text-green-600 font-bold mb-2">Positifs</div>
                    <p className="text-sm text-gray-600">Format appliqué aux nombres &gt; 0</p>
                    <div className="mt-2 text-xs bg-green-50 p-2 rounded">
                      <code>#,##0.00</code>
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-red-200 rounded-lg">
                    <div className="text-red-600 font-bold mb-2">Négatifs</div>
                    <p className="text-sm text-gray-600">Format appliqué aux nombres &gt; 0</p>
                    <div className="mt-2 text-xs bg-red-50 p-2 rounded">
                      <code>[Red]-#,##0.00</code>
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <div className="text-blue-600 font-bold mb-2">Zéros</div>
                    <p className="text-sm text-gray-600">Format appliqué au zéro</p>
                    <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                      <code>"0"</code>
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-amber-200 rounded-lg">
                    <div className="text-amber-600 font-bold mb-2">Texte</div>
                    <p className="text-sm text-gray-600">Format appliqué au texte</p>
                    <div className="mt-2 text-xs bg-amber-50 p-2 rounded">
                      <code>[Blue]@</code>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">💡 Règles importantes :</h5>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    <li>Les sections sont <strong>séparées par des points-virgules</strong></li>
                    <li>Vous pouvez <strong>omettre des sections</strong> mais gardez les point-virgules</li>
                    <li>Exemple à 2 sections : <code>POSITIF; NÉGATIF</code> (pour positifs et zéros / négatifs)</li>
                    <li>Exemple à 1 section : <code>GÉNÉRAL</code> (appliqué à tout):cite[3]</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Placeholders de base */}
            <h4 className="font-semibold text-gray-800 mb-4">Les Placeholders Fondamentaux:cite[3]:cite[6]</h4>
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <tr>
                    <th className="p-4 text-left">Symbole</th>
                    <th className="p-4 text-left">Description</th>
                    <th className="p-4 text-left">Exemple Entrée</th>
                    <th className="p-4 text-left">Exemple Affichage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-4 font-mono font-bold">0</td>
                    <td className="p-4 text-gray-600">Affiche les zéros non significatifs</td>
                    <td className="p-4 font-mono text-sm">8.9 (format 0.00)</td>
                    <td className="p-4 font-mono text-sm">8.90</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono font-bold">#</td>
                    <td className="p-4 text-gray-600">Placeholder de chiffre optionnel</td>
                    <td className="p-4 font-mono text-sm">8.9 (format #.##)</td>
                    <td className="p-4 font-mono text-sm">8.9</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono font-bold">?</td>
                    <td className="p-4 text-gray-600">Aligne les décimales avec espace</td>
                    <td className="p-4 font-mono text-sm">8.9 et 12.456 (format #.??)</td>
                    <td className="p-4 font-mono text-sm">8.9 et 12.46 (alignés)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono font-bold">@</td>
                    <td className="p-4 text-gray-600">Placeholder pour texte</td>
                    <td className="p-4 font-mono text-sm">"Test" (format [Blue]@)</td>
                    <td className="p-4 font-mono text-sm text-blue-600">Test</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Guide visuel création */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">🎯 Guide Visuel : Créer Votre Premier Format Personnalisé</h4>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      Ouvrir Format de Cellule
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Sélectionnez les cellules et appuyez sur <strong>Ctrl + 1</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Onglet Nombre</li>
                      <li>Catégorie Personnalisée</li>
                      <li>Zone Type pour saisir le code:cite[6]</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon20/boite-dialogue-format.png" 
                      alt="Boîte de dialogue Format de cellule avec catégorie Personnalisée"
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
                      Saisir le Code Format
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Utilisez les placeholders et séparateurs :
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <code>#,##0.00;[Red]-#,##0.00;0.00;"Texte: "@</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center lg:order-1">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon20/saisie-code-format.png" 
                      alt="Saisie d'un code de format personnalisé"
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
                      Vérifier l'Aperçu
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      Excel affiche un aperçu immédiat :
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                      <li>Vérifiez l'affichage des positifs</li>
                      <li>Vérifiez l'affichage des négatifs</li>
                      <li>Testez avec différentes valeurs</li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon20/apercu-format.gif" 
                      alt="Animation montrant l'aperçu du format personnalisé"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exemples Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('exemples_pratiques')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            Exemples Pratiques et Cas Concrets
          </h2>
          {expandedSections.exemples_pratiques ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.exemples_pratiques && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Formats Prêts à l'Emploi pour Votre Quotidien</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Colonne des formats de base */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💰 Format Monétaire Avancé</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Affiche les valeurs en milliers avec "K"</strong> pour une lecture simplifiée:cite[3].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>#,##0.0,"K"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>12500 → 12.5K</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>Parfait pour les tableaux de bord</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📊 Pourcentages avec Emphase</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Met en évidence les performances</strong> avec couleurs et symboles:cite[8].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>[Green]+0.0%;[Red]-0.0%;0.0%</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>0.156 → +15.6% (vert)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>-0.082 → -8.2% (rouge)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📞 Format Téléphonique</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Formate automatiquement les numéros</strong> selon les standards français:cite[4].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>00 00 00 00 00</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>0123456789 → 01 23 45 67 89</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <span>Respecte la lisibilité</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne des formats avancés */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">⏱️ Durées en Heures et Minutes</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Affiche les décimales en heures:minutes</strong> pour la gestion de temps:cite[8].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>h"h "mm"min"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span>4.75 → 4h 45min</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span>Ideal pour les feuilles de temps</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-rose-200 overflow-hidden">
                  <div className="bg-rose-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📝 Unités de Mesure</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Ajoute automatiquement les unités</strong> sans affecter les calculs:cite[3].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>0.00" m"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                        <span>Centimètres : <code>0.00" cm"</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                        <span>Kilogrammes : <code>0.00" kg"</code></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
                  <div className="bg-teal-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🔢 Zéros non Significatifs</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>Aligne les décimales dans les colonnes</strong> pour une lecture plus facile:cite[3].
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                        <span>Code : <code>???.???</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                        <span>Aligne par le point décimal</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                        <span>Professionnel pour les rapports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau récapitulatif */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau Récapitulatif des Formats Essentiels</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Objectif</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Code Format</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Valeur Entrée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Affichage Résultat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Milliers avec K</td>
                      <td className="p-4 font-mono text-sm">#,##0.0,"K"</td>
                      <td className="p-4 font-mono text-sm">12500</td>
                      <td className="p-4 font-mono text-sm">12.5K</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Millions avec M</td>
                      <td className="p-4 font-mono text-sm">0.0,,"M"</td>
                      <td className="p-4 font-mono text-sm">2550000</td>
                      <td className="p-4 font-mono text-sm">2.6M</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Pourcentage coloré</td>
                      <td className="p-4 font-mono text-sm">[Green]+0%;[Red]-0%;0%</td>
                      <td className="p-4 font-mono text-sm">0.156</td>
                      <td className="p-4 font-mono text-sm text-green-600">+16%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-700">Numéro téléphone</td>
                      <td className="p-4 font-mono text-sm">00 00 00 00 00</td>
                      <td className="p-4 font-mono text-sm">0123456789</td>
                      <td className="p-4 font-mono text-sm">01 23 45 67 89</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Avancés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('cas_avances')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            Techniques Avancées et Conditionnelles
          </h2>
          {expandedSections.cas_avances ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.cas_avances && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Formats Conditionnels et Techniques Expertes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">🎨 Formats Conditionnels avec Couleurs:cite[8]</h4>
                
                <div className="space-y-4">
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Seuil de Performance</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Code : <code>[Green][&gt;1000]#,##0;"Standard"</code>
                    </p>
                    <p className="text-gray-500 text-xs">
                      Affiche en vert au-dessus de 1000, "Standard" en dessous
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Alerte Stock</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Code : <code>[Red][&lt;10]"STOCK FAIBLE";#,##0</code>
                    </p>
                    <p className="text-gray-500 text-xs">
                      Affiche "STOCK FAIBLE" en rouge si stock inférieur à 10
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-blue-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Statut Projet</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Code : <code>[Blue]"EN COURS";[Green]"TERMINÉ";[Red]"RETARD"</code>
                    </p>
                    <p className="text-gray-500 text-xs">
                      Différents textes colorés selon la valeur
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/lecon20/formats-conditionnels.gif" 
                  alt="Démonstration des formats conditionnels en action"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                <div className="mt-4 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h5 className="font-semibold text-purple-800 mb-2">💡 Condition avancée :</h5>
                  <p className="text-purple-700 text-sm">
                    Utilisez <code>[condition]</code> pour définir des règles métier complexes. Les conditions utilisent les opérateurs standards : &gt;, &lt;, &gt;=, &lt;=, =:cite[8].
                  </p>
                </div>
              </div>
            </div>

            {/* Techniques expertes */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">⚡ Techniques Expertes pour Power Users</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border-2 border-amber-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Caractères Spéciaux</h5>
                    <p className="text-gray-600 text-sm">
                      Utilisez <code>\</code> pour échapper un caractère ou <code>" "</code> pour du texte:cite[8].
                    </p>
                    <div className="mt-2 text-xs bg-amber-50 p-2 rounded">
                      <code>#,##0\€;-#,##0\€</code>
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-green-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Espacement et Alignement</h5>
                    <p className="text-gray-600 text-sm">
                      Utilisez <code>_</code> pour réserver l'espace d'un caractère:cite[8].
                    </p>
                    <div className="mt-2 text-xs bg-green-50 p-2 rounded">
                      <code>#,##0_);(#,##0)</code>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border-2 border-blue-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Répétition de Caractères</h5>
                    <p className="text-gray-600 text-sm">
                      Utilisez <code>*</code> pour remplir avec un caractère:cite[8].
                    </p>
                    <div className="mt-2 text-xs bg-blue-50 p-2 rounded">
                      <code>**0</code> (rempli avec des * jusqu'à la largeur)
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-purple-200 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-2">Formats Scientifiques</h5>
                    <p className="text-gray-600 text-sm">
                      Utilisez <code>E</code> pour la notation scientifique:cite[8].
                    </p>
                    <div className="mt-2 text-xs bg-purple-50 p-2 rounded">
                      <code>0.00E+00</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bonnes Pratiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-slate-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-slate-50 to-gray-50 text-left hover:from-slate-100 transition-all"
          onClick={() => toggleSection('bonnes_pratiques')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
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
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">✅ Best Practices</h3>
                
                <div className="space-y-4">
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Tester avec différentes valeurs</h5>
                    <p className="text-gray-600 text-sm">
                      Vérifiez votre format avec des positifs, négatifs, zéros et texte:cite[6].
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Documenter les formats complexes</h5>
                    <p className="text-gray-600 text-sm">
                      Commentez vos codes dans une cellule adjacente ou un fichier documentation.
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Utiliser des modèles de base</h5>
                    <p className="text-gray-600 text-sm">
                      Partez des formats intégrés et modifiez-les plutôt que de tout créer:cite[3].
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">❌ Problèmes Courants et Solutions</h3>
                
                <div className="space-y-4">
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Format non appliqué</h5>
                    <p className="text-gray-600 text-sm">
                      Vérifiez les points-virgules et l'ordre des sections:cite[3].
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Texte non affiché</h5>
                    <p className="text-gray-600 text-sm">
                      Assurez-vous d'avoir la section texte et le placeholder @:cite[8].
                    </p>
                  </div>
                  
                  <div className="px-4 py-3 md:p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Couleurs ignorées</h5>
                    <p className="text-gray-600 text-sm">
                      La couleur doit être le premier élément dans la section, entre crochets:cite[8].
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-blue-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
              <h4 className="font-semibold text-gray-800 mb-4 text-center">📋 Checklist de Création de Format</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Avant de créer :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Identifier le besoin métier précis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Choisir un format intégré comme base</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Prévoir les cas limites (négatifs, zéros)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Après création :</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Tester avec différents types de valeurs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Vérifier l'alignement en colonne</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-blue-500" />
                      <span>Sauvegarder dans un modèle réutilisable</span>
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
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-indigo-50 to-purple-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            Exercice Pratique : Tableau de Bord Commercial
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Professionnaliser un Rapport Commercial</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Contexte</h4>
                  <p className="text-gray-700 mb-4">
                    Vous devez transformer un tableau de données commerciales brutes en un rapport professionnel et facilement compréhensible grâce aux formats personnalisés.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-blue-200">
                      <AlertTriangle className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Problème actuel</p>
                        <p className="text-sm text-gray-600">Données brutes difficiles à interpréter, manque de contexte</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 px-4 py-3 md:p-4 bg-white rounded-xl border-2 border-green-200">
                      <Target className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif</p>
                        <p className="text-sm text-gray-600">Rendre le tableau auto-explicatif et visuellement impactant</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/lecon20/exercice-tableau-brut.png" 
                    alt="Tableau de données brutes à optimiser"
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
                      <span>Téléchargez le fichier d'exercice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <span>Formatez les chiffres d'affaires en milliers avec "K"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <span>Appliquez des pourcentages colorés (vert/rouge)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        4
                      </div>
                      <span>Ajoutez des unités de mesure appropriées</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white px-4 py-4 md:p-6 md:rounded-lg rounded-none rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon20/exercice-formats.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger l'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon20/correction-formats.mp4"
                      title="Correction détaillée de l'exercice sur les formats"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Critères d'Évaluation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Utilisation correcte des 4 sections de format</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Cohérence visuelle globale</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Bon usage des couleurs conditionnelles</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Capacité à expliquer les choix de formatage</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Optionnel</h5>
                  <p className="text-sm text-gray-600">
                    Créez un format qui affiche "BONNE PERFORMANCE" en vert pour les ventes supérieures à 50K et "AMÉLIORATION POSSIBLE" en orange en dessous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon20 onResult={onResult} />
      </div>
    </div>
  );
}