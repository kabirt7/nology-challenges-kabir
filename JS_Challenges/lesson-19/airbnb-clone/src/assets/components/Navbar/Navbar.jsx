import styles from "./Navbar.module.scss";
import Navicon from "../Navicon/Navicon";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Navicon parentProp={{ title: "Perth" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
      <Navicon parentProp={{ title: "Perth" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
      <Navicon parentProp={{ title: "Perth" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
      <Navicon parentProp={{ title: "Sydney" }} />
    </nav>
  );
};

export default Navbar;
