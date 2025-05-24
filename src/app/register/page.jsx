import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-0">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent ml-2">
              xelDuZero
            </h1>
          </div>
        </nav>
      </header>

      {/* Register Card */}
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Créer un compte
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Votre email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Créer un mot de passe"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirmation du mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Confirmez le mot de passe"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg"
            >
              S'inscrire
            </button>
          </form>
          <div className="text-center mt-6 text-gray-700">
            Déjà inscrit ?
            <Link href="/login" className="inline-block ml-2">
              <button className="px-4 py-2 bg-white text-green-600 rounded-xl border border-green-200 hover:bg-green-50 transition font-semibold shadow">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
