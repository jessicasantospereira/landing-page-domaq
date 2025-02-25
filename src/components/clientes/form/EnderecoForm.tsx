import { Endereco } from "@/app/models/clientes";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface EnderecoFormProps {
    index: number;
    onRemove: () => void;
    onChange: (index: number, field: string, value: string) => void;
    existente?: Endereco;
}

export const EnderecoForm: React.FC<EnderecoFormProps> = ({index, onChange, onRemove, existente}) => {
    return(
        <Card className="w-full animate-in">
            <CardContent className="pt-6">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor={`cep-${index}`}>CEP</Label>
            <Input
              id={`cep-${index}`}
              placeholder="Digite o CEP"
              onChange={(e) => onChange(index, "cep", e.target.value)}
              value={existente?.cep}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`logradouro-${index}`}>Logradouro</Label>
            <Input
              id={`logradouro-${index}`}
              placeholder="Digite o logradouro"
              onChange={(e) => onChange(index, "logradouro", e.target.value)}
              value={existente?.logradouro}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`numero-${index}`}>Número</Label>
            <Input
              id={`numero-${index}`}
              placeholder="Digite o número"
              onChange={(e) => onChange(index, "numero", e.target.value)}
              value={existente?.numero}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`complemento-${index}`}>Complemento</Label>
            <Input
              id={`complemento-${index}`}
              placeholder="Digite o complemento"
              onChange={(e) => onChange(index, "complemento", e.target.value)}
              value={existente?.complemento}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`bairro-${index}`}>Bairro</Label>
            <Input
              id={`bairro-${index}`}
              placeholder="Digite o bairro"
              onChange={(e) => onChange(index, "bairro", e.target.value)}
              value={existente?.bairro}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`cidade-${index}`}>Cidade</Label>
            <Input
              id={`cidade-${index}`}
              placeholder="Digite a cidade"
              onChange={(e) => onChange(index, "cidade", e.target.value)}
              value={existente?.cidade}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`estado-${index}`}>Estado</Label>
            <Input
              id={`estado-${index}`}
              placeholder="Digite o estado"
              onChange={(e) => onChange(index, "estado", e.target.value)}
              value={existente?.estado}
            />
          </div>
          <div className="space-y-2">
            <Label>Tipo de endereço</Label>
            <Select onValueChange={(value) => onChange(index, "tipo", value)} value={existente?.tipoEndereco}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CASA">Residencial</SelectItem>
                <SelectItem value="COMERCIAL" >Comercial</SelectItem>
                <SelectItem value="APARTAMENTO" >Apartamento</SelectItem>
                <SelectItem value="SITIO">Sitio</SelectItem>
                <SelectItem value="CHACARA">Chácara</SelectItem>
                <SelectItem value="OUTROS">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center justify-between">
              <Label>Status</Label>
              <div className="flex items-center space-x-2">
                <Switch
                  onCheckedChange={(checked) =>
                    onChange(index, "status", checked ? "ativo" : "inativo")
                  }
                  checked={existente?.ativo}
                  value={existente?.ativo}
                />
                <span className="text-sm text-muted-foreground">Ativo</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onRemove}
          className="mt-4 text-sm text-destructive hover:text-destructive/80 transition-colors"
        >
          Remove endereço
        </button>
            </CardContent>
        </Card>
    )
};