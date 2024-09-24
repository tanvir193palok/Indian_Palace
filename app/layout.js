import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Indian Palace",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
