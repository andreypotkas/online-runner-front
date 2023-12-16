import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import { EVENT_INIT_FORM_PROPS } from "@/constants/formInitialValues.constants";
import { EventFormProps } from "@/types/entities/event.type";

import MemoizedEventForm from "./components/EventForm/EventForm";
import MemoizedTableView from "./components/TableView/TableView";

function AdminEvents() {
  const [formProps, setFormProps] = useState<EventFormProps>(
    EVENT_INIT_FORM_PROPS
  );

  return (
    <>
      <MemoizedTableView setFormProps={setFormProps} />
      <Dialog
        header={
          formProps.type === "create"
            ? "Форма создания события"
            : "Форма изменения события"
        }
        visible={formProps.visible}
        style={{ maxWidth: "95vw" }}
        onHide={() => setFormProps((state) => ({ ...state, visible: false }))}
      >
        <MemoizedEventForm formProps={formProps} setFormProps={setFormProps} />
      </Dialog>
    </>
  );
}

const MemoizedAdminEvents = React.memo(AdminEvents);
export default MemoizedAdminEvents;
