import { IconButton, TextField, TextFieldProps } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import React from "react";

export type TextInputProps = TextFieldProps & {
  handleClear?: () => void;
  decimal?: boolean;
  precision?: number;
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  "&.MuiFormControl-root.MuiTextField-root": {
    width: "100% !important",
  },
  "& .MuiInputBase-root.MuiInput-root": {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

const TextInput = ({
  decimal,
  label,
  handleClear,
  precision,
  type,
  value,
  variant = "standard",
  ...otherProps
}: TextInputProps) => {
  return (
    <StyledTextField
      InputProps={{
        endAdornment: value ? (
          <IconButton onClick={handleClear}>
            <ClearIcon />
          </IconButton>
        ) : (
          ""
        ),
      }}
      label={<span style={{ marginLeft: "15px" }}>{label}</span>}
      type={type ?? "text"}
      value={value}
      variant={variant}
      {...otherProps}
    />
  );
};

export default TextInput;
