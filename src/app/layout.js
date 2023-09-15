import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TINORTGO QR CODE GENERATOR",
  description:
    "Experience the power of seamless QR code generation with the TINORTGO QR Code Generator. Easily create QR codes for websites, contact information, product details, and more. Effortlessly encode information into QR codes and enhance your connectivity with this user-friendly tool. Simplify sharing and access to digital content with the TINORTGO QR Code Generator today!",
  icons: {
    icon: "/LOGOQR.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID="G-T19PHNHKPP" />

      <head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-QKJ264BEE0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'G-QKJ264BEE0');
  </script>     */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404143094558564"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
