import { Atendimento } from "@/app/models/atendimentos";
import { httpClient } from "./http";
import { AxiosResponse } from "axios";
import Cookie from "js-cookie";

const resourceURL: string = "/api/atendimentos";

export const useAtendimentoService = () => {
    const token = Cookie.get("auth_token");
    const buscarAtendimentos = async () => {
        try {
            const response: AxiosResponse<Atendimento[]> = await httpClient.get(resourceURL, {
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
        buscarAtendimentos
    }
};