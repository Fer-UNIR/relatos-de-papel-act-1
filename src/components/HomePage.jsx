import { useMemo, useState } from "react";
import books from "../mocks";
import SearchBar from "./SearchBar";
import BookGrid from "./BookGrid";
import "../styles/home.css";

function HomePage() {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((b) => b.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="home">
      <div className="home__header">
        <h2 className="home__title">Catálogo</h2>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <p className="home__results">
        Mostrando {filteredBooks.length} de {books.length}
      </p>

      <BookGrid books={filteredBooks} />
    </main>
  );
}

export default HomePage;