import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon1 from '@/components/quizz/debutant/QuizLecon1';
import PremiumVideo from "../../ui/PremiumVideo";
import { FileSpreadsheet, Monitor, Grid3X3, Calculator, BarChart3, Database, Settings, Eye, ArrowRight, ArrowDown, MousePointer2, Layout, Palette, Menu, Save, FolderOpen, Printer, Undo, Redo, Search, HelpCircle, ZoomIn, Maximize, Command,FileText } from "lucide-react";

// Leçon 1 du niveau débutant : Découverte de l'interface Excel
export default function Lecon1({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <FileSpreadsheet className="text-green-600" size={40} />
          Découverte de l'interface Excel
        </h1>
        <p className="text-lg text-gray-600">
          Apprenez à maîtriser l'interface d'Excel et ses composants essentiels
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Monitor className="text-blue-600" />
          Introduction à Excel
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Excel est un tableur développé par Microsoft. Il s'agit d'une
            application conçue pour créer et utiliser des tableaux, appelés «
            feuilles de calcul ». Dans Word, on travaille sur un document. Dans
            PowerPoint, on travaille sur une présentation. Dans Excel, on travaille
            sur un <strong>classeur</strong>. Par défaut, le classeur est enregistré
            dans un fichier portant l'extension « .xlsx ».
          </p>

          <p className="text-gray-700 mb-4">
            Excel fait partie de la suite Microsoft Office et est largement utilisé
            pour organiser, analyser et visualiser des données. Voici ses principales
            fonctionnalités :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Grid3X3 className="text-green-600" size={20} />
              <strong>Feuilles de calcul</strong>
            </div>
            <p className="text-sm text-gray-600">
              Créez des feuilles avec des lignes et colonnes pour organiser vos
              données
            </p>
          </div>

          <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="text-purple-600" size={20} />
              <strong>Formules et fonctions</strong>
            </div>
            <p className="text-sm text-gray-600">
              Excel propose une vaste gamme de formules pour effectuer des calculs
              complexes
            </p>
          </div>

          <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="text-blue-600" size={20} />
              <strong>Graphiques et visualisations</strong>
            </div>
            <p className="text-sm text-gray-600">
              Créez des graphiques pour visualiser vos données de manière claire
            </p>
          </div>

          <div className="bg-white border-l-4 border-orange-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Database className="text-orange-600" size={20} />
              <strong>Tableaux croisés dynamiques</strong>
            </div>
            <p className="text-sm text-gray-600">
              Résumez et analysez rapidement de grandes quantités de données
            </p>
          </div>

          <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="text-red-600" size={20} />
              <strong>Macros et automatisation</strong>
            </div>
            <p className="text-sm text-gray-600">
              Automatisez des tâches répétitives en enregistrant des macros
            </p>
          </div>

          <div className="bg-white border-l-4 border-cyan-500 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Layout className="text-cyan-600" size={20} />
              <strong>Mise en forme avancée</strong>
            </div>
            <p className="text-sm text-gray-600">
              Personnalisez l'apparence de vos données avec une mise en forme professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* L'écran d'accueil Excel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Eye className="text-green-600" />
          L'écran d'accueil Excel
        </h2>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Lors du lancement d'Excel, vous arrivez sur l'écran d'accueil qui vous permet de :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Créer un nouveau classeur vierge</li>
            <li>Choisir parmi des modèles prédéfinis</li>
            <li>Ouvrir un fichier récent</li>
            <li>Parcourir vos fichiers</li>
          </ul>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/ecran_accueil_excel.png"
          alt="Écran d'accueil Excel"
          style={{ maxHeight: 400 }}
        />
      </section>

      {/* Interface principale d'Excel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Layout className="text-blue-600" />
          Interface principale d'Excel
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            L'interface Excel comprend plusieurs éléments essentiels que vous devez connaître :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-md">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <strong>Barre de titre :</strong> Nom du fichier et contrôles de la fenêtre
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-md">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <strong>Barre d'accès rapide :</strong> Raccourcis vers les commandes fréquentes
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-md">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <strong>Le ruban :</strong> Barre d'outils principale avec tous les onglets
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-md">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <strong>Zone de nom :</strong> Référence de la cellule active
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-md">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <strong>Barre de formule :</strong> Zone de saisie et d'édition
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <strong>Barre d'état :</strong> Informations et modes d'affichage
              </div>
            </div>
          </div>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/interface_excel_complete.png"
          alt="Interface complète d'Excel"
          style={{ maxHeight: 500 }}
        />
      </section>

      {/* Barre de titre et barre d'accès rapide */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Barre de titre et barre d'accès rapide
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Layout className="text-blue-600" size={16} />
              Barre de titre
            </h4>
            <ul className="text-sm space-y-2">
              <li>• Affiche le nom du fichier Excel</li>
              <li>• Indique si le fichier est enregistré</li>
              <li>• Contient les boutons Réduire, Agrandir, Fermer</li>
              <li>• Peut afficher [Mode de compatibilité] pour les anciens formats</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Command className="text-green-600" size={16} />
              Barre d'accès rapide
            </h4>
            <ul className="text-sm space-y-2">
              <li>• Accès direct aux commandes fréquentes</li>
              <li>• Personnalisable selon vos besoins</li>
              <li>• Par défaut : Enregistrer, Annuler, Rétablir</li>
              <li>• Clic droit pour ajouter/supprimer des commandes</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h5 className="font-semibold mb-2">Personnaliser la barre d'accès rapide :</h5>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Méthode 1 :</strong> Clic droit sur une commande du ruban → "Ajouter à la barre d'outils Accès rapide"
            </div>
            <div>
              <strong>Méthode 2 :</strong> Flèche déroulante → "Autres commandes" → Personnaliser
            </div>
          </div>
        </div>
      </section>

      {/* Le ruban et ses onglets */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Menu className="text-purple-600" />
          Le ruban et ses onglets
        </h3>

        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Le ruban est l'élément central de l'interface Excel. Il regroupe toutes les commandes 
            dans des onglets thématiques pour une meilleure organisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-blue-600">Fichier</h5>
            <p className="text-sm text-gray-600">Nouveau, Ouvrir, Enregistrer, Imprimer, Options</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-green-600">Accueil</h5>
            <p className="text-sm text-gray-600">Mise en forme, Police, Alignement, Cellules</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-purple-600">Insertion</h5>
            <p className="text-sm text-gray-600">Tableaux, Graphiques, Images, Liens</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-orange-600">Mise en page</h5>
            <p className="text-sm text-gray-600">Orientation, Marges, Impression, Arrière-plan</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-red-600">Formules</h5>
            <p className="text-sm text-gray-600">Bibliothèque de fonctions, Calcul, Audit</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-cyan-600">Données</h5>
            <p className="text-sm text-gray-600">Tri, Filtre, Validation, Tableaux croisés</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-indigo-600">Révision</h5>
            <p className="text-sm text-gray-600">Vérification, Commentaires, Protection</p>
          </div>
          <div className="bg-white border p-4 rounded-lg">
            <h5 className="font-semibold mb-2 text-pink-600">Affichage</h5>
            <p className="text-sm text-gray-600">Modes d'affichage, Zoom, Fenêtres</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-semibold mb-2 flex items-center gap-2">
            <Eye className="text-blue-600" size={16} />
            Astuces pour le ruban :
          </h5>
          <ul className="text-sm space-y-1">
            <li>• Double-clic sur un onglet pour masquer/afficher le ruban</li>
            <li>• Ctrl + F1 pour basculer l'affichage du ruban</li>
            <li>• Clic droit sur le ruban pour le personnaliser</li>
            <li>• Les onglets contextuels apparaissent selon le contenu sélectionné</li>
          </ul>
        </div>
      </section>

      {/* Zone de nom et barre de formule */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Zone de nom et barre de formule
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <MousePointer2 className="text-orange-600" size={16} />
              Zone de nom
            </h4>
            <ul className="text-sm space-y-2">
              <li>• Affiche la référence de la cellule active (ex: A1, B5)</li>
              <li>• Permet de naviguer rapidement (tapez A1 et Entrée)</li>
              <li>• Affiche le nom des plages nommées</li>
              <li>• Indique la taille de la sélection multiple</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Calculator className="text-green-600" size={16} />
              Barre de formule
            </h4>
            <ul className="text-sm space-y-2">
              <li>• Zone principale de saisie et d'édition</li>
              <li>• Affiche le contenu réel de la cellule</li>
              <li>• Extensible en hauteur pour les formules longues</li>
              <li>• Bouton fx pour accéder aux fonctions</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h5 className="font-semibold mb-2">Avantages de la barre de formule :</h5>
          <ul className="space-y-1 text-sm">
            <li>• Idéale pour les saisies longues et les formules complexes</li>
            <li>• Ne masque pas les données de la feuille pendant la saisie</li>
            <li>• Permet de voir la formule même quand la cellule affiche le résultat</li>
            <li>• Redimensionnable selon vos besoins</li>
          </ul>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/barre_de_formule.gif"
          alt="Barre de formule Excel"
          style={{ maxHeight: 300 }}
        />
      </section>

      {/* Comprendre les cellules */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Grid3X3 className="text-green-600" />
          Comprendre les cellules
        </h3>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Les cellules sont les unités de base d'Excel. Comprendre leur fonctionnement est essentiel.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="text-green-600" size={16} />
                <strong>16 384 colonnes</strong>
              </div>
              <p className="text-sm text-gray-600">
                Nommées de A à Z, puis AA à AZ, BA à BZ... jusqu'à XFD
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDown className="text-blue-600" size={16} />
                <strong>1 048 576 lignes</strong>
              </div>
              <p className="text-sm text-gray-600">
                Numérotées de 1 à 1 048 576
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <MousePointer2 className="text-purple-600" size={16} />
              Référence des cellules
            </h4>
            <p className="text-gray-700 mb-2">
              Chaque cellule a une référence unique formée par :
            </p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Lettre de colonne</strong> (A, B, C...)</li>
              <li>• <strong>Numéro de ligne</strong> (1, 2, 3...)</li>
              <li>• <strong>Exemple :</strong> A1, B5, Z100, AA1</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-3">Cellule active</h4>
            <p className="text-gray-700 mb-2">
              La <strong>cellule active</strong> est celle qui est sélectionnée. Elle se distingue par :
            </p>
            <ul className="text-sm space-y-1">
              <li>• Un cadre plus épais</li>
              <li>• Sa référence apparaît dans la zone de nom</li>
              <li>• Son contenu s'affiche dans la barre de formule</li>
              <li>• C'est là que s'inscrit la prochaine saisie</li>
            </ul>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon1/celluleActiveExcel.png"
            alt="Cellule active Excel"
            style={{ maxHeight: 300 }}
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-semibold mb-2 flex items-center gap-2">
            <Settings className="text-gray-600" size={16} />
            Raccourcis de navigation :
          </h5>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + →</kbd>
                <span>Dernière colonne utilisée</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + ↓</kbd>
                <span>Dernière ligne utilisée</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + Home</kbd>
                <span>Cellule A1</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + End</kbd>
                <span>Dernière cellule utilisée</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">F5</kbd>
                <span>Atteindre une cellule</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Tab</kbd>
                <span>Cellule suivante (droite)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre d'état */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Barre d'état : informations utiles
        </h3>

        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            La barre d'état, située en bas de l'écran, fournit des informations précieuses :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Calculator className="text-blue-600" size={16} />
                Calculs automatiques
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Quand vous sélectionnez plusieurs cellules numériques :
              </p>
              <ul className="text-sm space-y-1">
                <li>• <strong>Somme :</strong> Total des valeurs</li>
                <li>• <strong>Moyenne :</strong> Moyenne arithmétique</li>
                <li>• <strong>Nombre :</strong> Nombre de cellules non vides</li>
                <li>• <strong>Min/Max :</strong> Valeurs minimum et maximum</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Eye className="text-green-600" size={16} />
                Modes d'affichage
              </h4>
              <ul className="text-sm space-y-1">
                <li>• <strong>Normal :</strong> Affichage standard</li>
                <li>• <strong>Mise en page :</strong> Aperçu impression</li>
                <li>• <strong>Sauts de page :</strong> Gestion des pages</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                + Curseur de zoom pour ajuster l'affichage
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h5 className="font-semibold mb-2">Personnalisation de la barre d'état :</h5>
          <p className="text-sm text-gray-600">
            Clic droit sur la barre d'état pour choisir quelles informations afficher :
            mode Caps Lock, Num Lock, statistiques étendues, etc.
          </p>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon1/barre_etat.png"
          alt="Barre d'état Excel"
          style={{ maxHeight: 200 }}
        />
      </section>

      {/* Modes d'affichage */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Layout className="text-blue-600" />
          Modes d'affichage et zoom
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-green-600" size={20} />
              <h4 className="font-semibold">Modes d'affichage</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <strong>Normal :</strong> Mode de travail standard
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Mise en page :</strong> Aperçu avant impression avec marges
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Sauts de page :</strong> Visualisation des zones d'impression
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <ZoomIn className="text-blue-600" size={20} />
              <h4 className="font-semibold">Contrôles de zoom</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Curseur de zoom :</strong> Dans la barre d'état</li>
              <li>• <strong>Ctrl + molette :</strong> Zoom rapide</li>
              <li>• <strong>Ctrl + "+" :</strong> Zoom avant</li>
              <li>• <strong>Ctrl + "-" :</strong> Zoom arrière</li>
              <li>• <strong>Ctrl + 0 :</strong> Zoom 100%</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Plein écran</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <ArrowRight className="text-purple-700 mt-1" size={16} />
              <span>Affichage → Plein écran (ou Ctrl + Maj + F1)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="text-purple-700 mt-1" size={16} />
              <span>Échap (Esc) pour quitter le mode plein écran</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="text-purple-700 mt-1" size={16} />
              <span>Idéal pour maximiser l'espace de travail</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Exercice pratique */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-2">
          <FileSpreadsheet className="text-pink-600" />
          Exercice pratique : Identifier les composants
        </h2>
        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400 mb-4">
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Ouvrez Excel et créez un nouveau classeur</li>
            <li>Identifiez ces éléments dans l'interface :
              <ul className="list-disc pl-6 mt-2">
                <li>Barre de titre</li>
                <li>Barre d'accès rapide</li>
                <li>Onglet "Accueil" du ruban</li>
                <li>Zone de nom</li>
                <li>Barre de formule</li>
                <li>Barre d'état</li>
              </ul>
            </li>
            <li>Sélectionnez plusieurs cellules et observez les calculs dans la barre d'état</li>
            <li>Testez les différents modes d'affichage (Normal, Mise en page)</li>
            <li>Utilisez le zoom pour agrandir/réduire l'affichage</li>
          </ol>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
          <strong>Correction vidéo :</strong> Retrouvez la correction détaillée de cet exercice en vidéo ci-dessous !
        </div>
        {/* Accès premium à la vidéo de correction */}
        <PremiumVideo url="https://youtu.be/QiSOq-2fiAI" title="Correction vidéo de l'exercice" />
      </section>
    
      <section id="quiz" className="mb-12">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border-l-4 border-yellow-500">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FileText className="text-yellow-600" />
            8. Quiz d'évaluation
          </h2>
          <div className="text-gray-700 mb-6">
            <p className="mb-4">
              Testez vos connaissances sur la saisie et manipulation des données avec ce quiz.
              Vous devez obtenir au moins 70% pour valider la leçon.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>5 questions à choix multiples</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Basé sur les concepts de cette leçon</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Pas de limite de temps</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <QuizLecon1 onResult={onResult} />
          </div>
        </div>
      </section>
    </div>
  );
}