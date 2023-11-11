import {
  useQuery,
  UndefinedInitialDataOptions,
  QueryKey,
} from "@tanstack/react-query";

import { client } from "services/api";

type CustomQueryProps = UndefinedInitialDataOptions<
  unknown,
  Error,
  unknown,
  QueryKey
> & {
  url: string;
  method?: "get" | "post" | "put" | "delete";
  data?: any;
};

const useCustomQuery = ({
  url,
  method = "get",
  data = {},
  ...props
}: CustomQueryProps) => {
  return useQuery({
    ...props,
    queryFn: () =>
      client({
        url,
        method,
        data,
      }),
  });
};

export default useCustomQuery;
