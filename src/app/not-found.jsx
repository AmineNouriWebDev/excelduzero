// Page personnalisée pour 404
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-extrabold text-green-700 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Page non trouvée</p>
      <a href="/" className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold shadow hover:bg-green-700 transition">Retour à l'accueil</a>
    </div>
  );
}
