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
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Paginacao } from "./Paginacao";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ListagemClientes() {
  const service = useClienteService();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    service.buscarClientes().then((response) => {
      setClientes(response?.data.content);
      setTotalPages(response?.data.totalPages);
      setFirst(response?.data.first);
      setLast(response?.data.last);
    });
  }, []);

  const handleChangePage = (currentPage: number) => useMemo(() => {
    service.buscarClientes("", currentPage - 1).then((response) => {
      setClientes(response?.data.content);
      setTotalPages(response?.data.totalPages);
      setFirst(response?.data.first);
      setLast(response?.data.last);
    });
  }, [currentPage]);

  const handleFilter = () => {
    if(searchTerm !== "") {
      service.buscarClientes(searchTerm).then((response) => {
        setClientes(response?.data.content);
        setTotalPages(response?.data.totalPages);
        setFirst(response?.data.first);
        setLast(response?.data.last);
      });
      setCurrentPage(1);
    }else{
      service.buscarClientes().then((response) => {
        setClientes(response?.data.content);
        setTotalPages(response?.data.totalPages);
        setFirst(response?.data.first);
        setLast(response?.data.last);
      });
    }
  };

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
      <div className="flex items-center gap-2">
        <Input
          placeholder="Buscar cliente..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="max-w-sm"
        />
          <Button variant="outline" size="icon" onClick={handleFilter}>
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>

      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Status</TableHead>
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
                <TableCell>{customer.ativo === true ? "Ativo" : "Inativo" }</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.telefone}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" onClick={() => router.push(`clientes/cadastrar-cliente/${customer.id}`)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" 
                      onClick={() => 
                        service.inativarCliente(customer.id).then(() => {
                          toast.success("Cliente inativado com sucesso!");
                        })
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Paginacao 
        totalPages={totalPages} 
        first={first} 
        last={last} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onChangePage={handleChangePage(currentPage)}
      />
    </div>
  );
}