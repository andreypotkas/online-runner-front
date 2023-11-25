import React from "react";
import { Button } from "primereact/button";
import styles from "../../Auth.module.scss";
import MemoizedBaseInput from "@/components/Form/FormInput/FormInput";
import { useFormik } from "formik";
import { FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { LoginData, useAuthState } from "@/state/auth.state";
import { AuthFormInitialValues } from "../../types/auth.types";

const initialValues: AuthFormInitialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

function LoginForm() {
  const { login, loading, error } = useAuthState();

  const formik = useFormik({
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
