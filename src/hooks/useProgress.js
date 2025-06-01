// Hook de progression (exemple)
import { useState } from "react";
export function useProgress() {
  const [progress, setProgress] = useState(0);
  return [progress, setProgress];
}
