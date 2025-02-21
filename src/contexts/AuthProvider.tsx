import { createContext, useContext, useState } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    removeToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    const login = (token: string) => {
        setToken(token);
        localStorage.setItem("token", token);
    }

    const removeToken = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login, removeToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}