import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/card";

const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

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
      <body className={poppins.className}>
        <Header />
        <Card
          title="Bem-vindo à DOMAQ"
          description="Serviços de qualidade para sua casa ou empresa"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
