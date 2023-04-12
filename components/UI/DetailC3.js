import classes from "../Detail.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
const DetailC1 = (props) => {
  const [pos, setPos] = useState(0);
  const loadedClient = props.loadedClient;
  console.log(loadedClient);

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
          src={`${loadedClient.contents[0]}`}
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
            <div className={classes.text}>{loadedClient.introduction}</div>
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
            <p className={classes.introText}>{loadedClient.introText}</p>
          </div>
        </div>

        <div className={classes.imgone}>
          <Image
            className={classes.imgs}
            src={`${loadedClient.contents[1]}`}
            alt="dummy"
            style={{ borderRadius: "10px" }}
            width={8086}
            height={8086}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailC1;
