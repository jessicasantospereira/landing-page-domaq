import { createContext, useContext, useState } from "react";

type ContextProps = {
  token: string | undefined;
  setToken: (token: string) => void;
  isLogged: boolean;
};
const LoginContext = createContext({} as ContextProps);

export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const isLogged = !!token;

  return (
    <LoginContext.Provider value={{ token, setToken, isLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
