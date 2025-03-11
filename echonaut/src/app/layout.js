import { Geist, Geist_Mono, Rubik } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const ZZZFont = localFont({ 
  src: '../../public/fonts/印品鸿蒙体.ttf'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "INTER-KNOT",
  description: "Welcome to New Eridu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${ZZZFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
