import Header from "@/components/header";
import ModelSelector from "@/components/model-selector";
import ThemeSwitcher from "@/components/theme-switcher";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Recipe Generator",
  description: "Generate recipes using AI",
};

// Add script to prevent theme flashing
const THEME_SCRIPT = `
  let theme = window.localStorage.getItem('theme') || 'system';
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (theme === 'dark' || (theme === 'system' && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  // Prevent transition flash
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
