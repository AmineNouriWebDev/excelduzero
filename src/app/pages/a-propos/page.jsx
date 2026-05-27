"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AProposPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8">À propos de nous</h1>
          <div className="bg-white rounded-3xl shadow-xl p-10 prose max-w-none text-gray-700">
            <h2>Notre mission</h2>
            <p>Chez ExcelDuZero, notre objectif est de rendre l'apprentissage d'Excel accessible à tous. Que vous soyez un grand débutant ou que vous cherchiez à vous perfectionner, nous avons le parcours qu'il vous faut.</p>
            <h2>Notre histoire</h2>
            <p>Fondée par des passionnés, la plateforme a pour but d'apporter des explications simples et concrètes sur l'outil le plus utilisé en entreprise.</p>
            <h2>Notre équipe</h2>
            <p>Nous sommes des formateurs certifiés avec des années d'expérience dans l'accompagnement des étudiants et professionnels.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
