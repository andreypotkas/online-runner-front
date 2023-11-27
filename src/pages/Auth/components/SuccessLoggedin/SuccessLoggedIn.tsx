import React from "react";

import "./SuccessLoggedIn.scss";
import styles from "../../Auth.module.scss";

function SuccessLoggedIn() {
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_container}>
        <div className="flex gap-2 align-items-center">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "4rem", color: "green" }}
          ></i>
          <div className="text-3xl text-center">Вы успешно вошли!</div>
        </div>
      </div>
    </div>
  );
}

const MemoizedSuccessLoggedIn = React.memo(SuccessLoggedIn);
export default MemoizedSuccessLoggedIn;
