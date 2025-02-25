"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { EnderecoForm } from "./EnderecoForm";
import { toast } from "sonner";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClienteService } from "@/services/clientes.service";
import { Cliente, TipoCliente } from "@/app/models/clientes";
import { useParams } from "next/navigation";
import { Switch } from "@/components/ui/switch";


export const FormCliente: React.FC = () => {
  const service = useClienteService();
  const params = useParams();
  const id = params.id;
  const [customerData, setCustomerData] = useState<Cliente>({
      nome: "",
      tipo: TipoCliente.PESSOA_FISICA,
      documento: "",
      telefone: "",
      email: "",
      enderecos: [
        {
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
          tipo: "",
          status: true,
        },
      ],
  });
  useEffect(() => {
    if (id) {
      service.buscarClientePorId(id.toString()).then((response) => {
        setCustomerData(response);
      });
    }
  }, [id]); 
  const handleAddAddress = () => {
      setCustomerData((prev) => ({
        ...prev,
        enderecos: [
          ...prev.enderecos,
          {
              cep: "",
              logradouro: "",
              numero: "",
              complemento: "",
              bairro: "",
              cidade: "",
              estado: "",
              tipoEndereco: "",
              ativo: true,
          },
        ],
      }));
  };
  const handleRemoveAddress = (index: number) => {
    setCustomerData((prev) => ({
      ...prev,
      enderecos: prev.enderecos.filter((_, i) => i !== index),
    }));
  };
  const handleAddressChange = (index: number, field: string, value: string) => {
    setCustomerData((prev) => ({
      ...prev,
      enderecos: prev.enderecos.map((endereco, i) =>
        i === index ? { ...endereco, [field]: value } : endereco
      ),
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(id){
      var response = await service.updateCliente(customerData);
      if(response?.status === 200) toast.success("Cliente atualizado com sucesso!");
      if(response?.status === 400) toast.error("Erro ao atualizar cliente!");
      return;
    }else{
      var response = await service.criarCliente(customerData);
      if(response?.status === 201) toast.success("Cliente cadastrado com sucesso!");
      if(response?.status === 400) toast.error("Erro ao cadastrar cliente!");
    }
  };
  console.log(customerData);  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <Card className="animate-in">
        <CardHeader>
          <CardTitle>Cadastro de cliente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={customerData.nome}
                onChange={(e) =>
                  setCustomerData((prev) => ({ ...prev, nome: e.target.value }))
                }
                placeholder="Digite o nome"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Tipo</Label>
              <RadioGroup
                value={customerData.tipo as unknown as TipoCliente}
                onValueChange={(value: string) =>
                  setCustomerData((prev) => ({ ...prev, tipo: value as unknown as TipoCliente }))
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TipoCliente.PESSOA_FISICA.toString()} id="physical" />
                  <Label htmlFor="physical">Pessoa Física</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={TipoCliente.PESSOA_JURIDICA.toString()} id="legal" />
                  <Label htmlFor="legal">Pessoa Jurídica</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="documento">Documento</Label>
              <Input
                id="documento"
                value={customerData.documento}
                onChange={(e) =>
                  setCustomerData((prev) => ({ ...prev, documento: e.target.value }))
                }
                placeholder="Digite o número do documento"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={customerData.telefone}
                onChange={(e) =>
                  setCustomerData((prev) => ({ ...prev, telefone: e.target.value }))
                }
                placeholder="Digite o telefone de contato"
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={customerData.email}
                onChange={(e) =>
                  setCustomerData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Digite o email"
                required
              />
            </div>
          </div>
          {id &&  
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center justify-between">
              <Label>Status</Label>
              <div className="flex items-center space-x-2">
                <Switch
                  onCheckedChange={(checked) =>
                    setCustomerData((prev) => ({ ...prev, ativo: checked }))
                  }
                  checked={customerData?.ativo}
                  value={customerData?.ativo}
                />
                <span className="text-sm text-muted-foreground">Ativo</span>
              </div>
            </div>
          </div>}
        </CardContent>
      </Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Endereços</h3>
          <Button
            type="button"
            variant="outline"
            onClick={handleAddAddress}
            className="flex items-center space-x-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Endereço</span>
          </Button>
        </div>
        <div className="space-y-4">
          {customerData.enderecos.map((_, index) => (
            <EnderecoForm
              key={index}
              index={index}
              onRemove={() => handleRemoveAddress(index)}
              onChange={handleAddressChange}
              existente={customerData.enderecos[index]}
            />
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full">
        Salvar cliente
      </Button>
    </form>
  );
}