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

const AuthForms: Record<AuthFormTypes, JSX.Element> = {
  [AuthFormTypes.LOGIN]: <MemoizedLoginForm />,
  [AuthFormTypes.REGISTER]: <MemoizedRegistrationForm />,
};

function Auth({ type }: Props) {
  const { user } = useAuthState();
  console.log(user);

  const displayedForm = AuthForms[type];

  return (
    <div className="layout-main-container">
      <div className={styles.page_container}>
        <MemoizedImageBlock />
        <>{user ? <MemoizedSuccessLoggedIn /> : displayedForm}</>
      </div>
    </div>
  );
}

export default Auth;
