export interface Page<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

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
    estado: string;
    cidade: string;
    tipoEndereco: string;
    ativo?: boolean;
    idCliente?: string;
    nomeEndereco?: string;
}

export enum TipoCliente {
    PESSOA_FISICA, PESSOA_JURIDICA
}