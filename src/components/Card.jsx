import { Link } from "react-router-dom";

const Card = ({ book }) => {
  console.log(book);
  return (
    <div className="card shadow p-2">
      <img src={book.image} className="rounded" alt="" />
      <div className="card-body">
        <h4>{book.title}</h4>
        <h4>{book.author}</h4>
      </div>
      <Link className="btn btn-primary w-100" to={`/detay/${book.id}`}>
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
