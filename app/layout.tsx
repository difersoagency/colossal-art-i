import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CV. Colossal Art Indonasia - General Contractor",
  description: "CV. Colossal Art Indonesia adalah General Contractor terpercaya yang menawarkan layanan konstruksi berkualitas tinggi untuk memenuhi kebutuhan proyek Anda. Kami mengutamakan inovasi, profesionalisme, dan kepuasan pelanggan.",
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
              <Header />
        {children}
        
      <Footer/>
      </body>
    </html>
  );
}
