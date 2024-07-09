import { useQuery } from "@tanstack/react-query";
import { CancelToken } from "axios";

import { client } from "services/api";

interface CustomQueryProps {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  queryKey?: any;
  staleTime?: number | undefined;
  enabled?: boolean | undefined;
  data?: object;
  params?: object;
  headers?: object;
  cancelToken?: CancelToken | undefined;
  onSuccess?: (data: any) => void;
}

const useCustomQuery = ({
  url,
  method = "GET",
  data,
  params,
  queryKey,
  cancelToken,
  onSuccess,
  enabled,
  headers,
}: CustomQueryProps) => {
  const query = useQuery({
    queryKey: [url, queryKey],
    enabled,
    queryFn: async () => {
      const response = await client({
        url,
        data,
        method,
        params,
        cancelToken,
        headers,
      })
        .then((response) => {
          if (onSuccess) {
            onSuccess(response);
          }
          return response;
        })
        .catch((error) => {
          throw new Error("Fetch not successful", error);
        });
      return response;
    },
  });
  return query;
};

export default useCustomQuery;
