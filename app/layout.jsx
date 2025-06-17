import { Geist, Geist_Mono, Yeseva_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yesevaOne = Yeseva_One({
  variable: "--font-yesevaOne",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Uncommon Common",
  description: "Jewelry Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${yesevaOne.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
