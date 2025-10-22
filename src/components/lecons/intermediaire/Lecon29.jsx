import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon29 from "../../quizz/intermediaire/QuizLecon29";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  Layers,
  Calculator,
  BarChart3,
  Target,
  PieChart,
  Lightbulb,
  Zap,
  AlertTriangle,
  CheckCircle,
  Play,
  Download,
  Sigma,
  Grid3X3,
  Database
} from "lucide-react";

export default function Lecon29({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    somme_si: true,
    somme_si_ens: true,
    sommeprod: true,
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
      {/* En-tête avec dégradé vert/professionnel */}
      <div className="bg-gradient-to-r from-emerald-500 via-green-600 to-teal-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Filter className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">SOMME.SI, SOMME.SI.ENS et SOMMEPROD</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez les sommes conditionnelles et les calculs avancés dans Excel</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 29 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Filter className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">SOMME.SI</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Layers className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">SOMME.SI.ENS</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Grid3X3 className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">SOMMEPROD</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cas Réels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-emerald-600" />
            </div>
            Pourquoi les Sommes Conditionnelles dans Excel ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-emerald-600" /> : 
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Analysez vos données intelligemment</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les fonctions de somme conditionnelle vous permettent d**&apos;extraire des insights précis** de vos données en appliquant des critères spécifiques. Elles transforment des listes brutes en informations actionnables.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Database className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Analyse Commerciale Ciblée</h4>
                      <p className="text-gray-600">Ventes par région, produits spécifiques, périodes données</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <BarChart3 className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Reporting Automatisé</h4>
                      <p className="text-gray-600">Tableaux de bord qui se mettent à jour automatiquement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Calculator className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Calculs Complexes Simplifiés</h4>
                      <p className="text-gray-600">Multiplications et additions conditionnelles en une formule</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon29/somme-conditionnelle-overview.png" 
                  alt="Diagramme montrant l'évolution des fonctions de somme"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Données brutes → Analyse ciblée
                </div>
              </div>
            </div>

            {/* Section Évolution */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Évolution des Fonctions de Somme</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">SOMME</div>
                  <p className="text-sm opacity-90">Somme simple sans condition</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">SOMME.SI</div>
                  <p className="text-sm opacity-90">1 critère</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-2xl font-bold mb-2">SOMME.SI.ENS</div>
                  <p className="text-sm opacity-90">Multi-critères</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SOMME.SI */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('somme_si')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Filter className="w-6 h-6 text-blue-600" />
            </div>
            SOMME.SI - La Somme Conditionnelle Simple
          </h2>
          {expandedSections.somme_si ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.somme_si && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Maîtriser la Somme avec un Seul Critère</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Syntaxe de SOMME.SI</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =SOMME.SI(plage; critère; [plage_somme])
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Plage :</span> Plage où le critère sera vérifié (obligatoire)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Critère :</span> Condition à respecter (obligatoire)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Plage_somme :</span> Plage à additionner (facultatif)
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 text-sm">
                        <strong>Note :</strong> Si <code>plage_somme</code> est omis, Excel additionne les cellules de <code>plage</code> qui répondent au critère.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💡 Exemples Concrets</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Ventes supérieures à 1000€</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI(B2:B100;&quot;&gt;1000&quot;)
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Total des produits &quot;Pommes&quot;</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI(A2:A50;&quot;Pommes&quot;;B2:B50)
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Montants impayés (cellules vides)</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI(C2:C100;&quot;&quot;;B2:B100)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon29/somme-si-demo.gif" 
                  alt="Animation montrant le fonctionnement de SOMME.SI"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">🎪 Caractères Génériques</h5>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>* (astérisque) :</strong> Remplace plusieurs caractères</p>
                    <p><strong>? (point d&apos;interrogation) :</strong> Remplace un seul caractère</p>
                    <p><strong>~ (tilde) :</strong> Pour chercher * ou ? littéralement</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-orange-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Pièges à Éviter</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>Guillemets :</strong> Obligatoires pour les critères textuels et les opérateurs</p>
                    <p><strong>Taille des plages :</strong> <code>plage</code> et <code>plage_somme</code> doivent avoir les mêmes dimensions</p>
                    <p><strong>Chaînes longues :</strong> Problèmes au-delà de 255 caractères</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau opérateurs */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Opérateurs de Comparaison</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Opérateur</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Description</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-blue-600">&gt;</td>
                      <td className="p-4 text-gray-700">Supérieur à</td>
                      <td className="p-4 font-mono text-sm">&quot;&gt;1000&quot;</td>
                      <td className="p-4 text-gray-600 text-sm">Valeurs &gt; 1000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-blue-600">&lt;=</td>
                      <td className="p-4 text-gray-700">Inférieur ou égal</td>
                      <td className="p-4 font-mono text-sm">&quot;&lt;=500&quot;</td>
                      <td className="p-4 text-gray-600 text-sm">Valeurs ≤ 500</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-blue-600">&lt;&gt;</td>
                      <td className="p-4 text-gray-700">Différent de</td>
                      <td className="p-4 font-mono text-sm">&quot;&lt;&gt;Completed&quot;</td>
                      <td className="p-4 text-gray-600 text-sm">Tout sauf &quot;Completed&quot;</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-blue-600">=</td>
                      <td className="p-4 text-gray-700">Égal à (implicite)</td>
                      <td className="p-4 font-mono text-sm">&quot;Paris&quot;</td>
                      <td className="p-4 text-gray-600 text-sm">Égal à &quot;Paris&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SOMME.SI.ENS */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-indigo-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('somme_si_ens')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Layers className="w-6 h-6 text-purple-600" />
            </div>
            SOMME.SI.ENS - La Somme Multi-Critères
          </h2>
          {expandedSections.somme_si_ens ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.somme_si_ens && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Maîtriser les Sommes avec Critères Multiples</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Syntaxe de SOMME.SI.ENS</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =SOMME.SI.ENS(somme_plage; plage_critères1; critère1; [plage_critères2; critère2]; ...)
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Somme_plage :</span> Plage à additionner (premier argument!)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Plage_critères1 :</span> Première plage de critères
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Critère1 :</span> Premier critère
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">... :</span> Jusqu&apos;à 127 paires critères/plages
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-700 text-sm">
                        <strong>Attention :</strong> L&apos;ordre des arguments est différent de SOMME.SI! <code>somme_plage</code> vient en premier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💡 Exemples Avancés</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Ventes &quot;David&quot; pour produits commençant par &quot;P&quot;</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI.ENS(A2:A9;B2:B9;&quot;=P*&quot;;C2:C9;&quot;David&quot;)
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Tout sauf &quot;Bananes&quot; vendues par &quot;David&quot;</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI.ENS(A2:A9;B2:B9;&quot;&lt;&gt;Bananes&quot;;C2:C9;&quot;David&quot;)
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Double condition numérique et textuelle</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMME.SI.ENS(D2:D100;A2:A100;&quot;&gt;=01/01/2024&quot;;B2:B100;&quot;Paris&quot;;C2:C100;&quot;&gt;1000&quot;)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon29/somme-si-ens-demo.gif" 
                  alt="Animation montrant le fonctionnement de SOMME.SI.ENS avec multiples critères"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🎪 Logique ET vs OU</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>SOMME.SI.ENS :</strong> Logique ET (tous les critères doivent être vrais)</p>
                    <p><strong>Pour logique OU :</strong> Utiliser plusieurs SOMME.SI ou SOMMEPROD</p>
                    <p><strong>Exemple :</strong> Région=&quot;Est&quot; ET Produit=&quot;Cerises&quot;</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Erreurs Courantes</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>Tailles inégales :</strong> Toutes les plages doivent avoir les mêmes dimensions</p>
                    <p><strong>Ordre des arguments :</strong> Différent de SOMME.SI</p>
                    <p><strong>Guillemets manquants :</strong> Surtout pour les opérateurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau comparaison SOMME.SI vs SOMME.SI.ENS */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">SOMME.SI vs SOMME.SI.ENS - Les Différences Clés</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="p-4 text-left font-semibold text-gray-800">SOMME.SI</th>
                      <th className="p-4 text-left font-semibold text-gray-800">SOMME.SI.ENS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Nombre de critères</td>
                      <td className="p-4 text-gray-600">1 seul critère</td>
                      <td className="p-4 text-gray-600">Jusqu&apos;à 127 critères</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Ordre des arguments</td>
                      <td className="p-4 text-gray-600">plage, critère, [somme_plage]</td>
                      <td className="p-4 text-gray-600">somme_plage d&apos;abord</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Logique</td>
                      <td className="p-4 text-gray-600">Condition simple</td>
                      <td className="p-4 text-gray-600">ET entre tous les critères</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Cas d&apos;usage</td>
                      <td className="p-4 text-gray-600">Analyses simples à un critère</td>
                      <td className="p-4 text-gray-600">Analyses complexes multi-filtres</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SOMMEPROD */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('sommeprod')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Grid3X3 className="w-6 h-6 text-orange-600" />
            </div>
            SOMMEPROD - La Fonction Polyvalente
          </h2>
          {expandedSections.sommeprod ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.sommeprod && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Au-Delà des Sommes : Multiplications et Conditions Combinées</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
                  <div className="bg-orange-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🎯 Syntaxe de SOMMEPROD</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =SOMMEPROD(plage1; plage2; ...)
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Plage1, Plage2, ... :</span> Plages à multiplier puis additionner
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Principe :</span> (A1×B1) + (A2×B2) + ... + (An×Bn)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Opérations :</span> Multiplication par défaut, mais autres possibles
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-700 text-sm">
                        <strong>Avantage :</strong> Peut remplacer SOMME.SI.ENS avec des conditions complexes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💡 SOMMEPROD avec Conditions</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Total avec quantité &gt; 100</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMMEPROD((B2:B11)*(C2:C11)*(B2:B11&gt;100))
                        </div>
                        <p className="text-gray-600 text-sm mt-1">Multiplie quantité × prix seulement si quantité &gt; 100</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Double condition</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMMEPROD((A2:A10=&quot;Paris&quot;)*(B2:B10=&quot;Rouge&quot;)*C2:C10)
                        </div>
                        <p className="text-gray-600 text-sm mt-1">Somme si région=&quot;Paris&quot; ET couleur=&quot;Rouge&quot;</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-1">Condition OU</h5>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                          =SOMMEPROD(((B2:B11&gt;100)+(B2:B11&lt;20))*C2:C11)
                        </div>
                        <p className="text-gray-600 text-sm mt-1">+ crée une condition OU entre les tests</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon29/sommeprod-demo.gif" 
                  alt="Animation détaillant le calcul SOMMEPROD ligne par ligne"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">⚡ Comment ça marche ?</h5>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>True/False :</strong> Les conditions retournent 1 (VRAI) ou 0 (FAUX)</p>
                    <p><strong>Multiplication :</strong> Chaque ligne est multipliée terme à terme</p>
                    <p><strong>Somme :</strong> Tous les produits sont additionnés</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-blue-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🚀 Avantages SOMMEPROD</h5>
                  <div className="text-gray-600 text-sm space-y-2">
                    <p><strong>Flexibilité :</strong> Conditions complexes avec opérateurs logiques</p>
                    <p><strong>Formules :</strong> Possibilité d&apos;utiliser des fonctions dans les critères</p>
                    <p><strong>Performance :</strong> Une seule formule au lieu de plusieurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau cas d'usage SOMMEPROD */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h4 className="font-bold text-lg">Quand Utiliser SOMMEPROD vs SOMME.SI.ENS ?</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Situation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction Recommandée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Raison</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Exemple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Critères multiples simples</td>
                      <td className="p-4 font-semibold text-green-600">SOMME.SI.ENS</td>
                      <td className="p-4 text-gray-600 text-sm">Plus lisible, syntaxe intuitive</td>
                      <td className="p-4 font-mono text-sm">=SOMME.SI.ENS(C2:C100;A2:A100;&quot;Paris&quot;;B2:B100;&quot;&gt;1000&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Conditions complexes (ET/OU)</td>
                      <td className="p-4 font-semibold text-orange-600">SOMMEPROD</td>
                      <td className="p-4 text-gray-600 text-sm">Plus de flexibilité logique</td>
                      <td className="p-4 font-mono text-sm">=SOMMEPROD((A2:A100=&quot;Paris&quot;)*((B2:B100&gt;1000)+(C2:C100=&quot;Urgent&quot;))*D2:D100)</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Calculs avec formules dans critères</td>
                      <td className="p-4 font-semibold text-orange-600">SOMMEPROD</td>
                      <td className="p-4 text-gray-600 text-sm">Accepte des expressions complexes</td>
                      <td className="p-4 font-mono text-sm">=SOMMEPROD((GAUCHE(A2:A100;1)=&quot;6&quot;)*B2:B100)</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Multiplication + somme</td>
                      <td className="p-4 font-semibold text-orange-600">SOMMEPROD</td>
                      <td className="p-4 text-gray-600 text-sm">Usage natif de la fonction</td>
                      <td className="p-4 font-mono text-sm">=SOMMEPROD(B2:B11;C2:C11)</td>
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
              <Target className="w-6 h-6 text-rose-600" />
            </div>
            Cas Pratique : Analyse des Ventes d&apos;une Entreprise
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Tableau de Bord des Ventes</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">📋 Scénario Entreprise</h4>
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                    <div>Entreprise : &quot;MultiTech Solutions&quot;</div>
                    <div>Données : Ventes 2024 (5 000 lignes)</div>
                    <div>Colonnes : Région, Vendeur, Produit, Quantité, Prix, Date</div>
                    <div>Objectif : Créer un tableau de bord automatique</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Questions Business</p>
                        <p className="text-sm text-gray-600">Performances par région? Top vendeurs? Produits populaires?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Solutions</p>
                        <p className="text-sm text-gray-600">SOMME.SI, SOMME.SI.ENS et SOMMEPROD combinés</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon29/cas-pratique-donnees.png" 
                    alt="Extrait des données de vente avec multiples colonnes"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Solutions Implémentées</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Ventes région &quot;Est&quot;</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =SOMME.SI(A2:A5000;&quot;Est&quot;;E2:E5000)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">SOMME.SI pour critère simple</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Ventes &quot;David&quot; pour produits &quot;Premium&quot;</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =SOMME.SI.ENS(E2:E5000;B2:B5000;&quot;David&quot;;C2:C5000;&quot;Premium&quot;)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">SOMME.SI.ENS pour double critère</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Chiffre total région &quot;Sud&quot; ou &quot;Ouest&quot;</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =SOMMEPROD(((A2:A5000=&quot;Sud&quot;)+(A2:A5000=&quot;Ouest&quot;))*D2:D5000*E2:E5000)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">SOMMEPROD pour condition OU + multiplication</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon29/cas-pratique-ventes.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger le Fichier d&apos;Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon29/fonctions-somme-demo.mp4"
                      title="Démonstration complète des trois fonctions"
                      duration="22:15"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Insights Obtenus</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Région Est : 45% du chiffre total</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">David : meilleur vendeur produits Premium</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Sud+Ouest : croissance de 23% vs année précédente</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Créez une formule qui calcule le chiffre pour les vendeurs dont le nom commence par &quot;M&quot; 
                    ET qui ont vendu des produits soit &quot;Premium&quot; soit &quot;Business&quot; dans la région &quot;Nord&quot;.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mt-2">
                    <div className="font-mono text-sm text-green-600">
                      =SOMMEPROD((GAUCHE(B2:B1000;1)=&quot;M&quot;)*((C2:C1000=&quot;Premium&quot;)+(C2:C1000=&quot;Business&quot;))*(A2:A1000=&quot;Nord&quot;)*D2:D1000*E2:E1000)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan apprentissage */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Ce Que Vous Maîtrisez Maintenant</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Filter className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">SOMME.SI</h5>
                  <p className="text-sm text-gray-600">Critère unique, syntaxe simple</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Layers className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">SOMME.SI.ENS</h5>
                  <p className="text-sm text-gray-600">Multi-critères, logique ET</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Grid3X3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">SOMMEPROD</h5>
                  <p className="text-sm text-gray-600">Calculs complexes, conditions avancées</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon29 onResult={onResult} />
      </div>
    </div>
  );
}