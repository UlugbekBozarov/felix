import { STORAGE_NAMES } from "constants/Storage.constants";

import setItemCookie from "../../cookies/setItemCookie";

const setAuthorizationSign = (value: string) => {
  return setItemCookie(STORAGE_NAMES.authorizationSign, value);
};

export default setAuthorizationSign;
