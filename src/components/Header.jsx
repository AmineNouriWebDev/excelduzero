"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
              xelDuZero
            </h1>
          </div>

          {/* Liens d'ancre visibles seulement sur la page d'accueil */}
          {isHome && (
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Fonctionnalités
              </a>
              <a
                href="#levels"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Niveaux
              </a>
              <a
                href="#premium"
                className="text-gray-600 hover:text-green-600 transition font-medium"
              >
                Premium
              </a>
            </div>
          )}

          <div className="flex space-x-4">
            <button className="text-green-600 hover:text-green-800 font-medium transition">
              <Link href="/login"> Connexion </Link>
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl hover:from-green-600 hover:to-green-700 transition shadow-lg">
              <Link href="/register">Inscription </Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
