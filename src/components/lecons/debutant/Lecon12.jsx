import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon12 from "../../quizz/debutant/QuizLecon12";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  FileText,
  Layers,
  Settings,
  Link,
  Printer,
  Hash,
  Layout,
  Copy,
  Eye,
  Target,
  Lightbulb,
  BookOpen,
  Video,
  Download,
  CheckCircle,
  ArrowRightLeft,
  FileSpreadsheet,
  Bookmark,
  Grid,
  AlignLeft,
  Calendar,
  BarChart3,
  Combine,
  ClipboardList
} from "lucide-react";

export default function Lecon12({ onResult }) {
  

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Layers className="w-8 h-8 text-blue-600" />
        CRÉATION DE RAPPORTS MULTI-FEUILLES
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à créer des rapports professionnels qui s'étendent sur plusieurs 
          feuilles de calcul. Vous découvrirez comment coordonner l'impression, unifier la mise en 
          forme et créer des documents cohérents avec une numérotation continue et des en-têtes 
          uniformes sur l'ensemble du classeur.
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
              Imprimer plusieurs feuilles en une seule opération
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer une numérotation continue sur plusieurs feuilles
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Unifier les en-têtes et pieds de page sur tout le classeur
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Gérer les sauts de page et l'impression sélective
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FileSpreadsheet className="w-6 h-6 text-purple-600" />
        1. SÉLECTION ET IMPRESSION MULTIPLE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel permet d'imprimer plusieurs feuilles simultanément en les sélectionnant 
            en groupe. Cette technique est fondamentale pour créer des rapports cohérents 
            sur plusieurs pages ou sections.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-600" />
            Sélection de feuilles multiples
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Feuilles adjacentes :</strong> Cliquez sur la première feuille, puis Shift + clic sur la dernière
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Feuilles non-adjacentes :</strong> Ctrl + clic sur chaque feuille désirée
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Toutes les feuilles :</strong> Clic droit sur un onglet → "Sélectionner toutes les feuilles"
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/selection_feuilles.gif" 
            alt="Sélection de feuilles multiples" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Printer className="w-5 h-5 text-purple-600" />
            Impression groupée
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les feuilles à imprimer (onglets surlignés en blanc)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Ctrl + P</strong> ou <strong>Fichier → Imprimer</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Vérifiez que "Imprimer les feuilles actives" est sélectionné
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/impression_groupee.gif" 
            alt="Impression de feuilles multiples" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-yellow-600" />
            Astuce importante
          </h5>
          <p className="text-gray-700">
            Lorsque des feuilles sont sélectionnées en groupe, toute modification (mise en forme, 
            paramètres d'impression) s'applique à <strong>toutes</strong> les feuilles sélectionnées. 
            Cliquez sur un onglet non-sélectionné pour désactiver le mode groupe.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Hash className="w-6 h-6 text-teal-600" />
        2. NUMÉROTATION CONTINUE
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Pour créer des rapports professionnels, il est essentiel d'avoir une numérotation 
            continue qui traverse toutes les feuilles. Excel propose plusieurs méthodes pour 
            gérer cette numérotation de manière automatique.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-600" />
            Numérotation automatique
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Méthode 1: En-tête/Pied de page</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Insertion → En-tête et pied de page</li>
                <li>• Utilisez <strong>&[Page]</strong> pour le numéro de page</li>
                <li>• Utilisez <strong>&[Pages]</strong> pour le total</li>
                <li>• Format : "Page &[Page] sur &[Pages]"</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Méthode 2: Formule personnalisée</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Créez une cellule avec formule</li>
                <li>• Copiez sur toutes les feuilles</li>
                <li>• Utilisez des références externes</li>
                <li>• Idéal pour numérotation complexe</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/numerotation_pages.gif" 
            alt="Configuration de la numérotation" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-teal-600" />
            Numérotation avancée
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Première page :</strong> Mise en page → Paramètres → Première page
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Numérotation par section :</strong> Chaque feuille peut avoir sa propre série
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Format personnalisé :</strong> Romain, alphabétique, ou numérique
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/numerotation_avancee.png" 
            alt="Options de numérotation avancée" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-blue-600" />
            Exemple pratique
          </h5>
          <p className="text-gray-700 mb-3">
            Pour un rapport de 3 feuilles avec numérotation continue :
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Activez le mode groupe sur les 3 feuilles</li>
            <li>Insertion → En-tête et pied de page</li>
            <li>Ajoutez au pied de page : "Page &[Page] sur &[Pages]"</li>
            <li>Désactivez le mode groupe</li>
            <li>Vérifiez l'aperçu : 1/10, 2/10, 3/10... jusqu'à 10/10</li>
          </ol>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Layout className="w-6 h-6 text-indigo-600" />
        3. UNIFORMISATION DES EN-TÊTES ET PIEDS DE PAGE
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            La cohérence visuelle est cruciale pour des rapports professionnels. Apprenez 
            à créer des en-têtes et pieds de page uniformes sur toutes les feuilles, avec 
            des éléments dynamiques qui s'adaptent au contenu de chaque section.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlignLeft className="w-5 h-5 text-indigo-600" />
            Création d'en-têtes uniformes
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez toutes les feuilles concernées
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Insertion → En-tête et pied de page</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Configurez l'en-tête avec les éléments communs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Utilisez <strong>&[Onglet]</strong> pour le nom de la feuille
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/entetes_uniformes.gif" 
            alt="Création d'en-têtes uniformes" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Grid className="w-5 h-5 text-indigo-600" />
            Codes d'en-tête et pied de page
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Codes essentiels</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>&[Page]</strong> : Numéro de page</li>
                <li>• <strong>&[Pages]</strong> : Nombre total de pages</li>
                <li>• <strong>&[Date]</strong> : Date actuelle</li>
                <li>• <strong>&[Heure]</strong> : Heure actuelle</li>
                <li>• <strong>&[Onglet]</strong> : Nom de la feuille</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Codes avancés</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>&[Fichier]</strong> : Nom du fichier</li>
                <li>• <strong>&[Chemin]</strong> : Chemin complet</li>
                <li>• <strong>&[Image]</strong> : Insertion d'image</li>
                <li>• <strong>&D</strong> : Date courte</li>
                <li>• <strong>&T</strong> : Heure courte</li>
              </ul>
            </div>
          </div>
          

        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Copy className="w-5 h-5 text-indigo-600" />
            Copie et personnalisation
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Copie vers toutes les feuilles :</strong> Modifiez en mode groupe
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Personnalisation individuelle :</strong> Sortez du mode groupe et modifiez
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Première page différente :</strong> Cochez l'option dans les paramètres
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            Exemple complet
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">En-tête</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gauche : Logo de l'entreprise</li>
                <li>• Centre : "RAPPORT MENSUEL - &[Onglet]"</li>
                <li>• Droite : "&[Date]"</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Pied de page</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gauche : "Confidentiel"</li>
                <li>• Centre : "Page &[Page] sur &[Pages]"</li>
                <li>• Droite : "&[Fichier]"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Combine className="w-6 h-6 text-orange-600" />
        4. GESTION DES SAUTS DE PAGE ET IMPRESSION SÉLECTIVE
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Contrôlez précisément quelles parties de vos feuilles sont imprimées et comment 
            elles s'articulent entre elles. Cette maîtrise est essentielle pour créer des 
            rapports professionnels avec une pagination logique.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-orange-600" />
            Gestion des sauts de page
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Aperçu des sauts :</strong> Affichage → Aperçu des sauts de page
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Saut manuel :</strong> Mise en page → Sauts → Insérer un saut
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Suppression :</strong> Mise en page → Sauts → Supprimer le saut
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                <strong>Réinitialisation :</strong> Mise en page → Sauts → Rétablir tous les sauts
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/sauts_page.gif" 
            alt="Gestion des sauts de page" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Link className="w-5 h-5 text-orange-600" />
            Impression sélective
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Par plage de cellules</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sélectionnez la plage désirée</li>
                <li>• Fichier → Imprimer</li>
                <li>• Choisissez "Imprimer la sélection"</li>
                <li>• Idéal pour des sections spécifiques</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Par zone d'impression</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Définissez une zone d'impression</li>
                <li>• Mise en page → Zone d'impression</li>
                <li>• Répétez sur chaque feuille</li>
                <li>• Permanent jusqu'à modification</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon12/impression_selective.gif" 
            alt="Options d'impression sélective" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            Bonnes pratiques
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Préparation</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vérifiez l'aperçu avant impression</li>
                <li>• Testez sur une feuille avant impression massive</li>
                <li>• Sauvegardez vos paramètres d'impression</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Optimisation</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Utilisez des sauts de page manuels</li>
                <li>• Ajustez les marges pour gagner de l'espace</li>
                <li>• Désactivez l'impression des lignes de grille</li>
                <li>• Activez l'option "Noir et blanc" si nécessaire</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section: Exercice pratique */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-600" />
        5. EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez toutes les techniques apprises en créant un rapport multi-feuilles professionnel.
          Téléchargez le fichier d'exercice et suivez les instructions.
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
          <a href="/cours/debutant/Lecon12/exercice_rapports_multi_feuilles.xlsx" 
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
            url="/cours/debutant/lecon12/correction_exercice.mp4"
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
              <li>Ouvrez le fichier "Rapport_Annuel.xlsx"</li>
              <li>Activez le mode groupe pour les feuilles "Q1", "Q2", "Q3", "Q4"</li>
              <li>Définissez l'orientation Paysage pour toutes les feuilles</li>
              <li>Ajustez les marges en mode Étroites</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Configuration</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Créez un en-tête commun avec le logo à gauche, le titre "RAPPORT ANNUEL 2024" au centre et la date à droite</li>
              <li>Créez un pied de page avec "Confidentiel" à gauche, la numérotation continue "Page &[Page] sur &[Pages]" au centre, et le nom du fichier à droite</li>
              <li>Définissez une zone d'impression (A1:G50) pour chaque feuille</li>
              <li>Vérifiez les sauts de page et ajustez si nécessaire</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Finalisation</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Imprimez les quatre feuilles en une seule opération</li>
            <li>Vérifiez que la numérotation est continue sur les 4 feuilles</li>
            <li>Exportez l'ensemble du classeur en PDF</li>
          </ol>
        </div>
      </div>

      {/* Synthèse des compétences acquises */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" />
          Synthèse des compétences acquises
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Techniques maîtrisées</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Impression groupée de plusieurs feuilles</li>
              <li>• Numérotation continue sur tout le classeur</li>
              <li>• Création d'en-têtes/pieds de page dynamiques</li>
              <li>• Gestion des sauts de page entre feuilles</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Applications professionnelles</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Rapports financiers annuels</li>
              <li>• Dossiers techniques multi-sections</li>
              <li>• Présentations commerciales structurées</li>
              <li>• Documents administratifs complexes</li>
            </ul>
          </div>
        </div>
      </div>

     
      
        {/* Quiz d'évaluation */}
            <div className="mt-12">
              <QuizLecon12 onResult={onResult} />
            </div>
    </div>
  );
}