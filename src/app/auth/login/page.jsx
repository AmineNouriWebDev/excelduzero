"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);
    if (error) setError("Email ou mot de passe incorrect.");
    else router.push("/cours");
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Connexion
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Votre email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 pr-12"
                  placeholder="Votre mot de passe"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-700 font-semibold focus:outline-none"
                  onClick={() => setShowPassword(v => !v)}
                >
                  {showPassword ? "Masquer" : "Afficher"}
                </button>
              </div>
            </div>
            {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>
          <div className="text-center mt-6 text-gray-700">
            Pas encore inscrit ?
            <Link href="/auth/register" className="inline-block ml-2">
              <button className="px-4 py-2 bg-white text-green-600 rounded-xl border border-green-200 hover:bg-green-50 transition font-semibold shadow">
                Créer un compte
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
