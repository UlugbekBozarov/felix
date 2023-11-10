import { Typography, useTheme } from "@mui/material";

import { StyledBreadcrumbs } from "./Breadcrumbs.style";

const Breadcrumbs = () => {
  const { palette } = useTheme();

  return (
    <StyledBreadcrumbs>
      <Typography fontWeight={600} color={palette?.primary?.main}>
        Belts
      </Typography>
      <Typography fontWeight={600} color={palette?.common.white}>
        List
      </Typography>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
