import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon5 from "../../quizz/debutant/QuizLecon5";

import { 
    Calculator, Info, AlertTriangle, Type, Eye, GitBranch, 
     Plus, Calendar, Database, 
    MousePointer, ArrowRight, ArrowDown, Lock, ToggleLeft, 
    Lightbulb, CheckCircle, Link, Key, Keyboard 
  } from 'lucide-react';
  
  export default function Lecon5({ onResult }) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
          {/* En-tête principal */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Les Formules Excel</h1>
            <p className="text-lg text-gray-600">
              Maîtrisez les formules et fonctions essentielles d'Excel
            </p>
          </div>
      
          {/* Introduction */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                Sur le ruban, l'onglet « Formules » regroupe les commandes spécifiques aux formules.
              </p>
            </div>
          </div>
      
          {/* Règle fondamentale */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Règle fondamentale : Le signe égal =
              </h2>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-4">
                <strong className="text-orange-700">Toute formule doit commencer par le signe égal =</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Le signe égal indique qu'un résultat doit être donné, contrairement à une saisie simple, sans résultat attendu.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <p className="text-sm font-medium text-red-700 mb-2">❌ Incorrect</p>
                  <code className="text-red-600">5 + 2</code>
                  <p className="text-xs text-gray-600 mt-1">Affiche : 5 + 2</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <p className="text-sm font-medium text-green-700 mb-2">✅ Correct</p>
                  <code className="text-green-600">=5 + 2</code>
                  <p className="text-xs text-gray-600 mt-1">Affiche : 7</p>
                </div>
              </div>
            </div>
      
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Astuce</p>
                  <p className="text-sm text-gray-600">
                    Le pavé numérique ne contient pas de signe égal. Remplacez-le par le signe + ou - si la formule débute par un nombre négatif.
                  </p>
                </div>
              </div>
            </div>
      
            <ImageZoomable 
              src="/cours/debutant/lecon5/addition.gif" 
              alt="Exemple de formule d'addition Excel" 
              style={{ maxHeight: 300 }}
              className="mt-4 rounded-lg shadow-sm"
            />
          </div>
      
          {/* Casse */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Type className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Sensibilité à la casse
              </h2>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Excel ne distingue pas la casse (majuscule ou minuscule). Vous pouvez donc écrire une référence de colonne, un nom de fonction ou un nom attribué en minuscules pour être plus rapide.
              </p>
            </div>
          </div>
      
          {/* Affichage */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Affichage des formules
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Après validation (Entrée ou clic dans une autre cellule), le résultat apparaît dans la cellule. La formule reste visible dans la barre de formule.
              </p>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">Pour afficher toutes les formules :</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-700">Groupe « Formules » → bouton « Afficher les formules »</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-700">Raccourci : <kbd className="px-2 py-1 bg-white rounded border text-sm">Ctrl + "</kbd></span>
                  </div>
                </div>
              </div>
      
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Formules longues</p>
                    <p className="text-sm text-gray-600">
                      Pour une meilleure lisibilité, insérez des sauts de ligne : <kbd className="px-2 py-1 bg-white rounded border text-xs">Alt + Entrée</kbd>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          {/* Indépendance/Dépendance */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <GitBranch className="w-6 h-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Formules indépendantes et dépendantes
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Formule indépendante
                </h4>
                <p className="text-gray-700 mb-3">N'utilise pas la valeur d'autres cellules</p>
                <div className="bg-white p-3 rounded border">
                  <code className="text-emerald-700">=8 * 5 - 6</code>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <Link className="w-5 h-5 mr-2" />
                  Formule dépendante
                </h4>
                <p className="text-gray-700 mb-3">Utilise la valeur d'autres cellules</p>
                <div className="bg-white p-3 rounded border">
                  <code className="text-blue-700">=A3 + B1</code>
                </div>
              </div>
            </div>
          </div>
      
          {/* Les fonctions */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Plus className="w-6 h-6 text-violet-500" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Les fonctions
              </h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Une formule peut utiliser une ou plusieurs fonctions, relatives à divers domaines.
            </p>
      
            <div className="grid gap-6">
              {/* Fonction SOMME */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Plus className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-red-800">Mathématiques - Fonction SOMME</h4>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <code className="text-red-700">=SOMME(C5:Z18)</code>
                  <p className="text-sm text-gray-600 mt-2">
                    Renvoie la somme des valeurs de la plage C5:Z18 (évite d'écrire =C5+C6+...+Z18)
                  </p>
                </div>
              </div>
      
              {/* Fonction NBCAR */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Type className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-orange-800">Texte - Fonction NBCAR</h4>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                  <code className="text-orange-700">=NBCAR(A27)</code>
                  <p className="text-sm text-gray-600 mt-2">
                    Renvoie le nombre de caractères du texte dans la cellule A27
                  </p>
                </div>
              </div>
      
              {/* Fonction AUJOURDHUI */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Date - Fonction AUJOURDHUI</h4>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <code className="text-blue-700">=AUJOURDHUI()-2</code>
                  <p className="text-sm text-gray-600 mt-2">
                    Renvoie la date d'avant-hier
                  </p>
                </div>
              </div>
      
              {/* Fonction ESTVIDE */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-800">Information - Fonction ESTVIDE</h4>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <code className="text-purple-700">=ESTVIDE(E10)</code>
                  <p className="text-sm text-gray-600 mt-2">
                    Renvoie VRAI si E10 est vide, sinon FAUX
                  </p>
                </div>
              </div>
            </div>
      
            <ImageZoomable 
              src="/cours/debutant/lecon5/fonctions_simples.gif" 
              alt="Exemples de fonctions simples Excel" 
              style={{ maxHeight: 300 }}
              className="mt-6 rounded-lg shadow-sm"
            />
          </div>
      
          {/* Section 1: Opérateurs */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">OPÉRATEURS</h2>
            </div>
      
            {/* Opérateurs de calcul */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Calculator className="w-6 h-6 text-indigo-500" />
                <h3 className="text-xl font-semibold text-gray-900">Opérateurs de calcul</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Pour élaborer une formule de calcul, on se sert d'opérateurs par ordre de priorité :
              </p>
      
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white rounded border-l-4 border-red-400">
                    <span className="font-bold text-red-600">1.</span>
                    <div>
                      <span className="font-semibold">Puissance</span>
                      <code className="ml-3 px-2 py-1 bg-gray-100 rounded">^</code>
                      <span className="text-sm text-gray-600 ml-2">(Alt Gr + 9)</span>
                      <div className="text-sm text-gray-600 mt-1">Exemple : <code>=3^2</code></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-white rounded border-l-4 border-orange-400">
                    <span className="font-bold text-orange-600">2.</span>
                    <div>
                      <span className="font-semibold">Multiplication et Division</span>
                      <code className="ml-3 px-2 py-1 bg-gray-100 rounded">*</code>
                      <code className="ml-2 px-2 py-1 bg-gray-100 rounded">/</code>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-white rounded border-l-4 border-green-400">
                    <span className="font-bold text-green-600">3.</span>
                    <div>
                      <span className="font-semibold">Addition et Soustraction</span>
                      <code className="ml-3 px-2 py-1 bg-gray-100 rounded">+</code>
                      <code className="ml-2 px-2 py-1 bg-gray-100 rounded">-</code>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Exemple de calcul</h4>
                    <div className="bg-white p-4 rounded border">
                      <p className="mb-2"><code className="text-blue-600">=3^2*4+1</code></p>
                      <p className="text-sm text-gray-600">
                        Résultat : <strong>37</strong> (3² = 9, puis 9×4 = 36, puis 36+1 = 37)
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mt-3">
                      Utilisez des parenthèses pour préciser la priorité : <code>=((3^2)*4)+1</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Opérateur alphanumérique */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Type className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-900">Opérateur alphanumérique</h3>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  L'esperluette <code className="px-2 py-1 bg-white rounded border font-bold">&</code> est l'opérateur permettant de concaténer (lier) des chaînes de caractères.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Exemple pratique :</h4>
                  <div className="space-y-2 text-sm">
                    <p>• A1 : <code>Julien</code></p>
                    <p>• B1 : <code>New York</code></p>
                    <p>• C1 : <code>=A1&" habite à "&B1</code></p>
                    <p className="font-semibold text-green-700">Résultat : Julien habite à New York</p>
                  </div>
                </div>
              </div>
      
              <ImageZoomable 
                src="/cours/debutant/lecon5/operateurs_excel.gif" 
                alt="Exemple d'opérateur alphanumérique" 
                style={{ maxHeight: 300 }}
                className="mt-4 rounded-lg shadow-sm"
              />
            </div>
          </div>
      
          {/* Section 2: Références */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">RÉFÉRENCES RELATIVES OU ABSOLUES</h2>
            </div>
      
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Dans une formule, on peut désigner une cellule soit par sa référence ColonneLigne (ex: <code>=6*J43</code>), soit par son nom (ex: <code>=6*quantité</code>).
              </p>
              <p className="text-gray-700">
                Quand on saisit sa référence, le contour de la cellule change de couleur et s'entoure de quatre poignées.
              </p>
            </div>
      
            {/* Insertion de référence */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <MousePointer className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold text-gray-900">Insertion d'une référence</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Keyboard className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-800">Méthode 1 : Clavier</h4>
                  </div>
                  <p className="text-gray-700">Taper la lettre de colonne suivie du numéro de ligne</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <MousePointer className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-800">Méthode 2 : Souris</h4>
                  </div>
                  <p className="text-gray-700">Sélectionner avec la souris (particulièrement utile pour les plages)</p>
                </div>
              </div>
            </div>
      
            {/* Références relatives */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <ArrowRight className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-900">Référence relative</h3>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4">
                  Une formule avec référence relative mémorise la <strong>position</strong> de la cellule par rapport à celle contenant la formule.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">Exemple :</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Dans C5, saisir <code>=A4</code></p>
                    <p>• Excel mémorise : "2 colonnes avant, 1 ligne au-dessus"</p>
                    <p>• Si on copie C5 vers D8, le résultat sera celui de B7</p>
                  </div>
                </div>
              </div>
      
              <ImageZoomable 
                src="/cours/debutant/lecon5/reference_relative.gif" 
                alt="Exemple de références relatives Excel" 
                style={{ maxHeight: 300 }}
                className="mb-6 rounded-lg shadow-sm"
              />
      
              {/* Recopie verticale */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ArrowDown className="w-5 h-5 text-blue-500" />
                  <h4 className="text-lg font-semibold text-gray-900">Recopie verticale</h4>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Sélectionner la première cellule</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Cliquer-glisser sur la poignée (petit carré noir en bas à droite)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Double-cliquer sur la poignée pour une recopie automatique jusqu'à la dernière ligne de données</span>
                    </li>
                  </ol>
                </div>
      
                <ImageZoomable 
                  src="/cours/debutant/lecon5/recopie_verticale.gif" 
                  alt="Recopie verticale Excel" 
                  style={{ maxHeight: 300 }}
                  className="mt-4 rounded-lg shadow-sm"
                />
              </div>
      
              {/* Recopie horizontale */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ArrowRight className="w-5 h-5 text-orange-500" />
                  <h4 className="text-lg font-semibold text-gray-900">Recopie horizontale</h4>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    La méthode de recopie s'applique également horizontalement.
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">Exemple :</h4>
                    <div className="space-y-2 text-sm">
                      <p>• Saisir des nombres dans A8:C10</p>
                      <p>• Dans A11 : <code>=A8+A9+A10</code></p>
                      <p>• Étendre la formule jusqu'en C11</p>
                      <p>• Chaque cellule affiche la somme des trois cellules au-dessus</p>
                    </div>
                  </div>
                </div>
      
                <ImageZoomable 
                  src="/cours/debutant/lecon5/recopie_horizontale.gif" 
                  alt="Recopie horizontale Excel" 
                  style={{ maxHeight: 300 }}
                  className="mt-4 rounded-lg shadow-sm"
                />
              </div>
            </div>
      
            {/* Références absolues */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-900">Référence absolue</h3>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4">
                  Pour une référence absolue, utilisez le format <code className="font-bold">$colonne$ligne</code>. 
                  Le symbole $ fige la colonne ou la ligne qui suit.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Exemple :</h4>
                  <p className="text-sm text-gray-700">
                    <code>=$E$1</code> reste toujours <code>=$E$1</code> même après recopie
                  </p>
                </div>
              </div>
      
              <ImageZoomable 
                src="/cours/debutant/lecon5/reference_absolue.png" 
                alt="Exemple de référence absolue Excel" 
                style={{ maxHeight: 300 }}
                className="mb-4 rounded-lg shadow-sm"
              />
      
              <ImageZoomable 
                src="/cours/debutant/lecon5/reference_absolue.gif" 
                alt="Démonstration référence absolue Excel" 
                style={{ maxHeight: 300 }}
                className="rounded-lg shadow-sm"
              />
            </div>
      
            {/* Références mixtes */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <ToggleLeft className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold text-gray-900">Référence mixte</h3>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Vous pouvez figer seulement la colonne ou seulement la ligne :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <code className="text-purple-700">$A8</code>
                    <p className="text-sm text-gray-600 mt-1">Colonne fixe, ligne relative</p>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <code className="text-purple-700">A$8</code>
                    <p className="text-sm text-gray-600 mt-1">Ligne fixe, colonne relative</p>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Touche F4 */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Key className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-900">Utilisation de la touche F4</h3>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour passer d'un type de référence à un autre, utilisez la touche <kbd className="px-2 py-1 bg-white rounded border font-mono text-sm">F4</kbd>.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">Exemple :</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                    <li>Saisissez <code>=A4</code> dans une cellule</li>
                    <li>Appuyez sur <kbd className="px-2 py-1 bg-white rounded border font-mono text-xs">F4</kbd> : la référence devient <code>$A$4</code></li>
                    <li>Appuyez à nouveau sur <kbd>F4</kbd> : <code>A$4</code></li>
                    <li>Appuyez encore : <code>$A4</code></li>
                    <li>Encore : <code>A4</code></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
      
          {/* Section 3: Exemple */}
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">EXEMPLE PRATIQUE</h2>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Calcul des prix HT, prix TTC et leurs sommes dans un tableau de produits.
              </p>
              <ImageZoomable 
                src="/cours/debutant/lecon5/exemple.png" 
                alt="Exemple pratique de formules Excel" 
                style={{ maxHeight: 400 }}
                className="rounded-lg shadow-sm"
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="aspect-w-16 aspect-h-9">
                <video width="640" height="360" controls className="w-full rounded-lg">
                  <source src="/cours/debutant/lecon5/exemple.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            </div>
          </div>
            <div className="mt-12">

              <QuizLecon5 onResult={onResult} />
            </div>
        </div>
      );
  }