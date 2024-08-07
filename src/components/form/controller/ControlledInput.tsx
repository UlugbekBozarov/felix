// import React from "react";

import { FC, ReactNode } from "react";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { get } from "lodash";

import { Label } from "../components";
import { CheckCircle, CloseCircle } from "assets/icons";

interface ControlledInputProps {
  type?: "text" | "password" | "number" | undefined;
  label?: string;
  name: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, any>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  disabled?: boolean;
  placeholder?: string;
  startAdornment?: ReactNode | undefined;
  endAdornment?: ReactNode | undefined;
}

const ControlledInput: FC<ControlledInputProps> = ({
  label,
  name,
  rules,
  startAdornment,
  endAdornment,
  ...props
}) => {
  const { control } = useFormContext();

  const inputChangeHandler =
    (formChangeHandler: (...event: any[]) => void) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      formChangeHandler(get(event, "target.value", ""));
    };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { ref, onChange, ...field },
        fieldState: { error },
        formState: { isSubmitted },
      }) => (
        <div>
          <Label
            htmlFor={`input-${name}`}
            required={!!get(rules, "required", false)}
            disabled={get(props, "disabled", false)}
            error={error}
          >
            {label}
          </Label>
          <TextField
            id={`input-${name}`}
            fullWidth
            {...props}
            {...field}
            InputProps={{
              startAdornment: startAdornment ? (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ) : undefined,
              endAdornment: !!error ? (
                <InputAdornment position="end">
                  <CloseCircle color="#FF4D4F" />
                </InputAdornment>
              ) : isSubmitted ? (
                <InputAdornment position="end">
                  <CheckCircle />
                </InputAdornment>
              ) : endAdornment ? (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ) : undefined,
            }}
            inputRef={ref}
            error={!!error}
            helperText={
              !!error ? get(error, "message") || "Invalid value" : undefined
            }
            value={field?.value || ""}
            onChange={inputChangeHandler(onChange)}
          />
        </div>
      )}
    />
  );
};

export default ControlledInput;
