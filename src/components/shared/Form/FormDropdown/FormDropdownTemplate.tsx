/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import { EventRewardEntity } from "@/types/entities/eventReward.type";

import "./FormDropdown.scss";

export type Props = {
  items: EventRewardEntity[];
  label: string;
  field: string;
  formik: FormikProps<any>;
};

export default function FormDropdownTemplate({
  items,
  label,
  field,
  formik,
}: Props) {
  const selectedCountryTemplate = (option: EventRewardEntity) => {
    if (!option) {
      return <span>Выберите награду</span>;
    }
    return (
      <div className="flex align-items-center gap-2">
        <img src={option.image} alt="reward" width={25} height={25} />
        <span>{option.name}</span>
        <span>{option.price} р.</span>
      </div>
    );
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
        optionValue="id"
        optionLabel="name"
        itemTemplate={selectedCountryTemplate}
        valueTemplate={selectedCountryTemplate}
        className="w-full "
        dataKey={Date.now() + ""}
      />
    </div>
  );
}
