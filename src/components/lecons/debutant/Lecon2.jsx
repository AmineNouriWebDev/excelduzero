import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon2 from '@/components/quizz/debutant/QuizLecon2';
import PremiumVideo from "../../ui/PremiumVideo";
import { FileSpreadsheet, FilePlus, FileMinus, FileEdit, Copy, Move, Layers, ArrowRight, ArrowLeft, Plus, Minus, MousePointer2, Grid3X3, FolderPlus, FolderMinus, LayoutGrid,Palette } from "lucide-react";

export default function Lecon2({ onResult }) {


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <Layers className="text-blue-600" size={40} />
          Navigation et gestion des feuilles Excel
        </h1>
        <p className="text-lg text-gray-600">
          Maîtrisez l'organisation de vos classeurs et la manipulation des feuilles de calcul
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <LayoutGrid className="text-blue-600" />
          Introduction à la gestion des feuilles
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Un classeur Excel est composé d'une ou plusieurs <strong>feuilles de calcul</strong>. 
            Savoir naviguer et gérer ces feuilles est essentiel pour organiser vos données efficacement.
          </p>

          <p className="text-gray-700">
            Dans cette leçon, vous apprendrez à :
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
            <li>Ajouter, supprimer et renommer des feuilles</li>
            <li>Déplacer et copier des feuilles</li>
            <li>Grouper des feuilles pour des opérations simultanées</li>
            <li>Naviguer efficacement dans les classeurs complexes</li>
            <li>Personnaliser l'apparence des onglets de feuilles</li>
          </ul>
        </div>
      </section>

      {/* Structure du classeur */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Grid3X3 className="text-green-600" />
          Structure du classeur Excel
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-green-600" size={20} />
              Composants d'un classeur
            </h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Feuilles de calcul :</strong> Espaces de travail principaux</li>
              <li>• <strong>Feuilles de graphiques :</strong> Pour les visualisations</li>
              <li>• <strong>Feuilles macro :</strong> Pour l'automatisation (XLM)</li>
              <li>• <strong>Onglets :</strong> Accès aux différentes feuilles</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MousePointer2 className="text-blue-600" size={20} />
              Navigation de base
            </h3>
            <ul className="text-sm space-y-2">
              <li>• Cliquer sur un onglet pour activer la feuille</li>
              <li>• Utiliser les flèches de navigation pour les onglets masqués</li>
              <li>• Clic droit sur les flèches pour liste complète</li>
              <li>• Onglet "+" pour ajouter une nouvelle feuille</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gestion des feuilles */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <FileEdit className="text-purple-600" />
          Opérations de base sur les feuilles
        </h2>

        {/* Ajouter des feuilles */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FilePlus className="text-green-600" />
            Ajouter des feuilles
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Plus className="text-green-600" size={16} />
                <strong>Méthode 1</strong>
              </div>
              <p className="text-sm text-gray-600">
                Cliquer sur l'icône <span className="font-mono bg-gray-100 px-1">+</span> à côté des onglets
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FolderPlus className="text-blue-600" size={16} />
                <strong>Méthode 2</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit sur un onglet → "Insérer" → "Feuille de calcul"
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Maj + F11</kbd>
                <strong>Raccourci clavier</strong>
              </div>
              <p className="text-sm text-gray-600">
                Ajoute une nouvelle feuille
              </p>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/ajouter_feuille.gif"
            alt="Ajouter une feuille dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>

        {/* Supprimer des feuilles */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FileMinus className="text-red-600" />
            Supprimer des feuilles
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Minus className="text-red-600" size={16} />
                <strong>Méthode standard</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit sur l'onglet → "Supprimer"
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FolderMinus className="text-orange-600" size={16} />
                <strong>Attention</strong>
              </div>
              <p className="text-sm text-gray-600">
                La suppression est définitive. Pas de corbeille pour les feuilles.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <p className="text-sm">
              <strong>Astuce :</strong> Vous ne pouvez pas supprimer la dernière feuille d'un classeur. 
              Excel nécessite au moins une feuille.
            </p>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/supprimer_feuille.gif"
            alt="Supprimer une feuille dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>

        {/* Renommer des feuilles */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FileEdit className="text-blue-600" />
            Renommer des feuilles
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="text-blue-600" size={16} />
                <strong>Double-clic</strong>
              </div>
              <p className="text-sm text-gray-600">
                Double-cliquer sur l'onglet et saisir le nouveau nom
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileEdit className="text-purple-600" size={16} />
                <strong>Menu contextuel</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit → "Renommer"
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Bonnes pratiques de nommage :</h4>
            <ul className="text-sm space-y-1">
              <li>• Maximum 31 caractères</li>
              <li>• Éviter : / \ ? * [ ]</li>
              <li>• Ne pas commencer ou finir par une apostrophe</li>
              <li>• Utiliser des noms descriptifs (Ventes, Dépenses, etc.)</li>
            </ul>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/renommer_feuille.gif"
            alt="Renommer une feuille dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>

        {/* Déplacer des feuilles */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <ArrowRight className="text-orange-600" />
            Déplacer des feuilles
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="text-orange-600" size={16} />
                <strong>Glisser-déposer</strong>
              </div>
              <p className="text-sm text-gray-600">
                Cliquer-glisser l'onglet à sa nouvelle position
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Move className="text-yellow-600" size={16} />
                <strong>Menu contextuel</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit → "Déplacer ou copier" → Choisir la position
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-sm">
              <strong>Astuce :</strong> Lorsque vous déplacez une feuille, maintenez la touche 
              <kbd className="mx-1 px-2 py-1 bg-gray-200 rounded text-xs">Ctrl</kbd> 
              enfoncée pour créer une copie à la nouvelle position.
            </p>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/deplacer_feuille.gif"
            alt="Déplacer une feuille dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>

        {/* Copier des feuilles */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <Copy className="text-purple-600" />
            Copier des feuilles
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Copy className="text-purple-600" size={16} />
                <strong>Glisser-déposer + Ctrl</strong>
              </div>
              <p className="text-sm text-gray-600">
                Glisser l'onglet en maintenant <kbd className="px-1 mx-1 bg-gray-200 rounded">Ctrl</kbd> enfoncé
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FilePlus className="text-pink-600" size={16} />
                <strong>Menu contextuel</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit → "Déplacer ou copier" → Cocher "Créer une copie"
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Copie entre classeurs :</h4>
            <p className="text-sm">
              Dans la boîte de dialogue "Déplacer ou copier", vous pouvez choisir un autre classeur ouvert 
              comme destination pour votre feuille copiée.
            </p>
          </div>

        
        </div>
      </section>

      {/* Personnalisation des onglets */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Palette className="text-pink-600" />
          Personnalisation des onglets
        </h2>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Personnalisez l'apparence de vos onglets pour mieux organiser visuellement votre classeur :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Palette className="text-pink-600" size={20} />
                Changer la couleur des onglets
              </h3>
              <ul className="text-sm space-y-2">
                <li>• Clic droit sur l'onglet → "Couleur d'onglet"</li>
                <li>• Choisissez une couleur dans la palette</li>
                <li>• Utilisez des codes couleur cohérents pour différentes catégories</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <LayoutGrid className="text-blue-600" size={20} />
                Masquer/Afficher des onglets
              </h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Masquer :</strong> Clic droit → "Masquer"</li>
                <li>• <strong>Afficher :</strong> Clic droit sur n'importe quel onglet → "Afficher" → Sélectionnez la feuille</li>
                <li>• Utile pour les feuilles intermédiaires ou sensibles</li>
              </ul>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/couleur_onglets.gif"
            alt="Changer la couleur des onglets dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>
      </section>

      {/* Gestion des groupes de feuilles */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <Layers className="text-green-600" />
          Groupes de feuilles
        </h2>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Le groupement de feuilles permet d'effectuer des opérations simultanément sur plusieurs feuilles.
            Très utile pour appliquer la même mise en forme ou les mêmes formules sur plusieurs feuilles.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Créer un groupe de feuilles
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="text-blue-600" size={16} />
                <strong>Feuilles adjacentes</strong>
              </div>
              <p className="text-sm text-gray-600">
                Cliquez sur le premier onglet, puis Maj + clic sur le dernier
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer2 className="text-purple-600" size={16} />
                <strong>Feuilles non adjacentes</strong>
              </div>
              <p className="text-sm text-gray-600">
                Cliquez sur le premier onglet, puis Ctrl + clic sur les autres
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="text-orange-600" size={16} />
                <strong>Toutes les feuilles</strong>
              </div>
              <p className="text-sm text-gray-600">
                Clic droit sur un onglet → "Sélectionner toutes les feuilles"
              </p>
            </div>
          </div>

          <ImageZoomable
            src="/cours/debutant/lecon2/selection_multiple.gif"
            alt="Sélection multiple de feuilles dans Excel"
            style={{ maxHeight: 250 }}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Utiliser les groupes de feuilles
          </h3>

          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Lorsqu'un groupe est actif :</h4>
            <ul className="text-sm space-y-2">
              <li>• Les modifications sont appliquées à toutes les feuilles sélectionnées</li>
              <li>• La barre de titre indique "[Groupe de travail]"</li>
              <li>• Les onglets des feuilles groupées sont soulignés</li>
              <li>• Attention : Toute action est répliquée sur toutes les feuilles</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Dissoudre un groupe :</h4>
            <p className="text-sm">
              Clic droit sur un onglet → "Dissocier les feuilles" ou cliquer sur une feuille non sélectionnée
            </p>
          </div>

       
        </div>
      </section>

      {/* Navigation avancée */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <ArrowRight className="text-blue-600" />
          Navigation avancée
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <ArrowLeft className="text-blue-600" size={20} />
              Raccourcis de navigation
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + PgUp</kbd>
                <span>Feuille précédente</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + PgDn</kbd>
                <span>Feuille suivante</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">F6</kbd>
                <span>Basculer entre les volets du classeur</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl + F6</kbd>
                <span>Basculer entre les classeurs ouverts</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MousePointer2 className="text-green-600" size={20} />
              Navigation avec la souris
            </h3>
            <ul className="text-sm space-y-2">
              <li>• Utilisez les flèches de navigation à gauche des onglets</li>
              <li>• Faites un clic droit sur les flèches pour la liste complète</li>
              <li>• Faites glisser la barre de séparation pour voir plus d'onglets</li>
              <li>• Utilisez la molette de la souris sur les onglets pour naviguer</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">Personnalisation de la barre d'onglets :</h4>
          <p className="text-sm">
            Faites glisser le séparateur à droite des onglets pour ajuster la largeur de la barre d'onglets.
            Cela permet d'afficher plus d'onglets simultanément dans les classeurs complexes.
          </p>
        </div>

        <ImageZoomable
          src="/cours/debutant/lecon2/navigation_onglets.gif"
          alt="Navigation entre les onglets dans Excel"
          style={{ maxHeight: 250 }}
        />
      </section>

      {/* Exercice pratique */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <FileSpreadsheet className="text-purple-600" />
          Exercice pratique : Organisation d'un classeur
        </h2>
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-4">
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Créez un nouveau classeur Excel</li>
            <li>Ajoutez 5 nouvelles feuilles</li>
            <li>Renommez les feuilles comme suit :
              <ul className="list-disc pl-6 mt-2">
                <li>Sommaire</li>
                <li>Ventes Q1</li>
                <li>Ventes Q2</li>
                <li>Dépenses</li>
                <li>Résumé</li>
              </ul>
            </li>
            <li>Déplacez la feuille "Résumé" pour qu'elle soit à côté de "Sommaire"</li>
            <li>Copiez la feuille "Ventes Q1" et renommez la copie "Ventes Q3"</li>
            <li>Appliquez des couleurs différentes aux onglets :
              <ul className="list-disc pl-6 mt-2">
                <li>Bleu pour les feuilles de ventes</li>
                <li>Rouge pour les dépenses</li>
                <li>Vert pour le sommaire et le résumé</li>
              </ul>
            </li>
            <li>Créez un groupe avec les feuilles de ventes et ajoutez des en-têtes identiques</li>
          </ol>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
          <strong>Correction vidéo :</strong> Retrouvez la correction détaillée de cet exercice en vidéo ci-dessous !
        </div>
        <PremiumVideo url="/cours/debutant/lecon2/correction_exercice.mp4" title="Correction de l'exercice pratique" />
      </section>

      <div className="mt-12">
        <QuizLecon2 onResult={onResult} />
      </div>
    </div>
  );
}