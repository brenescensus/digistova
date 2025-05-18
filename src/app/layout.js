import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digistova",
  description: " Unlock Digital Opportunities",

  openGraph: {
    title: "Digistova",
    description: "Unlocking Digital opportunities.",
    url: "https://digistova.vercel.app",
    
    images: [
      {
        url: "/favicon.ico",
        width: 500,
        height: 500,
        alt: "Digistova",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  icons:{
     icon:"/favicon.ico"
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
