import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/services/provider/AppProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Morning star",
  description: "Affiliate Central Platform | Lion Share",
};

const ProductFont = localFont({
  src: [
    {
      path: "../assets/font/Product Sans Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Product Sans Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <AppProvider>
        <body className={ProductFont.className}>
          <ToastContainer />
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
