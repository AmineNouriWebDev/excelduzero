"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // hamburger menu (ancre)
  const [userMenuOpen, setUserMenuOpen] = useState(false); // menu connexion mobile
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      if (data.user) {
        // Récupère le profil depuis la table 'profiles'
        const { data: prof } = await supabase
          .from("profiles")
          .select("name, avatar_url")
          .eq("id", data.user.id)
          .single();
        setProfile(prof);
      } else {
        setProfile(null);
      }
    };
    getUser();
    // Rafraîchit l'état utilisateur lors des changements d'auth
    const { data: listener } = supabase.auth.onAuthStateChange(() => getUser());
    return () => { listener?.subscription.unsubscribe(); };
  }, []);

  // Ferme le menu si clic en dehors
  useEffect(() => {
    if (!menuOpen && !userMenuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.user-menu') && userMenuOpen) setUserMenuOpen(false);
      if (!e.target.closest('.hamburger-menu') && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen, userMenuOpen]);

  // Fonction d'upload avatar
  async function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `avatars/${user.id}.${fileExt}`;
    // Upload vers Supabase Storage
    let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file, { upsert: true });
    if (uploadError) {
      alert("Erreur lors de l'upload de l'avatar");
      setUploading(false);
      return;
    }
    // Récupère l'URL publique
    const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
    const avatar_url = data.publicUrl;
    // Met à jour le profil utilisateur
    await supabase.auth.updateUser({ data: { avatar_url } });
    setUser(u => ({ ...u, user_metadata: { ...u.user_metadata, avatar_url } }));
    setUploading(false);
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo + nom */}
          <div className="flex items-center space-x-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">
                <Link href="/">E</Link>
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent ml-1 sm:ml-2">
              xcelDuZero
            </h1>
          </div>
          {/* Liens d'ancre visibles seulement sur la page d'accueil ET si non connecté */}
          {isHome && !user && (
            <div className="hidden md:flex space-x-6 sm:space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-green-600 transition font-medium text-sm sm:text-base"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#levels"
                className="text-gray-600 hover:text-green-600 transition font-medium text-sm sm:text-base"
              >
                Niveaux
              </Link>
              <Link
                href="#premium"
                className="text-gray-600 hover:text-green-600 transition font-medium text-sm sm:text-base"
              >
                Premium
              </Link>
            </div>
          )}
          {/* Menu mobile */}
          {isHome && !user && (
            <button
              className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none hamburger-menu"
              onClick={() => {
                setMenuOpen((v) => !v);
                if (!menuOpen) setUserMenuOpen(false);
              }}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          )}
          {/* Connexion/Inscription mobile : icône + menu déroulant */}
          {!user && (
            <div className="md:hidden relative user-menu">
              <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => {
                  setUserMenuOpen((v) => !v);
                  if (!userMenuOpen) setMenuOpen(false);
                }}
                aria-label="Connexion"
              >
                <UserCircleIcon className="w-5 h-5" />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 z-50 animate-fade-in flex flex-col py-2">
                  <Link
                    href="/auth/login"
                    className="px-4 py-2 text-gray-700 hover:bg-green-50 text-base font-medium rounded-t-xl"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/auth/register"
                    className="px-4 py-2 text-gray-700 hover:bg-green-50 text-base font-medium rounded-b-xl"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
              )}
            </div>
          )}
          {/* Desktop Connexion/Inscription */}
          {!user && (
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/auth/login"
                className="font-semibold text-green-700 hover:underline text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2"
              >
                Connexion
              </Link>
              <Link
                href="/auth/register"
                className="font-semibold text-green-700 hover:underline text-sm sm:text-base px-2 sm:px-3 py-1 sm:py-2"
              >
                Inscription
              </Link>
            </div>
          )}
          {user && (
            <>
              {/* Bouton Quitter le cours si sur une page de cours */}
              {pathname.startsWith("/cours/") && pathname !== "/cours" && (
                <button
                  onClick={() => {
                    if (confirm("Voulez-vous vraiment quitter le cours ? Vous serez redirigé vers l'accueil.")) {
                      window.location.assign("/");
                    }
                  }}
                  className="px-5 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-xl font-bold shadow hover:from-red-500 hover:to-red-700 transition"
                >
                  Quitter le cours
                </button>
              )}
              {/* Le bouton "Rejoindre les cours" n'est pas affiché sur les pages de cours */}
              {!(pathname.startsWith("/cours")) && (
                <Link
                  href="/cours"
                  className="px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl font-bold shadow hover:from-green-500 hover:to-green-700 transition"
                >
                  Rejoindre les cours
                </Link>
              )}
              {/* Avatar + menu déroulant */}
              <div className="relative user-menu">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-green-500 bg-white shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-400 ${menuOpen ? 'ring-2 ring-green-400' : ''}`}
                  aria-label="Menu utilisateur"
                >
                  {profile?.avatar_url ? (
                    <Image src={profile.avatar_url} alt="avatar" width={40} height={40} className="rounded-full object-cover w-10 h-10" />
                  ) : profile?.name ? (
                    <span className="text-green-700 font-bold text-lg uppercase">
                      {profile.name[0]}
                    </span>
                  ) : (
                    <span className="text-green-700 font-bold text-lg">?</span>
                  )}
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 animate-fade-in">
                    <Link
                      href="/auth/profile"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-green-50 text-gray-800 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      <UserCircleIcon className="w-5 h-5 text-green-500" />
                      Mon profil
                    </Link>
                    <label className="flex items-center gap-2 px-4 py-3 hover:bg-green-50 text-gray-800 font-medium cursor-pointer">
                      <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} disabled={uploading} />
                      <span className="w-5 h-5 inline-block"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l-4 4-2-2"/></svg></span>
                      {uploading ? "Chargement..." : "Changer l'avatar"}
                    </label>
                    <div className="border-t border-gray-100" />
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        await supabase.auth.signOut();
                        setUser(null);
                        window.location.assign("/");
                      }}
                      className="flex items-center gap-2 w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 font-medium rounded-b-xl"
                    >
                      <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        {/* Menu mobile ancre (hamburger) */}
        {isHome && !user && menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg border border-gray-100 animate-fade-in flex flex-col py-2 hamburger-menu">
            <Link
              href="#features"
              className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-t-xl text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="#levels"
              className="px-4 py-2 text-gray-700 hover:bg-green-50 text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Niveaux
            </Link>
            <Link
              href="#premium"
              className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-b-xl text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Premium
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
