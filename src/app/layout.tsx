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
  icons: {
    icon: [
      { url: '/lti-logo/favicon.ico', sizes: '32x32' },
      { url: '/lti-logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/lti-logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/lti-logo/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/lti-logo/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/lti-logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Xiaochuan Li - Ph.D. Student at CMU",
    description: "Ph.D. student at Carnegie Mellon University, research in Machine Learning and Natural Language Processing",
    url: "https://xiaochuanli.com",
    siteName: "Xiaochuan Li",
    type: "website",
    images: [
      {
        url: "https://xiaochuanli.com/self.png",
        width: 400,
        height: 400,
        alt: "Xiaochuan Li",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Xiaochuan Li - Ph.D. Student at CMU",
    description: "Ph.D. student at Carnegie Mellon University.",
    images: ["https://xiaochuanli.com/self.png"],
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
        <link rel="manifest" href="/lti-logo/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-lato antialiased`}>
        {children}
      </body>
    </html>
  );
}