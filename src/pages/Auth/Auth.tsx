import styles from "./Auth.module.scss";
import MemoizedImageBlock from "./components/ImageBlock/ImageBlock";
import MemoizedRegistrationForm from "./components/RegistrationForm/RegistrationForm";

function Auth() {
  return (
    <div className="layout-main-container">
      <div className={styles.container}>
        <MemoizedImageBlock />
        <MemoizedRegistrationForm />
      </div>
    </div>
  );
}

export default Auth;
