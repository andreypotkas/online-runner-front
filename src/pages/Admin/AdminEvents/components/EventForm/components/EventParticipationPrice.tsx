import { InputText } from "primereact/inputtext";

import { ParticipationOptionInitialValues } from "@/types/entities/participationOption.type";

type Props = {
  option: ParticipationOptionInitialValues;
  handleChange: (field: string, value: string | number) => void;
};

export default function EventParticipationPrice({
  option,
  handleChange,
}: Props) {
  return (
    <div className="flex gap-2 flex-column">
      <label htmlFor={"price"}>Цена</label>
      <InputText
        className="w-5rem"
        id={"price"}
        type="number"
        value={`${option["price"]}`}
        onChange={(e) => handleChange("price", e.target.value)}
        placeholder="Введите цену"
      />
    </div>
  );
}
