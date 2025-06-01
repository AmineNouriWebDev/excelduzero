// Hook quiz (exemple)
import { useState } from "react";
export function useQuiz() {
  const [quiz, setQuiz] = useState(null);
  return [quiz, setQuiz];
}
