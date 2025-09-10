import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon21 from "../../quizz/debutant/QuizLecon21";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  List, 
  CheckCircle, 
  AlertCircle, 
  Sliders, 
  Filter, 
  Hash, 
  Calendar, 
  Type, 
  Code, 
  MessageSquare, 
  ChevronDown, 
  ChevronsDown,
  Settings,
  RefreshCw,
  Copy,
  Trash2,
  Crosshair,
  Zap,
  Layout,
  BookOpen,
  Download,
  Video,
  Lightbulb 
} from "lucide-react";

export default function Lecon21({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <List className="w-8 h-8 text-blue-600" />
        Leçon 21 - VALIDATION DE DONNÉES BASIQUE (LISTES DÉROULANTES)
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser la validation des données dans Excel, une fonction essentielle 
          pour garantir la qualité et la cohérence de vos feuilles de calcul. Vous découvrirez comment créer 
          des listes déroulantes, contrôler les saisies numériques et temporelles, et personnaliser des messages 
          d'erreur efficaces.
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
              Créer des listes déroulantes dynamiques
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Configurer des validations numériques et de dates
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Personnaliser des messages d'aide et d'erreur
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser des formules personnalisées pour des règles complexes
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Sliders className="w-6 h-6 text-purple-600" />
        1. INTRODUCTION À LA VALIDATION DES DONNÉES
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La validation des données dans Excel permet de contrôler strictement les informations saisies 
            dans vos feuilles de calcul. Cette fonctionnalité agit comme un gardien qui vérifie chaque entrée 
            selon des règles prédéfinies, garantissant ainsi la qualité et la cohérence de vos données.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-600" />
            Types de validation disponibles
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Hash className="w-4 h-4 text-purple-600" />
                Validation numérique
              </h6>
              <p className="text-sm text-gray-600">
                Contrôle des nombres entiers ou décimaux dans des plages spécifiques
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                Dates et heures
              </h6>
              <p className="text-sm text-gray-600">
                Restriction des saisies à des périodes ou créneaux horaires
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Type className="w-4 h-4 text-purple-600" />
                Listes déroulantes
              </h6>
              <p className="text-sm text-gray-600">
                Menus avec options prédéfinies pour une saisie uniforme
              </p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon21/validation_types.png" 
            alt="Types de validation dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            Compatibilité Excel
          </h5>
          <p className="text-gray-700">
            Toutes les fonctionnalités présentées dans cette leçon sont compatibles avec Excel 2016 et les versions ultérieures. 
            Certaines options avancées comme les formules dynamiques peuvent nécessiter Excel 365 pour une optimisation maximale.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ChevronDown className="w-6 h-6 text-teal-600" />
        2. LISTES DÉROULANTES
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Les listes déroulantes sont la forme de validation la plus courante. Elles garantissent une saisie uniforme 
            et simplifient le travail des utilisateurs en limitant les choix à des options prédéfinies.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-teal-600" />
            Création pas à pas
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez la plage de cellules pour la liste
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Données</strong> → <strong>Validation des données</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Dans "Autoriser", sélectionnez <strong>Liste</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Définissez la source : valeurs séparées par ; ou référence de plage
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">5</span>
              <span className="text-gray-700">
                Cochez "Liste déroulante dans la cellule"
              </span>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon21/liste_deroulante.gif" 
            alt="Création d'une liste déroulante dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Hash className="w-6 h-6 text-indigo-600" />
        3. VALIDATIONS NUMÉRIQUES ET TEMPORELLES
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Contrôlez les valeurs numériques et les dates/heures pour garantir leur cohérence et leur validité 
            dans vos feuilles de calcul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-indigo-600" />
              Validation numérique
            </h5>
            
            <div className="mb-4">
              <h6 className="font-medium text-gray-800 mb-2">Options disponibles</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entier ou décimal</li>
                <li>• Comprise entre / Pas comprise entre</li>
                <li>• Égale à / Différente de</li>
                <li>• Supérieure à / Inférieure à</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple : Budget mensuel</h6>
              <p className="text-sm text-gray-600">
                Plage: 0 à 15 000 €<br />
                Message d'erreur: "Le budget ne peut excéder 15 000 € ni être négatif"
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              Validation temporelle
            </h5>
            
            <div className="mb-4">
              <h6 className="font-medium text-gray-800 mb-2">Options disponibles</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dates entre deux limites</li>
                <li>• Heures dans un créneau spécifique</li>
                <li>• Formules dynamiques (=AUJOURDHUI())</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple : Réservation</h6>
              <p className="text-sm text-gray-600">
                Dates: =AUJOURDHUI() à =AUJOURDHUI()+180<br />
                Formule: =ET(A1&gt;=AUJOURDHUI(), A1&lt;=AUJOURDHUI()+180)
              </p>
            </div>
          </div>
        </div>
      </div>
         <ImageZoomable 
            src="/cours/debutant/Lecon21/liste_deroulante_avancee.gif" 
            alt="Création d'une liste déroulante dans Excel" 
            style={{ maxHeight: 350 }} 
          />

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-orange-600" />
        4. FORMULES PERSONNALISÉES
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Pour des besoins spécifiques, Excel permet de créer des règles de validation complexes 
            à l'aide de formules personnalisées.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            Exemples de formules utiles
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Email</h6>
              <code className="block text-sm bg-gray-100 p-2 rounded">
                =ET(TROUVE("@",A1)&gt;0, TROUVE(".",A1)&gt;TROUVE("@",A1))
              </code>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Téléphone français</h6>
              <code className="block text-sm bg-gray-100 p-2 rounded">
                =ET(NBCAR(A1)=10, ESTNUM(A1), GAUCHE(A1,2)="01")
              </code>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Code postal</h6>
              <code className="block text-sm bg-gray-100 p-2 rounded">
                =ET(NBCAR(A1)=5, ESTNUM(A1))
              </code>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Pourcentage</h6>
              <code className="block text-sm bg-gray-100 p-2 rounded">
                =ET(A1&gt;=0, A1&lt;=1)
              </code>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-pink-600" />
        5. MESSAGES D'AIDE ET D'ERREUR
      </h3>

      <div className="mb-8">
        <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-4">
          <p className="text-gray-700">
            Personnalisez les messages qui guident les utilisateurs et expliquent les erreurs de saisie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Layout className="w-5 h-5 text-pink-600" />
              Messages d'aide
            </h5>
            
            <div className="mb-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• S'affichent quand la cellule est sélectionnée</li>
                <li>• Guide pour la saisie correcte</li>
                <li>• Ex: "La note doit être co"</li>
              </ul>
            </div>
            
            <ImageZoomable 
              src="/cours/debutant/Lecon21/message_aide.png" 
              alt="Message d'aide dans Excel" 
              style={{ maxHeight: 200 }} 
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-pink-600" />
              Messages d'erreur
            </h5>
            
            <div className="mb-4">
              <h6 className="font-medium text-gray-800 mb-2">Types d'alertes</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Arrêt</strong> : Bloque la saisie incorrecte</li>
                <li>• <strong>Avertissement</strong> : Permet de forcer la saisie</li>
                <li>• <strong>Information</strong> : Simple notification</li>
              </ul>
            </div>
            
            <ImageZoomable 
              src="/cours/debutant/Lecon21/message_erreur.png" 
              alt="Message d'erreur dans Excel" 
              style={{ maxHeight: 200 }} 
            />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Crosshair className="w-6 h-6 text-red-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en créant un formulaire de contact professionnel avec validation 
          des données complète. Téléchargez le fichier d'exercice et suivez les instructions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-red-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le modèle à compléter :
          </p>
          <a href="/cours/debutant/Lecon21/exercice_validation.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-red-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Solution détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/Lecon21/correction_validation.mp4"
            title="Correction de l'exercice de validation"
          />
        </div>
      </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-600" />
          Consignes de l'exercice
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">1. Formulaire de contact</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Créez une liste déroulante pour le type de demande (Commercial, Support, Réclamation)</li>
              <li>
                Ajoutez une validation pour l'email avec format personnalisé
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-gray-800">Astuce (formule email)</span>
                  </div>
                  <code className="block bg-gray-100 p-2 rounded text-sm">
                    =ET(ESTNUM(CHERCHE("@";A1));ESTNUM(CHERCHE(".";A1)))
                  </code>
                  <p className="text-gray-600 mt-1">⚡ Vérifie que l'adresse contient bien "@" et un point. On peut remplacer CHERCHE() par TROUVE()</p>
                </div>
              </li>
              <li>
                Limitez le numéro de téléphone à 10 chiffres
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-4 h-4 text-yellow-600" />
                    <span className="font-medium text-gray-800">Astuce (formule téléphone)</span>
                  </div>
                  <code className="block bg-gray-100 p-2 rounded text-sm">
                    =ET(ESTNUM(--A1);NBCAR(A1)=10)
                  </code>
                  <p className="text-gray-600 mt-1">⚡ Vérifie que le numéro contient exactement 10 chiffres.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">2. Gestion de budget</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Contrôlez les montants entre 0 et 5000€</li>
              <li>Ajoutez une validation de date pour les échéances (dans les 90 jours)</li>
              <li>Créez un message d'erreur personnalisé pour les dépassements</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">3. Liste des départements</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Créez une liste déroulante avec tous les départements français</li>
              <li>Ajoutez un message d'aide "Sélectionnez votre département"</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon21 onResult={onResult} />
      </div>
    </div>
  );
}