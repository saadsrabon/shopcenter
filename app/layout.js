import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lws Shop Home",
  description: "The best place to buy your favorite products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <div className="bg-white"> 
        <NavBar/>
        </div>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
