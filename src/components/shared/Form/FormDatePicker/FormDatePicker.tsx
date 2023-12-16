/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { Calendar } from "primereact/calendar";

type Props = {
  label: string;
  field: string;
  formik: FormikProps<any>;
};

export default function FormDatePicker({ formik, field, label }: Props) {
  return (
    <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
      <span className="font-medium">{label}</span>{" "}
      <Calendar
        value={new Date(+formik.values[field])}
        onChange={(e) =>
          formik.setFieldValue(field, `${Date.parse(`${e.value}`)}`)
        }
        showIcon
      />
    </div>
  );
}
