import BookCard from "./BookCard";
import "../styles/bookGrid.css";

function BookGrid({ books }) {
  return (
    <section className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}

export default BookGrid;