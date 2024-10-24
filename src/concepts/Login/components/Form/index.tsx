import { fazerLogin } from "@/server/hooks/useApi";

const FormLogin: React.FC = () => {
  return (
    <form className="flex flex-col m-8" action={fazerLogin}>
      <label>Usuário</label>
      <input
        type="text"
        placeholder="Digite seu usuário"
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      <label>Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-teal-950 text-white font-bold py-2 rounded-md"
      >
        Entrar
      </button>
    </form>
  );
};

export default FormLogin;
