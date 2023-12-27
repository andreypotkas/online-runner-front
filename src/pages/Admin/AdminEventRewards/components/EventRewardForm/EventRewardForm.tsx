import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";

import FormikImageSelect from "@/components/shared/Formik/FormikImageSelect/FormikImageSelect";
import FormikTextArea from "@/components/shared/Formik/FormikTextArea/FormikTextArea";
import FormikTextInput from "@/components/shared/Formik/FormikTextInput/FormikTextInput";
import { useEventRewardsState } from "@/state/eventRewards.state";
import {
  EventRewardFormProps,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";

type Props = {
  formProps: EventRewardFormProps;
  setFormProps: React.Dispatch<React.SetStateAction<EventRewardFormProps>>;
};

const EventRewardSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Слишком короткое название.")
    .max(40, "Слишком длинное название.")
    .required("Введите название."),
  description: Yup.string()
    .min(2, "Слишком короткое название.")
    .max(200, "Слишком длинное название.")
    .required("Введите название."),
  image: Yup.mixed().required("Выберите файл."),
});

function EventRewardForm({ formProps, setFormProps }: Props) {
  const { initialValues, type } = formProps;
  const isCreationForm = type === "create";

  const { create, update } = useEventRewardsState();

  const handleUpdateEventReward = (
    prevValues: EventRewardInitialValues,
    values: EventRewardInitialValues
  ) => {
    const isImageChanged = values.image !== prevValues.image;
    const prevImage = prevValues.image as string;

    update(prevValues.id!, isImageChanged, prevImage, values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log("EVENT REWARD FORM VALUES: ", values);
      isCreationForm
        ? create(values)
        : handleUpdateEventReward(initialValues, values);
      setFormProps((state) => ({ ...state, visible: false }));
    },
    validationSchema: EventRewardSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="surface-card flex flex-column gap-4">
        <div className="grid border-round">
          <div className="col-12 flex flex-column gap-2">
            <FormikTextInput
              formik={formik}
              placeholder="Название"
              field="name"
              label="Название"
            />
          </div>

          <div className="col-12 md:col-6 flex gap-2 flex-column">
            <FormikTextArea
              field="description"
              label="Описание"
              placeholder="Описание"
              formik={formik}
            />
          </div>

          <FormikImageSelect formik={formik} field="image" />

          <Button
            type="submit"
            label={isCreationForm ? "Создать" : "Сохранить"}
          />
        </div>
      </div>
    </form>
  );
}

const MemoizedEventRewardForm = React.memo(EventRewardForm);
export default MemoizedEventRewardForm;
