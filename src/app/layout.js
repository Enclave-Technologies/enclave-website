import { Albert_Sans, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });

export const metadata = {
  title: {
    template: "Website & App Development Studio in Hong Kong | Enclave Studios",
    default: "Enclave Studios - Web Design & Development Company Hong Kong",
  },
  description:
    "Enclave is a website and application prototyping and development studio in Hong Kong specialising in web and AI applications development. From ideation, prototyping to development and launch.",
};

export default function RootLayout({ children }) {
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
