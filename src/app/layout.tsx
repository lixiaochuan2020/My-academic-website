import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Xiaochuan Li - Ph.D. Student at Carnegie Mellon University",
  description: "Xiaochuan Li is a Ph.D. student at Carnegie Mellon University advised by Prof. Chenyan Xiong. Research interests in Machine Learning and Natural Language Processing, with focus on data-centric large language models.",
  keywords: "Xiaochuan Li, Carnegie Mellon University, CMU, ML, NLP, Machine Learning, Natural Language Processing, PhD student, Chenyan Xiong",
  authors: [{ name: "Xiaochuan Li" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Xiaochuan Li - Ph.D. Student at CMU",
    description: "Ph.D. student at Carnegie Mellon University, research in Machine Learning and Natural Language Processing",
    url: "https://xiaochuanli.com",
    siteName: "Xiaochuan Li",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xiaochuan Li - Ph.D. Student at CMU",
    description: "Ph.D. student at Carnegie Mellon University, research in ML and NLP",
  },
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