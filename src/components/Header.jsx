"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
    // Rafraîchit l'état utilisateur lors des changements d'auth
    const { data: listener } = supabase.auth.onAuthStateChange(() => getUser());
    return () => { listener?.subscription.unsubscribe(); };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-0">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {" "}
                <Link href="/">E</Link>
              </span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              xcelDuZero
            </h1>
          </div>

          {/* Liens d'ancre visibles seulement sur la page d'accueil */}
          {isHome && (
            <div className="hidden md:flex space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#levels"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Niveaux
              </Link>
              <Link
                href="#premium"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Premium
              </Link>
            </div>
          )}

          <div className="flex items-center gap-4">
            {user ? (
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  await supabase.auth.signOut();
                  setUser(null);
                  window.location.assign("/");
                }}
                className="px-5 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-xl font-bold shadow hover:from-red-500 hover:to-red-700 transition"
              >
                Déconnexion
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="font-semibold text-green-700 hover:underline"
                >
                  Connexion
                </Link>
                <Link
                  href="/auth/register"
                  className="font-semibold text-green-700 hover:underline"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
