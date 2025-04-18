import Header from "@/components/header";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "AI Recipe Generator | Instant Culinary Creations",
  description:
    "Generate unique and delicious recipes instantly with our AI-powered Recipe Generator. Enter any dish name, get ingredients, step-by-step instructions, and cooking tips. Perfect for meal planning and culinary inspiration.",
  authors: [{ name: "Furkan Gülabi", url: "https://furkangulabi.com" }],
  creator: "Furkan Gülabi",
  keywords: [
    "AI recipe generator",
    "recipe generator",
    "AI cooking assistant",
    "generate recipes",
    "meal planning AI",
    "cooking instructions",
    "ingredient list generator",
    "food AI",
    "culinary AI",
    "Next.js recipe app",
    "Vercel AI SDK",
  ],
  openGraph: {
    title: "AI Recipe Generator | Instant Culinary Creations",
    description:
      "Generate unique recipes instantly with our AI-powered tool. Get ingredients, instructions, and tips for any dish.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Recipe Generator | Instant Culinary Creations",
    description:
      "Generate unique recipes instantly with our AI-powered tool. Get ingredients, instructions, and tips for any dish.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const THEME_SCRIPT = `
  let theme = window.localStorage.getItem('theme') || 'system';
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (theme === 'dark' || (theme === 'system' && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.style.colorScheme = theme === 'dark' || (theme === 'system' && systemPrefersDark) ? 'dark' : 'light';
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
