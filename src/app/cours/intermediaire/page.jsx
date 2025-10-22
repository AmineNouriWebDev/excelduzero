"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState, useRef, useEffect } from "react";
import { useAuth } from '../../../hooks/useAuth';
import { supabase } from '../../../lib/supabaseClient';
import { Menu } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const LEÇONS = [
  // Logique conditionnelle & gestion d'erreurs
  "Fonctions SI, SI imbriqués",
  "Fonctions ET / OU",
  "Gestion des erreurs (#N/A, #VALEUR!)",

  // Recherche & correspondance
  "RECHERCHEV / RECHERCHEH",
  "INDEX /EQUIV / combinaison INDEX–EQUIV",

  // Tableaux & consolidation
  "Tableaux structurés avancés",
  "Tableaux croisés dynamiques",
  "Consolidation de données",
  "Sous-totaux automatiques",

  // Visualisation avancée
  "Graphiques avancés (courbes, combinés)",
  "Sparklines",
  "Tableaux de bord simples",

  // Validation & saisie contrôlée
  "Validation de données avancée",
  "Utilisation des noms de plages",

  // Analyse de scénarios
  "Analyse de scénarios",
  "Solveur (outil d'optimisation)",

  // Automatisation basique & macros
  "Macros : enregistrement et utilisation basique",
  "Audit de formules",
  "Fractionnement et figement des volets",

  // Formats & options
  "Formats de nombres personnalisés",
  "Gestion des doublons (filtrage et suppression)",
  "Liens entre feuilles et classeurs",

  // Power Query & import
  "Introduction à Power Query",
  "Nettoyage et transformation de données",

  // Fonctions spéciales
  "Fonctions texte (GAUCHE, DROITE, STXT)",
  "Fonctions de date et heure avancées",
  "Fonctions financières basiques (VC, VA, VPM)",
  "Statistiques descriptives simples",

  // Reporting & impression
  "Fonctions SOMME.SI, SOMME.SI.ENS, SOMME.PROD",
  "Création de modèles personnalisés",

  // Interfaces & contrôles
  "Contrôles de formulaire",
  "Graphiques dynamiques avec contrôles",
  "Liens dynamiques entre classeurs",

  // Projet intermédiaire
  "Création d'un mini tableau de bord interactif",

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

export default function CoursIntermediaire() {
  const searchParams = useSearchParams();
  const router = useRouter();
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

  // Synchronisation avec Supabase
  useEffect(() => {
    if (!user) return;
    let ignore = false;
    (async () => {
      const { data, error } = await supabase
        .from("progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("level", "intermediaire")
        .maybeSingle();
      if (error && error.message) {
        console.error('Erreur Supabase select:', error);
      }
      if (data && data.status && !ignore) {
        setLessonStatus(data.status);
      }
    })();
    return () => { ignore = true; };
  }, [user]);

  // Sauvegarder la progression dans Supabase
  useEffect(() => {
    if (!user) return;
    if (lessonStatus.every(status => status === 'not_started')) return;
    (async () => {
      const { error } = await supabase.from("progress").upsert([
        {
          user_id: user.id,
          level: "intermediaire",
          status: lessonStatus,
          updated_at: new Date().toISOString(),
        },
      ], { onConflict: ["user_id", "level"] });
      if (error) {
        console.error('Erreur Supabase upsert:', error);
      }
    })();
  }, [JSON.stringify(lessonStatus), user]);

  function getQuizComponent(level, lessonIdx) {
    try {
      const name = `QuizLecon${lessonIdx + 1}`;
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../../../components/quizz/${level}/${name}`).default;
    } catch {
      return null;
    }
  }

  function getLeconComponent(level, lessonIdx) {
    try {
      const name = `Lecon${lessonIdx + 1}`;
      return require(`../../../components/lecons/${level}/${name}`).default;
    } catch {
      return null;
    }
  }

  const level = "intermediaire";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800">
      <Header />
      <div className="md:hidden w-full px-4 pt-4 pb-2 flex items-center z-40 sticky top-16 bg-gray-50" style={{boxShadow: '0 2px 8px -4px rgba(0,0,0,0.04)'}}>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-xl font-bold shadow hover:bg-yellow-700 transition text-base"
          onClick={() => setShowMobileSidebar((v) => !v)}
          aria-label="Afficher le sommaire"
          type="button"
        >
          <span className="inline-flex"><Menu size={24} /></span>
          <span>Sommaire</span>
        </button>
      </div>
      <main className="flex-1 pt-24 pb-16 w-full flex gap-0 md:gap-6 max-w-none px-0 sm:px-0 md:px-0 mx-0 items-start">
        {/* Sidebar Desktop */}
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
          >
            <div className="w-2 h-12 bg-gray-300 rounded-full opacity-70 group-hover:opacity-100 transition-opacity absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400 mx-auto group-hover:text-yellow-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4M10 12h4M10 18h4"/></svg>
            </div>
          </div>
          {sidebarOpen ? (
            <>
              <h2 className="text-lg font-bold text-yellow-700 mb-4 text-center">Sommaire</h2>
              <ol className="space-y-1">
                {LEÇONS.map((titre, i) => (
                  <li key={i}>
                    <button
                      className={`w-full flex items-center text-left px-3 py-2 rounded-lg transition font-medium ${active === i ? "bg-yellow-100 text-yellow-800 font-bold" : "hover:bg-gray-100 text-gray-700"}`}
                      onClick={() => {
                        setActive(i);
                        router.replace(`?lecon=${i+1}`, { scroll: false });
                      }}
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
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition font-bold text-sm ${active === i ? "bg-yellow-100 text-yellow-800" : "hover:bg-gray-100 text-gray-700"}`}
                    onClick={() => {
                      setActive(i);
                      router.replace(`?lecon=${i+1}`, { scroll: false });
                    }}
                  >
                    {statusIcons[lessonStatus[i]]}
                  </button>
                </li>
              ))}
            </ol>
          )}
        </aside>

        {/* Sidebar Mobile */}
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
              <h2 className="text-lg font-bold text-yellow-700 mb-4 text-center">Sommaire</h2>
              <ol className="space-y-1">
                {LEÇONS.map((titre, i) => (
                  <li key={i}>
                    <button
                      className={`w-full flex items-center text-left px-3 py-2 rounded-lg transition font-medium ${active === i ? "bg-yellow-100 text-yellow-800 font-bold" : "hover:bg-gray-100 text-gray-700"}`}
                      onClick={() => {
                        setActive(i);
                        setShowMobileSidebar(false);
                        router.replace(`?lecon=${i+1}`, { scroll: false });
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

        {/* Contenu Principal */}
        <section className="flex-1 bg-white rounded-2xl shadow p-4 sm:p-6 min-h-[400px] md:mr-2 overflow-x-auto max-w-full">
          <div className="mb-4 text-sm text-gray-500">Leçon {active + 1} / {LEÇONS.length}</div>
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 break-words">{LEÇONS[active]}</h2>
          <div className="text-gray-700 w-full max-w-full overflow-x-auto">
            {(() => {
              const Lecon = getLeconComponent(level, active);
              const Quiz = getQuizComponent(level, active);
              const handleResult = status => {
                const newStatus = [...lessonStatus];
                newStatus[active] = status;
                setLessonStatus(newStatus);
              };
              if (lessonStatus[active] === 'success') {
                return Lecon ? <div className="prose max-w-full w-full overflow-x-auto"> <Lecon /> </div> : <p>Contenu à venir pour cette leçon.</p>;
              }
              return <>
                {Lecon ? <div className="prose max-w-full w-full overflow-x-auto"> <Lecon onResult={handleResult} /> </div> : <p>Contenu à venir pour cette leçon.</p>}
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