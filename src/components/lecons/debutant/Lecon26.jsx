import React, { useState } from 'react';
import { Zap, Keyboard, Monitor, Smartphone, ChevronDown, ChevronUp, Award, Download, ArrowRight, CheckCircle } from 'lucide-react';
import ImageZoomable from '../../ui/ImageZoomable';
import Link from 'next/link';

export default function Lecon26({ onResult }) {
  const [openSections, setOpenSections] = useState({
    frequent: true,
    ribbon: false,
    navigation: false,
    formatting: false,
    selection: false,
    formulas: false,
    other: false,
    functionKeys: false,
    powerpivot: false,
    refresh: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-yellow-300" />
              <h1 className="text-2xl md:text-3xl font-bold"> Raccourcis Clavier Excel Avancés</h1>
            </div>
            <p className="text-blue-100 max-w-3xl">
              Maîtrisez les raccourcis clavier essentiels pour devenir un expert Excel. Cette dernière leçon du niveau débutant 
              vous permettra d'accélérer considérablement votre productivité.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">Dernière leçon du niveau débutant</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
          <p className="text-gray-700">
            <span className="font-semibold">Remarques :</span><br />
            • Un signe plus (+) signifie que vous devez appuyer sur plusieurs touches en même temps<br />
            • Un signe virgule (,) signifie que vous devez appuyer sur plusieurs touches dans l’ordre
          </p>
        </div>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
        <p className="text-gray-700">
          ⚠️ <span className="font-semibold">Important :</span><br />
          Certains raccourcis clavier peuvent ne pas fonctionner selon la <strong>langue d’installation d’Excel</strong> 
          (français ou anglais) ou le <strong>type de clavier</strong> utilisé (<em>AZERTY</em> ou <em>QWERTY</em>).<br />
          Par exemple, <strong>Ctrl + G</strong> (Gras) sur Excel en français correspond à <strong>Ctrl + B</strong> 
          sur Excel en anglais.  
          Si un raccourci ne fonctionne pas, essayez sa version anglaise ou vérifiez votre disposition de clavier.
        </p>
      </div>

      {/* Section: Raccourcis fréquemment utilisés */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.frequent ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('frequent')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Raccourcis fréquemment utilisés</span>
          </div>
          {openSections.frequent ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {openSections.frequent && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows (FR)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac (FR/Anglais)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Fermer un classeur / un fichier</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + W</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + W</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir un classeur</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + O</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + O</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Enregistrer un classeur</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + S</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + S</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Copier la sélection</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + C</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + C</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller la sélection</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + V</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + V</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Annuler l’action précédente</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Z</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Z</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer / retirer le format **Gras**</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + G</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Cmd + B</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Atteindre l’onglet Accueil (Ruban)</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + H</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, H</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir le menu contextuel</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maj + F10</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + clic</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text_gray-700">Masquer les lignes sélectionnées</td>
                    <td className="px-4 py-3 text-sm font_medium text-gray-900">Ctrl + 9</td>
                    <td className="px-4 py-3 text-sm font_medium text-gray-900">Cmd + 9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Raccourcis du ruban */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.ribbon ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('ribbon')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Raccourcis du ruban</span>
          </div>
          {openSections.ribbon ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {openSections.ribbon && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows (FR)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir le menu Fichier</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + F</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, F</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Accueil</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + H</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, H</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Insertion</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + N</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, N</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Mise en page</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + P</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, P</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Formules</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + M</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, M</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Données</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + A</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Révision</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + R</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, R</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Onglet Affichage</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + W</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Ctrl + F2, W</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text_gray-700">Développer / Réduire le ruban</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F1</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Opt + R</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Sélection & manipulation avancée */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.selection ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('selection')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Sélection & manipulation avancée</span>
          </div>
          {openSections.selection ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {openSections.selection && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows (FR)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Sélectionner une colonne entière</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Espace</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Espace</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Sélectionner une ligne entière</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maj + Espace</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maj + Espace</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Étendre la sélection jusqu’à la dernière cellule utilisée (dans une direction)</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Maj + Flèche direction</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Maj + Flèche</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Sélectionner toute la feuille</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + A</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Insérer une ligne ou colonne (dialogue)</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Ctrl + Maj + +</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Maj + +</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Supprimer une ligne ou colonne</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + –</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + –</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Formules & calculs */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.formulas ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('formulas')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Formules & calculs avancés</span>
          </div>
          {openSections.formulas ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {openSections.formulas && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows (FR)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Basculer en mode édition formule</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">F2</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">F2</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Figer une référence (absolue / mixte) dans une formule</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">F4</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">F4</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Calculer toutes les feuilles du classeur</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Ctrl + Alt + F9</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Alt + F9</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text_gray-700">Évaluer la formule active</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">F9</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">F9</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text_gray-700">Insertion rapide de la fonction SOMME</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Alt + =</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Cmd + =</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Autres raccourcis utiles */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.other ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('other')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Autres raccourcis utiles</span>
          </div>
          {openSections.other ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        {openSections.other && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows (FR)</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Afficher/masquer les formules dans la feuille</td>
                    <td className="px-4 py-3 text-sm font-medium text_gray-900">Ctrl + ` (accent grave)</td>
                    <td className="px-4 py-3 text-sm font_medium text-gray-900">Cmd + `</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Afficher le gestionnaire de noms</td>
                    <td className="px-4 py-3 text-sm font_medium text_gray-900">Ctrl + F3</td>
                    <td className="px-4 py-3 text-sm font_medium text_gray-900">Cmd + F3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text_gray-700">Ouvrir l’éditeur VBA / macros</td>
                    <td className="px-4 py-3 text-sm font_medium text_gray-900">Alt + F11</td>
                    <td className="px-4 py-3 text-sm font_medium text_gray-900">Option + F11 / Cmd + F11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section de téléchargement */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Téléchargez le mémo complet</h3>
            <p className="max-w-xl">
              Tous les raccourcis Excel dans un PDF pratique à garder à portée de main.
              Parfait pour l’impression ou la consultation rapide.
            </p>
          </div>
          <a
            href="/cours/debutant/Lecon26/raccourcis_excel.pdf"
            target='_blank'
            className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Download className="w-5 h-5" />
            Télécharger le PDF
          </a>
        </div>
      </div>

      {/* Section de félicitations */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center text-white mb-8">
        <div className="max-w-2xl mx-auto">
          <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Félicitations !</h3>
          <p className="text-lg mb-6">
            Vous avez terminé toutes les leçons du niveau débutant d’Excel. Vous maîtrisez désormais les bases essentielles pour travailler efficacement.
          </p>

          <Link
            href="/cours/intermediaire"
            className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mx-auto"
          >
            Passer au niveau intermédiaire
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
