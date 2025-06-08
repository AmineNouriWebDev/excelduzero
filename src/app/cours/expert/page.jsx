"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function CoursExpert() {
  const searchParams = useSearchParams();
  const leconParam = parseInt(searchParams.get("lecon"), 10);
  const [active, setActive] = useState(
    !isNaN(leconParam) && leconParam > 0 ? leconParam - 1 : 0
  );
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
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
      {/* Drawer Sommaire mobile/tablette */}
      {showMobileSidebar && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="bg-black/40 flex-1" onClick={() => setShowMobileSidebar(false)} />
          <aside className="w-80 max-w-full bg-white h-full shadow-2xl p-6 flex flex-col">
            <button
              className="mb-4 px-3 py-1 rounded bg-gray-100 text-gray-600 font-bold hover:bg-gray-200"
              onClick={() => setShowMobileSidebar(false)}
              aria-label="Fermer le sommaire"
            >
              Fermer
            </button>
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <Menu size={40} className="mb-2 text-green-600" />
              <p className="text-lg font-semibold">Sommaire à venir</p>
            </div>
          </aside>
        </div>
      )}
      <main className="flex-1 pt-24 pb-16 px-2 sm:px-4 md:px-0 max-w-none w-full flex flex-col items-center">
        <section className="w-full max-w-3xl bg-white rounded-2xl shadow p-4 sm:p-6 min-h-[300px] overflow-x-auto">
          <div className="prose max-w-full w-full overflow-x-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 text-center break-words">
              Cours Excel – Niveau Expert
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Devenez un expert d’Excel : macros, VBA, automatisation avancée, optimisation et productivité.
            </p>
            <div className="bg-white rounded-2xl shadow p-6 text-center max-w-full overflow-x-auto">
              <p className="text-gray-600">Le contenu du cours expert arrive bientôt !</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
