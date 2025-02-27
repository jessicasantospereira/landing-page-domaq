import { Cliente, Page } from "@/app/models/clientes";
import { httpClient } from "./http";
import { AxiosResponse } from "axios";
import Cookie from "js-cookie";

const resourceURL: string = "/api/clientes";

export const useClienteService = () => {
    const token = Cookie.get("auth_token");
    const criarCliente = async (cliente: Cliente) => {
        try {
            const response: AxiosResponse = await httpClient.post<Cliente>(
                resourceURL, 
                cliente, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
        
            return response;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };
    
    const buscarClientes = async (filtro: string = "", page: number = 0, size: number = 3) => {
        try {
            const url: string = `${resourceURL}?filtro=${filtro}&page=${page}&size=${size}`;
            const response: AxiosResponse<Page<Cliente>> = await httpClient.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        
            return response;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    const updateCliente = async (cliente: Cliente) => {
        const url = `${resourceURL}/${cliente.id}`;
        const response: AxiosResponse = await httpClient.put<Cliente>(url, cliente,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
        });
        return response;
    };
    
    const buscarClientePorId = async (id: string): Promise<Cliente> => {
        const url: string = `${resourceURL}/${id}`;
        const response: AxiosResponse<Cliente> = await httpClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    };
    
    const inativarCliente = async (id: string) => {
        const url = `${resourceURL}/${id}`;
        const response: AxiosResponse = await httpClient.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
        return response;
    };
    
    return {
        criarCliente,
        buscarClientes,
        updateCliente,
        buscarClientePorId,
        inativarCliente

    };
};