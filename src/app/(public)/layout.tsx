import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HomeHeader from '@/components/homePage/HomeHeader';
import HomeFooter from '@/components/homePage/HomeFooter'
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "react-hot-toast";



const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Food Tuck",
  description: "Generated by Farwa Kanwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <CartProvider>
          <HomeHeader/>
           {children}
          <HomeFooter/>
          <Toaster />
          </CartProvider>
      </body>
    </html>
  );
}
