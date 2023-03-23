import { useNavigate } from "react-router-dom";
import styles from "./GameCard.module.css";

const GameCard = ({ game }) => {
  const nav = useNavigate();
  const openGame = () => {
    nav(`/game/${game.id}`);
  };
  return (
    <div onClick={openGame} className={styles.gameCard}>
      <img
        className={styles.gameCard__img}
        src={`/game-store/img/games/${game.img}`}
        alt=""
      />
      <h4 className={styles.gameCard__name}>{game.name}</h4>
    </div>
  );
};

export default GameCard;
