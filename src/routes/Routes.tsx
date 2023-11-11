import { STORAGE_NAMES } from "constants/Storage.constants";
import { getItemCookie } from "services/storage";

import PrivateRouts from "./private/PrivateRout";
import PublicRouts from "./public/PublicRoute";

const Routes = () => {
  if (getItemCookie(STORAGE_NAMES.authorization)) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
