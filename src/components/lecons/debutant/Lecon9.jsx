import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon9 from "../../quizz/debutant/QuizLecon9";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Merge,
  Split,
  FileText,
  Calendar,
  Hash,
  User,
  Clock,
  Copy,
  Grid,
  AlignCenter,
  AlertTriangle,
  Settings,
  Layout,
  Columns,
  Rows,
  Monitor,
  Printer,
  Eye,
  Download,
  Video,
  CheckCircle,
  BookOpen,
  Target,
  Lightbulb,
  Shield
} from "lucide-react";

export default function Lecon9({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
        Leçon 9 - FUSION DE CELLULES, EN-TÊTES & PIEDS DE PAGE
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon couvre des techniques avancées de mise en forme qui donnent un aspect professionnel 
          à vos feuilles de calcul. Vous apprendrez à fusionner des cellules pour créer des titres élégants, 
          à gérer les en-têtes et pieds de page pour l'impression et la présentation, et à optimiser 
          l'affichage de vos données.
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
              Maîtriser la fusion et la division de cellules
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer et personnaliser des en-têtes et pieds de page
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Optimiser vos documents pour l'impression et la présentation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Gérer l'affichage et la mise en page professionnelle
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Merge className="w-6 h-6 text-purple-600" />
        1. FUSION DE CELLULES
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La fusion de cellules permet de combiner plusieurs cellules adjacentes en une seule, 
            créant ainsi des titres centrés, des en-têtes de section ou des zones de contenu plus larges. 
            Cette technique est essentielle pour créer des documents d'aspect professionnel.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Grid className="w-5 h-5 text-purple-600" />
            Comment fusionner des cellules
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez la plage de cellules à fusionner (minimum 2 cellules adjacentes)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Onglet <strong>Accueil</strong> → groupe <strong>Alignement</strong> → bouton <strong>Fusionner et centrer</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Choisissez le type de fusion : <strong>Fusionner et centrer</strong>, <strong>Fusionner sur les lignes</strong>, ou <strong>Fusionner les cellules</strong>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon9/fusion_cellules.gif" 
            alt="Fusion de cellules dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-600" />
            Types de fusion disponibles
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <AlignCenter className="w-4 h-4 text-purple-600" />
                Fusionner et centrer
              </h6>
              <p className="text-sm text-gray-600">
                Fusionne les cellules et centre automatiquement le contenu. 
                Idéal pour les titres et en-têtes.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Rows className="w-4 h-4 text-purple-600" />
                Fusionner sur les lignes
              </h6>
              <p className="text-sm text-gray-600">
                Fusionne les cellules ligne par ligne, conservant 
                les divisions verticales.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Merge className="w-4 h-4 text-purple-600" />
                Fusionner les cellules
              </h6>
              <p className="text-sm text-gray-600">
                Fusionne toutes les cellules sélectionnées sans 
                modifier l'alignement du contenu.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Split className="w-4 h-4 text-purple-600" />
                Annuler la fusion
              </h6>
              <p className="text-sm text-gray-600">
                Divise une cellule fusionnée en cellules 
                individuelles séparées.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            Précautions importantes
          </h5>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>La fusion conserve uniquement le contenu de la cellule supérieure gauche</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>Les cellules fusionnées peuvent compliquer les formules et les tris</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>Évitez la fusion excessive qui peut rendre le document difficile à modifier</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>Testez toujours l'impression avant la finalisation</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FileText className="w-6 h-6 text-teal-600" />
        2. EN-TÊTES ET PIEDS DE PAGE
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Les en-têtes et pieds de page permettent d'ajouter des informations répétitives 
            sur chaque page imprimée : titre du document, date, numéro de page, nom de l'auteur, etc. 
            Ils donnent un aspect professionnel à vos documents et facilitent leur identification.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layout className="w-5 h-5 text-teal-600" />
            Accéder aux en-têtes et pieds de page
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Méthode 1 : Onglet Insertion</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Onglet <strong>Insertion</strong></li>
                <li>2. Groupe <strong>Texte</strong></li>
                <li>3. Bouton <strong>En-tête et pied de page</strong></li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Méthode 2 : Mode Mise en page</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>1. Onglet <strong>Affichage</strong></li>
                <li>2. Groupe <strong>Affichages classeur</strong></li>
                <li>3. Bouton <strong>Mise en page</strong></li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon9/entetes_pieds_page.gif" 
            alt="Configuration des en-têtes et pieds de page" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Copy className="w-5 h-5 text-teal-600" />
            Éléments automatiques disponibles
          </h5>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="border p-3 rounded text-center">
              <Hash className="w-6 h-6 mx-auto text-teal-600 mb-2" />
              <p className="text-sm font-medium">Numéro de page</p>
              <p className="text-xs text-gray-600">Page actuelle</p>
            </div>
            <div className="border p-3 rounded text-center">
              <Calendar className="w-6 h-6 mx-auto text-teal-600 mb-2" />
              <p className="text-sm font-medium">Date actuelle</p>
              <p className="text-xs text-gray-600">Date d'impression</p>
            </div>
            <div className="border p-3 rounded text-center">
              <Clock className="w-6 h-6 mx-auto text-teal-600 mb-2" />
              <p className="text-sm font-medium">Heure actuelle</p>
              <p className="text-xs text-gray-600">Heure d'impression</p>
            </div>
            <div className="border p-3 rounded text-center">
              <User className="w-6 h-6 mx-auto text-teal-600 mb-2" />
              <p className="text-sm font-medium">Nom d'utilisateur</p>
              <p className="text-xs text-gray-600">Auteur du document</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600" />
            Personnalisation avancée
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Zones d'en-tête/pied de page</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Gauche :</strong> Généralement le nom du document</li>
                <li>• <strong>Centre :</strong> Titre principal ou logo</li>
                <li>• <strong>Droite :</strong> Date, heure ou numéro de page</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Options de mise en forme</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Modification de la police et de la taille</li>
                <li>• Ajout d'images ou de logos</li>
                <li>• Formatage du texte (gras, italique, couleur)</li>
                <li>• Ajustement des marges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Monitor className="w-6 h-6 text-indigo-600" />
        3. GESTION DE L'AFFICHAGE ET DE LA MISE EN PAGE
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            La gestion de l'affichage et de la mise en page est cruciale pour présenter vos données 
            de manière optimale, que ce soit à l'écran ou à l'impression. Excel offre plusieurs 
            modes d'affichage et options de configuration pour adapter vos documents à tous les besoins.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            Modes d'affichage
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Normal</h6>
              <p className="text-sm text-gray-600">
                Affichage par défaut pour la saisie et la modification des données. 
                Optimisé pour le travail quotidien.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Mise en page</h6>
              <p className="text-sm text-gray-600">
                Affiche la feuille comme elle apparaîtra à l'impression, 
                avec en-têtes et pieds de page visibles.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Aperçu des sauts</h6>
              <p className="text-sm text-gray-600">
                Montre les sauts de page automatiques et permet 
                de les ajuster manuellement.
              </p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon9/modes_affichage.png" 
            alt="Modes d'affichage dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Printer className="w-5 h-5 text-indigo-600" />
            Configuration de l'impression
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Orientation de la page</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Portrait :</strong> Hauteur {'>'} Largeur (par défaut)</li>
                <li>• <strong>Paysage :</strong> Largeur {'>'} Hauteur</li>
                <li>• Idéal pour les tableaux larges</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Taille du papier</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>A4 :</strong> Format standard (210×297 mm)</li>
                <li>• <strong>Letter :</strong> Format américain</li>
                <li>• <strong>Legal :</strong> Format juridique</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h6 className="font-medium text-gray-800 mb-2">Mise à l'échelle</h6>
            <p className="text-sm text-gray-600 mb-2">
              Ajustez la taille du contenu pour l'adapter à la page :
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>Ajuster à :</strong> Spécifiez un pourcentage (50% à 400%)</li>
              <li>• <strong>Ajuster à la page :</strong> Adapte automatiquement à une page</li>
              <li>• <strong>Ajuster largeur/hauteur :</strong> Contrôle précis des dimensions</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Columns className="w-5 h-5 text-green-600" />
            Gestion des sauts de page
          </h5>
          <p className="text-gray-700 mb-4">
            Contrôlez précisément où vos données seront coupées lors de l'impression :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Sauts automatiques</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Excel calcule automatiquement les sauts</li>
                <li>• Basés sur la taille du papier et les marges</li>
                <li>• Visibles en mode "Aperçu des sauts"</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Sauts manuels</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Onglet Mise en page → Sauts</li>
                <li>• Insérer un saut de page/colonne</li>
                <li>• Supprimer les sauts non désirés</li>
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
          Créez un rapport professionnel en utilisant toutes les techniques apprises : 
          fusion de cellules, en-têtes et pieds de page, et optimisation de la mise en page. 
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
          <a href="/cours/debutant/Lecon9/exercice_rapport_professionnel.xlsx" 
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
            Solution complète et détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/Lecon9/correction_rapport_professionnel.mp4"
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
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Fusion de cellules</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Ouvrez le fichier "Exercice_Rapport_Professionnel.xlsx"</li>
              <li>Fusionnez les cellules A1:E1 pour créer le titre principal</li>
              <li>Centrez le titre et appliquez une mise en forme attractive</li>
              <li>Fusionnez les cellules des sous-titres selon le modèle</li>
              <li>Centrez l'entête du tableau</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : En-têtes et pieds de page</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Ajoutez un en-tête avec le nom de l'entreprise (gauche)</li>
              <li>Insérez la date actuelle au centre de l'en-tête</li>
              <li>Placez le numéro de page à droite de l'en-tête</li>
              <li>Configurez un pied de page avec votre nom (gauche)</li>
              <li>Ajoutez "Confidentiel" au centre du pied de page</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Optimisation de la mise en page</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Configurez l'orientation en mode Paysage</li>
            <li>Vérifiez l'aperçu avant impression</li>
            <li>Ajustez les marges si nécessaire</li>
            <li>Testez différents modes d'affichage</li>
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
              Documents professionnels
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Utilisez la fusion uniquement pour les titres et en-têtes</li>
              <li>• Limitez les en-têtes à 3 lignes maximum</li>
              <li>• Testez toujours l'impression avant partage</li>
              <li>• Ajoutez des informations d'identification dans le pied de page</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Optimisation
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Utilisez des sauts de page manuels pour les longs documents</li>
              <li>• Ajoutez des filigranes via les en-têtes/pieds de page</li>
              <li>• Synchronisez les marges avec votre en-tête</li>
              <li>• Exportez en PDF pour conserver la mise en page</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon9 onResult={onResult} />
      </div>
    </div>
  );
}