import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon15 from "../../quizz/debutant/QuizLecon15";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Percent,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  TrendingDown,
  Calculator,
  Plus,
  Minus,
  Divide,
  Equal,
  DollarSign,
  PieChart,
  BarChart2,
  Check,
  X,
  Lightbulb,
  Target,
  Download,
  Video,
  BookOpen
} from "lucide-react";

export default function Lecon15({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Percent className="w-8 h-8 text-green-600" />
        MAÎTRISER LES POURCENTAGES EXCEL
      </h2>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
        <p className="text-gray-700">
          Les pourcentages sont essentiels dans Excel pour analyser des données financières, 
          suivre des évolutions et comparer des valeurs. Cette leçon vous apprendra à manipuler 
          efficacement les pourcentages dans vos feuilles de calcul.
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
              Calculer des pourcentages de base (part/total)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer des augmentations/réductions en pourcentage
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Calculer des variations entre deux valeurs
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser correctement le format pourcentage
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre des problèmes commerciaux courants
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Calculator className="w-6 h-6 text-blue-600" />
        1. LES BASES DES POURCENTAGES
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            Un pourcentage représente une fraction de 100. Dans Excel, il s'exprime par la formule : 
            <strong>(Partie / Total) * 100</strong>. Comprendre cette formule fondamentale est essentiel.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Divide className="w-5 h-5 text-blue-600" />
            Formule de base du pourcentage
          </h5>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
            <code className="text-lg">= (valeur / total) * 100</code>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Calculer le pourcentage de ventes d'un produit
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <code className="bg-gray-100 px-1">=B2/$B$10</code> → Formule sans format %
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Important :</strong> Verrouiller la référence du total avec $
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/calcul_base.gif" 
            alt="Calcul de pourcentage de base dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Percent className="w-5 h-5 text-blue-600" />
            Format pourcentage vs calcul
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Méthode correcte
              </h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=A2/B2</pre>
              <p className="text-gray-700 text-sm mt-2">
                Appliquer le format % ensuite (Excel multiplie automatiquement par 100)
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                Erreur courante
              </h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">=(A2/B2)*100</pre>
              <p className="text-gray-700 text-sm mt-2">
                Résultat doublé si on applique ensuite le format %
              </p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/format_vs_calcul.png" 
            alt="Différence entre format pourcentage et calcul manuel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Astuce importante
          </h5>
          <p className="text-gray-700">
            Utilisez le raccourci <strong>Ctrl + Maj + %</strong> pour appliquer rapidement 
            le format pourcentage à vos cellules sélectionnées.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-purple-600" />
        2. AUGMENTATIONS ET RÉDUCTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Les pourcentages sont fréquemment utilisés pour calculer des augmentations de prix, 
            des remises commerciales ou des ajustements budgétaires.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Plus className="w-5 h-5 text-purple-600" />
            Appliquer une augmentation
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">= valeur * (1 + pourcentage)</pre>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Augmentation de salaire de 5%
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <code className="bg-gray-100 px-1">=B2*(1+10%)</code> → Augmentation de 10%
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Alternative :</strong> <code className="bg-gray-100 px-1">=B2 + B2*10%</code>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/augmentation.gif" 
            alt="Calcul d'augmentation en pourcentage" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Minus className="w-5 h-5 text-purple-600" />
            Appliquer une réduction
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">= valeur * (1 - pourcentage)</pre>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Remise de 15% sur un produit
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <code className="bg-gray-100 px-1">=B2*(1-15%)</code> → Prix après remise
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Calcul inverse :</strong> <code className="bg-gray-100 px-1">=1-(prix_remise/prix_original)</code>
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/reduction.gif" 
            alt="Calcul de réduction en pourcentage" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blue-600" />
            Exemple commercial
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Calcul de remise</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">Prix original: 200€</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">Remise: 20%</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">=200*(1-20%) → 160€</pre>
            </div>
            <div>
              <h6 className="font-medium text-gray-800 mb-2">Calcul de TVA</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">Prix HT: 150€</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">TVA: 20%</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">=150*20% → 30€ (TVA)</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">=150+30 → 180€ (TTC)</pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <BarChart2 className="w-6 h-6 text-teal-600" />
        3. CALCULER DES VARIATIONS
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Calculer l'évolution entre deux valeurs est crucial pour analyser des performances, 
            suivre des indicateurs ou comparer des périodes.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ArrowUp className="w-5 h-5 text-teal-600" />
            Formule de variation
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">= (nouveau - ancien) / ancien</pre>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Hausse des ventes de 150 à 180 unités
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <code className="bg-gray-100 px-1">=(180-150)/150 → 20%</code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Format :</strong> Appliquer le format % au résultat
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/variation.gif" 
            alt="Calcul de variation en pourcentage" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-teal-600" />
            Gérer les valeurs négatives
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Diminution</h6>
              <p className="text-gray-700 text-sm">
                <code className="bg-gray-100 px-1">=(120-150)/150 → -20%</code>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Excel affiche automatiquement le signe négatif
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Format conditionnel</h6>
              <p className="text-gray-700 text-sm">
                Mettre en rouge les valeurs négatives :
              </p>
              <pre className="bg-gray-100 p-2 text-sm rounded mt-2">
                Accueil → Format conditionnel → Règles de mise en forme
              </pre>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/variation_negative.png" 
            alt="Gestion des variations négatives" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-teal-600" />
            Exemple de tableau de bord
          </h5>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Indicateur</th>
                  <th className="border p-2">Janvier</th>
                  <th className="border p-2">Février</th>
                  <th className="border p-2">Variation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Ventes</td>
                  <td className="border p-2">12 500€</td>
                  <td className="border p-2">14 750€</td>
                  <td className="border p-2 bg-green-50">+18%</td>
                </tr>
                <tr>
                  <td className="border p-2">Dépenses</td>
                  <td className="border p-2">8 300€</td>
                  <td className="border p-2">7 600€</td>
                  <td className="border p-2 bg-red-50">-8.4%</td>
                </tr>
                <tr>
                  <td className="border p-2">Clients</td>
                  <td className="border p-2">85</td>
                  <td className="border p-2">92</td>
                  <td className="border p-2 bg-green-50">+8.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-orange-600" />
        4. ASTUCES AVANCÉES
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Découvrez des techniques professionnelles pour travailler plus efficacement 
            avec les pourcentages dans Excel.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-600" />
            Calcul de marge commerciale
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">= (prix_vente - prix_revient) / prix_vente</pre>
          </div>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Produit acheté 80€, vendu 120€
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <code className="bg-gray-100 px-1">=(120-80)/120 → 33.3%</code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Attention :</strong> Ne pas confondre avec le taux de marque
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/calcul_marge.png" 
            alt="Calcul de marge commerciale" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Equal className="w-5 h-5 text-orange-600" />
            Trouver la valeur originale
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Après augmentation</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">= valeur / (1 + %)</pre>
              <p className="text-sm text-gray-600 mt-2">
                Prix TTC: 120€, TVA 20%<br/>
                HT = 120 / (1+20%) = 100€
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Après réduction</h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">= valeur / (1 - %)</pre>
              <p className="text-sm text-gray-600 mt-2">
                Prix soldé: 85€, remise 15%<br/>
                Original = 85 / (1-15%) = 100€
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-orange-600" />
            Pourcentages de total cumulé
          </h5>
          
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="text-sm">=SOMME($B$2:B2)/SOMME($B$2:$B$10)</pre>
          </div>
          
          <p className="text-gray-700 mb-4">
            Calculer la contribution progressive d'une série de valeurs au total général :
          </p>
          
          <ImageZoomable 
            src="/cours/debutant/pourcentages/total_cumule.gif" 
            alt="Calcul de pourcentage de total cumulé" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      {/* Exercice pratique */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <Target className="w-6 h-6 text-red-600" />
        5. EXERCICE PRATIQUE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances sur les pourcentages avec cet exercice complet 
          basé sur des données commerciales réelles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-red-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à analyser :
          </p>
          <a href="/cours/debutant/pourcentages/exercice_pourcentages.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
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
            url="/cours/debutant/pourcentages/correction_exercice.mp4"
            title="Correction de l'exercice sur les pourcentages"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-600" />
          Consignes détaillées
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Analyses commerciales</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Calculez la <strong>contribution en %</strong> de chaque produit au CA total</li>
              <li>Déterminez la <strong>marge brute</strong> de chaque produit en %</li>
              <li>Calculez l'<strong>évolution des ventes</strong> par rapport au mois précédent</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Scénarios commerciaux</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Appliquez une <strong>remise de 15%</strong> sur tous les produits de la catégorie B</li>
              <li>Calculez le <strong>prix de vente conseillé</strong> avec une marge de 40%</li>
              <li>Simulez une <strong>augmentation de 8%</strong> des coûts de production</li>
            </ol>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Tableau de bord</h5>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Créez un <strong>résumé synthétique</strong> des indicateurs clés</li>
            <li>Ajoutez une <strong>visualisation graphique</strong> des pourcentages</li>
            <li>Mettez en forme avec un <strong>format conditionnel</strong> pour les variations</li>
          </ol>
        </div>
      </div>

      {/* Synthèse des compétences acquises */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-green-600" />
          Synthèse des compétences acquises
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Techniques maîtrisées</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Calcul de pourcentages de base et de variation</li>
              <li>• Application d'augmentations et réductions en %</li>
              <li>• Calcul de marges commerciales et de TVA</li>
              <li>• Détermination de valeurs originales après modification</li>
              <li>• Création de tableaux de bord avec indicateurs %</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Applications professionnelles</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Analyse de performances commerciales</li>
              <li>• Calcul de remises et promotions</li>
              <li>• Suivi d'évolution d'indicateurs</li>
              <li>• Élaboration de scénarios financiers</li>
              <li>• Création de rapports avec indicateurs clés</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon15 onResult={onResult} />
      </div>
    </div>
  );
}