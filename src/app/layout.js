import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import { Container } from "@mui/material";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div className="min-h-screen">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
