import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon1 from "../../quizz/intermediaire/QuizLecon1";
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
  Table
} from "lucide-react";

export default function Lecon1({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Calculator className="w-8 h-8 text-blue-600" />
        Leçon 1 - Fonctions SI et SI Imbriqués
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser les fonctions SI et SI imbriqués dans Excel.
          Vous découvrirez comment créer des formules conditionnelles complexes pour automatiser vos décisions et analyses.
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
              Comprendre la syntaxe de la fonction SI
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer des fonctions SI imbriquées avec plusieurs conditions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Éviter les erreurs courantes avec les SI imbriqués
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser des alternatives comme RECHERCHEV pour les cas complexes
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-purple-600" />
        1. RAPPEL : FONCTION SI DE BASE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La fonction SI permet de tester une condition et de retourner une valeur si la condition est vraie, 
            et une autre valeur si elle est fausse.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Syntaxe de base
          </h5>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            =SI(test_logique; valeur_si_vrai; [valeur_si_faux])
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple simple</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =SI(A2{">"}50; "Réussi"; "Échoué")
              </div>
              <p className="text-sm text-gray-600">
                Si la valeur en A2 est supérieure à 50, affiche "Réussi", sinon "Échoué"
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec calcul</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =SI(B2{">"}100; B2*0.9; B2*0.95)
              </div>
              <p className="text-sm text-gray-600">
                Applique 10% de remise si {">"}100, sinon 5%
              </p>
            </div>
          </div>

          <ImageZoomable 
            src="/cours/intermediaire/Lecon1/fonction_si_base.png" 
            alt="Exemple de fonction SI de base dans Excel" 
            className="mt-4"
            style={{ maxHeight: 300 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-teal-600" />
        2. FONCTIONS SI IMBRIQUÉS
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Les fonctions SI imbriqués permettent de tester plusieurs conditions successives. 
            Excel supporte jusqu'à 64 niveaux d'imbrication, mais il est recommandé de ne pas dépasser 5-6 pour la lisibilité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Système de notation
            </h5>
            
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {`=SI(C2>89;"A";SI(C2>79;"B";SI(C2>69;"C";SI(C2>59;"D";"F"))))`}
            </div>

            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
                <span>Test si la note {">"}89 → "A"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
                <span>Sinon, test si {">"}79 → "B"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
                <span>Sinon, test si {">"}69 → "C"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
                <span>Sinon, test si {">"}59 → "D"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">5</span>
                <span>Sinon → "F"</span>
              </li>
            </ol>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-teal-600" />
              Commission sur ventes
            </h5>
            
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {`=SI(E2>15000; 20%; SI(E2>12500; 17.5%; SI(E2>10000; 15%; SI(E2>7500; 12.5%; SI(E2>5000; 10%; 0)))))`}
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Ventes {">"} 15,000 €</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex justify-between">
                <span>Ventes {">"} 12,500 €</span>
                <span className="font-semibold">17.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Ventes {">"} 10,000 €</span>
                <span className="font-semibold">15%</span>
              </div>
              <div className="flex justify-between">
                <span>Ventes {">"} 7,500 €</span>
                <span className="font-semibold">12.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Ventes {">"} 5,000 €</span>
                <span className="font-semibold">10%</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Autres</span>
                <span className="font-semibold">0%</span>
              </div>
            </div>
          </div>
        </div>

        <ImageZoomable 
          src="/cours/intermediaire/Lecon1/si_imbrique_exemple.gif" 
          alt="Démonstration de fonction SI imbriqué dans Excel" 
          className="mb-6"
          style={{ maxHeight: 350 }} 
        />
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-orange-600" />
        3. ERREURS COURANTES ET BONNES PRATIQUES
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Les fonctions SI imbriqués peuvent devenir complexes rapidement. Voici les pièges à éviter et les meilleures pratiques à suivre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-orange-600" />
              Erreurs fréquentes
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Mauvais ordre des conditions :</strong> Excel évalue de gauche à droite, 
                  donc placez les conditions les plus restrictives en premier
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Paranthèses non fermées :</strong> Chaque SI ouvrant doit avoir sa parenthèse fermante
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Opérateurs incorrects :</strong> Utilisez {">"}, {"<"}, {"="}, {"<>"} correctement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Trop d'imbrications :</strong> Au-delà de 5-6 niveaux, la formule devient illisible
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-orange-600" />
              Bonnes pratiques
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Utilisez l'indentation :</strong> Formatez votre formule pour mieux la lire
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Testez étape par étape :</strong> Vérifiez chaque condition séparément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Documentez vos formules :</strong> Ajoutez des commentaires pour les formules complexes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Envisagez des alternatives :</strong> RECHERCHEV, SI.CONDITIONS, etc.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Comparaison : Bon vs Mauvais exemple
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-200 p-4 rounded-lg bg-red-50">
              <h6 className="font-medium text-red-800 mb-2">❌ Mauvais</h6>
              <div className="bg-red-100 p-3 rounded font-mono text-xs">
                {`=SI(A2>50; "Moyen"; SI(A2>80; "Bon"; SI(A2>20; "Faible"; "Très faible")))`}
              </div>
              <p className="text-sm text-red-600 mt-2">
                Problème : L'ordre des conditions est incorrect. Une note de 90 donnera "Moyen" au lieu de "Bon".
              </p>
            </div>
            
            <div className="border border-green-200 p-4 rounded-lg bg-green-50">
              <h6 className="font-medium text-green-800 mb-2">✅ Correct</h6>
              <div className="bg-green-100 p-3 rounded font-mono text-xs">
                {`=SI(A2>80; "Bon"; SI(A2>50; "Moyen"; SI(A2>20; "Faible"; "Très faible")))`}
              </div>
              <p className="text-sm text-green-600 mt-2">
                Solution : Conditions dans l'ordre décroissant. Une note de 90 sera correctement évaluée comme "Bon".
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Search className="w-6 h-6 text-indigo-600" />
        4. ALTERNATIVES AUX SI IMBRIQUÉS
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Pour les scénarios complexes, d'autres fonctions Excel peuvent être plus efficaces et maintenables que les SI imbriqués.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Table className="w-5 h-5 text-indigo-600" />
            Solution avec RECHERCHEV
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Table de référence</h6>
              <div className="text-sm text-gray-600 mb-3">
                Créez une table de correspondance :
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Remarque importante : pour que la fonction <strong>RECHERCHEV</strong> fonctionne en mode de correspondance approximative (dernier argument <code>VRAI</code>),
                la table de référence doit être triée du plus petit au plus grand (ordre croissant sur la colonne "Note Min").
                Ainsi, RECHERCHEV trouve la plus grande valeur inférieure ou égale à la valeur recherchée et renvoie la lettre correspondante.
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Nous utilisons une référence absolue (par exemple <code>$H$2:$I$6</code>) pour fixer la plage de recherche :
                cela permet de copier la formule vers d'autres cellules sans que la plage de la table ne se décale.
                Les signes <code>$</code> bloquent les lignes et colonnes lors du recopiage.
              </div>
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Note Min</th>
                    <th className="border p-2">Lettre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-2">0</td><td className="border p-2">F</td></tr>
                  <tr><td className="border p-2">60</td><td className="border p-2">D</td></tr>
                  <tr><td className="border p-2">70</td><td className="border p-2">C</td></tr>
                  <tr><td className="border p-2">80</td><td className="border p-2">B</td></tr>
                  <tr><td className="border p-2">90</td><td className="border p-2">A</td></tr>
                </tbody>
              </table>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Formule RECHERCHEV</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-4">
                {`=RECHERCHEV(C2;$H$2:$I$6;2;VRAI)`}
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Plus facile à maintenir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Modifiable sans toucher à la formule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>Plus lisible et professionnel</span>
                </li>
              </ul>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/intermediaire/Lecon1/recherchev_alternative.gif" 
            alt="Alternative RECHERCHEV aux SI imbriqués" 
            className="mt-4"
            style={{ maxHeight: 250 }} 
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Quand choisir quelle méthode ?
          </h5>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Méthode</th>
                  <th className="border p-2">Cas d'usage</th>
                  <th className="border p-2">Avantages</th>
                  <th className="border p-2">Limites</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">SI Imbriqués</td>
                  <td className="border p-2">2-5 conditions simples</td>
                  <td className="border p-2">Rapide, tout en une formule</td>
                  <td className="border p-2">Devient illisible</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">RECHERCHEV</td>
                  <td className="border p-2">+3 conditions, données modifiables</td>
                  <td className="border p-2">Maintenable, professionnel</td>
                  <td className="border p-2">Nécessite une table</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">SI.CONDITIONS</td>
                  <td className="border p-2">Excel 2019+ seulement</td>
                  <td className="border p-2">Syntaxe simplifiée</td>
                  <td className="border p-2">Non rétrocompatible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-red-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en créant des formules SI imbriquées pour un système de gestion des performances commerciales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-red-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier des performances commerciales :
          </p>
          <a href="/cours/intermediaire/Lecon1/exercice_performances.xlsx" 
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
            Solution complète et détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/intermediaire/Lecon1/correction_performances.mp4"
            title="Correction de l'exercice sur les SI imbriqués"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-red-600" />
          Consignes de l'exercice
        </h4>
        <div className="space-y-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Évaluation des performances</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Créez une formule SI imbriquée qui attribue une note (A, B, C, D) basée sur le pourcentage d'objectif atteint</li>
              <li>Conditions : A ({">="}110%), B (90-109%), C (70-89%), D ({"<"}70%)</li>
              <li>Testez votre formule avec différentes valeurs</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Calcul des primes</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Développez une formule pour calculer la prime selon la performance</li>
              <li>Prime de base : 500€ × multiplicateur (A:2.0, B:1.5, C:1.0, D:0.5)</li>
              <li>Utilisez les résultats de la Partie 1 dans votre calcul</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Alternative avancée</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Créez une table de référence pour les performances</li>
              <li>Utilisez RECHERCHEV pour obtenir les mêmes résultats</li>
              <li>Comparez la complexité des deux approches</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          Conseils professionnels
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Meilleures pratiques
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Testez chaque condition séparément d'abord</li>
              <li>• Utilisez des références de cellules pour les valeurs seuils</li>
              <li>• Documentez vos formules complexes avec des commentaires</li>
              <li>• Envisagez RECHERCHEV pour +3 conditions</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              Pièges à éviter
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Ne dépassez pas 5-6 niveaux d'imbrication</li>
              <li>• Vérifiez l'ordre logique de vos conditions</li>
              <li>• Attention aux opérateurs {">="} vs {">"} </li>
              <li>• Fermez toutes les parenthèses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon1 onResult={onResult} />
      </div>
    </div>
  );
}