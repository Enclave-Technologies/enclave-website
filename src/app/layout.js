import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { url } from "inspector";
import Script from "next/script";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Enclave",
    default: "Enclave Studios: Growing Your Digital Presence",
  },
  description:
    "We are a technology studio based in Hong Kong. We help businesses launch and grow their digital presence with website development, search engine opimisation (SEO) and digital marketing services.",
  keywords:
    "tech, design, web development, website design, website development, app development, digital marketing, SEO, growth marketing",
  favicon: "/favicon.ico",
  url: "https://www.enclave.live",
  type: "website",
  image: "/enclave-logo-filled.png",
  site_name: "Enclave Studios",
  creator: "@enclave_studios_",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>{metadata.title}</title>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.favicon} />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:site_name" content={metadata.site_name} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.creator} />
        <meta name="twitter:creator" content={metadata.creator} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Start --- Ahrefs Analytics --- Start */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8Th8f99w5qmawU/EcE+w+Q"
          defer="true"
        />
        {/* End --- Ahrefs Analytics --- End */}
      </Head>
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
