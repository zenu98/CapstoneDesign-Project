import classes from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <h1>안녕하세요 가나다라마바사아자차카타파하</h1>
      <div className={`${classes["project-info"]}`}>
        <div className={`${classes["info-one"]}`}>
          <h2>What We Did</h2>
        </div>
        <div className={`${classes["info-two"]}`}></div>
      </div>
    </div>
  );
};

export default Detail;
