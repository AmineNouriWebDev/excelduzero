import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const LEVEL_LABELS = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
  expert: "Expert",
};

const STATUS_COLORS = {
  not_started: "text-gray-400",
  success: "text-green-600",
  failed: "text-red-500",
};

export default function ProgressSidebar({ user }) {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from("progress")
      .select("level,status")
      .eq("user_id", user.id)
      .then(({ data }) => {
        setProgress(data || []);
        setLoading(false);
      });
  }, [user]);

  if (!user || loading || progress.length === 0) return null;

  return (
    <aside className="w-full md:w-64 bg-white border border-gray-200 rounded-2xl p-4 mb-6 md:mb-0 md:mr-6 shadow sticky top-28">
      <h3 className="text-lg font-bold text-green-700 mb-4 text-center">Votre progression</h3>
      <ul className="space-y-4">
        {progress.map(({ level, status }) => {
          const total = status.length;
          const done = status.filter(s => s === "success").length;
          const percent = Math.round((done / total) * 100);
          let niveau = "Débutant";
          if (LEVEL_LABELS[level]) niveau = LEVEL_LABELS[level];
          return (
            <li key={level} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-green-800">{niveau}</span>
                <span className="text-xs text-gray-500">{done} / {total} validées</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: percent + "%" }}></div>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {status.map((s, i) => (
                  <span key={i} className={`w-3 h-3 rounded-full inline-block ${STATUS_COLORS[s]} bg-current`} title={s}></span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
