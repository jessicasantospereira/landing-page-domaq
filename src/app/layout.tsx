import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import ClientWrapper from "./ClienteWrapper";

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
        <TooltipProvider>
          <Toaster />
          <SidebarProvider>
            <ClientWrapper>
              {children}
            </ClientWrapper>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
