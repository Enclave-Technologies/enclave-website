import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web & Mobile | Design & Development Studio in Hong Kong | Enclave",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
