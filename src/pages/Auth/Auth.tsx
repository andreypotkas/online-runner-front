import { useAuthState } from "@/state/auth.state";

import MemoizedImageBlock from "./components/ImageBlock/ImageBlock";
import MemoizedLoginForm from "./components/LoginForm/LoginForm";
import MemoizedRegistrationForm from "./components/RegistrationForm/RegistrationForm";
import MemoizedSuccessLoggedIn from "./components/SuccessLoggedin/SuccessLoggedIn";
import { AuthFormTypes } from "./types/auth.types";

import styles from "./Auth.module.scss";

type Props = {
  type: AuthFormTypes;
};

function Auth({ type }: Props) {
  const { user } = useAuthState();
  console.log(user);

  const displayedForm = () => {
    if (user) {
      console.log("YES");

      return <MemoizedSuccessLoggedIn />;
    }

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
