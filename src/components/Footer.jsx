"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTiktok,
  faLinkedinIn,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://n8n.deposark.com/webhook/excel-du-zero-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Merci pour votre inscription à la newsletter !");
        setEmail("");
      } else {
        toast.error("Une erreur est survenue lors de l'inscription.");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Erreur de connexion. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <a href="/">
                <Image 
                  src="/logo.png" 
                  alt="ExcelDuZero" 
                  width={200} 
                  height={50} 
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              La plateforme n°1 pour maîtriser Excel rapidement et efficacement.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faTiktok} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faYoutube} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1">
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
            </div>
          </div>

          {/* Courses Section */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-green-400">Cours</h5>
            <ul className="space-y-3">
              <li>
                <a href="/cours/debutant" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Débutant</a>
              </li>
              <li>
                <a href="/cours/intermediaire" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Intermédiaire</a>
              </li>
              <li>
                <a href="/cours/avance" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Avancé</a>
              </li>
              <li>
                <a href="/cours/expert" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Expert</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-green-400">Support</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Centre d&apos;aide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">FAQ</a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">À propos de nous</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-green-400">Légal</h5>
            <ul className="space-y-3">
              <li>
                <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Conditions d&apos;utilisation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Mentions légales</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:pl-2 block">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg font-bold mb-2 text-green-400">Restez informé</h5>
              <p className="text-gray-400">Inscrivez-vous à notre newsletter pour recevoir des conseils Excel.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                placeholder="Votre email"
                className="px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-64 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 rounded-r-lg font-medium hover:from-green-600 hover:to-green-800 transition-all disabled:opacity-50"
              >
                {loading ? "..." : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ExcelDuZero. Tous droits réservés. <span className="ml-1">by <a href="https://maxsolving.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">MaxSolving</a></span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Accessibilité
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}