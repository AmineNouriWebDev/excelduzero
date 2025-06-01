// Composant badge générique
export default function Badge({ children, color = "bg-green-100 text-green-800" }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${color}`}>{children}</span>
  );
}
