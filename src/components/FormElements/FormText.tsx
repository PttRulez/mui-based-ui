import { Controller, FieldValues } from "react-hook-form";
import TextInput, { TextInputProps } from "../NonFormInputs/TextInput";
import { ControlledField } from "@/types";
import React from "react";

type FormTextInputProps<T extends FieldValues> = ControlledField<T> &
  TextInputProps;

const FormText = <G extends FieldValues>({
  control,
  decimal,
  name,
  onChange,
  precision,
  rules,
  type,
  value,
  ...textInputProps
}: FormTextInputProps<G>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <TextInput
          type={type}
          value={value}
          onChange={(e) => {
            field.onChange(e);

            if (onChange) {
              onChange(e);
            }
          }}
          {...textInputProps}
        />
      )}
    />
  );
};

export default FormText;
