import React from "react";

import bg from "@/assets/images/BgRegistration.png";

import styles from "./ImageBlock.module.scss";

function ImageBlock() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background-registration-image" />
    </div>
  );
}

const MemoizedImageBlock = React.memo(ImageBlock);
export default MemoizedImageBlock;
