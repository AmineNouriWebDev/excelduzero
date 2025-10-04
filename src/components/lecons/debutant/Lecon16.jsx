import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon16 from "../../quizz/debutant/QuizLecon16";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  ArrowRight,
  ArrowDown,
  Lock,
  Unlock,
  Grid,
  Copy,
  Columns,
  Rows,
  DollarSign,
  Check,
  X,
  Lightbulb,
  Target,
  MoveRight,
  BookOpen,
  Download,
  Video,
  MoveDownRight
} from "lucide-react";

export default function Lecon16({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Grid className="w-8 h-8 text-indigo-600" />
        MAÎTRISER LES RÉFÉRENCES EXCEL: RELATIVES VS ABSOLUES
      </h2>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
        <p className="text-gray-700">
          Comprendre la différence entre les références relatives et absolues est crucial pour créer 
          des formules Excel efficaces. Cette leçon vous expliquera quand et comment utiliser chaque 
          type de référence pour éviter les erreurs courantes et automatiser vos calculs.
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
              Différencier les références relatives et absolues
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt=1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser le symbole $ pour créer des références absolues
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer les références mixtes (ligne ou colonne fixe)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Résoudre les problèmes courants de recopie de formules
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer ces concepts dans des cas pratiques
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ArrowRight className="w-6 h-6 text-blue-600" />
        1. LES RÉFÉRENCES RELATIVES
      </h3>

      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-gray-700">
            Les références relatives s'adaptent automatiquement lorsqu'une formule est copiée 
            vers d'autres cellules. C'est le comportement par défaut d'Excel.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MoveDownRight className="w-5 h-5 text-blue-600" />
            Comment fonctionnent les références relatives?
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Définition :</strong> Les références changent en fonction de la position relative
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Exemple :</strong> Si vous copiez une formule de <code className="bg-gray-100 px-1">B2</code> vers <code className="bg-gray-100 px-1">C2</code>, 
                toutes les références se déplacent d'une colonne vers la droite
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Cas d'utilisation :</strong> Calculs répétitifs comme les totaux de ligne ou les pourcentages de ligne
              </span>
            </li>
          </ul>
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">C</th>
                  <th className="border p-2">D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Produit</td>
                  <td className="border p-2">Prix</td>
                  <td className="border p-2">Quantité</td>
                  <td className="border p-2">Total</td>
                </tr>
                <tr>
                  <td className="border p-2">Livre</td>
                  <td className="border p-2">15€</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2 bg-blue-50">=B2*C2</td>
                </tr>
                <tr>
                  <td className="border p-2">Stylo</td>
                  <td className="border p-2">2€</td>
                  <td className="border p-2">10</td>
                  <td className="border p-2 bg-blue-50">=B3*C3</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">
            <strong>Explication :</strong> Quand vous copiez la formule <code className="bg-gray-100 px-1">=B2*C2</code> de D2 vers D3, 
            Excel ajuste automatiquement les références pour devenir <code className="bg-gray-100 px-1">=B3*C3</code>.
          </p>
          
          <ImageZoomable 
            src="/cours/debutant/lecon16/relative_reference.gif" 
            alt="Copie de références relatives dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Copy className="w-5 h-5 text-blue-600" />
            Recopie intelligente avec références relatives
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Copie horizontale :</strong> Les références de colonnes changent, les lignes restent fixes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Copie verticale :</strong> Les références de lignes changent, les colonnes restent fixes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Copie diagonale :</strong> Les lignes et colonnes changent
              </span>
            </li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Copie horizontale
              </h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">B1: =A1</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">C1: =B1</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">D1: =C1</pre>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ArrowDown className="w-4 h-4" />
                Copie verticale
              </h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">A2: =A1</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">A3: =A2</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">A4: =A3</pre>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <MoveDownRight className="w-4 h-4" />
                Copie diagonale
              </h6>
              <pre className="bg-gray-100 p-2 text-sm rounded">B2: =A1</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">C3: =B2</pre>
              <pre className="bg-gray-100 p-2 text-sm rounded">D4: =C3</pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Lock className="w-6 h-6 text-purple-600" />
        2. LES RÉFÉRENCES ABSOLUES
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Les références absolues restent fixes lorsqu'une formule est copiée. 
            Elles sont indiquées par le symbole $ (par exemple: $A$1).
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            Quand utiliser les références absolues?
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Facteurs constants :</strong> Taux de TVA, taux de change, coefficients fixes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Cellules de référence :</strong> Valeurs utilisées dans plusieurs calculs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Tableaux de conversion :</strong> Lorsque vous référencez une valeur fixe dans une table
              </span>
            </li>
          </ul>
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">C</th>
                  <th className="border p-2">D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2"></td>
                  <td className="border p-2">TVA</td>
                  <td className="border p-2 bg-purple-100">20%</td>
                  <td className="border p-2"></td>
                </tr>
                <tr>
                  <td className="border p-2">Produit</td>
                  <td className="border p-2">Prix HT</td>
                  <td className="border p-2">Montant TVA</td>
                  <td className="border p-2">Prix TTC</td>
                </tr>
                <tr>
                  <td className="border p-2">Ordinateur</td>
                  <td className="border p-2">800€</td>
                  <td className="border p-2 bg-purple-50">=B4*$C$2</td>
                  <td className="border p-2 bg-purple-50">=B4+C4</td>
                </tr>
                <tr>
                  <td className="border p-2">Souris</td>
                  <td className="border p-2">25€</td>
                  <td className="border p-2 bg-purple-50">=B5*$C$2</td>
                  <td className="border p-2 bg-purple-50">=B5+C5</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">
            <strong>Explication :</strong> La référence <code className="bg-gray-100 px-1">$C$2</code> reste fixe 
            lorsqu'on copie la formule vers le bas, ce qui permet d'appliquer le même taux de TVA à tous les produits.
          </p>
          
          <ImageZoomable 
            src="/cours/debutant/lecon16/absolute_reference.gif" 
            alt="Utilisation de références absolues dans Excel" 
            style={{ maxHeight: 350 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" />
            Comment créer une référence absolue
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Méthode manuelle :</strong> Ajoutez $ devant la lettre de colonne et le numéro de ligne (<code className="bg-gray-100 px-1">$A$1</code>)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Raccourci clavier :</strong> Appuyez sur F4 après avoir sélectionné une référence dans la formule
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                <strong>Cycle F4 :</strong> Appuyez plusieurs fois sur F4 pour parcourir les options :<br/>
                A1 → $A$1 → A$1 → $A1 → A1
              </span>
            </li>
          </ul>
          
          <ImageZoomable 
            src="/cours/debutant/lecon16/f4_shortcut.gif" 
            alt="Utilisation de la touche F4 pour créer des références absolues" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Unlock className="w-6 h-6 text-teal-600" />
        3. RÉFÉRENCES MIXTES
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Les références mixtes vous permettent de verrouiller soit la colonne, soit la ligne, 
            mais pas les deux. C'est utile pour créer des formules flexibles qui s'adaptent partiellement.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Columns className="w-5 h-5 text-teal-600" />
            Colonne fixe, ligne relative ($A1)
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Comportement :</strong> La colonne reste fixe, la ligne change lors de la copie
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Cas d'utilisation :</strong> Tableaux où vous copiez des formules horizontalement mais voulez toujours référencer la même colonne
              </span>
            </li>
          </ul>
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Mois</td>
                  <td className="border p-2">Ventes</td>
                  <td className="border p-2">Objectif</td>
                </tr>
                <tr>
                  <td className="border p-2">Janvier</td>
                  <td className="border p-2">12000€</td>
                  <td className="border p-2 bg-teal-50">=B2/$B$5</td>
                </tr>
                <tr>
                  <td className="border p-2">Février</td>
                  <td className="border p-2">15000€</td>
                  <td className="border p-2 bg-teal-50">=B3/$B$5</td>
                </tr>
                <tr>
                  <td className="border p-2">Mars</td>
                  <td className="border p-2">18000€</td>
                  <td className="border p-2 bg-teal-50">=B4/$B$5</td>
                </tr>
                <tr>
                  <td className="border p-2">Total annuel</td>
                  <td className="border p-2 bg-purple-100">45000€</td>
                  <td className="border p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Rows className="w-5 h-5 text-teal-600" />
            Ligne fixe, colonne relative (A$1)
          </h5>
          
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                <strong>Comportement :</strong> La ligne reste fixe, la colonne change lors de la copie
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                <strong>Cas d'utilisation :</strong> Tableaux où vous copiez des formules verticalement mais voulez toujours référencer la même ligne
              </span>
            </li>
          </ul>
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">A</th>
                  <th className="border p-2">B</th>
                  <th className="border p-2">C</th>
                  <th className="border p-2">D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Produit</td>
                  <td className="border p-2">Janvier</td>
                  <td className="border p-2">Février</td>
                  <td className="border p-2">Mars</td>
                </tr>
                <tr>
                  <td className="border p-2">Ordinateur</td>
                  <td className="border p-2">12000€</td>
                  <td className="border p-2">15000€</td>
                  <td className="border p-2">18000€</td>
                </tr>
                <tr>
                  <td className="border p-2">Part de marché</td>
                  <td className="border p-2 bg-teal-50">=B2/$B$4</td>
                  <td className="border p-2 bg-teal-50">=C2/$C$4</td>
                  <td className="border p-2 bg-teal-50">=D2/$D$4</td>
                </tr>
                <tr>
                  <td className="border p-2">Total marché</td>
                  <td className="border p-2 bg-purple-100">50000€</td>
                  <td className="border p-2 bg-purple-100">60000€</td>
                  <td className="border p-2 bg-purple-100">70000€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MoveDownRight className="w-5 h-5 text-teal-600" />
            Tableau de multiplication: cas classique
          </h5>
          
          <div className="text-gray-700 mb-4">
            Le tableau de multiplication est un excellent exemple pour comprendre les références mixtes:
          </div>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2"></th>
                  <th className="border p-2">1</th>
                  <th className="border p-2">2</th>
                  <th className="border p-2">3</th>
                  <th className="border p-2">4</th>
                  <th className="border p-2">5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 bg-gray-100">1</td>
                  <td className="border p-2 bg-teal-50">=B$1*$A2</td>
                  <td className="border p-2 bg-teal-50">=C$1*$A2</td>
                  <td className="border p-2 bg-teal-50">=D$1*$A2</td>
                  <td className="border p-2 bg-teal-50">=E$1*$A2</td>
                  <td className="border p-2 bg-teal-50">=F$1*$A2</td>
                </tr>
                <tr>
                  <td className="border p-2 bg-gray-100">2</td>
                  <td className="border p-2 bg-teal-50">=B$1*$A3</td>
                  <td className="border p-2 bg-teal-50">=C$1*$A3</td>
                  <td className="border p-2 bg-teal-50">=D$1*$A3</td>
                  <td className="border p-2 bg-teal-50">=E$1*$A3</td>
                  <td className="border p-2 bg-teal-50">=F$1*$A3</td>
                </tr>
                <tr>
                  <td className="border p-2 bg-gray-100">3</td>
                  <td className="border p-2 bg-teal-50">=B$1*$A4</td>
                  <td className="border p-2 bg-teal-50">=C$1*$A4</td>
                  <td className="border p-2 bg-teal-50">=D$1*$A4</td>
                  <td className="border p-2 bg-teal-50">=E$1*$A4</td>
                  <td className="border p-2 bg-teal-50">=F$1*$A4</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-gray-700">
            <strong>Explication :</strong> 
            <ul className="list-disc pl-6 mt-2">
              <li><code className="bg-gray-100 px-1">B$1</code> - La ligne 1 est fixe, la colonne change horizontalement</li>
              <li><code className="bg-gray-100 px-1">$A2</code> - La colonne A est fixe, la ligne change verticalement</li>
            </ul>
          </div>
          <ImageZoomable 
            src="/cours/debutant/lecon16/table_multiplication.gif" 
            alt="création table de multiplication avec les références mixtes" 
            style={{ maxHeight: 350 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <X className="w-6 h-6 text-red-600" />
        4. ERREURS COURANTES ET SOLUTIONS
      </h3>

      <div className="mb-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700">
            Même les utilisateurs expérimentés commettent des erreurs avec les références. 
            Voici comment les identifier et les corriger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Valeurs qui deviennent #REF!
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Cause :</strong> Suppression d'une ligne ou colonne référencée
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Vérifiez les références dans la barre de formule</li>
                <li>Utilisez des plages nommées pour éviter ce problème</li>
                <li>Évitez de supprimer des lignes/colonnes contenant des références</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Résultats incorrects après copie
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Cause :</strong> Mauvais type de référence (absolue vs relative)
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Analysez le résultat attendu</li>
                <li>Vérifiez si certaines références doivent rester fixes</li>
                <li>Utilisez F4 pour ajuster le type de référence</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: #NOM? ou #VALEUR!
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Cause :</strong> Erreur de syntaxe dans les références
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Vérifiez les caractères spéciaux</li>
                <li>Assurez-vous d'utiliser : plutôt que ; pour les plages</li>
                <li>Vérifiez les guillemets autour des textes</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              Problème: Performances lentes
            </h5>
            <p className="text-gray-700 mb-3">
              <strong>Cause :</strong> Trop de références à des cellules distantes
            </p>
            <div className="text-gray-700">
              <strong>Solution :</strong> 
              <ul className="list-disc pl-6">
                <li>Évitez les références à des feuilles ou classeurs différents</li>
                <li>Limitez l'utilisation de références à des plages entières (A:A)</li>
                <li>Utilisez des tableaux Excel pour optimiser les calculs</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            Astuce de pro: Utilisez des plages nommées
          </h5>
          <div className="text-gray-700">
            Pour éviter les problèmes de références, utilisez des plages nommées:
            <ul className="list-disc pl-6 mt-2">
              <li>Sélectionnez la plage de cellules</li>
              <li>Accédez à <strong>Formules → Définir un nom</strong></li>
              <li>Donnez un nom significatif (ex: "Taux_TVA")</li>
              <li>Utilisez ce nom dans vos formules: <code className="bg-gray-100 px-1">=B2*Taux_TVA</code></li>
            </ul>
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
          Appliquez vos connaissances sur les références Excel avec cet exercice complet 
          basé sur une feuille de calcul réelle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le fichier contenant les données à compléter :
          </p>
          <a href="/cours/debutant/lecon16/exercice_references.xlsx" 
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
            url="/cours/debutant/lecon16/correction_exercice.mp4"
            title="Correction de l'exercice sur les références"
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
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Calculs de base</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Calculez le <strong>total des ventes</strong> pour chaque produit</li>
              <li>Calculez la <strong>marge brute</strong> de chaque produit (Prix de vente - Coût)</li>
              <li>Calculez le <strong>pourcentage de marge</strong> (Marge brute / Prix de vente)</li>
            </ol>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Calculs avec références</h5>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Calculez le <strong>prix TTC</strong> pour chaque produit</li>
              <li>Calculez la <strong>contribution</strong> de chaque produit au chiffre d'affaires total</li>
            </ol>
          </div>
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
              <li>• Différenciation entre références relatives et absolues</li>
              <li>• Utilisation du symbole $ pour créer des références fixes</li>
              <li>• Application des références mixtes (colonne fixe, ligne fixe)</li>
              <li>• Correction des erreurs courantes de référence</li>
              <li>• Création de formules recopiables avec les références appropriées</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-800 mb-2">Applications professionnelles</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Création de tableaux de calcul financier</li>
              <li>• Automatisation des feuilles de paie</li>
              <li>• Construction de tableaux de bord dynamiques</li>
              <li>• Analyse de données commerciales</li>
              <li>• Génération de rapports périodiques</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon16 onResult={onResult} />
      </div>
    </div>
  );
}