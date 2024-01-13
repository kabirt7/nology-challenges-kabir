import styles from "./CardInfo.module.scss";

const CardInfo = ({ title }) => {
  const distance = "2000";
  return (
    <>
      <header className={styles.header}>
        <h4>{title}</h4>
      </header>
      <p>{distance} kilometres away</p>
    </>
  );
};

export default CardInfo;
