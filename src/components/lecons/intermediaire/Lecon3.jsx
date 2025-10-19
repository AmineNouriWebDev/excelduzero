import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon3 from "../../quizz/intermediaire/QuizLecon3";
import PremiumVideo from "../../ui/PremiumVideo";
import {
  Calculator,
  Code,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  Download,
  Video,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
  Zap,
  Bug,
  Shield
} from "lucide-react";

export default function Lecon3({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Shield className="w-8 h-8 text-blue-600" />
        Leçon 3 - Gestion des erreurs (#N/A, #VALUE!)
      </h2>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Apprenez à maîtriser les erreurs #N/A et #VALUE! dans Excel. Cette leçon vous enseignera des techniques professionnelles pour identifier, corriger et surtout anticiper ces erreurs, rendant vos feuilles de calcul plus robustes et fiables.
        </p>
      </div>

      {/* Section objectifs d'apprentissage */}
      <div className="bg-gray-50 rounded-lg p-5 mb-6">
        <p className="text-gray-700 mb-4">Dans cette leçon, vous apprendrez à :</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Comprendre les causes profondes des erreurs #N/A et #VALUE!</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Utiliser les fonctions SIERREUR, ESTNA et SI pour gérer élégamment les erreurs</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Créer des formules résistantes aux erreurs pour des tableaux de bord professionnels</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Appliquer des bonnes pratiques pour éviter les erreurs dès la conception</span>
          </li>
        </ul>
      </div>

      {/* Section 1: Erreur #N/A */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        1. ERREUR #N/A : VALEUR NON DISPONIBLE
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            L'erreur <strong>#N/A</strong> signifie "Non Disponible" (Not Available). Elle apparaît lorsqu'une formule ne peut pas trouver une valeur qu'elle recherche, notamment avec les fonctions de recherche comme RECHERCHEV, RECHERCHEH, EQUIV et INDEX.
          </p>
        </div>

        {/* Ici, vous pouvez ajouter une image ou GIF */}
        <ImageZoomable
          src="/cours/intermediaire/Lecon3/erreur-na-exemple.png"
          alt="Démonstration de l'erreur #N/A avec RECHERCHEV"
          className="mb-6"
          style={{ maxHeight: 300 }}
        />

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-red-600" />
            Causes principales de l'erreur #N/A
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Valeur introuvable</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEV("Banane"; A2:B10; 2; FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Si "Banane" n'existe pas dans la plage A2:A10, Excel renvoie #N/A.
              </p>
            </div>

            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Problème de format de données</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =RECHERCHEV(100; A2:B10; 2; FAUX)
              </div>
              <p className="text-sm text-gray-600">
                Si 100 est un nombre dans la formule mais du texte dans les données, aucune correspondance n'est trouvée.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Solution rapide : Nettoyer les données
            </h6>
            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
              =RECHERCHEV(D2;SUPPRESPACE(A2:B7);2;FAUX)
            </div>
            <p className="text-sm text-gray-600 mt-2">
              La fonction SUPPRESPACE supprime les espaces de début ou de fin qui peuvent empêcher les correspondances.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Erreur #VALUE! */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-orange-600" />
        2. ERREUR #VALUE! : TYPE DE DONNÉES INCORRECT
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            L'erreur <strong>#VALUE!</strong> se produit lorsqu'une opération implique des types de données incompatibles. C'est la manière Excel de dire "Cette opération n'a pas de sens avec ces données".
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-orange-600" />
            Scénarios courants pour #VALUE!
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Opération sur du texte</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =A2+B2
              </div>
              <p className="text-sm text-gray-600">
                Si A2 ou B2 contient du texte comme "ABC", Excel ne peut pas additionner et renvoie #VALUE!.
              </p>
            </div>

            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Arguments incorrects dans une fonction</h6>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                =GAUCHE(A5; "deux")
              </div>
              <p className="text-sm text-gray-600">
                Le deuxième argument de GAUCHE doit être un nombre, pas du texte.
              </p>
            </div>
          </div>

          {/* Image démontrant une erreur #VALUE! */}
          <ImageZoomable
            src="/cours/intermediaire/Lecon3/erreur-valeur-exemple.gif"
            alt="Exemple d'erreur #VALUE! avec des types de données incompatibles"
            className="mt-6"
            style={{ maxHeight: 250 }}
          />
        </div>
      </div>

      {/* Section 3: Solutions avec SIERREUR et ESTNA */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-teal-600" />
        3. SOLUTIONS : SIERREUR ET ESTNA
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel offre des fonctions spécialisées pour gérer les erreurs de manière élégante. <strong>SIERREUR</strong> capture toutes les erreurs, tandis qu'<strong>ESTNA</strong> cible spécifiquement les erreurs #N/A.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              SIERREUR - La solution universelle
            </h5>

            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
              =SIERREUR(valeur; valeur_si_erreur)
            </div>

            <p className="text-sm text-gray-700 mb-3">
              <strong>SIERREUR</strong> teste si une formule génère une erreur et renvoie un résultat alternatif le cas échéant.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              =SIERREUR(RECHERCHEV(A2; B2:C10; 2; FAUX); "Non trouvé")
            </div>

            <p className="text-sm text-gray-600">
              Affiche "Non trouvé" au lieu de #N/A si la valeur n'existe pas.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-teal-600" />
              ESTNA - Pour un contrôle précis
            </h5>

            <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
              =ESTNA(valeur)
            </div>

            <p className="text-sm text-gray-700 mb-3">
              <strong>ESTNA</strong> renvoie VRAI seulement si la cellule contient l'erreur #N/A, FAUX sinon.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              =SI(ESTNA(RECHERCHEV(A2; B2:C10; 2; FAUX)); 0; RECHERCHEV(A2; B2:C10; 2; FAUX))
            </div>

            <p className="text-sm text-gray-600">
              Renvoie 0 si la valeur n'est pas trouvée, sinon renvoie la valeur trouvée.
            </p>
          </div>
        </div>

        {/* Tableau comparatif */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-teal-600" />
            Comparaison : Quand utiliser quelle fonction?
          </h5>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Situation</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SIERREUR</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESTNA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Tableaux de bord grand public</td>
                  <td className="px-4 py-3 text-sm text-green-600">✅ Recommandé</td>
                  <td className="px-4 py-3 text-sm text-gray-500">⚠️ Possible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Calculs financiers critiques</td>
                  <td className="px-4 py-3 text-sm text-green-600">✅ Recommandé</td>
                  <td className="px-4 py-3 text-sm text-gray-500">⚠️ Possible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Débogage spécifique #N/A</td>
                  <td className="px-4 py-3 text-sm text-gray-500">⚠️ Trop générique</td>
                  <td className="px-4 py-3 text-sm text-green-600">✅ Idéal</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Traitement différencié des erreurs</td>
                  <td className="px-4 py-3 text-sm text-gray-500">❌ Non adapté</td>
                  <td className="px-4 py-3 text-sm text-green-600">✅ Parfait</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Bonnes pratiques et exercice */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-purple-600" />
        4. BONNES PRATIQUES ET EXERCICE PRATIQUE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La meilleure façon de gérer les erreurs est de les prévenir. Adoptez ces bonnes pratiques pour créer des feuilles de calcul plus robustes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              Prévention des erreurs
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Valider les données en entrée</strong> avec la validation de données Excel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Utiliser des tableaux Excel</strong> pour des références structurées</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Tester avec des données limites</strong> (valeurs manquantes, bornes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Documenter les supposptions</strong> de vos formules complexes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-purple-600" />
              Pièges à éviter
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Masquer toutes les erreurs</strong> sans distinction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Oublier de vérifier</strong> les formats de données</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Négliger le nettoyage</strong> des espaces superflus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Utiliser VRAI dans RECHERCHEV</strong> sans comprendre les implications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Exercice pratique */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Exercice pratique : Créer un tableau de bord de gestion des stocks robuste
          </h4>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Recherche de prix avec SIERREUR</h5>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Créez une formule de recherche de prix avec RECHERCHEV</li>
                <li>Enrobez-la avec SIERREUR pour afficher "Non disponible" si le produit n'existe pas</li>
                <li>Testez avec des références produits valides et invalides</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Calcul de valeur de stock avec ESTNA</h5>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Rechercher le prix unitaire depuis la feuille Prix Produits</li>
                <li>Développez un calcul de valeur de stock (quantité × prix unitaire)</li>
                <li>Utilisez ESTNA avec SI pour afficher 0€ pour les produits non trouvés</li>
                
              </ul>
            </div>

           
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Download className="w-5 h-5 text-indigo-600" />
                Fichier d'exercice
              </h6>
              <p className="text-gray-700 mb-4">
                Téléchargez le fichier d'exercice sur la gestion des stocks :
              </p>
              <a href="/cours/intermediaire/Lecon3/exercice_erreurs.xlsx"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'exercice (.xlsx)
              </a>
            </div>

            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-600" />
                Correction vidéo
              </h6>
              <p className="text-gray-700 mb-4">
                Solution complète et détaillée de l'exercice :
              </p>
              <PremiumVideo
                url="/cours/intermediaire/Lecon3/correction_erreurs.mp4"
                title="Correction de l'exercice sur la gestion des erreurs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon3 onResult={onResult} />
      </div>
    </div>
  );
}