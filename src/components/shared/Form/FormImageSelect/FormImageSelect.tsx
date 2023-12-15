/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { FormikProps } from "formik";

import {
  FileUpload,
  FileUploadHeaderTemplateOptions,
} from "primereact/fileupload";

type Props = {
  formik: FormikProps<any>;
  field: string;
};

export default function FormImageSelect({ formik, field }: Props) {
  const fileUploadRef = useRef<FileUpload>(null);
  const image = formik.values.image;

  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { className, chooseButton } = options;

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
      </div>
    );
  };

  const itemTemplate = (inFile: object) => {
    const file = inFile as File;

    return (
      <div className="flex align-items-center flex-wrap">
        <img
          alt={file.name}
          role="presentation"
          src={(file as any).objectURL}
          className="w-30rem h-20rem"
        />
      </div>
    );
  };

  const itemTemplateExistingImage = () => {
    return (
      <div className="flex align-items-center flex-wrap">
        <img
          alt={"reward image"}
          role="presentation"
          src={image}
          className="w-30rem h-20rem"
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    label: "Выбрать изображение",
    className: "custom-choose-btn  p-button-outlined",
  };

  return (
    <div className="col-12 md:col-6 mb-4 flex gap-2 flex-column">
      <span className="font-medium">{"Изображение"}</span>
      <FileUpload
        ref={fileUploadRef}
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={
          formik.values.image ? itemTemplateExistingImage : emptyTemplate
        }
        chooseOptions={chooseOptions}
        onSelect={(e) => formik.setFieldValue(field, e.files[0])}
      />
    </div>
  );
}
