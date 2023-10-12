import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking",
  description: "Book the best luxurious hotels available worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
