import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon6 from "../../quizz/intermediaire/QuizLecon6";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Table2,
  Code,
  Zap,
  Filter,
  Crosshair,
  ArrowRightLeft,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BookOpen,
  Download,
  Video,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Braces,
  RefreshCw,
  Sliders
} from "lucide-react";

export default function Lecon6({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    avantages: true,
    references: true,
    dynamiques: true,
    formules: true,
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
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-lg md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Sparkles className="w-8 h-8 text-purple-600" />
        Leçon 6 - Tableaux Structurés Avancés : Références Dynamiques et Productivité
      </h2>
      
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon avancée vous révèle la puissance cachée des tableaux structurés Excel. Au-delà de la simple mise en forme, découvrez comment les références structurées et le comportement dynamique transforment vos formules et automatisent vos feuilles de calcul.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon avancée, vous maîtriserez :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">La syntaxe et la logique des références structurées</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">La création de formules dynamiques qui s'adaptent automatiquement</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Les techniques avancées d'intégration avec TCD et autres fonctions</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Les bonnes pratiques pour des tableaux robustes et professionnels</span>
          </li>
        </ul>
      </div>

      {/* SECTION AVANTAGES STRATÉGIQUES */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 text-left"
          onClick={() => toggleSection('avantages')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Zap className="w-5 h-5 text-blue-600" />
            Pourquoi Passer aux Tableaux Structurés en Avancé ?
          </h2>
          {expandedSections.avantages ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </button>
        
        {expandedSections.avantages && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">🔄 Expansion Automatique</h4>
                  <p className="text-gray-700 text-sm">Les formules, mises en forme et plages nommées s'adaptent automatiquement à l'ajout de données.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">📊 Formules Intelligibles</h4>
                  <p className="text-gray-700 text-sm">Les références structurées comme <code>=SOMME(Ventes[Montant])</code> sont bien plus claires que <code>=SOMME(C2:C100)</code>.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">🛡️ Robustesse Accrue</h4>
                  <p className="text-gray-700 text-sm">Plus de risque que vos formules se brisent après l'insertion de colonnes ou l'ajout de lignes.</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                <h5 className="font-semibold text-gray-800 mb-3">Comparaison Avancée</h5>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Avec références classiques :</p>
                    <div className="bg-gray-800 text-red-400 p-2 rounded font-mono text-sm mt-1">
                      =SOMME(C2:C100)
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Se brise si des lignes sont ajoutées au-delà de C100</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Avec références structurées :</p>
                    <div className="bg-gray-800 text-green-400 p-2 rounded font-mono text-sm mt-1">
                      =SOMME(TableVentes[Montant])
                    </div>
                    <p className="text-xs text-gray-600 mt-1">S'adapte automatiquement à la taille réelle des données</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION RÉFÉRENCES STRUCTURÉES */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-green-50 text-left"
          onClick={() => toggleSection('references')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Braces className="w-5 h-5 text-green-600" />
            Maîtriser les Références Structurées
          </h2>
          {expandedSections.references ? 
            <ChevronUp className="w-5 h-5 text-green-600" /> : 
            <ChevronDown className="w-5 h-5 text-green-600" />
          }
        </button>
        
        {expandedSections.references && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-gray-700">
                Les références structurées utilisent le nom de votre tableau et de ses colonnes au lieu des adresses de cellules classiques, rendant vos formules <strong>auto-documentées</strong> et <strong>dynamiques</strong> .
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-600" />
              Syntaxe des Références Structurées
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Composant</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Syntaxe</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exemple</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Colonne simple</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tableau[Colonne]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Toutes les données de la colonne (hors en-tête et total)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Ventes[Montant]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Référence à la ligne courante</td>
                    <td className="px-4 py-3 text-sm text-gray-600">[@Colonne]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Valeur de la colonne sur la même ligne que la formule</td>
                    <td className="px-4 py-3 text-sm text-gray-600">[@Montant]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">En-têtes</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tableau[#En-têtes]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Plage des en-têtes du tableau</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Ventes[#En-têtes]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Données</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tableau[#Données]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Plage des données (hors en-têtes et totaux)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Ventes[#Données]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Totaux</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tableau[#Totaux]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Plage de la ligne des totaux</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Ventes[#Totaux]</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Plage complète</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tableau[#Tout]</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Tout le tableau (en-têtes, données, totaux)</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Ventes[#Tout]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-3">Exemple : Calcul dans le tableau</h5>
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  =[@Montant]*[@Quantité]
                </div>
                <p className="text-sm text-gray-600">
                  À l'intérieur du tableau, le <code>@</code> fait référence à la ligne actuelle.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-3">Exemple : Référence depuis l'extérieur</h5>
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                  =MOYENNE(TableVentes[Montant])
                </div>
                <p className="text-sm text-gray-600">
                  Depuis l'extérieur, référencez toujours le nom du tableau.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                Attention aux caractères spéciaux
              </h5>
                <p className="text-sm text-gray-700">
                Si vos en-têtes de colonnes contiennent des espaces ou caractères spéciaux, utilisez des crochets doubles : <code>=[@[Prix unitaire]]</code> au lieu de <code>=[@Prix unitaire]</code>.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SECTION COMPORTEMENT DYNAMIQUE */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-50 text-left"
          onClick={() => toggleSection('dynamiques')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-purple-600" />
            Exploiter le Comportement Dynamique
          </h2>
          {expandedSections.dynamiques ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </button>
        
        {expandedSections.dynamiques && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Colonnes Calculées Automatiques
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                      <p className="text-sm text-gray-700">
                      <strong>Recopie automatique :</strong> Une formule entrée dans une cellule se propage à toute la colonne.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <p className="text-sm text-gray-700">
                      <strong>Mise à jour automatique :</strong> Les nouvelles lignes héritent automatiquement des formules de la colonne.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <p className="text-sm text-gray-700">
                      <strong>Désactivation possible :</strong> Contrôlez ce comportement via Fichier ▸ Options ▸ Vérification ▸ Options de correction automatique.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Exemple concret</h5>
                  <p className="text-sm text-gray-600 mb-2">Calcul automatique du total par ligne :</p>
                  <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm">
                    =[@Quantité]*[@PrixUnitaires]
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-purple-600" />
                  Ligne des Totaux Intelligente
                </h3>
                
                <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                    La ligne des totaux s'adapte automatiquement aux données visibles lors du filtrage.
                  </p>
                  
                  <div className="bg-gray-800 text-purple-400 p-3 rounded font-mono text-sm">
                    =SOUS.TOTAL(109;[Montant])
                  </div>
                  
                      <p className="text-sm text-gray-700">
                        Les références structurées utilisent le nom de votre tableau et de ses colonnes au lieu des adresses de cellules classiques, rendant vos formules <strong>auto-documentées</strong> et <strong>dynamiques</strong>.
              </p>
                  
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Moyenne, Count, Max, Min disponibles</li>
                    <li>• Personnalisable par colonne</li>
                    <li>• Se déplace automatiquement avec l'ajout de données</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION FORMULES AVANCÉES */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-50 text-left"
          onClick={() => toggleSection('formules')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Crosshair className="w-5 h-5 text-orange-600" />
            Formules Avancées avec Références Structurées
          </h2>
          {expandedSections.formules ? 
            <ChevronUp className="w-5 h-5 text-orange-600" /> : 
            <ChevronDown className="w-5 h-5 text-orange-600" />
          }
        </button>
        
        {expandedSections.formules && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-3">Recherche avec INDEX/EQUIV</h5>
                <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                  =INDEX(TableVentes[Montant];EQUIV(G2;TableVentes[Produit];0))
                </div>
                <p className="text-sm text-gray-600">
                  Combine la puissance d'INDEX/EQUIV avec les références structurées pour des recherches robustes.
                </p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-3">SOMME.SI.ENS avancée</h5>
                <div className="bg-gray-800 text-orange-400 p-3 rounded font-mono text-sm mb-2">
                  =SOMME.SI.ENS(TableVentes[Montant];TableVentes[Région];"Nord")
                </div>
                <p className="text-sm text-gray-600">
                  Des formules conditionnelles plus lisibles avec des noms de colonnes explicites.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-orange-600" />
                Références structurées avec fonctions matricielles
              </h5>
              
              <div className="bg-gray-800 text-orange-400 p-4 rounded font-mono text-sm mb-3">
                =MAX(SI(TableVentes[Région]="Est";TableVentes[Montant]))
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Utilisez les références structurées dans des formules matricielles pour des calculs complexes (validez avec Ctrl+Maj+Entrée).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h6 className="font-medium text-gray-800 mb-2">Avantages :</h6>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Autodocumenté</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Adaptation automatique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Moins d'erreurs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium text-gray-800 mb-2">Considérations :</h6>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Courbe d'apprentissage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Compatibilité avec versions très anciennes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECTION INTÉGRATION AVANCÉE */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-indigo-50 text-left"
          onClick={() => toggleSection('integration')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Sliders className="w-5 h-5 text-indigo-600" />
            Intégration avec les Autres Fonctionnalités Excel
          </h2>
          {expandedSections.integration ? 
            <ChevronUp className="w-5 h-5 text-indigo-600" /> : 
            <ChevronDown className="w-5 h-5 text-indigo-600" />
          }
        </button>
        
        {expandedSections.integration && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Table2 className="w-5 h-5 text-indigo-600" />
                  Tableaux Croisés Dynamiques
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <p className="text-sm text-gray-700 mb-4">
                      Utilisez votre tableau structuré comme source pour un TCD. Lorsque le tableau s'agrandit, actualisez simplement le TCD sans modifier la plage source.
                    </p>
                    
                    <div className="bg-gray-800 text-indigo-400 p-3 rounded font-mono text-sm mb-2">
                      Source: TableVentes[#Tout]
                    </div>
                    
                    <ul className="text-sm text-gray-600 space-y-2 mt-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Plage source toujours à jour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Nouveaux champs automatiquement disponibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Idéal pour les tableaux de bord dynamiques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon6/tcd-tableau-structure.png" 
                      alt="Tableau croisé dynamique utilisant un tableau structuré comme source" 
                      className="rounded-lg border shadow-sm"
                      style={{ maxHeight: 250 }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-indigo-600" />
                  Slices (Segmentations)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      Créez des segments visuels pour filtrer vos tableaux et TCD. Particulièrement utile pour les tableaux de bord interactifs.
                    </p>
                    
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-600 mb-4">
                      <li>Sélectionnez votre tableau</li>
                      <li>Onglet "Création de tableau"</li>
                      <li>"Insérer une segmentation"</li>
                      <li>Choisissez les colonnes à utiliser comme filtres</li>
                    </ol>
                  </div>
                  
                  <div>
                    <ImageZoomable 
                      src="/cours/intermediaire/lecon6/slices-tableaux.png" 
                      alt="Slices (segmentations) pour filtrer les tableaux structurés" 
                      className="rounded-lg border shadow-sm"
                      style={{ maxHeight: 250 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* EXERCICE PRATIQUE AVANCÉ */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-teal-50 text-left"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-teal-600" />
            Exercice Pratique : Système de Gestion Commercial Avancé
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-5 h-5 text-teal-600" /> : 
            <ChevronDown className="w-5 h-5 text-teal-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="px-4 py-4 md:p-6 md:rounded-lg rounded-none">
            <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-6">
              <p className="text-gray-700">
                Créez un système commercial complet exploitant toutes les fonctionnalités avancées des tableaux structurés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Scénario :</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Vous gérez les ventes d'une entreprise avec plusieurs produits, régions et commerciaux. Créez un système automatisé pour suivre et analyser les performances.
                </p>
                
                <div className="border rounded-lg p-4 mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Mission avancée :</h5>
                  <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
                    <li>Créez un tableau structuré "Ventes" avec les colonnes : Date, Commercial, Région, Produit, Quantité, PrixUnitaire</li>
                    <li>Ajoutez une colonne calculée "MontantTotal" avec référence structurée</li>
                    <li>Implémentez une ligne de totaux avec SOUS.TOTAL pour chaque colonne numérique</li>
                    <li>Créez un TCD lié au tableau pour analyser les ventes par région et commercial</li>
                    <li>Ajoutez des slices pour filtrer par Région et Produit</li>
                    <li>Créez des formules externes utilisant SOMME.SI.ENS avec références structurées</li>
                  </ol>
                </div>
              </div>
              
              <div>
                <ImageZoomable 
                  src="/cours/intermediaire/lecon6/exercice-tableau-avance-preview.png" 
                  alt="Aperçu du résultat final de l'exercice avancé" 
                  className="rounded-lg border shadow-sm"
                  style={{ maxHeight: 300 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-teal-600" />
                  Fichier d'exercice avancé
                </h4>
                <p className="text-gray-700 mb-4">
                  Téléchargez le fichier avec les données de départ pour l'exercice :
                </p>
                <a href="/cours/intermediaire/lecon6/exercice_tableaux_avances.xlsx" 
                  className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger l'exercice (.xlsx)
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg px-4 py-4 md:p-5 md:rounded-xl rounded-none">
                <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-teal-600" />
                  Correction vidéo avancée
                </h4>
                <p className="text-gray-700 mb-4">
                  Solution complète avec explications des techniques avancées :
                </p>
                <PremiumVideo
                  url="/cours/intermediaire/lecon6/correction_tableaux_avances.mp4"
                  title="Correction de l'exercice sur les tableaux structurés avancés"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* QUIZ */}
      <div className="mt-12">
        <QuizLecon6 onResult={onResult} />
      </div>
    </div>
  );
}