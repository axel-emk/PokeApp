import Pokedex from "../assets/pokedex.png";
import Pokebola from "../assets/pokebola.gif";
import styles from "./loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      {/* <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex" /> */}
      <img className={styles.loadingScreenIcon} src={Pokebola} alt="Pokebola" />
    </div>
  );
}
export default LoadingScreen;
