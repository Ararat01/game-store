import styles from "./Home.module.css";
import GameCard from "../../ui/gameCard/GameCard";
import Header from "../../ui/header/Header";
import { db } from "../../../assets/db";
import Slider from "../../ui/slider/Slider";
import Contact from "../../ui/contact/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Slider topGames={db.topGames} />
      <section className={styles.games} id="games">
        <h3 className={styles.games__title}>Games</h3>
        <div className={styles.games__filters} id="filters">
          <button>By publish date</button>
          <button>By rating</button>
          <button>By downloads</button>
        </div>
        <div className={styles.games__list}>
          {db.games.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })}
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Home;
