import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", style: "normal", subsets: ["latin"] });
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/clientes">Clientes</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/orcamentos">Orçamentos</a>
              </li>
              <li>
                <a href="/atendimentos">Atendimentos</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
