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
  Target,
  Users,
  Clock,
  List,
} from "lucide-react";

export default function Lecon20({ onResult }) {
  const [expandedSections, setExpandedSections] = useState({
    preparation: true,
    structure: true,
    formules: true,
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
              Créer un Calendrier Mensuel Dynamique dans Excel
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
            Dans cette leçon, vous apprendrez à créer un calendrier mensuel dynamique qui s'adapte automatiquement 
            au mois et à l'année sélectionnés, avec une mise en forme conditionnelle pour les week-ends.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-5 mb-6">
          <p className="text-gray-700 mb-4">
            Les compétences que vous allez acquérir :
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Utiliser les fonctions DATE, JOURSEM et FIN.MOIS</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Créer des formules dynamiques pour afficher les jours en grille</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Mettre en forme conditionnellement les week-ends</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Gérer l'affichage des jours du mois précédent/suivant</span>
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
                  Définir l'année et le mois de référence
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">A1</strong>, tapez <code>Année</code>
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">B1</strong>, saisissez une année (ex: <strong>2025</strong>)
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">A2</strong>, tapez <code>Mois</code>
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">B2</strong>, saisissez un numéro de mois (1 à 12)
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/etape1.png" 
                    alt="Définition de l'année et du mois dans Excel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  Cellules d'aide (optionnel mais recommandé)
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Pour simplifier nos formules, créons quelques cellules d'aide :
                </p>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">D1</strong>, 
                    tapez <code>=DATE(B1;B2;1)</code> (Premier jour du mois)
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">D2</strong>, 
                    tapez <code>=JOURSEM(D1;2)</code> (Jour de la semaine du 1er)
                  </li>
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">D3</strong>, 
                    tapez <code>=JOUR(FIN.MOIS(D1;0))</code> (Nombre de jours dans le mois)
                  </li>
                </ol>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Pourquoi ces cellules d'aide?
                  </h4>
                  <p className="text-gray-700">
                    Ces cellules nous permettront de créer des formules plus lisibles et faciles à comprendre. 
                    Vous pourrez les masquer une fois le calendrier terminé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Structure */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-purple-50 text-left"
          onClick={() => toggleSection('structure')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <LayoutTemplate className="w-5 h-5 text-purple-600" />
            Structure du Calendrier
          </h2>
          {expandedSections.structure ? 
            <ChevronUp className="w-5 h-5 text-purple-600" /> : 
            <ChevronDown className="w-5 h-5 text-purple-600" />
          }
        </button>
        
        {expandedSections.structure && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-purple-600" />
                  Créer l'en-tête du mois
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">B4</strong>, 
                    tapez <code>=TEXTE(DATE(B1;B2;1);"mmmm aaaa")</code>
                  </li>
                  <li className="text-gray-700">
                    Fusionnez les cellules <strong>B4:H4</strong> et centrez le texte
                  </li>
                  <li className="text-gray-700">
                    Appliquez une mise en forme (gras, taille 14, couleur bleue)
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/entete-mois.png" 
                    alt="En-tête du mois dynamique" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-purple-600" />
                  Créer l'en-tête des jours de la semaine
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Dans la cellule <strong className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">B5</strong>, tapez <code>Lun</code>
                  </li>
                  <li className="text-gray-700">
                    Dans les cellules <strong>C5</strong> à <strong>H5</strong>, tapez <code>Mar, Mer, Jeu, Ven, Sam, Dim</code>
                  </li>
                  <li className="text-gray-700">
                    Centrez et mettez en gras ces cellules d'en-tête
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/structure-jours.png" 
                    alt="En-tête des jours de la semaine" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-purple-600" />
                  Préparer la grille du calendrier
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Sélectionnez la plage <strong>B6:H11</strong> (6 lignes x 7 colonnes)
                  </li>
                  <li className="text-gray-700">
                    Ajoutez des bordures à toutes ces cellules
                  </li>
                  <li className="text-gray-700">
                    Ajustez la hauteur des lignes et la largeur des colonnes 
                  </li>
                  <li className="text-gray-700">
                    Centrez le contenu horizontalement et verticalement
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/grille-calendrier.gif" 
                    alt="Grille du calendrier" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section Formules */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <button 
          className="w-full flex justify-between items-center p-4 bg-teal-50 text-left"
          onClick={() => toggleSection('formules')}
        >
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <CalendarCheck className="w-5 h-5 text-teal-600" />
            Formules Dynamiques
          </h2>
          {expandedSections.formules ? 
            <ChevronUp className="w-5 h-5 text-teal-600" /> : 
            <ChevronDown className="w-5 h-5 text-teal-600" />
          }
        </button>
        
        {expandedSections.formules && (
          <div className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-teal-600" />
                  Formule pour afficher les jours dans la grille
                </h3>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <pre className="text-sm font-mono whitespace-pre-wrap">
{`=SI(ET(LIGNE(A1)<=6;COLONNE(A1)<=7);
   SI((LIGNE(A1)-1)*7+COLONNE(A1)-$D$2+1>0;
      SI((LIGNE(A1)-1)*7+COLONNE(A1)-$D$2+1<=$D$3;
         (LIGNE(A1)-1)*7+COLONNE(A1)-$D$2+1;
         "");
      "");
   "")`}
                  </pre>
                </div>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Saisissez cette formule dans la cellule <strong>B6</strong>
                  </li>
                  <li className="text-gray-700">
                    Copiez cette cellule (Ctrl+C)
                  </li>
                  <li className="text-gray-700">
                    Sélectionnez la plage <strong>B6:H11</strong>
                  </li>
                  <li className="text-gray-700">
                    Collez la formule (Ctrl+V)
                  </li>
                </ol>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    Explication de la formule
                  </h4>
                  <p className="text-gray-700">
                    Cette formule calcule pour chaque cellule de la grille si elle doit afficher un jour du mois sélectionné.
                    Elle tient compte du décalage du premier jour du mois et du nombre total de jours dans le mois.
                  </p>
                </div>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/formule-grille.gif" 
                    alt="Animation de la formule de grille" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MoveRight className="w-5 h-5 text-teal-600" />
                  Test et validation
                </h3>
                
                <p className="text-gray-700 mb-4">
                  Testez votre calendrier avec ces configurations :
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <strong>Janvier 2024</strong><br/>
                    <small className="text-gray-600">Commence un lundi</small>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <strong>Février 2024</strong><br/>
                    <small className="text-gray-600">29 jours (bissextile)</small>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <strong>Mai 2024</strong><br/>
                    <small className="text-gray-600">Commence un mercredi</small>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <strong>Décembre 2024</strong><br/>
                    <small className="text-gray-600">Commence un dimanche</small>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">Résultat attendu</h4>
                  <p className="text-gray-700">
                    Votre calendrier doit afficher correctement tous les jours du mois sélectionné, 
                    avec les espaces vides en début et fin de mois.
                  </p>
                </div>
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
            Mise en Forme Conditionnelle
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
                    Sélectionnez la plage <strong>B6:H11</strong>
                  </li>
                  <li className="text-gray-700">
                    Accédez à <strong>Accueil → Mise en forme conditionnelle → Nouvelle règle</strong>
                  </li>
                  <li className="text-gray-700">
                    Choisissez <strong>Utiliser une formule pour déterminer les cellules à formater</strong>
                  </li>
                  <li className="text-gray-700">
                    Entrez la formule : <code>=ET(B6{'<>'}"";OU(JOURSEM(DATE($B$1;$B$2;B6);2)=6;JOURSEM(DATE($B$1;$B$2;B6);2)=7))</code>
                  </li>
                  <li className="text-gray-700">
                    Définissez un format avec un fond gris clair (RGB: 240, 240, 240)
                  </li>
                </ol>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    Explication de la formule de mise en forme
                  </h4>
                  <p className="text-gray-700">
                    <strong>ET(B6{'<>'}""; ...)</strong> : Vérifie que la cellule n'est pas vide<br/>
                    <strong>JOURSEM(...; 2)=6</strong> : Samedi<br/>
                    <strong>JOURSEM(...; 2)=7</strong> : Dimanche<br/>
                    La condition <strong>OU</strong> applique la mise en forme pour les deux jours du week-end.
                  </p>
                </div>
                
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
                  Mise en forme du jour actuel (bonus)
                </h3>
                
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li className="text-gray-700">
                    Créez une nouvelle règle de mise en forme conditionnelle
                  </li>
                  <li className="text-gray-700">
                    Utilisez la formule : <code>=ET(B6{'<>'}"";DATE($B$1;$B$2;B6)=AUJOURDHUI())</code>
                  </li>
                  <li className="text-gray-700">
                    Définissez un format avec un fond bleu clair et du texte en gras
                  </li>
                </ol>
                
                <div className="mt-4">
                  <ImageZoomable 
                    src="/cours/debutant/lecon20/jour-actuel.gif" 
                    alt="Mise en évidence du jour actuel" 
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-600" />
                  Finitions esthétiques
                </h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Appliquez une bordure plus épaisse autour de tout le calendrier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Utilisez une police sans-serif (Arial, Calibri) pour une meilleure lisibilité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Ajustez l'espacement des cellules pour un rendu professionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Masquez les cellules d'aide (D1:D3) si vous les avez utilisées</span>
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
                  Pour créer un calendrier interactif, vous pouvez ajouter des contrôles de formulaire (curseurs ou liste déroulante) 
                  pour sélectionner le mois et l'année au lieu de modifier directement les cellules B1 et B2.
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
            Exercice Pratique - Calendrier de Pointage pour Techniciens
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
                Transformez le calendrier mensuel en un outil de pointage pour techniciens. Vous devrez créer un système qui permet de :
              </p>
              
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
                <li>Visualiser les plannings de plusieurs techniciens</li>
                <li>Suivre les heures de travail et les rendez-vous</li>
                <li>Calculer automatiquement le nombre d'heures travaillées par technicien</li>
                <li>Mettre en forme les jours avec différents types d'activités</li>
              </ol>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-green-600" />
                    Fichier de départ
                  </h4>
                  <a href="/fichiers/exercices/calendrier-pointage.xlsx" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger le modèle (.xlsx)
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Le fichier contient déjà un calendrier de base et une liste de techniciens avec leurs spécialités.
                  </p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Video className="w-5 h-5 text-indigo-600" />
                    Correction vidéo
                  </h4>
                  <PremiumVideo
                    url="/cours/debutant/calendrier/correction-pointage.mp4"
                    title="Correction de l'exercice sur le calendrier de pointage"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Structure du fichier de départ
                </h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <List className="w-5 h-5 text-blue-600" />
                    Données fournies dans le fichier
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Colonne J:</strong> Liste des techniciens (Jean Dupont, Marie Martin, etc.)</li>
                    <li><strong>Colonne K:</strong> Spécialités des techniciens</li>
                    <li><strong>Colonne L:</strong> Dates des rendez-vous (ex: 15/01/2024)</li>
                    <li><strong>Colonne M:</strong> Noms des techniciens pour chaque rendez-vous</li>
                    <li><strong>Colonne N:</strong> Heures de travail pour chaque rendez-vous</li>
                    <li><strong>Colonne O:</strong> Type d'intervention (Maintenance, Installation, Réparation)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Instructions détaillées
                </h3>
                
                <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                  <li>
                    <strong>Ajouter des listes déroulantes pour l'année et le mois</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Créez des listes déroulantes en B1 (pour les années 2023-2025) et B2 (pour les mois 1-12) 
                      en utilisant la validation des données.
                    </p>
                  </li>
                  <li>
                    <strong>Ajouter une liste déroulante pour le technicien</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Créez une liste déroulante en F1 avec les noms des techniciens (colonne J).
                    </p>
                  </li>
                  <li>
                    <strong>Adapter le calendrier pour afficher les rendez-vous</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Modifiez la formule du calendrier pour qu'elle affiche le jour et, en dessous, 
                      les heures de travail du technicien sélectionné pour ce jour.
                    </p>
                  </li>
                  <li>
                    <strong>Mise en forme conditionnelle avancée</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Ajoutez une mise en forme pour différencier les types d'intervention 
                      (couleurs différentes pour Maintenance, Installation, Réparation).
                    </p>
                  </li>
                  <li>
                    <strong>Créer un résumé mensuel</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Ajoutez une section qui calcule le total d'heures travaillées et le nombre 
                      de rendez-vous pour le technicien sélectionné.
                    </p>
                  </li>
                </ol>
              </div>
              
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Conseils pour réussir l'exercice
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Utilisez la fonction SOMME.SI.ENS pour calculer les heures par technicien et par date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Créez des règles de mise en forme conditionnelle avec des formules basées sur le type d'intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Utilisez la concaténation pour afficher le jour et les heures dans la même cellule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Testez avec différents techniciens et différentes périodes</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Formules clés pour l'exercice
                </h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Pour les listes déroulantes:</strong> Données → Validation des données → Liste</p>
                  <p><strong>Pour afficher les heures:</strong> =B6 & SI(SOMME.SI.ENS(...){'>'}0; "\n" & SOMME.SI.ENS(...) & "h"; "")</p>
                  <p><strong>Pour la mise en forme:</strong> =ET(B6{'"<>""'}; RECHERCHEV(DATE($B$1;$B$2;B6)&$F$1; $L:$O; 4; FAUX)="Maintenance")</p>
                </div>
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