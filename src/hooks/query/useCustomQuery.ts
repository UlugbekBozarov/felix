import { useQuery } from "@tanstack/react-query";
import CryptoJS from "crypto-js";
import { get } from "lodash";

import { getAuthorizationKey, getAuthorizationSecret } from "services/storage";

type Params = {
  [key: string]: string;
};

interface CustomQueryProps {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  queryKey?: any;
  staleTime?: number | undefined;
  enabled?: boolean | undefined;
  data?: object;
  params?: Params;
  headers?: HeadersInit | undefined;
  onSuccess?: (data: any) => void;
}

const useCustomQuery = ({
  path,
  method = "GET",
  data,
  params = {},
  queryKey,
  onSuccess,
  enabled,
  headers,
}: CustomQueryProps) => {
  const query = useQuery({
    queryKey: [path, queryKey],
    enabled,
    queryFn: async () => {
      const url = new URL(`${process.env.REACT_APP_BASE_URL}${path}`);

      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      const response = await fetch(url, {
        method,
        body: get(data, "data") ? JSON.stringify(get(data, "data")) : undefined,
        mode: "cors",
        headers: {
          ...(headers || {}),
          Key: getAuthorizationKey(),
          Sign: CryptoJS.MD5(
            `${method}/${path}${
              get(data, "data") || ""
            }${getAuthorizationSecret()}`
          ).toString(),
        },
      }).then((response) => {
        return response.json();
      });
      // const response = await client({
      //   url,
      //   data,
      //   method,
      //   params,
      //   cancelToken,
      //   headers,
      // })
      // .catch((error) => {
      //   throw new Error("Fetch not successful", error);
      // });
      return response;
    },
  });
  return query;
};

export default useCustomQuery;
