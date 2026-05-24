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
