/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormikProps } from "formik";

import { InputText } from "primereact/inputtext";

import styles from "../FormInput/FormInput.module.scss";

export type Props = {
  field: string;
  placeholder: string;
  label: string;
  formik: FormikProps<any>;
};

function FormInputNumber({ field, placeholder, label, formik }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={field} className="block text-900 font-medium">
        {label}
      </label>
      <InputText
        id={field}
        type="number"
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

FormInputNumber.defaultProps = {
  field: "default",
  label: "Цена",
  placeholder: "Введите цена",
};

const MemoizedFormInputNumber = React.memo(FormInputNumber);
export default MemoizedFormInputNumber;
