import { useState } from "react";

/**
 * Composant image avec zoom plein écran au clic/touche Entrée, fermeture par clic, Entrée ou Échap.
 * Props : src, alt, className, style
 */
export default function ImageZoomable({ src, alt, className = "", style = {} }) {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
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
      {fullscreen && (
        <button
          className="fixed top-4 right-4 z-[60] bg-white/80 hover:bg-white text-green-700 font-bold px-4 py-2 rounded-lg shadow-lg border border-green-200 text-lg"
          onClick={() => setFullscreen(false)}
        >
          Fermer (Échap)
        </button>
      )}
    </>
  );
}
