import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon12 from "../../quizz/intermediaire/QuizLecon12";
import {
  LayoutDashboard,
  Database,
  Table,
  BarChart3,
  Filter,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Lightbulb,
  AlertTriangle,
  MoveRight,
  Download,
  GanttChart,
  TrendingUp,
  PieChart
} from "lucide-react";

export default function Lecon12({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    preparation: true,
    donnees: true,
    pivots: true,
    graphiques: true,
    interactivite: true,
    finalisation: true
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
    <div className="bg-gradient-to-r from-blue-600 via-green-600 to-teal-500 rounded-2xl p-6 md:p-8 mb-8 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
      <div className="flex items-start gap-4">
        <div className="bg-white/20 p-2 md:p-3 rounded-xl flex-shrink-0">
          <LayoutDashboard className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-4xl font-bold break-words">Tableaux de Bord Simples</h1>
          <p className="text-base md:text-xl opacity-90 mt-1 md:mt-2 break-words">Transformer des données brutes en insights actionnables</p>
        </div>
      </div>
      <div className="bg-white/20 rounded-xl px-4 py-2 md:px-6 md:py-3 text-base md:text-lg font-semibold self-start md:self-auto">
        Leçon 12 - Niveau Intermédiaire
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Table className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">TCD & Graphiques</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Filter className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Segments Interactifs</p>
      </div>
      <div className="bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm">
        <Zap className="w-5 h-5 md:w-6 md:h-6 mb-1 md:mb-2" />
        <p className="font-semibold text-sm md:text-base">Mise à Jour Automatique</p>
      </div>
    </div>
  </div>
</div>

      {/* Section 1 : Introduction et Principes */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-blue-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 text-left hover:from-blue-100 transition-all"
          onClick={() => toggleSection('introduction')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl">
              <LayoutDashboard className="w-6 h-6 text-blue-600" />
            </div>
            1. Introduction aux Tableaux de Bord Excel
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Qu'est-ce qu'un tableau de bord ?</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Un tableau de bord est une représentation visuelle qui synthétise vos données les plus importantes en un seul endroit, vous permettant de surveiller et d'analyser la performance de votre activité en un coup d'œil 
                  .
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Centralisation</h4>
                      <p className="text-gray-600 text-sm">Tous vos indicateurs clés (KPI) au même endroit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Visualisation</h4>
                      <p className="text-gray-600 text-sm">Des graphiques pour comprendre rapidement les tendances</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Interactivité</h4>
                      <p className="text-gray-600 text-sm">Filtrez les données pour explorer différents scénarios</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/tableau-dashboard-exemple.png" 
                  alt="Exemple d'un tableau de bord Excel simple et professionnel"
                  className="rounded-xl shadow-2xl border-2 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                  <a href="/cours/intermediaire/Lecon12/modele-donnees-initiales.xlsx" 
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger les Données Initiales
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                Avant de commencer : Questions à se poser
              </h4>
              <p className="text-blue-700 mb-2">Un bon tableau de bord répond à des objectifs clairs  :</p>
              <ul className="text-blue-700 list-disc list-inside space-y-1">
                <li>Qui est mon public ? (collègue, responsable, direction...)</li>
                <li>Quels sont les indicateurs les plus importants à suivre ?</li>
                <li>À quelle fréquence les données doivent-elles être mises à jour ?</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Section 2 : Préparation de l'Environnement de Travail */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-green-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-left hover:from-green-100 transition-all"
          onClick={() => toggleSection('preparation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl">
              <GanttChart className="w-6 h-6 text-green-600" />
            </div>
            2. Préparation de l'Environnement de Travail
          </h2>
          {expandedSections.preparation ? 
            <ChevronUp className="w-6 h-6 text-green-600" /> : 
            <ChevronDown className="w-6 h-6 text-green-600" />
          }
        </button>
        
        {expandedSections.preparation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Structuration du Classeur</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Organisation en Onglets</h4>
                  <p className="text-gray-700 mb-4">
                    Une organisation claire est la base d'un tableau de bord réussi et facile à maintenir .
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-blue-200">
                      <Database className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">Onglet "Données"</p>
                        <p className="text-xs text-gray-600">Contient les données brutes et sources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-green-200">
                      <Table className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">Onglet "Analyse"</p>
                        <p className="text-xs text-gray-600">Accueille les TCD et calculs intermédiaires</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-purple-200">
                      <LayoutDashboard className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-800">Onglet "Tableau de Bord"</p>
                        <p className="text-xs text-gray-600">Espace de présentation final avec graphiques</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon12/structure-classeur.png" 
                    alt="Capture d'écran montrant les trois onglets du classeur"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                Bonne Pratique Essentielle
              </h4>
              <p className="text-green-700">
                <strong>Utilisez des Tableaux Excel</strong> pour votre source de données. Cela permet aux plages de données de s'ajuster automatiquement lorsque vous ajoutez de nouvelles lignes, ce qui facilitera grandement les mises à jour de votre tableau de bord .
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 : Préparation des Données */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-purple-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 text-left hover:from-purple-100 transition-all"
          onClick={() => toggleSection('donnees')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            3. Préparation des Données Sources
          </h2>
          {expandedSections.donnees ? 
            <ChevronUp className="w-6 h-6 text-purple-600" /> : 
            <ChevronDown className="w-6 h-6 text-purple-600" />
          }
        </button>
        
        {expandedSections.donnees && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Transformation en Tableau Structuré</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Étapes Clés</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Sélectionnez vos données brutes</p>
                        <p className="text-sm text-gray-600">Incluez les en-têtes de colonnes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Accédez à "Insérer" &gt; "Tableau"</p>
                        <p className="text-sm text-gray-600">Raccourci : Ctrl + T</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Vérifiez "Mon tableau comporte des en-têtes"</p>
                        <p className="text-sm text-gray-600">Donnez un nom significatif à votre tableau</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon12/creation-tableau-structure.gif" 
                    alt="Animation montrant la création d'un tableau Excel structuré"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-xl">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-purple-600" />
                Vérifications Importantes
              </h4>
              <ul className="text-purple-700 list-disc list-inside space-y-1">
                <li>Aucune ligne ou colonne vide dans les données sources </li>
                <li>Format de dates cohérent dans toute la colonne</li>
                <li>Pas de cellules fusionnées dans la plage de données</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 : Création des Tableaux Croisés Dynamiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-orange-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-orange-50 to-red-50 text-left hover:from-orange-100 transition-all"
          onClick={() => toggleSection('pivots')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Table className="w-6 h-6 text-orange-600" />
            </div>
            4. Création des Tableaux Croisés Dynamiques (TCD)
          </h2>
          {expandedSections.pivots ? 
            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
            <ChevronDown className="w-6 h-6 text-orange-600" />
          }
        </button>
        
        {expandedSections.pivots && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Premier TCD : Analyse des Ventes par Catégorie</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Configuration des Champs</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">Lignes : Catégorie de produit</p>
                        <p className="text-xs text-gray-600">Élément de regroupement principal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <MoveRight className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">Valeurs : Chiffre d'affaires</p>
                        <p className="text-xs text-gray-600">Somme ou moyenne selon le besoin</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Mise en Forme du TCD</h4>
                    <p className="text-gray-700 mb-4">
                      Appliquez une mise en forme professionnelle pour rendre le tableau plus lisible.
                    </p>
                    <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                      <li>Choisissez un style clair et épuré</li>
                      <li>Ajustez les formats de nombres (devise, pourcentage)</li>
                      
                    </ul>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon12/creation-premier-tcd.gif" 
                    alt="Animation de la création du premier TCD"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Deuxième TCD : Évolution Temporelle</h4>
                <p className="text-gray-700 mb-4">
                  Créez un deuxième TCD pour analyser l'évolution des ventes dans le temps.
                </p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <p>→ <strong>Lignes</strong> : Date (regroupement par années et trimestres)</p>
                  <p>→ <strong>Valeurs</strong> : Chiffre d'affaires</p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/tcd-evolution-temporelle.gif" 
                  alt="Capture du TCD d'évolution temporelle"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Nommer les TCD</h4>
                <p className="text-gray-700 mb-4">
                  Donnez des noms explicites à vos TCD pour mieux vous y retrouver .
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <code className="text-sm text-gray-800">
                    Analyse &gt; Nom du tableau croisé dynamique
                  </code>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/nommage-tcd.gif" 
                  alt="Capture montrant où renommer un TCD"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 : Création des Graphiques Croisés Dynamiques */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-teal-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-teal-50 to-green-50 text-left hover:from-teal-100 transition-all"
          onClick={() => toggleSection('graphiques')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-teal-100 p-3 rounded-xl">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            5. Transformation en Graphiques Croisés Dynamiques
          </h2>
          {expandedSections.graphiques ? 
            <ChevronUp className="w-6 h-6 text-teal-600" /> : 
            <ChevronDown className="w-6 h-6 text-teal-600" />
          }
        </button>
        
        {expandedSections.graphiques && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Choisir le Bon Type de Graphique</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border-2 border-blue-200 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Graphique en Colonnes</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Idéal pour comparer des catégories
                  </p>
                  <p className="text-xs text-gray-500">Utilisation : Ventes par catégorie</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-green-200 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Graphique en Ligne</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Parfait pour les tendances dans le temps
                  </p>
                  <p className="text-xs text-gray-500">Utilisation : Évolution mensuelle</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-2 border-purple-200 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <PieChart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">Graphique en Secteurs</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Montre les proportions d'un tout
                  </p>
                  <p className="text-xs text-gray-500">Utilisation : Répartition du CA</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Création du Graphique</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Cliquez sur une cellule du TCD</p>
                      <p className="text-sm text-gray-600">Assurez-vous que le TCD est sélectionné</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                    <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Accédez à "Analyse" &gt; "Graphique croisé dynamique"</p>
                      <p className="text-sm text-gray-600">Choisissez le type de graphique adapté</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Personnalisez la mise en forme</p>
                      <p className="text-sm text-gray-600">Titre, couleurs, légendes, étiquettes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/creation-graphique-tcd.gif" 
                  alt="Animation de la création d'un graphique croisé dynamique"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-xl">
              <h4 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-teal-600" />
                Conseil de Pro : Organisation
              </h4>
              <p className="text-teal-700">
                Créez tous vos TCD et graphiques dans l'onglet "Analyse". Vous les déplacerez vers l'onglet "Tableau de Bord" une fois finalisés. Cela permet de garder un espace de travail propre et organisé .
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Section 6 : Ajout de l'Interactivité avec les Segments */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-pink-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-pink-50 to-rose-50 text-left hover:from-pink-100 transition-all"
          onClick={() => toggleSection('interactivite')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-pink-100 p-3 rounded-xl">
              <Filter className="w-6 h-6 text-pink-600" />
            </div>
            6. Interactivité : Ajout des Segments (Slicers)
          </h2>
          {expandedSections.interactivite ? 
            <ChevronUp className="w-6 h-6 text-pink-600" /> : 
            <ChevronDown className="w-6 h-6 text-pink-600" />
          }
        </button>
        
        {expandedSections.interactivite && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Création et Configuration des Segments</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Insertion des Segments</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Sélectionnez un TCD</p>
                        <p className="text-sm text-gray-600">Le TCD auquel vous voulez lier le segment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Accédez à "Analyse" &gt; "Insérer un segment"</p>
                        <p className="text-sm text-gray-600">Choisissez les champs pour filtrer (ex: Région)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Connectez le segment aux autres TCD</p>
                        <p className="text-sm text-gray-600">Clic droit &gt; Connexions du segment &gt; Cochez tous les TCD</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon12/insertion-segments.gif" 
                    alt="Animation montrant l'insertion et la connexion des segments"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Personnalisation des Segments</h4>
                <p className="text-gray-700 mb-4">
                  Améliorez l'apparence de vos segments pour qu'ils s'intègrent parfaitement à votre tableau de bord.
                </p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <p>→ <strong>Style</strong> : Choisissez un design moderne et cohérent</p>
                  <p>→ <strong>Taille</strong> : Ajustez la hauteur et le nombre de colonnes</p>
                  <p>→ <strong>Couleurs</strong> : Harmonisez avec la charte graphique de votre dashboard</p>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/personnalisation-segments.gif" 
                  alt="Capture des options de personnalisation des segments"
                  className="rounded-xl shadow-lg mt-4"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Test de l'Interactivité</h4>
                <p className="text-gray-700 mb-4">
                  Vérifiez que tous vos segments fonctionnent correctement et filtrent bien l'ensemble de vos graphiques.
                </p>
                
                <div className="bg-white p-4 rounded-lg border mb-4">
                  <p className="text-sm font-medium text-gray-800 mb-2">Scénario de test :</p>
                  <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                    <li>Cliquez sur une région dans le segment "Région"</li>
                    <li>Vérifiez que tous les graphiques se mettent à jour</li>
                    <li>Testez plusieurs combinaisons de filtres</li>
                  </ul>
                </div>
                
                <ImageZoomable 
                  src="/cours/intermediaire/Lecon12/test-interactivite.gif" 
                  alt="Animation montrant le test des segments sur les graphiques"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section 7 : Assemblage et Finalisation du Tableau de Bord */}
      <div className="border-2 border-gray-100 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-white to-indigo-50/30">
        <button 
          className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-blue-50 text-left hover:from-indigo-100 transition-all"
          onClick={() => toggleSection('finalisation')}
        >
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
            </div>
            7. Assemblage et Finalisation du Tableau de Bord
          </h2>
          {expandedSections.finalisation ? 
            <ChevronUp className="w-6 h-6 text-indigo-600" /> : 
            <ChevronDown className="w-6 h-6 text-indigo-600" />
          }
        </button>
        
        {expandedSections.finalisation && (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Organisation des Éléments sur l'Onglet Final</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Étapes d'Assemblage</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Copiez les graphiques depuis l'onglet "Analyse"</p>
                        <p className="text-sm text-gray-600">Collez-les dans l'onglet "Tableau de Bord"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Disposez les éléments de façon logique</p>
                        <p className="text-sm text-gray-600">Segments à gauche ...</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
                      <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Ajoutez des titres et annotations</p>
                        <p className="text-sm text-gray-600">Clarté et contexte pour l'utilisateur</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageZoomable 
                    src="/cours/intermediaire/Lecon12/assemblage-final.gif" 
                    alt="Animation montrant l'assemblage final du tableau de bord"
                    className="rounded-xl shadow-lg border-2 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Touches Finales de Mise en Forme</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Harmonisez les couleurs</p>
                      <p className="text-xs text-gray-600">Utilisez une palette cohérente sur tous les graphiques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Alignez parfaitement les éléments</p>
                      <p className="text-xs text-gray-600">Utilisez les outils d'alignement d'Excel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Supprimez le quadrillage de la feuille</p>
                      <p className="text-xs text-gray-600">Affichage &gt; Afficher &gt; Décocher "Quadrillage"</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Test Complet du Tableau de Bord</h4>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800 mb-1">Fonctionnalité des segments</p>
                    <p className="text-xs text-gray-600">Tous les graphiques se mettent-ils à jour ?</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800 mb-1">Lisibilité générale</p>
                    <p className="text-xs text-gray-600">Les informations sont-elles claires au premier coup d'œil ?</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="font-medium text-gray-800 mb-1">Espacement et alignement</p>
                    <p className="text-xs text-gray-600">La disposition est-elle équilibrée et professionnelle ?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600" />
                Félicitations ! Vous avez créé votre premier tableau de bord Excel
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Download className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Fichier d'exemple</p>
                  <p className="text-xs text-gray-600">Téléchargez le tableau de bord final pour référence</p>
                  <a href="/cours/intermediaire/Lecon12/modele-tableau-dashboard-simple.xlsx" 
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm mt-2">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger le Modèle
                  </a>
                </div>
                
                <div className="text-center p-4 bg-white rounded-lg">
                  <MoveRight className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Prochain TP </p>
                  <p className="text-xs text-gray-600">Dans la leçon 34 : Tableaux de bord interactifs avancés</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon12 onResult={onResult} />
      </div>
    </div>
  );
}