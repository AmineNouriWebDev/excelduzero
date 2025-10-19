import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon13 from "../../quizz/intermediaire/QuizLecon13";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Shield,
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
  Sparkles
} from "lucide-react";

export default function Lecon13({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    formules: true,
    dependantes: true,
    erreurs: true,
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
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* En-tête avec dégradé moderne */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Validation des Données Avancée</h1>
                <p className="text-xl opacity-90 mt-2">Formules Complexes, Listes Dépendantes & Automatisation</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-6 py-3 text-lg font-semibold">
              Leçon 13 - Niveau Intermédiaire
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Code className="w-6 h-6 mb-2" />
              <p className="font-semibold">Formules Personnalisées Complexes</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <GitBranch className="w-6 h-6 mb-2" />
              <p className="font-semibold">Listes Déroulantes Dynamiques</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-6 h-6 mb-2" />
              <p className="font-semibold">Intégration avec Tableaux Croisés</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            Maîtriser la Validation Avancée des Données
          </h2>
          {expandedSections.introduction ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.introduction && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  Au-delà des Bases : Validation Professionnelle
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Passez de la validation simple à des systèmes de contrôle de données complexes utilisés 
                  en entreprise. Cette leçon vous révèle les techniques avancées pour garantir l'intégrité 
                  de vos bases de données Excel.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Formules de validation complexes</h4>
                      <p className="text-gray-600 text-sm">Utilisez ET(), OU(), RECHERCHEV() dans vos règles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Listes dépendantes multi-niveaux</h4>
                      <p className="text-gray-600 text-sm">Créez des menus dynamiques qui s'adaptent aux sélections</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Intégration avec les tableaux croisés dynamiques</h4>
                      <p className="text-gray-600 text-sm">Maintenez la cohérence dans vos analyses complexes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon13/validation-avancee-overview.png" 
                  alt="Vue d'ensemble des fonctionnalités de validation avancée"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 1 : Formules de Validation Avancées */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('formules')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            1. Formules de Validation Avancées
          </h2>
          {expandedSections.formules ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.formules && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600" />
                Combinaisons de Fonctions Complexes
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Validation contextuelle avec ET()/OU()</h4>
                  <p className="text-gray-700 mb-4">
                    Créez des règles de validation qui dépendent de multiples conditions simultanées 
                    ou alternatives pour des contrôles granulaires.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Exemple : Budget départemental</h5>
                      <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                        =ET(A2&gt;=0, A2&lt;=50000, OU(B2="Marketing", B2="R&D"))
                      </code>
                      <p className="text-sm text-gray-600">
                        Le budget doit être positif, inférieur à 50K, et uniquement pour certains départements
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Exemple : Date de projet</h5>
                      <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                        =ET(A2&gt;=DATE(2024,1,1), A2&lt;=DATE(2024,12,31), JOURSEM(A2,2)&lt;6)
                      </code>
                      <p className="text-sm text-gray-600">
                        La date doit être en 2024 et un jour de semaine (lundi-vendredi)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon13/formules-complexes.gif" 
                    alt="Animation montrant la création de formules de validation complexes"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Astuce de Pro : Debug des formules complexes
                </h4>
                <p className="text-blue-700">
                  Testez d'abord vos formules dans une cellule normale avec <code className="bg-blue-100 px-1 rounded">=VOTRE_FORMULE()</code> 
                  avant de les utiliser en validation. Si le résultat est <code className="bg-blue-100 px-1 rounded">VRAI</code>, 
                  la validation acceptera la saisie.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Validation avec RECHERCHEV()</h4>
                <p className="text-gray-700 mb-4">
                  Vérifiez l'existence d'une valeur dans une table de référence pour des contrôles 
                  de cohérence entre différentes feuilles.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Exemple : Code produit valide</h5>
                  <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                    =NON(ESTERREUR(RECHERCHEV(A2,Produits!A:B,1,FAUX)))
                  </code>
                  <p className="text-sm text-gray-600">
                    Vérifie que le code produit existe dans la colonne A de la feuille "Produits"
                  </p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon13/recherchev-validation.png" 
                  alt="Exemple de validation avec RECHERCHEV"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Formules de texte avancées</h4>
                <p className="text-gray-700 mb-4">
                  Contrôlez les formats de texte complexes avec des combinaisons de fonctions 
                  de texte et de logique.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Email professionnel</h5>
                    <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                      =ET(ESTNUM(TROUVE("@",A2)), GAUCHE(DROITE(A2,NBCAR(A2)-TROUVE("@",A2)),4)=".com")
                    </code>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Code postal français</h5>
                    <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                      =ET(ESTNUM(A2), NBCAR(A2)=5, A2&gt;=1000, A2&lt;=99999)
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Listes Déroulantes Dépendantes */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('dependantes')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <GitBranch className="w-6 h-6 text-purple-600" />
            </div>
            2. Listes Déroulantes Dépendantes et Dynamiques
          </h2>
          {expandedSections.dependantes ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.dependantes && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-600" />
                Systèmes de Navigation Hiérarchique
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Listes dépendantes basiques</h4>
                  <p className="text-gray-700 mb-4">
                    Créez des menus où le choix dans une première liste détermine les options 
                    disponibles dans une seconde liste.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étape 1 : Définir les plages nommées</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        Créez des plages nommées correspondant à chaque catégorie :
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                        <li><code className="bg-gray-100 px-1 rounded">France</code> = A2:A10</li>
                        <li><code className="bg-gray-100 px-1 rounded">Allemagne</code> = B2:B8</li>
                        <li><code className="bg-gray-100 px-1 rounded">Espagne</code> = C2:C6</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Étape 2 : Validation avec INDIRECT()</h5>
                      <code className="block text-sm bg-gray-100 p-3 rounded-lg">
                        =INDIRECT(B2)
                      </code>
                      <p className="text-sm text-gray-600 mt-2">
                        Où B2 contient le pays sélectionné dans la première liste
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon13/listes-dependantes.gif" 
                    alt="Animation montrant le fonctionnement des listes dépendantes"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Listes dynamiques avec DECALER()</h4>
                <p className="text-gray-700 mb-4">
                  Créez des listes qui s'adaptent automatiquement lorsque vous ajoutez ou supprimez 
                  des éléments dans vos tables sources.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Formule DECALER() dynamique</h5>
                  <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                    =DECALER($A$1,0,0,NBVAL($A:$A),1)
                  </code>
                  <p className="text-sm text-gray-600">
                    Crée une plage qui s'ajuste automatiquement au nombre de valeurs dans la colonne A
                  </p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon13/liste-dynamique-offset.png" 
                  alt="Configuration d'une liste dynamique avec DECALER"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Gestion des erreurs dans les listes</h4>
                <p className="text-gray-700 mb-4">
                  Anticipez et gérez les erreurs courantes dans les listes dépendantes pour 
                  une expérience utilisateur fluide.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-yellow-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Solution : SIERREUR() + SI()</h5>
                    <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                      =SI(B2="", $A$2:$A$10, SIERREUR(INDIRECT(B2), $A$2:$A$10))
                    </code>
                    <p className="text-sm text-gray-600">
                      Affiche une liste par défaut si la liste dépendante génère une erreur
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Attention aux références circulaires
                    </h5>
                    <p className="text-yellow-700 text-sm">
                      Évitez de créer des validations qui font référence à leur propre cellule, 
                      cela génère des erreurs de référence circulaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Gestion Avancée des Erreurs */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('erreurs')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            3. Gestion Avancée des Erreurs et Messages
          </h2>
          {expandedSections.erreurs ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.erreurs && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-orange-600" />
                Messages Contextuels et Guides Intelligents
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Messages d'aide dynamiques</h4>
                  <p className="text-gray-700 mb-4">
                    Personnalisez les messages d'aide en fonction du contexte ou des sélections 
                    précédentes pour guider efficacement les utilisateurs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Message conditionnel</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        Si le département "R&D" est sélectionné :
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        "Budget R&D : 0-100,000€ autorisés (contre 0-50,000€ pour les autres départements)"
                      </p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Formatage riche des messages</h5>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                        <li>Utilisez des retours à la ligne avec <code className="bg-gray-100 px-1 rounded">Ctrl+Enter</code></li>
                        <li>Incluez des exemples de valeurs valides</li>
                        <li>Ajoutez des liens vers la documentation si nécessaire</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon13/messages-contextuels.gif" 
                    alt="Démonstration des messages d'aide contextuels"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Niveaux d'alerte stratégiques</h4>
                <p className="text-gray-700 mb-4">
                  Choisissez judicieusement entre les trois types d'alertes en fonction 
                  de la criticité de la validation.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-red-200">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-gray-800">Arrêt (Critique)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Pour les données essentielles à l'intégrité du système. 
                      <strong> Exemple :</strong> Codes produits, IDs uniques
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-yellow-200">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-gray-800">Avertissement (Important)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Pour les données importantes mais avec possibilité de dérogation.
                      <strong> Exemple :</strong> Budgets, dates butoirs
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-800">Information (Conseil)</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Pour les bonnes pratiques et recommandations.
                      <strong> Exemple :</strong> Formats d'email, conventions de nommage
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Audit et suivi des erreurs</h4>
                <p className="text-gray-700 mb-4">
                  Mettez en place des systèmes pour identifier et corriger rapidement 
                  les problèmes de validation récurrents.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Formule de détection d'erreurs</h5>
                  <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                    =SI(ESTERREUR(CHERCHE("Invalide",CELLULE("content",A2))), "❌", "✅")
                  </code>
                  <p className="text-sm text-gray-600">
                    Affiche un indicateur visuel pour les cellules avec des erreurs de validation
                  </p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon13/audit-validation.png" 
                  alt="Tableau de bord d'audit des validations"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Intégration avec TCD et Tables */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('integration')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            4. Intégration avec Tableaux Croisés Dynamiques
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
                <Database className="w-6 h-6 text-teal-600" />
                Cohérence entre Saisie et Analyse
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Validation basée sur les TCD</h4>
                  <p className="text-gray-700 mb-4">
                    Utilisez les résultats de vos tableaux croisés dynamiques comme source 
                    pour vos validations, garantissant la cohérence entre saisie et analyse.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border-2 border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Source dynamique depuis TCD</h5>
                      <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                        =DECALER(TCD_Categories!$A$3,0,0,NBVAL(TCD_Categories!$A:$A)-2,1)
                      </code>
                      <p className="text-sm text-gray-600">
                        Crée une liste basée sur les catégories d'un tableau croisé dynamique
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-blue-600" />
                        Bonne Pratique : Structuration des données
                      </h5>
                      <p className="text-blue-700 text-sm">
                        Avant de créer un tableau croisé dynamique, assurez-vous que vos données 
                        sont bien structurées avec des en-têtes clairs et sans lignes vides :cite[1]:cite[7]. 
                        Cela garantira des validations fiables et cohérentes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon13/integration-tcd.gif" 
                    alt="Intégration entre validation et tableaux croisés dynamiques"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Tables Excel structurées</h4>
                <p className="text-gray-700 mb-4">
                  Utilisez les tables Excel pour créer des systèmes de validation 
                  automatiquement extensibles.
                </p>
                
                <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Avantages des tables structurées</h5>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Extensions automatiques des plages de validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Noms de colonnes stables dans les formules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Mise à jour automatique des tableaux croisés dynamiques :cite[1]</span>
                    </li>
                  </ul>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon13/table-structuree.png" 
                  alt="Exemple de table Excel structurée pour validation"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Actualisation des validations</h4>
                <p className="text-gray-700 mb-4">
                  Gérez efficacement l'actualisation des validations lorsque vos données sources évoluent.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Macro d'actualisation</h5>
                    <code className="block text-sm bg-gray-100 p-3 rounded-lg mb-2">
                      Sub ActualiserValidations()<br />
                      &nbsp;&nbsp;ActiveSheet.Calculate<br />
                      &nbsp;&nbsp;MsgBox "Validations actualisées"<br />
                      End Sub
                    </code>
                    <p className="text-sm text-gray-600">
                      Force l'actualisation des formules et validations
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-green-600" />
                      Rappel : Actualisation des TCD
                    </h5>
                    <p className="text-green-700 text-sm">
                      N'oubliez pas d'actualiser vos tableaux croisés dynamiques après avoir modifié 
                      les données sources :cite[1]. Cliquez droit → Actualiser ou utilisez le ruban 
                      Analyse de tableau croisé dynamique.
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
            Exercice Pratique : Système de Gestion Commerciale
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
                Mission : Créer un Système de Validation Complet
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Scénario Entreprise Réel</h4>
                  <p className="text-gray-700 mb-4">
                    Vous êtes responsable de la qualité des données dans une PME. Créez un système 
                    de validation complet pour le module de saisie des commandes clients.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-green-200">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Durée estimée</p>
                        <p className="text-sm text-gray-600">60-90 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-blue-200">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">Niveau de difficulté</p>
                        <p className="text-sm text-gray-600">Intermédiaire-Avancé</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon13/systeme-complet.png" 
                    alt="Aperçu du système de validation complet à créer"
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
                    Formulaire de Commande Client
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Liste dépendante Client → Contact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Validation de date : commande ≥ aujourd'hui</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Référence produit avec RECHERCHEV()</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Contrôles Métiers Avancés
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Quantité ≤ stock disponible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Remise % selon segment client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Conditions de livraison cohérentes</span>
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
                    Intégration TCD
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Listes basées sur les catégories TCD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Validation cohérente avec l'analyse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Messages contextuels selon les données</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-red-100">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    Gestion des Erreurs
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Tableau de bord d'audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Messages d'erreur guidés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>Système de logging des rejets</span>
                    </li>
                  </ul>
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
                  Téléchargez le fichier avec la structure de base et les données :
                </p>
                <a href="/cours/intermediaire/Lecon13/exercice-systeme-complet.xlsx" 
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
                  url="/cours/intermediaire/Lecon13/correction-systeme-complet.mp4"
                  title="Correction du système de validation avancée"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon13 onResult={onResult} />
      </div>
    </div>
  );
}