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
import { useServicosService } from "@/services/servicos.service";
import { Servico } from "@/app/models/servicos";
import { useClienteService } from "@/services/clientes.service";
import { Cliente } from "@/app/models/clientes";
import { Textarea } from "@/components/ui/textarea";

export default function CriarAtendimento() {
  const [dataVisita, setDataVisita] = useState("");
  const [horaVisita, setHoraVisita] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState<TipoAtendimento>("ORCAMENTO");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);

const servicoService = useServicosService();
const clienteService = useClienteService();

useEffect(() => {
    const fetchServicos = async () => {
            try {
                const response = await servicoService.buscarServicos();
                setServicos(response?.data as Servico[]);
            } catch (error) {
                console.error("Erro ao buscar serviços:", error);
            }
        };
    const fetchClientes = async () => {
        try {
            const response = await clienteService.buscarClientes();
            setClientes(response?.data.content as Cliente[]);
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
        }
    };
    fetchServicos();
    fetchClientes();
    
}, []);
  const selectedCustomerData = clientes.find(
    (customer) => customer.nome === selectedCustomer
  );
  console.log(selectedCustomerData);
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
          <Select value={selectedCustomer} onValueChange={(value) => {
            setSelectedCustomer(value);
            setSelectedAddress("");
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um cliente" />
            </SelectTrigger>
            <SelectContent>
              {clientes.length > 0 ? ( clientes.map((customer) => (
                <SelectItem key={customer.id} value={customer.nome}>
                  {customer.nome}
                </SelectItem>
              )) ) : (
                <p>Carregando clientes...</p>
              )}
            </SelectContent>
          </Select>
        </div>
        {selectedCustomerData && selectedCustomerData.enderecos.length > 0 && (
          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Select value={selectedAddress} onValueChange={setSelectedAddress}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um endereço" />
              </SelectTrigger>
              <SelectContent>
                {selectedCustomerData.enderecos.map((address) => (
                  <SelectItem key={address.idEndereco} value={address.cep}>
                    {`${address.logradouro}, ${address.numero} - ${address.bairro}, ${address.cidade}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="servico">Serviço</Label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um serviço" />
            </SelectTrigger>
            <SelectContent>
              {servicos.length > 0 ? (servicos.map((service) => (
                <SelectItem key={service.id} value={service.nome}>
                  {service.nome}
                </SelectItem>
                ))) : (
                    <p>Carregando serviços...</p>
                  )}
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