"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState, useRef, useEffect } from "react";
import { useAuth } from '../../../hooks/useAuth';
import { supabase } from '../../../lib/supabaseClient';
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";

const LEÇONS = [
  // Découverte & navigation
  "Introduction et découverte de l’interface Excel",
  "Navigation et gestion des feuilles",
  "Raccourcis clavier essentiels",

  // Saisie & gestion basique des données
  "Saisie de données : cellules, lignes et colonnes",
  "Séries de données (remplissage automatique)",
  "Recherche/Remplacement",

  // Mise en forme & présentation
  "Mise en forme et dimensions (largeur, hauteur)",
  "Gestion des bordures, couleurs et alignement",
  "Fusion de cellules, en-têtes & pieds de page",
  "Insertion d’images et de formes",

  // Impression & partage
  "Mise en page et aperçu avant impression",
  "CRÉATION DE RAPPORTS MULTI-FEUILLES",

  // Formules & fonctions de base
  "Formules simples (+ - * /)",
  "Les fonctions",
  "Utilisation des pourcentages",
  "Références relatives vs absolues (style, lignes alternées)",

  // Tri, filtrage & tableaux
  "Tri et filtrage de données simples",
  "Tableaux basiques (style, lignes alternées)",

  // Visualisation de données
  "Graphiques simples (histogrammes, camemberts)",
  "Création de calendriers simples",

  // Validation & protection
  "Validation de données basique (listes déroulantes)",
  "Protection de feuille et de classeur",

  // Commentaires & astuces
  "Utilisation des commentaires (note rapide vs discussion)",
  "Astuces de productivité (autofill, poignée de recopie…)",
  "Gestion des doublons simples (mise en forme conditionnelle basique)",

  // BONUS
  "Raccourcis clavier Excel (avancé)"
];

// Statut possible pour chaque leçon : 'not_started', 'success', 'failed'
const defaultStatus = Array(LEÇONS.length).fill('not_started');
const statusIcons = {
  not_started: (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
  ),
  success: (
    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  failed: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="2"/></svg>
  ),
};

export default function CoursDebutant() {
  const searchParams = useSearchParams();
  const leconParam = parseInt(searchParams.get("lecon"), 10);
  const [active, setActive] = useState(
    !isNaN(leconParam) && leconParam > 0 && leconParam <= LEÇONS.length ? leconParam - 1 : 0
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const user = useAuth();
  const [lessonStatus, setLessonStatus] = useState(defaultStatus);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Synchronisation avec Supabase uniquement (plus de localStorage)
  useEffect(() => {
    if (!user) return;
    let ignore = false;
    (async () => {
      const { data, error } = await supabase
        .from("progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("level", "debutant")
        .maybeSingle(); // Utilise maybeSingle pour éviter l'erreur si aucune ligne n'est trouvée
      if (error && error.message) {
        console.error('Erreur Supabase select:', error);
      }
      if (data && data.status && !ignore) {
        setLessonStatus(data.status);
      }
    })();
    return () => { ignore = true; };
  }, [user]);

  // Sauvegarder la progression dans Supabase à chaque changement si connecté
  useEffect(() => {
    if (!user) return;
    if (lessonStatus.every(status => status === 'not_started')) return;
    (async () => {
      const { error } = await supabase.from("progress").upsert([
        {
          user_id: user.id,
          level: "debutant",
          status: lessonStatus,
          updated_at: new Date().toISOString(),
        },
      ], { onConflict: ["user_id", "level"] });
      if (error) {
        // Affichez l'erreur dans la console pour debug
        console.error('Erreur Supabase upsert:', error);
      }
    })();
  }, [JSON.stringify(lessonStatus), user]);

  // Fonction utilitaire pour charger dynamiquement le bon composant de quiz selon la leçon
  function getQuizComponent(level, lessonIdx) {
    try {
      // On suppose que les fichiers sont nommés QuizLeconX.jsx (X = numéro de la leçon, à partir de 1)
      const name = `QuizLecon${lessonIdx + 1}`;
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../../components/quizz/${level}/${name}`).default;
    } catch {
      return null;
    }
  }

  // Fonction utilitaire pour charger dynamiquement le composant de leçon
  function getLeconComponent(level, lessonIdx) {
    try {
      const name = `Lecon${lessonIdx + 1}`;
      return require(`../../../components/lecons/${level}/${name}`).default;
    } catch {
      return null;
    }
  }

  // Déterminer le niveau courant (ici, "debutant")
  const level = "debutant";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800">
      <Header />
      {/* Bouton menu mobile/tablette pour ouvrir le sommaire (au-dessus du contenu) */}
      <div className="md:hidden w-full px-4 pt-4 pb-2 flex items-center z-40 sticky top-16 bg-gray-50" style={{boxShadow: '0 2px 8px -4px rgba(0,0,0,0.04)'}}>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-bold shadow hover:bg-green-700 transition text-base"
          onClick={() => setShowMobileSidebar((v) => !v)}
          aria-label="Afficher le sommaire"
          type="button"
        >
          <span className="inline-flex"><Menu size={24} /></span>
          <span>Sommaire</span>
        </button>
      </div>
      <main className="flex-1 pt-24 pb-16 w-full flex gap-0 md:gap-6 max-w-none px-0 sm:px-0 md:px-0 mx-0 items-start">
        {/* Sidebar Sommaire Desktop (redimensionnable avec poignée visible) */}
        <aside
          ref={sidebarRef}
          className={`hidden md:flex flex-col bg-white rounded-2xl shadow p-2 max-h-[80vh] overflow-y-auto transition-all duration-200 shrink-0 relative ${isResizing ? 'select-none' : ''} sticky top-28`}
          style={{ width: sidebarOpen ? sidebarWidth : 56, minWidth: 56, maxWidth: 400, userSelect: isResizing ? 'none' : 'auto', height: '80vh' }}
        >
          <button
            className="mb-2 p-1 rounded hover:bg-gray-100 text-gray-500 self-end"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label={sidebarOpen ? 'Réduire le sommaire' : 'Agrandir le sommaire'}
          >
            {sidebarOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            )}
          </button>
          {/* Poignée de redimensionnement ergonomique */}
          <div
            className="absolute right-0 top-0 h-full w-3 flex items-center justify-center cursor-col-resize z-30 group"
            style={{ marginRight: '-8px' }}
            onMouseDown={(e) => {
              setIsResizing(true);
              e.preventDefault();
              const startX = e.clientX;
              const startWidth = sidebarWidth;
              function onMouseMove(ev) {
                const newWidth = Math.min(Math.max(startWidth + (ev.clientX - startX), 56), 400);
                setSidebarOpen(true);
                setSidebarWidth(newWidth);
                if (sidebarRef.current) {
                  sidebarRef.current.style.width = `${newWidth}px`;
                }
              }
              function onMouseUp() {
                setIsResizing(false);
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
              }
              window.addEventListener('mousemove', onMouseMove);
              window.addEventListener('mouseup', onMouseUp);
            }}
            onMouseEnter={() => {
              if (sidebarRef.current) sidebarRef.current.style.cursor = 'col-resize';
            }}
            onMouseLeave={() => {
              if (sidebarRef.current) sidebarRef.current.style.cursor = 'default';
            }}
          >
            <div className="w-2 h-12 bg-gray-300 rounded-full opacity-70 group-hover:opacity-100 transition-opacity absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400 mx-auto group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4M10 12h4M10 18h4"/></svg>
            </div>
          </div>
          {sidebarOpen ? (
            <>
              <h2 className="text-lg font-bold text-green-700 mb-4 text-center">Sommaire</h2>
              <ol className="space-y-1">
                {LEÇONS.map((titre, i) => (
                  <li key={i}>
                    <button
                      className={`w-full flex items-center text-left px-3 py-2 rounded-lg transition font-medium ${active === i ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100 text-gray-700"}`}
                      onClick={() => setActive(i)}
                    >
                      <span className="mr-2">{statusIcons[lessonStatus[i]]}</span>
                      <span className="mr-2 text-xs text-gray-400">{i + 1}.</span> {titre}
                    </button>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <ol className="space-y-1 flex flex-col items-center">
              {LEÇONS.map((_, i) => (
                <li key={i}>
                  <button
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition font-bold text-sm ${active === i ? "bg-green-100 text-green-800" : "hover:bg-gray-100 text-gray-700"}`}
                    onClick={() => setActive(i)}
                  >
                    {statusIcons[lessonStatus[i]]}
                  </button>
                </li>
              ))}
            </ol>
          )}
        </aside>
        {/* Sidebar mobile/tablette drawer */}
        {showMobileSidebar && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="bg-black/40 flex-1" onClick={() => setShowMobileSidebar(false)} />
            <aside className="w-72 max-w-[90vw] bg-white h-full shadow-2xl p-4 overflow-y-auto animate-fade-in-right">
              <button
                className="mb-4 px-3 py-1 rounded bg-gray-100 text-gray-600 font-bold hover:bg-gray-200"
                onClick={() => setShowMobileSidebar(false)}
                aria-label="Fermer le sommaire"
              >
                Fermer
              </button>
              <h2 className="text-lg font-bold text-green-700 mb-4 text-center">Sommaire</h2>
              <ol className="space-y-1">
                {LEÇONS.map((titre, i) => (
                  <li key={i}>
                    <button
                      className={`w-full flex items-center text-left px-3 py-2 rounded-lg transition font-medium ${active === i ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100 text-gray-700"}`}
                      onClick={() => {
                        setActive(i);
                        setShowMobileSidebar(false);
                      }}
                    >
                      <span className="mr-2">{statusIcons[lessonStatus[i]]}</span>
                      <span className="mr-2 text-xs text-gray-400">{i + 1}.</span> {titre}
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        )}
        {/* Contenu de la leçon */}
        <section className="flex-1 bg-white rounded-2xl shadow p-4 sm:p-6 min-h-[400px] md:mr-2 overflow-x-auto max-w-full">
          <div className="mb-4 text-sm text-gray-500">Leçon {active + 1} / 25</div>
          <h2 className="text-2xl font-bold text-green-700 mb-4 break-words">{LEÇONS[active]}</h2>
          <div className="text-gray-700 w-full max-w-full overflow-x-auto">
            {(() => {
              const Lecon = getLeconComponent(level, active);
              const Quiz = getQuizComponent(level, active);
              // OnResult remonte le statut du quiz depuis la leçon OU le quiz (compatibilité)
              const handleResult = status => {
                const newStatus = [...lessonStatus];
                newStatus[active] = status;
                setLessonStatus(newStatus);
              };
              // Si la leçon est validée, on n'affiche plus le quiz
              if (lessonStatus[active] === 'success') {
                return Lecon ? <div className="prose max-w-full w-full overflow-x-auto"> <Lecon /> </div> : <p>Contenu à venir pour cette leçon.</p>;
              }
              return <>
                {Lecon ? <div className="prose max-w-full w-full overflow-x-auto"> <Lecon onResult={handleResult} /> </div> : <p>Contenu à venir pour cette leçon.</p>}
                {/* Pour compatibilité avec les leçons qui n'incluent pas le quiz */}
                {!Lecon && Quiz && <Quiz onResult={handleResult} />}
              </>;
            })()}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
