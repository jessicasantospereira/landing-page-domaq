export interface Cliente {
    id?: string;
    documento?: string;
    nome?: string;
    telefone?: string;
    email?: string;
    enderecos: Endereco[];
    ativo?: boolean;
    tipo?: TipoCliente;
}

export interface Endereco{
    idEndereco?: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    uf: string;
    cidade: string;
    tipo: string;
    status?: boolean;
    idCliente?: string;
    nomeEndereco?: string;
}

export enum TipoCliente {
    PESSOA_FISICA, PESSOA_JURIDICA
}