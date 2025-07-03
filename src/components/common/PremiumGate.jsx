// Composant PremiumGate (exemple)
import { usePremium } from "../../hooks/usePremium";

export default function PremiumGate({ children, fallback = null }) {
  const { premium, loading } = usePremium();
  if (loading) return null; // Ou un loader visuel si souhaité
  if (!premium) return fallback;
  return children;
}
