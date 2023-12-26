import React from "react";

import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

import { useEventRewardsState } from "@/state/eventRewards.state";
import {
  EventRewardEntity,
  EventRewardFormProps,
} from "@/types/entities/eventReward.type";

type Props = {
  product: EventRewardEntity;
  setFormProps: React.Dispatch<React.SetStateAction<EventRewardFormProps>>;
};

function ActionsBodyTemplate({ product, setFormProps }: Props) {
  const { id } = product;
  const { remove } = useEventRewardsState();

  const handleDeletion = (id: number) => {
    confirmDialog({
      message: "Вы уверены что хотите удалить?",
      header: "Подтверждение",
      icon: "pi pi-exclamation-triangle",
      accept: () => remove(id),
      reject: () => {},
    });
  };

  const handleUpdate = (product: EventRewardEntity) => {
    setFormProps({ initialValues: product, visible: true, type: "update" });
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => handleDeletion(id)}
        severity="danger"
        icon={"pi pi-trash"}
      />
      <Button
        onClick={() => handleUpdate(product)}
        severity="warning"
        icon={"pi pi-file-edit"}
      />
    </div>
  );
}

const MemoizedActionsBodyTemplate = React.memo(ActionsBodyTemplate);
export default MemoizedActionsBodyTemplate;
