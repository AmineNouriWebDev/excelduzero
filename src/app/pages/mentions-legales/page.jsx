"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function MentionsLegalesPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Mentions légales</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <h2>Éditeur du site</h2>
            <p>Nom de l'entreprise ou du propriétaire : [À compléter]</p>
            <p>Adresse : [À compléter]</p>
            <p>Email : [À compléter]</p>
            <p>Téléphone : [À compléter]</p>
            
            <h2>Hébergement</h2>
            <p>Le site est hébergé par : [Nom de l'hébergeur]</p>
            <p>Adresse de l'hébergeur : [À compléter]</p>
            
            <h2>Directeur de la publication</h2>
            <p>[Nom du directeur de publication]</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
