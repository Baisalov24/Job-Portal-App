"use client";
import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { SessionProvider } from "next-auth/react"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider> 
          <Header />
          <main className="container mx-auto p-6">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
