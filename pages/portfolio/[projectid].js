import Detail from "@/components/Detail";
import path from "path";
import fs from "fs/promises";

const SelectedPortpoiloPage = (props) => {
  const { loadedClient } = props;

  return <Detail description={loadedClient.description} />;
};
export async function getStaticProps(context) {
  const { params } = context;

  const clientId = params.projectid;

  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const client = data.clients.find((client) => client.id === clientId);

  return {
    props: {
      loadedClient: client,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { projectid: "c1" } },
      { params: { projectid: "c2" } },
      { params: { projectid: "c3" } },
    ],
    fallback: false,
  };
}

export default SelectedPortpoiloPage;
