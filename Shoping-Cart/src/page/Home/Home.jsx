import Navbar from "../../components/navbar/Navbar";
import ProductPage from "../Product/Product";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
import About from "../About/about";
import ShopingCart from "../ShpoingCart/ShopingCart";

const Home = () => {
  return (
    <>
      <div className="Navbar-Wrapper">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<ShopingCart/>} />
      </Routes>
    </>
  );
};

export default Home;
