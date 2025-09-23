// components/PremiumVideo.jsx
import PremiumGate from "../common/PremiumGate";
import { useState, useEffect } from 'react';

/**
 * Composant vidéo premium universel
 * @param {string} url - Lien YouTube (https://...) ou fichier mp4 local
 * @param {string} [title] - Titre optionnel
 * @param {string} [className] - Classes CSS optionnelles
 */
export default function PremiumVideo({ url, title = "Vidéo de correction", className = "" }) {
  const [videoId, setVideoId] = useState(null);
  const isYoutube = url?.includes("youtube.com") || url?.includes("youtu.be");

  // Extraire l'ID de la vidéo YouTube
  useEffect(() => {
    if (isYoutube) {
      let id = null;
      
      // Format 1: https://www.youtube.com/watch?v=VIDEO_ID
      if (url.includes("youtube.com")) {
        const match = url.match(/[?&]v=([^&]+)/);
        if (match) id = match[1];
      }
      
      // Format 2: https://youtu.be/VIDEO_ID
      if (url.includes("youtu.be")) {
        const match = url.match(/youtu\.be\/([^?]+)/);
        if (match) id = match[1];
      }
      
      setVideoId(id);
    }
  }, [url, isYoutube]);

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
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&fs=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
                frameBorder="0"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                <p>Chargement de la vidéo...</p>
              </div>
            )}
          </div>
        ) : (
          <video
            controls
            className="w-full max-w-2xl rounded-lg shadow aspect-video"
            muted={true}
            playsInline
          >
            <source src={url} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        )}
      </div>
    </PremiumGate>
  );
}