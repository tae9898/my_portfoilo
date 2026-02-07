import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devtae.xyz"),
  title: {
    default: "TAE | Linux Middleware & Embedded Systems Developer",
    template: "%s | TAE"
  },
  description: "Portfolio of TAE, a Linux Middleware and Embedded Systems Developer specializing in C, C++, Python, and Broadcom SDK development.",
  keywords: ["Linux", "Embedded Systems", "Middleware", "C", "C++", "Python", "Broadcom SDK", "Developer", "Portfolio"],
  authors: [{ name: "TAE" }],
  openGraph: {
    title: "TAE | Linux Middleware & Embedded Systems Developer",
    description: "Portfolio of TAE, a Linux Middleware and Embedded Systems Developer specializing in C, C++, Python, and Broadcom SDK development.",
    type: "website",
    url: "https://devtae.xyz/",
    siteName: "TAE Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAE - Linux Middleware & Embedded Systems Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAE | Linux Middleware & Embedded Systems Developer",
    description: "Portfolio of TAE, a Linux Middleware and Embedded Systems Developer specializing in C, C++, Python, and Broadcom SDK development.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "TAE",
              "url": "https://devtae.xyz/",
              "sameAs": [
                "https://github.com/tae9898",
                "https://tae98.xyz"
              ],
              "jobTitle": "Linux Middleware & Embedded Systems Developer",
              " knowsAbout": [
                "Linux",
                "Embedded Systems",
                "C",
                "C++",
                "Python",
                "Broadcom SDK",
                "Middleware Development",
                "Systems Programming"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
