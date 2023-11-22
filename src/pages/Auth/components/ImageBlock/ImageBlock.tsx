import React from "react";
import styles from "./ImageBlock.module.scss";
import bg from "@/assets/images/BgRegistration.png";

function ImageBlock() {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background-registration-image" />
    </div>
  );
}

const MemoizedImageBlock = React.memo(ImageBlock);
export default MemoizedImageBlock;
