import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "fastfood menu",
  description: "this site contain menu of delicious food ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-danaNormal">
        <header>
          <Hero />
        </header>
        {children}
      </body>
    </html>
  );
}
