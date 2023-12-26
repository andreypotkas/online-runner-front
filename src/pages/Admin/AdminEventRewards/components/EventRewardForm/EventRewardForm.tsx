import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

import FormImageSelect from "@/components/shared/Form/FormImageSelect/FormImageSelect";
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
  price: Yup.number()
    .required("Поле не может быть пустым.")
    .integer("Число должно быть целым."),
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
          <div className="col-6 flex flex-column gap-2">
            <label htmlFor={"name"} className="block text-900 font-medium mb-2">
              Название
            </label>
            <InputText
              id={"name"}
              type="text"
              onChange={formik.handleChange}
              value={formik.values["name"]}
              placeholder={"Название"}
              className="w-full"
            />
            <span className="validation-form-error">
              <>{formik.errors["name"]}</>
            </span>
          </div>

          <div className="col-6 flex flex-column gap-2">
            <label
              htmlFor={"price"}
              className="block text-900 font-medium mb-2"
            >
              Цена
            </label>
            <InputNumber
              id="price"
              min={1}
              value={formik.values["price"]}
              showButtons
              buttonLayout="horizontal"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              onChange={(e) => formik.setFieldValue("price", e.value)}
            />
            <div className="validation-form-error">
              {formik.errors["price"]}
            </div>
          </div>

          <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
            <label htmlFor={"description"} className="font-medium">
              Описание
            </label>
            <textarea
              id={"description"}
              value={formik.values["description"]}
              onChange={(e) =>
                formik.setFieldValue("description", e.target.value)
              }
              className="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable h-full"
            ></textarea>
            <div className="validation-form-error">
              {formik.errors["description"]}
            </div>
          </div>

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
