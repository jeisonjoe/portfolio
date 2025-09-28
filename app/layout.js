import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Jeison Joe | Portfolio",
  description: "Frontend Engineer/Web Developer with 3 years of professional experience based in India.",
  robots: {
    index: true,
    follow: true
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${plusJakarta.variable} ${interSans.variable} ${plusJakarta.className} antialiased`}
      >
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
