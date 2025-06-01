// Composant barre de recherche générique
export default function SearchBar({ value, onChange, placeholder = "Rechercher..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="px-4 py-2 border rounded w-full"
    />
  );
}
