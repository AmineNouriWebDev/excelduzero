import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon34 from "../../quizz/intermediaire/QuizLecon34";
import PremiumVideo from "../../ui/PremiumVideo";
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  BarChart3,
  Settings,
  Play,
  Download,
  FileText,
  Target,
  Clock,
  Users,
  Zap,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Puzzle
} from "lucide-react";

export default function Lecon34({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    presentation: true,
    objectifs: true,
    preparation: true,
    etape1: true,
    etape2: true,
    etape3: true,
    etape4: true,
    finalisation: true
  });

  const [currentStep, setCurrentStep] = useState(0);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const steps = [
    { name: "Préparation des données", duration: "20 min" },
    { name: "Structure du tableau de bord", duration: "25 min" },
    { name: "Création des graphiques", duration: "30 min" },
    { name: "Interactivité et contrôles", duration: "25 min" }
  ];

  return (
    <div className="max-w-7xl mx-auto p-0 bg-white">
      {/* En-tête spécial TP avec dégradé ORANGE/VIOLET */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-600 to-purple-600 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm md:text-base mb-2">
                  <Puzzle className="w-4 h-4" />
                  <span>TRAVAUX PRATIQUES - SYNTHÈSE INTERMÉDIAIRE</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold break-words">Création d'un Tableau de Bord Interactif</h1>
                <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Mettez en pratique toutes vos compétences acquises</p>
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
              TP 34 - Niveau Intermédiaire
            </div>
          </div>
          
          {/* Indicateurs du TP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Clock className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Durée: 2h</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">4 Étapes Guidées</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">15+ Fonctions Utilisées</p>
            </div>
            <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
              <Trophy className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
              <p className="font-semibold text-sm md:text-base">Projet Complet</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de progression des étapes */}
      <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Play className="w-5 h-5 text-orange-500" />
          Parcours du TP
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                currentStep === index 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === index ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">{step.name}</p>
                  <p className="text-xs text-gray-500">{step.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Présentation du TP */}
      <div className="border-2 border-orange-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('presentation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            Présentation du Projet
          </h2>
          {expandedSections.presentation ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.presentation && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Objectif Final</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    Créer un <strong>tableau de bord de vente interactif</strong> qui permet de suivre les performances commerciales avec des filtres dynamiques, des graphiques interactifs et des indicateurs clés en temps réel.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl">📊</div>
                      <p className="text-sm font-semibold">4 Graphiques</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl">🎛️</div>
                      <p className="text-sm font-semibold">3 Contrôles</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl">📈</div>
                      <p className="text-sm font-semibold">6 KPI</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl">⚡</div>
                      <p className="text-sm font-semibold">Temps Réel</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">🏆 Ce que vous allez accomplir</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Un tableau de bord professionnel réutilisable</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Maîtrise des contrôles de formulaire Excel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Compétences en visualisation de données</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Automatisation des rapports</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon34/final-result-preview.png"
                  alt="Aperçu du tableau de bord final à créer"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5 text-blue-500" />
                    Ressources du TP
                  </h4>
                  <div className="space-y-3">
                    <a href="/cours/intermediaire/Lecon34/donnees-depart.xlsx" 
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Données de départ</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </a>
                    
                    <a href="/cours/intermediaire/Lecon34/modele-tableau-bord.xlsx" 
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Modèle vierge</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </a>
                    
                    <PremiumVideo
                      url="/cours/intermediaire/Lecon34/demonstration-tp.mp4"
                      title="Démonstration complète du tableau de bord"
                      duration="15:30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Objectifs pédagogiques */}
      <div className="border-2 border-purple-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-violet-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('objectifs')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            Compétences Mobilisées
          </h2>
          {expandedSections.objectifs ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.objectifs && (
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Toutes les fonctionnalités intermédiaires en pratique</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Logique conditionnelle */}
              <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Logique Conditionnelle</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    SI imbriqués pour les segments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ET/OU pour les filtres multiples
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    SIERREUR pour gérer les vides
                  </li>
                </ul>
              </div>

              {/* Recherche & Références */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Recherche & Références</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    RECHERCHEV pour les données produits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    INDEX/EQUIV dynamiques
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    Noms de plages structurés
                  </li>
                </ul>
              </div>

              {/* Tableaux & Analyse */}
              <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Tableaux & Analyse</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    Tableaux croisés dynamiques
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    SOMME.SI.ENS multi-critères
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    Sous-totaux automatiques
                  </li>
                </ul>
              </div>

              {/* Graphiques & Visuel */}
              <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Graphiques & Visuel</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    Graphiques combinés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    Sparklines pour les tendances
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    Mise en forme conditionnelle
                  </li>
                </ul>
              </div>

              {/* Contrôles & Interactivité */}
              <div className="bg-white rounded-2xl border-2 border-red-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Contrôles & Interactivité</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Listes déroulantes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Curseurs et boutons
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    Validation de données
                  </li>
                </ul>
              </div>

              {/* Autres Fonctions */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-gray-800">Autres Fonctions</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    Fonctions texte avancées
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    Dates et calculs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    Consolidation de données
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Étape 1: Préparation des données */}
      <div className="border-2 border-blue-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('etape1')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <div className="w-6 h-6 text-blue-600 font-bold">1</div>
            </div>
            Étape 1: Préparation des Données
          </h2>
          {expandedSections.etape1 ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.etape1 && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Structuration de la Base de Données</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1.1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Importer les données</h4>
                        <p className="text-gray-600 text-sm">Utilisez le fichier "donnees-depart.xlsx" fourni</p>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mt-2">
                          Données → À partir d'un fichier → Excel
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1.2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Créer un tableau Excel</h4>
                        <p className="text-gray-600 text-sm">Convertir la plage en tableau structuré</p>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mt-2">
                          Ctrl + T → "Mon tableau a des en-têtes"
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-800 rounded-lg px-3 py-1 font-semibold text-sm mt-1">1.3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Ajouter des colonnes calculées</h4>
                        <p className="text-gray-600 text-sm">Marge, Segment, Période</p>
                        <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm mt-2">
                          =[@Prix_Vente]-[@Cout_Production]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">💡 Bonnes Pratiques</h4>
                  <div className="space-y-2 text-sm">
                    <p>✅ Utilisez des noms de plages pour les zones importantes</p>
                    <p>✅ Vérifiez l'absence de doublons avec SUPPRESSDOUBLONS</p>
                    <p>✅ Appliquez une mise en forme conditionnelle pour les valeurs aberrantes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon34/etape1-tableau-donnees.png"
                  alt="Structure du tableau de données préparé"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">🔍 Vérifications à Effectuer</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Aucune cellule vide dans les colonnes clés</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Formats de date cohérents</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Calculs de marge validés</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Étape 2: Structure du tableau de bord */}
      <div className="border-2 border-green-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('etape2')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <div className="w-6 h-6 text-green-600 font-bold">2</div>
            </div>
            Étape 2: Structure et KPI
          </h2>
          {expandedSections.etape2 ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.etape2 && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Calcul des Indicateurs Clés</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Chiffre d'Affaires Total</h4>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        {'=SOMME.SI.ENS(Tableau_Ventes[CA], Tableau_Ventes[Date], ">="&DATE_DEBUT, Tableau_Ventes[Date], "<="&DATE_FIN)'}
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Marge Moyenne</h4>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =MOYENNE.SI.ENS(Tableau_Ventes[Marge], Tableau_Ventes[Region], REGION_CHOISIE)
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Top Produit</h4>
                      <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                        =INDEX(Produits, EQUIV(MAX(SOMME.SI.ENS(CA, Produits, Produits)), SOMME.SI.ENS(CA, Produits, Produits), 0))
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">🎯 KPI à Implémenter</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>• CA Total</div>
                    <div>• Marge Brute</div>
                    <div>• Quantités Vendues</div>
                    <div>• Panier Moyen</div>
                    <div>• Top Vente</div>
                    <div>• Taux Croissance</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon34/etape2-structure-kpi.png"
                  alt="Mise en page des KPI dans le tableau de bord"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">⚡ Techniques Avancées</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-sm">Formules Array Dynamiques</h5>
                      <p className="text-xs text-gray-600">Utilisez UNIQUE et FILTER pour des listes dynamiques</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-sm">Mise en forme conditionnelle</h5>
                      <p className="text-xs text-gray-600">Barres de données pour visualiser les performances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Étape 3: Création des graphiques */}
      <div className="border-2 border-purple-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-violet-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('etape3')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <div className="w-6 h-6 text-purple-600 font-bold">3</div>
            </div>
            Étape 3: Visualisation des Données
          </h2>
          {expandedSections.etape3 ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.etape3 && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Graphiques à Créer</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">1. Évolution du CA (Courbe)</h4>
                      <p className="text-sm text-gray-600">Suivi mensuel avec courbe de tendance</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">2. Répartition par Produit (Camembert)</h4>
                      <p className="text-sm text-gray-600">Avec pourcentages et légende interactive</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">3. Performance Régions (Histogramme)</h4>
                      <p className="text-sm text-gray-600">Comparaison visuelle avec couleurs conditionnelles</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">4. Sparklines de Tendances</h4>
                      <p className="text-sm text-gray-600">Mini-graphiques en ligne pour vue d'ensemble</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">🎨 Personnalisation Avancée</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Utilisez une palette de couleurs cohérente</p>
                    <p>• Ajoutez des titres dynamiques avec CONCATENER</p>
                    <p>• Configurez les axes secondaires pour les comparaisons</p>
                    <p>• Utilisez les étiquettes de données intelligentes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon34/etape3-graphiques.png"
                  alt="Exemple des graphiques à créer"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">🔗 Données Dynamiques</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Utilisez des plages dynamiques nommées avec DECALER pour que vos graphiques s'adaptent automatiquement aux nouvelles données.
                    </p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                      =DECALER(Feuille1!$A$1,0,0,NBVAL(Feuille1!$A:$A),1)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Étape 4: Interactivité et contrôles */}
      <div className="border-2 border-orange-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('etape4')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <div className="w-6 h-6 text-orange-600 font-bold">4</div>
            </div>
            Étape 4: Interactivité et Finalisation
          </h2>
          {expandedSections.etape4 ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.etape4 && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎛️ Contrôles de Formulaire</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Liste déroulante Régions</h4>
                      <p className="text-sm text-gray-600">Développeur → Insérer → Liste déroulante</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Curseur Période</h4>
                      <p className="text-sm text-gray-600">Contrôle de défilement pour naviguer dans le temps</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Boutons Option Produits</h4>
                      <p className="text-sm text-gray-600">Boutons radio pour filtrer par catégorie</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">⚡ Automatisation</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Configurez les liens de cellules pour chaque contrôle</p>
                    <p>• Utilisez ces cellules dans vos formules SI et RECHERCHEV</p>
                    <p>• Testez tous les filtres et interactions</p>
                    <p>• Protégez la feuille (sauf les cellules d'entrée)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon34/etape4-controles.png"
                  alt="Configuration des contrôles de formulaire"
                  className="rounded-xl shadow-lg border-2 border-white"
                />
                
                <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">✅ Checklist de Finalisation</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Tous les graphiques s'actualisent avec les filtres</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Les KPI affichent les bonnes valeurs filtrées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Aucune erreur #N/A ou #VALEUR visible</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Mise en page professionnelle et lisible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Finalisation */}
      <div className="border-2 border-gray-200 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-gray-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 text-left hover:from-gray-100 transition-all"
          onClick={() => toggleSection('finalisation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Trophy className="w-6 h-6 text-blue-600" />
            </div>
            Finalisation et Prochaines Étapes
          </h2>
          {expandedSections.finalisation ? 
            <ChevronUp className="w-6 h-6 text-blue-600" /> : 
            <ChevronDown className="w-6 h-6 text-blue-600" />
          }
        </button>
        
        {expandedSections.finalisation && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎉 Félicitations !</h3>
                  <p className="text-gray-700 mb-4">
                    Vous venez de créer un tableau de bord interactif professionnel qui combine toutes les compétences du niveau intermédiaire. Ce projet démontre votre maîtrise d'Excel pour l'analyse de données et la création de rapports dynamiques.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                    <h4 className="font-bold mb-2">📊 Votre Tableau de Bord Inclut</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Filtres dynamiques</div>
                      <div>• Graphiques interactifs</div>
                      <div>• KPI en temps réel</div>
                      <div>• Mise à jour automatique</div>
                      <div>• Interface utilisateur</div>
                      <div>• Calculs avancés</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-purple-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">🚀 Pour Aller Plus Loin</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-sm">Power Query</h5>
                      <p className="text-xs text-gray-600">Automatisez l'import et le nettoyage des données</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-sm">Macros VBA</h5>
                      <p className="text-xs text-gray-600">Ajoutez des boutons d'export PDF automatique</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-sm">Power Pivot</h5>
                      <p className="text-xs text-gray-600">Gérez des millions de lignes de données</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-4">📋 Prochain Défi: Niveau Avancé</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>Power Query et modélisation de données</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>DAX et formules avancées</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>Tableaux de bord Power BI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>Automatisation complète avec VBA</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-orange-200 p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">💾 Sauvegardez Votre Projet</h4>
                  <div className="space-y-3">
                    <a href="/cours/intermediaire/Lecon34/modele-final.xlsx" 
                      className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold">Télécharger le modèle final</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-orange-600" />
                    </a>
                    
                    <p className="text-sm text-gray-600">
                      Comparez votre solution avec le modèle de référence et notez les différences pour améliorer vos compétences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon34 onResult={onResult} />
      </div>
      {/* Section de félicitations */}
<div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl p-8 text-center text-white mb-8">
  <div className="max-w-2xl mx-auto">
    <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
    <h3 className="text-2xl md:text-3xl font-bold mb-4">Félicitations !</h3>
    <p className="text-lg mb-6">
      Vous avez terminé toutes les leçons du niveau intermédiaire d'Excel. Vous maîtrisez désormais 
      les fonctionnalités avancées pour analyser et visualiser vos données comme un professionnel.
    </p>

    <Link
      href="/cours/avance"
      className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <span>Commencer le niveau avancé</span>
      <ArrowRight className="w-5 h-5" />
    </Link>

  </div>
</div>
    </div>
  );
}