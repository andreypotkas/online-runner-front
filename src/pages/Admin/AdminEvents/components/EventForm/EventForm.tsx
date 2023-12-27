import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";

import FormikDatePicker from "@/components/shared/Formik/FormikDatePicker/FormikDatePicker";
import FormikDropdown from "@/components/shared/Formik/FormikDropdown/FormikDropdown";
import FormImageSelect from "@/components/shared/Formik/FormikImageSelect/FormikImageSelect";
import FormikTextArea from "@/components/shared/Formik/FormikTextArea/FormikTextArea";
import FormikTextInput from "@/components/shared/Formik/FormikTextInput/FormikTextInput";
import { useEventRewardsState } from "@/state/eventRewards.state";
import { useEventsState } from "@/state/events.state";
import {
  EventCategoriesEnum,
  EventFormProps,
  EventInitialValues,
  StatusEnum,
} from "@/types/entities/event.type";

import EventParticipationForm from "./components/EventParticipationForm";

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

const EventSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Слишком короткое название.")
    .max(40, "Слишком длинное название.")
    .required("Введите название."),
  description: Yup.string()
    .min(2, "Слишком короткое название.")
    .max(500, "Слишком длинное название.")
    .required("Введите название."),
  image: Yup.mixed().required("Выберите файл."),

  category: Yup.mixed().required("Выберите категорию."),
  participationOptions: Yup.array()
    .of(
      Yup.object({
        name: Yup.string().required(),
        price: Yup.number().required(),
        reward: Yup.number().required(),
      })
    )
    .min(1, "Выберите хотя бы 1 вариант участия.")
    .required("Выберите хотя бы 1 вариант участия."),
});

function EventForm({ formProps, setFormProps }: Props) {
  const { initialValues, type } = formProps;
  const isCreationForm = type === "create";

  const { create, update } = useEventsState();
  const { rewards, getAll } = useEventRewardsState();

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
      console.log("EVENT FORM VALUES", values);

      isCreationForm
        ? create(values)
        : handleUpdateEvent(initialValues, values);
      setFormProps((state) => ({ ...state, visible: false }));
    },
    validationSchema: EventSchema,
  });

  useEffect(() => {
    isCreationForm && getAll();
  }, [getAll, isCreationForm]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-column gap-2 py-4">
        <div className="grid">
          <FormikTextInput
            formik={formik}
            placeholder="Название"
            field="name"
            label="Название"
          />

          <div className="col-12 md:col-6 flex gap-2 flex-column">
            <FormikTextArea
              field="description"
              label="Описание"
              placeholder="Описание"
              formik={formik}
            />
          </div>

          <FormImageSelect formik={formik} field="image" />

          <FormikDatePicker
            field={"startDate"}
            label={"Дата начала"}
            formik={formik}
          />
          <FormikDatePicker
            field={"endDate"}
            label={"Дата окончания"}
            formik={formik}
          />

          <FormikDropdown
            items={categories}
            field={"category"}
            label={"Категория"}
            formik={formik}
          />
          <FormikDropdown
            items={statuses}
            field={"status"}
            label={"Статус"}
            formik={formik}
            placeholder="Выберите статус"
          />
        </div>

        <div>
          <div className="flex gap-2 align-items-center mb-2">
            Варианты участия
          </div>

          <div className="flex flex-column gap-2">
            {rewards && isCreationForm && (
              <EventParticipationForm
                key={Math.random()}
                rewards={rewards}
                eventFormik={formik}
              />
            )}
          </div>
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
