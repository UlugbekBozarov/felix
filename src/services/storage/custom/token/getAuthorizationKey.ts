import { STORAGE_NAMES } from "constants/Storage.constants";

import getItemCookie from "../../cookies/getItemCookie";

const getAuthorizationKey = () => {
  return getItemCookie(STORAGE_NAMES.authorizationKey);
};

export default getAuthorizationKey;
