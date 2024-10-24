// app/ClientProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode, useState } from "react";
import LoginContextProvider from "@/concepts/Login/contexts/LoginContext";

interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LoginContextProvider>{children}</LoginContextProvider>
    </QueryClientProvider>
  );
};

export default ClientProvider;
