import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TimberSouq - Premium Timber & Wood Products",
  description:
    "Reliable sourcing, quality assurance, and on-time delivery of timber and wood products across the region.",
  keywords:
    "timber, wood products, LVL board, plywood, construction materials, scaffolding",
  openGraph: {
    title: "TimberSouq - Premium Timber & Wood Products",
    description:
      "Reliable sourcing, quality assurance, and on-time delivery of timber and wood products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
