import DatePickerInput, {
  DatePickerProps,
} from '../NonFormInputs/DatePickerInput';
import { Controller, FieldValues } from 'react-hook-form';
import { ControlledField } from '@/types';
import React from 'react';

type FormDatePickerProps<T extends FieldValues> = ControlledField<T> &
    Omit<DatePickerProps, 'name'>

const FormDatePicker = <G extends FieldValues>({
  control,
  name,
  onChange,
  rules,
  ...datePickerProps
}: FormDatePickerProps<G>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <DatePickerInput
          onChange={(value, ctx) => {
            field.onChange(value);
            if (onChange) {
              onChange(value, ctx);
            }
          }}
          {...datePickerProps}
        />
      )}
    />
  );
};

export default FormDatePicker;
