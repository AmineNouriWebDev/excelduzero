import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon25 from "../../quizz/intermediaire/QuizLecon25";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Type,
  ArrowLeft,
  ArrowRight,
  Scissors,
  User,
  Phone,
  MapPin,
  Package,
  Mail,
  Code,
  Lightbulb,
  Zap,
  AlertTriangle,
  CheckCircle,
  Play,
  Download,
  Target
} from "lucide-react";

export default function Lecon25({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    fonction_gauche: true,
    fonction_droite: true,
    fonction_stxt: true,
    combinaisons: true,
    cas_pratique: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête avec dégradé bleu/violet */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-400 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Type className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Fonctions Texte Excel : GAUCHE, DROITE, STXT</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez l'extraction et la manipulation de texte dans vos données</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 25 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Fonction GAUCHE</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Fonction DROITE</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Scissors className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Fonction STXT</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Combinaisons</p>
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
            Pourquoi les Fonctions Texte sont Essentielles ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Automatisez l'Extraction de Données</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les fonctions GAUCHE, DROITE et STXT permettent d'extraire des portions spécifiques de texte 
                  dans Excel, automatisant des tâches fastidieuses et réduisant les erreurs manuelles:cite[1]:cite[10].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <User className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Noms et Prénoms</h4>
                      <p className="text-gray-600">Séparez automatiquement les noms complets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Package className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Codes Produits</h4>
                      <p className="text-gray-600">Extrayez les références et catégories</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Phone className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Coordonnées</h4>
                      <p className="text-gray-600">Formatez numéros et adresses</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon25/text-functions-overview.png" 
                  alt="Diagramme montrant l'action des fonctions GAUCHE, DROITE et STXT"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Extraction Ciblée = Gain de Temps
                </div>
              </div>
            </div>

            {/* Section Avantages */}
            <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Les Avantages des Fonctions Texte</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">90%</div>
                  <p className="text-sm opacity-90">Réduction du temps de traitement</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-90">Cohérence des résultats:cite[10]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">0</div>
                  <p className="text-sm opacity-90">Erreur de copie manuelle</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction GAUCHE */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('fonction_gauche')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </div>
            Fonction GAUCHE : Extraire du Début
          </h2>
          {expandedSections.fonction_gauche ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.fonction_gauche && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Extraire les Caractères depuis le Début</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe de la Fonction</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =GAUCHE(texte; nombre_caractères)
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">texte :</span> La cellule ou chaîne à traiter
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">nombre_caractères :</span> Nombre de caractères à extraire depuis la gauche:cite[1]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple Pratique : Codes Produits</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Extraire les 3 premiers caractères d'un code produit :</p>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                          <div className="text-gray-600">Code original : "ABC-12345"</div>
                          <div className="text-green-600 font-semibold">=GAUCHE("ABC-12345"; 3) → "ABC"</div>
                        </div>
                      </div>
                    </div>
                    <ImageZoomable 
                      src="/cours/intermediaire/Lecon25/gauche-exemple.png" 
                      alt="Exemple d'utilisation de la fonction GAUCHE"
                      className="rounded-lg border-2 border-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon25/gauche-demonstration.gif" 
                  alt="Animation montrant la fonction GAUCHE dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">💡 Application Réelle</h5>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Prénoms :</strong> Extraire le prénom depuis un nom complet</p>
                    <p><strong>Codes pays :</strong> Isoler les indicateurs pays dans des numéros</p>
                    <p><strong>Références :</strong> Récupérer les préfixes de produits</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🎯 Extraire un Prénom</h5>
                  <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                    =GAUCHE(A2; TROUVE(" "; A2) - 1)
                  </div>
                  <p className="text-gray-600 text-sm">
                    Cette formule combine GAUCHE avec TROUVE pour extraire dynamiquement le prénom 
                    en trouvant la position de l'espace:cite[10].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples GAUCHE */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemples Concrets de la Fonction GAUCHE</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Donnée Originale</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"ABCD-123"</td>
                      <td className="p-4 font-mono text-blue-600">=GAUCHE(A1; 4)</td>
                      <td className="p-4 font-mono text-green-600">"ABCD"</td>
                      <td className="p-4 text-gray-600 text-sm">Code catégorie</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"John Smith"</td>
                      <td className="p-4 font-mono text-blue-600">=GAUCHE(A2; 4)</td>
                      <td className="p-4 font-mono text-green-600">"John"</td>
                      <td className="p-4 text-gray-600 text-sm">Prénom fixe</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"FR751234"</td>
                      <td className="p-4 font-mono text-blue-600">=GAUCHE(A3; 2)</td>
                      <td className="p-4 font-mono text-green-600">"FR"</td>
                      <td className="p-4 text-gray-600 text-sm">Code pays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction DROITE */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('fonction_droite')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <ArrowRight className="w-6 h-6 text-green-600" />
            </div>
            Fonction DROITE : Extraire de la Fin
          </h2>
          {expandedSections.fonction_droite ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.fonction_droite && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Extraire les Caractères depuis la Fin</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe de la Fonction</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =DROITE(texte; nombre_caractères)
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">texte :</span> La cellule ou chaîne à traiter
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">nombre_caractères :</span> Nombre de caractères à extraire depuis la droite:cite[1]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple Pratique : Extensions Fichiers</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Extraire l'extension d'un nom de fichier :</p>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                          <div className="text-gray-600">Fichier : "rapport-financier.xlsx"</div>
                          <div className="text-green-600 font-semibold">=DROITE("rapport-financier.xlsx"; 4) → "xlsx"</div>
                        </div>
                      </div>
                    </div>
                    <ImageZoomable 
                      src="/cours/intermediaire/Lecon25/droite-exemple.png" 
                      alt="Exemple d'utilisation de la fonction DROITE"
                      className="rounded-lg border-2 border-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon25/droite-demonstration.gif" 
                  alt="Animation montrant la fonction DROITE dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Application Réelle</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Extensions :</strong> Identifier le type de fichier</p>
                    <p><strong>Numéros série :</strong> Récupérer les suffixes</p>
                    <p><strong>Domaines :</strong> Extraire les TLD d'emails</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🎯 Derniers 4 Chiffres</h5>
                  <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                    =DROITE(A2; 4)
                  </div>
                  <p className="text-gray-600 text-sm">
                    Parfait pour extraire les derniers chiffres de numéros de carte 
                    ou codes de sécurité:cite[10].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples DROITE */}
            <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemples Concrets de la Fonction DROITE</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Donnée Originale</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"document.pdf"</td>
                      <td className="p-4 font-mono text-blue-600">=DROITE(A1; 3)</td>
                      <td className="p-4 font-mono text-green-600">"pdf"</td>
                      <td className="p-4 text-gray-600 text-sm">Extension fichier</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"4512-7890-1234-5678"</td>
                      <td className="p-4 font-mono text-blue-600">=DROITE(A2; 4)</td>
                      <td className="p-4 font-mono text-green-600">"5678"</td>
                      <td className="p-4 text-gray-600 text-sm">Derniers chiffres</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"user@company.com"</td>
                      <td className="p-4 font-mono text-blue-600">=DROITE(A3; 3)</td>
                      <td className="p-4 font-mono text-green-600">"com"</td>
                      <td className="p-4 text-gray-600 text-sm">TLD email</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction STXT */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('fonction_stxt')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Scissors className="w-6 h-6 text-purple-600" />
            </div>
            Fonction STXT : Extraire au Milieu
          </h2>
          {expandedSections.fonction_stxt ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.fonction_stxt && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Extraire une Partie Spécifique</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe de la Fonction</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =STXT(texte; début; nombre_caractères)
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">texte :</span> La cellule ou chaîne à traiter
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">début :</span> Position du premier caractère à extraire:cite[5]
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">nombre_caractères :</span> Nombre de caractères à extraire
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-pink-200 overflow-hidden">
                  <div className="bg-pink-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple Pratique : Codes Internes</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Extraire un code au milieu d'une référence :</p>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="font-mono text-sm">
                          <div className="text-gray-600">Référence : "PROD-XYZ-789"</div>
                          <div className="text-green-600 font-semibold">=STXT("PROD-XYZ-789"; 6; 3) → "XYZ"</div>
                        </div>
                      </div>
                    </div>
                    <ImageZoomable 
                      src="/cours/intermediaire/Lecon25/stxt-exemple.png" 
                      alt="Exemple d'utilisation de la fonction STXT"
                      className="rounded-lg border-2 border-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon25/stxt-demonstration.gif" 
                  alt="Animation montrant la fonction STXT dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">💡 Application Réelle</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Codes internes :</strong> Extraire des segments spécifiques</p>
                    <p><strong>Adresses :</strong> Isoler codes postaux dans une chaîne</p>
                    <p><strong>Dates :</strong> Récupérer mois/année dans un format</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🎯 Gestion des Erreurs</h5>
                  <p className="text-gray-600 text-sm">
                    Si <span className="font-mono">début</span> dépasse la longueur du texte, STXT renvoie une chaîne vide.
                    Si <span className="font-mono">début</span> est inférieur à 1, erreur #VALEUR! est renvoyée:cite[5].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples STXT */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemples Concrets de la Fonction STXT</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Donnée Originale</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"2023-10-25"</td>
                      <td className="p-4 font-mono text-blue-600">=STXT(A1; 6; 2)</td>
                      <td className="p-4 font-mono text-green-600">"10"</td>
                      <td className="p-4 text-gray-600 text-sm">Mois dans date</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"75001 Paris"</td>
                      <td className="p-4 font-mono text-blue-600">=STXT(A2; 1; 5)</td>
                      <td className="p-4 font-mono text-green-600">"75001"</td>
                      <td className="p-4 text-gray-600 text-sm">Code postal</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">"ID-789-X12"</td>
                      <td className="p-4 font-mono text-blue-600">=STXT(A3; 4; 3)</td>
                      <td className="p-4 font-mono text-green-600">"789"</td>
                      <td className="p-4 text-gray-600 text-sm">Numéro série</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Combinaisons Avancées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('combinaisons')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            Combinaisons Avancées et Astuces
          </h2>
          {expandedSections.combinaisons ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.combinaisons && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Maximisez l'Efficacité avec des Combinaisons</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">STXT + TROUVE : Extraction Dynamique</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Combinez STXT avec TROUVE pour des extractions basées sur des séparateurs:cite[8].
                    </p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                      =STXT(A2; TROUVE("-"; A2) + 1; 3)
                    </div>
                    <p className="text-gray-600 text-sm">
                      Extrait 3 caractères après le premier tiret, idéal pour les codes variables.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">GAUCHE + NBCAR : Exclusion de Caractères</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Excluez les derniers caractères d'une chaîne.
                    </p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                      =GAUCHE(A2; NBCAR(A2) - 3)
                    </div>
                    <p className="text-gray-600 text-sm">
                      Retourne tout sauf les 3 derniers caractères.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">DROITE + RECHERCHE : Extraction Complexe</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Pour extraire du texte après un caractère spécifique.
                    </p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                      =DROITE(A2; NBCAR(A2) - TROUVE("@"; A2))
                    </div>
                    <p className="text-gray-600 text-sm">
                      Extrait le domaine d'une adresse email.
                    </p>
                  </div>
                </div>

                <ImageZoomable 
                  src="/cours/intermediaire/Lecon25/combinaisons-demo.gif" 
                  alt="Animation montrant des combinaisons de fonctions"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
              </div>
            </div>

            {/* Tableau récapitulatif */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau Récapitulatif des Fonctions</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Syntaxe</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage Principal</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-blue-700">GAUCHE</td>
                      <td className="p-4 font-mono text-sm">=GAUCHE(texte; nb_car)</td>
                      <td className="p-4 text-gray-600 text-sm">Début de chaîne</td>
                      <td className="p-4 font-mono text-sm text-green-600">"ABC" de "ABCD-123"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-700">DROITE</td>
                      <td className="p-4 font-mono text-sm">=DROITE(texte; nb_car)</td>
                      <td className="p-4 text-gray-600 text-sm">Fin de chaîne</td>
                      <td className="p-4 font-mono text-sm text-green-600">"pdf" de "doc.pdf"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-purple-700">STXT</td>
                      <td className="p-4 font-mono text-sm">=STXT(texte; début; nb_car)</td>
                      <td className="p-4 text-gray-600 text-sm">Milieu de chaîne</td>
                      <td className="p-4 font-mono text-sm text-green-600">"XYZ" de "PROD-XYZ-01"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique Complet */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-rose-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-rose-50 to-pink-50 text-left hover:from-rose-100 transition-all"
          onClick={() => toggleSection('cas_pratique')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-rose-100 p-3 rounded-xl">
              <Code className="w-6 h-6 text-rose-600" />
            </div>
            Cas Pratique : Base Données Clients
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Structurer une Base Clients</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Données Brutes à Traiter</h4>
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                    <div>"DUPONT-Jean-75001-PARIS"</div>
                    <div>"MARTIN-Marie-69002-LYON"</div>
                    <div>"BERNARD-Pierre-13008-MARSEILLE"</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif</p>
                        <p className="text-sm text-gray-600">Séparer en colonnes : Nom, Prénom, Code Postal, Ville</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Méthode</p>
                        <p className="text-sm text-gray-600">Utiliser GAUCHE, DROITE, STXT avec TROUVE</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon25/cas-pratique-avant.png" 
                    alt="Base clients avant traitement"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Solutions par Colonne</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Nom (avant premier tiret)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =GAUCHE(A2; TROUVE("-"; A2) - 1)
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Prénom (entre 1er et 2ème tiret)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =STXT(A2; TROUVE("-"; A2) + 1; TROUVE("-"; A2; TROUVE("-"; A2) + 1) - TROUVE("-"; A2) - 1)
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Code Postal (entre 2ème et 3ème tiret)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =STXT(A2; TROUVE("-"; A2; TROUVE("-"; A2) + 1) + 1; 5)
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon25/cas-pratique-clients.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon25/correction-cas-pratique.mp4"
                      title="Correction détaillée pas à pas"
                      duration="18:45"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Résultat Attendu</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">4 colonnes distinctes : Nom, Prénom, Code Postal, Ville</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Formules dynamiques qui s'adaptent à chaque ligne</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Gestion des erreurs avec SIERREUR</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Ajoutez une colonne "Initiales" qui combine la première lettre du prénom 
                    et la première lettre du nom en majuscules.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mt-2">
                    <div className="font-mono text-sm text-green-600">
                      =GAUCHE(B2;1) & GAUCHE(A2;1)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avant/Après */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Transformation Complète</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🔴 Avant Traitement</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon25/avant-transformation.png" 
                    alt="Données avant transformation - chaînes combinées"
                    className="rounded-lg border-2 border-red-200"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🟢 Après Traitement</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon25/apres-transformation.png" 
                    alt="Données après transformation - colonnes séparées"
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
        <QuizLecon25 onResult={onResult} />
      </div>
    </div>
  );
}