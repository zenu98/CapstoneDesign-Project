import classes from "../Detail.module.css";
import styles from "./DetailC2.module.css";
import Image from "next/image";

const DetailC2 = (props) => {
  const loadedClient = props.loadedClient;
  const pos = props.pos;

  return (
    <div>
      <div className={classes.background}>
        <Image
          className={classes.mainimag}
          src={`${loadedClient.contents[0]}`}
          alt="dummy"
          fill
          style={{ transform: `translateY(${pos / 1.5}px)` }}
        />
      </div>
      <div
        className={classes.container}
        style={{ transform: `translateY(${-pos / 100}px)` }}
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
        <div className={styles.first_image_section}>
          <div className={styles.first_image_container}>
            <Image
              width={2500}
              height={1000}
              className={classes.imgs}
              src={`${loadedClient.contents[1]}`}
              alt="dummy"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

        <div className={classes.imagethree}>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[2]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[3]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[4]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailC2;
