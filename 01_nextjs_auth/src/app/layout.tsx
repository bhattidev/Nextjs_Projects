import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next js Authentication",
  description: "My first nextjs project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
