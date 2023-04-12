import DetailC1 from "./UI/DetailC1";
import DetailC2 from "./UI/DetailC2";
import DetailC3 from "./UI/DetailC3";

const Detail = (props) => {
  const loadedClient = props.loadedClient;
  const id = loadedClient.id;
  console.log(id);

  return (
    <>
      {id === "c1" && <DetailC1 loadedClient={loadedClient} />}
      {id === "c2" && <DetailC2 loadedClient={loadedClient} />}
      {id === "c3" && <DetailC3 loadedClient={loadedClient} />}
    </>
  );
};

export default Detail;
