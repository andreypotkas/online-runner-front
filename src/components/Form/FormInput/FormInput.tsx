import { RegistrationFormInitialValues } from "@/pages/Auth/types/registration.types";
import { FormikProps } from "formik";
import { InputText } from "primereact/inputtext";
import React from "react";
import styles from "./FormInput.module.scss";

export type BaseInputProps = {
  field: keyof RegistrationFormInitialValues;
  placeholder: string;
  label: string;
  formik: FormikProps<RegistrationFormInitialValues>;
};

function FormInput({ field, placeholder, label, formik }: BaseInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={field} className="block text-900 font-medium">
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
      <span className={styles.error}>{formik.errors[field]}</span>
    </div>
  );
}

FormInput.defaultProps = {
  field: "default",
  label: "Текстовое поле",
  placeholder: "Введите значение",
};

const MemoizedBaseInput = React.memo(FormInput);
export default MemoizedBaseInput;
