import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Qorenth — Custom Full-Stack Development Agency: Next.js + Django Systems That Kill Spreadsheets",
  description:
    "Qorenth is a full-stack software development agency building custom revenue systems for SaaS and e-commerce brands. Next.js, Django, and PostgreSQL power dashboards, client portals, and automations that replace spreadsheet chaos and scale operations. Fixed-price from $25k—get your 24-hour roadmap.",
  authors: [{ name: "Jesus Mendoza, Qorenth Studio" }],
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title:
      "Qorenth — Custom Full-Stack Agency: Next.js + Django Revenue Systems",
    description:
      "Build bulletproof full-stack platforms that automate workflows and drive revenue. Fixed-price $25k–$80k. Live demo inside.",
    url: "https://www.qorenth.com/",
    type: "website",
    siteName: "Qorenth",
    locale: "en_US",
    images: [
      {
        url: "https://www.qorenth.com/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qorenth dashboard demo: Custom Next.js + Django revenue system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Qorenth — Custom Full-Stack Agency: Next.js + Django Revenue Systems",
    description:
      "Build bulletproof full-stack platforms that automate workflows and drive revenue. Fixed-price $25k–$80k. Live demo inside.",
    images: ["https://www.qorenth.com/og/og-image.png"],
    site: "@qorenth",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.qorenth.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.qorenth.com/#software",
    name: "Qorenth Revenue Systems",
    description:
      "Custom full-stack software development for SaaS and e-com: dashboards, portals, automations in Next.js + Django + PostgreSQL.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "25000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "Qorenth",
      url: "https://www.qorenth.com",
      logo: "https://www.qorenth.com/og/og-image.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        addressCountry: "MX",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "ink@qorenth.com",
      },
      sameAs: [
        "https://www.linkedin.com/in/jesus-mendoza-736a74282",
        "https://github.com/JesusMG24",
      ],
    },
    featureList: [
      "Custom Dashboards",
      "Client Portals",
      "Workflow Automations",
      "Stripe Integration",
    ],
  };

  return (
    <html lang="en" className="bg-ink text-marble font-sans">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
