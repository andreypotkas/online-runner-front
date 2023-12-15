import { FormProps } from "@/pages/Admin/AdminEventRewards/AdminEventRewards";
import { EventRewardInitialValues } from "@/types/entities/eventReward.type";

export const EVENT_REWARD_INIT_VALUES: EventRewardInitialValues = {
  name: "",
  description: "",
  price: 0,
  image: null,
};

export const INITIAL_FORM_PROPS: FormProps = {
  visible: false,
  type: "create",
  initialValues: EVENT_REWARD_INIT_VALUES,
};
