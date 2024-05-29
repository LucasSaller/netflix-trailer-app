import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Trailer app",
  description:
    "This application allows users to view trailers for movies available on Netflix using the Netflix API. It offers an intuitive and user-friendly interface, enabling seamless browsing and quick access to the latest trailers. Designed to enhance the movie-watching experience, the app helps users discover new films and stay updated with upcoming releases on Netflix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
