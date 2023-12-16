/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import { EventCategoriesEnum, StatusEnum } from "@/types/entities/event.type";

import "./FormDropdown.scss";

type Item = { name: string; code: EventCategoriesEnum | StatusEnum };

export type Props = {
  items: Item[];
  label: string;
  field: string;
  formik: FormikProps<any>;
};

export default function FormDropdown({ items, label, field, formik }: Props) {
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
        dataKey={Date.now() + ""}
      />
    </div>
  );
}
