/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";

import { EVENT_INIT_VALUES } from "@/constants/formInitialValues.constants";
import { useEventsState } from "@/state/events.state";
import { EventEntity, EventFormProps } from "@/types/entities/event.type";
import { EventRewardEntity } from "@/types/entities/eventReward.type";

type Props = {
  setFormProps: React.Dispatch<React.SetStateAction<EventFormProps>>;
};

function TableView({ setFormProps }: Props) {
  const { events, remove, getAll } = useEventsState();

  const imageBodyTemplate = (product: EventRewardEntity) => {
    return (
      <img
        src={product?.image}
        alt={product?.name}
        className="w-6rem h-4rem shadow-2 border-round"
      />
    );
  };

  const dateBodyTemplate = (product: EventEntity) => {
    return new Date(product.createdAt).toLocaleDateString();
  };

  const actionsBodyTemplate = (product: EventEntity) => {
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
      initialValues: EVENT_INIT_VALUES,
      visible: true,
      type: "create",
    });
  };

  const handleRemove = (id: number) => remove(id);

  const handleUpdate = (product: EventEntity) => {
    const initialValues = {
      ...product,
      participationOptions: product.participationOptions.map((item) => item.id),
      status: product.status.id,
      rewards: product.rewards.map((item) => item.id),
      category: product.category.id,
    };
    console.log(initialValues);

    setFormProps({ initialValues, visible: true, type: "update" });
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Награды</span>
      <Button icon="pi pi-plus-circle" onClick={handleCreate} />
    </div>
  );

  const footer = `Всего создано ${events ? events.length : 0} наград.`;

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
        scrollable
        value={events ?? []}
        header={header}
        footer={footer}
      >
        <Column header="Название" field="name"></Column>
        <Column header="Картинка" body={imageBodyTemplate}></Column>
        <Column header="Цена" field="price"></Column>
        <Column header="Статус" body={(data) => data?.status?.name}></Column>
        <Column
          header="Категория"
          body={(data) => data?.category?.name}
        ></Column>
        <Column
          header="Время проведения"
          body={(data) => (
            <span>
              {new Date(+data.startDate).toLocaleDateString()} -
              {new Date(+data.endDate).toLocaleDateString()}
            </span>
          )}
        ></Column>
        <Column
          header="Кол-во участников"
          body={(data) => data.participants.length}
        ></Column>

        <Column header="Дата создания" body={dateBodyTemplate}></Column>

        <Column header="Действия" body={actionsBodyTemplate}></Column>
      </DataTable>
      <ConfirmDialog />
    </>
  );
}
const MemoizedTableView = React.memo(TableView);
export default MemoizedTableView;
