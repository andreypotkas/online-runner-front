import React from "react";
import { Button } from "primereact/button";
import styles from "./RegistrationForm.module.scss";
import MemoizedBaseInput from "@/components/Form/FormInput/FormInput";
import { useFormik } from "formik";
import { RegistrationFormInitialValues } from "@/pages/Auth/types/registration.types";
import { FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const initialValues: RegistrationFormInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

function RegistrationForm() {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.name_container}>
            <MemoizedBaseInput
              formik={formik}
              placeholder="Имя"
              field="firstName"
              label="Имя"
            />
            <MemoizedBaseInput
              formik={formik}
              placeholder="Фамилия"
              field="lastName"
              label="Фамилия"
            />
          </div>
          <MemoizedBaseInput
            formik={formik}
            placeholder="Email адрес"
            field="email"
            label="Email"
          />
          <MemoizedBaseInput
            formik={formik}
            placeholder="Пароль"
            field="password"
            label="Пароль"
          />
          <Button type="submit" label="Регистрация" className="w-full" />
        </form>

        <div className="m-3 text-center">
          <span>или</span>
        </div>

        <Button
          className={styles.social_btn}
          label="Войти с помощью Google"
          icon={<FaGoogle />}
        />

        <div className="text-center mt-2">
          <span className="text-600 font-medium line-height-3">
            Уже есть аккаунт?
          </span>
          <Link
            to="/"
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >
            Войти!
          </Link>
        </div>
      </div>
    </div>
  );
}

const MemoizedRegistrationForm = React.memo(RegistrationForm);
export default MemoizedRegistrationForm;
