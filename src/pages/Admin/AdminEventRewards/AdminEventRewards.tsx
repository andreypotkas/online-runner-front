import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import { EVENT_REWARD_INIT_FORM_PROPS } from "@/constants/formInitialValues.constants";
import { EventRewardFormProps } from "@/types/entities/eventReward.type";

import MemoizedCreateEventRewardForm from "./components/EventRewardForm/EventRewardForm";
import MemoizedTableView from "./components/TableView/TableView";

import "./AdminEventRewards.scss";

function AdminEventRewards() {
  const [formProps, setFormProps] = useState<EventRewardFormProps>(
    EVENT_REWARD_INIT_FORM_PROPS
  );

  return (
    <div>
      <MemoizedTableView setFormProps={setFormProps} />
      <Dialog
        header={
          formProps.type === "create"
            ? "Форма создания награды"
            : "Форма изменения награды"
        }
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
