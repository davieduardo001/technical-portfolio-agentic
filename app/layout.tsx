import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Davi Eduardo | Technical Product Owner & DevOps Engineer",
  description:
    "Technical Product Owner with 3+ years delivering complex digital products in GovTech. AWS Certified. Available for remote work worldwide.",
  keywords: [
    "Product Owner",
    "DevOps Engineer",
    "Technical PM",
    "GovTech",
    "AWS",
    "Brasília",
    "Remote",
    "Freelance",
  ],
  authors: [{ name: "Davi Eduardo Costa Miranda" }],
  openGraph: {
    title: "Davi Eduardo | Technical Product Owner & DevOps Engineer",
    description:
      "I ship products and the infrastructure behind them. AWS Certified, CSPO, 3+ years GovTech, 1.2M+ users served.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
