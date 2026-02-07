import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "../ClientProvider";



export const metadata: Metadata = {
  title: "Nextjs Auth Project",
  description: "this is my first full stack project in nextjs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>

      </body>
    </html>
  );
}
