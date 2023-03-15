import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portpoilo</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
