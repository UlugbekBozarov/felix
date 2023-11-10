import { FC, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { FormLabel } from "@mui/material";

interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  error?: FieldError | undefined;
}

const Label: FC<LabelProps> = ({
  htmlFor,
  required,
  children,
  disabled,
  error,
  ...props
}) => {
  return children ? (
    <FormLabel
      required={!!required || false}
      htmlFor={htmlFor}
      disabled={disabled}
      sx={{ cursor: "pointer", marginBottom: "4px" }}
      {...props}
    >
      {children}
    </FormLabel>
  ) : (
    <></>
  );
};

export default Label;
