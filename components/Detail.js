import classes from "./Detail.module.css";
import Image from "next/image";
import dummyBackground from "../public/img/dummybg1.jpg";
import { useState, useEffect } from "react";

const Detail = (props) => {
  const [pos, setPos] = useState(0);

  function onScroll() {
    setPos(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <div>
        <Image
          src={dummyBackground}
          alt="dummy"
          className={classes.background}
          style={{ transform: `translateY(${pos / 2}px)` }}
        />
      </div>
      <div
        className={classes.container}
        style={{ transform: `translateY(${-pos / 50}px)` }}
      >
        <h1 className={classes.title}>
          굴절,
          <span> Capstone design team-project of SKHU</span>
        </h1>
        <div className={`${classes["introContainer"]}`}>
          <div className={`${classes["introBox-left"]}`}>
            <h2>Introduction</h2>
            <div className={classes.text}>{props.description}</div>
            <div>
              <h2>Technologies Used</h2>
            </div>
          </div>
          <div className={`${classes["introBox-right"]}`}>
            <p className={classes.text}>
              Habibi is an ever-growing art project within Web3, started by the
              one and only . This all began with one word, Habibi. Habibi means
              so many things. It’s a word exchanged between passionate lovers,
              and it’s a word exchanged between caring friends. Simply put, it
              means “dearest” or “darling”. But that’s really selling it short.
            </p>
          </div>
        </div>
        <div>
          <Image src={dummyBackground} alt="dummy" className={classes.imgone} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
