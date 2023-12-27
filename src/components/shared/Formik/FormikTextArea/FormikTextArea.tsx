/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

export type TextAreaProps = {
  field: string;
  placeholder: string;
  label: string;
  formik: FormikProps<any>;
};

export default function FormikTextArea({
  label,
  field,
  formik,
}: TextAreaProps) {
  return (
    <div className="flex gap-2 flex-column h-full">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <textarea
        id={label}
        value={formik.values[field]}
        onChange={(e) => formik.setFieldValue(field, e.target.value)}
        className="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable h-full w-full"
      ></textarea>
      <div className="validation-form-error">
        <>{formik.errors[field]}</>
      </div>
    </div>
  );
}
