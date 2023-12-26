import React, { useEffect } from "react";

import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";

import { useEventsState } from "@/state/events.state";
import { EventEntity, EventFormProps } from "@/types/entities/event.type";

import MemoizedActionsBodyTemplate from "./components/ActionsBodyTemplate";
import MemoizedImageBodyTemplate from "./components/ImageBodyTemplate";
import MemoizedTableHeader from "./components/TableHeader";

type Props = {
  setFormProps: React.Dispatch<React.SetStateAction<EventFormProps>>;
};

function TableView({ setFormProps }: Props) {
  const { events, getAll } = useEventsState();

  const dateBodyTemplate = (product: EventEntity) => {
    return new Date(product.createdAt).toLocaleDateString();
  };

  const footer = `Всего ${events ? events.length : 0} наград.`;

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <DataTable
        scrollable
        value={events ?? []}
        header={<MemoizedTableHeader setFormProps={setFormProps} />}
        footer={footer}
      >
        <Column header="Название" field="name"></Column>
        <Column
          header="Картинка"
          body={(product) => <MemoizedImageBodyTemplate product={product} />}
        ></Column>
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

        <Column
          header="Действия"
          body={(product) => (
            <MemoizedActionsBodyTemplate
              product={product}
              setFormProps={setFormProps}
            />
          )}
        ></Column>
      </DataTable>
      <ConfirmDialog />
    </>
  );
}
const MemoizedTableView = React.memo(TableView);
export default MemoizedTableView;
