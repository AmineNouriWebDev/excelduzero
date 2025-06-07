"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

const LANGUES_LIST = [
  "Français", "Anglais", "Espagnol", "Allemand", "Italien", "Arabe", "Chinois", "Russe", "Portugais", "Japonais", "Néerlandais", "Turc", "Polonais", "Autre..."
];
const NIVEAUX_LIST = [
  "Débutant", "Intermédiaire", "Avancé", "Courant", "Bilingue", "Langue maternelle"
];
// Liste des pays et codes
const COUNTRY_CODES = [
    { code: "+216", label: "Tunisie" },
    { code: "+33", label: "France" },
    { code: "+32", label: "Belgique" },
    { code: "+41", label: "Suisse" },
    { code: "+212", label: "Maroc" },
    { code: "+213", label: "Algérie" },
    { code: "+1", label: "Canada" },
    { code: "+44", label: "Royaume-Uni" },
    { code: "+49", label: "Allemagne" },
    { code: "+34", label: "Espagne" },
    { code: "+39", label: "Italie" },
    { code: "+351", label: "Portugal" },
    { code: "+90", label: "Turquie" },
    { code: "+1", label: "États-Unis (US)" },
    { code: "+86", label: "Chine" },
    { code: "+81", label: "Japon" },
    { code: "+7", label: "Russie" },
    { code: "+20", label: "Égypte" },
    { code: "+966", label: "Arabie Saoudite" },
    { code: "+93", label: "Afghanistan" },
    { code: "+355", label: "Albanie" },
    { code: "+244", label: "Angola" },
    { code: "+54", label: "Argentine" },
    { code: "+374", label: "Arménie" },
    { code: "+61", label: "Australie" },
    { code: "+43", label: "Autriche" },
    { code: "+994", label: "Azerbaïdjan" },
    { code: "+973", label: "Bahreïn" },
    { code: "+880", label: "Bangladesh" },
    { code: "+375", label: "Bélarus" },
    { code: "+501", label: "Belize" },
    { code: "+229", label: "Bénin" },
    { code: "+975", label: "Bhoutan" },
    { code: "+591", label: "Bolivie" },
    { code: "+387", label: "Bosnie-Herzégovine" },
    { code: "+267", label: "Botswana" },
    { code: "+55", label: "Brésil" },
    { code: "+673", label: "Brunei" },
    { code: "+359", label: "Bulgarie" },
    { code: "+226", label: "Burkina Faso" },
    { code: "+257", label: "Burundi" },
    { code: "+238", label: "Cap-Vert" },
    { code: "+237", label: "Cameroun" },
    { code: "+235", label: "Tchad" },
    { code: "+56", label: "Chili" },
    { code: "+57", label: "Colombie" },
    { code: "+269", label: "Comores" },
    { code: "+242", label: "Congo" },
    { code: "+243", label: "Congo (RDC)" },
    { code: "+506", label: "Costa Rica" },
    { code: "+225", label: "Côte d'Ivoire" },
    { code: "+385", label: "Croatie" },
    { code: "+53", label: "Cuba" },
    { code: "+45", label: "Danemark" },
    { code: "+253", label: "Djibouti" },
    { code: "+593", label: "Équateur" },
    { code: "+503", label: "Salvador" },
    { code: "+240", label: "Guinée équatoriale" },
    { code: "+291", label: "Érythrée" },
    { code: "+372", label: "Estonie" },
    { code: "+268", label: "Eswatini" },
    { code: "+251", label: "Éthiopie" },
    { code: "+679", label: "Fidji" },
    { code: "+358", label: "Finlande" },
    { code: "+220", label: "Gambie" },
    { code: "+995", label: "Géorgie" },
    { code: "+233", label: "Ghana" },
    { code: "+30", label: "Grèce" },
    { code: "+502", label: "Guatemala" },
    { code: "+224", label: "Guinée" },
    { code: "+245", label: "Guinée-Bissau" },
    { code: "+592", label: "Guyana" },
    { code: "+509", label: "Haïti" },
    { code: "+504", label: "Honduras" },
    { code: "+36", label: "Hongrie" },
    { code: "+91", label: "Inde" },
    { code: "+62", label: "Indonésie" },
    { code: "+964", label: "Irak" },
    { code: "+98", label: "Iran" },
    { code: "+353", label: "Irlande" },
    { code: "+354", label: "Islande" },
    { code: "+972", label: "Israël" },
    { code: "+962", label: "Jordanie" },
    { code: "+7", label: "Kazakhstan" },
    { code: "+254", label: "Kenya" },
    { code: "+996", label: "Kirghizistan" },
    { code: "+856", label: "Laos" },
    { code: "+266", label: "Lesotho" },
    { code: "+231", label: "Liberia" },
    { code: "+218", label: "Libye" },
    { code: "+423", label: "Liechtenstein" },
    { code: "+370", label: "Lituanie" },
    { code: "+352", label: "Luxembourg" },
    { code: "+261", label: "Madagascar" },
    { code: "+265", label: "Malawi" },
    { code: "+60", label: "Malaisie" },
    { code: "+960", label: "Maldives" },
    { code: "+223", label: "Mali" },
    { code: "+356", label: "Malte" },
    { code: "+222", label: "Mauritanie" },
    { code: "+230", label: "Maurice" },
    { code: "+52", label: "Mexique" },
    { code: "+373", label: "Moldavie" },
    { code: "+377", label: "Monaco" },
    { code: "+976", label: "Mongolie" },
    { code: "+382", label: "Monténégro" },
    { code: "+258", label: "Mozambique" },
    { code: "+95", label: "Myanmar" },
    { code: "+264", label: "Namibie" },
    { code: "+674", label: "Nauru" },
    { code: "+977", label: "Népal" },
    { code: "+31", label: "Pays-Bas" },
    { code: "+505", label: "Nicaragua" },
    { code: "+227", label: "Niger" },
    { code: "+234", label: "Nigeria" },
    { code: "+47", label: "Norvège" },
    { code: "+64", label: "Nouvelle-Zélande" },
    { code: "+968", label: "Oman" },
    { code: "+92", label: "Pakistan" },
    { code: "+680", label: "Palaos" },
    { code: "+507", label: "Panama" },
    { code: "+675", label: "Papouasie-Nouvelle-Guinée" },
    { code: "+595", label: "Paraguay" },
    { code: "+51", label: "Pérou" },
    { code: "+63", label: "Philippines" },
    { code: "+48", label: "Pologne" },
    { code: "+850", label: "Corée du Nord" },
    { code: "+40", label: "Roumanie" },
    { code: "+250", label: "Rwanda" },
    { code: "+685", label: "Samoa" },
    { code: "+378", label: "Saint-Marin" },
    { code: "+239", label: "Sao Tomé-et-Principe" },
    { code: "+221", label: "Sénégal" },
    { code: "+381", label: "Serbie" },
    { code: "+248", label: "Seychelles" },
    { code: "+232", label: "Sierra Leone" },
    { code: "+65", label: "Singapour" },
    { code: "+421", label: "Slovaquie" },
    { code: "+386", label: "Slovénie" },
    { code: "+252", label: "Somalie" },
    { code: "+27", label: "Afrique du Sud" },
    { code: "+82", label: "Corée du Sud" },
    { code: "+211", label: "Soudan du Sud" },
    { code: "+94", label: "Sri Lanka" },
    { code: "+249", label: "Soudan" },
    { code: "+597", label: "Suriname" },
    { code: "+46", label: "Suède" },
    { code: "+963", label: "Syrie" },
    { code: "+992", label: "Tadjikistan" },
    { code: "+886", label: "Taïwan" },
    { code: "+255", label: "Tanzanie" },
    { code: "+66", label: "Thaïlande" },
    { code: "+228", label: "Togo" },
    { code: "+676", label: "Tonga" },
    { code: "+1 868", label: "Trinité-et-Tobago" },
    { code: "+993", label: "Turkménistan" },
    { code: "+256", label: "Ouganda" },
    { code: "+380", label: "Ukraine" },
    { code: "+598", label: "Uruguay" },
    { code: "+998", label: "Ouzbékistan" },
    { code: "+678", label: "Vanuatu" },
    { code: "+58", label: "Venezuela" },
    { code: "+84", label: "Viêt Nam" },
    { code: "+967", label: "Yémen" },
    { code: "+260", label: "Zambie" },
    { code: "+263", label: "Zimbabwe" },
    { code: "", label: "Autre..." }
  ];
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
  const [countryCode, setCountryCode] = useState("+216");
  const [phoneHelp, setPhoneHelp] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  // Met à jour le message d'aide selon le pays
  useEffect(() => {
    if (countryCode === "+216") {
      setPhoneHelp("Pour la Tunisie, 8 chiffres requis (ex: 20456613)");
    } else {
      setPhoneHelp("6 à 15 chiffres selon le pays");
    }
  }, [countryCode]);

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
      setAvatarUrl(data.avatar_url || "");
      setLoading(false);
    }
    fetchProfile();
  }, []);

  useEffect(() => {
    // Détection automatique du pays via l'API ipinfo.io (optionnel)
    fetch("https://ipinfo.io/json?token=demo")
      .then(res => res.json())
      .then(data => {
        if (data && data.country) {
          const found = COUNTRY_CODES.find(c =>
            (data.country === "TN" && c.code === "+216") ||
            (data.country === "FR" && c.code === "+33") ||
            (data.country === "BE" && c.code === "+32") ||
            (data.country === "CH" && c.code === "+41") ||
            (data.country === "MA" && c.code === "+212") ||
            (data.country === "DZ" && c.code === "+213") ||
            (data.country === "CA" && c.code === "+1") ||
            (data.country === "GB" && c.code === "+44") ||
            (data.country === "DE" && c.code === "+49") ||
            (data.country === "ES" && c.code === "+34") ||
            (data.country === "IT" && c.code === "+39") ||
            (data.country === "PT" && c.code === "+351") ||
            (data.country === "TR" && c.code === "+90") ||
            (data.country === "US" && c.code === "+1") ||
            (data.country === "CN" && c.code === "+86") ||
            (data.country === "JP" && c.code === "+81") ||
            (data.country === "RU" && c.code === "+7") ||
            (data.country === "EG" && c.code === "+20") ||
            (data.country === "SA" && c.code === "+966")
          );
          if (found) setCountryCode(found.code);
        }
      });
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
    // Validation téléphone
    if (countryCode === "+216" && form.phone.length !== 8) {
      setMessage("Veuillez entrer un numéro tunisien de 8 chiffres.");
      toast.error("Veuillez entrer un numéro tunisien de 8 chiffres.");
      setLoading(false);
      return;
    }
    if (countryCode !== "+216" && (form.phone.length < 6 || form.phone.length > 15)) {
      setMessage("Veuillez entrer un numéro valide (6 à 15 chiffres).");
      toast.error("Veuillez entrer un numéro valide (6 à 15 chiffres).");
      setLoading(false);
      return;
    }
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      setMessage("Utilisateur non authentifié.");
      toast.error("Utilisateur non authentifié.");
      setLoading(false);
      return;
    }
    // Mise à jour du profil dans la table 'profiles'
    const updates = {
      name: form.name,
      phone: countryCode + form.phone,
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
      .eq("id", user.id)
      .select();
    // Mise à jour du mot de passe si renseigné
    let passwordError = null;
    if (password) {
      if (password !== confirm) {
        setMessage("Les mots de passe ne correspondent pas.");
        toast.error("Les mots de passe ne correspondent pas.");
        setLoading(false);
        return;
      }
      const { error: pwError } = await supabase.auth.updateUser({ password });
      if (pwError) passwordError = pwError;
    }
    if (updateError || passwordError) {
      setMessage("Erreur lors de la mise à jour du profil.");
      toast.error("Erreur lors de la mise à jour du profil.");
    } else {
      setMessage("Profil mis à jour avec succès !");
      toast.success("Profil mis à jour avec succès !");
      // Rafraîchir les données du formulaire après update
      const { data: refreshed, error: fetchError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (!fetchError && refreshed) {
        setForm({
          name: refreshed.name || "",
          email: user.email || "",
          phone: refreshed.phone || "",
          address: refreshed.address || "",
          job: refreshed.job || "",
          company: refreshed.company || "",
          bio: refreshed.bio || "",
          objective: refreshed.objective || "",
          languages: refreshed.languages || [{ langue: "Français", niveau: "Courant" }],
          skills: refreshed.skills || "",
          interests: refreshed.interests || "",
          linkedin: refreshed.linkedin || "",
          github: refreshed.github || "",
          website: refreshed.website || "",
          cv: refreshed.cv || "",
        });
      }
    }
    setLoading(false);
  }

  // Fonction d'upload avatar
  async function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `avatars/${form.email.replace(/[^a-zA-Z0-9]/g, '')}.${fileExt}`;
    let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file, { upsert: true });
    if (uploadError) {
      setMessage("Erreur lors de l'upload de l'avatar");
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
    const avatar_url = data.publicUrl;
    // Met à jour le profil utilisateur (table 'profiles')
    await supabase.from('profiles').update({ avatar_url }).eq('email', form.email);
    setAvatarUrl(avatar_url);
    setMessage("Avatar mis à jour !");
    setUploading(false);
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
            {/* Avatar */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 mb-2">
                {avatarUrl ? (
                  <Image src={avatarUrl} alt="avatar" width={96} height={96} className="rounded-full object-cover w-24 h-24 border-4 border-green-300 shadow" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-4xl text-green-700 font-bold border-4 border-green-200">
                    {form.name ? form.name[0].toUpperCase() : <span>?</span>}
                  </div>
                )}
                {uploading && <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-full"><span className="text-green-700 font-bold">...</span></div>}
              </div>
              <label className="px-4 py-2 bg-green-100 text-green-700 rounded-xl font-semibold hover:bg-green-200 transition cursor-pointer">
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} disabled={uploading} />
                {uploading ? "Chargement..." : "Changer l'avatar"}
              </label>
            </div>
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
                  <div className="relative">
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 pr-12"
                      placeholder="Nouveau mot de passe"
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
                    {/* Pas de bouton ici, il est sur le champ mot de passe */}
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
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={e => setCountryCode(e.target.value)}
                      className="px-2 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 bg-white min-w-[90px]"
                    >
                      {COUNTRY_CODES.map((c, idx) => (
                        <option key={c.code + '-' + idx} value={c.code}>{c.label} {c.code}</option>
                      ))}
                    </select>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={e => {
                        // Autorise uniquement les chiffres
                        let val = e.target.value.replace(/\D/g, "");
                        setForm(f => ({ ...f, phone: val }));
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                      placeholder="Votre téléphone"
                      type="tel"
                      inputMode="tel"
                      pattern={countryCode === "+216" ? "\\d{8}" : "\\d{6,15}"}
                      required
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{phoneHelp}</div>
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
                    <select
                      value={l.langue}
                      onChange={e => handleLangueChange(idx, "langue", e.target.value)}
                      className="px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Langue</option>
                      {LANGUES_LIST.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </select>
                    <select
                      value={l.niveau}
                      onChange={e => handleLangueChange(idx, "niveau", e.target.value)}
                      className="px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Niveau</option>
                      {NIVEAUX_LIST.map(niv => (
                        <option key={niv} value={niv}>{niv}</option>
                      ))}
                    </select>
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
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
