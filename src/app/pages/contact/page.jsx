"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Contactez-nous</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <p>Vous avez une question ou une remarque ? N'hésitez pas à nous contacter !</p>
            <h3>Email</h3>
            <p>contact@excelduzero.com (à remplacer par votre email réel)</p>
            <h3>Adresse</h3>
            <p>123 Rue d'Exemple, 75000 Paris, France (à remplacer)</p>
            <h3>Réseaux sociaux</h3>
            <p>Retrouvez-nous sur Facebook, LinkedIn, et TikTok !</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
