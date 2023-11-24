import styles from "./Auth.module.scss";
import MemoizedImageBlock from "./components/ImageBlock/ImageBlock";
import MemoizedLoginForm from "./components/LoginForm/LoginForm";
import MemoizedRegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { useMemo } from "react";

export enum AuthFormTypes {
  LOGIN = "login",
  REGISTER = "register",
}

type Props = {
  type: AuthFormTypes;
};

function Auth({ type }: Props) {
  const displayedForm = () => {
    if (type === AuthFormTypes.LOGIN) {
      return <MemoizedLoginForm />;
    }

    if (type === AuthFormTypes.REGISTER) {
      return <MemoizedRegistrationForm />;
    }
  };

  return (
    <div className="layout-main-container">
      <div className={styles.page_container}>
        <MemoizedImageBlock />
        {displayedForm()}
      </div>
    </div>
  );
}

export default Auth;
