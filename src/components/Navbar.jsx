import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      {children}
      <Favourites />
    </nav>
  );
}

export default Navbar;

function Logo() {
  return <div className="navbar__logo">Logo</div>;
}

function Search() {
  return <input type="text" className="text-field" placeholder="search..." />;
}

export function SearchResult() {
  return <div className="navbar__result">{numOfResult} characters</div>;
}

function Favourites() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">4</span>
    </button>
  );
}
