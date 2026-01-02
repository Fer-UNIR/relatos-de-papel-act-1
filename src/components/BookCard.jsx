import { Link } from "react-router-dom";
import "../styles/bookCard.css";

function BookCard({ book }) {
  return (
    <article className="book-card">
      <Link to={`/book/${book.id}`} className="book-card__link">
        <img
          className="book-card__cover"
          src={book.cover}
          alt={`Portada de ${book.title}`}
        />
        <h3 className="book-card__title">{book.title}</h3>
      </Link>

      <p className="book-card__author">{book.author}</p>
      <p className="book-card__meta">
        <span className="book-card__saga">{book.saga}</span>
        {" · "}
        <span className="book-card__category">{book.category}</span>
      </p>

      <p className="book-card__price">${book.price.toLocaleString("es-CL")}</p>
    </article>
  );
}

export default BookCard;