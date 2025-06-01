// Composant Navigation principal (haut de page)
export default function Navigation() {
  return (
    <nav className="flex items-center gap-6">
      <a href="/dashboard" className="hover:underline">Tableau de bord</a>
      <a href="/cours" className="hover:underline">Cours</a>
      <a href="/quiz" className="hover:underline">Quiz</a>
      <a href="/videos" className="hover:underline">Vidéos</a>
      <a href="/premium" className="hover:underline">Premium</a>
    </nav>
  );
}
