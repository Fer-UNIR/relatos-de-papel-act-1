import "../styles/searchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label className="search__label" htmlFor="searchTitle">
        Buscar por título
      </label>
      <input
        id="searchTitle"
        className="search__input"
        type="text"
        placeholder="Ej: Eragon, Juego de tronos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;