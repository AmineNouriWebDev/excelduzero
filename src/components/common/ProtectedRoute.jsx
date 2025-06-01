"use client";

// Composant de route protégée (exemple)
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";

const PUBLIC_ROUTES = ["/", "/auth/login", "/auth/register", "/pages/test-niveau-excel"];

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    let redirectTimeout;
    async function checkAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user && !PUBLIC_ROUTES.includes(pathname)) {
        setShowMessage(true);
        // Redirection immédiate (sans attendre le rendu du composant)
        redirectTimeout = setTimeout(() => {
          window.location.href = "/auth/login";
        }, 8000);
      }
      setChecking(false);
    }
    checkAuth();
    return () => {
      if (redirectTimeout) clearTimeout(redirectTimeout);
    };
  }, [pathname]);

  useEffect(() => {
    if (showMessage && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showMessage, countdown]);

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-green-700 text-lg font-semibold animate-pulse">Chargement...</div>
      </div>
    );
  }

  if (showMessage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-green-700 text-xl font-bold mb-2">Connexion requise</div>
          <div className="text-gray-700 mb-4">Vous devez être connecté(e) ou inscrit(e) pour accéder à cette page.</div>
          <div className="flex justify-center gap-4 mb-4">
            <Link href="/auth/login">
              <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold shadow hover:from-green-600 hover:to-green-700 transition">
                Connexion
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="px-5 py-2 bg-white text-green-700 border border-green-300 rounded-xl font-bold shadow hover:bg-green-50 transition">
                Inscription
              </button>
            </Link>
          </div>
          <div className="text-gray-500 text-sm">
            Redirection automatique dans{" "}
            <span className="font-bold text-green-700">{countdown}</span> seconde
            {countdown > 1 ? "s" : ""}...
          </div>
        </div>
      </div>
    );
  }

  return children;
}
