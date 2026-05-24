import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon33 from "../../quizz/intermediaire/QuizLecon33"; // You'll need to create this
import PremiumVideo from "../../ui/PremiumVideo";
import {
  ChevronDown,
  ChevronUp,
  Link,
  Database,
  RefreshCw,
  Shield,
  Zap,
  Lightbulb,
  PlayCircle,
  Download,
  FileText,
  Workflow
} from "lucide-react";

export default function Lecon33({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    principes: true,
    methodes: true,
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
      {/* En-tête avec dégradé VERT - NOUVEAU THÈME pour cette leçon */}
      <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none md:px-4 py-6 md:p-8 md:rounded-xl rounded-none mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <Link className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-base md:text-2xl md:text-4xl font-bold break-words">Liens Dynamiques entre Classeurs</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Connectez vos données et automatisez vos rapports</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              Leçon 33 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Database className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Références Externes</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <RefreshCw className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Mise à Jour Automatique</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Fonction INDIRECT</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Workflow className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Classeurs Sources et Cibles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            Pourquoi des Liens entre Classeurs ?
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Centralisez l'Information depuis Plusieurs Sources</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Les liens entre classeurs vous permettent de créer des <strong>classeurs de synthèse</strong> qui se mettent à jour automatiquement lorsque les données sources sont modifiées. Idéal pour les rapports mensuels, les tableaux de bord de gestion et la consolidation de données d'équipes différentes :cite[3].
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <RefreshCw className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Mise à Jour Automatique</h4>
                      <p className="text-gray-600">Les données liées se mettent à jour lorsque les classeurs sources changent :cite[3]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <Database className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Source Unique de Vérité</h4>
                      <p className="text-gray-600">Évitez les incohérences en centralisant les données maîtres</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 px-4 py-3 md:p-4 bg-white rounded-xl border border-gray-200">
                    <FileText className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Gain de Temps</h4>
                      <p className="text-gray-600">Plus besoin de copier-coller manuellement les données :cite[7]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon33/liaison-classeurs-schema.png" // You need to create this image
                  alt="Schéma montrant plusieurs classeurs sources liés à un classeur de synthèse"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  Architecture de liaison entre classeurs
                </div>
              </div>
            </div>

            {/* Section Cas d'Usage */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
              <h4 className="font-bold text-lg mb-4 text-center">🎯 Cas d'Utilisation des Liens entre Classeurs</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">📊</div>
                  <p className="text-sm opacity-90">Rapports mensuels avec fichiers sources par département</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">🏢</div>
                  <p className="text-sm opacity-90">Consolidation de budgets par services ou filiales</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-2xl font-bold mb-2">📈</div>
                  <p className="text-sm opacity-90">Tableaux de bord de suivi d'activité :cite[7]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Principes Fondamentaux */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-emerald-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-emerald-50 to-teal-50 text-left hover:from-emerald-100 transition-all"
          onClick={() => toggleSection('principes')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Workflow className="w-6 h-6 text-emerald-600" />
            </div>
            Principes Fondamentaux des Liens
          </h2>
          {expandedSections.principes ? 
            <ChevronUp className="w-6 h-6 text-emerald-600" /> : 
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          }
        </button>
        
        {expandedSections.principes && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Comment Excel Gère les Liens entre Classeurs ?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-emerald-200 overflow-hidden">
                  <div className="bg-emerald-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📁 Notions de Classeur Source et Cible</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Classeur source :</strong> Contient les données d'origine</p>
                      <p className="text-gray-700"><strong>Classeur cible :</strong> Contient les formules de liaison</p>
                      <p className="text-gray-700"><strong>Référence externe :</strong> La formule qui crée le lien :cite[3]</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =[Ventes.xlsx]Feuille1!$A$1
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                  <div className="bg-green-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🔗 Syntaxe des Références Externes</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Classeur ouvert :</strong> Plus simple, sans chemin complet</p>
                      <p className="text-gray-700"><strong>Classeur fermé :</strong> Inclut le chemin d'accès complet :cite[3]</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        ='C:\Mes Documents\[Ventes.xlsx]Feuille1'!A1
                      </div>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        ='https://monentreprise.sharepoint.com/[Rapports.xlsx]Feuille1'!A1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon33/syntaxe-liens.png" // You need to create this image
                  alt="Détail de la syntaxe d'un lien entre classeurs Excel"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4">
                  <h5 className="font-semibold text-emerald-800 mb-2">💡 Comportement des Liens</h5>
                  <div className="text-emerald-700 text-sm space-y-2">
                    <p><strong>Actualisation :</strong> Manuelle ou automatique au démarrage</p>
                    <p><strong>Sécurité :</strong> Message d'avertissement à l'ouverture :cite[3]</p>
                    <p><strong>Stabilité :</strong> Les liens se brisent si les fichiers sources sont déplacés</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tableau Comparatif */}
            <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-500 p-4 text-white">
                <h4 className="font-bold text-lg">Types de Liens et Leurs Caractéristiques</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 text-left font-semibold text-gray-800">Type de Lien</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Avantages</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Limitations</th>
                      <th className="p-4 text-left font-semibold text-gray-800">Utilisation Idéale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Lien Simple</td>
                      <td className="p-4 text-gray-700">Facile à créer, mise à jour automatique</td>
                      <td className="p-4 text-gray-700">Sensible aux changements de chemin</td>
                      <td className="p-4 text-gray-700">Environnement stable</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Lien avec INDIRECT</td>
                      <td className="p-4 text-gray-700">Nom de fichier dynamique :cite[1]</td>
                      <td className="p-4 text-gray-700">Classeur source doit être ouvert :cite[1]</td>
                      <td className="p-4 text-gray-700">Fichiers qui changent de nom (mensuels)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-green-600">Connexion de Données</td>
                      <td className="p-4 text-gray-700">Plus robuste, actualisation contrôlée :cite[7]</td>
                      <td className="p-4 text-gray-700">Configuration plus complexe</td>
                      <td className="p-4 text-gray-700">Tableaux de bord professionnels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Méthodes de Création */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-teal-50 to-cyan-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('methodes')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <Link className="w-6 h-6 text-teal-600" />
            </div>
            Méthodes de Création des Liens
          </h2>
          {expandedSections.methodes ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.methodes && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Trois Techniques pour Créer vos Liens</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Méthode 1 */}
              <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                <div className="bg-green-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">🖱️ Méthode Manuelle</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Ouvrir les deux classeurs</h5>
                        <p className="text-gray-600 text-sm">Source et cible doivent être ouverts</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Taper le signe =</h5>
                        <p className="text-gray-600 text-sm">Dans la cellule du classeur cible</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Sélectionner la cellule source</h5>
                        <p className="text-gray-600 text-sm">Dans le classeur source, valider par Entrée :cite[3]</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =[VentesJanvier.xlsx]Feuille1!B4
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 2 */}
              <div className="bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
                <div className="bg-teal-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">🔧 Fonction INDIRECT Dynamique</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-teal-100 text-teal-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Préparer les paramètres</h5>
                        <p className="text-gray-600 text-sm">Chemin, nom fichier, feuille en cellules :cite[1]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-teal-100 text-teal-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Construire la référence</h5>
                        <p className="text-gray-600 text-sm">Concaténer les éléments avec &</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-teal-100 text-teal-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Utiliser INDIRECT</h5>
                        <p className="text-gray-600 text-sm">=INDIRECT(reference_texte) :cite[1]</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =INDIRECT("'["&A2&".xlsx]"&A3&"'!"&B4)
                    </div>
                  </div>
                </div>
              </div>

              {/* Méthode 3 */}
              <div className="bg-white rounded-2xl border-2 border-cyan-200 overflow-hidden">
                <div className="bg-cyan-500 p-4 text-white text-center">
                  <h4 className="font-bold text-lg">📊 Connexions de Données</h4>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-100 text-cyan-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Onglet Données</h5>
                        <p className="text-gray-600 text-sm">Données → Connexions → Ajouter :cite[7]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-100 text-cyan-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Sélectionner la source</h5>
                        <p className="text-gray-600 text-sm">Parcourir et sélectionner le classeur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-100 text-cyan-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                      <div>
                        <h5 className="font-semibold text-gray-800">Importer les données</h5>
                        <p className="text-gray-600 text-sm">Choisir la table et l'emplacement :cite[7]</p>
                      </div>
                    </div>

                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      Connexion établie, actualisation contrôlée
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Démonstration Visuelle */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">🎬 Démonstration des Méthodes</h4>
              </div>
              <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon33/demo-manuelle.gif" // You need to create this GIF
                      alt="Animation montrant la création manuelle d'un lien"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">Méthode manuelle - Simple</p>
                  </div>
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon33/demo-indirect.gif" // You need to create this GIF
                      alt="Animation montrant l'utilisation d'INDIRECT"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">INDIRECT - Dynamique</p>
                  </div>
                  <div className="text-center">
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon33/demo-connexion.gif" // You need to create this GIF
                      alt="Animation montrant la création d'une connexion"
                      className="rounded-xl shadow-lg border-2 border-white"
                    />
                    <p className="text-sm text-gray-600 mt-2">Connexion - Robuste</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cas Pratique : Rapport Mensuel */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-amber-50/30">
        <button 
          className="w-full flex justify-between items-center px-4 py-4 md:p-6 md:rounded-lg rounded-none bg-gradient-to-r from-amber-50 to-orange-50 text-left hover:from-amber-100 transition-all"
          onClick={() => toggleSection('pratique')}
        >
          <h2 className="text-base md:text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <PlayCircle className="w-6 h-6 text-amber-600" />
            </div>
            Cas Pratique: Rapport Mensuel Consolidé
          </h2>
          {expandedSections.pratique ? 
            <ChevronUp className="w-6 h-6 text-amber-600" /> : 
            <ChevronDown className="w-6 h-6 text-amber-600" />
          }
        </button>
        
        {expandedSections.pratique && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Créez un Rapport qui S'Actualise Automatiquement</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                  <div className="bg-amber-500 p-4 text-white">
                    <h4 className="font-bold text-lg">📈 Scénario: Consolidation des Ventes par Mois</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Fichiers mensuels</h5>
                          <p className="text-gray-600 text-sm">Ventes_Janvier.xlsx, Ventes_Février.xlsx, etc.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">2</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Classeur de synthèse</h5>
                          <p className="text-gray-600 text-sm">Rapport_Annuel.xlsx avec liens dynamiques</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">3</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Liste déroulante mois</h5>
                          <p className="text-gray-600 text-sm">Sélection du mois à afficher dynamiquement</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">4</div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Graphiques liés</h5>
                          <p className="text-gray-600 text-sm">Visualisations qui s'actualisent avec les données</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">🎯 Solution avec INDIRECT Dynamique</h4>
                  <div className="space-y-3">
                    <div className="bg-amber-800/30 p-3 rounded-lg">
                      <p className="font-mono text-sm">=INDIRECT("'C:\Rapports["&B2&".xlsx]Feuille1'!A1")</p>
                    </div>
                    <p className="text-sm opacity-90">Où B2 contient "Ventes_Janvier" et change selon la sélection</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon33/cas-pratique-schema.png" // You need to create this image
                  alt="Schéma de l'architecture du rapport mensuel consolidé"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-green-200 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                  <h4 className="font-semibold text-gray-800 mb-4">📥 Ressources Pédagogiques</h4>
                  <div className="space-y-4">
                    <a href="/cours/intermediaire/lecon33/cas-pratique-rapport.xlsx" 
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold w-full justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger les Fichiers d'Exercice
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/lecon33/creation-liens-dynamiques.mp4"
                      title="Création d'un rapport avec liens dynamiques entre classeurs"
                      duration="32:15"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Formules Clés */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
              <div className="bg-blue-500 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Fonctions Excel Essentielles pour les Liens</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-blue-600">I</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">INDIRECT()</h5>
                  <p className="text-sm text-gray-600">Crée une référence à partir d'un texte :cite[1]</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-green-600">C</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">CELL()</h5>
                  <p className="text-sm text-gray-600">Récupère des infos sur la cellule</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-purple-600">T</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">TEXTE()</h5>
                  <p className="text-sm text-gray-600">Formate les valeurs en texte pour INDIRECT</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-amber-600">S</span>
                  </div>
                  <h5 className="font-semibold text-gray-800">SIERREUR()</h5>
                  <p className="text-sm text-gray-600">Gère les erreurs de liens brisés</p>
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
            Techniques Avancées et Dépannage
          </h2>
          {expandedSections.avance ? 
            <ChevronUp className="w-6 h-6 text-red-600" /> : 
            <ChevronDown className="w-6 h-6 text-red-600" />
          }
        </button>
        
        {expandedSections.avance && (
          <div className="px-4 py-6 md:p-8 md:rounded-xl rounded-none">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Optimisation et Résolution des Problèmes</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden">
                  <div className="bg-red-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🚨 Gestion des Liens Brisés</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <p className="text-gray-700"><strong>Cause principale :</strong> Fichiers sources déplacés ou renommés</p>
                      
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        Données → Connexions → Modifier le lien
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          <strong>Solution :</strong> Utiliser l'outil "Modifier le lien" pour rediriger vers le nouveau fichier :cite[3].
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden">
                  <div className="bg-purple-500 p-4 text-white">
                    <h4 className="font-bold text-lg">🛡️ Solutions Alternatives avec VBA</h4>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <p className="text-gray-700"><strong>Quand INDIRECT échoue :</strong> Pour les classeurs fermés :cite[1]</p>
                      <p className="text-gray-700"><strong>Solution VBA :</strong> Macro pour reconstruire les formules dynamiquement</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        [C4].FormulaLocal = "='" & [B1] & "[" & [B2] & "]" & [B3] & "'!" & [B4]
                      </div>
                      <p className="text-gray-700 text-sm">Extrait de code VBA pour créer des liens dynamiques robustes :cite[1]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/lecon33/gestion-erreurs.png" // You need to create this image
                  alt="Interface Excel de gestion des liens et connexions"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl px-4 py-4 md:p-6 md:rounded-lg rounded-none text-white">
                  <h4 className="font-bold text-lg mb-4">💡 Bonnes Pratiques Avancées</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Utilisez des chemins réseau UNC (\\\\serveur\\partage)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Structure de dossiers cohérente pour les fichiers mensuels</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">★</div>
                      <span>Documentez les dépendances entre fichiers :cite[3]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilan compétences */}
            <div className="mt-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gray-800 p-4 text-white text-center">
                <h4 className="font-bold text-lg">Compétences Maîtrisées - Leçon 33</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 md:p-6 md:rounded-lg rounded-none">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Workflow className="w-6 h-6 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Concepts des Liens</h5>
                  <p className="text-sm text-gray-600">Source, cible, références</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Link className="w-6 h-6 text-teal-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Méthodes de Création</h5>
                  <p className="text-sm text-gray-600">Manuelle, INDIRECT, Connexions</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <PlayCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Cas Pratique</h5>
                  <p className="text-sm text-gray-600">Rapport mensuel dynamique</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800">Dépannage</h5>
                  <p className="text-sm text-gray-600">Liens brisés, solutions VBA</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon33 onResult={onResult} />
      </div>
    </div>
  );
}