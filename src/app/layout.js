import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/components.css";
import "../styles/themes.css";
import ProtectedRoute from "../components/common/ProtectedRoute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ExcelDuZero",
  description: "L'excel pour tous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProtectedRoute>{children}</ProtectedRoute>
      </body>
    </html>
  );
}
