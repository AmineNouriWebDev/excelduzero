"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Écoute l'événement de récupération si on vient d'un email
    supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        console.log("Mode récupération de mot de passe activé");
      }
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    
    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password: password });

    setLoading(false);

    if (error) {
      setError("Erreur lors de la mise à jour : " + error.message);
    } else {
      setMessage("Votre mot de passe a été mis à jour avec succès !");
      setTimeout(() => {
        router.push("/auth/profile");
      }, 2000);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Nouveau mot de passe
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Veuillez entrer votre nouveau mot de passe ci-dessous.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="********"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
            
            {error && <div className="text-red-600 text-center font-semibold text-sm">{error}</div>}
            {message && <div className="text-green-600 text-center font-semibold text-sm">{message}</div>}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Mise à jour..." : "Mettre à jour"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
