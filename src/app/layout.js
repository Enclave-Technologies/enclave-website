import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enclave - Web Design and Development",
  description:
    "Strategize, Design, Develop, and Scale with Enclave Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
