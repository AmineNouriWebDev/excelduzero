import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon17 from "../../quizz/debutant/QuizLecon17";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  ArrowDownUp,
  Filter,
  ArrowDown,
  ArrowUp,
  Calendar,
  Hash,
  Type,
  Palette,
  List,
  ListOrdered,
  Check,
  X,
  Lightbulb,
  Target,
  MoveRight,
  BookOpen,
  Download,
  Video,
  ArrowRight
} from "lucide-react";

export default function Lecon17({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <ArrowDownUp className="w-8 h-8 text-indigo-600" />
        MAÎTRISER LES TRIS ET FILTRES DANS EXCEL
      </h2>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Les tris et filtres sont des outils essentiels pour organiser et analyser vos données dans Excel. 
          Cette leçon vous apprendra à trier vos données selon différents critères et à utiliser les filtres 
          pour afficher uniquement les informations pertinentes.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">
          Dans cette leçon, vous apprendrez à :
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer des tris simples et personnalisés
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer des critères de tri complexes avec plusieurs niveaux
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les filtres automatiques avec des critères personnalisés
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Combiner plusieurs filtres pour une analyse précise
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre les problèmes courants de tri et filtrage
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ListOrdered className="w-6 h-6 text-blue-600" />
        1. LES TRIS SIMPLES DANS EXCEL
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            Trier vos données permet de les réorganiser selon un ordre spécifique sans masquer d'information. 
            Contrairement au filtre, le tri conserve toutes vos données mais change leur ordre d'affichage.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MoveRight className="w-5 h-5 text-blue-600" />
            Types de tris disponibles
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Type className="w-5 h-5 text-blue-600" />
                <h6 className="font-medium">Texte</h6>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowUp className="mx-auto" />
                  <span className="text-xs">A → Z</span>
                </div>
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowDown className="mx-auto" />
                  <span className="text-xs">Z → A</span>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-5 h-5 text-blue-600" />
                <h6 className="font-medium">Nombres</h6>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowUp className="mx-auto" />
                  <span className="text-xs">Croissant</span>
                </div>
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowDown className="mx-auto" />
                  <span className="text-xs">Décroissant</span>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h6 className="font-medium">Dates</h6>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowUp className="mx-auto" />
                  <span className="text-xs">Plus ancien</span>
                </div>
                <div className="flex-1 bg-blue-50 p-2 rounded text-center">
                  <ArrowDown className="mx-auto" />
                  <span className="text-xs">Plus récent</span>
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-5 h-5 text-blue-600" />
                <h6 className="font-medium">Couleurs</h6>
              </div>
              <p className="text-sm text-gray-600">Par couleur de cellule ou de texte</p>
            </div>
          </div>

          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600" />
            Comment trier vos données
          </h5>
          
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li className="text-gray-700">
              <strong>Sélectionnez votre tableau</strong> de données (y compris les en-têtes)
            </li>
            <li className="text-gray-700">
              Accédez à l'onglet <strong>« Accueil »</strong>
            </li>
            <li className="text-gray-700">
              Dans le groupe <strong>« Édition »</strong>, cliquez sur <strong>« Trier et filtrer »</strong>
            </li>
            <li className="text-gray-700">
              Choisissez <strong>« Trier de A à Z »</strong> ou <strong>« Trier de Z à A »</strong>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/lecon17/tri_personnalise_fenetre.png" 
            alt="Menu Trier et filtrer dans Excel" 
            className="mb-4"
          />
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Astuce importante
            </h6>
            <p className="text-gray-700">
              Excel détermine automatiquement le type de tri à appliquer en fonction du contenu de la colonne. 
              Pour un contrôle précis, utilisez toujours l'option "Tri personnalisé".
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <List className="w-6 h-6 text-purple-600" />
        2. LES TRIS PERSONNALISÉS
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Le tri personnalisé vous permet d'appliquer plusieurs critères de tri simultanément 
            pour des classements complexes. Vous pouvez trier d'abord par département, puis par 
            nom, puis par date de naissance par exemple.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MoveRight className="w-5 h-5 text-purple-600" />
            Création d'un tri personnalisé
          </h5>
          
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li className="text-gray-700">
              Sélectionnez votre tableau de données
            </li>
            <li className="text-gray-700">
              Accédez à <strong>Accueil → Trier et filtrer → Tri personnalisé</strong>
            </li>
            <li className="text-gray-700">
              Dans la fenêtre qui s'ouvre, choisissez votre première colonne à trier
            </li>
            <li className="text-gray-700">
              Sélectionnez le type de tri (valeurs, couleur, etc.)
            </li>
            <li className="text-gray-700">
              Choisissez l'ordre (A à Z, Z à A, etc.)
            </li>
            <li className="text-gray-700">
              Cliquez sur <strong>« Ajouter un niveau »</strong> pour ajouter un critère supplémentaire
            </li>
            <li className="text-gray-700">
              Répétez les étapes 3 à 5 pour chaque niveau supplémentaire
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/lecon17/tri_personnalise_fenetre.png" 
            alt="Fenêtre de tri personnalisé dans Excel" 
            className="mb-4"
          />
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Niveau</th>
                  <th className="border p-2">Colonne</th>
                  <th className="border p-2">Trier sur</th>
                  <th className="border p-2">Ordre</th>
                  <th className="border p-2">Exemple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Département</td>
                  <td className="border p-2">Valeurs</td>
                  <td className="border p-2">A à Z</td>
                  <td className="border p-2 bg-purple-50">Marketing, RH, Ventes</td>
                </tr>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Nom</td>
                  <td className="border p-2">Valeurs</td>
                  <td className="border p-2">A à Z</td>
                  <td className="border p-2 bg-purple-50">Dupont, Martin, Tremblay</td>
                </tr>
                <tr>
                  <td className="border p-2">3</td>
                  <td className="border p-2">Date d'embauche</td>
                  <td className="border p-2">Valeurs</td>
                  <td className="border p-2">Plus ancien au plus récent</td>
                  <td className="border p-2 bg-purple-50">01/01/2020, 15/03/2022, 30/06/2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Bonne pratique
            </h6>
            <p className="text-gray-700">
              Pour les tris complexes, commencez toujours par le critère le moins précis 
              (ex: département) et terminez par le plus précis (ex: date). Excel traite 
              les niveaux dans l'ordre où ils apparaissent.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Palette className="w-5 h-5 text-purple-600" />
            Tri par couleur
          </h5>
          
          <p className="text-gray-700 mb-4">
            Excel permet de trier vos données selon la couleur des cellules ou du texte :
          </p>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez <strong>« Trier par couleur »</strong> dans le menu de tri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Choisissez la couleur à placer en premier
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Ajoutez des niveaux pour des tris multicritères avec couleurs
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon17/tri_par_noms.png" 
            alt="Tri par couleur dans Excel" 
            className="mb-4"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Filter className="w-6 h-6 text-teal-600" />
        3. LES FILTRES AUTOMATIQUES
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Le filtrage vous permet d'afficher uniquement les données répondant à certains critères, 
            masquant temporairement les autres sans les supprimer. C'est l'outil idéal pour analyser 
            des sous-ensembles spécifiques de vos données.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-teal-600" />
            Activation et utilisation des filtres
          </h5>
          
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li className="text-gray-700">
              Sélectionnez la ligne des en-têtes de votre tableau
            </li>
            <li className="text-gray-700">
              Activez les filtres via :
              <ul className="list-disc pl-6 mt-2">
                <li>Onglet <strong>Accueil → Édition → Filtrer</strong></li>
                <li>Onglet <strong>Données → Filtrer</strong></li>
                <li>Raccourci clavier : <strong>Ctrl + Maj + L</strong></li>
              </ul>
            </li>
            <li className="text-gray-700">
              Cliquez sur les flèches qui apparaissent dans les en-têtes
            </li>
            <li className="text-gray-700">
              Sélectionnez vos critères dans le menu déroulant
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/lecon17/filtre_applique.png" 
            alt="Application d'un filtre dans Excel" 
            className="mb-4"
          />
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Reconnaissance visuelle
            </h6>
            <p className="text-gray-700">
              Les en-têtes filtrés affichent une icône d'entonnoir et les lignes masquées 
              ont leurs numéros en bleu. Les lignes filtrées conservent leur numérotation d'origine.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Type className="w-5 h-5 text-teal-600" />
            Types de filtres personnalisés
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Type className="w-4 h-4" />
                Filtres texte
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Égal à / différent de</li>
                <li>• Commence par / se termine par</li>
                <li>• Contient / ne contient pas</li>
                <li>• Filtres personnalisées avec caractères spéciaux (*?)</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Filtres numériques
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Égal à / différent de</li>
                <li>• Supérieur à / inférieur à</li>
                <li>• Entre deux valeurs</li>
                <li>• 10 premiers / moyenne supérieure</li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/lecon17/filtre.png" 
            alt="Options de filtrage dans Excel" 
            className="mb-4"
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-teal-600" />
            Combinaison de plusieurs filtres
          </h5>
          
          <p className="text-gray-700 mb-4">
            Vous pouvez appliquer des filtres sur plusieurs colonnes simultanément pour 
            affiner votre sélection. Excel affichera uniquement les lignes qui satisfont 
            à TOUS les critères sélectionnés.
          </p>
          
          <div className="bg-teal-50 p-4 rounded-lg mb-4">
            <h6 className="font-semibold text-gray-800 mb-2">Exemple pratique :</h6>
            <p className="text-gray-700">
              Pour afficher les ventes en France supérieures à 5000€ effectuées en 2023 :
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Colonne "Pays" : Égal à "France"</li>
              <li>Colonne "Montant" : Supérieur à 5000</li>
              <li>Colonne "Date" : Entre 01/01/2023 et 31/12/2023</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <h6 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Performance des filtres
            </h6>
            <p className="text-gray-700">
              Pour les très grands jeux de données ({'>'}100 000 lignes), préférez les Tableaux 
              Croisés Dynamiques qui offrent de meilleures performances que les filtres standards.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <X className="w-6 h-6 text-red-600" />
        4. PROBLÈMES COURANTS ET SOLUTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            Les tris et filtres peuvent parfois causer des problèmes si mal utilisés. 
            Voici les erreurs les plus fréquentes et comment les résoudre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: En-têtes inclus dans le tri
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Symptôme :</strong> Les en-têtes sont traités comme des données et triés avec le reste
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Vérifiez que "Mes données ont des en-têtes" est coché dans le tri personnalisé</li>
                <li>Sélectionnez uniquement les données, pas les en-têtes avant d'appliquer le tri</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Filtre qui ne s'applique pas
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Symptôme :</strong> Certaines lignes restent visibles alors qu'elles devraient être filtrées
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Vérifiez les formats de cellules (texte vs nombre)</li>
                <li>Actualisez les filtres (Données → Actualiser)</li>
                <li>Supprimez et réappliquez les filtres</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Tri incohérent
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Symptôme :</strong> Les dates ou nombres ne sont pas triés correctement
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Vérifiez que toutes les cellumes ont le même format</li>
                <li>Convertissez le texte en nombres/dates si nécessaire</li>
                <li>Utilisez la fonction VALEUR() ou DATE() pour les conversions</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Filtres qui ralentissent Excel
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Symptôme :</strong> Lenteur lors de l'application ou modification des filtres
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Évitez les formules matricielles dans les colonnes filtrées</li>
                <li>Limitez les plages de données filtrées</li>
                <li>Utilisez des tables Excel structurées</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Exercice pratique */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-orange-600" />
        5. EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances sur les tris et filtres avec cet exercice basé 
          sur une base de données clients réelle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à manipuler :
          </p>
          <a href="/cours/debutant/tris-filtres/exercice_clients.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Solution détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/tris-filtres/correction_exercice.mp4"
            title="Correction de l'exercice sur les tris et filtres"
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
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Tris</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Triez les clients par <strong>pays</strong> (ordre alphabétique)</li>
              <li>Ajoutez un second niveau de tri par <strong>ville</strong> (A à Z)</li>
              <li>Créez un troisième niveau par <strong>montant des achats</strong> (décroissant)</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Filtres</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Filtrez les clients de <strong>France</strong> uniquement</li>
              <li>Ajoutez un filtre pour les achats <strong>supérieurs à 1000€</strong></li>
              <li>Combinez avec un filtre sur les <strong>commandes de 2023</strong></li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Analyse</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Identifiez le <strong>top 5</strong> des clients par chiffre d'affaires</li>
            <li>Filtrez les clients <strong>inactifs depuis plus d'un an</strong></li>
            <li>Exportez les résultats dans une nouvelle feuille</li>
          </ol>
        </div>
      </div>

      {/* Synthèse des compétences acquises */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          Synthèse des compétences acquises
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Techniques maîtrisées</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Application de tris simples et multicritères</li>
              <li>• Création de tris personnalisés avec plusieurs niveaux</li>
              <li>• Utilisation des filtres automatiques et personnalisés</li>
              <li>• Combinaison de plusieurs filtres pour une analyse ciblée</li>
              <li>• Gestion des problèmes courants de tri et filtrage</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Applications professionnelles</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Analyse de bases de données clients</li>
              <li>• Tri de listes de produits par critères multiples</li>
              <li>• Filtrage de données financières pour reporting</li>
              <li>• Préparation de données pour présentation</li>
              <li>• Nettoyage et organisation de grands jeux de données</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon17 onResult={onResult} />
      </div>
    </div>
  );
}