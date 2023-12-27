/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { InputText } from "primereact/inputtext";

export type BaseInputProps = {
  field: string;
  placeholder: string;
  label: string;
  formik: FormikProps<any>;
};

export default function FormikTextInput({
  field,
  placeholder,
  label,
  formik,
}: BaseInputProps) {
  return (
    <>
      <label htmlFor={field} className="block text-900 font-medium mb-2">
        {label}
      </label>
      <InputText
        id={field}
        type="text"
        onChange={formik.handleChange}
        value={formik.values[field]}
        placeholder={placeholder}
        className="w-full mb-4"
      />
      <span className="validation-form-error">
        <>{formik.errors[field]}</>
      </span>
    </>
  );
}

FormikTextInput.defaultProps = {
  field: "default",
  label: "Текстовое поле",
  placeholder: "Введите значение",
};
