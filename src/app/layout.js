import { Albert_Sans, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Clarity from "@microsoft/clarity";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });
const projectId = "snwsvgucjg";

export const metadata = {
  title:  "Enclave Studios - Curating Premium Web Experiences",
  description: "Enclave Studios is a digital studio helping startups and growth stage companies craft unique digital experiences to engage their audiences.",
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
      <GoogleAnalytics gaId="G-80NXJV4T5M"/>
      <GoogleAnalytics gaId="G-HX4W3X4GRB"/>
      <GoogleTagManager gtmId="GTM-WL5WBF6R"/>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL5WBF6R" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${projectId}");
          `}
        </Script>
      </body>
    </html>
  );
}
