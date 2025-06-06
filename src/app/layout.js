import { Albert_Sans, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Clarity from "@microsoft/clarity";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });
const projectId = "r10gunijpv";

export const metadata = {
  title:  "Home | Enclave Studios",
  description: "Enclave Studios is a growth marketing agency helping startups and businesses grow their online visibility with unique branding and marketing solutions.",
  keywords: "website design, website development, web-app development, mobile app development, search engine optimisation, seo, search experience optimisation, sxo, branding,",
  favicon: "/favicon.ico",
  url: 'www.enclave-studios.com'
};

export default function RootLayout({ children }) {
  Clarity.init(projectId);
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className={`${onest.variable} ${albert.variable}`}
    >
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.favicon} />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/logo-dark.svg" />
        <meta name="twitter:card" content="/logo-dark.svg" />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-80NXJV4T5M"
        ></Script>

        <Script id="google-analytics">
          {`
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-80NXJV4T5M');
  `}
        </Script>
        {children}
        {/* <div
          className=".whatsapp-outer-container"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div clas>
            <MdWhatsapp size={36} />
          </div>
        </div> */}
      </body>
    </html>
  );
}
