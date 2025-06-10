import { useState } from "react";

/**
 * Composant image avec zoom plein écran au clic/touche Entrée, fermeture par clic, Entrée ou Échap.
 * Ajoute :
 *  - Lazy loading (loading="lazy")
 *  - Bouton de lecture pour les .gif : l'image n'est chargée qu'après clic sur le bouton "Lire l'animation"
 * Props : src, alt, className, style
 */
export default function ImageZoomable({ src, alt, className = "", style = {} }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [showGif, setShowGif] = useState(!src?.toLowerCase().endsWith('.gif'));

  // Si ce n'est pas un .gif, on affiche directement l'image
  if (!src?.toLowerCase().endsWith('.gif')) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`rounded-xl border border-gray-200 shadow-sm my-6 mx-auto max-w-full cursor-zoom-in transition duration-200 ${fullscreen ? 'fixed inset-0 z-50 bg-black bg-opacity-90 object-contain w-screen h-screen max-h-none max-w-none cursor-zoom-out' : ''} ${className}`}
        style={fullscreen ? { maxHeight: 'none', maxWidth: 'none' } : style}
        onClick={() => setFullscreen(!fullscreen)}
        tabIndex={0}
        onKeyDown={e => {
          if ((fullscreen && (e.key === 'Escape' || e.key === 'Enter')) || (!fullscreen && e.key === 'Enter')) {
            setFullscreen(!fullscreen);
          }
        }}
      />
    );
  }

  // Pour les .gif, on affiche un bouton de lecture
  return (
    <div className="my-6 mx-auto flex flex-col items-center">
      {!showGif ? (
        <button
          className="mb-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          onClick={() => setShowGif(true)}
        >
          ▶️ Lire l'animation
        </button>
      ) : null}
      {showGif && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`rounded-xl border border-gray-200 shadow-sm max-w-full cursor-zoom-in transition duration-200 ${fullscreen ? 'fixed inset-0 z-50 bg-black bg-opacity-90 object-contain w-screen h-screen max-h-none max-w-none cursor-zoom-out' : ''} ${className}`}
          style={fullscreen ? { maxHeight: 'none', maxWidth: 'none' } : style}
          onClick={() => setFullscreen(!fullscreen)}
          tabIndex={0}
          onKeyDown={e => {
            if ((fullscreen && (e.key === 'Escape' || e.key === 'Enter')) || (!fullscreen && e.key === 'Enter')) {
              setFullscreen(!fullscreen);
            }
          }}
        />
      )}
      {fullscreen && (
        <button
          className="fixed top-4 right-4 z-[60] bg-white/80 hover:bg-white text-green-700 font-bold px-4 py-2 rounded-lg shadow-lg border border-green-200 text-lg"
          onClick={() => setFullscreen(false)}
        >
          Fermer (Échap)
        </button>
      )}
    </div>
  );
}
