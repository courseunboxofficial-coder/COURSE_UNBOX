import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { FloatingCTAs } from "@/components/landingPage/FloatingCTAs";
import "../globals.css";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Curator AI - Mastery for ₹99",
  description: "Master the Future of Digital Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${manrope.variable} h-full antialiased font-body light`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container"
        suppressHydrationWarning
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        {/* <Navbar /> */}
        <CheckoutProvider>
          {children}
          <FloatingCTAs />
        </CheckoutProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
