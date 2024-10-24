"use client";
import { useLogin } from "@/concepts/Login/hooks/useLogin";
import { useCallback, useState } from "react";
import { useLoginContext } from "../../contexts/LoginContext";

const FormLogin: React.FC = () => {
  const mutation = useLogin();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { token } = useLoginContext();
  console.log(token);

  const handleSubmit = useCallback(async () => {
    (await mutation).mutate({ login: usuario, senha });
  }, [mutation, usuario, senha]);
  return (
    <form
      className="flex flex-col m-8"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label>Usuário</label>
      <input
        type="text"
        placeholder="Digite seu usuário"
        className="border-2 border-gray-300 p-2 rounded-md"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        className="border-2 border-gray-300 p-2 rounded-md"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormLogin;
