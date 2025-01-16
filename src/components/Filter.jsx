import { useSearchParams } from "react-router-dom";

const Filter = () => {
  //urldeki arama parametrelerine erişmek ve bu parametreleri yönetmek için use Seacrh psrams kullanılır.
  const [searchParams, setSearchParams] = useSearchParams();

  //Aratma işlemini yapan fonksiyon

  const handleSubmit = (e) => {
    e.preventDefault();

    //formun gönderilmesiyle inputtaki değere eriş
    const text = e.target[0].value;

    //url e  geçilecek parametre ve değeri ayarla
    searchParams.set("search", text);

    //url e bir arama parametresi geç

    setSearchParams(searchParams);
  };
  //Sıralama işlemini yapan fonksiyon
  const handleChange = (e) => {
    //Select alanında ki değere eriş
    const text = e.target.value;
    //Erişilen bu değer ile url e parametre geç.
    searchParams.set("sort", text);

    //Url i güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      {/* Select */}
      <div>
        <select onChange={handleChange} className="form-select">
          <option value="">sırala</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>

      {/*Form */}

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="kitap ismi giriniz..."
        />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Filter;
