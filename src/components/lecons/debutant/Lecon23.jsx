import ImageZoomable from "../../ui/ImageZoomable";
import QuizLecon23 from "../../quizz/debutant/QuizLecon23";
import PremiumVideo from "../../ui/PremiumVideo";
import { 
  MessageSquare, 
  MessageCircle, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle,
  User,
  AtSign,
  Bell,
  BellOff,
  Eye,
  BookOpen,
  Download,
  Video,
  History,
  Reply,
  Settings
} from "lucide-react";

export default function Lecon23({ onResult }) {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <MessageSquare className="w-8 h-8 text-blue-600" />
        Leçon 23 - Utilisation des Commentaires dans Excel (Notes vs Discussions)
      </h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-gray-700">
          Cette leçon vous apprend à maîtriser les fonctionnalités de commentaires dans Excel 2016 et versions ultérieures.
          Vous découvrirez la différence entre les notes rapides et les discussions, et comment utiliser ces outils pour collaborer efficacement.
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
              Distinguer les notes rapides des discussions
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Créer, modifier et supprimer des commentaires
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Gérer les discussions collaboratives
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">
              Personnaliser l'affichage des commentaires
            </span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-purple-600" />
        1. NOTATIONS RAPIDES VS DISCUSSIONS
      </h3>

      <div className="mb-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
          <p className="text-gray-700">
            Excel propose deux systèmes de commentaires distincts : les notes rapides (héritées des anciennes versions)
            et les discussions (introduites à partir d'Excel 2016) qui permettent une collaboration en temps réel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              Notes rapides
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Annotations simples sans fonctionnalités collaboratives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Idéales pour des rappels personnels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Affichées comme un petit triangle rouge dans le coin supérieur droit de la cellule</span>
              </li>
            </ul>
            <ImageZoomable 
              src="/cours/debutant/Lecon23/note_rapide.png" 
              alt="Exemple de note rapide" 
              className="mt-4"
              style={{ maxHeight: 200 }} 
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              Discussions
            </h5>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Conversations collaboratives avec mentions et notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Historique complet des échanges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <span>Affichées comme une icône de dialogue dans le coin supérieur droit de la cellule</span>
              </li>
            </ul>
            <ImageZoomable 
              src="/cours/debutant/Lecon23/discussion.png" 
              alt="Exemple de discussion" 
              className="mt-4"
              style={{ maxHeight: 200 }} 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <History className="w-5 h-5 text-purple-600" />
            Évolution des commentaires dans Excel
          </h5>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Version Excel</th>
                  <th className="border p-2">Notes rapides</th>
                  <th className="border p-2">Discussions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Excel 2013 et antérieur</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Excel 2016</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
                <tr>
                  <td className="border p-2">Excel 2019 et 365</td>
                  <td className="border p-2 text-center">✓</td>
                  <td className="border p-2 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Edit className="w-6 h-6 text-teal-600" />
        2. CRÉATION ET GESTION DES COMMENTAIRES
      </h3>

      <div className="mb-8">
        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
          <p className="text-gray-700">
            Apprenez à créer et gérer efficacement les deux types de commentaires dans Excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-teal-600" />
              Ajouter une note rapide
            </h5>
            
            <ol className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
                <span className="text-gray-700">
                  Sélectionnez la cellule concernée
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
                <span className="text-gray-700">
                  <strong>Alt + R, N</strong> ou clique droit → <strong>Nouvelle note</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
                <span className="text-gray-700">
                  Saisissez votre note
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
                <span className="text-gray-700">
                  Cliquez en dehors de la note pour la sauvegarder
                </span>
              </li>
            </ol>
            
            <ImageZoomable 
              src="/cours/debutant/Lecon23/ajout_note.gif" 
              alt="Ajout d'une note rapide" 
              style={{ maxHeight: 250 }} 
            />
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-teal-600" />
              Démarrer une discussion
            </h5>
            
            <ol className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
                <span className="text-gray-700">
                  Sélectionnez la cellule concernée
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
                <span className="text-gray-700">
                  <strong>Alt + R, C</strong> ou clique droit → <strong>Nouveau commentaire</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
                <span className="text-gray-700">
                  Saisissez votre commentaire initial
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
                <span className="text-gray-700">
                  Cliquez sur <strong>Commenter</strong> pour publier
                </span>
              </li>
            </ol>
            
            <ImageZoomable 
              src="/cours/debutant/Lecon23/ajout_discussion.gif" 
              alt="Démarrage d'une discussion" 
              style={{ maxHeight: 250 }} 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-teal-600" />
            Gestion des commentaires existants
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Edit className="w-4 h-4 text-teal-600" />
                Modification
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cliquez sur le commentaire puis sur l'icône crayon</li>
                <li>• Pour les notes : clique droit → Modifier la note</li>
                <li>• Pour les discussions : cliquez sur ⋮ → Modifier</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-teal-600" />
                Suppression
              </h6>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sélectionnez la cellule avec commentaire</li>
                <li>• <strong>Alt + R, D</strong> ou clique droit → Supprimer le commentaire</li>
                <li>• Pour les discussions : cliquez sur ⋮ → Supprimer le thread</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <User className="w-6 h-6 text-indigo-600" />
        3. COLLABORATION AVEC LES DISCUSSIONS
      </h3>

      <div className="mb-8">
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
          <p className="text-gray-700">
            Les discussions permettent une véritable collaboration en temps réel. Apprenez à utiliser toutes leurs fonctionnalités.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Reply className="w-5 h-5 text-indigo-600" />
              Répondre à une discussion
            </h5>
            
            <ol className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
                <span className="text-gray-700">
                  Cliquez sur une discussion existante
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
                <span className="text-gray-700">
                  Cliquez sur le champ de réponse
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
                <span className="text-gray-700">
                  Saisissez votre réponse
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
                <span className="text-gray-700">
                  Cliquez sur <strong>Répondre</strong>
                </span>
              </li>
            </ol>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <AtSign className="w-5 h-5 text-indigo-600" />
              Mentions et notifications
            </h5>
            
            <ol className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">1</span>
                <span className="text-gray-700">
                  Dans un commentaire, tapez <strong>@</strong> suivi du nom du collaborateur
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">2</span>
                <span className="text-gray-700">
                  Sélectionnez la personne dans la liste
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">3</span>
                <span className="text-gray-700">
                  La personne recevra une notification par email
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mt-1">4</span>
                <span className="text-gray-700">
                  Les discussions avec mentions apparaissent dans le volet "Commentaires"
                </span>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-indigo-600" />
            Résolution des discussions
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Marquer comme résolu</h6>
              <p className="text-sm text-gray-600">
                Lorsqu'une discussion est terminée, cliquez sur ⋮ → <strong>Résoudre le thread</strong>.
                La discussion sera archivée mais toujours accessible.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Rouvrir une discussion</h6>
              <p className="text-sm text-gray-600">
                Pour reprendre une discussion résolue, cliquez sur la discussion archivée,
                puis sur ⋮ → <strong>Rouvrir le thread</strong>.
              </p>
            </div>
          </div>
          
          <ImageZoomable 
            src="/cours/debutant/Lecon23/resoudre_discussion.png" 
            alt="Résolution d'une discussion" 
            className="mt-4"
            style={{ maxHeight: 200 }} 
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Eye className="w-6 h-6 text-orange-600" />
        4. PERSONNALISATION ET AFFICHAGE
      </h3>

      <div className="mb-8">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
          <p className="text-gray-700">
            Personnalisez l'affichage des commentaires pour améliorer votre expérience de travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-600" />
              Gestion des notifications
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Activer les notifications :</strong> Fichier → Options → Général → Notifications de commentaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Désactiver temporairement :</strong> Onglet Révision → Mettre en pause les notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Volet Commentaires :</strong> Onglet Révision → Afficher les commentaires</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-orange-600" />
              Options d'affichage
            </h5>
            
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Afficher/Masquer tous :</strong> Alt + R, A</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Afficher les indicateurs :</strong> Fichier → Options → Avancé → Affichage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">•</span>
                <span><strong>Personnaliser les couleurs :</strong> Conçu → Couleurs (affecte les discussions)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
          <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-orange-600" />
            Conversion entre notes et discussions
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Note → Discussion</h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Clique droit sur la cellule avec note</li>
                <li>2. Sélectionnez "Convertir en commentaire"</li>
                <li>3. La note devient une discussion avec historique</li>
              </ol>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h6 className="font-medium text-gray-800 mb-2">Discussion → Note</h6>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Ouvrez la discussion</li>
                <li>2. Cliquez sur ⋮ → "Convertir en note"</li>
                <li>3. Seul le dernier commentaire est conservé</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-yellow-50 mt-4 p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2">
              Compatibilité Excel
            </h6>
            <p className="text-sm text-gray-600">
              Les discussions sont visibles dans Excel 2016 et versions ultérieures.
              Dans les versions antérieures, elles apparaissent comme des notes classiques.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-red-600" />
        EXERCICE PRATIQUE
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <p className="text-gray-700">
          Appliquez vos connaissances en collaborant sur un budget d'équipe avec différents types de commentaires.
          Téléchargez le fichier d'exercice et suivez les instructions détaillées.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-red-600" />
            Fichier d'exercice
          </h4>
          <p className="text-gray-700 mb-4">
            Téléchargez le budget d'équipe à commenter :
          </p>
          <a href="/cours/debutant/Lecon23/exercice_budget.xlsx" 
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
            url="/cours/debutant/Lecon23/correction_budget.mp4"
            title="Correction de l'exercice sur les commentaires"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-red-600" />
          Consignes de l'exercice
        </h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 1 : Notes rapides</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ajoutez une note rapide sur la cellule B5 pour rappeler "Vérifier avec le service comptable"</li>
              <li>Modifiez la note pour ajouter "(avant le 15 du mois)"</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 2 : Discussions collaboratives</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Démarrez une discussion sur la cellule D10 avec "Ce budget semble élevé"</li>
              <li>Mentionnez un collègue (@NomCollègue) dans une réponse</li>
              <li>Résolvez la discussion après avoir obtenu une réponse</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Partie 3 : Gestion avancée</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Convertissez une note rapide en discussion</li>
              <li>Convertissez une discussion en note rapide</li>
              <li>Explorez le volet "Commentaires" pour voir toutes les interactions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-medium text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          Bonnes pratiques professionnelles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Utilisation efficace
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Utilisez les notes pour des rappels personnels</li>
              <li>• Préférez les discussions pour les échanges d'équipe</li>
              <li>• Mentionnez les personnes concernées avec @</li>
              <li>• Résolvez les discussions terminées</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg">
            <h6 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
              <BellOff className="w-5 h-5 text-blue-600" />
              Gestion des notifications
            </h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Mettez en pause les notifications pendant les périodes de travail intense</li>
              <li>• Consultez le volet "Commentaires" régulièrement</li>
              <li>• Utilisez des libellés clairs dans vos commentaires</li>
              <li>• Limitez les discussions à un sujet par cellule</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz d'évaluation */}
      <div className="mt-12">
        <QuizLecon23 onResult={onResult} />
      </div>
    </div>
  );
}