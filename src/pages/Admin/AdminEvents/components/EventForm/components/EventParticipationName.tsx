import { Dropdown } from "primereact/dropdown";

import { ParticipationOptionInitialValues } from "@/types/entities/participationOption.type";

type Props = {
  option: ParticipationOptionInitialValues;
  handleChange: (field: string, value: string | number) => void;
};

const participationOptions = [
  { name: "Бесплатный" },
  { name: "Базовый" },
  { name: "Медиум" },
  { name: "Продвинутый" },
];

export default function EventParticipationName({
  option,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor={"name"}>Название</label>
      <Dropdown
        id={"name"}
        value={option["name"]}
        onChange={(e) => handleChange("name", e.value)}
        options={participationOptions}
        optionValue="name"
        optionLabel="name"
        className="w-15rem"
        placeholder="Выберите название"
      />
    </div>
  );
}
