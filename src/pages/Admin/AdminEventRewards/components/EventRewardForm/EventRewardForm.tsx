import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Divider } from "primereact/divider";

import FormImageSelect from "@/components/shared/Form/FormImageSelect/FormImageSelect";
import MemoizedBaseInput from "@/components/shared/Form/FormInput/FormInput";
import MemoizedFormInputNumber from "@/components/shared/Form/FormInputNumber/FormImputNumber";
import FormTextArea from "@/components/shared/Form/FormTextArea/FormTextArea";
import { useEventRewardsState } from "@/state/eventRewards.state";
import { EventRewardInitialValues } from "@/types/entities/eventReward.type";

import { FormProps } from "../../AdminEventRewards";

type Props = {
  formProps: FormProps;
  setFormProps: React.Dispatch<React.SetStateAction<FormProps>>;
};

const SignupSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(30, "Too Long!")
  //   .required("Required"),
  // description: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // category: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // startDate: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // endDate: Yup.string().email("Invalid email").required("Required"),
});

function EventRewardForm({ formProps, setFormProps }: Props) {
  const { initialValues, type } = formProps;
  const isCreationForm = type === "create";

  const { create, update } = useEventRewardsState();

  const handleCreateEventReward = (values: EventRewardInitialValues) => {
    create(values);
  };

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
      console.log("event reward values", values);
      isCreationForm
        ? handleCreateEventReward(values)
        : handleUpdateEventReward(initialValues, values);
      setFormProps((state) => ({ ...state, visible: false }));
    },
    validationSchema: SignupSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="surface-card flex flex-column gap-4">
        <div className="grid  p-4 border-round">
          <Chip
            label={
              type === "create" ? "Создание награды" : "Редактирование награды"
            }
          />
          <Divider />
          <MemoizedBaseInput
            formik={formik}
            placeholder="Название"
            field="name"
            label="Название"
          />
          <MemoizedFormInputNumber
            formik={formik}
            placeholder="Цена"
            field="price"
            label="Цена"
          />

          <FormTextArea
            field="description"
            label="Описание"
            placeholder="Описание"
            formik={formik}
          />
          <FormImageSelect formik={formik} field="image" />

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
