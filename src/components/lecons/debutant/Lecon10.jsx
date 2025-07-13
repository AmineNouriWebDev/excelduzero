import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon10 from "../../quizz/debutant/QuizLecon10";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Image,
  Square,
  Type,
  LayoutTemplate,
  Camera,
  Download,
  Video,
  CheckCircle,
  BookOpen,
  Target,
  Lightbulb,
  Shield,
  FileImage,
  Clapperboard,
  Palette,
  ArrowRight,
  Crop,
  Sun,
  Contrast,
  Wand2,
  Replace,
  Undo2,
  Stars,
  List,
  LayoutGrid,
  TextCursorInput
} from "lucide-react";

export default function Lecon10({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Leçon 10 - Insertion d'images et de formes
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprendra à enrichir vos feuilles de calcul avec des éléments visuels.
          Vous découvrirez comment insérer des images, des formes, des graphiques SmartArt et des effets WordArt
          pour créer des documents professionnels et percutants.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous apprendrez à :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Insérer des images en ligne et locales
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Modifier et formater des illustrations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer des formes et des effets WordArt
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser des diagrammes SmartArt
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Image className="w-6 h-6 text-purple-600" />
        1. INSERTION D'IMAGES
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel permet d'insérer facilement des images depuis différentes sources : 
            recherches en ligne, bibliothèques clipart ou vos propres fichiers locaux.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Clapperboard className="w-5 h-5 text-purple-600" />
            Images en ligne
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Onglet <strong>Insertion</strong> → groupe <strong>Illustrations</strong> → <strong>Images en ligne</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Recherchez avec Bing ou parcourez Office.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Sélectionnez une image et cliquez sur <strong>Insérer</strong>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon10/inserer_image_en_ligne.png" 
            alt="Insertion d'images en ligne" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <FileImage className="w-5 h-5 text-purple-600" />
            Images clipart et locales
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-purple-600" />
                Images clipart
              </h6>
              <p className="text-sm text-gray-600">
                Utilisez le moteur de recherche pour trouver parmi +150 000 illustrations
              </p>
              <ImageZoomable 
                src="/cours/debutant/Lecon10/images_clipart.png" 
                alt="Bibliothèque clipart" 
                className="mt-2"
              />
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Download className="w-4 h-4 text-purple-600" />
                Images locales
              </h6>
              <p className="text-sm text-gray-600">
                Insérez des images depuis votre ordinateur ou OneDrive
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Onglet Insertion → Images</li>
                <li>• Naviguez vers votre fichier</li>
                <li>• Ctrl+V pour coller depuis le presse-papiers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Palette className="w-5 h-5 text-purple-600" />
            Modification des images
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Manipulation de base</h6>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-purple-600" />
                  <span>Déplacement par glisser-déposer</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-purple-600" />
                  <span>Redimensionnement avec les poignées</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-purple-600" />
                  <span>Rotation avec la poignée circulaire</span>
                </li>
              </ul>
              <ImageZoomable 
                src="/cours/debutant/Lecon10/modifier_clipart.png" 
                alt="Modification d'image" 
                className="mt-3"
              />
            </div>
            
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Options avancées</h6>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Crop className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Supprimer l'arrière-plan</p>
                    <p className="text-sm text-gray-600">Isoler le sujet principal</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Ajuster la luminosité</p>
                    <p className="text-sm text-gray-600">Corriger l'exposition</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Contrast className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Modifier le contraste</p>
                    <p className="text-sm text-gray-600">Améliorer la netteté</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Effets artistiques</p>
                    <p className="text-sm text-gray-600">Appliquer des filtres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-yellow-600" />
            Bonnes pratiques
          </h5>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Compressez les images pour réduire la taille des fichiers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Utilisez des images haute résolution pour l'impression</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">•</span>
              <span>Respectez les droits d'auteur pour les images en ligne</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Square className="w-6 h-6 text-teal-600" />
        2. FORMES ET WORDART
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Créez des éléments graphiques personnalisés avec les formes et les effets de texte WordArt 
            pour mettre en valeur vos données et titres.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <LayoutTemplate className="w-5 h-5 text-teal-600" />
            Formes prédéfinies
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Onglet <strong>Insertion</strong> → <strong>Illustrations</strong> → <strong>Formes</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Choisissez parmi 9 catégories de formes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Dessinez la forme en glissant la souris
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon10/insertion_illustration_forme.png" 
            alt="Bibliothèque de formes" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Type className="w-5 h-5 text-teal-600" />
            Création de WordArt
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Étapes de création</h6>
              <ol className="text-sm text-gray-600 space-y-2 pl-5">
                <li>1. Insertion → WordArt</li>
                <li>2. Choisissez un style</li>
                <li>3. Saisissez votre texte</li>
                <li>4. Personnalisez la mise en forme</li>
              </ol>
            </div>
            
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Personnalisation</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Modifiez la police et la taille</li>
                <li>• Ajoutez des ombres et reflets</li>
                <li>• Appliquez des effets 3D</li>
                <li>• Modifiez la couleur de remplissage</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Astuce :</strong> Désactivez "Ajuster la forme au texte" dans les propriétés 
              pour contrôler manuellement la taille du cadre.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <LayoutTemplate className="w-6 h-6 text-indigo-600" />
        3. DIAGRAMMES SMARTART
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Les diagrammes SmartArt vous permettent de créer des représentations visuelles complexes
            de processus, hiérarchies et relations entre données.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <List className="w-5 h-5 text-indigo-600" />
            Création d'un SmartArt
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Onglet <strong>Insertion</strong> → <strong>SmartArt</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Choisissez une catégorie (Processus, Cycle, Hiérarchie...)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Saisissez votre texte dans le volet latéral
              </span>
            </li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ImageZoomable 
              src="/cours/debutant/Lecon10/graphique_smartart.png" 
              alt="Choix d'un graphique SmartArt" 
            />
            <ImageZoomable 
              src="/cours/debutant/Lecon10/diagramme_smart_art.png" 
              alt="Exemple de diagramme SmartArt" 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Stars className="w-5 h-5 text-indigo-600" />
            Personnalisation avancée
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Modifier la disposition</h6>
              <p className="text-sm text-gray-600">
                Changez complètement l'organisation des éléments
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Changer les couleurs</h6>
              <p className="text-sm text-gray-600">
                Appliquez des palettes de couleurs coordonnées
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Styles SmartArt</h6>
              <p className="text-sm text-gray-600">
                Ajoutez des effets 3D et des ombrages
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Camera className="w-6 h-6 text-orange-600" />
        4. CAPTURES D'ÉCRAN
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Intégrez facilement des captures d'écran dans vos feuilles de calcul pour illustrer 
            des procédures ou montrer des résultats.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <TextCursorInput className="w-5 h-5 text-orange-600" />
            Méthode de capture
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Affichez la fenêtre à capturer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Dans Excel : Insertion → Capture d'écran
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Sélectionnez la zone à capturer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                La capture s'insère automatiquement
              </span>
            </li>
          </ul>
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-700">
              <strong>Astuce :</strong> Pour réutiliser une capture dans d'autres applications, 
              copiez-la depuis Excel et collez-la où vous voulez.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-600" />
        5. EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Créez un rapport visuel en utilisant toutes les techniques apprises : 
          insertion d'images, création de formes, utilisation de WordArt et SmartArt.
          Téléchargez le fichier d'exercice et suivez les instructions détaillées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données du rapport à mettre en forme :
          </p>
          <a href="/cours/debutant/Lecon10/exercice_visuel.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-orange-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Regardez la solution complète de l'exercice dans cette vidéo :
          </p>
          <PremiumVideo
            url="/cours/debutant/lecon10/correction_exercice.mp4"
            title="Correction vidéo de l'exercice"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          Consignes détaillées de l'exercice
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Insertion d'images</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Insérez une image depuis Bing Image Search</li>
              <li>Recadrez l'image et supprimez l'arrière-plan</li>
              <li>Ajoutez un effet artistique "Aquarelle"</li>
              <li>Insérez un clipart illustrant votre thème</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Formes et WordArt</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Créez un titre principal avec WordArt</li>
              <li>Ajoutez des formes pour mettre en valeur des données</li>
              <li>Créez un groupe de formes connectées</li>
              <li>Appliquez des styles cohérents à toutes les formes</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : SmartArt et capture</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Créez un diagramme SmartArt de type "Processus"</li>
            <li>Personnalisez les couleurs et appliquez un style 3D</li>
            <li>Capturez une partie de votre écran et insérez-la</li>
            <li>Ajoutez une légende à votre capture</li>
          </ol>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          Bonnes pratiques professionnelles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Utilisation des visuels
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Choisissez des images pertinentes pour votre contenu</li>
              <li>• Maintenez une cohérence stylistique</li>
              <li>• Équilibrez texte et éléments visuels</li>
              <li>• Utilisez la compression pour les fichiers partagés</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Stars className="w-5 h-5 text-blue-600" />
              Design efficace
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Limitez à 2-3 polices différentes</li>
              <li>• Utilisez une palette de couleurs harmonieuse</li>
              <li>• Alignez précisément les éléments</li>
              <li>• Contraster texte et arrière-plan</li>
            </ul>
          </div>
        </div>
      </div>

        {/* Quiz d'évaluation */}
                         <div className="mt-12">
                           <QuizLecon10 onResult={onResult} />
                         </div>
    </div>
  );
}