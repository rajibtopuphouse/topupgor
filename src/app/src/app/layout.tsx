import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Fire Top-Up",
  description: "সরাসরি ডায়মন্ড কিনুন",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
