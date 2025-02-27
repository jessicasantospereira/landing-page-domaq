"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Servico } from "@/app/models/servicos";
import { useServicosService } from "@/services/servicos.service";

export const ListagemServicos:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [valorPadrao, setValorPadrao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [servicos, setServicos] = useState<Servico[]>();

  const service = useServicosService();

  useEffect(() => {
    service.buscarServicos().then((response) => {
      if (response) {
        setServicos(response.data);
      }
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const servico: Servico = {
      nome,
      valorPadrao: parseFloat(valorPadrao),
      descricao,
    };
    service.cadastrar(servico);
    toast.success( "O serviço foi cadastrado com sucesso!");
    setIsOpen(false);
    window.location.reload();
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Serviços</h1>
        <Button onClick={() => setIsOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Serviço
        </Button>
      </div>
      <div className="rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="[&_th]:px-6 [&_th]:py-3 [&_th]:text-left">
                <th>Nome</th>
                <th>Valor Padrão</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-6 [&_td]:py-3">
              {servicos && servicos.map((service) => (
                <tr key={service.id} className="border-t">
                  <td>{service.nome}</td>
                  <td>R$ {service.valorPadrao.toFixed(2)}</td>
                  <td>{service.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cadastrar Serviço</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="valorPadrao">Valor Padrão</Label>
              <Input
                id="valorPadrao"
                type="number"
                min="0"
                step="0.01"
                value={valorPadrao}
                onChange={(e) => setValorPadrao(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Salvar
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </div>
  );
}