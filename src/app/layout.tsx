import { Metadata, Viewport } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RouteLoader } from '@/components/RouteLoader'
import TopLoaderWrapper from "@/components/top-loader-wrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emerge X",
  description: "Emerge-x Website",
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
  ],
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  minimumScale: 1,
  viewportFit: "cover",
  width: 'device-width'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <TopLoaderWrapper />
          <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="flex-1 overflow-hidden">
              <RouteLoader />
              {children}
            </div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
