import "./App.css";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./page/Product/Product";
import About from "./page/About/about";
import ShopingCart from "./page/ShpoingCart/ShopingCart";

const App = () => {
  return (
    <div className="app">
      <Home />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<ShopingCart />} />
      </Routes>
    </div>
  );
};

export default App;
