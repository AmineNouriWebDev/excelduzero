// Composant carte UI générique
export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
