import Detail from "@/components/Detail";
import path from "path";
import fs from "fs/promises";

const SelectedPortpoiloPage = (props) => {
  const { loadedClient } = props;

  return (
    <Detail
      introduction={loadedClient.introduction}
      introText={loadedClient.introText}
      contents={loadedClient.contents}
      clientId={loadedClient.id}
    />
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const clientId = params.projectid;

  const data = await getData();

  const client = data.clients.find((client) => client.id === clientId);

  return {
    props: {
      loadedClient: client,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.clients.map((client) => client.id);

  const pathsWithParams = ids.map((id) => ({ params: { projectid: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default SelectedPortpoiloPage;
