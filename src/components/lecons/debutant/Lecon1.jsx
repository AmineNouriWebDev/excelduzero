import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon1 from "../../quizz/debutant/QuizLecon1";
import PremiumVideo from "../../ui/PremiumVideo";
import { FileSpreadsheet, Monitor, Grid3X3, Calculator, BarChart3, Database, Settings, Eye, ArrowRight, ArrowDown, Plus, MousePointer2, Layout, Palette, Copy, Move, Trash2, ZoomIn, Maximize } from "lucide-react";

// Leçon 1 du niveau débutant : Découverte de l'interface Excel
// Utilise le même contenu JSX que précédemment, stylé avec Tailwind/prose
export default function Lecon1({ onResult }) {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <FileSpreadsheet className="text-green-600" size={40} />
          Découverte de l'interface Excel
        </h1>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Monitor className="text-blue-600" />
          Introduction à Excel
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Excel est un tableur développé par Microsoft. Il s'agit d'une
            application conçue pour créer et utiliser des tableaux, appelés «
            feuilles de calcul ». Dans Word, on travaille sur un document. Dans
            PowerPoint, on travaille sur une présentation. Dans Excel, on travaille
            sur un <strong>classeur</strong>. Par défaut, le classeur est enregistré
            dans un fichier portant l'extension « .xlsx ».
          </p>

          <p className="text-gray-700 mb-4">
            Excel fait partie de la suite Microsoft Office et est largement utilisé
            pour organiser, analyser et visualiser des données. Voici ses principales
            fonctionnalités :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Grid3X3 className="text-green-600" size={20} />
              <strong>Feuilles de calcul</strong>
            </div>
            <p className="text-sm text-gray-600">
              Créez des feuilles avec des lignes et colonnes pour organiser vos
              données
            </p>
          </div>

          <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="text-purple-600" size={20} />
              <strong>Formules et fonctions</strong>
            </div>
            <p className="text-sm text-gray-600">
              Excel propose une vaste gamme de formules pour effectuer des calculs
              complexes
            </p>
          </div>

          <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="text-blue-600" size={20} />
              <strong>Graphiques et visualisations</strong>
            </div>
            <p className="text-sm text-gray-600">
              Créez des graphiques pour visualiser vos données de manière claire
            </p>
          </div>

          <div className="bg-white border-l-4 border-orange-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Database className="text-orange-600" size={20} />
              <strong>Tableaux croisés dynamiques</strong>
            </div>
            <p className="text-sm text-gray-600">
              Résumez et analysez rapidement de grandes quantités de données
            </p>
          </div>

          <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="text-red-600" size={20} />
              <strong>Macros</strong>
            </div>
            <p className="text-sm text-gray-600">
              Automatisez des tâches répétitives en enregistrant des macros
            </p>
          </div>
        </div>
      </section>

      {/* L'écran d'accueil Excel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Eye className="text-green-600" />
          L'écran d'accueil Excel
        </h2>

        <ImageZoomable
          src="/cours/debutant/lecon1/ecran_accueil_excel.png"
          alt="Écran d'accueil Excel"
          style={{ maxHeight: 400 }}
        />

        <div className="mt-6">
          <p className="text-gray-700 mb-4">
            L'interface Excel comprend plusieurs éléments essentiels :
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <strong>Le ruban :</strong> Barre d'outils principale contenant tous les
              commandes
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <strong>La barre de formule :</strong> Zone de saisie située sous le ruban
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <strong>Le classeur :</strong> Fenêtre principale de travail (amovible par
              cliquer-glisser)
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <strong>La barre d'état :</strong> Informations en bas de l'écran
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <strong>La barre des tâches :</strong> Barre système Windows
            </div>
          </div>
        </div>
      </section>

      {/* Le classeur et ses composants */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <FileSpreadsheet className="text-blue-600" />
          Le classeur et ses composants
        </h3>

        {/* Structure du classeur */}
        <div className="mb-8">
          <h4 className="text-xl font-medium text-gray-700 mb-4">
            Structure du classeur
          </h4>

          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-4">
              Un classeur est constitué de <strong>feuilles</strong>, chacune ayant un
              onglet. Cliquer sur un onglet permet d'afficher la feuille correspondante.
              L'onglet sur fond blanc désigne la feuille active.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileSpreadsheet className="text-blue-600" size={16} />
                <strong>Nombre de feuilles :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Par défaut 3 feuilles, maximum 256 feuilles
              </p>
            </div>

            <div className="bg-white border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="text-green-600" size={16} />
                <strong>Navigation :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Boutons fléchés pour accéder aux onglets masqués
              </p>
            </div>

            <div className="bg-white border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-purple-600" size={16} />
                <strong>Liste complète :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit sur les boutons fléchés pour voir toutes les feuilles
              </p>
            </div>

            <div className="bg-white border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Plus className="text-orange-600" size={16} />
                <strong>Nouvelle feuille :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Onglet "+" pour insérer une nouvelle feuille
              </p>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon1/ajouter_onglet.gif"
            alt="Ajouter un onglet Excel"
            style={{ maxHeight: 300 }}
          />

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <div className="flex items-start gap-2">
              <div className="bg-blue-500 text-white rounded-full p-1 mt-1">
                <Eye size={12} />
              </div>
              <div>
                <strong>Astuce :</strong> La petite barre verticale à droite des onglets
                permet d'ajuster l'affichage des onglets par cliquer-glisser.
              </div>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon1/afficher_onglets.gif"
            alt="Afficher les onglets Excel"
            style={{ maxHeight: 300 }}
          />
        </div>

        {/* La feuille de calcul */}
        <div className="mb-8">
          <h4 className="text-xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Grid3X3 className="text-green-600" />
            La feuille de calcul
          </h4>

          {/* Colonnes et lignes */}
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-600 mb-3">
              Colonnes et lignes
            </h5>
            <p className="text-gray-700 mb-4">
              Une feuille de calcul Excel comprend :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight className="text-green-600" size={16} />
                  <strong>16 384 colonnes</strong>
                </div>
                <p className="text-sm text-gray-600">
                  Nommées de A à Z, puis AA à AZ, BA à BZ... jusqu'à XFD
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowDown className="text-blue-600" size={16} />
                  <strong>1 048 576 lignes</strong>
                </div>
                <p className="text-sm text-gray-600">
                  Numérotées de 1 à 1 048 576
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h6 className="font-semibold mb-2 flex items-center gap-2">
                <Settings className="text-gray-600" size={16} />
                Raccourcis utiles :
              </h6>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">
                    Ctrl + →
                  </kbd>
                  <span>Aller à la dernière colonne (XFD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">
                    Ctrl + ↓
                  </kbd>
                  <span>Aller à la dernière ligne (1 048 576)</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">
                    Ctrl + Home
                  </kbd>
                  <span>Revenir en A1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cellule active */}
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-600 mb-3 flex items-center gap-2">
              <MousePointer2 className="text-purple-600" />
              Cellule active
            </h5>
            <p className="text-gray-700 mb-4">
              La <strong>cellule active</strong> est la cellule dans laquelle va
              s'inscrire la saisie. Elle se distingue par un cadre plus marqué.
            </p>

            <ImageZoomable
              src="/cours/debutant/lecon1/celluleActiveExcel.png"
              alt="Cellule active Excel"
              style={{ maxHeight: 250 }}
            />
          </div>

          {/* Plage de cellules */}
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-600 mb-3">
              Plage de cellules
            </h5>
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                Une <strong>plage de cellules</strong> est tout rectangle de cellules.
                On la désigne par la référence de la première cellule (en haut à
                gauche), suivie de deux points, puis de la dernière cellule (en bas à
                droite).
              </p>
              <div className="bg-orange-200 p-2 rounded inline-block">
                <strong>Exemple :</strong> B7:E12
              </div>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/plage_cellule.png"
              alt="Plage de cellules"
              style={{ maxHeight: 300 }}
            />
          </div>

          {/* Concepts importants */}
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-600 mb-3">
              Concepts importants
            </h5>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <strong>Zone active :</strong> Plus petite plage commençant par A1 et
                contenant toutes les données
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <strong>Zone de cellules :</strong> Plage dont les cellules voisines
                sont des en-têtes ou des cellules vides
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <strong>Barres de défilement :</strong> Verticale et horizontale pour
                naviguer dans la feuille
              </div>
            </div>
          </div>

          {/* Zone de nom et barre de formule */}
          <div className="mb-6">
            <h5 className="text-lg font-medium text-gray-600 mb-3">
              Zone de nom et barre de formule
            </h5>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <strong>Zone de nom :</strong> Affiche la référence de la cellule active
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <strong>Barre de formule :</strong> Zone de saisie extensible située à
                droite de la zone de nom
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h6 className="font-semibold mb-2">Avantages de la barre de formule :</h6>
              <ul className="space-y-1 text-sm">
                <li>• Pratique pour les saisies longues</li>
                <li>• Ne recouvre pas les autres données</li>
                <li>• Extensible en largeur et hauteur</li>
                <li>• Bouton fx pour accéder aux fonctions Excel</li>
              </ul>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/barre_de_formule.gif"
              alt="Barre de formule Excel"
              style={{ maxHeight: 300 }}
            />
          </div>
        </div>
      </section>

      {/* Barre d'état */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Barre d'état : calculs et modes d'affichage
        </h3>

        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-4">
            La barre d'état affiche automatiquement :
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold mb-2 flex items-center gap-2">
                <Calculator className="text-blue-600" size={16} />
                Calculs automatiques
              </h6>
              <p className="text-sm text-gray-600 mb-2">
                Après sélection d'une plage :
              </p>
              <ul className="text-sm space-y-1">
                <li>• Moyenne des valeurs</li>
                <li>• Nombre de cellules vides</li>
                <li>• Nombre de cellules avec valeurs</li>
                <li>• Somme des valeurs</li>
                <li>• Minimum et maximum</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-2 flex items-center gap-2">
                <Layout className="text-green-600" size={16} />
                Trois modes d'affichage
              </h6>
              <ul className="text-sm space-y-1">
                <li>• Normal</li>
                <li>• Mise en page</li>
                <li>• Aperçu des sauts de page</li>
              </ul>
            </div>
          </div>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/barre_etat.png"
          alt="Barre d'état Excel"
          style={{ maxHeight: 200 }}
        />
      </section>

      {/* Paramétrage du logiciel */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Settings className="text-blue-600" />
          Paramétrage du logiciel
        </h3>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 mb-2">
            Pour personnaliser Excel, accédez aux options via : <strong>Fichier {'>'} Options</strong>
          </p>
          <p className="text-gray-700">
            La fenêtre "Options Excel" contient dix catégories : Général, Formules,
            Vérification, Enregistrement, etc. Le bouton ℹ️ indique la présence d'une
            info-bulle.
          </p>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/options_excel.png"
          alt="Options Excel"
          style={{ maxHeight: 400 }}
        />
      </section>

      {/* Gestion des feuilles et des classeurs */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Gestion des feuilles et des classeurs
        </h2>

        {/* Gestion des feuilles de calcul */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Gestion des feuilles de calcul
          </h3>
          <p className="text-gray-700 mb-6">
            La gestion des feuilles s'effectue principalement via leurs onglets. Voici
            les opérations possibles :
          </p>

          {/* Nommer une feuille */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-blue-600" />
              Nommer une feuille
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <strong>Méthode 1 :</strong> Double-cliquer sur l'onglet
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <strong>Méthode 2 :</strong> Clic droit sur l'onglet {'>'} "Renommer"
              </div>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/nommer_une_feuille.gif"
              alt="Nommer une feuille Excel"
              style={{ maxHeight: 300 }}
            />
          </div>

          {/* Colorer un onglet */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Palette className="text-purple-600" />
              Colorer un onglet
            </h4>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <strong>Procédure :</strong> Clic droit sur l'onglet {'>'} Couleur d'onglet
              {'>'} Choisir la couleur
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/couleur_onglet.gif"
              alt="Couleur onglet Excel"
              style={{ maxHeight: 300 }}
            />
          </div>

          {/* Sélectionner des feuilles */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <MousePointer2 className="text-green-600" />
              Sélectionner des feuilles
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Type de sélection
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                      Méthode
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Une feuille</td>
                    <td className="border border-gray-300 px-4 py-2">Clic sur l'onglet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Feuilles adjacentes</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Clic sur la première + Maj + clic sur la dernière
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Feuilles non adjacentes</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Clic sur la première + Ctrl + clic sur chaque autre
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Toutes les feuilles</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Clic droit sur un onglet {'>'} "Sélectionner toutes les feuilles"
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/selection_onglet.gif"
              alt="Sélection onglet Excel"
              style={{ maxHeight: 300 }}
            />

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <strong>Groupe de travail :</strong> Plusieurs feuilles sélectionnées
              constituent un "groupe de travail", indiqué dans la barre de titre par
              [Groupe de travail].
            </div>
          </div>
          {/* Insérer des feuilles */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Plus className="text-blue-600" />
              Insérer des feuilles
            </h4>

            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <strong>Icône "+" :</strong> Cliquer sur l'icône + à côté des onglets
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg flex items-start gap-2">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <strong>Raccourci clavier :</strong> Maj + F11
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg flex items-start gap-2">
                <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <strong>Menu contextuel :</strong> Clic droit sur un onglet {'>'} Insérer...
                </div>
              </div>
            </div>
          </div>

          {/* Copier, déplacer, supprimer des feuilles */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Copy className="text-green-700" />
              Copier, déplacer, supprimer des feuilles
            </h4>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Copy className="text-green-700" size={16} />
                  <strong>Copier une feuille</strong>
                </div>
                <p className="text-sm text-gray-600">
                  Clic droit sur l'onglet {'>'} Déplacer ou copier {'>'} Cocher "Créer une copie"
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Move className="text-green-700" size={16} />
                  <strong>Déplacer une feuille</strong>
                </div>
                <p className="text-sm text-gray-600">
                  Glisser-déposer l'onglet vers sa nouvelle position
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <Trash2 className="text-green-700" size={16} />
                  <strong>Supprimer une feuille</strong>
                </div>
                <p className="text-sm text-gray-600">Clic droit sur l'onglet {'>'} Supprimer</p>
              </div>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/copier_deplacer_supprimer_feuille_excel.gif"
              alt="Déplacer une feuille Excel"
              style={{ maxHeight: 300 }}
            />
          </div>

          {/* Zoom et plein écran */}
          <div className="mb-12">
            <h4 className="text-xl font-medium text-gray-700 mb-3 flex items-center gap-2">
              <ZoomIn className="text-green-700" />
              Zoom et plein écran
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <ZoomIn className="text-green-700" size={20} />
                  <h5 className="font-semibold">Zoom</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-green-700 mt-1" size={16} />
                    <span>Utilisez le curseur de zoom dans la barre d'état</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-green-700 mt-1" size={16} />
                    <span>Ctrl + molette souris pour zoomer/dézoomer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-green-700 mt-1" size={16} />
                    <span>Ctrl + Alt + "+" ou Ctrl + Alt + "-"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Maximize className="text-green-700" size={20} />
                  <h5 className="font-semibold">Plein écran</h5>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-green-700 mt-1" size={16} />
                    <span>
                      Affichage {'>'} Plein écran (ou Ctrl + Maj + F1)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-green-700 mt-1" size={16} />
                    <span>Échap (Esc) pour quitter le mode plein écran</span>
                  </li>
                </ul>
              </div>
            </div>

            <ImageZoomable
              src="/cours/debutant/lecon1/zoom_selection_excel.gif"
              alt="Zoom dans Excel"
              style={{ maxHeight: 300 }}
            />
          </div>
        </div>
      </section>

      {/* Étapes pour bien débuter avec Excel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 flex items-center gap-2">
          <FileSpreadsheet className="text-green-600" />
          Bien démarrer avec Excel
        </h2>
        {/* 1. Lancement d’Excel et création d’un nouveau classeur */}
        <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
          <h3 className="text-2xl font-bold text-green-800 mb-2">1. Lancer Excel et créer un classeur</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Ouvrez Excel depuis le menu Démarrer ou le raccourci sur le bureau.</li>
            <li>À l’ouverture, cliquez sur <strong>« Nouveau classeur »</strong> pour démarrer un document vierge.</li>
            <li>Vous pouvez aussi choisir un modèle prédéfini pour des besoins spécifiques.</li>
          </ul>
        </div>
        {/* 2. Enregistrement et ouverture d’un fichier */}
        <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">2. Enregistrer et ouvrir un fichier</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Pour enregistrer : cliquez sur <strong>Fichier {'>'} Enregistrer sous</strong>, choisissez l’emplacement et le nom du fichier.</li>
            <li>Formats principaux : <strong>.xlsx</strong> (standard), <strong>.xls</strong> (ancien), <strong>.csv</strong> (texte, séparateur virgule).</li>
            <li>Pour ouvrir un fichier existant : <strong>Fichier {'>'} Ouvrir</strong>, puis sélectionnez le document voulu.</li>
            <li>Pensez à enregistrer régulièrement votre travail (Ctrl+S).</li>
          </ul>
        </div>
        {/* 3. Présentation des éléments clés de l’interface */}
        <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-800 mb-2">3. Les éléments clés de l’interface Excel</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Barre de menus</strong> : accès aux commandes principales (Fichier, Accueil, Insertion, Mise en page, Formules, etc.).</li>
            <li><strong>Onglets du ruban</strong> : chaque onglet affiche des outils spécifiques (mise en forme, formules, données…).</li>
            <li><strong>Cellules</strong> : zones de saisie identifiées par une lettre (colonne) et un chiffre (ligne), ex : B3.</li>
            <li><strong>Barre de formule</strong> : affiche et permet d’éditer le contenu de la cellule active, notamment les formules.</li>
            <li><strong>Barre d’état</strong> : en bas, affiche des infos utiles (somme, moyenne, mode d’affichage…)</li>
            <li><strong>Onglets de feuilles</strong> : en bas, pour naviguer entre plusieurs feuilles du même classeur.</li>
          </ul>
        </div>
        {/* 4. Autres bases utiles */}
        <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h3 className="text-2xl font-bold text-purple-800 mb-2">4. Autres bases à connaître</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Fermer un classeur</strong> : Fichier {'>'} Fermer ou Ctrl+W.</li>
            <li><strong>Créer une nouvelle feuille</strong> : cliquez sur l’icône + en bas à gauche.</li>
            <li><strong>Accéder à l’aide</strong> : touche F1 ou menu Aide.</li>
            <li><strong>Annuler une action</strong> : Ctrl+Z, <strong>Rétablir</strong> : Ctrl+Y.</li>
            <li><strong>Zoom</strong> : curseur en bas à droite ou Ctrl+molette souris.</li>
          </ul>
        </div>
      </section>

      {/* Exercice pratique de synthèse */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
          <FileSpreadsheet className="text-pink-600" />
          Exercice pratique : Premiers pas sur Excel
        </h2>
        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400 mb-4">
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Lancez Excel et créez un nouveau classeur vierge.</li>
            <li>Enregistrez le classeur sous le nom <strong>"Découverte.xlsx"</strong> sur votre bureau.</li>
            <li>Dans la première feuille, saisissez en A1 : <strong>"Nom"</strong> et en B1 : <strong>"Âge"</strong>.</li>
            <li>Ajoutez au moins 3 lignes de données fictives sous ces en-têtes.</li>
            <li>Coloriez l’onglet de la feuille en bleu.</li>
            <li>Ajoutez une nouvelle feuille et nommez-la <strong>"Calculs"</strong>.</li>
            <li>Essayez de naviguer entre les feuilles, puis fermez et rouvrez le fichier.</li>
          </ol>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
          <strong>Correction vidéo :</strong> Retrouvez la correction détaillée de cet exercice en vidéo ci-dessous !
        </div>
        {/* Accès premium à la vidéo de correction */}
        <PremiumVideo url="/cours/debutant/lecon1/correction_exercice1.mp4" title="Correction vidéo de l'exercice" />
      </section>

      <div className="mt-12">
        <QuizLecon1 onResult={onResult} />
      </div>
    </div>
  );
}
