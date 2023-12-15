import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
import { Divider } from "primereact/divider";

import FormDatePicker from "@/components/shared/Form/FormDatePicker/FormDatePicker";
import FormDropdown from "@/components/shared/Form/FormDropdown/FormDropdown";
import FormImageSelect from "@/components/shared/Form/FormImageSelect/FormImageSelect";
import MemoizedBaseInput from "@/components/shared/Form/FormInput/FormInput";
import FormMultiSelect from "@/components/shared/Form/FormMultiSelect/FormMultiSelect";
import FormTextArea from "@/components/shared/Form/FormTextArea/FormTextArea";
import { useCreateEvent } from "@/hooks/admin/Event/useCreateEvent";
import {
  CreateEventInitialValues,
  EventCategoriesEnum,
  ParticipationOptionsEnum,
} from "@/types/entities/event.type";

const initialValues: CreateEventInitialValues = {
  name: "",
  description: "",
  image: null,
  category: EventCategoriesEnum.Running,
  participationOptions: [ParticipationOptionsEnum.free],
  startDate: null,
  endDate: null,
};

const categories = [
  { name: "Велоезда", code: EventCategoriesEnum.Cycling },
  { name: "Бег", code: EventCategoriesEnum.Running },
  { name: "Плавание", code: EventCategoriesEnum.Skiing },
  { name: "Лыжи", code: EventCategoriesEnum.Swimming },
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

function CreateEvent() {
  const { createEvent } = useCreateEvent();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      createEvent(values);
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className="layout-main-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="surface-card flex flex-column gap-4">
          <div className="grid  p-4 shadow-2 border-round">
            <Chip label=" Информация о событии" />
            <Divider />
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
          </div>

          <Button type="submit" label="Создать" />
        </div>
      </form>
    </div>
  );
}

const MemoizedCreateEvent = React.memo(CreateEvent);
export default MemoizedCreateEvent;
