import { useEffect, useState } from "react";
import { Characters, allCharacters } from "../data/data";
import "./App.css";
import CharecterDetail from "./components/CharecterDetail";
import CharecterList from "./components/CharecterList";
import Navbar, { SearchResult } from "./components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
try {
  setIsLoading(true);
  const {data} = await axios.get("https://rickandmortyapi.com/api/character");
  setCharacters(data.results);
} catch (err) {
  console.log(err.response.data.error);
  toast.error(err.response.data.error)
}finally{
  setIsLoading(false)
}
    }
  }, []);

  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <Main>
        <CharecterList characters={characters} isLoading={isLoading} />
        <CharecterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
