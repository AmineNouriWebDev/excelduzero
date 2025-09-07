import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon25 from "../../quizz/debutant/QuizLecon25";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Copy, 
  Filter, 
  Trash2, 
  AlertCircle, 
  BarChart2, 
  Palette,
  Sliders,
  CheckCircle,
  BookOpen,
  Download,
  Video,
  ChevronDown,
  ChevronRight,
  Zap,
  List
} from "lucide-react";

export default function Lecon25({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Copy className="w-8 h-8 text-blue-600" />
        Leçon 25 - Gestion des doublons et Mise en forme conditionnelle basique
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Maîtrisez les techniques essentielles pour identifier, gérer les doublons et appliquer des règles visuelles automatiques dans Excel. 
          Cette leçon vous apprendra à nettoyer vos données et à les rendre plus parlantes visuellement.
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
              Identifier et marquer visuellement les doublons
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Supprimer efficacement les doublons dans vos datasets
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer des règles de mise en forme conditionnelle basiques
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les barres de données et les jeux d'icônes
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Filter className="w-6 h-6 text-purple-600" />
        1. GESTION DES DOUBLONS
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Les doublons peuvent fausser vos analyses. Excel offre des outils simples pour les identifier et les supprimer.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-purple-600" />
            Identifier les doublons
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez la plage de données à vérifier
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Accédez à l'onglet <strong>Accueil</strong> → <strong>Mise en forme conditionnelle</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Choisissez <strong>Règles de mise en surbrillance</strong> → <strong>Valeurs en double</strong>
              </span>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon25/identifier-doublons.gif" 
            alt="Identifier les doublons avec mise en forme conditionnelle" 
            style={{ maxHeight: 250 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-purple-600" />
            Supprimer les doublons
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-purple-600" />
                Méthode standard
              </h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Sélectionnez vos données</li>
                <li>2. Onglet <strong>Données</strong> → <strong>Supprimer les doublons</strong></li>
                <li>3. Choisissez les colonnes à vérifier</li>
                <li>4. Validez avec <strong>OK</strong></li>
              </ol>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-600" />
                Astuce importante
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Toujours faire une copie de sauvegarde avant suppression</li>
                <li>• Excel conserve la première occurrence et supprime les suivantes</li>
                <li>• Vérifiez l'ordre des colonnes sélectionnées</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon25/supprimer-doublons.gif" 
            alt="Boîte de dialogue Supprimer les doublons" 
            style={{ maxHeight: 200 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Palette className="w-6 h-6 text-teal-600" />
        2. MISE EN FORME CONDITIONNELLE BASIQUE
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            La mise en forme conditionnelle permet d'appliquer automatiquement des styles visuels en fonction du contenu des cellules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-teal-600" />
              Règles de base
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Valeurs supérieures/inférieures à un seuil</li>
              <li>• Valeurs comprises entre deux nombres</li>
              <li>• Texte contenant certaines chaînes</li>
              <li>• Dates antérieures/postérieures</li>
            </ul>
            <ImageZoomable 
              src="/cours/debutant/Lecon25/regles-base.png" 
              alt="Règles de mise en forme conditionnelle basiques" 
              className="mt-4"
              style={{ maxHeight: 150 }} 
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-teal-600" />
              Barres de données
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Représentation graphique des valeurs</li>
              <li>• Barres dégradées ou monochromes</li>
              <li>• Orientation gauche-droite ou droite-gauche</li>
              <li>• Personnalisation des couleurs</li>
            </ul>
            <ImageZoomable 
              src="/cours/debutant/Lecon25/barres-donnees.png" 
              alt="Barres de données dans Excel" 
              className="mt-4"
              style={{ maxHeight: 150 }} 
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-teal-600" />
              Nuances de couleurs
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Dégradés à 2 ou 3 couleurs</li>
              <li>• Visualisation des hauts/bas/moyennes</li>
              <li>• Adapté aux matrices de valeurs</li>
              <li>• Personnalisation des seuils</li>
            </ul>
            <ImageZoomable 
              src="/cours/debutant/Lecon25/nuances-couleurs.png" 
              alt="Nuances de couleurs dans Excel" 
              className="mt-4"
              style={{ maxHeight: 150 }} 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-teal-600" />
            Gérer les règles existantes
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez les cellules avec mise en forme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Accueil → Mise en forme conditionnelle
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Choisissez <strong>Gérer les règles</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Modifiez, supprimez ou changez l'ordre des règles
              </span>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon25/gerer-regles.gif" 
            alt="Gestion des règles de mise en forme" 
            style={{ maxHeight: 250 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-orange-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez les techniques apprises pour nettoyer un fichier clients et mettre en évidence les données importantes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez la base de données clients à nettoyer :
          </p>
          <a href="/cours/debutant/Lecon25/exercice-clients.xlsx" 
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
            Solution détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/Lecon25/correction-clients.mp4"
            title="Correction de l'exercice sur les clients"
          />
        </div>
      </div>
<div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
  <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
    <List className="w-5 h-5 text-orange-600" />
    Consignes de l'exercice
  </h4>
  <div className="space-y-4">
    
    <div>
      <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Gestion des doublons</h5>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Identifiez les doublons dans la colonne <strong>ID Client</strong> à l’aide de la mise en forme conditionnelle.</li>
        <li>Surlignez les enregistrements en double pour les repérer visuellement.</li>
        <li>Supprimez les doublons en utilisant l’outil <strong>Supprimer les doublons</strong> (conservez la première occurrence).</li>
        <li>Comptez le nombre de lignes avant et après suppression pour vérifier le nettoyage.</li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Mise en forme conditionnelle basique</h5>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Mettez en surbrillance en vert les clients avec un <strong>solde supérieur à 800 €</strong>.</li>
        <li>Colorez en orange les clients dont les <strong>dépenses mensuelles</strong> sont comprises entre 100 € et 200 €.</li>
        <li>Appliquez un fond bleu clair pour les clients habitant <strong>Paris</strong>.</li>
        <li>Surlignez en vert les clients dont la <strong>dernière connexion</strong> est postérieure au 01/01/2025.</li>
        <li>Ajoutez des <strong>barres de données</strong> dans la colonne <em>Ancienneté (jours)</em>.</li>
        <li>Utilisez un <strong>jeu d’icônes</strong> sur la colonne <em>Statut</em> (✅ Actif, ❌ Inactif).</li>
      </ul>
    </div>

    <div>
      <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Règles supplémentaires</h5>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Mettez en évidence les <strong>3 clients ayant le solde le plus élevé</strong> (Top 3).</li>
        <li>Appliquez un <strong>dégradé de couleurs</strong> (rouge → vert) sur la colonne <em>Dépenses mensuelles (€)</em>.</li>
        <li>Allez dans <strong>Gérer les règles</strong> et réorganisez-les pour que la mise en surbrillance des <strong>soldes &gt; 800 €</strong> soit prioritaire.</li>
      </ul>
    </div>

  </div>
</div>


      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Astuces et Raccourcis
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              Gestion des doublons
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>Alt + A + M</strong> : Supprimer les doublons</li>
              <li>• <strong>Ctrl + Espace</strong> : Sélectionner colonne</li>
              <li>• Toujours vérifier les colonnes avant suppression</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-600" />
              Mise en forme
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>Alt + H + L</strong> : Menu mise en forme conditionnelle</li>
              <li>• <strong>Règles rapides</strong> : Accès direct aux formats courants</li>
              <li>• <strong>Gérer les règles</strong> : Pour des contrôles avancés</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <QuizLecon25 onResult={onResult} />
      </div>
    </div>
  );
}