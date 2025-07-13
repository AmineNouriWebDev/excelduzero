import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon20 from "../../quizz/debutant/QuizLecon20";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  CalendarDays, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight, 
  Settings, 
  LayoutTemplate, 
  Palette, 
  Download, 
  Video, 
  MoveRight,
  Lightbulb,
  CalendarCheck,
  CalendarRange,
  Target
} from "lucide-react";

export default function Lecon20({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    preparation: true,
    mois: true,
    jours: true,
    semaine: true,
    miseEnForme: true,
    exercice: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <CalendarDays className="w-8 h-8" />
              Créer un Calendrier Dynamique dans Excel
            </h1>
            <p className="mt-2 opacity-90">Formation niveau débutant - Excel 2016 et versions ultérieures</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2 text-sm">
            Leçon 20
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-blue-50 rounded-lg p-5 mb-6">
          <p className="text-gray-700">
            Dans cette leçon, vous apprendrez à créer un calendrier dynamique qui s'adapte automatiquement à l'année sélectionnée, 
            avec mise en forme conditionnelle et gestion des jours de la semaine.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            Les compétences que vous allez acquérir :
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Utiliser les fonctions DATE et JOURSEM</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Créer des formules dynamiques pour les mois et jours</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Mettre en forme conditionnellement les week-ends</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Générer automatiquement le jour de la semaine</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Créer un calendrier qui s'adapte à n'importe quelle année</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section Préparation */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 text-left"
          onClick={() => toggleSection('preparation')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Settings className="w-5 h-5 text-blue-600" />
            Préparation de la Structure
          </h2>
          {expandedSections.preparation ? 
            <ChevronUp className="w-5 h-5 text-blue-600" /> : 
            <ChevronDown className="w-5 h-5 text-blue-600" />
          }
        </button>
        
        {expandedSections.preparation && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  Définir l'année de référence
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">A1</strong>, tapez <code>Année</code>
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">B1</strong>, saisissez une année (ex: <strong>2025</strong>)
                  </li>
                  <li className="text-gray-700">
                    Formatez B1 en <strong>Nombre sans décimales</strong>
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/etape1.png" 
                    alt="Définition de l'année dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Pourquoi cette étape est importante?
                </h4>
                <p className="text-gray-700">
                  La cellule B1 servira de référence pour toutes les formules de date. 
                  En changeant simplement cette valeur, tout votre calendrier s'adaptera automatiquement.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Mois */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-50 text-left"
          onClick={() => toggleSection('mois')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarRange className="w-5 h-5 text-purple-600" />
            Création des Mois
          </h2>
          {expandedSections.mois ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </button>
        
        {expandedSections.mois && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-purple-600" />
                  Lister les 12 mois
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la colonne A, à partir de <strong className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">A3</strong>, tapez les noms des 12 mois
                  </li>
                  <li className="text-gray-700">
                    Formatez-les en gras et avec une couleur distinctive
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/mois.png" 
                    alt="Liste des mois dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Jours */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-teal-50 text-left"
          onClick={() => toggleSection('jours')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-teal-600" />
            Génération des Jours
          </h2>
          {expandedSections.jours ? 
            <ChevronUp className="w-5 h-5 text-teal-600" /> : 
            <ChevronDown className="w-5 h-5 text-teal-600" />
          }
        </button>
        
        {expandedSections.jours && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-teal-600" />
                  Formule pour le premier jour du mois
                </h3>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm font-mono">=DATE($B$1;1;1)  // Pour janvier</pre>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Cette formule crée une date correspondant au 1er janvier de l'année sélectionnée.
                </p>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/premier-jour.png" 
                    alt="Formule du premier jour dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-teal-600" />
                  Générer tous les jours du mois
                </h3>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm font-mono">=SI(MOIS(B3+1)=1; B3+1; "")</pre>
                </div>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Placez cette formule dans la cellule <strong>B4</strong>
                  </li>
                  <li className="text-gray-700">
                    Copiez-la vers le bas pour couvrir 31 jours (jusqu'à B33)
                  </li>
                  <li className="text-gray-700">
                    Répétez pour chaque mois en adaptant le numéro du mois
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/generation-jours.gif" 
                    alt="Animation de génération des jours dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-teal-600" />
                  Afficher uniquement le numéro du jour
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Sélectionnez toutes les cellules de dates
                  </li>
                  <li className="text-gray-700">
                    Clic droit → <strong>Format de cellule</strong>
                  </li>
                  <li className="text-gray-700">
                    Personnalisé → Tapez <code>j</code> dans le champ Type
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/format-jour.png" 
                    alt="Format personnalisé pour les jours" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Jour de la Semaine */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-indigo-50 text-left"
          onClick={() => toggleSection('semaine')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarDays className="w-5 h-5 text-indigo-600" />
            Jour de la Semaine
          </h2>
          {expandedSections.semaine ? 
            <ChevronUp className="w-5 h-5 text-indigo-600" /> : 
            <ChevronDown className="w-5 h-5 text-indigo-600" />
          }
        </button>
        
        {expandedSections.semaine && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600" />
                  Formule pour le jour de la semaine
                </h3>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm font-mono">=TEXTE(B3;"dddd")</pre>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Cette formule convertit la date en texte correspondant au jour de la semaine (ex: "Lundi").
                </p>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/jour-semaine.png" 
                    alt="Formule pour le jour de la semaine" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-indigo-600" />
                  Alternative avec la fonction JOURSEM
                </h3>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm font-mono">=JOURSEM(B3;2)  // Retourne 1 (Lundi) à 7 (Dimanche)</pre>
                </div>
                
                <p className="text-gray-700">
                  Cette fonction est utile pour les calculs et la mise en forme conditionnelle.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Mise en Forme */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-orange-50 text-left"
          onClick={() => toggleSection('miseEnForme')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <Palette className="w-5 h-5 text-orange-600" />
            Mise en Forme Avancée
          </h2>
          {expandedSections.miseEnForme ? 
            <ChevronUp className="w-5 h-5 text-orange-600" /> : 
            <ChevronDown className="w-5 h-5 text-orange-600" />
          }
        </button>
        
        {expandedSections.miseEnForme && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <LayoutTemplate className="w-5 h-5 text-orange-600" />
                  Mise en forme conditionnelle des week-ends
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Sélectionnez les cellules de jours
                  </li>
                  <li className="text-gray-700">
                    Accédez à <strong>Accueil → Mise en forme conditionnelle → Nouvelle règle</strong>
                  </li>
                  <li className="text-gray-700">
                    Choisissez <strong>Utiliser une formule pour déterminer les cellules à formater</strong>
                  </li>
                  <li className="text-gray-700">
                    Entrez la formule : <code>=OU(JOURSEM(B3;2)=6; JOURSEM(B3;2)=7)</code>
                  </li>
                  <li className="text-gray-700">
                    Définissez un format (ex: fond gris clair)
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/mise-en-forme-weekend.gif" 
                    alt="Mise en forme conditionnelle des week-ends" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-600" />
                  Améliorations supplémentaires
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Ajoutez des bordures entre les mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Utilisez des couleurs différentes pour chaque mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Ajoutez une colonne "Événements" pour les notes personnelles</span>
                  </li>
                </ul>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/calendrier-final.png" 
                    alt="Exemple de calendrier final" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Astuce de pro
                </h4>
                <p className="text-gray-700">
                  Pour ajouter des jours fériés, créez une liste à part avec les dates, 
                  puis utilisez la fonction RECHERCHEV pour les afficher automatiquement dans votre calendrier.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exercice Pratique */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-green-50 text-left"
          onClick={() => toggleSection('exercice')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-green-600" />
            Exercice Pratique - Création de Calendrier
          </h2>
          {expandedSections.exercice ? 
            <ChevronUp className="w-5 h-5 text-green-600" /> : 
            <ChevronDown className="w-5 h-5 text-green-600" />
          }
        </button>
        
        {expandedSections.exercice && (
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Objectif de l'exercice
              </h3>
              
              <p className="text-gray-700 mb-4">
                Créez un calendrier dynamique pour l'année 2025 qui inclut:
              </p>
              
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
                <li>Tous les mois avec leurs jours</li>
                <li>Le jour de la semaine pour chaque date</li>
                <li>Une mise en forme conditionnelle pour les week-ends</li>
                <li>Une colonne pour les événements personnels</li>
                <li>La possibilité de changer d'année facilement</li>
              </ol>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-green-600" />
                    Fichier de départ
                  </h4>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger le modèle (.xlsx)
                  </a>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    Correction vidéo
                  </h4>
                  <PremiumVideo
                    url="/cours/debutant/calendrier/correction-exercice.mp4"
                    title="Correction de l'exercice sur les calendriers"
                  />
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Conseils pour réussir l'exercice
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Commencez par définir l'année de référence en B1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Utilisez la fonction DATE pour le premier jour de chaque mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>La formule SI avec MOIS permet de générer la suite des jours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Testez votre calendrier avec différentes années</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-8 border-t pt-8">
        <QuizLecon20 onResult={onResult} />
      </div>
    </div>
  );
}