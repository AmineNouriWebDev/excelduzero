"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Foire Aux Questions (FAQ)</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <p>Voici les réponses aux questions les plus fréquemment posées.</p>
            <h3>Les cours sont-ils adaptés aux débutants ?</h3>
            <p>Absolument ! Notre parcours "Débutant" est conçu pour vous apprendre les bases étape par étape.</p>
            <h3>Comment obtenir une attestation ?</h3>
            <p>Une fois le cours terminé et les quiz validés, une attestation sera disponible dans votre espace personnel.</p>
            <h3>Quels sont les moyens de paiement acceptés ?</h3>
            <p>Nous acceptons la plupart des cartes bancaires, PayPal, et d'autres moyens selon votre région.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
