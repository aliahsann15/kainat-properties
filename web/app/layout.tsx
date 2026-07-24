import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kainat Properties | Property & Investment Opportunities in Islamabad and Rawalpindi",
  description:
    "Explore property and investment opportunities across Islamabad and Rawalpindi with Kainat Properties. View project insights, site-visit updates and submit a structured enquiry for current prices and availability.",
  openGraph: {
    title: "Explore Property Opportunities with Kainat Properties",
    description:
      "Clear project information, on-ground insights and direct property guidance for buyers and investors across Islamabad and Rawalpindi.",
    url: "/",
    siteName: "Kainat Properties",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main className="">
          {children}
        </main>
        
      </body>
    </html>
  );
}
