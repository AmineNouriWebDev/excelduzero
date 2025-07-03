"use client";

// Fichier d'exemple pour la page d'erreur globale
export default function GlobalError({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-red-700 mb-4">Une erreur est survenue</h1>
        <p className="mb-4 text-gray-700">{error?.message || "Erreur inconnue."}</p>
        <button onClick={reset} className="px-4 py-2 bg-red-600 text-white rounded">Réessayer</button>
      </div>
    </div>
  );
}
