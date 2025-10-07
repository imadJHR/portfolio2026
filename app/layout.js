import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

// --- SEO METADATA ---
// Replace "https://your-domain.ma" with your actual domain name
const siteUrl = "https://techdev.ma";

export const metadata = {
  // Set a base URL for all relative URLs in the metadata
  metadataBase: new URL(siteUrl),

  // Title: Use a template for consistent branding across all pages
  title: {
    default: "مطور مواقع في المغرب | Développeur Web au Maroc",
    template: `%s | Imad Johar`, // Page titles will look like "Services | Imad Johar"
  },

  description: "خبير في تصميم وتطوير المواقع الإلكترونية في المغرب. حلول احترافية وسريعة للأفراد والشركات. | Expert en création de sites web professionnels au Maroc. Solutions web performantes pour entreprises et particuliers.",
  keywords: [
    "développeur web maroc", "création de site web maroc", "freelance développeur maroc", "agence web casablanca", "site e-commerce maroc", "référencement SEO maroc", "développeur next.js maroc",
    "مطور مواقع المغرب", "تصميم مواقع في المغرب", "مبرمج مواقع المغرب", "فريلانسر المغرب", "شركة تصميم مواقع الدار البيضاء", "موقع تجارة إلكترونية المغرب", "تحسين محركات البحث"
  ],
  authors: [{ name: "Imad Johar", url: siteUrl }],
  creator: "@imad__johar",
  publisher: "Imad Johar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // --- Social Media & Open Graph (for Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: "مطور مواقع احترافي في المغرب | Développeur Web Professionnel Maroc",
    description: "تصميم وتطوير مواقع إلكترونية عصرية وسريعة في المغرب.",
    url: siteUrl,
    siteName: "Imad Johar | Développeur Web",
    // Make sure this image is 1200x630 pixels for best results
    images: [
      {
        url: "/og-image.png", // Place this image in your `public` folder
        width: 1200,
        height: 630,
        alt: "Développeur Web au Maroc | مطور مواقع في المغرب",
      },
    ],
    locale: "fr_MA", // Default locale
    alternateLocale: "ar_MA",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "مطور مواقع احترافي في المغرب | Développeur Web Professionnel Maroc",
    description: "تصميم وتطوير مواقع إلكترونية عصرية وسريعة في المغرب.",
    creator: "@imad__johar", // Your Twitter handle
    images: ["/twitter-image.png"], // Place this image (e.g., 1200x600px) in your `public` folder
  },
  
  // --- Icons ---
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // --- Multilingual SEO (Very Important!) ---
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-MA': `${siteUrl}/ar`,
      'fr-MA': `${siteUrl}/fr`,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}