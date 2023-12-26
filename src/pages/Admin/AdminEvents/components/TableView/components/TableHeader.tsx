import React from "react";

import { Button } from "primereact/button";

import { EVENT_INIT_VALUES } from "@/constants/formInitialValues.constants";
import { EventFormProps } from "@/types/entities/event.type";

type Props = {
  setFormProps: React.Dispatch<React.SetStateAction<EventFormProps>>;
};

function TableHeader({ setFormProps }: Props) {
  const handleCreate = () => {
    setFormProps({
      initialValues: EVENT_INIT_VALUES,
      visible: true,
      type: "create",
    });
  };

  return (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">События</span>
      <Button icon="pi pi-plus-circle" onClick={handleCreate} />
    </div>
  );
}

const MemoizedTableHeader = React.memo(TableHeader);
export default MemoizedTableHeader;
