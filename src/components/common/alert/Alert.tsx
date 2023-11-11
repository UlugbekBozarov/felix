import { FC, ReactNode, useMemo } from "react";
import { AlertTitle, IconButton, Alert as MuiAlert } from "@mui/material";
import { toast, Toast } from "react-hot-toast";

import {
  CheckCircleBroken,
  Close,
  CloseCircle,
  WarningCircle,
} from "assets/icons";

interface AlertProps {
  title?: string | undefined;
  t?: Toast;
  type?: "success" | "warning" | "error";
  description?: string | undefined;
  children?: ReactNode;
}

const Alert: FC<AlertProps> = ({ title, type, description, t, children }) => {
  console.log("Toast: ", t);
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
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => toast.dismiss(t?.id)}
        >
          <Close />
        </IconButton>
      }
      className={t?.visible ? "animate-enter" : "animate-leave"}
      severity={type}
      color="error"
    >
      <AlertTitle>{title}</AlertTitle>
      {children || description}
    </MuiAlert>
  );
};

export default Alert;
