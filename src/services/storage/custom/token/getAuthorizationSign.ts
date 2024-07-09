import { STORAGE_NAMES } from "constants/Storage.constants";

import getItemCookie from "../../cookies/getItemCookie";

const getAuthorizationSign = () => {
  return getItemCookie(STORAGE_NAMES.authorizationSign);
};

export default getAuthorizationSign;
