// Composant PremiumGate (exemple)
import { usePremium } from "../../hooks/usePremium";

export default function PremiumGate({ children, fallback = null }) {
  const isPremium = usePremium();
  if (!isPremium) return fallback;
  return children;
}
