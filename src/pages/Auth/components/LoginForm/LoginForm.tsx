import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "primereact/button";

import MemoizedBaseInput from "@/components/shared/Formik/FormikTextInput/FormikTextInput";
import { LoginData, useAuthState } from "@/state/auth.state";

import { AuthFormInitialValues } from "../../types/auth.types";

import styles from "../../Auth.module.scss";

const initialValues: AuthFormInitialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

function LoginForm() {
  const { login, loading } = useAuthState();

  const formik = useFormik<AuthFormInitialValues>({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      login(values as LoginData);
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <form onSubmit={formik.handleSubmit}>
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
          <Button
            loading={!!loading}
            type="submit"
            label="Войти"
            className="w-full"
          />
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
            to="/auth/register"
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >
            Создать!
          </Link>
        </div>
      </div>
    </div>
  );
}

const MemoizedLoginForm = React.memo(LoginForm);
export default MemoizedLoginForm;
