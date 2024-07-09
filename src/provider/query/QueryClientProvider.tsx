import { FC, ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

interface QueryClientProviderProps {
  children?: ReactNode | undefined;
}

const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
