import { FormTypes } from "../common.types";

import { EventRewardEntity } from "./eventReward.type";

export type ParticipationOption = {
  id?: number;
  name: string;
  reward: EventRewardEntity;
  price: number;
};

export type ParticipationOptionInitialValues = {
  name: string;
  reward: number | null;
  price: number;
};

export type ParticipationOptionFormProps = {
  visible: boolean;
  type: FormTypes;
  initialValues: ParticipationOptionInitialValues;
};
