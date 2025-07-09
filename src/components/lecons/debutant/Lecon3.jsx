import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon3 from '@/components/quizz/debutant/QuizLecon3';
import PremiumVideo from "../../ui/PremiumVideo";
import { Keyboard, Zap, MousePointer2, Layout, Search, Save, FolderOpen, Undo, Copy, Scissors, Clipboard, Bold, Italic, Underline, FunctionSquare, Table, Database, Eye, ArrowDown, ArrowUp, Command, Filter,Palette  } from "lucide-react";

export default function Lecon3({ onResult }) {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <Keyboard className="text-blue-600" size={40} />
          Les raccourcis essentiels d'Excel
        </h1>
        <p className="text-lg text-gray-600">
          Maîtrisez Excel plus rapidement grâce à ces raccourcis clavier indispensables
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Zap className="text-yellow-600" />
          Pourquoi utiliser les raccourcis clavier ?
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Les raccourcis clavier sont un moyen puissant d'accélérer votre travail dans Excel. En les maîtrisant, vous pouvez :
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="text-green-600" size={20} />
                <strong>Gagner du temps</strong>
              </div>
              <p className="text-sm text-gray-600">
                Exécuter des actions sans quitter le clavier
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Layout className="text-purple-600" size={20} />
                <strong>Être plus efficace</strong>
              </div>
              <p className="text-sm text-gray-600">
                Réduire les clics et les déplacements de souris
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Database className="text-blue-600" size={20} />
                <strong>Travailler professionnellement</strong>
              </div>
              <p className="text-sm text-gray-600">
                Impressionner vos collègues par votre maîtrise d'Excel
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Command className="text-yellow-600" size={16} />
              Convention de notation :
            </h4>
            <ul className="text-sm space-y-1">
              <li><strong>Signe plus (+)</strong> : Appuyez sur plusieurs touches simultanément</li>
              <li><strong>Signe virgule (,)</strong> : Appuyez sur plusieurs touches successivement</li>
              <li><strong>Ctrl</strong> : Touche Contrôle</li>
              <li><strong>Maj</strong> : Touche Majuscule</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Raccourcis fréquemment utilisés */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Keyboard className="text-blue-600" />
          Raccourcis les plus utilisés
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Ces raccourcis sont indispensables pour toute utilisation quotidienne d'Excel :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Action</th>
                <th className="py-3 px-4 text-left border-b">Raccourci</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Enregistrer un classeur</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + S</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ouvrir un classeur</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + O</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Copier la sélection</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + C</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Coller la sélection</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + V</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Couper la sélection</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + X</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Annuler l'action</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Z</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Rétablir l'action</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ouvrir le menu contextuel</td>
                <td className="py-3 px-4 border-b font-mono">Maj + F10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Save className="text-green-600" size={16} />
            Astuce :
          </h4>
          <p className="text-sm text-gray-700">
            Combinez plusieurs raccourcis pour gagner encore plus de temps. Par exemple : 
            <span className="font-mono ml-2">Ctrl + C</span> → 
            <span className="font-mono mx-2">Ctrl + V</span> pour copier-coller rapidement.
          </p>
        </div>
      </section>

      {/* Navigation dans Excel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <ArrowUp className="text-purple-600" />
          Navigation dans les cellules
        </h2>

        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Déplacez-vous rapidement dans vos feuilles de calcul avec ces raccourcis :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Action</th>
                <th className="py-3 px-4 text-left border-b">Raccourci</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Déplacer d'une cellule</td>
                <td className="py-3 px-4 border-b font-mono">Touches de direction</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Atteindre le début de la ligne</td>
                <td className="py-3 px-4 border-b font-mono">Accueil</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Atteindre la cellule A1</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Accueil</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Atteindre la dernière cellule utilisée</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Fin</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Déplacement d'un écran vers le bas</td>
                <td className="py-3 px-4 border-b font-mono">Pg. suiv</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Déplacement d'un écran vers le haut</td>
                <td className="py-3 px-4 border-b font-mono">Pg. préc</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Atteindre une cellule spécifique</td>
                <td className="py-3 px-4 border-b font-mono">F5</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Basculer entre les feuilles</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Pg. suiv / Pg. préc</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Eye className="text-blue-600" size={16} />
            Conseil pratique :
          </h4>
          <p className="text-sm text-gray-700">
            Utilisez <span className="font-mono">Ctrl + Flèche</span> pour vous déplacer rapidement jusqu'aux limites 
            de vos données. Cela vous évite de faire défiler manuellement de grandes feuilles.
          </p>
        </div>
      </section>

      {/* Mise en forme */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Bold className="text-orange-600" />
          Mise en forme des cellules
        </h2>

        <div className="bg-orange-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Appliquez rapidement une mise en forme professionnelle à vos données :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Action</th>
                <th className="py-3 px-4 text-left border-b">Raccourci</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Mettre en gras</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + G</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Mettre en italique</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + I</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Souligner</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + U</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ouvrir le format des cellules</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + 1</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Appliquer le format Devise</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Maj + $</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Appliquer le format Pourcentage</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Maj + %</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Appliquer le format Date</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Maj + #</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ajouter des bordures</td>
                <td className="py-3 px-4 border-b font-mono">Alt + L, BB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Palette className="text-yellow-600" size={16} />
              Astuce de mise en forme :
            </h4>
            <p className="text-sm text-gray-700">
              Utilisez <span className="font-mono">Ctrl + Espace</span> pour sélectionner une colonne entière, 
              puis appliquez une mise en forme à toutes les cellules de la colonne d'un seul coup.
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Filter className="text-purple-600" size={16} />
              Format conditionnel :
            </h4>
            <p className="text-sm text-gray-700">
              Accédez rapidement au format conditionnel avec 
              <span className="font-mono ml-2">Alt + O, D</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sélection et actions */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <MousePointer2 className="text-green-600" />
          Sélection et actions
        </h2>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Maîtrisez la sélection et les actions rapides dans vos feuilles :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Action</th>
                <th className="py-3 px-4 text-left border-b">Raccourci</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Sélectionner toute la feuille</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + A</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Sélectionner une colonne</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Espace</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Sélectionner une ligne</td>
                <td className="py-3 px-4 border-b font-mono">Maj + Espace</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Étendre la sélection</td>
                <td className="py-3 px-4 border-b font-mono">Maj + Touche de direction</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Insérer une nouvelle ligne</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Maj + +</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Supprimer des lignes/colonnes</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + -</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Masquer les lignes sélectionnées</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + 9</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Masquer les colonnes sélectionnées</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + 0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <ArrowDown className="text-blue-600" size={16} />
            Astuce de sélection :
          </h4>
          <p className="text-sm text-gray-700">
            Utilisez <span className="font-mono">Ctrl + Maj + Flèche</span> pour sélectionner rapidement 
            toutes les cellules jusqu'à la fin des données dans une direction donnée.
          </p>
        </div>
      </section>

      {/* Données et formules */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <FunctionSquare className="text-red-600" />
          Données et formules
        </h2>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Optimisez votre travail avec les données et les calculs :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Action</th>
                <th className="py-3 px-4 text-left border-b">Raccourci</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Insérer la formule SOMME</td>
                <td className="py-3 px-4 border-b font-mono">Alt + =</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Modifier la cellule active</td>
                <td className="py-3 px-4 border-b font-mono">F2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Insérer une fonction</td>
                <td className="py-3 px-4 border-b font-mono">Maj + F3</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Calculer toutes les feuilles</td>
                <td className="py-3 px-4 border-b font-mono">F9</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ouvrir la boîte Collage spécial</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + Alt + V</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Créer un tableau</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + L</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Ouvrir le menu de tri</td>
                <td className="py-3 px-4 border-b font-mono">Alt + D, S</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">Activer le remplissage instantané</td>
                <td className="py-3 px-4 border-b font-mono">Ctrl + E</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Table className="text-purple-600" size={16} />
              Collage spécial :
            </h4>
            <p className="text-sm text-gray-700">
              Après <span className="font-mono">Ctrl + Alt + V</span>, utilisez ces lettres :
            </p>
            <ul className="text-sm space-y-1 mt-2">
              <li><strong>V</strong> : Coller uniquement les valeurs</li>
              <li><strong>T</strong> : Coller uniquement la mise en forme</li>
              <li><strong>F</strong> : Coller uniquement les formules</li>
              <li><strong>C</strong> : Coller uniquement les commentaires</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Database className="text-blue-600" size={16} />
              Astuce de formule :
            </h4>
            <p className="text-sm text-gray-700">
              Appuyez sur <span className="font-mono">F4</span> après avoir sélectionné une référence de cellule 
              pour basculer entre les références absolues ($A$1) et relatives (A1).
            </p>
          </div>
        </div>
      </section>

      {/* Touches de fonction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Keyboard className="text-indigo-600" />
          Les touches de fonction
        </h2>

        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Les touches F1 à F12 offrent un accès rapide à des fonctionnalités essentielles :
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left border-b">Touche</th>
                <th className="py-3 px-4 text-left border-b">Fonction principale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F1</td>
                <td className="py-3 px-4 border-b">Afficher l'aide Excel</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F2</td>
                <td className="py-3 px-4 border-b">Modifier la cellule active</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F4</td>
                <td className="py-3 px-4 border-b">Répéter la dernière action / Basculer les références absolues</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F5</td>
                <td className="py-3 px-4 border-b">Atteindre une cellule spécifique</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F7</td>
                <td className="py-3 px-4 border-b">Vérifier l'orthographe</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F9</td>
                <td className="py-3 px-4 border-b">Calculer toutes les feuilles</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F11</td>
                <td className="py-3 px-4 border-b">Créer un graphique</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-mono">F12</td>
                <td className="py-3 px-4 border-b">Enregistrer sous</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Zap className="text-yellow-600" size={16} />
            Combinaisons utiles :
          </h4>
          <ul className="text-sm space-y-1">
            <li><strong>Ctrl + F1 :</strong> Afficher/masquer le ruban</li>
            <li><strong>Maj + F10 :</strong> Ouvrir le menu contextuel</li>
            <li><strong>Ctrl + F9 :</strong> Réduire la fenêtre Excel</li>
            <li><strong>Ctrl + F10 :</strong> Agrandir/restaurer la fenêtre</li>
          </ul>
        </div>
      </section>

      {/* Exercice pratique */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <Keyboard className="text-green-600" />
          Exercice pratique : Mémorisation et application
        </h2>
        
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-4">
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>Ouvrez un nouveau classeur Excel</li>
            <li>Entrez des données dans les cellules A1 à D10</li>
            <li>Pratiquez ces actions avec les raccourcis :
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Sélectionner toute la feuille (<span className="font-mono">Ctrl + A</span>)</li>
                <li>Copier la sélection (<span className="font-mono">Ctrl + C</span>)</li>
                <li>Coller dans une nouvelle feuille (<span className="font-mono">Ctrl + V</span>)</li>
                <li>Mettre en gras les en-têtes (<span className="font-mono">Ctrl + G</span>)</li>
                <li>Appliquer un format devise aux valeurs (<span className="font-mono">Ctrl + Maj + $</span>)</li>
                <li>Insérer la formule SOMME sous les colonnes (<span className="font-mono">Alt + =</span>)</li>
              </ul>
            </li>
            <li>Créez un graphique rapide (<span className="font-mono">F11</span>)</li>
            <li>Enregistrez votre travail (<span className="font-mono">Ctrl + S</span>)</li>
          </ol>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
          <strong>Correction vidéo :</strong> Visionnez la démonstration complète de cet exercice
        </div>
        
        <PremiumVideo url="/cours/debutant/raccourcis/correction_exercice.mp4" title="Démonstration des raccourcis Excel" />
      </section>

      {/* Quiz */}

      <div className="mt-12">
            <QuizLecon3 onResult={onResult} />
          </div>
    </div>
  );
}