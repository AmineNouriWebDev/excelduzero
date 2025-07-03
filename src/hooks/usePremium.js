// Hook premium (exemple)
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export function usePremium() {
  const [premium, setPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchPremium() {
      setLoading(true);
      // Récupère l'utilisateur courant
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        if (isMounted) setPremium(false);
        setLoading(false);
        return;
      }
      // Récupère le profil dans la table "profiles"
      const { data, error } = await supabase
        .from("profiles")
        .select("premium")
        .eq("id", user.id)
        .single();
      if (!error && data && typeof data.premium === "boolean") {
        if (isMounted) setPremium(data.premium);
      } else {
        if (isMounted) setPremium(false);
      }
      setLoading(false);
    }
    fetchPremium();
    // Écoute les changements d'authentification
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      fetchPremium();
    });
    return () => {
      isMounted = false;
      if (listener && listener.subscription) listener.subscription.unsubscribe();
    };
  }, []);

  return { premium, loading };
}
