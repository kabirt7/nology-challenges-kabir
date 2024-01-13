import React from "react";
import styles from "./Card.module.scss";

const Card = ({ name, manufacturer, length, index }) => {
  return (
    <div
      className={index % 2 === 1 ? `${styles.odd} ${styles.card}` : styles.card}
    >
      <h2>{name}</h2>
      <p>{manufacturer}</p>
      <p>{length}</p>
    </div>
  );
};

export default Card;

// {key % 2 === 0 ? {styles.card} : ""}>
