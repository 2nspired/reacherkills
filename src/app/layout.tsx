import "~/styles/globals.css";
import { Bebas_Neue, Sometype_Mono } from "next/font/google";
import type { Viewport } from "next/types";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - reacher kills",
    default: "reacher kills - solving crime and street justice",
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
        className={`${GeistSans.variable} ${bebas.variable} ${sometype.variable} h-full font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
