import React, { useState } from "react";
import { FormikProps } from "formik";

import { Button } from "primereact/button";

import { participationOptionInitValues } from "@/constants/formInitialValues.constants";
import { EventInitialValues } from "@/types/entities/event.type";
import { EventRewardEntity } from "@/types/entities/eventReward.type";

import EventParticipationName from "./EventParticipationName";
import EventParticipationPrice from "./EventParticipationPrice";
import EventParticipationReward from "./EventParticipationReward";

type Props = {
  eventFormik: FormikProps<EventInitialValues>;
  rewards: EventRewardEntity[];
};

function EventParticipationForm({ eventFormik, rewards }: Props) {
  const [option, setOption] = useState(participationOptionInitValues);

  const handleChange = (field: string, value: string | number) => {
    setOption((values) => ({ ...values, [field]: value }));
  };

  const handleAdd = () => {
    eventFormik.setFieldValue("participationOptions", [
      ...eventFormik.values.participationOptions,
      option,
    ]);
  };

  return (
    <div className="flex flex-column gap-2">
      <div className="p-4 border-1 surface-border border-round flex gap-2 align-items-center justify-content-between flex-wrap">
        <div className="flex gap-2 align-items-center flex-wrap">
          <EventParticipationName option={option} handleChange={handleChange} />
          <EventParticipationReward
            rewards={rewards}
            option={option}
            handleChange={handleChange}
          />
          <EventParticipationPrice
            option={option}
            handleChange={handleChange}
          />
        </div>

        <Button
          label="Сохранить"
          icon="pi pi-check-circle"
          onClick={handleAdd}
        />
      </div>

      <div className="flex gap-2">
        {eventFormik.values.participationOptions.map((item) => {
          const image = rewards[item.reward! - 1].image;
          return (
            <div key={Math.random()} className="border-1 surface-border p-2">
              <div>{item.name}</div>
              <img
                width={100}
                height={100}
                src={image}
                alt="participationOption-image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const MemoizedEventParticipationForm = React.memo(EventParticipationForm);
export default MemoizedEventParticipationForm;
