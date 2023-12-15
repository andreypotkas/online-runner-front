/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import { EventCategoriesEnum } from "@/types/Admin/enums/createEvent.enum";

import "./FormDropdown.scss";

type Item = { name: string; code: EventCategoriesEnum };

export type Props = {
  items: Item[];
  label: string;
  field: string;
  formik: FormikProps<any>;
};

export default function FormDropdown({ items, label, field, formik }: Props) {
  const selectedCountryTemplate = (option: Item) => {
    return <div>{option.name}</div>;
  };

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
        itemTemplate={selectedCountryTemplate}
        className="w-full "
      />
    </div>
  );
}
