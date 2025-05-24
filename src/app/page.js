"use client";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Styles personnalisés */}
      <style jsx global>{`
        .gradient-hero {
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #059669 25%,
            #047857 50%,
            #065f46 100%
          );
        }
        .gradient-card {
          background: linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%);
        }
        .gradient-premium {
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #34d399 50%,
            #6ee7b7 100%
          );
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
        }
        .pulse-green {
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
          }
        }
        .excel-glow {
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.3);
        }
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                xelDuZero
              </h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-green-600 transition font-medium">
                Fonctionnalités
              </a>
              <a
                href="#levels"
                className="text-gray-600 hover:text-green-600 transition font-medium">
                Niveaux
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-green-600 transition font-medium">
                Tarifs
              </a>
            </div>

            <div className="flex space-x-4">
              <button className="text-green-600 hover:text-green-800 font-medium transition">
                Connexion
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-xl hover:from-green-600 hover:to-green-700 transition shadow-lg">
                Inscription
              </button>
            </div>
          </div>
        </nav>
      </header>

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
                <i className="fas fa-clipboard-check mr-3"></i>
                Évaluez votre niveau GRATUITEMENT
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 transition card-hover">
                <i className="fas fa-play mr-3"></i>
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
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">
                      Évaluation en 10 minutes
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">Questions adaptatives</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">Parcours personnalisé</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg card-hover">
                  Commencer le test gratuit
                </button>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-white rounded-3xl shadow-lg">
                  <i className="fas fa-chart-bar text-6xl text-green-500 mb-4"></i>
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
                <i className="fas fa-video text-3xl text-white"></i>
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
                <i className="fas fa-gamepad text-3xl text-white"></i>
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
                <i className="fas fa-hands-helping text-3xl text-white"></i>
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
                icon: "fa-seedling",
                color: "from-green-300 to-green-400",
                lessons: "25 leçons",
              },
              {
                level: "Intermédiaire",
                icon: "fa-leaf",
                color: "from-green-400 to-green-500",
                lessons: "35 leçons",
              },
              {
                level: "Avancé",
                icon: "fa-tree",
                color: "from-green-500 to-green-600",
                lessons: "40 leçons",
              },
              {
                level: "Expert",
                icon: "fa-crown",
                color: "from-green-600 to-green-700",
                lessons: "30 leçons",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${item.icon} text-2xl text-white`}></i>
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
      <section className="py-20 gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Devenez Premium et accélérez votre apprentissage !
            </h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100">
              Accès illimité à tous les contenus, certificats officiels et
              support prioritaire
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <i className="fas fa-infinity text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">Accès illimité</h4>
                <p className="text-green-100">Tous les cours et exercices</p>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <i className="fas fa-certificate text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">Certificats</h4>
                <p className="text-green-100">Reconnus par les entreprises</p>
              </div>
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                <i className="fas fa-headset text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">Support 24/7</h4>
                <p className="text-green-100">Aide personnalisée</p>
              </div>
            </div>

            <button className="bg-white text-green-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition shadow-2xl card-hover">
              <i className="fas fa-star mr-3"></i>
              Devenir Premium - 19€/mois
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h1 className="text-2xl font-bold">ExcelMaster</h1>
              </div>
              <p className="text-gray-400">
                La plateforme n°1 pour maîtriser Excel rapidement et
                efficacement.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Cours</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Débutant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Intermédiaire
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Avancé
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Expert
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Centre d&apos;aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ExcelMaster. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
