import classes from "./Detail.module.css";
import Image from "next/image";

import { useState, useEffect } from "react";

const Detail = (props) => {
  const [pos, setPos] = useState(0);
  const contents = props.contents;
  const clientId = props.clientId;
  console.log(contents);
  function onScroll() {
    setPos(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <div className={classes.background}>
        <Image
          className={classes.mainimag}
          src={`${contents[0]}`}
          alt="dummy"
          fill
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
            <div className={classes.text}>{props.introduction}</div>
            <div>
              <h2>Technologies Used</h2>
              <ul className={classes.usedTech}>
                <li className={`${classes["usedTech-contents"]}`}>123123</li>
                <li className={`${classes["usedTech-contents"]}`}>123123</li>
                <li className={`${classes["usedTech-contents"]}`}>123123</li>
                <li className={`${classes["usedTech-contents"]}`}>123123</li>
                <li className={`${classes["usedTech-contents"]}`}>123123</li>
              </ul>
            </div>
          </div>
          <div className={`${classes["introBox-right"]}`}>
            <p className={classes.introText}>{props.introText}</p>
          </div>
        </div>

        <div className={classes.imgone}>
          <Image
            width={2500}
            height={500}
            className={classes.imgs}
            src={`${contents[1]}`}
            alt="dummy"
            style={{ borderRadius: "10px" }}
          />
        </div>

        {clientId === "c1" && (
          <div className={classes.imagethree}>
            <div className={`${classes["imagethree-content"]}`}>
              <Image
                src={`${contents[2]}`}
                alt="dummy"
                fill
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={`${classes["imagethree-content"]}`}>
              <Image
                src={`${contents[3]}`}
                alt="dummy"
                fill
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className={`${classes["imagethree-content"]}`}>
              <Image
                src={`${contents[4]}`}
                alt="dummy"
                fill
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
