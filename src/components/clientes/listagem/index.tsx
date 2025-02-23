"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
// Tipo para os dados do cliente
interface Customer {
  id: string;
  name: string;
  type: "physical" | "legal";
  document: string;
  email: string;
  phone: string;
}
// Dados mockados para exemplo
const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "João Silva",
    type: "physical",
    document: "123.456.789-00",
    email: "joao@email.com",
    phone: "(11) 98765-4321",
  },
  {
    id: "2",
    name: "Empresa ABC",
    type: "legal",
    document: "12.345.678/0001-90",
    email: "contato@empresaabc.com",
    phone: "(11) 3456-7890",
  },
];
export default function ListagemClientes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Clientes</h1>
        <Button asChild>
          <Link href="/clientes/cadastrar-cliente" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Link>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Documento</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>
                  {customer.type === "physical" ? "Pessoa Física" : "Pessoa Jurídica"}
                </TableCell>
                <TableCell>{customer.document}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}