"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    const redirectUrl = window.location.origin + "/auth/update-password";

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });

    setLoading(false);

    if (error) {
      setError("Une erreur s'est produite : " + error.message);
    } else {
      setMessage("Un lien de réinitialisation a été envoyé à votre adresse email ! Veuillez vérifier votre boîte de réception.");
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Mot de passe oublié
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Votre email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            
            {error && <div className="text-red-600 text-center font-semibold text-sm">{error}</div>}
            {message && <div className="text-green-600 text-center font-semibold text-sm">{message}</div>}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le lien"}
            </button>
          </form>
          <div className="text-center mt-6">
            <Link href="/auth/login" className="text-green-600 hover:text-green-800 font-semibold hover:underline">
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
