import { useParams } from "react-router-dom";
import books from "../mocks";
import { useCart } from "../context/CartContext";
import "../styles/bookPage.css";

function BookPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <main style={{ padding: 16 }}>
        <p>Libro no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="book-page">
      <img
        className="book-page__cover"
        src={book.cover}
        alt={`Portada de ${book.title}`}
      />

      <div className="book-page__info">
        <h2 className="book-page__title">{book.title}</h2>
        <p className="book-page__author">{book.author}</p>

        <p className="book-page__meta">
          {book.saga} · {book.category}
        </p>

        <p className="book-page__description">{book.description}</p>

        <p className="book-page__price">
          ${book.price.toLocaleString("es-CL")}
        </p>

        <button
          className="book-page__button"
          onClick={() => addToCart(book)}
        >
          Añadir al carrito
        </button>
      </div>
    </main>
  );
}

export default BookPage;