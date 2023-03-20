import styles from "./GameCard.module.css";

const GameCard = ({ game }) => {
  return (
    <div className={styles.gameCard}>
      <img
        className={styles.gameCard__img}
        src={`/img/games/${game.img}`}
        alt=""
      />
      <h4 className={styles.gameCard__name}>{game.name}</h4>
    </div>
  );
};

export default GameCard;
