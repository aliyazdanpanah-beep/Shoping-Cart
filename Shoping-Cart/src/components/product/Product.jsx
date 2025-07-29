import "./Product.css";
import { useState, useEffect } from "react";

const Product = () => {
  const [ShopingCart, setShopingCart] = useState("Ali");

  const HndelChange = () => {
    setShopingCart("mamad");
    console.log(ShopingCart);
  };

  return (
    <>
      <div className="product">
        <div className="Product-Item">
          <div className="Image"></div>
          <div className="Button">
            <button onClick={HndelChange}>Add to Shoping Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
