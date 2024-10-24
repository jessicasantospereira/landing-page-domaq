import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClienteProvider";

const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOMAQ",
  description: "Concerto e manutenção de refrigeração e lavadoras em geral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
