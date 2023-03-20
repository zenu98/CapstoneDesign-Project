import classes from "./Detail.module.css";

const Detail = (props) => {
  return (
    <div className={classes.container}>
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
            one and only . This all began with one word, Habibi. Habibi means so
            many things. It’s a word exchanged between passionate lovers, and
            it’s a word exchanged between caring friends. Simply put, it means
            “dearest” or “darling”. But that’s really selling it short.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
