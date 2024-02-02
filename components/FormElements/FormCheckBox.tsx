import { ChangeEvent, FC } from 'react';
import CheckboxInput, {
  CheckboxInputProps,
} from '../NonFormInputs/CheckboxInput';
import { Controller } from 'react-hook-form';
import { ControlledField } from '@/types';

interface FormCheckBoxProps extends ControlledField, CheckboxInputProps {}

const FormCheckBox: FC<FormCheckBoxProps> = ({
  control,
  name,
  onChange,
  ...selectProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <CheckboxInput
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            field.onChange(e);
            if (onChange) {
              onChange(e);
            }
          }}
          {...selectProps}
        />
      )}
    />
  );
};

export default FormCheckBox;
