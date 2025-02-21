"use client";
import { useState } from "react";
import { InputSimples } from "../common/input"
import { login } from "@/services/login.service";
import { useRouter } from "next/navigation";

const FormLogin:React.FC = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = await login(usuario, senha);
    if(token) router.push('/clientes');
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-[340px] w-[300px] bg-slate-300 shadow-md p-6 rounded">
       <InputSimples 
          id="usuario" 
          name="usuario" 
          label="Usuário" 
          onChange={(e) => setUsuario(e.target.value) }
          className="p-2 mb-2"
        />
       <InputSimples 
          id="password" 
          tipo="password" 
          name="senha" 
          label="Senha" 
          onChange={(e)=> setSenha(e.target.value)} 
          className="p-2 mb-2"
        />
       <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Entrar</button>
    </form>
    </div>
  )
}

export default FormLogin