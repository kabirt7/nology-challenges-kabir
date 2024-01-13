import styles from "./CardContainer.module.scss";
import Card from "../Card/Card";
import cities from "../../../data/data.json";

const CardContainer = () => {
  return (
    <main className={styles.container}>
      {cities &&
        cities.map((city) => {
          return <Card key={city.id} title={city.title} />;
        })}
    </main>
  );
};

export default CardContainer;
