/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

import { DropdownChangeEvent } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

import { EventRewardEntity } from "@/types/entities/eventReward.type";

import "./FormMultiSelect.scss";

export type Props = {
  items: EventRewardEntity[];
  label: string;
  field: string;
  formik: FormikProps<any>;
};

export default function FormMultiSelectTemplate({
  items,
  label,
  field,
  formik,
}: Props) {
  const itemTemplate = (option: EventRewardEntity) => {
    if (!option) return;
    return (
      <div className="flex align-items-center gap-2">
        <img
          className="shadow-2 border-round"
          src={option.image}
          alt="reward"
          width={50}
          height={50}
        />
        <span>{option.name}</span>
        <span>{option.price} р.</span>
      </div>
    );
  };

  return (
    <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
      <span className="font-medium">{label}</span>
      <MultiSelect
        value={formik.values[field]}
        onChange={(e: DropdownChangeEvent) =>
          formik.setFieldValue(field, e.value)
        }
        options={items}
        optionValue="id"
        optionLabel="name"
        display="chip"
        itemTemplate={itemTemplate}
        placeholder="Выберите награды"
        maxSelectedLabels={4}
        className="w-full"
      />
    </div>
  );
}
