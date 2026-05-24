import { X, Clock, Sparkles } from 'lucide-react';

export default function PremiumComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 animate-fade-in-up">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-100 relative">
            <Sparkles size={32} />
            <div className="absolute -bottom-2 -right-2 bg-pink-100 text-pink-600 p-1 rounded-full border-2 border-white shadow-sm">
              <Clock size={16} />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            L'Offre Premium arrive bientôt !
          </h3>
          
          <div className="text-gray-600 space-y-4 mb-8 leading-relaxed">
            <p>
              Nous sommes ravis de votre intérêt ! Les parcours <span className="font-semibold text-gray-900">Avancé</span> et <span className="font-semibold text-gray-900">Expert</span>, ainsi que l'accès exclusif à nos vidéos de correction détaillées sont actuellement en cours de finalisation.
            </p>
            <p>
              Notre équipe travaille dur pour vous préparer une expérience d'apprentissage exceptionnelle. L'abonnement Premium sera disponible très prochainement.
            </p>
          </div>
          
          <div className="w-full flex flex-col sm:flex-row gap-3">
            <button 
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-200"
            >
              J'ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
