import { useState } from "react";
import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon4 from "../../quizz/debutant/QuizLecon4";
import { 
    BookOpen, 
    Palette, 
    AlignLeft, 
    Type, 
    Grid3X3, 
    Sparkles, 
    Copy, 
    Layers, 
    Columns, 
    Target, 
    CheckCircle,
    Play,
    Image as ImageIcon,
    Settings,
    Zap,
    Eye,
    RotateCcw,
    MousePointer
  } from "lucide-react";

  
  export default function Lecon4({ onResult }) {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-12 text-center rounded-xl shadow-lg mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-10 h-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">MISE EN FORME ET DIMENSIONS</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Apprenez à personnaliser l'apparence de vos cellules Excel pour créer
            des feuilles de calcul professionnelles et lisibles.
          </p>
        </header>
  
        {/* Navigation */}
        <nav className="bg-blue-50 px-6 py-8 border-b-2 border-blue-200 rounded-xl shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-800">Plan de la leçon</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "#elements-mise-en-forme", text: "Éléments de mise en forme", icon: <Settings className="w-4 h-4" /> },
              { href: "#formats-affichage", text: "Formats d'affichage", icon: <Type className="w-4 h-4" /> },
              { href: "#alignement-orientation", text: "Alignement et orientation", icon: <AlignLeft className="w-4 h-4" /> },
              { href: "#police-bordure-remplissage", text: "Police, bordure, remplissage", icon: <Palette className="w-4 h-4" /> },
              { href: "#styles", text: "Création et application d'un style", icon: <Sparkles className="w-4 h-4" /> },
              { href: "#mise-en-forme-conditionnelle", text: "Mise en forme conditionnelle", icon: <Zap className="w-4 h-4" /> },
              { href: "#reproduction-mise-en-forme", text: "Reproduction d'une mise en forme", icon: <Copy className="w-4 h-4" /> },
              { href: "#modification-theme", text: "Modification du thème", icon: <Layers className="w-4 h-4" /> },
              { href: "#dimensions", text: "Largeurs des colonnes et hauteurs des lignes", icon: <Columns className="w-4 h-4" /> }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </a>
            ))}
          </div>
        </nav>
  
        <main className="px-6 py-8">
          {/* Section 1: Éléments de mise en forme */}
          <section id="elements-mise-en-forme" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 mr-3 text-blue-600" />
              <h2 className="text-3xl font-bold text-blue-800">1. ÉLÉMENTS DE MISE EN FORME</h2>
            </div>
  
            <div className="bg-blue-100 border-2 border-dashed border-blue-400 rounded-xl p-6 text-center mb-6 flex items-center justify-center">
              <Play className="w-6 h-6 mr-2 text-blue-600" />
              <p className="text-blue-700 font-semibold">
                Vidéo démonstrative : Vue d'ensemble des éléments de mise en forme
              </p>
            </div>
  
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              La mise en forme d'une cellule concerne plusieurs éléments essentiels :
            </p>
  
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Type className="w-5 h-5" />, title: "Le « nombre »", desc: "format d'affichage de la valeur (exemples : format monétaire, format pourcentage ou format texte)" },
                { icon: <AlignLeft className="w-5 h-5" />, title: "L'alignement", desc: "de la valeur dans la cellule" },
                { icon: <Type className="w-5 h-5" />, title: "La police", desc: "des caractères" },
                { icon: <Grid3X3 className="w-5 h-5" />, title: "La bordure", desc: "de la case" },
                { icon: <Palette className="w-5 h-5" />, title: "Son remplissage", desc: "(couleur de fond)" },
                { icon: <Settings className="w-5 h-5" />, title: "Son format", desc: "(protection, etc.)" }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-blue-600 mr-3 mt-1">{item.icon}</div>
                  <div>
                    <strong className="text-blue-800">{item.title}</strong>
                    <span className="ml-2 text-gray-600"> : {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-700">Outils de mise en forme</h3>
              </div>
  
              <div className="mb-6">
                <h4 className="text-xl font-medium text-blue-600 mb-3">Fenêtre « Format de cellule »</h4>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/format-cellule.png" 
                    alt="Accès à la fenêtre Format de cellule"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <p className="text-gray-700 mb-4">
                  Les cinq premiers éléments cités ci-dessus font chacun l'objet d'un onglet de la fenêtre « Format de cellule ».
                </p>
  
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Méthodes d'accès :</p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Cliquez sur le lanceur du groupe Nombre</li>
                    <li>Clic droit sur la sélection à mettre en forme &gt; Format de cellule</li>
                  </ol>
                </div>
  
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-blue-800">
                    La fenêtre présente des options supplémentaires par rapport aux commandes du ruban.
                  </p>
                </div>
              </div>
  
              <div className="mb-6">
                <h4 className="text-xl font-medium text-blue-600 mb-3">Les commandes du ruban ou de la mini-barre d'outils</h4>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/commandes-ruban.png" 
                    alt="Utilisation des commandes du ruban"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <p className="text-gray-700 mb-4">
                  Des boutons du ruban, dont certains sont présents sur la mini-barre d'outils (clic droit sur la cellule pour l'afficher), peuvent être utilisés pour accéder directement aux mises en forme.
                </p>
  
                <p className="text-gray-700 mb-4">
                  Par exemple, sont communément utilisés les boutons d'alignement ou les boutons de police (type, taille, styles gras, italique et souligné).
                </p>
  
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">
                    <strong>Onglet :</strong> excepté pour l'application d'un thème (onglet Mise en page), on utilisera toujours l'onglet Accueil.
                  </p>
                  <p className="font-semibold text-gray-800 mb-2">Groupes :</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Concernant le nombre et l'alignement : groupes du même nom</li>
                    <li>Concernant la police, la bordure et le remplissage : groupe Police</li>
                    <li>Concernant le format : groupe Cellules</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div>
              <div className="flex items-center mb-4">
                <MousePointer className="w-6 h-6 mr-2 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-700">Principe d'application d'une mise en forme</h3>
              </div>
  
              <div className="mb-4">
                <ImageZoomable 
                  src="/cours/debutant/Lecon4/application-mise-en-forme.gif" 
                  alt="Sélection et application de mise en forme"
                  style={{ maxHeight: 350 }} 
                />
              </div>
  
              <p className="text-gray-700 mb-4">
                Plutôt que de procéder à la mise en forme cellule par cellule, il est plus rapide de sélectionner, avant ou après saisie, le maximum de cellules, avant de leur appliquer une mise en forme.
              </p>
  
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong className="text-blue-700">Sélectionnez les cellules à traiter.</strong> Quand une seule cellule est sélectionnée, sélectionnez bien la cellule (elle a un contour plus épais), et non son contenu (dans ce cas, vous n'aurez accès qu'à l'onglet Police de la fenêtre « Format de cellule »).
                  </li>
                  <li>
                    <strong className="text-blue-700">Cliquez sur les commandes de mises en forme souhaitées,</strong> en utilisant le ruban, la mini-barre d'outils ou la fenêtre « Format de cellule »
                  </li>
                </ol>
              </div>
            </div>
          </section>
  
          {/* Section 2: Formats d'affichage */}
          <section id="formats-affichage" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Type className="w-8 h-8 mr-3 text-green-600" />
              <h2 className="text-3xl font-bold text-green-800">2. FORMATS D'AFFICHAGE</h2>
            </div>
  
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/formats-affichage.gif" 
                alt="Application des différents formats d'affichage"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <p className="font-semibold text-gray-800 mb-2">Procédure :</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Sélectionnez les cellules à traiter</li>
                <li>Dans le groupe Nombre du ruban, activez le menu déroulant de la zone de saisie</li>
                <li>Choisissez parmi les onze formats prédéfinis par Excel, avec un aperçu de la cellule active</li>
              </ol>
            </div>
  
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Formats disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Format Standard", desc: "Format par défaut" },
                  { title: "Format Nombre", desc: "Nombres avec séparateurs de milliers" },
                  { title: "Format Monétaire", desc: "Affichage avec symbole monétaire" },
                  { title: "Format Comptabilité", desc: "Format comptable avec alignement" },
                  { title: "Format Date courte", desc: "JJ/MM/AAAA" },
                  { title: "Format Date longue", desc: "Jour Mois Année" },
                  { title: "Format Heure", desc: "HH:MM:SS" },
                  { title: "Format Pourcentage", desc: "Valeur en %" },
                  { title: "Format Fraction", desc: "Affichage fractionnaire" },
                  { title: "Format Scientifique", desc: "Notation scientifique" },
                  { title: "Format Texte", desc: "Traitement comme texte" },
                  { title: "Autres formats numériques", desc: "Accès à la fenêtre complète" }
                ].map((format, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-green-700 mb-1">{format.title}</p>
                    <p className="text-gray-600 text-sm">{format.desc}</p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mt-8">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/exemples-formats.png" 
                alt="Exemples de formats appliqués à des valeurs numériques"
                style={{ maxHeight: 350 }} 
              />
            </div>
          </section>
  
          {/* Section 3: Alignement et orientation */}
          <section id="alignement-orientation" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <AlignLeft className="w-8 h-8 mr-3 text-purple-600" />
              <h2 className="text-3xl font-bold text-purple-800">3. ALIGNEMENT ET ORIENTATION</h2>
            </div>
  
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/options-alignement.png" 
                alt="Options d'alignement et d'orientation"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Types d'alignement</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <AlignLeft className="w-5 h-5" />, title: "Alignement horizontal", desc: "Gauche, Centre, Droite, Justifié" },
                  { icon: <AlignLeft className="w-5 h-5" />, title: "Alignement vertical", desc: "Haut, Milieu, Bas" },
                  { icon: <RotateCcw className="w-5 h-5" />, title: "Orientation du texte", desc: "Rotation de 0° à 90°" },
                  { icon: <Type className="w-5 h-5" />, title: "Retour à la ligne automatique", desc: "dans les cellules" },
                  { icon: <Settings className="w-5 h-5" />, title: "Réduction pour ajuster", desc: "à la taille de la cellule" },
                  { icon: <Grid3X3 className="w-5 h-5" />, title: "Fusion de cellules", desc: "" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="text-purple-600 mr-3 mt-1">{item.icon}</div>
                    <div>
                      <strong className="text-purple-800">{item.title}</strong>
                      {item.desc && <span className="ml-2 text-gray-600"> : {item.desc}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mt-8">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/demo-alignement.gif" 
                alt="Application des différents alignements"
                style={{ maxHeight: 350 }} 
              />
            </div>
          </section>
  
          {/* Section 4: Police, bordure, remplissage */}
          <section id="police-bordure-remplissage" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Palette className="w-8 h-8 mr-3 text-orange-600" />
              <h2 className="text-3xl font-bold text-orange-800">4. POLICE, BORDURE, REMPLISSAGE</h2>
            </div>
  
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center">
                  <Type className="w-6 h-6 mr-2" />
                  Police
                </h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/parametres-police.gif" 
                    alt="Modification des paramètres de police"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Type de police : Arial, Times New Roman, Calibri...",
                    "Taille : de 8 à 72 points et plus",
                    "Style : Gras, Italique, Souligné",
                    "Couleur du texte",
                    "Effets : Barré, Exposant, Indice"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                      <strong className="text-orange-700">{item.split(' : ')[0]}</strong>
                      {item.includes(' : ') && <span className="text-gray-600"> : {item.split(' : ')[1]}</span>}
                    </div>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center">
                  <Grid3X3 className="w-6 h-6 mr-2" />
                  Bordures
                </h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/application-bordures.gif" 
                    alt="Application de bordures"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Types de bordures : Contour, Intérieur, Personnalisé",
                    "Styles de ligne : Continue, Pointillés, Double...",
                    "Épaisseur de ligne",
                    "Couleur des bordures"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                      <strong className="text-orange-700">{item.split(' : ')[0]}</strong>
                      {item.includes(' : ') && <span className="text-gray-600"> : {item.split(' : ')[1]}</span>}
                    </div>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center">
                  <Palette className="w-6 h-6 mr-2" />
                  Remplissage
                </h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/options-remplissage.png" 
                    alt="Options de remplissage"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Couleur d'arrière-plan",
                    "Motifs et textures",
                    "Dégradés",
                    "Transparence"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                      <strong className="text-orange-700">{item}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 5: Styles */}
          <section id="styles" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-pink-50 rounded-xl border-l-4 border-pink-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 mr-3 text-pink-600" />
              <h2 className="text-3xl font-bold text-pink-800">5. CRÉATION ET APPLICATION D'UN STYLE</h2>
            </div>
  
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4">Styles prédéfinis</h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/styles-predefinis.png" 
                    alt="Utilisation des styles prédéfinis"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <p className="text-gray-700 leading-relaxed">
                  Excel propose une galerie de styles prédéfinis dans le groupe Styles de l'onglet Accueil. Ces styles combinent plusieurs éléments de mise en forme pour créer rapidement des cellules attrayantes.
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4">Création d'un style personnalisé</h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/creation-style.gif" 
                    alt="Création d'un style personnalisé"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Formatez une cellule selon vos préférences</li>
                    <li>Sélectionnez la cellule formatée</li>
                    <li>Dans le groupe Styles, cliquez sur "Nouveau style de cellule"</li>
                    <li>Nommez votre style et définissez les éléments à inclure</li>
                    <li>Validez pour créer le style</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 6: Mise en forme conditionnelle */}
          <section id="mise-en-forme-conditionnelle" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl border-l-4 border-yellow-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 mr-3 text-yellow-600" />
              <h2 className="text-3xl font-bold text-yellow-800">6. MISE EN FORME CONDITIONNELLE</h2>
            </div>
  
            <div className="mb-8">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/mise-forme-conditionnelle.png" 
                alt="Vue d'ensemble de la mise en forme conditionnelle"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Mises en forme conditionnelles prédéfinies</h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/regles-predefinies.png" 
                    alt="Application des règles prédéfinies"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Règles de mise en surbrillance", desc: "Supérieur à, Inférieur à, Égal à..." },
                    { title: "Règles des valeurs plus/moins élevées", desc: "Top 10, Bottom 10..." },
                    { title: "Barres de données", desc: "Représentation graphique des valeurs" },
                    { title: "Nuances de couleurs", desc: "Dégradé selon les valeurs" },
                    { title: "Jeux d'icônes", desc: "Flèches, feux tricolores, étoiles..." }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-semibold text-yellow-700 mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Mises en forme conditionnelles personnalisées</h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/regles-personnalisees.gif" 
                    alt="Création de règles personnalisées"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <p className="text-gray-700">
                  Créez vos propres règles en utilisant des formules pour définir les
                  conditions d'application de la mise en forme.
                </p>
              </div>
  
              <div>
                <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Gestion des règles</h3>
                <div className="mb-4">
                  <ImageZoomable 
                    src="/cours/debutant/Lecon4/gestion-regles.png" 
                    alt="Gestionnaire des règles"
                    style={{ maxHeight: 350 }} 
                  />
                </div>
  
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Afficher les règles", desc: "Visualiser toutes les règles actives" },
                    { title: "Modifier les règles", desc: "Changer les conditions ou la mise en forme" },
                    { title: "Supprimer les règles", desc: "Effacer des règles spécifiques" },
                    { title: "Priorité des règles", desc: "Définir l'ordre d'application" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-semibold text-yellow-700 mb-1">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* Section 7: Reproduction */}
          <section id="reproduction-mise-en-forme" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl border-l-4 border-indigo-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Copy className="w-8 h-8 mr-3 text-indigo-600" />
              <h2 className="text-3xl font-bold text-indigo-800">7. REPRODUCTION D'UNE MISE EN FORME</h2>
            </div>
  
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/pinceau-reproduction.gif" 
                alt="Utilisation du pinceau de reproduction"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Pinceau de reproduction de mise en forme</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Sélectionnez la cellule source (avec la mise en forme à copier)</li>
                <li>Cliquez sur l'outil "Reproduire la mise en forme" dans le groupe Presse-papiers</li>
                <li>Cliquez sur la cellule de destination</li>
              </ol>
            </div>
  
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg mb-6">
              <p className="text-indigo-800 font-semibold">
                Astuce : Double-cliquez sur l'outil pour l'activer en mode persistant et appliquer la mise en forme à plusieurs cellules successivement.
              </p>
            </div>
  
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Autres méthodes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Copier-coller spécial", desc: "Formats uniquement" },
                { title: "Styles de cellule", desc: "Application uniforme" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-semibold text-indigo-700 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Section 8: Thèmes */}
          <section id="modification-theme" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Layers className="w-8 h-8 mr-3 text-red-600" />
              <h2 className="text-3xl font-bold text-red-800">8. MODIFICATION DU THÈME</h2>
            </div>
  
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Jeu de couleurs, jeu de polices et jeu d'effets</h3>
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/themes-predefinis.png" 
                alt="Application des thèmes prédéfinis"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <p className="text-gray-700 mb-6">
              Les thèmes dans Excel permettent d'appliquer une cohérence visuelle
              à l'ensemble de votre classeur :
            </p>
  
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Jeu de couleurs", desc: "Palette de couleurs harmonieuses" },
                { title: "Jeu de polices", desc: "Combinaison de polices pour titres et corps de texte" },
                { title: "Jeu d'effets", desc: "Styles d'ombres, reflets et autres effets" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-red-700 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
  
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Création d'un thème personnalisé</h3>
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/creation-theme.gif" 
                alt="Création d'un thème personnalisé"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Onglet Mise en page &gt; groupe Thèmes</li>
                <li>Personnalisez les couleurs, polices et effets</li>
                <li>Enregistrez comme nouveau thème</li>
                <li>Réutilisez dans d'autres classeurs</li>
              </ol>
            </div>
          </section>
  
          {/* Section 9: Dimensions */}
          <section id="dimensions" className="mb-12 p-8 bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl border-l-4 border-teal-500 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Columns className="w-8 h-8 mr-3 text-teal-600" />
              <h2 className="text-3xl font-bold text-teal-800">9. LARGEURS DES COLONNES ET HAUTEURS DES LIGNES</h2>
            </div>
  
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Procédures de modification</h3>
            <div className="mb-6">
              <ImageZoomable 
                src="/cours/debutant/Lecon4/ajustement-dimensions.gif" 
                alt="Ajustement des dimensions"
                style={{ maxHeight: 350 }} 
              />
            </div>
  
            <div className="mb-8">
              <h4 className="text-xl font-medium text-teal-600 mb-3">Méthodes manuelles</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Glisser-déposer", desc: "Positionnez le curseur sur la bordure et faites glisser" },
                  { title: "Double-clic", desc: "Ajustement automatique au contenu" },
                  { title: "Menu contextuel", desc: "Clic droit > Largeur de colonne/Hauteur de ligne" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-semibold text-teal-700 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
  
              <h4 className="text-xl font-medium text-teal-600 mb-3">Méthodes par le ruban</h4>
              <div className="mb-4">
                <ImageZoomable 
                  src="/cours/debutant/Lecon4/ruban-dimensions.png" 
                  alt="Utilisation du ruban pour les dimensions"
                  style={{ maxHeight: 350 }} 
                />
              </div>
              <p className="text-gray-700 mb-4">Onglet Accueil &gt; groupe Cellules &gt; Format :</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Largeur de colonne", desc: "Spécifier une valeur exacte" },
                  { title: "Ajuster la largeur de colonne", desc: "Automatique selon le contenu" },
                  { title: "Hauteur de ligne", desc: "Définir la hauteur" },
                  { title: "Ajuster la hauteur de ligne", desc: "Automatique" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-semibold text-teal-700 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Reproduction des dimensions</h3>
              <div className="mb-4">
                <ImageZoomable 
                  src="/cours/debutant/Lecon4/copie-dimensions.gif" 
                  alt="Copie des dimensions"
                  style={{ maxHeight: 350 }} 
                />
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Sélectionnez la colonne/ligne source</li>
                  <li>Copiez (Ctrl+C)</li>
                  <li>Sélectionnez la colonne/ligne de destination</li>
                  <li>Collage spécial &gt; Largeurs de colonne</li>
                </ol>
              </div>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Masquage et affichage</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Masquer", desc: "Largeur 0 ou menu contextuel" },
                  { title: "Afficher", desc: "Sélectionner les colonnes adjacentes et faire glisser" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-semibold text-teal-700 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Section Exercices pratiques */}
          <section className="mt-12 mb-12">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center gap-3">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Exercices pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow">
                <h3 className="font-semibold text-blue-700 mb-2">Etape 1 : Mise en forme basique</h3>
                <p className="text-gray-700">Créez un calendrier simple en utilisant les séries de données pour les mois et les jours de l'année'.</p>
              </div>
              <div className="bg-green-50 p-5 rounded-xl border border-green-200 shadow">
                <h3 className="font-semibold text-green-700 mb-2">Etape 2 : Mise en forme</h3>
                <p className="text-gray-700">Modifiez la police,appliquez des bordure et stylisez selon votre goût le thème</p>
              </div>
              <div className="bg-pink-50 p-5 rounded-xl border border-pink-200 shadow">
                <h3 className="font-semibold text-pink-700 mb-2">Partie 3 :Mise en forme conditionnelle personnalisé</h3>
                <p className="text-gray-700">Modifiez l'apparence des jours de weekend (Samedi & Dimanche)</p>
              </div>
            </div>
          </section>
  
          {/* Section vidéo de correction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v10m0 0H9m6 0a2 2 0 002-2v-8m-8 10V10m0 0L4.447 7.724A2 2 0 014 6.382V5a2 2 0 012-2h12a2 2 0 012 2v1.382a2 2 0 01-.447 1.342L15 10z" />
              </svg>
              Vidéo de correction des exercices
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
              {/* Remplacez la balise ci-dessous par votre composant vidéo ou iframe YouTube */}
              <div className="w-full flex items-center justify-center min-h-[180px] text-gray-400 italic">
              <video width="640" height="360" controls className="w-full rounded-lg">
                  <source src="/cours/debutant/lecon4/correction_mise_en_forme_calendrier.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            </div>
          </section>
  
          {/* Quiz d'évaluation */}
          <div className="mt-12">
            <QuizLecon4 onResult={onResult} />
          </div>
        </main>
      </div>
    );
  }