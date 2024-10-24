import { useMutation } from "react-query";
import { useApi } from "../../../server/hooks/useApi";
import { handleSuccess, LoginResponseType, LoginType } from "@/types/Login";
import { useLoginContext } from "../contexts/LoginContext";

export const useLogin = async () => {
  const api = useApi();
  const { setToken } = useLoginContext();
  return useMutation(
    async (login: LoginType): Promise<any> => api.post("/auth/login", login),
    {
      onSuccess: ({ data }) => {
        handleSuccess({ token: data as LoginResponseType, setToken });
      },
    }
  );
};
