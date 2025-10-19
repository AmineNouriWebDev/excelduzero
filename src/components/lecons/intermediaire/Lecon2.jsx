import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon2 from "../../quizz/intermediaire/QuizLecon2";
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
  Table,
  Zap,
  Filter
} from "lucide-react";

export default function Lecon2({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-1 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Filter className="w-8 h-8 text-green-600" />
        Leçon 2 - Fonctions ET et OU
      </h2>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser les fonctions ET et OU dans Excel pour créer des tests logiques complexes.
          Vous découvrirez comment combiner plusieurs conditions et automatiser vos décisions de manière professionnelle.
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
              Comprendre la syntaxe des fonctions ET et OU
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Combiner ET/OU avec la fonction SI pour des tests avancés
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser ET/OU dans la mise en forme conditionnelle
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre des problèmes business courants avec ces fonctions
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-600" />
        1. FONCTION ET : TOUTES LES CONDITIONS DOIVENT ÊTRE VRAIES
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            La fonction ET renvoie VRAI seulement si <strong>toutes</strong> les conditions spécifiées sont vraies. 
            Si au moins une condition est fausse, elle renvoie FAUX.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Syntaxe de la fonction ET
          </h5>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            =ET(condition1; condition2; condition3; ...)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple simple</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =ET(A2{">"}1; A2{"<"}100)
              </div>
              <p className="text-sm text-gray-600">
                Renvoie VRAI si A2 est supérieur à 1 ET inférieur à 100.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec valeurs texte</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =ET(A3="Rouge"; B3="Vert")
              </div>
              <p className="text-sm text-gray-600">
                Renvoie VRAI seulement si A3 est "Rouge" ET B3 est "Vert"
              </p>
            </div>
          </div>
           <ImageZoomable 
            src="/cours/intermediaire/Lecon2/test_ET.gif" 
            alt="Exemples pratiques de fonction ET " 
            className="mt-4"
            style={{ maxHeight: 300 }} 
          />

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Caractéristiques importantes
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Peut tester jusqu'à 255 conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Ignore les cellules vides et le texte dans les plages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Renvoie #VALEUR! si aucune valeur logique n'est trouvée.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-purple-600" />
        2. FONCTION OU : AU MOINS UNE CONDITION DOIT ÊTRE VRAIE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La fonction OU renvoie VRAI si <strong>au moins une</strong> des conditions spécifiées est vraie. 
            Elle renvoie FAUX seulement si toutes les conditions sont fausses.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-600" />
            Syntaxe de la fonction OU
          </h5>
          
          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            =OU(condition1; condition2; condition3; ...)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Exemple simple</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =OU(A2{">"}1; A2{"<"}100)
              </div>
              <p className="text-sm text-gray-600">
                Renvoie VRAI si A2 est supérieur à 1 OU inférieur à 100.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec valeurs texte</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =OU(A5="Rouge"; B5="Vert")
              </div>
              <p className="text-sm text-gray-600">
                Renvoie VRAI si A5 est "Rouge" OU B5 est "Vert"
              </p>
            </div>
          </div>
            <ImageZoomable 
            src="/cours/intermediaire/Lecon2/test_OU.gif" 
            alt="Exemples pratiques de fonction OU" 
            className="mt-4"
            style={{ maxHeight: 300 }} 
          />

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Caractéristiques importantes
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Peut tester jusqu'à 255 conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Ignore les cellules vides et le texte dans les plages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <span>Renvoie #VALEUR! si aucune valeur logique n'est trouvée.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-teal-600" />
        3. COMBINAISON AVEC LA FONCTION SI
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Les fonctions ET et OU sont le plus souvent utilisées avec la fonction SI pour créer des tests logiques complexes 
            et prendre des décisions automatisées dans vos feuilles de calcul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              SI avec ET - Les deux conditions requises
            </h5>
            
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {`=SI(ET(B2>=$B$7; C2>=$B$5); B2*$B$8; 0)`}
            </div>

            <p className="text-sm text-gray-700 mb-3">
              <strong>Scénario :</strong> Calcul de prime - le commercial reçoit une prime seulement s'il atteint 
              <strong> ET </strong> l'objectif de ventes <strong> ET </strong> l'objectif de comptes.
            </p>

            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Ventes ≥ Objectif Ventes</span>
                <span className="font-semibold">ET</span>
              </div>
              <div className="flex justify-between">
                <span>Comptes ≥ Objectif Comptes</span>
                <span className="font-semibold">→ Prime = Ventes × %</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Sinon</span>
                <span className="font-semibold">→ Prime = 0</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-teal-600" />
              SI avec OU - Au moins une condition
            </h5>
            
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {`=SI(OU(B2>=$B$4; C2>=$B$5); B2*$B$6; 0)`}
            </div>

            <p className="text-sm text-gray-700 mb-3">
              <strong>Scénario :</strong> Calcul de commission - le commercial reçoit une commission s'il atteint 
              <strong> OU </strong> l'objectif de ventes <strong> OU </strong> l'objectif de comptes.
            </p>

            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Ventes ≥ Objectif Ventes</span>
                <span className="font-semibold">OU</span>
              </div>
              <div className="flex justify-between">
                <span>Comptes ≥ Objectif Comptes</span>
                <span className="font-semibold">→ Commission = Ventes × %</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Sinon</span>
                <span className="font-semibold">→ Commission = 0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
         
<h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
    <Filter className="w-5 h-5 text-teal-600" />
    Exemples pratiques détaillés
  </h5>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="border p-4 rounded-lg">
      <h6 className="font-medium text-gray-800 mb-2">Validation des matières</h6>
      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
        {`=SI(ET(B2="A"; C2="A"); "Validé"; "Non")`}
      </div>
      <p className="text-sm text-gray-600">
        Vérifie si l'élève a obtenu la mention A en Math <strong>ET</strong> en Info.
      </p>
    </div>

    <div className="border p-4 rounded-lg">
      <h6 className="font-medium text-gray-800 mb-2">Validation partielle</h6>
      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
        {`=SI(OU(B2="A"; C2="A"); "Validé"; "Non")`}
      </div>
      <p className="text-sm text-gray-600">
        Vérifie si l'élève a obtenu la mention A en Math <strong>OU</strong> en Info.
      </p>
    </div>
  </div>


          <ImageZoomable 
            src="/cours/intermediaire/Lecon2/et_ou_exemples.gif" 
            alt="Exemples pratiques des fonctions ET et OU" 
            className="mt-4"
            style={{ maxHeight: 300 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-orange-600" />
        4. ERREURS COURANTES ET BONNES PRATIQUES
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Les combinaisons SI/ET/OU peuvent créer des formules complexes. Voici les pièges à éviter pour garantir 
            des formules fiables et maintenables.
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
                  <strong>Confondre ET et OU :</strong> ET nécessite que toutes les conditions soient vraies, 
                  OU seulement qu'au moins une le soit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Parenthèses mal placées :</strong> La fonction ET/OU doit être entièrement contenue 
                  dans l'argument test_logique de SI
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Opérateurs incorrects :</strong> Utilisez {"="}, {"<>"}, {">="}, {"<="} correctement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Textes non entre guillemets :</strong> Les valeurs texte doivent être entre guillemets
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
                  <strong>Testez séparément :</strong> Vérifiez d'abord chaque fonction ET/OU isolément
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Utilisez des références :</strong> Référencez les cellules de critères plutôt que 
                  de les coder en dur
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Documentez :</strong> Ajoutez des commentaires pour expliquer la logique complexe
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span>
                  <strong>Simplifiez :</strong> Évitez les conditions redondantes ou trop complexes
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
                {`=SI(ET(A2>100; A2<50); "Valide"; "Invalide")`}
              </div>
              <p className="text-sm text-red-600 mt-2">
                Problème : Une valeur ne peut pas être à la fois supérieure à 100 ET inférieure à 50. 
                La condition est toujours fausse.
              </p>
            </div>
            
            <div className="border border-green-200 p-4 rounded-lg bg-green-50">
              <h6 className="font-medium text-green-800 mb-2">✅ Correct</h6>
              <div className="bg-green-100 p-3 rounded font-mono text-xs">
                {`=SI(OU(A2>100; A2<50); "Extreme"; "Normal")`}
              </div>
              <p className="text-sm text-green-600 mt-2">
                Solution : Utiliser OU pour identifier les valeurs extrêmes - supérieures à 100 OU inférieures à 50.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Search className="w-6 h-6 text-indigo-600" />
        5. APPLICATION AVANCÉE : MISE EN FORME CONDITIONNELLE
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Les fonctions ET et OU peuvent être utilisées directement dans la mise en forme conditionnelle 
            sans la fonction SI pour créer des règles de formatage complexes.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Table className="w-5 h-5 text-indigo-600" />
            Règles de mise en forme avec ET et OU
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec ET</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =ET(B3{">"}C2; B3{"<"}D2)
              </div>
              <p className="text-sm text-gray-600">
                Formate la cellule si B3 est supérieur à C2 ET inférieur à D2
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Avec OU</h6>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-2">
                =OU(B2{">="}B14; C2{">="}B15
              </div>
              <p className="text-sm text-gray-600">
                Formate la cellule si B2 est supérieur ou égal à B14 OU C2 est supérieur ou égale à B15
              </p>
            </div>
          </div>
            <ImageZoomable 
            src="/cours/intermediaire/Lecon2/test_ET_OU_mise_en_forme.gif" 
            alt="Exemples pratiques de fonction ET OU avec mise en forme conditionnelle " 
            className="mt-4"
            style={{ maxHeight: 300 }} 
          />

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Attention à cette erreur courante
            </h6>
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>❌ Erroné :</strong> <code>ET(B3{">"}C2; B3{"<"}D2)</code> (sans signe égal)
              </p>
              <p>
                <strong>✅ Correct :</strong> <code>=ET(B3{">"}C2; B3{"<"}D2)</code> (avec signe égal)
              </p>
              <p className="mt-2">
                Excel ajoute automatiquement les guillemets si vous oubliez le signe égal, 
                ce qui rend la formule inactive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-red-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en créant des formules avec ET et OU pour un système de gestion des performances commerciales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-red-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier d'exercice sur les performances commerciales :
          </p>
          <a href="/cours/intermediaire/Lecon2/exercice_et_ou.xlsx" 
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
            url="/cours/intermediaire/Lecon2/correction_et_ou.mp4"
            title="Correction de l'exercice sur les fonctions ET et OU"
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
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Éligibilité aux primes avec ET</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Créez une formule avec SI et ET pour déterminer l'éligibilité à la prime d'excellence</li>
              <li>Conditions : Ventes {">"} 15 000€ ET Satisfaction client {">="} 90%</li>
              <li>Résultat : "Prime accordée" si les deux conditions sont vraies, sinon "Non éligible" </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Commission avec OU</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Développez une formule avec SI et OU pour le calcul de commission de base</li>
              <li>Conditions : Ventes {">"} 10 000€ OU Nouveaux clients {">="} 5</li>
              <li>Commission : 8% des ventes si condition remplie, sinon 0%</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Mise en forme conditionnelle</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Appliquez une mise en forme conditionnelle avec ET pour distinguer les commercials atteints les performances exceptionnelles</li>
              <li>Conditions : Ventes {">"} 20 000€ ET Ancienneté {">"} 2 ans</li>
              <li>Couleur de fond : vert clair pour les noms des commercials ayant une performances exceptionnelles</li>
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
              <li>• Utilisez ET quand toutes les conditions doivent être remplies</li>
              <li>• Utilisez OU quand au moins une condition doit être remplie</li>
              <li>• Testez vos formules avec des valeurs frontières</li>
              <li>• Utilisez des noms de plages pour plus de clarté</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              Pièges à éviter
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Ne confondez pas ET et OU</li>
              <li>• Vérifiez l'ordre des parenthèses</li>
              <li>• Attention aux opérateurs {">="} vs {">"} et {"<="} vs {"<"}</li>
              <li>• N'oubliez pas le signe = en mise en forme conditionnelle</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon2 onResult={onResult} />
      </div>
    </div>
  );
}