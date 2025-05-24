import Link from "next/link";
export const metadata = {
  title: "Quizz pour débutants",
};
export default function CoursPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Quizz pour débutants</h2>
      <p>salut les débutants</p>
      <Link href="/cours">Cours</Link>
    </main>
  );
}
