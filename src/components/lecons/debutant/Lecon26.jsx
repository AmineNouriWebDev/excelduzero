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
    refresh: false,
    powerpivot: false,
    functionKeys: false,
    other: false
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
            • Un signe virgule (,) signifie que vous devez appuyer sur plusieurs touches dans l'ordre
          </p>
        </div>
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Fermer un classeur</td>
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
                    <td className="px-4 py-3 text-sm text-gray-700">Annuler l'action</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Z</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Z</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer le format Gras</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + G</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + B</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Atteindre l'onglet Accueil</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + H</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir le menu contextuel</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Maj + F10</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + clic</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Masquer les lignes sélectionnées</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + 9</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + 9</td>
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
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon26/ruban.png" 
                alt="Le ruban sur Microsoft Excel" 
                className="rounded-lg border"
              />
              <p className="text-sm text-gray-500 mt-2">Le ruban Excel avec les touches d'accès rapide</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows</th>
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
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Accueil</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + H</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, H</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Insertion</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + N</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, N</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Mise en page</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + P</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, P</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Formules</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + M</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, M</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Données</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + A</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Révision</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + R</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, R</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir l'onglet Affichage</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Alt + W</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F2, W</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Développer ou réduire le ruban</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + F1</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Opt + R</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Collage spécial */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button 
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.formulas ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('formulas')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Collage spécial</span>
          </div>
          {openSections.formulas ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {openSections.formulas && (
          <div className="p-5">
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon26/collage_special.png" 
                alt="Boîte de dialogue Collage spécial" 
                className="rounded-lg border"
              />
              <p className="text-sm text-gray-500 mt-2">Options de collage spécial dans Excel</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Option</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lettre</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller tout</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">A</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller tout le contenu et la mise en forme</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Formules</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">F</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller uniquement les formules</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Valeurs</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">V</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller uniquement les valeurs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Mise en forme</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">T</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller uniquement la mise en forme</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Commentaires</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">C</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller uniquement les commentaires</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Validation</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">N</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Coller uniquement la validation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Navigation dans les cellules */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button 
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.navigation ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('navigation')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Navigation dans les cellules</span>
          </div>
          {openSections.navigation ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {openSections.navigation && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Déplacer d'une cellule vers le haut</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Flèche haut</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Flèche haut</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Atteindre l'extrémité de la région active</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Touche direction</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Touche direction</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Atteindre la dernière cellule de la feuille</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Fin</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Fin</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Atteindre le début de la feuille</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Origine</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Origine</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Se déplacer d'un écran vers le bas</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Pg. suiv</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Fn + Flèche bas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Section: Mise en forme de cellules */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
        <button 
          className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg ${
            openSections.formatting ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-800'
          }`}
          onClick={() => toggleSection('formatting')}
        >
          <div className="flex items-center gap-3">
            <Keyboard className="w-5 h-5" />
            <span>Mise en forme de cellules</span>
          </div>
          {openSections.formatting ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {openSections.formatting && (
          <div className="p-5">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Action</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Windows</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mac</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Ouvrir Format des cellules</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + 1</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + 1</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer Gras</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + G</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + B</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer Italique</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + I</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + I</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer Souligné</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + U</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + U</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer format Monétaire</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Shift + $</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Shift + $</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">Appliquer format Pourcentage</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Ctrl + Shift + %</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Cmd + Shift + %</td>
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
              Parfait pour l'impression ou la consultation rapide.
            </p>
          </div>
          <a 
            href="/cours/debutant/Lecon26/raccourcis_excel.pdf" 
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
      Vous avez terminé toutes les leçons du niveau débutant d'Excel. 
      Vous maîtrisez désormais les bases essentielles pour travailler efficacement.
    </p>
    
    {/* Solution moderne avec Link */}
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