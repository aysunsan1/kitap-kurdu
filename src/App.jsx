import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ürünler" element={<Product />} />
          {/* Nested Routes */}
          <Route path="/kategori" element={<Category />}>
            <Route path="hikaye" element={<h1>Hikaye Sayfası</h1>} />
            <Route path="roman" element={<h1>Roman Sayfası</h1>} />
          </Route>
          <Route path="/detay/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
