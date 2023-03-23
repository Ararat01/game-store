import styles from "./Slider.module.css";
import React, { useState } from "react";

const Slider = ({ topGames }) => {
  let [position, setPosition] = useState(0);
  const toLeft = () => {
    position <= 0
      ? setPosition(topGames.length - 1)
      : setPosition(position - 1);
  };
  const toRight = () => {
    position >= topGames.length - 1
      ? setPosition(0)
      : setPosition(position + 1);
  };
  return (
    <section className={styles.main}>
      <div
        className={styles.home}
        style={{
          width: 100 * topGames.length + `%`,
          left: -100 * position + "%",
        }}
      >
        {topGames.map((game) => {
          return (
            <div
              key={game.id}
              className={styles.info}
              style={{
                backgroundImage: `url('https://ararat01.github.io/game-store/img/topGames/${game.background}')`,
              }}
            >
              <div className={styles.info__body}>
                <img
                  className={styles.info__img}
                  src={`/game-store/img/topGames/${game.logo}`}
                  alt=""
                />
                <p className={styles.info__about}>{game.about}</p>
                <button tabIndex="-1" className={styles.info__btn}>
                  Download now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={toLeft} className={styles.main__left}>
        <span></span>
      </button>
      <button onClick={toRight} className={styles.main__right}>
        <span></span>
      </button>
    </section>
  );
};

export default Slider;
