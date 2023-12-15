import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import { INITIAL_FORM_PROPS } from "@/constants/formInitialValues.constants";
import { FormTypes } from "@/types/common.types";
import { EventRewardInitialValues } from "@/types/entities/eventReward.type";

import MemoizedCreateEventRewardForm from "./components/EventRewardForm/EventRewardForm";
import MemoizedTableView from "./components/TableView/TableView";

import "./AdminEventRewards.scss";

export type FormProps = {
  visible: boolean;
  type: FormTypes;
  initialValues: EventRewardInitialValues;
};

function AdminEventRewards() {
  const [formProps, setFormProps] = useState<FormProps>(INITIAL_FORM_PROPS);

  return (
    <div className="layout-main-container">
      <MemoizedTableView setFormProps={setFormProps} />
      <Dialog
        header="Header"
        visible={formProps.visible}
        style={{ maxWidth: "95vw" }}
        onHide={() => setFormProps((state) => ({ ...state, visible: false }))}
      >
        <MemoizedCreateEventRewardForm
          formProps={formProps}
          setFormProps={setFormProps}
        />
      </Dialog>
    </div>
  );
}

const MemoizedAdminEventRewards = React.memo(AdminEventRewards);
export default MemoizedAdminEventRewards;
