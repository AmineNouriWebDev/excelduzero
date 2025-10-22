import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon27 from "../../quizz/intermediaire/QuizLecon27";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Clock,
  Calculator,
  DollarSign,
  Target,
  PieChart,
  Home,
  Car,
  GraduationCap,
  Lightbulb,
  Zap,
  AlertTriangle,
  CheckCircle,
  Play,
  Download,
  Calendar
} from "lucide-react";

export default function Lecon27({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    concepts_base: true,
    fonction_vc: true,
    fonction_va: true,
    fonction_vpm: true,
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
      {/* En-tête avec dégradé or/bleu */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Fonctions Financières Excel : VC, VA, VPM</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Maîtrisez les calculs de prêts, d'épargne et d'investissement</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 27 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <DollarSign className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Valeur Future</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Calculator className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Valeur Actuelle</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <PieChart className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Mensualités</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cas Réels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-amber-600" />
            </div>
            Pourquoi Maîtriser les Fonctions Financières dans Excel ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Prenez des Décisions Financières Éclairées</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les fonctions financières Excel transforment des calculs complexes en simples formules, 
                  vous permettant d'analyser prêts, investissements et épargne avec précision et rapidité:cite[1]:cite[6].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Home className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Prêts Immobiliers</h4>
                      <p className="text-gray-600">Calculez vos mensualités et le coût total du crédit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Planification Épargne</h4>
                      <p className="text-gray-600">Projetez la valeur future de vos investissements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Car className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Achats Importants</h4>
                      <p className="text-gray-600">Évaluez vos capacités de financement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon27/finance-overview.png" 
                  alt="Diagramme montrant l'interaction entre VC, VA et VPM"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Argent = Décisions Éclairées
                </div>
              </div>
            </div>

            {/* Section Avantages */}
            <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Les Avantages des Fonctions Financières</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-90">Exactitude des calculs:cite[2]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">10x</div>
                  <p className="text-sm opacity-90">Gain de temps</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">0</div>
                  <p className="text-sm opacity-90">Erreurs de calcul</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Concepts de Base */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('concepts_base')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            Concepts de Base : La Valeur Temporelle de l'Argent
          </h2>
          {expandedSections.concepts_base ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.concepts_base && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Un Euro Aujourd'hui ≠ Un Euro Demain</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💡 Le Principe Fondamental</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      <strong>L'argent a une valeur temporelle</strong> car il peut être investi et rapporter des intérêts. 
                      C'est le fondement de tous les calculs financiers:cite[2]:cite[6].
                    </p>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Valeur Actuelle (VA) :</span> Ce que vaut aujourd'hui un montant futur
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Valeur Future (VC) :</span> Ce que vaudra plus tard un montant actuel
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Flux réguliers (VPM) :</span> Versements constants sur une période
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Convention des Signes</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3 font-semibold">
                      ⚠️ Cette convention est essentielle pour éviter les erreurs !
                    </p>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-red-600">Négatif (-) :</span> Argent qui sort (dépenses, investissements)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-green-600">Positif (+) :</span> Argent qui entre (revenus, retraits)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-700">
                        <strong>Exemple :</strong> Pour un prêt, le montant emprunté est positif (vous recevez l'argent), 
                        mais les mensualités sont négatives (vous payez).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon27/valeur-temporelle-argent.gif" 
                  alt="Animation illustrant la valeur temporelle de l'argent"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🎯 Applications dans la Vie Réelle</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Épargne :</strong> 100€ aujourd'hui à 5% annuel = 162€ dans 10 ans</p>
                    <p><strong>Prêt :</strong> 200 000€ sur 20 ans à 3% = 1 109€/mois</p>
                    <p><strong>Investissement :</strong> 500€/mois à 7% = 260 000€ en 20 ans</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">📈 Intérêts Composés : La 8ème Merveille</h5>
                  <p className="text-gray-600 text-sm">
                    <strong>"Les intérêts composés sont la huitième merveille du monde."</strong> - Albert Einstein
                    Plus vous commencez tôt, plus votre argent travaille pour vous.
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau concepts */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h4 className="font-bold text-lg">Les 3 Fonctions Clés et Leurs Rôles</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Rôle Principal</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Question Répondue</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage Typique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-blue-600 font-semibold">VC (FV)</td>
                      <td className="p-4 text-gray-700">Valeur Future</td>
                      <td className="p-4 text-gray-600">"Que vaudra mon investissement dans X années ?"</td>
                      <td className="p-4 text-gray-600">Épargne, retraite</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-green-600 font-semibold">VA (PV)</td>
                      <td className="p-4 text-gray-700">Valeur Actuelle</td>
                      <td className="p-4 text-gray-600">"Que vaut aujourd'hui ce montant futur ?"</td>
                      <td className="p-4 text-gray-600">Prêts, investissements</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-purple-600 font-semibold">VPM (PMT)</td>
                      <td className="p-4 text-gray-700">Paiement Périodique</td>
                      <td className="p-4 text-gray-600">"Quelle sera ma mensualité pour ce prêt ?"</td>
                      <td className="p-4 text-gray-600">Crédits, emprunts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction VC (Valeur Future) */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('fonction_vc')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            VC() - Valeur Future d'un Investissement
          </h2>
          {expandedSections.fonction_vc ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.fonction_vc && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Calculer la Valeur Future de Vos Investissements</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe VC()</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =VC(taux; npm; vpm; [va]; [type]):cite[7]:cite[10]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">taux :</span> Taux d'intérêt par période
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">npm :</span> Nombre total de périodes
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">vpm :</span> Paiement par période (négatif si investissement)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">va :</span> Valeur actuelle (optionnel)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple : Épargne Retraite</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Vous investissez 200€/mois pendant 30 ans à 6% annuel :</p>
                      <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                        =VC(6%/12; 30*12; -200; 0; 0)
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-700 font-semibold">
                        Résultat : 200 000€ (votre épargne après 30 ans)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon27/fonction-vc-demo.gif" 
                  alt="Animation montrant le calcul VC dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Bonnes Pratiques VC</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Harmonisez les périodes :</strong> Taux annuel 6% → 6%/12 pour des versements mensuels</p>
                    <p><strong>Signes cohérents :</strong> Investissements en négatif, retraits en positif</p>
                    <p><strong>Type de paiement :</strong> 0=fin de période (standard), 1=début de période</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Erreur Fréquente</h5>
                  <p className="text-gray-600 text-sm">
                    Oublier de diviser le taux annuel par 12 pour des versements mensuels. 
                    <strong> 6% annuel = 0.5% mensuel, pas 6% mensuel !</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples VC */}
            <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau d'Exemples VC() Concrets</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Explication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Épargne éducation</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=VC(5%/12;18*12;-150;-5000)</td>
                      <td className="p-4 font-mono text-green-600">58 427€</td>
                      <td className="p-4 text-gray-600 text-sm">5000€ initiaux + 150€/mois pendant 18 ans</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Retraite complémentaire</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=VC(7%/12;25*12;-300;0;1)</td>
                      <td className="p-4 font-mono text-green-600">245 113€</td>
                      <td className="p-4 text-gray-600 text-sm">300€/mois en début de période, 25 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction VA (Valeur Actuelle) */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('fonction_va')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Calculator className="w-6 h-6 text-purple-600" />
            </div>
            VA() - Valeur Actuelle d'un Investissement
          </h2>
          {expandedSections.fonction_va ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.fonction_va && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Évaluer la Valeur Actuelle de Flux Futurs</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe VA()</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =VA(taux; npm; vpm; [vc]; [type]):cite[7]:cite[10]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">taux :</span> Taux d'actualisation par période
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">npm :</span> Nombre total de périodes
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">vpm :</span> Paiement par période
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">vc :</span> Valeur future (optionnel)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple : Capacité d'Emprunt</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Vous pouvez payer 1 000€/mois sur 20 ans à 3% :</p>
                      <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                        =VA(3%/12; 20*12; -1000; 0; 0)
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-700 font-semibold">
                        Résultat : 221 000€ (montant max que vous pouvez emprunter)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon27/fonction-va-demo.gif" 
                  alt="Animation montrant le calcul VA dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">💡 Applications VA()</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Prêts :</strong> Déterminer le montant empruntable</p>
                    <p><strong>Investissements :</strong> Évaluer la valeur actuelle de revenus futurs</p>
                    <p><strong>Location :</strong> Comparer achat vs location</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-orange-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">🎯 Conseil Pro</h5>
                  <p className="text-gray-600 text-sm">
                    Utilisez VA() pour comparer différentes options de financement. 
                    <strong> La meilleure option est celle avec la valeur actuelle la plus basse</strong> 
                    (pour un même service rendu).
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau exemples VA */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau d'Exemples VA() Concrets</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Explication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Achat voiture</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=VA(4.5%/12;48;-450;0)</td>
                      <td className="p-4 font-mono text-green-600">19 250€</td>
                      <td className="p-4 text-gray-600 text-sm">Valeur actuelle de 48 mensualités de 450€</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Rente viagère</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=VA(3%/12;20*12;2000;0)</td>
                      <td className="p-4 font-mono text-green-600">360 456€</td>
                      <td className="p-4 text-gray-600 text-sm">Valeur actuelle de 2000€/mois pendant 20 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fonction VPM (Mensualités) */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('fonction_vpm')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <PieChart className="w-6 h-6 text-orange-600" />
            </div>
            VPM() - Calcul des Mensualités de Prêt
          </h2>
          {expandedSections.fonction_vpm ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.fonction_vpm && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Calculer Vos Mensualités de Prêt Facilement</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Syntaxe VPM()</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =VPM(taux; npm; va; [vc]; [type]):cite[1]:cite[8]
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">taux :</span> Taux d'intérêt par période
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">npm :</span> Nombre total de périodes
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">va :</span> Valeur actuelle (montant emprunté)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">vc :</span> Valeur future (généralement 0 pour un prêt)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
                  <div className="bg-orange-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Exemple : Prêt Immobilier</h4>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <p className="text-gray-700 mb-2">Vous empruntez 250 000€ sur 20 ans à 3.5% :</p>
                      <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                        =VPM(3.5%/12; 20*12; 250000; 0; 0)
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-700 font-semibold">
                        Résultat : -1 450€/mois (négatif car c'est une sortie d'argent)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon27/fonction-vpm-demo.gif" 
                  alt="Animation montrant le calcul VPM dans Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">💡 Analyse du Résultat VPM</h5>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>Coût total du crédit :</strong> (Mensualité × Nb mois) - Montant emprunté</p>
                    <p><strong>Impact de la durée :</strong> +5 ans = mensualité ↓ mais coût total ↑</p>
                    <p><strong>Seuil d'endettement :</strong> Maximum 35% des revenus</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">📊 Tableau d'Amortissement</h5>
                  <p className="text-gray-600 text-sm">
                    Le VPM calculé inclut <strong>capital + intérêts</strong>. 
                    Utilisez <span className="font-mono">PPMT()</span> et <span className="font-mono">IPMT()</span> 
                    pour détailler capital et intérêts par période:cite[6]:cite[10].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau comparatif prêts */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h4 className="font-bold text-lg">Comparaison de Scénarios de Prêt</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Montant</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Durée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Taux</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Mensualité VPM()</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Coût Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Prêt immobilier</td>
                      <td className="p-4 font-mono text-sm">250 000€</td>
                      <td className="p-4 font-mono text-sm">20 ans</td>
                      <td className="p-4 font-mono text-sm">3.5%</td>
                      <td className="p-4 font-mono text-green-600 text-sm">1 450€</td>
                      <td className="p-4 font-mono text-red-600 text-sm">98 000€</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Prêt auto</td>
                      <td className="p-4 font-mono text-sm">20 000€</td>
                      <td className="p-4 font-mono text-sm">5 ans</td>
                      <td className="p-4 font-mono text-sm">4.5%</td>
                      <td className="p-4 font-mono text-green-600 text-sm">373€</td>
                      <td className="p-4 font-mono text-red-600 text-sm">2 380€</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Crédit conso</td>
                      <td className="p-4 font-mono text-sm">10 000€</td>
                      <td className="p-4 font-mono text-sm">3 ans</td>
                      <td className="p-4 font-mono text-sm">6%</td>
                      <td className="p-4 font-mono text-green-600 text-sm">304€</td>
                      <td className="p-4 font-mono text-red-600 text-sm">944€</td>
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
            Cas Pratique : Achat Immobilier Complet
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Analyser un Projet d'Achat Immobilier</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">📋 Scénario du Projet</h4>
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                    <div>Prix appartement : 300 000€</div>
                    <div>Apport personnel : 50 000€</div>
                    <div>Montant à emprunter : 250 000€</div>
                    <div>Taux : 3.5% sur 20 ans</div>
                    <div>Capacité d'épargne : 1 500€/mois</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectifs</p>
                        <p className="text-sm text-gray-600">Calculer la mensualité, coût total, et planifier l'épargne</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Méthode</p>
                        <p className="text-sm text-gray-600">Utiliser VC(), VA() et VPM() ensemble</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon27/cas-pratique-immobilier.png" 
                    alt="Tableau de calcul immobilier avant formules"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Solutions par Fonction</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Mensualité avec VPM()</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =VPM(3.5%/12; 20*12; 250000; 0; 0)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Résultat : -1 450€/mois</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Coût total du crédit</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =(1 450 * 20 * 12) - 250 000
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Résultat : 98 000€ d'intérêts</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Épargne avec VC()</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =VC(5%/12; 20*12; -500; -50000; 0)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Résultat : 275 000€ (valeur de l'apport dans 20 ans)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon27/cas-pratique-immobilier.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon27/correction-cas-pratique.mp4"
                      title="Correction détaillée pas à pas"
                      duration="25:15"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Analyse Financière Complète</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Mensualité calculée : 1 450€/mois</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Taux d'endettement : 29% (acceptable)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Projet financièrement viable</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Créez un tableau d'amortissement complet montrant la répartition 
                    capital/intérêts pour chaque mensualité sur les 20 ans.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mt-2">
                    <div className="font-mono text-sm text-green-600">
                      =PPMT(3.5%/12; 1; 20*12; 250000) // Capital 1ère mensualité
                    </div>
                    <div className="font-mono text-sm text-blue-600 mt-1">
                      =IPMT(3.5%/12; 1; 20*12; 250000) // Intérêts 1ère mensualité
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avant/Après */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Transformation de l'Analyse Financière</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🔴 Avant Excel</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon27/avant-calculs.png" 
                    alt="Calculs manuels complexes avant Excel"
                    className="rounded-lg border-2 border-red-200"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🟢 Avec les Fonctions</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon27/apres-calculs.png" 
                    alt="Tableau Excel automatisé avec formules"
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
        <QuizLecon27 onResult={onResult} />
      </div>
    </div>
  );
}