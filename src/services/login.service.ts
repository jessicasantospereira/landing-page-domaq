import { httpClient } from "./http";

export interface Token {
    token: string;
}

const resourceURL: string = "/api/auth/login";

export const login = async (login: string, senha: string): Promise<Token> => {
    const response = await httpClient.post<Token>(resourceURL, { login, senha }, {withCredentials: true}); 
    if (response.status !== 200) {
        throw new Error("Erro ao autenticar");
    }
    return response.data;
}
