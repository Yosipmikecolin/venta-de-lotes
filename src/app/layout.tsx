import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lotes en villanueva casanare",
  description: "Lotes en villanueva casanare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <meta
          name="google-site-verification"
          content="L7WjdoK3wJ5-KMCZvAj7eI1cuuTpGdrq5xUQ5Njk3MI"
        />
      </Head>
      <SpeedInsights />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
