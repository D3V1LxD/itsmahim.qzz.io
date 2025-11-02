import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Mahim Khan - Naval Architecture & Offshore Engineering",
  description: "Portfolio of Md. Mahim Khan - Aspiring Naval Architect and Offshore Engineer",
  keywords: "Naval Architecture, Offshore Engineering, Ship Design, ANSYS, AutoCAD, SolidWorks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
