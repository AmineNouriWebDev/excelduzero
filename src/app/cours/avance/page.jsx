import CourseClient from "./CourseClient";
import { LEÇONS } from "./data";
import { Suspense } from "react";

export async function generateMetadata(props) {
  const searchParams = await props.searchParams;
  const lecon = parseInt(searchParams?.lecon) || 1;
  const title = LEÇONS[lecon - 1] || "Formation Excel Avancé";
  
  return {
    title: `${title}`,
    description: `Découvrez la leçon ${lecon} : ${title} sur ExcelDuZero. Maîtrisez les outils complexes d'Excel.`,
    alternates: {
      canonical: `https://excelduzero.com/cours/avance?lecon=${lecon}`
    }
  };
}

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const lecon = parseInt(searchParams?.lecon) || 1;
  const title = LEÇONS[lecon - 1] || "Formation Excel Avancé";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": title,
    "description": `Leçon ${lecon} : ${title}`,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ExcelDuZero",
      "sameAs": "https://excelduzero.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Chargement de la leçon...</div>}>
        <CourseClient />
      </Suspense>
    </>
  );
}
