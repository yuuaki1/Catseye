import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { auth } from "@/auth";

import AltRootLayout from "./(page)/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-cyberpurp bg-[url("https://i.pinimg.com/1200x/fe/06/7b/fe067ba785ea0b7f58a03d74b6998518.jpg")] bg-cover`}
      >
        {!session ? <>
        <Navbar />
        {children}
        </> : 
        <>
        <AltRootLayout>
          {children}
        </AltRootLayout>
        </>
        }
      </body>
    </html>
  );
}
