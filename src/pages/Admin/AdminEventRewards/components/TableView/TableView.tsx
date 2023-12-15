import React, { useEffect } from "react";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";

import { EVENT_REWARD_INIT_VALUES } from "@/constants/formInitialValues.constants";
import { useEventRewardsState } from "@/state/eventRewards.state";
import { EventRewardEntity } from "@/types/entities/eventReward.type";

import { FormProps } from "../../AdminEventRewards";

type Props = {
  setFormProps: React.Dispatch<React.SetStateAction<FormProps>>;
};

function TableView({ setFormProps }: Props) {
  const { rewards, remove, getAll } = useEventRewardsState();

  const imageBodyTemplate = (product: EventRewardEntity) => {
    return (
      <img
        src={product?.image}
        alt={product?.name}
        className="w-6rem h-4rem shadow-2 border-round"
      />
    );
  };

  const dateBodyTemplate = (product: EventRewardEntity) => {
    return new Date(product.createdAt).toLocaleDateString();
  };

  const actionsBodyTemplate = (product: EventRewardEntity) => {
    const { id } = product;
    return (
      <div className="flex gap-2">
        <Button
          onClick={() => confirm1(id)}
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
  };

  const handleCreate = () => {
    setFormProps({
      initialValues: EVENT_REWARD_INIT_VALUES,
      visible: true,
      type: "create",
    });
  };

  const handleRemove = (id: number) => remove(id);

  const handleUpdate = (product: EventRewardEntity) => {
    setFormProps({ initialValues: product, visible: true, type: "update" });
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Награды</span>
      <Button icon="pi pi-plus-circle" onClick={handleCreate} />
    </div>
  );

  const footer = `Всего создано ${rewards ? rewards.length : 0} наград.`;

  const confirm1 = (id: number) => {
    confirmDialog({
      message: "Вы уверены что хотите удалить?",
      header: "Подтверждение",
      icon: "pi pi-exclamation-triangle",
      accept: () => handleRemove(id),
      reject: () => {},
    });
  };

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <DataTable
        value={rewards ?? []}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column header="Название" field="name"></Column>
        <Column header="Картинка" body={imageBodyTemplate}></Column>
        <Column header="Описание" field="description"></Column>
        <Column header="Цена" field="price"></Column>
        <Column header="Дата создания" body={dateBodyTemplate}></Column>
        <Column header="Действия" body={actionsBodyTemplate}></Column>
      </DataTable>
      <ConfirmDialog />
    </>
  );
}
const MemoizedTableView = React.memo(TableView);
export default MemoizedTableView;
