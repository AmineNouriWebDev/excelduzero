"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function CentreAidePage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Centre d'aide</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <h2>Comment pouvons-nous vous aider ?</h2>
            <p>Bienvenue sur notre centre d'aide. Vous trouverez ici des informations génériques concernant l'utilisation de la plateforme ExcelDuZero. Modifiez ces informations selon vos besoins.</p>
            <h3>Problèmes de connexion</h3>
            <p>Si vous rencontrez des problèmes pour vous connecter, veuillez vérifier votre adresse email ou réinitialiser votre mot de passe depuis la page de connexion.</p>
            <h3>Accès aux cours</h3>
            <p>Une fois inscrit, vous avez accès aux cours correspondant à votre niveau d'abonnement. Naviguez via le menu "Cours" pour commencer votre apprentissage.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
