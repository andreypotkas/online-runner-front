import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";

import FormDatePicker from "@/components/shared/Form/FormDatePicker/FormDatePicker";
import FormDropdown from "@/components/shared/Form/FormDropdown/FormDropdown";
import FormImageSelect from "@/components/shared/Form/FormImageSelect/FormImageSelect";
import MemoizedBaseInput from "@/components/shared/Form/FormInput/FormInput";
import FormMultiSelect from "@/components/shared/Form/FormMultiSelect/FormMultiSelect";
import FormMultiSelectTemplate from "@/components/shared/Form/FormMultiSelect/FormMultiSelectTemplate";
import FormTextArea from "@/components/shared/Form/FormTextArea/FormTextArea";
import { useEventRewardsState } from "@/state/eventRewards.state";
import { useEventsState } from "@/state/events.state";
import {
  EventCategoriesEnum,
  EventFormProps,
  EventInitialValues,
  ParticipationOptionsEnum,
  StatusEnum,
} from "@/types/entities/event.type";

type Props = {
  formProps: EventFormProps;
  setFormProps: React.Dispatch<React.SetStateAction<EventFormProps>>;
};

const categories = [
  { name: "Велоезда", code: EventCategoriesEnum.Cycling },
  { name: "Бег", code: EventCategoriesEnum.Running },
  { name: "Плавание", code: EventCategoriesEnum.Skiing },
  { name: "Лыжи", code: EventCategoriesEnum.Swimming },
];

const statuses = [
  { name: "Активный", code: StatusEnum.active },
  { name: "Не активный", code: StatusEnum.inactive },
];

const participationOptions = [
  { name: "Бесплатный", code: ParticipationOptionsEnum.free },
  { name: "Базовый", code: ParticipationOptionsEnum.basic },
  { name: "Медиум", code: ParticipationOptionsEnum.medium },
  { name: "Продвинутый", code: ParticipationOptionsEnum.advanced },
];

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

function EventForm({ formProps, setFormProps }: Props) {
  const { initialValues, type } = formProps;
  const isCreationForm = type === "create";

  const { create, update } = useEventsState();
  const { rewards, getAll } = useEventRewardsState();

  const handleCreateEvent = (values: EventInitialValues) => {
    create(values);
  };

  const handleUpdateEvent = (
    prevValues: EventInitialValues,
    values: EventInitialValues
  ) => {
    const prevImage = prevValues.image;
    const isImageChanged = values.image !== prevValues.image;

    update(prevValues.id!, isImageChanged, prevImage as string, values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log("event values", values);

      isCreationForm
        ? handleCreateEvent(values)
        : handleUpdateEvent(initialValues, values);
      setFormProps((state) => ({ ...state, visible: false }));
    },
    validationSchema: SignupSchema,
  });

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-column gap-2 py-4">
        <div className="grid">
          <MemoizedBaseInput
            formik={formik}
            placeholder="Название"
            field="name"
            label="Название"
          />

          <FormTextArea
            field="description"
            label="Описание"
            placeholder="Описание"
            formik={formik}
          />
          <FormImageSelect formik={formik} field="image" />
          <FormDatePicker
            field={"startDate"}
            label={"Дата начала"}
            formik={formik}
          />
          <FormDatePicker
            field={"endDate"}
            label={"Дата окончания"}
            formik={formik}
          />
          <FormMultiSelect
            items={participationOptions}
            field={"participationOptions"}
            label={"Варианты участия"}
            formik={formik}
          />
          <FormDropdown
            items={categories}
            field={"category"}
            label={"Категория"}
            formik={formik}
          />
          <FormDropdown
            items={statuses}
            field={"status"}
            label={"Статус"}
            formik={formik}
          />

          {rewards && (
            <FormMultiSelectTemplate
              items={rewards}
              field={"rewards"}
              label={"Награды"}
              formik={formik}
            />
          )}
        </div>

        <Button
          type="submit"
          label={isCreationForm ? "Создать" : "Сохранить"}
        />
      </div>
    </form>
  );
}

const MemoizedEventForm = React.memo(EventForm);
export default MemoizedEventForm;
