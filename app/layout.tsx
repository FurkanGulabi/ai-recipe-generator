import ThemeSwitcher from "@/components/theme-switcher";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Recipe Generator",
  description: "Generate recipes using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <>
          <ThemeSwitcher />
          {children}
        </>
      </body>
    </html>
  );
}
