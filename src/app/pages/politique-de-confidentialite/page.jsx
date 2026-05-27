"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Politique de confidentialité</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <p><strong>Dernière mise à jour : [Date]</strong></p>
            <h2>1. Collecte des données</h2>
            <p>Nous collectons les informations que vous nous fournissez lors de votre inscription (nom, email, etc.) ainsi que des données de navigation anonymes pour améliorer nos services.</p>
            <h2>2. Utilisation de vos données</h2>
            <p>Vos données sont utilisées exclusivement pour vous donner accès à nos cours, vous envoyer des communications relatives à votre compte et améliorer votre expérience sur le site.</p>
            <h2>3. Protection et partage</h2>
            <p>Vos informations personnelles ne sont ni vendues ni partagées à des tiers à des fins commerciales. Nous mettons en œuvre les mesures de sécurité nécessaires pour protéger vos données.</p>
            <h2>4. Vos droits</h2>
            <p>Vous disposez d'un droit d'accès, de modification et de suppression de vos données personnelles. Vous pouvez exercer ce droit en nous contactant.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
