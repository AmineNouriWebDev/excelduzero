import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon22 from "../../quizz/debutant/QuizLecon22";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Lock, 
  Unlock, 
  File, 
  Shield, 
  Key, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Edit,
  Eye,
  EyeOff,
  BookOpen,
  Download,
  Video,
  Layout
} from "lucide-react";

export default function Lecon22({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Shield className="w-8 h-8 text-blue-600" />
        Leçon 22 - Protection de Feuille et de Classeur dans Excel
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à sécuriser vos classeurs et feuilles Excel pour protéger vos données sensibles.
          Vous découvrirez comment chiffrer vos fichiers avec des mots de passe, protéger des feuilles spécifiques,
          et gérer finement les permissions au niveau des cellules.
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
              Protéger un classeur entier avec un mot de passe
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Protéger des feuilles spécifiques avec des permissions contrôlées
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Gérer finement les droits d'accès au niveau des cellules
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Modifier ou supprimer les protections existantes
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lock className="w-6 h-6 text-purple-600" />
        1. PROTECTION DU CLASSEUR AVEC MOT DE PASSE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La protection du classeur avec chiffrement par mot de passe est la méthode la plus sécurisée pour protéger vos fichiers Excel.
            Elle empêche complètement l'ouverture du fichier sans le mot de passe correct.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Key className="w-5 h-5 text-purple-600" />
            Activation de la protection
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Menu <strong>Fichier</strong> → <strong>Informations</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Cliquez sur <strong>Protéger le classeur</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Sélectionnez <strong>Chiffrer avec mot de passe</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Entrez et confirmez votre mot de passe
              </span>
            </li>
          </ol>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ImageZoomable 
              src="/cours/debutant/Lecon22/protection_classeur.png" 
              alt="Menu de protection du classeur" 
              style={{ maxHeight: 250 }} 
            />
           
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Unlock className="w-5 h-5 text-purple-600" />
            Gestion des mots de passe
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Edit className="w-4 h-4 text-purple-600" />
                Changer le mot de passe
              </h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Accédez à Chiffrer avec mot de passe</li>
                <li>2. Supprimez les astérisques existants</li>
                <li>3. Saisissez le nouveau mot de passe</li>
                <li>4. Confirmez et sauvegardez</li>
              </ol>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Unlock className="w-4 h-4 text-purple-600" />
                Supprimer la protection
              </h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Accédez à Chiffrer avec mot de passe</li>
                <li>2. Supprimez les astérisques</li>
                <li>3. Laissez le champ vide</li>
                <li>4. Sauvegardez le fichier</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-yellow-50 mt-4 p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Important
            </h6>
            <p className="text-sm text-gray-600">
              Si vous perdez le mot de passe d'un classeur chiffré, il est impossible de le récupérer.
              Conservez toujours une copie de vos mots de passe dans un endroit sécurisé.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Layout className="w-6 h-6 text-teal-600" />
        2. PROTECTION DE FEUILLE AVEC MOT DE PASSE
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            La protection de feuille permet de restreindre les modifications sur une feuille spécifique
            tout en autorisant certaines actions comme la sélection des cellules ou le tri des données.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" />
            Activation de la protection
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les cellules qui doivent rester modifiables
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Menu <strong>Accueil</strong> → <strong>Format</strong> → <strong>Verrouiller la cellule</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Cliquez sur <strong>Protéger la feuille</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Saisissez et confirmez votre mot de passe
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">5</span>
              <span className="text-gray-700">
                Choisissez les actions autorisées
              </span>
            </li>
          </ol>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ImageZoomable 
              src="/cours/debutant/Lecon22/protection_feuille_fenetre.png" 
              alt="Menu de protection de feuille" 
              style={{ maxHeight: 250 }} 
            />
            <ImageZoomable 
              src="/cours/debutant/Lecon22/protection_feuille.png" 
              alt="Options de protection de feuille" 
              style={{ maxHeight: 250 }} 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-teal-600" />
            Options de protection avancées
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-teal-600" />
                Permissions visuelles
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Afficher/masquer les formules</li>
                <li>• Contrôler l'affichage des commentaires</li>
                <li>• Autoriser le tri et le filtrage</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-teal-600" />
                Restrictions d'édition
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Empêcher la modification des cellules</li>
                <li>• Bloquer l'insertion/suppression de colonnes</li>
                <li>• Interdire la modification de la mise en forme</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 mt-4 p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2">
              Protection de plages spécifiques
            </h6>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Sélectionnez toute la feuille et désactivez "Verrouiller la cellule"</li>
              <li>2. Sélectionnez les cellules à protéger</li>
              <li>3. Activez "Verrouiller la cellule" pour ces cellules</li>
              <li>4. Activez la protection de la feuille</li>
            </ol>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Settings className="w-6 h-6 text-indigo-600" />
        3. GESTION DES PERMISSIONS
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel offre un contrôle granulaire des permissions qui permet de protéger certaines parties d'un document
            tout en laissant d'autres zones accessibles pour modification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              Protection de cellules spécifiques
            </h5>
            
            <div className="mb-4">
              <ol className="text-sm text-gray-600 space-y-2">
                <li>1. Sélectionnez les cellules à laisser modifiables</li>
                <li>2. Cliquez droit → Format de cellule</li>
                <li>3. Onglet Protection → Décochez "Verrouillée"</li>
                <li>4. Activez la protection de la feuille</li>
              </ol>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Cas d'usage</h6>
              <p className="text-sm text-gray-600">
                Dans un formulaire, laissez les champs de saisie modifiables tout en protégeant
                les formules de calcul et les instructions.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              Protection de classeur structure
            </h5>
            
            <div className="mb-4">
              <ol className="text-sm text-gray-600 space-y-2">
                <li>1. Onglet Révision → Protéger le classeur</li>
                <li>2. Cochez "Structure"</li>
                <li>3. Entrez un mot de passe</li>
                <li>4. Confirmez le mot de passe</li>
              </ol>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Effets</h6>
              <p className="text-sm text-gray-600">
                Empêche l'ajout/suppression de feuilles, le changement de noms des feuilles,
                et le déplacement des feuilles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-orange-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en protégeant un classeur financier avec différents niveaux de sécurité.
          
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le classeur financier à protéger :
          </p>
          <a href="/cours/debutant/Lecon22/exercice_protection.xlsx" 
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
            url="/cours/debutant/Lecon22/correction_protection.mp4"
            title="Correction de l'exercice de protection"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <File className="w-5 h-5 text-orange-600" />
          Consignes de l'exercice
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Protection du classeur</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Chiffrez le classeur avec le mot de passe "Secure123!"</li>
              <li>Protégez la structure du classeur avec le mot de passe "Structure456"</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Protection des feuilles</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sur la feuille "Données", protégez toutes les cellules sauf les colonnes B et C</li>
              <li>Sur la feuille "Calculs", protégez toutes les cellules avec formules</li>
              <li>Autorisez le tri sur la feuille "Résumé"</li>
            </ul>
          </div>
          
      
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          Bonnes pratiques de sécurité
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Key className="w-5 h-5 text-blue-600" />
              Gestion des mots de passe
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Utilisez des mots de passe forts (12+ caractères, maj/min/chiffres)</li>
              <li>• Ne réutilisez pas les mêmes mots de passe sur plusieurs fichiers</li>
              <li>• Conservez une copie sécurisée de vos mots de passe</li>
              <li>• Changez les mots de passe périodiquement</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Stratégie de protection
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Protégez d'abord le classeur, puis les feuilles</li>
              <li>• Testez toujours les protections après leur mise en place</li>
              <li>• Documentez les zones protégées et les mots de passe utilisés</li>
              <li>• Utilisez la protection structure pour les classeurs complexes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon22 onResult={onResult} />
      </div>
    </div>
  );
}