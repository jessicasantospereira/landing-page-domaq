"use client";
import { InputSimples } from "@/components/common/input"
import { useState } from "react";

export const FormCliente: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="flex flex-col items-center justify-center bg-slate-100 w-[900px] shadow-md p-6 rounded">
                <InputSimples
                    id="nome"
                    name="nome"
                    label="Nome"
                    onChange={(e) => setNome(e.target.value)}
                    className="p-2 mb-2 w-full"
                    columnClasses="w-full"
                />
                <InputSimples
                    id="email"
                    name="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 mb-2 w-full"
                    columnClasses="w-full"
                />
                <InputSimples
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                    onChange={(e) => setTelefone(e.target.value)}
                    className="p-2 mb-2 w-full"
                    columnClasses="w-full"
                />
                
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Salvar</button>
            </form>
        </div>
    )
}