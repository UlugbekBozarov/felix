import { STORAGE_NAMES } from "constants/Storage.constants";

import setItemCookie from "../../cookies/setItemCookie";

const setAuthorizationKey = (value: string) => {
  return setItemCookie(STORAGE_NAMES.authorizationKey, value);
};

export default setAuthorizationKey;
