import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booking",
  description: "Book the best luxurious hotels available worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white`}
        suppressHydrationWarning={true}
      >
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
