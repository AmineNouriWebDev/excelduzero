// Composant bouton UI générique
export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition" {...props}>
      {children}
    </button>
  );
}
