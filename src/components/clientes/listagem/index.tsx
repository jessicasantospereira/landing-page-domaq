"use client";
import { Cliente } from "@/app/models/clientes";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useClienteService } from "@/services/clientes.service";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListagemClientes() {
  const { buscarClientes } = useClienteService();
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    buscarClientes().then((response) => {
      setClientes(response.data);
    });
  }, []);
  console.log(clientes);
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
            {clientes.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.nome}</TableCell>
                <TableCell>
                  {customer.tipo === "PESSOA_FISICA" ? "Pessoa Física" : "Pessoa Jurídica"}
                </TableCell>
                <TableCell>{customer.documento}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.telefone}</TableCell>
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