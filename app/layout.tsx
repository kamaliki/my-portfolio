import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clive Kamaliki",
  description: "Clive's portfolio website",
  metadataBase: new URL("https://kamaliki.vercel.app/"),
  robots: "follow, index",
  authors: [{ name: "Clive Kamaliki" }],
  openGraph: {
    title: "Clive Kamaliki - Portfolio",
    description: "Clive's portfolio website",
    url: "https://kamaliki.vercel.app/",
    siteName: "Clive Kamaliki",
    images: [
      {
        url: "https://kamaliki.vercel.app/images/kamaliki.png",
        width: 800,
        height: 600,
        alt: "Clive Kamaliki",
      },
    ],
    type: "website",
    
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
