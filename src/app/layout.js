import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Enclave",
    default: "Enclave Studioes",
  },
  description:
    "We are a technology studio based in Hong Kong. We help businesses with web design and development, mobile app design and development and growth hacking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/logo-dark.svg" />
        <meta name="twitter:card" content="/logo-dark.svg" />
      </Head>
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
