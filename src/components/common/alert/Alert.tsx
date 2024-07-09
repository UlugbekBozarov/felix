import { FC, ReactNode, useMemo } from "react";
import { AlertTitle, Alert as MuiAlert, Typography } from "@mui/material";
import { Toast } from "react-hot-toast";

import { CheckCircleBroken, CloseCircle, WarningCircle } from "assets/icons";

interface AlertProps {
  title?: string | undefined;
  t?: Toast;
  type?: "success" | "warning" | "error";
  description?: string | undefined;
  children?: ReactNode;
}

const Alert: FC<AlertProps> = ({
  title,
  type = "success",
  description,
  t,
  children,
}) => {
  const icon = useMemo(() => {
    switch (type) {
      case "warning": {
        return <WarningCircle />;
      }
      case "error": {
        return <CloseCircle />;
      }
      default:
        return <CheckCircleBroken />;
    }
  }, [type]);

  return (
    <MuiAlert
      icon={icon}
      variant="filled"
      className={t?.visible ? "animate-enter" : "animate-leave"}
      severity={type}
      color={type}
    >
      <AlertTitle color={`${type}.contrastText`} sx={{ marginBottom: "4px" }}>
        {title}
      </AlertTitle>
      <Typography variant="caption" color={`${type}.contrastText`}>
        {children || description}
      </Typography>
    </MuiAlert>
  );
};

export default Alert;
