import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/components.css";
import "../styles/themes.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../components/common/ProtectedRoute";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

// Configuration FontAwesome pour Next.js (évite les bugs d'affichage lors de la navigation)
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    template: '%s | ExcelDuZero',
    default: 'ExcelDuZero - Maîtrisez Excel de A à Z',
  },
  description: "Formations interactives Excel pour tous les niveaux. Passez de débutant à expert avec nos cours pratiques, quiz et vidéos.",
  keywords: ["Excel", "formation", "cours", "débutant", "expert", "tableur", "Microsoft Excel", "apprendre Excel"],
  authors: [{ name: "MaxSolving", url: "https://maxsolving.com" }],
  alternates: {
    canonical: "https://excelduzero.com",
  },
  verification: {
    google: "Ee2TVe6YVv6xUuzTHodcVN95LiHAI30wIdtwP1tduC8",
  },
  openGraph: {
    title: "ExcelDuZero - Maîtrisez Excel de A à Z",
    description: "Formations interactives Excel pour tous les niveaux. Passez de débutant à expert avec nos cours pratiques.",
    url: "https://excelduzero.com",
    siteName: "ExcelDuZero",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Import Google Fonts Inter via next/font/google (App Router) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-M2QD34HNW2`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M2QD34HNW2');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "ExcelDuZero",
              url: "https://excelduzero.com",
              logo: "https://excelduzero.com/icon-512x512.png",
              description: "Plateforme d'apprentissage en ligne dédiée à la maîtrise de Microsoft Excel."
            }),
          }}
        />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ProtectedRoute>{children}</ProtectedRoute>
        <ScrollToTopButton />
        <ToastContainer position="bottom-right" autoClose={5000} />
      </body>
    </html>
  );
}
