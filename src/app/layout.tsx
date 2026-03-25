import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const oliveCitrus = localFont({
  src: [
    {
      path: "../../public/fonts/Olive-Citrus/Olive Citrus.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-olive-citrus",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://donab.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dona B | Decoração e Organização para sua Casa",
    template: "%s | Dona B",
  },
  description:
    "Descubra vasos, itens de decoração e organização para transformar sua casa. Design minimalista e funcional para o dia a dia.",
  keywords: [
    "decoração casa",
    "vasos decorativos",
    "organização",
    "home decor",
    "setup gamer",
    "minimalista",
    "Dona B",
  ],
  authors: [{ name: "Dona B" }],
  creator: "Dona B",
  publisher: "Dona B",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Dona B",
    title: "Dona B | Decoração e Organização para sua Casa",
    description:
      "Design minimalista e funcional para transformar sua casa e seu setup.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dona B - Decoração e Organização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dona B | Decoração e Organização para sua Casa",
    description: "Design minimalista e funcional para transformar sua casa.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${oliveCitrus.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F2] text-[#2B2B2B]" suppressHydrationWarning>
        <JsonLd schema={organizationSchema()} />
        <JsonLd schema={websiteSchema()} />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C8B6E2] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Ir para conteúdo principal
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
