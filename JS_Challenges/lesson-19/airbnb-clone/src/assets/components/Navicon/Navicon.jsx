import styles from "./Navicon.module.scss";

const Navicon = ({ parentProp }) => {
  return (
    <article className={styles.navicon}>
      <img src="../../../../public/vite.svg" alt="Image Alt Text" />
      <h4>{parentProp.title}</h4>
    </article>
  );
};

export default Navicon;
