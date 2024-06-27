import "./globals.css";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import AppProvider from "@/components/AppProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "NFT Marketplace - Mobius",
  description: "Mobius NFT Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className + " bg-black text-white overflow-x-hidden"}
      >
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
