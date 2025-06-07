"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function CoursExpert() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 md:px-0 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Cours Excel – Niveau Expert
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
          Devenez un expert d’Excel : macros, VBA, automatisation avancée, optimisation et productivité.
        </p>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-gray-600">Le contenu du cours expert arrive bientôt !</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
