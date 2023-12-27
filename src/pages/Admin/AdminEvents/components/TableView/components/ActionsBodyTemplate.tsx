import React from "react";

import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

import { useEventsState } from "@/state/events.state";
import { EventEntity, EventFormProps } from "@/types/entities/event.type";

type Props = {
  product: EventEntity;
  setFormProps: React.Dispatch<React.SetStateAction<EventFormProps>>;
};

function ActionsBodyTemplate({ product, setFormProps }: Props) {
  const { id } = product;
  const { remove } = useEventsState();

  const handleRemove = (id: number) => remove(id);

  const confirmDeletion = (id: number) => {
    confirmDialog({
      message: "Вы уверены что хотите удалить?",
      header: "Подтверждение",
      icon: "pi pi-exclamation-triangle",
      accept: () => handleRemove(id),
      reject: () => {},
    });
  };

  const handleUpdate = (product: EventEntity) => {
    const initialValues = {
      ...product,
      participationOptions: product.participationOptions.map((item) => ({
        ...item,
        reward: item.reward.id,
      })),
      status: product.status.id,
      category: product.category.id,
    };

    setFormProps({ initialValues, visible: true, type: "update" });
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => confirmDeletion(id)}
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
