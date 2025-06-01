"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ProfilePage() {
  // États pour chaque section du profil
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    job: "",
    company: "",
    bio: "",
    objective: "",
    languages: [{ langue: "Français", niveau: "Courant" }],
    skills: "",
    interests: "",
    linkedin: "",
    github: "",
    website: "",
    cv: "",
  });
  const [edit, setEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setMessage("");
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) {
        setMessage("Erreur lors de la récupération de l'utilisateur.");
        setLoading(false);
        return;
      }
      // Récupérer les métadonnées du profil
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error) {
        if (error.code === 'PGRST116' || error.message?.includes('No rows')) {
          // Aucun profil, on le crée
          const { error: insertError } = await supabase
            .from("profiles")
            .insert({ id: user.id, email: user.email, name: user.user_metadata?.name || "" });
          if (insertError) {
            setMessage("Erreur lors de la création du profil: " + insertError.message);
            setLoading(false);
            return;
          }
          setForm(f => ({ ...f, email: user.email }));
          setLoading(false);
          return;
        } else {
          setMessage("Erreur lors de la récupération du profil: " + error.message);
          setLoading(false);
          return;
        }
      }
      setForm({
        name: data.name || "",
        email: user.email || "",
        phone: data.phone || "",
        address: data.address || "",
        job: data.job || "",
        company: data.company || "",
        bio: data.bio || "",
        objective: data.objective || "",
        languages: data.languages || [{ langue: "Français", niveau: "Courant" }],
        skills: data.skills || "",
        interests: data.interests || "",
        linkedin: data.linkedin || "",
        github: data.github || "",
        website: data.website || "",
        cv: data.cv || "",
      });
      setLoading(false);
    }
    fetchProfile();
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleLangueChange(idx, key, value) {
    setForm((f) => ({
      ...f,
      languages: f.languages.map((l, i) => (i === idx ? { ...l, [key]: value } : l)),
    }));
  }

  function addLangue() {
    setForm((f) => ({ ...f, languages: [...f.languages, { langue: "", niveau: "" }] }));
  }

  function removeLangue(idx) {
    setForm((f) => ({ ...f, languages: f.languages.filter((_, i) => i !== idx) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      setMessage("Utilisateur non authentifié.");
      setLoading(false);
      return;
    }
    // Mise à jour du profil dans la table 'profiles'
    const updates = {
      name: form.name,
      phone: form.phone,
      address: form.address,
      job: form.job,
      company: form.company,
      bio: form.bio,
      objective: form.objective,
      languages: form.languages,
      skills: form.skills,
      interests: form.interests,
      linkedin: form.linkedin,
      github: form.github,
      website: form.website,
      cv: form.cv,
      updated_at: new Date().toISOString(),
    };
    const { error: updateError } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", user.id);
    // Mise à jour du mot de passe si renseigné
    let passwordError = null;
    if (password) {
      if (password !== confirm) {
        setMessage("Les mots de passe ne correspondent pas.");
        setLoading(false);
        return;
      }
      const { error: pwError } = await supabase.auth.updateUser({ password });
      if (pwError) passwordError = pwError;
    }
    if (updateError || passwordError) {
      setMessage("Erreur lors de la mise à jour du profil.");
    } else {
      setMessage("Profil mis à jour avec succès !");
    }
    setLoading(false);
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-6 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Mon profil</h2>
          {message && (
            <div className={`mb-4 text-center font-semibold ${message.includes("succès") ? "text-green-600" : "text-red-600"}`}>{message}</div>
          )}
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Informations personnelles */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Informations personnelles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Nom complet</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed focus:ring-0"
                    placeholder="Votre email"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Nouveau mot de passe</label>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 pr-12"
                    placeholder="Nouveau mot de passe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Confirmation</label>
                  <div className="relative">
                    <input
                      name="confirm"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 pr-12"
                      placeholder="Confirmez le mot de passe"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-green-700 font-semibold focus:outline-none"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? "Masquer" : "Afficher"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Adresse et contact */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Adresse & contact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Adresse</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    placeholder="Votre adresse"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Téléphone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    placeholder="Votre téléphone"
                  />
                </div>
              </div>
            </div>
            {/* Situation et objectif professionnels */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Situation & objectif professionnels</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Emploi actuel</label>
                  <input
                    name="job"
                    value={form.job}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    placeholder="Votre poste"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">Entreprise</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    placeholder="Entreprise"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-semibold mb-1">Objectif professionnel</label>
                <input
                  name="objective"
                  value={form.objective}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                  placeholder="Votre objectif (ex: devenir expert Excel, évoluer en entreprise...)"
                />
              </div>
            </div>
            {/* Biographie */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Biographie</h3>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 min-h-[80px]"
                placeholder="Quelques mots sur vous, votre parcours, vos passions..."
              />
            </div>
            {/* Langues */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Langues</h3>
              <div className="space-y-2">
                {form.languages.map((l, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      value={l.langue}
                      onChange={(e) => handleLangueChange(idx, "langue", e.target.value)}
                      className="px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                      placeholder="Langue"
                    />
                    <input
                      value={l.niveau}
                      onChange={(e) => handleLangueChange(idx, "niveau", e.target.value)}
                      className="px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                      placeholder="Niveau (ex: courant, débutant...)"
                    />
                    {form.languages.length > 1 && (
                      <button
                        type="button"
                        className="text-red-500 font-bold text-lg"
                        onClick={() => removeLangue(idx)}
                        title="Supprimer"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-xl font-semibold hover:bg-green-200 transition"
                  onClick={addLangue}
                >
                  + Ajouter une langue
                </button>
              </div>
            </div>
            {/* Compétences */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Compétences</h3>
              <input
                name="skills"
                value={form.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                placeholder="Ex: Excel, VBA, Power Query, gestion de projet..."
              />
            </div>
            {/* Centres d'intérêt */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Centres d'intérêt</h3>
              <input
                name="interests"
                value={form.interests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                placeholder="Ex: sport, lecture, voyages..."
              />
            </div>
            {/* Réseaux sociaux & CV */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4">Réseaux & CV</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                  placeholder="Profil LinkedIn"
                />
                <input
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                  placeholder="Profil GitHub"
                />
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                  placeholder="Site web perso"
                />
                <input
                  name="cv"
                  value={form.cv}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                  placeholder="Lien vers votre CV (Drive, PDF...)"
                />
              </div>
            </div>
            {/* Bouton enregistrer */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow hover:from-green-600 hover:to-green-700 transition"
              >
                Enregistrer les modifications
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
