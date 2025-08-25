import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon4 from "../../quizz/debutant/QuizLecon4";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  MousePointer2, 
  Edit3, 
  Type, 
  Search, 
  Check, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ArrowDown, 
  Calendar, 
  Clock, 
  Hash, 
  AlignLeft, 
  AlignRight, 
  Keyboard, 
  Target, 
  Copy, 
  RotateCcw, 
  FileText,
  Grid3X3,
  Save,
  X,
  Home,
  Navigation
} from "lucide-react";

export default function Lecon4({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <Edit3 className="text-blue-600" size={40} />
          Saisie et manipulation des données
        </h1>
        <p className="text-lg text-gray-600">
          Apprenez à saisir, modifier et gérer efficacement vos données dans Excel
        </p>
      </div>

      {/* Table des matières */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FileText className="text-gray-600" />
            Table des matières
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <a href="#selection" className="text-blue-600 hover:underline">
                  1. Sélection de cellules
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <a href="#saisie" className="text-blue-600 hover:underline">
                  2. Saisie dans les cellules
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <a href="#modification" className="text-blue-600 hover:underline">
                  3. Modification des données
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <a href="#rechercher" className="text-blue-600 hover:underline">
                  4. Rechercher et remplacer
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <a href="#orthographe" className="text-blue-600 hover:underline">
                  5. Vérification orthographique
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <a href="#insertion" className="text-blue-600 hover:underline">
                  6. Insertion et suppression
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <a href="#exercices" className="text-blue-600 hover:underline">
                  7. Exercices pratiques
                </a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <a href="#quiz" className="text-blue-600 hover:underline">
                  8. Quiz d'évaluation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1: Sélection de cellules */}
      <section id="selection" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <MousePointer2 className="text-blue-600" />
          1. Sélection de cellules
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            La sélection peut être effectuée avec le clavier et la souris, ou bien
            avec la fenêtre « Atteindre ». Pour désélectionner, cliquez n'importe où
            (s'il s'agit d'une seule cellule, cliquez en dehors de la cellule).
          </p>
        </div>

        {/* Avec le clavier et la souris */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Keyboard className="text-green-600" />
            1.1 Avec le clavier et la souris
          </h3>

          {/* Sélectionner une cellule */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-600 mb-3 flex items-center gap-2">
              <Target className="text-purple-600" size={20} />
              Sélectionner une cellule
            </h4>
            <p className="text-gray-700 mb-4">
              Pointez sur la cellule. Le pointeur ayant l'aspect d'une croix
              blanche, cliquez. Ou bien, atteignez la cellule avec les touches
              fléchées du clavier.
            </p>

            <ImageZoomable
              src="/cours/debutant/lecon4/selection_cellule_excel.gif"
              alt="Sélection d'une cellule dans Excel"
              style={{ maxHeight: 300 }}
              
            />
          </div>

          {/* Raccourcis pour atteindre des cellules spécifiques */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-600 mb-3 flex items-center gap-2">
              <Navigation className="text-blue-600" size={20} />
              Raccourcis pour atteindre des cellules spécifiques
            </h4>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="text-blue-600" size={16} />
                  <strong>La cellule A1 :</strong>
                </div>
                <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl + Home</kbd>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight className="text-green-600" size={16} />
                  <strong>Dernière cellule de la zone active :</strong>
                </div>
                <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl + End</kbd>
              </div>

              <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ArrowRight className="text-purple-600" size={16} />
                  <strong>Première cellule de la ligne active :</strong>
                </div>
                <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Home</kbd>
              </div>

              <div className="bg-white border-l-4 border-orange-500 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MousePointer2 className="text-orange-600" size={16} />
                  <strong>Cellule en bordure de zone :</strong>
                </div>
                <p className="text-sm text-gray-600">Double-cliquez sur la bordure</p>
              </div>
            </div>
          </div>

          {/* Types de sélections avancées */}
          <div className="mb-6">
            <h4 className="text-xl font-medium text-gray-600 mb-3">
              Types de sélections avancées
            </h4>

            {/* Plage de cellules */}
            <div className="mb-4">
              <h5 className="text-lg font-medium text-gray-600 mb-2 flex items-center gap-2">
                <Grid3X3 className="text-blue-600" size={18} />
                Plage de cellules
              </h5>
              <p className="text-gray-700 mb-3">
                Cliquez-glissez de la première à la dernière cellule ou utilisez Maj + clic.
              </p>
              <ImageZoomable
                src="/cours/debutant/lecon4/selection_plage_cellule_adjacente_excel.gif"
                alt="Sélection d'une plage de cellules"
                style={{ maxHeight: 250 }}
              />
            </div>

            {/* Cellules non adjacentes */}
            <div className="mb-4">
              <h5 className="text-lg font-medium text-gray-600 mb-2 flex items-center gap-2">
                <Copy className="text-green-600" size={18} />
                Cellules non adjacentes
              </h5>
              <p className="text-gray-700 mb-3">
                Sélectionnez le 1er élément puis Ctrl + clic sur les autres cellules.
              </p>
              <ImageZoomable
                src="/cours/debutant/lecon4/selectionner_cellules_non_adjacente.gif"
                alt="Sélection de cellules non adjacentes"
                style={{ maxHeight: 250 }}
              />
            </div>

            {/* Sélections rapides */}
            <div className="mb-4">
              <h5 className="text-lg font-medium text-gray-600 mb-3">
                Sélections rapides
              </h5>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <strong>Toute la feuille :</strong>
                  <br />
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-sm mt-1 inline-block">
                    Ctrl + A
                  </kbd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <strong>Colonne entière :</strong>
                  <br />
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-sm mt-1 inline-block">
                    Ctrl + Espace
                  </kbd>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <strong>Ligne entière :</strong>
                  <br />
                  <kbd className="px-2 py-1 bg-gray-200 rounded text-sm mt-1 inline-block">
                    Maj + Espace
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Saisie dans les cellules */}
      <section id="saisie" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Type className="text-green-600" />
          2. Saisie dans les cellules
        </h2>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Sélectionnez une cellule et saisissez votre contenu. 
            <span className="font-semibold"> Texte = aligné à gauche</span>, 
            <span className="font-semibold"> Nombre = aligné à droite</span>.
          </p>
        </div>

        {/* Validation de la saisie */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Save className="text-blue-600" />
            2.1 Validation de la saisie
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDown className="text-green-600" size={16} />
                <strong>Valider + descendre :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Entrée</kbd>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="text-blue-600" size={16} />
                <strong>Valider + droite :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Tab</kbd>
            </div>

            <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <X className="text-red-600" size={16} />
                <strong>Annuler la saisie :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Échap</kbd>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon4/validation_saisie_excel.gif"
            alt="Validation de saisie dans Excel"
            style={{ maxHeight: 300 }}
          />
        </div>

        {/* Saisie multiple */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Copy className="text-purple-600" />
            2.2 Saisie multiple
          </h3>

          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700">
              <strong>Procédure :</strong> Sélectionnez plusieurs cellules → Saisissez valeur → 
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm mx-1">Ctrl + Entrée</kbd>
            </p>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon4/saisie_multilple_excel.gif"
            alt="Saisie multiple dans Excel"
            style={{ maxHeight: 300 }}
          />
        </div>

        {/* Formats spéciaux */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Hash className="text-orange-600" />
            2.3 Formats spéciaux
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold flex items-center gap-2">
                    <Type className="text-gray-600" size={16} />
                    Type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Exemple
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    Comportement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 flex items-center gap-2">
                    <AlignLeft className="text-blue-600" size={16} />
                    Nombre comme texte
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">'123</code>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Aligné à gauche</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 flex items-center gap-2">
                    <Calendar className="text-green-600" size={16} />
                    Date
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">15/03/2024</code>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Converti en numéro de série</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 flex items-center gap-2">
                    <Clock className="text-purple-600" size={16} />
                    Heure
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <code className="bg-gray-100 px-2 py-1 rounded">14:30</code>
                  </td>
                  <td className="border border-gray-300 px-4 py-3">Fraction décimale (0.604)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3: Modification des données */}
      <section id="modification" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Edit3 className="text-purple-600" />
          3. Modification des données
        </h2>

        {/* Méthodes de modification */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            3.1 Méthodes de modification
          </h3>

          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <strong>Double-cliquez sur la cellule</strong>
                <p className="text-sm text-gray-600 mt-1">Mode édition direct dans la cellule</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <strong>Sélectionnez et appuyez sur F2</strong>
                <p className="text-sm text-gray-600 mt-1">Raccourci clavier pour l'édition</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg flex items-start gap-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <strong>Modifiez dans la barre de formule</strong>
                <p className="text-sm text-gray-600 mt-1">Edition dans la zone de saisie</p>
              </div>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon4/modification_cellule_excel.gif"
            alt="Modification d'une cellule excel"
            style={{ maxHeight: 300 }}
          />
        </div>

        {/* Suppression */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4 flex items-center gap-2">
            <Trash2 className="text-red-600" />
            3.2 Suppression
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trash2 className="text-red-600" size={16} />
                <strong>Contenu :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Sélection + <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Suppr</kbd>
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <RotateCcw className="text-orange-600" size={16} />
                <strong>Format + contenu :</strong>
              </div>
              <p className="text-sm text-gray-600">
                Accueil → Effacer → Tout effacer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Rechercher et remplacer */}
      <section id="rechercher" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Search className="text-orange-600" />
          4. Rechercher et remplacer
        </h2>

        {/* Raccourcis utiles */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            4.1 Raccourcis utiles
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Search className="text-blue-600" size={16} />
                <strong>Ouvrir recherche :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">Ctrl + F</kbd>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Type className="text-green-600" size={16} />
                <strong>Caractère joker :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">*</kbd> (plusieurs caractères)
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Type className="text-purple-600" size={16} />
                <strong>Caractère unique :</strong>
              </div>
              <kbd className="px-2 py-1 bg-gray-200 rounded text-sm">?</kbd> (un caractère)
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon4/rechercher_remplacer_excel.gif"
            alt="Rechercher et remplacer dans Excel"
            style={{ maxHeight: 350 }}
          />
        </div>
      </section>

      {/* Section 5: Vérification orthographique */}
      <section id="orthographe" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Check className="text-red-600" />
          5. Vérification orthographique
        </h2>

        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Check className="text-red-600" size={24} />
            <div>
              <p className="text-gray-700 font-semibold">
                Onglet Révision → Orthographe ou 
                <kbd className="px-2 py-1 bg-gray-200 rounded text-sm ml-2">F7</kbd>
              </p>
            </div>
          </div>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon4/verification_orthographe_excel.gif"
          alt="Vérification orthographique dans Excel"
          style={{ maxHeight: 350 }}
        />
      </section>

      {/* Section 6: Insertion et suppression */}
      <section id="insertion" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Plus className="text-indigo-600" />
          6. Insertion et suppression
        </h2>

        {/* Principes clés */}
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-700 mb-4">
            6.1 Principes clés
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Plus className="text-green-600" size={16} />
                <strong>Insertion :</strong>
              </div>
              <p className="text-sm text-gray-600">Clic droit → Insérer</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trash2 className="text-red-600" size={16} />
                <strong>Suppression :</strong>
              </div>
              <p className="text-sm text-gray-600">Clic droit → Supprimer</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="text-blue-600" size={16} />
                <strong>Décalage :</strong>
              </div>
              <p className="text-sm text-gray-600">Choisir direction du décalage</p>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon4/insertion_ligne_excel.gif"
            alt="Insertion de ligne dans Excel"
            style={{ maxHeight: 350 }}
          />
        </div>
      </section>

      {/* Section 7: Exercices pratiques */}
      <section id="exercices" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Target className="text-pink-600" />
          7. Exercice pratique
        </h2>

        {/* Exercice 1 */}
    <div className="mb-8">
  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
    <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
      <FileText className="text-green-600" />
      Exercice  : Cas pratique - Gestion des ventes
    </h3>
    <p className="text-gray-700 mb-4">
      Vous travaillez dans un petit magasin et devez créer un tableau Excel pour gérer les ventes de la semaine.
      Suivez les étapes ci-dessous :
    </p>
    <ol className="space-y-2 text-gray-700">
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
        En <strong>A1</strong>, saisissez : <code className="bg-gray-100 px-2 py-1 rounded">Ventes Semaine 1</code>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
        En <strong>A3:D3</strong>, créez l’en-tête suivant : 
        <em>Produit – Quantité – Prix Unitaire (€) – Total (€)</em>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
        Saisissez les données suivantes :
        <ul className="list-disc list-inside ml-6">
          <li>Pomme – 10 – 0,50</li>
          <li>Orange – 8 – 0,70</li>
          <li>Banane – 12 – 0,40</li>
          <li>Raisin – 5 – 1,20</li>
        </ul>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
        Corrigez la quantité de <strong>Raisin</strong> en <code>7</code> et modifiez le prix de <strong>Banane</strong> en <code>0,45</code>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
        Remplacez <strong>Orange</strong> par <strong>Mandarine</strong> en utilisant <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + H</kbd>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
        Insérez une ligne après <strong>Banane</strong> et ajoutez : <em>Poire – 6 – 0,80</em>
      </li>
      <li className="flex items-start gap-2">
        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
        Supprimez la ligne contenant <strong>Mandarine</strong>
      </li>
    </ol>
    <p className="text-gray-700 mt-4 italic">
      Résultat attendu : un tableau corrigé et organisé avec les bonnes données.
    </p>
  </div>
</div>
      </section>
      <div className="mb-8">
          <PremiumVideo
            url="/cours/debutant/lecon4/correction_exercice.mp4"
            title="Correction vidéo de l'exercice"
          />
        </div>

      {/* Quiz d'évaluation */}
        
      <div className="mt-12">
            <QuizLecon4 onResult={onResult} />
          </div>
        
    </div>
  );
}