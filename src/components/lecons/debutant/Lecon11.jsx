import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon11 from "../../quizz/debutant/QuizLecon11";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Printer,
  Eye,
  Layout,
  Settings,
  Rows,
  Columns,
  Monitor,
  ZoomIn,
  ZoomOut,
  ArrowRightLeft,
  FileText,
  BookOpen,
  Video,
  Download,
  CheckCircle,
  Target,
  Lightbulb,
  ArrowLeftRight,
  Scan,
  Paperclip,
  ArrowDownUp,
  ArrowUpDown,
  FlipHorizontal,
  FlipVertical,
  ClipboardList
} from "lucide-react";

export default function Lecon11({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Printer className="w-8 h-8 text-blue-600" />
        Leçon 11 - MISE EN PAGE ET IMPRESSION
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser l'impression professionnelle dans Excel. 
          Vous découvrirez comment prévisualiser vos documents, configurer les paramètres 
          d'impression, optimiser la mise en page et éviter les erreurs courantes pour 
          obtenir des résultats impeccables dès la première impression.
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
              Prévisualiser et ajuster la mise en page avant impression
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Configurer les zones d'impression et les paramètres d'impression
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Modifier l'orientation et les marges pour optimiser l'espace
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les titres répétés et la mise à l'échelle
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Eye className="w-6 h-6 text-purple-600" />
        1. PRÉVISUALISATION ET MODES D'AFFICHAGE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel offre plusieurs outils pour visualiser votre document avant impression. 
            Le mode Mise en page et l'aperçu avant impression vous permettent d'ajuster 
            parfaitement votre document pour éviter les mauvaises surprises à l'impression.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layout className="w-5 h-5 text-purple-600" />
            Mode Mise en page
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Cliquez sur le bouton <strong>Mise en page</strong> dans la barre d'état ou dans l'onglet Affichage
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Visualisez les règles horizontales et verticales pour ajuster les marges
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Affichez les en-têtes, pieds de page et sauts de page
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/mode_mise_en_page.gif" 
            alt="Mode mise en page dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-purple-600" />
            Aperçu avant impression
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Ctrl + P</strong> ou <strong>Fichier → Imprimer</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Utilisez le zoom pour vérifier les détails
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Affichez les marges et ajustez-les directement par glisser-déposer
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/apercu_impression.png" 
            alt="Aperçu avant impression dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-yellow-600" />
            Astuce professionnelle
          </h5>
          <p className="text-gray-700">
            Ajoutez le bouton <strong>Aperçu avant impression</strong> à votre barre d'accès rapide : 
            cliquez sur le menu déroulant de la barre et sélectionnez "Aperçu avant impression".
          </p>
          <ImageZoomable 
            src="/cours/debutant/Lecon11/raccourci_apercu.gif" 
            alt="Ajout raccourci aperçu impression" 
            style={{ maxHeight: 150 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Printer className="w-6 h-6 text-teal-600" />
        2. CONFIGURATION DE L'IMPRESSION
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Maîtrisez les paramètres essentiels pour imprimer exactement ce dont vous avez besoin, 
            depuis une sélection de cellules spécifiques jusqu'à l'ensemble du classeur.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Scan className="w-5 h-5 text-teal-600" />
            Zone d'impression
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les cellules à imprimer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Onglet <strong>Mise en page</strong> → <strong>Zone d'impression</strong> → <strong>Définir</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Pour annuler : <strong>Zone d'impression</strong> → <strong>Annuler</strong>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/zone_impression.gif" 
            alt="Configuration zone d'impression" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Paperclip className="w-5 h-5 text-teal-600" />
            Paramètres d'impression
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Impression rapide</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ajoutez le bouton à la barre d'accès rapide</li>
                <li>• Imprime avec les paramètres par défaut</li>
                <li>• Idéal pour les impressions courantes</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Options avancées</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Choix de l'imprimante</li>
                <li>• Nombre de copies</li>
                <li>• Pages spécifiques</li>
                <li>• Impression recto-verso</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/options_impression.png" 
            alt="Options d'impression Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Annulation d'impression
          </h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Double-cliquez sur l'icône d'imprimante dans la barre des tâches</li>
            <li>Sélectionnez votre document dans la file d'attente</li>
            <li>Cliquez droit → <strong>Annuler</strong></li>
            <li>Confirmez l'annulation</li>
          </ol>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Layout className="w-6 h-6 text-indigo-600" />
        3. MISE EN PAGE AVANCÉE
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Optimisez l'apparence de vos documents imprimés grâce aux outils avancés 
            de mise en page d'Excel. Contrôlez les marges, l'orientation, et répétez 
            les titres sur chaque page pour des rapports professionnels.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ArrowDownUp className="w-5 h-5 text-indigo-600" />
            Marges et orientation
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Marges</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Normales :</strong> Haut/Bas: 1.91cm, Gauche/Droite: 1.78cm</li>
                <li>• <strong>Larges :</strong> 2.54cm sur tous les côtés</li>
                <li>• <strong>Étroites :</strong> Haut/Bas: 1.91cm, Gauche/Droite: 0.64cm</li>
                <li>• Personnalisées via la boîte de dialogue</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Orientation</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Portrait :</strong> Par défaut (page verticale)</li>
                <li>• <strong>Paysage :</strong> Idéal pour les tableaux larges</li>
                <li>• Change le nombre de colonnes/lignes par page</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/marges_orientation.png" 
            alt="Configuration des marges et orientation" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Rows className="w-5 h-5 text-indigo-600" />
            Titres à imprimer
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Onglet <strong>Mise en page</strong> → <strong>Imprimer les titres</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Spécifiez les lignes à répéter en haut
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Spécifiez les colonnes à répéter à gauche
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon11/titres_impression.gif" 
            alt="Configuration des titres à imprimer" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-indigo-600" />
            Mise à l'échelle
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Ajustement automatique</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>1 page de large</strong> : Tient toute la largeur sur une page</li>
                <li>• <strong>1 page de haut</strong> : Tient toute la hauteur sur une page</li>
                <li>• <strong>Tout tenir sur 1 page</strong> : Réduction maximale</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Ajustement manuel</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Définissez un pourcentage spécifique (50% à 400%)</li>
                <li>• Combinez largeur et hauteur (ex: 2 pages de large × 1 page de haut)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Columns className="w-5 h-5 text-green-600" />
            Options d'impression
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Quadrillage</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Imprime les bordures des cellules</li>
                <li>• Rend le document plus lisible</li>
                <li>• Activé via <strong>Mise en page → Quadrillage → Imprimer</strong></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Titres</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Affiche les lettres de colonnes et numéros de lignes</li>
                <li>• Utile pour le débogage des formules</li>
                <li>• Activé via <strong>Mise en page → Titres → Imprimer</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-600" />
        4. EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez toutes les techniques apprises en configurant un rapport professionnel 
          pour l'impression. Téléchargez le fichier d'exercice et suivez les instructions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à mettre en forme :
          </p>
          <a href="/cours/debutant/Lecon11/exercice_mise_en_page.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
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
            Regardez la solution complète de l'exercice dans cette vidéo :
          </p>
          <PremiumVideo
            url="/cours/debutant/lecon11/correction_exercice.mp4"
            title="Correction vidéo de l'exercice"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-orange-600" />
          Consignes détaillées
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Préparation</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Ouvrez le fichier "Rapport_Trimestriel.xlsx"</li>
              <li>Activez le mode Mise en page</li>
              <li>Définissez l'orientation Paysage</li>
              <li>Ajustez les marges en mode Étroites</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Configuration</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Définissez la zone d'impression (A1:G45)</li>
              <li>Répétez les lignes 1-3 sur chaque page</li>
              <li>Ajustez la mise à l'échelle pour tenir sur 1 page de large</li>
              <li>Activez l'impression du quadrillage</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Finalisation</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Ajoutez un en-tête avec le nom du rapport à gauche</li>
            <li>Ajoutez un pied de page avec la date à droite</li>
            <li>Vérifiez l'aperçu avant impression</li>
            <li>Exportez en PDF</li>
          </ol>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          Bonnes pratiques d'impression
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              Vérifications essentielles
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Toujours prévisualiser avant d'imprimer</li>
              <li>• Vérifier les sauts de page en mode dédié</li>
              <li>• Imprimer une page test pour les documents importants</li>
              <li>• Conserver les paramètres dans des vues personnalisées</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Printer className="w-5 h-5 text-blue-600" />
              Optimisation
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Utiliser l'orientation Paysage pour les tableaux larges</li>
              <li>• Réduire les marges pour gagner de l'espace</li>
              <li>• Désactiver l'impression des cellules vides</li>
              <li>• Exporter en PDF pour conserver la mise en forme</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon11 onResult={onResult} />
      </div>
    </div>
  );
}