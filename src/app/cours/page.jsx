"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page() {
  const [user, setUser] = useState(undefined); // undefined = loading, null = pas connecté
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (!data.user) router.replace("/");
    });
    // Écoute la déconnexion en live
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        router.replace("/");
      }
    });
    return () => { listener?.subscription.unsubscribe(); };
  }, [router]);

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-green-700 text-xl font-bold animate-pulse">Chargement...</span>
      </div>
    );
  }
  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 md:px-0 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 text-center">
          Cours Excel
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Retrouvez ici tous les parcours adaptés à votre niveau pour maîtriser
          Excel, de débutant à expert. Chaque module contient des explications
          claires, des exemples pratiques et des exercices interactifs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Débutant */}
          <div className="gradient-card rounded-2xl shadow-xl p-7 card-hover flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Débutant</h2>
            <p className="text-gray-700 mb-4">
              Découvrez les bases d’Excel : interface, formules simples, gestion
              des feuilles et premières manipulations.
            </p>
            <a
              href="/cours?page=debutant"
              className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-xl shadow hover:from-green-500 hover:to-green-700 transition"
            >
              Commencer
            </a>
          </div>
          {/* Intermédiaire */}
          <div className="gradient-card rounded-2xl shadow-xl p-7 card-hover flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">
              Intermédiaire
            </h2>
            <p className="text-gray-700 mb-4">
              Approfondissez vos connaissances : fonctions conditionnelles,
              graphiques, filtres, tris et gestion de données.
            </p>
            <a
              href="/cours?page=intermediaire"
              className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-xl shadow hover:from-yellow-500 hover:to-yellow-700 transition"
            >
              Commencer
            </a>
          </div>
          {/* Avancé */}
          <div className="gradient-card rounded-2xl shadow-xl p-7 card-hover flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Avancé</h2>
            <p className="text-gray-700 mb-4">
              Maîtrisez les outils avancés : tableaux croisés dynamiques,
              formules complexes, gestion des erreurs et automatisation.
            </p>
            <a
              href="/cours?page=avance"
              className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-xl shadow hover:from-blue-500 hover:to-blue-700 transition"
            >
              Commencer
            </a>
          </div>
          {/* Expert */}
          <div className="gradient-card rounded-2xl shadow-xl p-7 card-hover flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Expert</h2>
            <p className="text-gray-700 mb-4">
              Devenez un expert : macros, VBA, automatisation avancée, optimisation
              et astuces de productivité.
            </p>
            <a
              href="/cours?page=expert"
              className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold rounded-xl shadow hover:from-purple-500 hover:to-purple-700 transition"
            >
              Commencer
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}