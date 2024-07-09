import { STORAGE_NAMES } from "constants/Storage.constants";

import getItemCookie from "../../cookies/getItemCookie";

const getAuthorizationSecret = () => {
  return getItemCookie(STORAGE_NAMES.authorizationSecret);
};

export default getAuthorizationSecret;
