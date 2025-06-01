// Hook premium (exemple)
import { useState, useEffect } from "react";

export function usePremium() {
  const [premium, setPremium] = useState(false);
  useEffect(() => {
    // À remplacer par un vrai appel API
    setPremium(false);
  }, []);
  return premium;
}
