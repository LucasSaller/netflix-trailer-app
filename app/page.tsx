import Row from "./components/Row";
import { rows } from "./lib/lib";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="bg-black">
      <NavBar />
      <Banner />
      <div className="mt-5">
        {rows.map((movie, index) => (
          <Row
            key={index}
            title={movie.title}
            fetchUrl={movie.request}
            isLargeRow={movie.isLargeRow}
          />
        ))}
      </div>
    </main>
  );
}
