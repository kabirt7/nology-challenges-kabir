import styles from "./Card.module.scss";
import CardInfo from "../CardInfo/CardInfo";

const Card = ({ title }) => {
  return (
    <article className={styles.card}>
      <img src="../../../../public/edit.jpg" />
      <div>
        <CardInfo title={title} />
      </div>
    </article>
  );
};

export default Card;
