import Link from "next/link";
import path from "path";
import fs from "fs/promises";
function HomePage(props) {
  const { clients } = props;
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/portfolio/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      clients: data.clients,
    },
  };
}

export default HomePage;
