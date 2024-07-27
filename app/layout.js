import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head"; // Import Head from next/head

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags for SEO here */}
      </Head>
      <body
        className={` ${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-4 md:px-8 py-6 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
