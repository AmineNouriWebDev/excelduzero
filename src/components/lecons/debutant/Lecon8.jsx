import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon8 from "../../quizz/debutant/QuizLecon8";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  LayoutGrid, // remplace BorderAll
  PaintBucket, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify, 
  RotateCcw,
  Grid,
  Type,
  Minus,
  CornerDownLeft,
  Palette,
  Layout,
  BorderHorizontal,
  BorderVertical,
  BorderInner,
  Square,
  BorderTop,
  BorderBottom,
  BorderLeft,
  BorderRight,
  Bold,
  Italic,
  Underline,
  WrapText
} from "lucide-react";

export default function Lecon8({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5 5" />
        </svg>
        Leçon 8 - BORDURES, COULEURS ET ALIGNEMENT
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          La mise en forme des cellules est essentielle pour rendre vos feuilles de calcul claires, 
          professionnelles et faciles à lire. Cette leçon couvre les trois aspects fondamentaux 
          de la présentation : les bordures, les couleurs de remplissage et l'alignement du contenu.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous apprendrez à :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              Appliquer différents styles de bordures aux cellules
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              Utiliser les couleurs de remplissage pour mettre en valeur vos données
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              Aligner parfaitement le contenu des cellules
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">
              Créer des tableaux professionnels et bien structurés
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <LayoutGrid className="w-6 h-6 text-purple-600" />
        1. GESTION DES BORDRES
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Les bordures permettent de délimiter visuellement les cellules, créer des tableaux structurés 
            et mettre en valeur certaines zones de votre feuille de calcul. Excel propose une grande variété 
            de styles de bordures personnalisables.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Grid className="w-5 h-5 text-purple-600" />
            Styles de bordures disponibles
          </h5>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="border p-3 rounded text-center">
              <Minus className="w-8 h-8 mx-auto text-gray-700" />
              <p className="mt-2 text-sm">Continue</p>
            </div>
            <div className="border p-3 rounded text-center">
              <div className="mx-auto w-8 h-8 border-b-2 border-dotted"></div>
              <p className="mt-2 text-sm">Pointillés</p>
            </div>
            <div className="border p-3 rounded text-center">
              <div className="mx-auto w-8 h-8 border-b-2 border-dashed"></div>
              <p className="mt-2 text-sm">Tirets</p>
            </div>
            <div className="border p-3 rounded text-center">
              <div className="mx-auto w-8 h-8 border-b-2 border-double"></div>
              <p className="mt-2 text-sm">Double</p>
            </div>
          </div>
          
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layout className="w-5 h-5 text-purple-600" />
            Application des bordures
          </h5>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les cellules auxquelles vous voulez ajouter des bordures
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Allez dans l'onglet <strong>Accueil</strong> {'>'} groupe <strong>Police</strong> {'>'} bouton <strong>Bordures</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Choisissez un style prédéfini ou cliquez sur <strong>"Autres bordures"</strong> pour personnaliser
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon8/bordures_excel.gif" 
            alt="Application de bordures dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Square className="w-5 h-5 text-green-600" />
            Personnalisation avancée des bordures
          </h5>
          <p className="text-gray-700 mb-4">
            Dans la boîte de dialogue "Format de cellule" {'>'} onglet "Bordure", vous pouvez :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>Appliquer différents styles à chaque côté de la cellule</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>Changer la couleur des bordures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>Créer des bordures diagonales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>Appliquer des bordures à des plages complexes</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <PaintBucket className="w-6 h-6 text-red-600" />
        2. COULEURS DE REMPLISSAGE
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            Les couleurs de remplissage permettent de mettre en valeur des données importantes, 
            catégoriser des informations ou simplement améliorer l'esthétique de votre feuille de calcul.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Palette className="w-5 h-5 text-red-600" />
            Application des couleurs
          </h5>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les cellules à mettre en couleur
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Cliquez sur le bouton <strong>Couleur de remplissage</strong> dans l'onglet Accueil
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Choisissez une couleur dans la palette ou cliquez sur <strong>"Autres couleurs"</strong>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon8/couleurs_excel.png" 
            alt="Application de couleurs dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Bonnes pratiques
          </h5>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Utilisez des couleurs sobres pour les données principales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Réservez les couleurs vives pour les éléments importants</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Maintenez une cohérence dans votre schéma de couleurs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Évitez les combinaisons de couleurs qui rendent le texte illisible</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlignLeft className="w-6 h-6 text-teal-600" />
        3. ALIGNEMENT DU CONTENU
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            L'alignement du contenu dans les cellules est crucial pour la lisibilité. 
            Excel offre plusieurs options pour contrôler la position horizontale et verticale du texte, 
            ainsi que son orientation.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layout className="w-5 h-5 text-teal-600" />
            Types d'alignement
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-3 rounded">
              <h6 className="font-medium text-gray-800 mb-2">Horizontal</h6>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlignLeft className="w-4 h-4 text-gray-600" />
                  <span>À gauche (par défaut)</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlignCenter className="w-4 h-4 text-gray-600" />
                  <span>Centré</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlignRight className="w-4 h-4 text-gray-600" />
                  <span>À droite</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlignJustify className="w-4 h-4 text-gray-600" />
                  <span>Justifié</span>
                </div>
              </div>
            </div>
            
            <div className="border p-3 rounded">
              <h6 className="font-medium text-gray-800 mb-2">Vertical</h6>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>En haut</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span>Au centre</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>En bas (par défaut)</span>
                </div>
              </div>
            </div>
          </div>
          
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-teal-600" />
            Orientation du texte
          </h5>
          <p className="text-gray-700 mb-4">
            Vous pouvez faire pivoter le texte pour économiser de l'espace ou créer des en-têtes de colonnes plus élégants.
          </p>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon8/alignement_excel.gif" 
            alt="Alignement du texte dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <WrapText className="w-5 h-5 text-blue-600" />
            Renvoi à la ligne automatique
          </h5>
          <p className="text-gray-700 mb-4">
            Lorsqu'un texte est trop long pour une cellule, utilisez le renvoi à la ligne automatique :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">1.</span>
              <span>Sélectionnez les cellules concernées</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">2.</span>
              <span>Onglet Accueil {'>'} groupe Alignement {'>'} bouton "Renvoi à la ligne automatique"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">3.</span>
              <span>Ajustez la hauteur des lignes si nécessaire</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        4. EXERCICE PRATIQUE
      </h3>

      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en mettant en forme le tableau suivant selon les consignes.
          Téléchargez le fichier d'exercice et comparez votre résultat avec la correction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à mettre en forme :
          </p>
          <a href="/cours/debutant/Lecon8/exercice_mise_en_forme.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Solution complète de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/Lecon8/correction_exercice.mp4"
            title="Correction vidéo de l'exercice"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Consignes de l'exercice
        </h4>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Ouvrez le fichier "Exercice_Mise_en_Forme.xlsx"</li>
          <li>Appliquez une bordure extérieure épaisse autour de tout le tableau</li>
          <li>Ajoutez des bordures intérieures fines entre toutes les cellules</li>
          <li>Mettez en couleur l'en-tête du tableau avec une couleur de votre choix</li>
          <li>Centrez horizontalement et verticalement le contenu de toutes les cellules</li>
          <li>Appliquez le renvoi à la ligne automatique aux cellules contenant du texte long</li>
          <li>Changez la couleur de remplissage des lignes paires pour améliorer la lisibilité</li>
        </ol>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Conseils professionnels
      </h3>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Utilisez les styles de tableau :</strong> Pour appliquer rapidement une mise en forme cohérente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Copiez la mise en forme :</strong> Avec l'outil "Reproduire la mise en forme" (pinceau)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Créez des thèmes personnalisés :</strong> Pour standardiser les couleurs dans vos documents</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Utilisez des bordures subtiles :</strong> Les bordures trop épaisses peuvent distraire</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Alignez les nombres à droite :</strong> Pour faciliter la comparaison des valeurs</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Récapitulatif de la leçon
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Points clés à retenir
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Les bordures aident à structurer visuellement les données</li>
              <li>• Les couleurs de remplissage mettent en valeur les informations importantes</li>
              <li>• L'alignement vertical et horizontal améliore la lisibilité</li>
              <li>• Le renvoi à la ligne automatique évite les textes tronqués</li>
              <li>• La cohérence visuelle est essentielle pour des documents professionnels</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Applications pratiques
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Création de tableaux de données professionnels</li>
              <li>• Mise en forme de rapports financiers</li>
              <li>• Présentation de données statistiques</li>
              <li>• Création de tableaux de bord</li>
              <li>• Mise en valeur de données critiques</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-gray-700 flex items-start gap-2">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>
              <strong>Attention :</strong> Une mise en forme excessive peut rendre votre document difficile à lire. 
              Utilisez les couleurs et les bordures avec modération et cohérence.
            </span>
          </p>
        </div>
      </div>

     
      {/* Quiz d'évaluation */}
                <div className="mt-12">
                  <QuizLecon8 onResult={onResult} />
                </div>
    </div>
  );
}