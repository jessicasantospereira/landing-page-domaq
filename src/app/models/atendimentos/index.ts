import { Cliente } from "../clientes";
import { Servico } from "../servicos";

export type TipoAtendimento = 'ORCAMENTO' | 'EXECUCAO';

export interface Atendimento {
  id: string;
  dataVisita: string;
  horaVisita: string;
  descricao: string;
  tipo: TipoAtendimento;
  cliente: Cliente;
  servico: Servico;
}