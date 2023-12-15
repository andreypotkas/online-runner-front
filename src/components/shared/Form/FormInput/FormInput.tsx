/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormikProps } from "formik";

import { InputText } from "primereact/inputtext";

import styles from "./FormInput.module.scss";

export type BaseInputProps = {
  field: string;
  placeholder: string;
  label: string;
  formik: FormikProps<any>;
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
      <span className={styles.error}>
        <>{formik.errors[field]}</>
      </span>
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
