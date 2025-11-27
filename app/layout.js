import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy Nothing™ – Achetez le luxe du vide",
  description: "Pour les riches qui ont tout, offrez-vous l’expérience ultime du vide. Achetez… strictement rien.",
  keywords: "rien, luxe, expérience, Buy Nothing, produit symbolique, conceptuel, riche",
  authors: [{ name: "Jordan FERY", url: "https://jordan-fery.vercel.app" }],
  openGraph: {
    title: "Buy Nothing™ – Achetez le luxe du vide",
    description: "Pour les riches qui ont tout, offrez-vous l’expérience ultime du vide.",
    url: "https://www.buynothing.com",
    siteName: "Buy Nothing™",
    images: [
      {
        url: "https://www.buynothing.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Nothing™ – Achetez le luxe du vide",
    description: "Pour les riches qui ont tout, offrez-vous l’expérience ultime du vide.",
    images: ["https://www.buynothing.com/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
