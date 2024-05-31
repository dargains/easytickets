import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/context";
import "./globals.css";
import "./reset.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easytickets",
  description: "O Tinder dos Festivais 😂",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Header />
          <main>{children}</main>
        </AppWrapper>
      </body>
    </html>
  );
}
