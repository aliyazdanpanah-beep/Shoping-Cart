import "./App.css";
import Home from "./page/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./page/Product/Product";
import About from "./page/About/about";
import ShopingCart from "./page/ShpoingCart/ShopingCart";
import { ShopContextProvider } from "./context/ShopContext";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product").then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  return (
    <div className="app">
      <ShopContextProvider>
        <Home />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          {product.map((IdData) => (
            <Route
              path="/cart"
              element={<ShopingCart key={IdData.id} />}
              IdDate={IdData}
            />
          ))}
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
