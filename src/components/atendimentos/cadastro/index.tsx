"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { TipoAtendimento } from "@/app/models/atendimentos";
import { useClienteService } from "@/services/clientes.service";
import { useServicosService } from "@/services/servicos.service";
import { Cliente, TipoCliente } from "@/app/models/clientes";
import { Servico } from "@/app/models/servicos";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";


const mockCustomers: Cliente[] = [
    {
        "id": "2",
        "nome": "Maria Elizabete dos Santos",
        "documento": "04150315833",
        "ativo": false,
        "email": "maria@teste.com",
        "telefone": "992587645",
        "tipo": TipoCliente.PESSOA_FISICA,
        "enderecos": [
            {
                "idEndereco": "2",
                "cep": "18055177",
                "logradouro": "Alameda das Catleas",
                "bairro": "Jardim Simus",
                "cidade": "Sorocaba",
                "estado": "SP",
                "complemento": "Edificio Delamar, apto 21",
                "numero": "800",
                "ativo": true,
                "tipoEndereco": "APARTAMENTO",
                "nomeEndereco": "minha casa"
            },
            {
                "idEndereco": "4",
                "cep": "08615070",
                "logradouro": "Rua Gato Cinzento",
                "bairro": "Vila Urupes",
                "cidade": "Suzano",
                "estado": "SP",
                "complemento": "Bloco 3 apto 208",
                "numero": "759",
                "ativo": true,
                "tipoEndereco": "APARTAMENTO",
                "nomeEndereco": "Casa da mamis"
            }
        ]
    }
];
export default function CriarAtendimento() {
  const [dataVisita, setDataVisita] = useState("");
  const [horaVisita, setHoraVisita] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState<TipoAtendimento>("ORCAMENTO");
  const [clientes, setClientes] = useState<Cliente[]>();
  const [servicos, setServicos] = useState<Servico[]>();
  const [servico, setServico] = useState<string>("");

  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const clienteService = useClienteService();
  const servicoService = useServicosService();

  useEffect(() => {
    clienteService.buscarClientes().then((response) => {
      if (response) {
        setClientes(response.data.content);
      }
    });
    servicoService.buscarServicos().then((response) => {
      if (response) {
        setServicos(response.data);
      }
    });
  }, []);
  console.log("SERVICO => ", servico)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success("O atendimento foi cadastrado com sucesso!");
    // Limpar campos após o cadastro
    setDataVisita("");
    setHoraVisita("");
    setDescricao("");
    setTipo("ORCAMENTO");
    setSelectedCustomer("");
    setSelectedAddress("");
    setSelectedService("");
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Cadastrar Atendimento</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dataVisita">Data da Visita</Label>
            <Input
              id="dataVisita"
              type="date"
              value={dataVisita}
              onChange={(e) => setDataVisita(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="horaVisita">Hora da Visita</Label>
            <Input
              id="horaVisita"
              type="time"
              value={horaVisita}
              onChange={(e) => setHoraVisita(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="tipo">Tipo de Atendimento</Label>
          <Select value={tipo} onValueChange={(value: TipoAtendimento) => setTipo(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ORCAMENTO">Orçamento</SelectItem>
              <SelectItem value="EXECUCAO">Execução</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
            <Label htmlFor="cliente">Cliente</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between" >
                    {selected ? clientes?.find((o) => o.nome === selected)?.nome : "Selecione uma opção"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                    <CommandInput placeholder="Digite para buscar..." onChangeCapture={(e) =>
                        clienteService.buscarClientes(e.target.value).then((response) => {
                            if (response) {
                                setClientes(response.data.content);
                            }
                        })
                    }
                    />
                        <CommandList className="w-full">
                            {clientes && clientes.map((option) => (
                            <CommandItem
                                key={option.id}
                                value={option.nome}
                                onSelect={(value) => {
                                    setSelected(value);
                                    setOpen(false);
                                }}
                                className="w-full"
                            >
                                {option.nome}
                            </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="servico">Serviço</Label>
          <Select onValueChange={(value) => {
                setServico(value)}
            } 
            value={servico} >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um serviço" />
            </SelectTrigger>
            <SelectContent>
              {servicos && servicos.map((service) => (
                <SelectItem key={Math.random()} value={service.id ?? ""}>
                  {service.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="descricao">Descrição</Label>
          <Textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Salvar Atendimento
        </Button>
      </form>
    </div>
  );
}