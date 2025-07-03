import PremiumGate from "../common/PremiumGate";

/**
 * Composant vidéo premium universel
 * @param {string} url - Lien YouTube (https://...) ou mp4 (/.mp4)
 * @param {string} [title] - Titre optionnel
 * @param {string} [className] - Classes CSS optionnelles
 */
export default function PremiumVideo({ url, title = "Vidéo de correction", className = "" }) {
  // Détection YouTube
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  return (
    <PremiumGate
      fallback={
        <div className="text-center text-pink-700 font-semibold py-8">
          Cette vidéo de correction est réservée aux membres <span className="font-bold">Premium</span>.<br />
          <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
            Devenir Premium
          </button>
        </div>
      }
    >
      <div className={`bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center ${className}`}>
        {title && <div className="mb-4 text-lg font-semibold text-gray-700">{title}</div>}
        {isYoutube ? (
          <div className="w-full max-w-2xl aspect-video">
            <iframe
              src={
                url.includes("embed")
                  ? url
                  : url.replace("watch?v=", "embed/")
              }
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow"
            />
          </div>
        ) : (
          <video width="640" height="360" controls className="w-full max-w-2xl rounded-lg shadow">
            <source src={url} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        )}
      </div>
    </PremiumGate>
  );
}
