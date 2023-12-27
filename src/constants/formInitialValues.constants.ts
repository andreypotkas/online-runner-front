import {
  EventCategoriesEnum,
  EventFormProps,
  EventInitialValues,
} from "@/types/entities/event.type";
import {
  EventRewardFormProps,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";
import {
  ParticipationOptionFormProps,
  ParticipationOptionInitialValues,
} from "@/types/entities/participationOption.type";

export const EVENT_REWARD_INIT_VALUES: EventRewardInitialValues = {
  name: "",
  description: "",
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
  category: EventCategoriesEnum.Running,
  participationOptions: [],
  startDate: `${Date.now()}`,
  endDate: `${Date.now()}`,
};

export const EVENT_INIT_FORM_PROPS: EventFormProps = {
  visible: false,
  type: "create",
  initialValues: EVENT_INIT_VALUES,
};

export const participationOptionInitValues: ParticipationOptionInitialValues = {
  name: "",
  price: 0,
  reward: 0,
};

export const PARTICIPATION_OPTION_INIT_FORM_PROPS: ParticipationOptionFormProps =
  {
    visible: false,
    type: "create",
    initialValues: participationOptionInitValues,
  };
