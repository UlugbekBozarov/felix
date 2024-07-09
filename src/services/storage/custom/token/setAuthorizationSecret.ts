import { STORAGE_NAMES } from "constants/Storage.constants";

import setItemCookie from "../../cookies/setItemCookie";

const setAuthorizationSecret = (value: string) => {
  return setItemCookie(STORAGE_NAMES.authorizationSecret, value);
};

export default setAuthorizationSecret;
