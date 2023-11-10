import { Breadcrumbs, styled } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)({
  marginLeft: "12px",
  marginRight: "24px",
  "& .MuiBreadcrumbs-ol": {
    flexWrap: "nowrap",
  },
  "& .MuiBreadcrumbs-separator": {
    // flexWrap: "nowrap",
    marginLeft: "4px",
    marginRight: "4px",
    opacity: 0,
  },
});
