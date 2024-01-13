import React from "react";
import styles from "./heading.module.scss";

const Heading = ({ mode }) => {
  return <h1 className={mode === "dark" ? styles.dark : ""}>Welcome</h1>;
};

export default Heading;
