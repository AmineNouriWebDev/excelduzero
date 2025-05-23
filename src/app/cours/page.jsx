export default function CoursPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bienvenue sur la page Cours</h1>
      <p>Voici une vidéo d’apprentissage Excel :</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4QwH7w18vBY" // Remplace par ta vidéo
        title="Vidéo Excel"
        frameBorder="0"
        allowFullScreen></iframe>
    </main>
  );
}
