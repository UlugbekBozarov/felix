import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, CancelToken } from "axios";
import CryptoJS from "crypto-js";
import { get } from "lodash";

import { getAuthorizationKey, getAuthorizationSecret } from "services/storage";

interface CustomMutationProps {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  onError?:
    | ((
        error: Error,
        variables: MutationFuncVariabls | undefined,
        context: unknown
      ) => unknown)
    | undefined;
  onSuccess?:
    | ((
        data: AxiosResponse<any, any>,
        variables: MutationFuncVariabls | undefined,
        context: unknown
      ) => unknown)
    | undefined;
}

interface MutationFuncVariabls {
  data?: object;
  params?: object;
  headers?: HeadersInit | undefined;
  cancelToken?: CancelToken | undefined;
}

const useCustomMutation = ({
  path,
  method = "POST",
  onError,
  onSuccess,
}: CustomMutationProps) => {
  const mutation = useMutation({
    mutationFn: async (data: MutationFuncVariabls | undefined = {}) => {
      const authorizationKey = getAuthorizationKey();
      const authorizationSecret = getAuthorizationSecret();

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}${path}`, {
        method,
        body: get(data, "data") ? JSON.stringify(get(data, "data")) : undefined,
        mode: "cors",
        headers: {
          ...(authorizationKey
            ? {
                Key: authorizationKey,
              }
            : {}),
          ...(authorizationSecret
            ? {
                Sign: CryptoJS.MD5(
                  `${method}/${path}${authorizationSecret}`
                ).toString(),
              }
            : {}),
          ...(get(data, "headers", {}) || {}),
        },
      });
      return response.json();
    },
    onError,
    onSuccess,
  });

  return mutation;
};

export default useCustomMutation;
