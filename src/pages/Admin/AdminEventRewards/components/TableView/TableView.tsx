import React, { useEffect } from "react";

import { Column } from "primereact/column";
import { ConfirmDialog } from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";

import MemoizedImageBodyTemplate from "@/pages/Admin/AdminEvents/components/TableView/components/ImageBodyTemplate";
import { useEventRewardsState } from "@/state/eventRewards.state";
import { EventRewardFormProps } from "@/types/entities/eventReward.type";

import MemoizedActionsBodyTemplate from "./components/ActionsBodyTemplate";
import MemoizedTableHeader from "./components/TableHeader";

type Props = {
  setFormProps: React.Dispatch<React.SetStateAction<EventRewardFormProps>>;
};

function TableView({ setFormProps }: Props) {
  const { rewards, getAll } = useEventRewardsState();

  const footer = `Всего создано ${rewards ? rewards.length : 0} наград.`;

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <DataTable
        value={rewards ?? []}
        header={<MemoizedTableHeader setFormProps={setFormProps} />}
        footer={footer}
        tableStyle={{
          minWidth: "60rem",
        }}
      >
        <Column header="Название" field="name"></Column>
        <Column
          header="Картинка"
          body={(product) => <MemoizedImageBodyTemplate product={product} />}
        ></Column>
        <Column header="Описание" field="description"></Column>
        <Column header="Цена" field="price"></Column>
        <Column
          header="Дата создания"
          body={(product) => new Date(product.createdAt).toLocaleDateString()}
        ></Column>
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
