import {
  EventCategoriesEnum,
  EventFormProps,
  EventInitialValues,
  ParticipationOptionsEnum,
} from "@/types/entities/event.type";
import {
  EventRewardFormProps,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";

export const EVENT_REWARD_INIT_VALUES: EventRewardInitialValues = {
  name: "",
  description: "",
  price: 0,
  image: null,
};

export const EVENT_REWARD_INIT_FORM_PROPS: EventRewardFormProps = {
  visible: false,
  type: "create",
  initialValues: EVENT_REWARD_INIT_VALUES,
};

export const EVENT_INIT_VALUES: EventInitialValues = {
  name: "",
  description: "",
  image: null,
  rewards: [],
  category: EventCategoriesEnum.Running,
  participationOptions: [ParticipationOptionsEnum.free],
  startDate: `${Date.now()}`,
  endDate: `${Date.now()}`,
};

export const EVENT_INIT_FORM_PROPS: EventFormProps = {
  visible: false,
  type: "create",
  initialValues: EVENT_INIT_VALUES,
};
