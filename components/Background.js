import Image from "next/image";
import dummyBackground from "../public/img/dummybg1.jpg";
import classes from "./Detail.module.css";
import { useState, useEffect } from "react";
const Background = () => {
  const [pos, setPos] = useState(0);

  function onScroll() {
    setPos(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Image
        src={dummyBackground}
        alt="dummy"
        className={classes.background}
        style={{ transform: `translateY(${pos / 5}px)` }}
      />
    </div>
  );
};

export default Background;
