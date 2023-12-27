/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { DropdownChangeEvent } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import { ParticipationOptionsEnum } from "@/types/entities/event.type";

type Item = { name: string; code: ParticipationOptionsEnum };

export type Props = {
  items: Item[];
  label: string;
  field: string;
  formik: FormikProps<any>;
  placeholder: string;
};

export default function FormikMultiSelect({
  items,
  label,
  field,
  formik,
  placeholder,
}: Props) {
  return (
    <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
      <span className="font-medium">{label}</span>
      <MultiSelect
        value={formik.values[field]}
        onChange={(e: DropdownChangeEvent) =>
          formik.setFieldValue(field, e.value)
        }
        options={items}
        optionValue="code"
        optionLabel="name"
        itemTemplate={(item) => <span key={Date.now()}>{item.name}</span>}
        display="chip"
        placeholder={placeholder}
        maxSelectedLabels={4}
        className="w-full"
        dataKey={Date.now() + ""}
      />

      <span className="validation-form-error">
        <>{formik.errors[field]}</>
      </span>
    </div>
  );
}
