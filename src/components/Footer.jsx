import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
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
              La plateforme n°1 pour maîtriser Excel rapidement et efficacement.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Cours</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">Débutant</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Intermédiaire</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Avancé</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Expert</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition">Centre d&apos;aide</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-4">Suivez-nous</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ExcelMaster. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
