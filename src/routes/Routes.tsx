import { getAuthorizationKey, getAuthorizationSign } from "services/storage";

import PrivateRouts from "./private/PrivateRout";
import PublicRouts from "./public/PublicRoute";

const Routes = () => {
  if (getAuthorizationKey() && getAuthorizationSign()) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
