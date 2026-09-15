import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://shellyn.my.id"),
  title: {
    default: "Shellyn Euriska Putri | Front-End Developer",
    template: "%s | Shellyn Euriska Putri",
  },
  description:
    "Portfolio of Shellyn Euriska Putri, an Informatics Engineering student and front-end developer building thoughtful, responsive digital experiences.",
  applicationName: "Shellyn Euriska Putri Portfolio",
  keywords: [
    "Shellyn Euriska Putri",
    "front-end developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "Informatics Engineering student",
    "portfolio",
  ],
  authors: [{ name: "Shellyn Euriska Putri" }],
  creator: "Shellyn Euriska Putri",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shellyn Euriska Putri Portfolio",
    title: "Shellyn Euriska Putri | Front-End Developer",
    description:
      "Explore Shellyn Euriska Putri's front-end projects, technical skills, experience, and academic background.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Shellyn Euriska Putri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shellyn Euriska Putri | Front-End Developer",
    description:
      "Front-end developer and Informatics Engineering student portfolio.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..24,300..500,0..1,0&display=swap" />
      </head>
      <body className="bg-canvas text-ink-primary font-sans text-[15px] leading-relaxed relative selection:bg-blush-soft selection:text-charcoal bg-grid-hairline overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
