import "~/styles/globals.css";
import { Bebas_Neue, Sometype_Mono } from "next/font/google";
import type { Viewport } from "next/types";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reacherkills.com"),
  title: {
    template: "%s - reacher kills",
    default: "reacher kills - solving crime and serving justice",
  },
  description:
    "A fan-made guide tracking every bad guy Jack Reacher takes down, episode by episode.",
  icons: {
    icon: [
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-apple-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "reacher kills",
    description:
      "A fan-made guide tracking every bad guy Jack Reacher takes down, episode by episode.",
    url: "https://www.reacherkills.com",
    siteName: "reacher kills",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.reacherkills.com/rk-og.jpg",
        width: 1200,
        height: 630,
        alt: "reacher kills",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const sometype = Sometype_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sometype",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${GeistSans.variable} ${bebas.variable} ${sometype.variable} min-h-screen bg-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
