// Composant de route protégée (exemple)
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const user = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user === null) router.replace("/auth/login");
  }, [user, router]);
  if (user === undefined) return null;
  return children;
}
