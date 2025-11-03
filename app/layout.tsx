import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { title: "Lienzos Arts", description: "Camisetas 2D" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es">
<body className="min-h-screen bg-slate-50 text-slate-900">
{children}
</body>
</html>
);
}
