import styles from "./GameView.module.css";
import Header from "../../ui/header/Header";
import { db } from "../../../assets/db";
import Contact from "../../ui/contact/Contact";
import { useParams } from "react-router-dom";

function GameView() {
  let { id } = useParams();
  let game = db.games.filter((gm) => gm.id == id)[0];
  window.scrollTo({
    top: 0,
  });
  return (
    <div>
      <Header />
      <section className={styles.game}>
        <div className={styles.game__info}>
          <div className={styles.game__info_left}>
            <h2 className={styles.game__name}>{game.name}</h2>
            <img
              className={styles.game__img}
              src={`/game-store/img/games/${game.img}`}
              alt=""
            />
            <p className={styles.game__rating}>
              Rating: <span>{game.rating}/5</span>
            </p>
            <p className={styles.game__downloads}>
              Downloaded: <span>{game.downloads}</span>
            </p>
          </div>
          <div className={styles.game__info_right}>
            <div className={styles.game_fullInfo}>
              <p>Publish date: {game.info.releaseDate}</p>
              <p>Genre: {game.info.genre.join(", ")}</p>
              <p>Platform: {game.info.platform}</p>
              <p>Interface Language: {game.info.interfaceLanguage}</p>
              <p>Publisher: {game.info.publisher}</p>
            </div>
            <div className={styles.game_system}>
              <h4>System requirements</h4>
              <p>OS: {game.system.os}</p>
              <p>Processor: {game.system.processor}</p>
              <p>RAM: {game.system.ram}</p>
              <p>Video Card: {game.system.videoCard}</p>
              <p>Disk Space: {game.system.diskSpace}</p>
            </div>
          </div>
        </div>
        <div className={styles.game__about}>
          <h4>About:</h4>
          <p>{game.about}</p>
        </div>
        <div className={styles.game__download}>
          <p>
            Disk Space: <span>{game.system.diskSpace}</span>
          </p>
          <a href="https://itorrents-igruha.org/engine/download.php?id=48505">
            Download now
          </a>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default GameView;
