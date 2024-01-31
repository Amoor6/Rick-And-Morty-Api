import { useEffect, useState } from "react";
import { Characters, allCharacters } from "../data/data";
import "./App.css";
import CharecterDetail from "./components/CharecterDetail";
import CharecterList from "./components/CharecterList";
import Navbar, { SearchResult } from "./components/Navbar";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <Main>
        <CharecterList characters={characters} />
        <CharecterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
