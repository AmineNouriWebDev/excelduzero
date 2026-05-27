"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ConditionsUtilisationPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Conditions d'utilisation</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <p><strong>Dernière mise à jour : [Date]</strong></p>
            <h2>1. Acceptation des conditions</h2>
            <p>En accédant au site ExcelDuZero et en l'utilisant, vous acceptez les présentes conditions générales d'utilisation.</p>
            <h2>2. Accès au service</h2>
            <p>L'accès à certains contenus nécessite la création d'un compte et éventuellement un abonnement payant. Vous êtes responsable de la confidentialité de vos identifiants.</p>
            <h2>3. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu (vidéos, textes, images) présent sur ce site est la propriété exclusive d'ExcelDuZero. Toute reproduction ou distribution non autorisée est strictement interdite.</p>
            <h2>4. Limitation de responsabilité</h2>
            <p>Nous nous efforçons de maintenir la plateforme accessible à tout moment, mais nous ne pouvons être tenus responsables d'interruptions techniques temporaires.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
