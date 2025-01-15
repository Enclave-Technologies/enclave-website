import { Onest } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { MdWhatsapp } from "react-icons/md";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Enclave",
    default: "App Development Studio | Hong Kong",
  },
  description:
    "Enclave is a fast-growing web & mobile applications development studio headquartered in Hong Kong. We specialize at developing scalable, high-quality web & mobile applications quickly without breaking the bank.",
  keywords:
    "tech, design, web development, website design, website development, app development, digital marketing, SEO, growth marketing",
  favicon: "/favicon.ico",
  url: "https://www.enclave.live",
  type: "website",
  site_name: "Enclave Studios",
  creator: "@enclave_studios_",
  og_image: "/og-image.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        {/* Basic Meta Tags */}
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metadata.favicon} />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.og_image} />
        <meta property="og:site_name" content={metadata.site_name} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.creator} />
        <meta name="twitter:creator" content={metadata.creator} />
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.og_image} />

        {/* Start --- Ahrefs Analytics --- Start */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8Th8f99w5qmawU/EcE+w+Q"
          defer="true"
        />
        {/* End --- Ahrefs Analytics --- End */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11516049939"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "AW-11516049939");
          `,
          }}
        />

        {/* Event snippet for Page view conversion page  */}
        <script>{``}</script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            gtag("event", "conversion", {
              send_to: "AW-11516049939/WWtmCKeh4vsZEJP0o_Mq",
            })
          `,
          }}
        />
      </head>
      <body className={`${onest.className} relative`}>
        <Navbar />
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
