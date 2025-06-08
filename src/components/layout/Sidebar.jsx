// Composant Sidebar pour la navigation principale
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full p-6 hidden md:block lg:sticky lg:top-28">
      {/* À compléter selon la navigation */}
      <div className="font-bold text-lg mb-4">Navigation</div>
      <nav>
        <ul className="space-y-2">
          <li><a href="/dashboard" className="hover:underline">Tableau de bord</a></li>
          <li><a href="/cours" className="hover:underline">Cours</a></li>
          <li><a href="/quiz" className="hover:underline">Quiz</a></li>
          <li><a href="/videos" className="hover:underline">Vidéos</a></li>
          <li><a href="/premium" className="hover:underline">Premium</a></li>
        </ul>
      </nav>
    </aside>
  );
}
