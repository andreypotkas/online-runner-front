/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import { EventCategoriesEnum, StatusEnum } from "@/types/entities/event.type";

type Item = { name: string; code: EventCategoriesEnum | StatusEnum };

export type Props = {
  items: Item[];
  label: string;
  field: string;
  formik: FormikProps<any>;
  placeholder?: string;
};

export default function FormikDropdown({
  items,
  label,
  field,
  formik,
  placeholder,
}: Props) {
  return (
    <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
      <span className="font-medium">{label}</span>
      <Dropdown
        value={formik.values[field]}
        onChange={(e: DropdownChangeEvent) =>
          formik.setFieldValue(field, e.value)
        }
        options={items}
        optionValue="code"
        optionLabel="name"
        className="w-full "
        placeholder={placeholder ?? "Выберите"}
        dataKey={Date.now() + ""}
      />

      <span className="validation-form-error">
        <>{formik.errors[field]}</>
      </span>
    </div>
  );
}
