export type LoginType = {
  login: string;
  senha: string;
};

export type LoginResponseType = {
  token: string;
};

export const handleSuccess = ({
  token,
  setToken,
}: {
  token: LoginResponseType;
  setToken: (token: string) => void;
}) => {
  setToken(token.token);
};
