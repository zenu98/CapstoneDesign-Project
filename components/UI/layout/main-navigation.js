import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigaion.module.css";
import { useEffect, useState, useRef, useMemo } from "react";
import { throttle } from "lodash";

const MainNavigation = () => {
  const prevScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        prevScrollY.current = currentScrollY;
      }, 250),
    [prevScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`${visible ? classes.header : classes.header_down}`}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/portfolio/c1">김가영</Link>
          </li>
          <li>
            <Link href="/portfolio/c2">김미르</Link>
          </li>
          <li>
            <Link href="/portfolio/c3">최고운</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
