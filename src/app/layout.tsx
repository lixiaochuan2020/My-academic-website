import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Xiaochuan Li - Personal Page",
  description: "Personal academic website of Xiaochuan Li, focusing on ML and NLP research",
  keywords: "Xiaochuan Li, Carnegie Mellon University, ML, NLP, Machine Learning, Natural Language Processing",
  authors: [{ name: "Xiaochuan Li" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-lato antialiased`}>
        {children}
      </body>
    </html>
  );
}