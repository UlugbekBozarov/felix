import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, CancelToken } from "axios";

import { client } from "services/api";

interface CustomMutationProps {
  url: string;
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
  cancelToken?: CancelToken | undefined;
}

const useCustomMutation = ({
  url,
  method = "POST",
  onError,
  onSuccess,
}: CustomMutationProps) => {
  const mutation = useMutation({
    mutationFn: async (data: MutationFuncVariabls | undefined = {}) => {
      const response = await client({
        url,
        method,
        ...data,
      });
      return response;
    },
    onError,
    onSuccess,
  });

  return mutation;
};

export default useCustomMutation;
