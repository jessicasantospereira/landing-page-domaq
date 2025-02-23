import { Cliente } from "@/app/models/clientes";
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
    
    // const updateCliente = async (cliente: any) => {
    //     const response = await fetch(`${resourceURL}/${cliente.id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(cliente),
    //     });
    //     return response.json();
    // };
    
    // const deleteCliente = async (id: string) => {
    //     const response = await fetch(`${resourceURL}/${id}`, {
    //     method: "DELETE",
    //     });
    //     return response.json();
    // };
    
    return {
        criarCliente
    };
};