import React from "react";
import styles from "./index.module.css";
const Container = ({ children, position = "left" }) => {
  return (
    <>
      {position === "left" ? (
        <div className={styles.container}>{children}</div>
      ) : null}
      {position === "right" ? (
        <div className={styles.rightcontainer}>{children}</div>
      ) : null}
      {position === "fixed" ? (
        <div className={styles.fixedcontainer}>{children}</div>
      ) : null}
    </>
  );
};

export default Container;
