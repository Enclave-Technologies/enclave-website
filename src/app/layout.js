import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Enclave",
    default: "Enclave Studios: Launch & Grow Your Digital Presence",
  },
  description:
    "We are a technology studio based in Hong Kong. We help businesses launch and grow their digital presence with website development, search engine opimisation (SEO) and digital marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="keywords"
          content="Website, Design, Development, SEO, Digital, Marketing, Search, Engine, Optimisation"
        />
        <meta
          property="description"
          name="description"
          content={metadata.description}
        />
        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:url" name="og:url" content="https://enclave.live" />
        <meta property="og:title" name="og:title" content={metadata.title} />
        <meta
          property="og:description"
          name="og:description"
          content={metadata.description}
        />
        <meta
          property="og:image"
          name="og:image"
          content="/enclave-logo-filled.png"
        />
        <meta
          property="twitter:card"
          name="twitter:card"
          content="/enclave-logo-filled.png"
        />
        <meta
          property="twitter:title"
          name="twitter:title"
          content="Enclave Studios: Launch & Grow Your Digital Presence"
        />
        <meta
          property="twitter:description"
          name="twitter:description"
          content={metadata.description}
        />
        <meta
          property="og:site_name"
          name="og:site_name"
          content="Enclave Studios"
        />
        <meta property="og:locale" name="og:locale" content="en_GB" />
        <meta property="author" name="author" content="Enclave Studios" />
        <link rel="canonical" href="www.enclave.live" />
        {/* Start --- Ahrefs Analytics --- Start */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8Th8f99w5qmawU/EcE+w+Q"
          defer="true"
        ></script>
        {/* End --- Ahrefs Analytics --- End */}
      </Head>
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
