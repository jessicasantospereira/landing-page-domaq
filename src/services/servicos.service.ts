import { Servico } from "@/app/models/servicos";
import { httpClient } from "./http";
import { AxiosResponse } from "axios";
import Cookie from "js-cookie";

const resourceURL: string = "/api/servicos";

export const useServicosService = () => {
    const token = Cookie.get("auth_token");

    const buscarServicos = async () => {
        try {
            const response: AxiosResponse<Servico[]> = await httpClient.get(resourceURL, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    const cadastrar = async (servico: Servico) => {
        try {
            const response: AxiosResponse = await httpClient.post(resourceURL, servico, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response;
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    return {
        buscarServicos,
        cadastrar
    }
}