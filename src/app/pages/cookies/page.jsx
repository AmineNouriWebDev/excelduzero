"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function CookiesPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Politique des Cookies</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de mémoriser vos actions et préférences.</p>
            <h2>Comment utilisons-nous les cookies ?</h2>
            <p>Nous utilisons des cookies essentiels pour le fonctionnement du site (comme le maintien de votre session de connexion) ainsi que des cookies d'analyse pour comprendre comment vous interagissez avec notre plateforme.</p>
            <h2>Gérer vos préférences</h2>
            <p>Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies ou être alerté lorsque des cookies sont envoyés. Notez que le blocage de certains cookies peut affecter le bon fonctionnement du site.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
