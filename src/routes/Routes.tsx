import { getAuthorizationKey, getAuthorizationSecret } from "services/storage";

import PrivateRouts from "./private/PrivateRout";
import PublicRouts from "./public/PublicRoute";

const Routes = () => {
  if (getAuthorizationKey() && getAuthorizationSecret()) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
