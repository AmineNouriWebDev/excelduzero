import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon24 from "../../quizz/debutant/QuizLecon24";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  Zap, 
  MousePointer, 
  Move, 
  Copy, 
  PlusSquare, 
  List, 
  Calendar, 
  Clock, 
  Type, 
  Hash, 
  CheckCircle,
  BookOpen,
  Download,
  Video,
  Layout,
  ChevronDown,
  ChevronRight,
  Settings,
  AlertTriangle
} from "lucide-react";

export default function Lecon24({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <Zap className="w-8 h-8 text-blue-600" />
        Leçon 24 - Astuces de Productivité dans Excel
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Découvrez les astuces essentielles pour gagner un temps précieux dans Excel. Cette leçon vous apprendra à maîtriser 
          l'AutoFill, la poignée de recopie, et d'autres fonctionnalités puissantes qui automatisent vos tâches répétitives.
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
              Maîtriser la poignée de recopie pour les séries de données
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser l'AutoFill intelligent pour les dates, nombres et listes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Appliquer des formules rapidement sur des colonnes entières
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Utiliser les raccourcis clavier pour gagner du temps
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <MousePointer className="w-6 h-6 text-purple-600" />
        1. MAÎTRISER LA POIGNÉE DE RECOPIE
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            La poignée de recopie (petit carré en bas à droite d'une cellule sélectionnée) est l'un des outils 
            les plus puissants pour accélérer votre travail dans Excel.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Move className="w-5 h-5 text-purple-600" />
            Utilisation de base
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Sélectionnez une cellule avec du contenu
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Survolez le coin inférieur droit jusqu'à voir le curseur se transformer en croix noire
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Cliquez-glissez vers le bas ou la droite pour étendre la série
              </span>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon24/poignee_recopie.gif" 
            alt="Utilisation de la poignée de recopie" 
            style={{ maxHeight: 250 }} 
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Copy className="w-5 h-5 text-purple-600" />
            Options avancées
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-purple-600" />
                Recopie simple
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Copie la valeur exacte</li>
                <li>• Utilisez Ctrl + glisser pour forcer</li>
                <li>• Idéal pour les valeurs statiques</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-purple-600" />
                Série incrémentielle
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Incrémente automatiquement les valeurs</li>
                <li>• Fonctionne avec nombres, dates, jours</li>
                <li>• Utilisez la poignée sans Ctrl</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h6 className="font-medium text-gray-800 mb-2">Personnaliser l'incrémentation</h6>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Saisissez les deux premières valeurs de la série</li>
              <li>2. Sélectionnez les deux cellules</li>
              <li>3. Glissez la poignée pour continuer la séquence</li>
            </ol>
            <ImageZoomable 
              src="/cours/debutant/Lecon24/serie_personnalisee.gif" 
              alt="Création de série personnalisée" 
              className="mt-2"
              style={{ maxHeight: 200 }} 
            />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <PlusSquare className="w-6 h-6 text-teal-600" />
        2. L'AUTOFILL INTELLIGENT
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            L'AutoFill d'Excel reconnaît automatiquement les motifs et complète vos données en conséquence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              Séquences de dates
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Jours de la semaine (Lun, Mar, Mer...)</li>
              <li>• Mois (Janvier, Février...)</li>
              <li>• Dates avec incréments (1/01, 2/01...)</li>
              <li>• Années (2023, 2024, 2025...)</li>
            </ul>
           
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <List className="w-5 h-5 text-teal-600" />
              Listes personnalisées
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Noms des jours/mois dans différentes langues</li>
              <li>• Séquences numériques (Q1, Q2, Q3...)</li>
              <li>• Équipes (Équipe A, Équipe B...)</li>
              <li>• Niveaux de priorité (Haut, Moyen, Bas)</li>
            </ul>
           
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-teal-600" />
              Combinaisons
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Texte + nombre (Produit 1, Produit 2...)</li>
              <li>• Dates + texte (Janvier 2023, Février 2023...)</li>
              <li>• Séquences complexes (A1, A2, B1, B2...)</li>
              <li>• Valeurs avec préfixe/suffixe (ID-001, ID-002...)</li>
            </ul>
           
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Settings className="w-5 h-5 text-teal-600" />
            Créer vos propres listes
          </h5>
          
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
              <span className="text-gray-700">
                Fichier → Options → Options avancées
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
              <span className="text-gray-700">
                Descendre à "Général" → "Modifier les listes personnalisées"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
              <span className="text-gray-700">
                Cliquez sur "Nouvelle liste" et saisissez vos éléments
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
              <span className="text-gray-700">
                Ajoutez puis cliquez sur "OK"
              </span>
            </li>
          </ol>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon24/listes_perso_config.png" 
            alt="Configuration des listes personnalisées" 
            style={{ maxHeight: 250 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Type className="w-6 h-6 text-indigo-600" />
        3. FORMULES ET MISES EN FORME RAPIDES
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Accélérez votre travail avec les formules et les mises en forme grâce à ces astuces de productivité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Hash className="w-5 h-5 text-indigo-600" />
              Application rapide de formules
            </h5>
            
            <div className="mb-4">
              <h6 className="font-medium text-gray-800 mb-2">Double-clic sur la poignée</h6>
              <p className="text-sm text-gray-600">
                Applique la formule automatiquement jusqu'à la dernière ligne de données adjacente.
              </p>
              <ImageZoomable 
                src="/cours/debutant/Lecon24/formule_double_clic.gif" 
                alt="Double-clic pour appliquer une formule" 
                className="mt-2"
                style={{ maxHeight: 200 }} 
              />
            </div>
            
            <div className="mt-4">
              <h6 className="font-medium text-gray-800 mb-2">Tableaux Excel</h6>
              <p className="text-sm text-gray-600">
                Convertissez votre plage en tableau (Ctrl + L) pour que les formules s'étendent automatiquement.
              </p>
              <ImageZoomable 
                src="/cours/debutant/Lecon24/formule_tableau.gif" 
                alt="Formules automatiques dans les tableaux" 
                className="mt-2"
                style={{ maxHeight: 200 }} 
              />
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Layout className="w-5 h-5 text-indigo-600" />
              Copie de mise en forme
            </h5>
            
            <div className="mb-4">
              <h6 className="font-medium text-gray-800 mb-2">Pinceau de format</h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Sélectionnez la cellule avec la mise en forme désirée</li>
                <li>2. Cliquez sur l'icône Pinceau dans l'onglet Accueil</li>
                <li>3. Sélectionnez les cellules à formater</li>
                <li>4. Double-cliquez sur le pinceau pour l'activer en continu</li>
              </ol>
            </div>
            
            <div className="mt-4">
              <h6 className="font-medium text-gray-800 mb-2">Collage spécial de format (CORRIGÉ)</h6>
              <p className="text-sm text-gray-600">
                <strong>Ctrl + C</strong> puis <strong>Alt → E → S → T</strong> pour coller uniquement la mise en forme<br />
                <strong>Remarque :</strong> Les raccourcis Ctrl + Shift + C/V ne fonctionnent pas dans Excel 2016
              </p>
              <ImageZoomable 
                src="/cours/debutant/Lecon24/pinceau_format.gif" 
                alt="Pinceau de format" 
                className="mt-2"
                style={{ maxHeight: 150 }} 
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-600" />
            Astuces supplémentaires (CORRIGÉES)
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Sélection rapide</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Ctrl + Espace</strong> : Sélectionner la colonne</li>
                <li>• <strong>Shift + Espace</strong> : Sélectionner la ligne</li>
                <li>• <strong>Ctrl + A</strong> : Sélectionner tout</li>
                <li>• <strong>Ctrl + Shift + *</strong> : Sélectionner la région active</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Navigation</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Ctrl + Flèche</strong> : Aller au bord des données</li>
                <li>• <strong>Ctrl + Home</strong> : Aller en A1</li>
                <li>• <strong>Ctrl + End</strong> : Aller à la dernière cellule utilisée</li>
                <li>• <strong>Ctrl + G</strong> : Aller à une cellule spécifique</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Remplissage flash</h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Ctrl + E</strong> : Remplir automatiquement des données</li>
                <li>• Sépare les noms, combine des colonnes, etc.</li>
                <li>• Disponible à partir d'Excel 2013</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-orange-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez toutes les astuces apprises pour créer rapidement un rapport de ventes mensuel.
          Téléchargez le fichier d'exercice et suivez les instructions détaillées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez les données brutes à organiser :
          </p>
          <a href="/cours/debutant/Lecon24/exercice_ventes.xlsx" 
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Télécharger l'exercice (.xlsx)
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-orange-600" />
            Correction vidéo
          </h4>
          <p className="text-gray-700 mb-4">
            Solution complète et détaillée de l'exercice :
          </p>
          <PremiumVideo
            url="/cours/debutant/Lecon24/correction_ventes.mp4"
            title="Correction de l'exercice sur les ventes"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <List className="w-5 h-5 text-orange-600" />
          Consignes de l'exercice
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Création de la structure</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Complétez la colonne "Date" avec toutes les dates de janvier 2023 (AutoFill)</li>
              <li>Remplissez la colonne "Jour" avec les noms des jours en français (le premier Janvier 2023 correspond à un dimanche)</li>
              <li>Complétez la séquence de la colonne "ID Vente"  </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Calculs rapides</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Calculez le "Total HT" (Quantité × Prix unitaire)</li>
              <li>Appliquez la formule à toute la colonne avec un double-clic</li>
              <li>Calculez la "TVA" (20% du Total HT)</li>
              <li>Calculez le "Total TTC" (Total HT + TVA)</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Mise en forme</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Appliquez un format monétaire aux colonnes de prix</li>
              <li>Utilisez le pinceau de format pour copier la mise en forme</li>
              <li>Créez un tableau structuré avec Ctrl + L</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Raccourcis Clavier et Astuces de Productivité
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Raccourcis temporels et édition
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>F2</strong> : Éditer la cellule active</li>
              <li>• <strong>Ctrl + ;</strong> : Insérer la date du jour</li>
              <li>• <strong>Ctrl + Shift + ;</strong> : Insérer l'heure actuelle</li>
              <li>• <strong>Ctrl + D</strong> : Copier vers le bas</li>
              <li>• <strong>Ctrl + R</strong> : Copier vers la droite</li>
              <li>• <strong>Ctrl + Entrée</strong> : Remplir plusieurs cellules</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Copy className="w-5 h-5 text-blue-600" />
              Gestion des données
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <strong>Ctrl + Shift + L</strong> : Activer/désactiver les filtres</li>
              <li>• <strong>Alt + ↓</strong> : Ouvrir la liste déroulante du filtre</li>
              <li>• <strong>Ctrl + L</strong> : Créer un tableau</li>
              <li>• <strong>Ctrl + Shift + *</strong> : Sélectionner la région active</li>
              <li>• <strong>Ctrl + Page Up/Page Down</strong> : Naviguer entre les feuilles</li>
            </ul>
          </div>
        </div>
        
  
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon24 onResult={onResult} />
      </div>
    </div>
  );
}