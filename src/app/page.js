"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLeaf,
  faTree,
  faCrown,
  faClipboardCheck,
  faPlay,
  faCheck,
  faChartBar,
  faInfinity,
  faRobot,
  faHeadset,
  faStar,
  faVideo,
  faGamepad,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="gradient-hero pt-24 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Éléments flottants décoratifs */}
        <div className="absolute top-20 left-10 floating">
          <div className="w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
        <div
          className="absolute top-40 right-20 floating"
          style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 bg-white/15 rounded-lg rotate-45"></div>
        </div>
        <div
          className="absolute bottom-20 left-1/4 floating"
          style={{ animationDelay: "2s" }}>
          <div className="w-12 h-12 bg-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Maîtrisez Excel comme un{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Transformez vos compétences Excel avec nos formations vidéo
              interactives, quiz intelligents et exercices pratiques adaptés à
              votre niveau
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-10 py-5 rounded-2xl text-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition card-hover pulse-green excel-glow">
                  <FontAwesomeIcon icon={faClipboardCheck} className="mr-3" />
                  <Link href="/pages/test-niveau-excel">Évaluez votre niveau GRATUITEMENT</Link>
                </button>
             
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 transition card-hover">
                <FontAwesomeIcon icon={faPlay} className="mr-3" />
                Voir la démo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  15,000+
                </div>
                <div className="text-green-100 text-lg">Étudiants formés</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  98%
                </div>
                <div className="text-green-100 text-lg">
                  Taux de satisfaction
                </div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold text-yellow-300 mb-2">
                  200+
                </div>
                <div className="text-green-100 text-lg">Heures de contenu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test de niveau Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Découvrez votre niveau Excel
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre test intelligent analyse vos compétences et vous recommande
              le parcours idéal
            </p>
          </div>

          <div className="max-w-4xl mx-auto gradient-card rounded-3xl p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl font-bold text-green-800 mb-6">
                  Test de niveau personnalisé
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">
                      Évaluation en 10 minutes
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Questions adaptatives</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">Parcours personnalisé</span>
                  </div>
                </div>
                <Link href="/pages/test-niveau-excel" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg card-hover inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  Commencer le test gratuit
                </Link>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-white rounded-3xl shadow-lg">
                  <FontAwesomeIcon icon={faChartBar} className="text-6xl text-green-500 mb-4" />
                  <div className="text-2xl font-bold text-gray-800">
                    100% Gratuit
                  </div>
                  <div className="text-gray-600">Aucune carte requise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Une méthode d&apos;apprentissage révolutionnaire
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinez vidéos HD, exercices pratiques et quiz interactifs pour
              une maîtrise complète d&apos;Excel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 gradient-card rounded-3xl shadow-lg card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faVideo} className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Vidéos HD Interactives
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Apprenez avec des tutoriels vidéo haute définition, sous-titrés
                et avec exercices intégrés
              </p>
            </div>

            <div className="text-center p-8 gradient-card rounded-3xl shadow-lg card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faGamepad} className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Quiz Intelligents
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Testez vos connaissances avec des quiz adaptatifs qui
                s&apos;ajustent à votre progression
              </p>
            </div>

            <div className="text-center p-8 gradient-card rounded-3xl shadow-lg card-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faHandsHelping} className="text-3xl text-white" />
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Exercices Pratiques
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Mettez en pratique avec des fichiers Excel réels et des projets
                concrets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section
        id="levels"
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Un parcours adapté à votre niveau
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                level: "Débutant",
                icon: faSeedling,
                color: "from-green-300 to-green-400",
                lessons: "25 leçons",
              },
              {
                level: "Intermédiaire",
                icon: faLeaf,
                color: "from-green-400 to-green-500",
                lessons: "35 leçons",
              },
              {
                level: "Avancé",
                icon: faTree,
                color: "from-green-500 to-green-600",
                lessons: "40 leçons",
              },
              {
                level: "Expert",
                icon: faCrown,
                color: "from-green-600 to-green-700",
                lessons: "30 leçons",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  {item.level}
                </h4>
                <p className="text-gray-600">{item.lessons}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section id="premium" className="py-20 gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Bloc gauche : texte */}
            <div className="flex-1 text-white text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
                🚀 Passez à l&apos;expérience <span className="bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent">Premium</span>
              </h3>
              <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-green-100">
                Débloquez tout le potentiel d&apos;ExcelDuZero : accès illimité, assistant AI pour vous aider, support prioritaire et bien plus !
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:from-green-500 hover:to-green-700 transition shadow-2xl card-hover">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Accès Premium - 30 DT à vie
              </button>
            </div>
            {/* Bloc droit : avantages */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 mr-5">
                  <FontAwesomeIcon icon={faInfinity} className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Accès illimité</h4>
                  <p className="text-green-100 text-base">Tous les cours, exercices et quiz sans restriction</p>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 mr-5">
                  <FontAwesomeIcon icon={faRobot} className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Assistant AI</h4>
                  <p className="text-green-100 text-base">Un assistant intelligent pour répondre à toutes vos questions Excel</p>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 mr-5">
                  <FontAwesomeIcon icon={faHeadset} className="text-3xl text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Support 24/7</h4>
                  <p className="text-green-100 text-base">Aide personnalisée et prioritaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
