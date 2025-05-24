import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function LoginPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
 <Header />
      {/* Login Card */}
      <div className="flex items-center justify-center min-h-screen pt-24 pb-10">
        <div className="gradient-card rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Connexion
          </h2>
          <form className="space-y-6">
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
                placeholder="Votre mot de passe"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg"
            >
              Se connecter
            </button>
          </form>
          <div className="text-center mt-6 text-gray-700">
            Pas encore inscrit ?
            <Link href="/register" className="inline-block ml-2">
              <button className="px-4 py-2 bg-white text-green-600 rounded-xl border border-green-200 hover:bg-green-50 transition font-semibold shadow">
                Créer un compte
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}