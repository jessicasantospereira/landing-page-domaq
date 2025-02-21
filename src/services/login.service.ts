import Cookies from "js-cookie";

export interface Token {
    token: string;
}


export async function login(login: string, senha: string) {
    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, senha }),
        });

        if (!response.ok) {
            throw new Error("Erro ao autenticar");
        }

        const data = await response.json(); 
        const token = data.token;

        // Salvar token no cookie (frontend)
        Cookies.set("auth_token", token, {
            expires: 1, // Expira em 1 dia
            secure: false, // 🔹 Defina `true` se estiver usando HTTPS
            sameSite: "Strict",
        });

        console.log("Token salvo no cookie!");

    } catch (error) {
        console.error("Erro no login:", error);
    }
}
