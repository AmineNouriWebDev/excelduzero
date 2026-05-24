import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon18 from "../../quizz/debutant/QuizLecon18";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Table2, 
  LayoutList, 
  Columns, 
  ArrowDownUp, 
  Filter, 
  Plus, 
  ArrowDown, 
  ArrowUp, 
  Type, 
  Hash, 
  Calendar, 
  Palette, 
  ListOrdered, 
  Check, 
  X, 
  Lightbulb, 
  Target, 
  MoveRight, 
  BookOpen, 
  Download, 
  Video, 
  ArrowRight,
  BarChart2,
  Trash2,
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function Lecon18({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    creation: true,
    gestion: true,
    tri: true,
    avance: true,
    exercice: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-3 md:p-4 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl px-4 py-4 md:p-6 md:rounded-lg rounded-none mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg md:text-3xl font-bold flex items-center gap-3">
              <Table2 className="w-8 h-8" />
              Les Tableaux dans Microsoft Excel
            </h1>
            <p className="mt-2 opacity-90">Formation niveau débutant - Excel 2016 et versions ultérieures</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
            Leçon 18
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-blue-50 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <p className="text-gray-700">
            Dans cette leçon, vous apprendrez à créer et utiliser des tableaux structurés dans Excel, 
            une fonctionnalité essentielle pour organiser et analyser vos données efficacement.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
          <p className="text-gray-700 mb-4">
            Les compétences que vous allez acquérir :
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Créer et formater des tableaux Excel</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Gérer et modifier des tableaux</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Utiliser les tris et filtres intégrés</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Ajouter des fonctionnalités avancées comme les totaux</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Convertir un tableau en TCD</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section Introduction */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 text-left"
          onClick={() => toggleSection('intro')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Table2 className="w-5 h-5 text-blue-600" />
            Introduction aux Tableaux Excel
          </h2>
          {expandedSections.intro ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </button>
        
        {expandedSections.intro && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="bg-blue-50 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
              <p className="text-gray-700">
                Les tableaux Excel (appelés aussi "Tableaux structurés") transforment une simple plage de données 
                en structure intelligente et interactive avec des fonctionnalités avancées.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Pourquoi utiliser les tableaux ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mise en forme automatique professionnelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Filtres et tris intégrés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Expansion automatique des données</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Références structurées dans les formules</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/debutant/lecon18/tableau_exemple_intro.png" 
                  alt="Exemple de tableau Excel avec données formatées" 
                  className="rounded-lg border shadow-sm"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Tableau Excel avec en-têtes et mise en forme automatique</p>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Columns className="w-5 h-5 text-blue-600" />
              Anatomie d'un Tableau Excel
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-semibold text-gray-800">🏷️ En-têtes de colonnes</h4>
                  <p className="text-gray-700">Titres descriptifs avec menus déroulants pour tri et filtrage.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h4 className="font-semibold text-gray-800">📊 Zone de données</h4>
                  <p className="text-gray-700">Contient les informations organisées avec mise en forme alternée.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-1">
                  <h4 className="font-semibold text-gray-800">➕ Ligne d'ajout</h4>
                  <p className="text-gray-700">Permet d'ajouter facilement de nouveaux enregistrements.</p>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/debutant/lecon18/anatomie_tableau.png" 
                  alt="Schéma détaillé des composants d'un tableau Excel" 
                  className="rounded-lg border shadow-sm"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Composants d'un tableau Excel</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Création */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-green-50 text-left"
          onClick={() => toggleSection('creation')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Plus className="w-5 h-5 text-green-600" />
            Création d'un Tableau
          </h2>
          {expandedSections.creation ? 
            <ChevronUp className="w-5 h-5 text-green-600" /> : 
            <ChevronDown className="w-5 h-5 text-green-600" />
          }
        </button>
        
        {expandedSections.creation && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-green-600" />
                  Méthode 1 : Via l'onglet Insertion
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    <strong>Sélectionnez la plage de cellules</strong> (incluant les en-têtes)
                  </li>
                  <li className="text-gray-700">
                    Onglet <strong className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded">"Insertion"</strong> → <strong>"Tableau"</strong>
                  </li>
                  <li className="text-gray-700">
                    Cochez <strong>"Mon tableau comporte des en-têtes"</strong>
                  </li>
                  <li className="text-gray-700">
                    Cliquez sur <strong className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded">"OK"</strong>
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/creation_tableau_insertion.gif" 
                    alt="Création d'un tableau via l'onglet Insertion" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-green-600" />
                  Méthode 2 : Via les Styles de tableau
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    <strong>Sélectionnez votre plage de données</strong>
                  </li>
                  <li className="text-gray-700">
                    Onglet <strong className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded">"Accueil"</strong> → <strong>"Mettre sous forme de tableau"</strong>
                  </li>
                  <li className="text-gray-700">
                    Choisissez un style et validez
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/creation_tableau_styles.gif" 
                    alt="Création via les styles de tableau" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Raccourci clavier
                  </h4>
                  <p className="text-gray-700">
                    <strong>Ctrl + L</strong> : Créer un tableau rapidement
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Gestion */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-50 text-left"
          onClick={() => toggleSection('gestion')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <LayoutList className="w-5 h-5 text-purple-600" />
            Gestion et Personnalisation
          </h2>
          {expandedSections.gestion ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </button>
        
        {expandedSections.gestion && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-600" />
                  Personnalisation du Style
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Options de style</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Ligne d'en-tête</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Ligne de total</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Lignes à bandes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon18/personnalisation_tableau.png" 
                      alt="Personnalisation des styles de tableau" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-purple-600" />
                  Redimensionnement du Tableau
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    <strong>Méthode manuelle :</strong> Poignée en bas à droite
                  </li>
                  <li className="text-gray-700">
                    <strong>Méthode précise :</strong> Onglet "Création" → "Redimensionner le tableau"
                  </li>
                  <li className="text-gray-700">
                    <strong>Expansion automatique :</strong> Ajoutez des données adjacentes
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/redimensionnement_tableau.gif" 
                    alt="Redimensionnement d'un tableau" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Tri et Filtres */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-teal-50 text-left"
          onClick={() => toggleSection('tri')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Filter className="w-5 h-5 text-teal-600" />
            Tri et Filtrage des Données
          </h2>
          {expandedSections.tri ? 
            <ChevronUp className="w-5 h-5 text-teal-600" /> : 
            <ChevronDown className="w-5 h-5 text-teal-600" />
          }
        </button>
        
        {expandedSections.tri && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowDownUp className="w-5 h-5 text-teal-600" />
                  Tri Simple (Une colonne)
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Cliquez sur la flèche de l'en-tête
                  </li>
                  <li className="text-gray-700">
                    Choisissez <strong>"Trier de A à Z"</strong> ou <strong>"Trier de Z à A"</strong>
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/tri_simple.gif" 
                    alt="Tri simple dans un tableau" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-teal-600" />
                  Tri Multiple
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Onglet <strong className="bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">"Données"</strong> → <strong>"Trier"</strong>
                  </li>
                  <li className="text-gray-700">
                    Ajoutez plusieurs niveaux de tri
                  </li>
                  <li className="text-gray-700">
                    Définissez l'ordre de priorité
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/tri_multiple.png" 
                    alt="Tri multiple avec plusieurs critères" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-teal-600" />
                  Filtrage Automatique
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ol className="list-decimal pl-6 space-y-3 mb-6">
                      <li className="text-gray-700">
                        Cliquez sur la flèche de l'en-tête
                      </li>
                      <li className="text-gray-700">
                        Décochez "Sélectionner tout"
                      </li>
                      <li className="text-gray-700">
                        Cochez les valeurs à afficher
                      </li>
                    </ol>
                    
                    <div className="bg-teal-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Types de filtres :</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Texte : Contient, Commence par</li>
                        <li>• Nombres : Égal à, Supérieur à</li>
                        <li>• Dates : Aujourd'hui, Ce mois</li>
                        <li>• Couleurs : Cellule ou texte</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/debutant/lecon18/filtrage_automatique.gif" 
                      alt="Filtrage automatique" 
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Fonctionnalités Avancées */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-indigo-50 text-left"
          onClick={() => toggleSection('avance')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            Fonctionnalités Avancées
          </h2>
          {expandedSections.avance ? 
            <ChevronUp className="w-5 h-5 text-indigo-600" /> : 
            <ChevronDown className="w-5 h-5 text-indigo-600" />
          }
        </button>
        
        {expandedSections.avance && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Hash className="w-5 h-5 text-indigo-600" />
                  Ligne de Total
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Onglet <strong className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">"Création"</strong> → Cochez <strong>"Ligne de total"</strong>
                  </li>
                  <li className="text-gray-700">
                    Choisissez la fonction dans chaque colonne
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/ligne_total.png" 
                    alt="Ligne de total dans un tableau" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-indigo-600" />
                  Supprimer les Doublons
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Onglet <strong className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">"Création"</strong> → <strong>"Supprimer les doublons"</strong>
                  </li>
                  <li className="text-gray-700">
                    Sélectionnez les colonnes à vérifier
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon18/supprimer_doublons.gif" 
                    alt="Suppression des doublons" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-indigo-600" />
                  Convertir en Tableau Croisé Dynamique
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3">
                  <li className="text-gray-700">
                    Sélectionnez le tableau
                  </li>
                  <li className="text-gray-700">
                    Onglet <strong className="bg-indigo-100 text-indigo-800 px-1.5 py-0.5 rounded">"Création"</strong> → <strong>"Tableau croisé dynamique"</strong>
                  </li>
                </ol>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-6">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Bonnes pratiques
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Utilisez des noms significatifs pour vos tableaux</li>
                  <li>• Évitez les cellules vides dans les colonnes clés</li>
                  <li>• Utilisez les références structurées dans vos formules</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-50 text-left"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Target className="w-5 h-5 text-orange-600" />
            Exercice Pratique
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-5 h-5 text-orange-600" /> : 
            <ChevronDown className="w-5 h-5 text-orange-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Gestion d'une Liste d'Employés
              </h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 font-semibold">Nom</th>
                      <th className="border p-2 font-semibold">Prénom</th>
                      <th className="border p-2 font-semibold">Service</th>
                      <th className="border p-2 font-semibold">Poste</th>
                      <th className="border p-2 font-semibold">Salaire</th>
                      <th className="border p-2 font-semibold">Date d'embauche</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-2">Martin</td><td className="border p-2">Pierre</td><td className="border p-2">Commercial</td><td className="border p-2">Vendeur</td><td className="border p-2">2800</td><td className="border p-2">15/03/2020</td></tr>
                    <tr><td className="border p-2">Dubois</td><td className="border p-2">Marie</td><td className="border p-2">Comptabilité</td><td className="border p-2">Comptable</td><td className="border p-2">3200</td><td className="border p-2">08/07/2019</td></tr>
                    <tr><td className="border p-2">Lefebvre</td><td className="border p-2">Jean</td><td className="border p-2">IT</td><td className="border p-2">Développeur</td><td className="border p-2">3800</td><td className="border p-2">22/11/2021</td></tr>
                    <tr><td className="border p-2">Moreau</td><td className="border p-2">Sophie</td><td className="border p-2">RH</td><td className="border p-2">Responsable RH</td><td className="border p-2">4200</td><td className="border p-2">10/01/2018</td></tr>
                    <tr><td className="border p-2">Bernard</td><td className="border p-2">Paul</td><td className="border p-2">Commercial</td><td className="border p-2">Chef des ventes</td><td className="border p-2">4500</td><td className="border p-2">05/09/2017</td></tr>
                    <tr><td className="border p-2">Rousseau</td><td className="border p-2">Anne</td><td className="border p-2">IT</td><td className="border p-2">Chef de projet</td><td className="border p-2">4000</td><td className="border p-2">14/06/2020</td></tr>
                  </tbody>
                </table>
              </div>
              
              <div className="border rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Missions :</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li className="text-gray-700">
                    Créez un tableau structuré avec ces données
                  </li>
                  <li className="text-gray-700">
                    Nommez le tableau "Employes"
                  </li>
                  <li className="text-gray-700">
                    Ajoutez une ligne de totaux avec le salaire moyen
                  </li>
                  <li className="text-gray-700">
                    Triez par service (ordre alphabétique)
                  </li>
                  <li className="text-gray-700">
                    Filtrez pour afficher uniquement le service "Commercial"
                  </li>
                  <li className="text-gray-700">
                    Ajoutez un nouvel employé : Laurent Thomas (IT, Technicien, 3100, 01/09/2023)
                  </li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-orange-600" />
                    Fichier d'exercice
                  </h4>
                  <a href="/cours/debutant/lecon18/tableaux_basiques.xlsx" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger (.xlsx)
                  </a>
                </div>
                
                <div className="border rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    Correction vidéo
                  </h4>
                  <PremiumVideo
                    url="/cours/debutant/tableaux/correction_exercice.mp4"
                    title="Correction de l'exercice sur les tableaux"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-8 border-t pt-8">
        <QuizLecon18 onResult={onResult} />
      </div>
    </div>
  );
}