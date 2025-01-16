import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  //UseNavigate

  const navigate = useNavigate();

  //Kitap verilerini yönetmek için bir state oluştur

  const [books, setBooks] = useState([]);

  //Urldeki  parametrelere erişip apiya istek at

  const [searchParams] = useSearchParams();
  useEffect(() => {
    //urldeki parametrelere erişip bunları apiaya gönder
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    //Bileşen ekrana geldiğinde apı ya istek at
    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => {
        navigate("notfound");
      });
  }, [searchParams]);

  return (
    <div className="container my-5">
      {/*Bulunan kitaplar */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-2 text-center">
          Aratılan kitap bulunamadı !!
        </h3>
      ) : (
        <h3>{books.length} Kitap bulundu</h3>
      )}

      {/*Filtreleme Alanı */}
      <Filter />
      {/*Kitaplar Alanı*/}
      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
