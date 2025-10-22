import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon26 from "../../quizz/intermediaire/QuizLecon26";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Clock,
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

export default function Lecon26({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    fondements: true,
    aujourdhui_maintenant: true,
    calculs_avances: true,
    travailler_dates: true,
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
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl md:text-4xl font-bold break-words">Fonctions Date et Heure Excel : Maîtriser le Temps</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Automatisez vos calculs de dates, délais et plannings</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 26 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Dates Dynamiques</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Clock className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Calculs Précises</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Jours Ouvrés</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Cas Réels</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            Pourquoi Maîtriser les Dates et Heures dans Excel ?
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Automatisez Vos Plannings et Délais</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les fonctions de date et heure Excel transforment la gestion temporelle en calculs automatiques et fiables, 
                  éliminant les erreurs manuelles dans les projets, la paie ou les échéances:cite[3]:cite[9].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Calendar className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gestion de Projets</h4>
                      <p className="text-gray-600">Calculez automatiquement les dates d'échéance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Package className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Suivi des Livraisons</h4>
                      <p className="text-gray-600">Déterminez les délais de fabrication</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Feuilles de Temps</h4>
                      <p className="text-gray-600">Calculez les heures travaillées et supplémentaires</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon26/date-time-overview.png" 
                  alt="Diagramme montrant l'utilisation des fonctions date et heure dans Excel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Temps = Argent Économisé
                </div>
              </div>
            </div>

            {/* Section Avantages */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🚀 Les Avantages des Fonctions Temporelles</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <p className="text-sm opacity-90">Exactitude des calculs:cite[9]</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">5x</div>
                  <p className="text-sm opacity-90">Gain de productivité</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">0</div>
                  <p className="text-sm opacity-90">Oubli d'échéance</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fondements Dates Excel */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('fondements')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            Fondements : Comment Excel Gère-t-il les Dates ?
          </h2>
          {expandedSections.fondements ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.fondements && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Le Système de Dates Excel : Numéros de Série</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">💡 Le Secret des Dates Excel</h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      Excel stocke les dates comme des <strong>nombres de série</strong> où :
                    </p>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">1 = 1er janvier 1900</span> (système Windows)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">44,000 = 29 mai 2020</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Les heures sont des décimales :</span> 0.5 = 12h00, 0.75 = 18h00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">Fonction DATE()</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =DATE(année; mois; jour)
                    </div>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Année :</span> 2020 (4 chiffres recommandés):cite[4]
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Mois :</span> 1 à 12 (13 = janvier année suivante)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold">Jour :</span> 1 à 31 (35 = décalage au mois suivant)
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                      <div className="font-mono text-sm">
                        <div className="text-gray-600">Exemple : =DATE(2024; 3; 15)</div>
                        <div className="text-green-600 font-semibold">→ 15 mars 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon26/serie-date-demo.gif" 
                  alt="Animation montrant le système de série de dates Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🎯 Pourquoi C'est Important ?</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Calculs simples :</strong> Date2 - Date1 = Nombre de jours</p>
                    <p><strong>Flexibilité :</strong> Ajouter 7 à une date = +1 semaine</p>
                    <p><strong>Compatibilité :</strong> Toutes les fonctions dates utilisent ce système:cite[3]</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Piège à Éviter</h5>
                  <p className="text-gray-600 text-sm">
                    Les dates en <strong>format texte</strong> ne peuvent pas être calculées. 
                    Utilisez <span className="font-mono">DATE()</span> ou <span className="font-mono">DATEVALUE()</span> pour les convertir:cite[9].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau conversion dates */}
            <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau de Conversion Dates/Numéros de Série</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Date Affichée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Numéro de Série</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Heure Affichée</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Décimal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-gray-700">01/01/1900</td>
                      <td className="p-4 font-mono text-blue-600">1</td>
                      <td className="p-4 font-mono text-gray-700">12:00:00</td>
                      <td className="p-4 font-mono text-green-600">0.5</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">15/03/2024</td>
                      <td className="p-4 font-mono text-blue-600">45345</td>
                      <td className="p-4 font-mono text-gray-700">18:30:00</td>
                      <td className="p-4 font-mono text-green-600">0.7708</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-gray-700">31/12/2024</td>
                      <td className="p-4 font-mono text-blue-600">45667</td>
                      <td className="p-4 font-mono text-gray-700">06:00:00</td>
                      <td className="p-4 font-mono text-green-600">0.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AUJOURD'HUI et MAINTENANT */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('aujourdhui_maintenant')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            AUJOURD'HUI() et MAINTENANT() : Dates Dynamiques
          </h2>
          {expandedSections.aujourdhui_maintenant ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.aujourdhui_maintenant && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Des Fonctions Qui S'Actualisent Automatiquement</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">AUJOURD'HUI() - Date du Jour</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =AUJOURD'HUI()
                    </div>
                    <p className="text-gray-700 mb-3">
                      Retourne <strong>la date actuelle</strong> selon l'horloge système. 
                      <strong> Se met à jour à chaque ouverture du fichier</strong>:cite[9].
                    </p>
                    
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h5 className="font-semibold text-yellow-800 mb-2">📝 Exemples d'Utilisation</h5>
                      <div className="text-yellow-700 text-sm space-y-2">
                        <p><strong>Dashboard :</strong> =AUJOURD'HUI() → "21/10/2024"</p>
                        <p><strong>Calcul âge :</strong> =AUJOURD'HUI() - DATE(1990;1;15)</p>
                        <p><strong>Échéance :</strong> =AUJOURD'HUI() + 30 → +30 jours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">MAINTENANT() - Date et Heure</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =MAINTENANT()
                    </div>
                    <p className="text-gray-700 mb-3">
                      Retourne <strong>la date et l'heure actuelles</strong>. 
                      <strong> Se met à jour à chaque calcul de feuille</strong>:cite[9].
                    </p>
                    
                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">⏱️ Applications en Temps Réel</h5>
                      <div className="text-blue-700 text-sm space-y-2">
                        <p><strong>Horodatage :</strong> =MAINTENANT() → "21/10/2024 14:30"</p>
                        <p><strong>Suivi commande :</strong> =MAINTENANT() - B2 → Temps écoulé</p>
                        <p><strong>Rapport :</strong> "Généré le " & TEXTE(MAINTENANT(); "jj/mm/aaaa hh:mm")</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon26/aujourdhui-maintenant-demo.gif" 
                  alt="Animation montrant AUJOURD'HUI et MAINTENANT en action"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🎯 Différence Clé</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>AUJOURD'HUI() :</strong> Date seulement, mise à jour quotidienne</p>
                    <p><strong>MAINTENANT() :</strong> Date + Heure, mise à jour continue</p>
                    <p><strong>Performance :</strong> MAINTENANT() utilise plus de ressources</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-red-200 p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">⚠️ Timestamp Statique vs Dynamique</h5>
                  <p className="text-gray-600 text-sm">
                    Pour un horodatage <strong>fixe</strong> qui ne change pas, utilisez <strong>Ctrl+;</strong> (date) 
                    et <strong>Ctrl+Shift+;</strong> (heure) au lieu de MAINTENANT():cite[10].
                  </p>
                </div>
              </div>
            </div>

            {/* Tableau comparatif */}
            <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
              <div className="bg-purple-500 p-4 text-white">
                <h4 className="font-bold text-lg">Tableau Comparatif : AUJOURD'HUI() vs MAINTENANT()</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="p-4 text-left font-semibold text-gray-800">AUJOURD'HUI()</th>
                      <th className="p-4 text-left font-semibold text-gray-800">MAINTENANT()</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Retourne</td>
                      <td className="p-4 text-green-600">Date seulement</td>
                      <td className="p-4 text-blue-600">Date + Heure</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Mise à jour</td>
                      <td className="p-4 text-gray-700">Ouverture fichier</td>
                      <td className="p-4 text-gray-700">Chaque calcul</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Usage typique</td>
                      <td className="p-4 text-gray-700">Dashboards, échéances</td>
                      <td className="p-4 text-gray-700">Horodatage, suivi temps réel</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Exemple résultat</td>
                      <td className="p-4 font-mono text-sm">21/10/2024</td>
                      <td className="p-4 font-mono text-sm">21/10/2024 14:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Calculs Avancés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('calculs_avances')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            Calculs Avancés : DATEDIF, YEARFRAC, EDATE
          </h2>
          {expandedSections.calculs_avances ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.calculs_avances && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Des Fonctions Puissantes pour des Calculs Complexes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">DATEDIF() - Différence Entre Dates</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =DATEDIF(date_début; date_fin; "unité")
                    </div>
                    <p className="text-gray-700 mb-3">
                      Calcule la différence entre deux dates en années, mois ou jours. 
                      <strong> Fonction cachée mais très puissante !</strong>:cite[9]
                    </p>
                    
                    <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
                      <h5 className="font-semibold text-green-800 mb-2">📊 Unités Disponibles</h5>
                      <div className="text-green-700 text-sm space-y-1">
                        <p><strong>"Y"</strong> - Années complètes</p>
                        <p><strong>"M"</strong> - Mois complets</p>
                        <p><strong>"D"</strong> - Jours</p>
                        <p><strong>"MD"</strong> - Jours (mois/années ignorés)</p>
                        <p><strong>"YM"</strong> - Mois (années/jours ignorés)</p>
                        <p><strong>"YD"</strong> - Jours (années ignorées)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">YEARFRAC() - Fraction d'Année</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =YEARFRAC(date_début; date_fin; [base])
                    </div>
                    <p className="text-gray-700 mb-3">
                      Calcule la fraction d'année entre deux dates, 
                      <strong> idéal pour les calculs financiers et les proratas</strong>:cite[6].
                    </p>
                    
                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">🏦 Bases de Calcul</h5>
                      <div className="text-blue-700 text-sm space-y-1">
                        <p><strong>0</strong> - US 30/360 (défaut)</p>
                        <p><strong>1</strong> - Réel/Réel</p>
                        <p><strong>2</strong> - Réel/360</p>
                        <p><strong>3</strong> - Réel/365</p>
                        <p><strong>4</strong> - Européen 30/360</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">EDATE() - Ajouter/Soustraire des Mois</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =EDATE(date_début; mois)
                    </div>
                    <p className="text-gray-700 mb-3">
                      Retourne la date qui est un nombre spécifique de mois avant ou après la date de début.
                      <strong> Gère automatiquement les fins de mois</strong>:cite[6].
                    </p>
                    
                    <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">📅 Exemples Concrets</h5>
                      <div className="text-purple-700 text-sm space-y-2">
                        <p><strong>+12 mois :</strong> =EDATE("15/03/2024"; 12) → "15/03/2025"</p>
                        <p><strong>Fin de mois :</strong> =EDATE("31/01/2024"; 1) → "29/02/2024"</p>
                        <p><strong>Abonnement :</strong> =EDATE(AUJOURD'HUI(); 6) → Date fin abonnement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ImageZoomable 
                  src="/cours/intermediaire/Lecon26/calculs-avances-demo.gif" 
                  alt="Animation montrant DATEDIF, YEARFRAC et EDATE"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
              </div>
            </div>

            {/* Tableau exemples calculs */}
            <div className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
              <div className="bg-orange-500 p-4 text-white">
                <h4 className="font-bold text-lg">Exemples Pratiques de Calculs Avancés</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Scénario</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Calcul d'âge exact</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=DATEDIF(A2;AUJOURD'HUI();"Y") & " ans "</td>
                      <td className="p-4 font-mono text-green-600">"34 ans 5 mois"</td>
                      <td className="p-4 text-gray-600 text-sm">RH, Assurances</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Prorata de loyer</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=YEARFRAC(A2;B2;3)*1200</td>
                      <td className="p-4 font-mono text-green-600">€450.65</td>
                      <td className="p-4 text-gray-600 text-sm">Immobilier</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Date de révision</td>
                      <td className="p-4 font-mono text-blue-600 text-sm">=EDATE(AUJOURD'HUI(); 12)</td>
                      <td className="p-4 font-mono text-green-600">21/10/2025</td>
                      <td className="p-4 text-gray-600 text-sm">Contrats</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Travailler avec Jours Ouvrés */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-cyan-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('travailler_dates')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-teal-600" />
            </div>
            Jours Ouvrés : WORKDAY, NETWORKDAYS
          </h2>
          {expandedSections.travailler_dates ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.travailler_dates && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Calculs Professionnels Excluant Weekends et Jours Fériés</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                  <div className="bg-blue-500 p-4 text-white">
                    <h4 className="font-bold text-lg">WORKDAY() - Date Après Jours Ouvrés</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =WORKDAY(date_début; jours; [jours_feriés])
                    </div>
                    <p className="text-gray-700 mb-3">
                      Calcule une date après un nombre spécifique de jours ouvrés 
                      <strong> en excluant weekends et jours fériés</strong>:cite[6].
                    </p>
                    
                    <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4">
                      <h5 className="font-semibold text-green-800 mb-2">📅 Exemple Livraison</h5>
                      <div className="text-green-700 text-sm">
                        <p>Date départ : Lundi 21 octobre</p>
                        <p>Délai : 5 jours ouvrés</p>
                        <p className="font-mono">=WORKDAY("21/10/2024"; 5) → Lundi 28 octobre</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">NETWORKDAYS() - Nombre de Jours Ouvrés</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =NETWORKDAYS(date_début; date_fin; [jours_feriés])
                    </div>
                    <p className="text-gray-700 mb-3">
                      Compte le nombre de jours ouvrés entre deux dates, 
                      <strong> parfait pour le calcul des délais projet</strong>:cite[3].
                    </p>
                    
                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">⏱️ Exemple Projet</h5>
                      <div className="text-blue-700 text-sm">
                        <p>Début : 1er octobre 2024</p>
                        <p>Fin : 31 octobre 2024</p>
                        <p className="font-mono">=NETWORKDAYS(A2; B2) → 23 jours ouvrés</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">WORKDAY.INTL() - Weekends Personnalisés</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                      =WORKDAY.INTL(début; jours; [weekend]; [feriés])
                    </div>
                    <p className="text-gray-700 mb-3">
                      Version avancée de WORKDAY qui permet de 
                      <strong> définir des weekends personnalisés</strong> (ex: dimanche seul):cite[6].
                    </p>
                    
                    <div className="mt-4 bg-purple-50 border-l-4 border-purple-400 p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">🌍 International</h5>
                      <div className="text-purple-700 text-sm space-y-1">
                        <p><strong>1</strong> - Samedi,Dimanche (défaut)</p>
                        <p><strong>2</strong> - Dimanche,Lundi</p>
                        <p><strong>7</strong> - Vendredi,Samedi</p>
                        <p><strong>11</strong> - Dimanche seulement</p>
                        <p><strong>16</strong> - Vendredi seulement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ImageZoomable 
                  src="/cours/intermediaire/Lecon26/workday-networkdays-demo.gif" 
                  alt="Animation montrant WORKDAY et NETWORKDAYS"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
              </div>
            </div>

            {/* Tableau comparaison jours ouvrés */}
            <div className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
              <div className="bg-teal-500 p-4 text-white">
                <h4 className="font-bold text-lg">Scénarios Réels de Jours Ouvrés</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Situation</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Fonction</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Formule</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Résultat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Délai livraison 10 jours</td>
                      <td className="p-4 font-semibold text-blue-700">WORKDAY</td>
                      <td className="p-4 font-mono text-sm">=WORKDAY(A2; 10; F2:F10)</td>
                      <td className="p-4 font-mono text-green-600 text-sm">28/10/2024</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Jours travaillés dans le mois</td>
                      <td className="p-4 font-semibold text-green-700">NETWORKDAYS</td>
                      <td className="p-4 font-mono text-sm">=NETWORKDAYS(A2; B2; F2:F10)</td>
                      <td className="p-4 font-mono text-green-600 text-sm">21</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Pays weekend Vendredi/Samedi</td>
                      <td className="p-4 font-semibold text-purple-700">WORKDAY.INTL</td>
                      <td className="p-4 font-mono text-sm">=WORKDAY.INTL(A2; 10; 7)</td>
                      <td className="p-4 font-mono text-green-600 text-sm">03/11/2024</td>
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
            Cas Pratique : Gestion de Projet Réel
          </h2>
          {expandedSections.cas_pratique ? 
            <ChevronUp className="w-6 h-6 text-rose-600" /> : 
            <ChevronDown className="w-6 h-6 text-rose-600" />
          }
        </button>
        
        {expandedSections.cas_pratique && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">🎯 Mission : Planifier un Projet de Développement</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">📋 Spécifications du Projet</h4>
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                    <div>Date début : =AUJOURD'HUI()</div>
                    <div>Phases : Analyse (5j), Développement (15j), Tests (8j)</div>
                    <div>Jours fériés : 1er nov, 11 nov, 25 déc</div>
                    <div>Weekend : Samedi-Dimanche</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Objectif</p>
                        <p className="text-sm text-gray-600">Calculer les dates de fin de chaque phase</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Zap className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Méthode</p>
                        <p className="text-sm text-gray-600">Utiliser WORKDAY avec jours fériés</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon26/cas-pratique-projet.png" 
                    alt="Planning projet avant calcul"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📝 Solutions par Phase</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Phase Analyse (5 jours ouvrés)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =WORKDAY(B2; 5; $F$2:$F$4)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Date fin : 28/10/2024</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Phase Développement (15 jours ouvrés)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =WORKDAY(C2; 15; $F$2:$F$4)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Date fin : 20/11/2024</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">Phase Tests (8 jours ouvrés)</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =WORKDAY(D2; 8; $F$2:$F$4)
                      </div>
                      <p className="text-gray-600 text-sm mt-1">Date fin : 02/12/2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/Lecon26/cas-pratique-projet.zip" 
                      className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon26/correction-cas-pratique.mp4"
                      title="Correction détaillée pas à pas"
                      duration="22:30"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">🏆 Résultat Professionnel</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Dates de fin calculées automatiquement</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Jours fériés et weekends exclus</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Planning réaliste et professionnel</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-4 rounded-lg border-2 border-amber-200">
                  <h5 className="font-semibold text-gray-800 mb-2">💪 Défi Avancé</h5>
                  <p className="text-sm text-gray-600">
                    Ajoutez une colonne "Jours restants" qui calcule dynamiquement 
                    le nombre de jours ouvrés restants jusqu'à la date d'échéance.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg mt-2">
                    <div className="font-mono text-sm text-green-600">
                      =NETWORKDAYS(AUJOURD'HUI(); E2; $F$2:$F$4)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avant/Après */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Transformation Complète du Planning</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🔴 Avant Automatisation</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon26/avant-planning.png" 
                    alt="Planning manuel avant calcul automatique"
                    className="rounded-lg border-2 border-red-200"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 text-center">🟢 Après Automatisation</h5>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon26/apres-planning.png" 
                    alt="Planning automatique avec fonctions dates"
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
        <QuizLecon26 onResult={onResult} />
      </div>
    </div>
  );
}