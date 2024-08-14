import type { Metadata } from "next";

import "./globals.css";
import NavBar from "../components/nav/NavBar";



export const metadata: Metadata = {
  title: "SUPERMERCADO ANLAS",
  description: "Super Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="../assets/icons/logo-sa.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <NavBar />
       <section>
       {children}
       </section>
      </body>
    </html>
  );
}
