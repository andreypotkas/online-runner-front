import { Dropdown } from "primereact/dropdown";

import MemoizedDropdownItemTemplate from "@/components/shared/Formik/FormikDropdown/DropdownItemTemplate";
import { EventRewardEntity } from "@/types/entities/eventReward.type";
import { ParticipationOptionInitialValues } from "@/types/entities/participationOption.type";

type Props = {
  option: ParticipationOptionInitialValues;
  rewards: EventRewardEntity[];
  handleChange: (field: string, value: string | number) => void;
};

export default function EventParticipationReward({
  option,
  rewards,
  handleChange,
}: Props) {
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor={"reward"}>Награда</label>
      <Dropdown
        id={"reward"}
        value={option["reward"]}
        onChange={(e) => handleChange("reward", e.value)}
        options={rewards}
        optionValue="id"
        optionLabel="name"
        itemTemplate={(option) => (
          <MemoizedDropdownItemTemplate
            image={option.image}
            name={option.name}
          />
        )}
        className="w-15rem"
        placeholder="Выберите награду"
      />
    </div>
  );
}
