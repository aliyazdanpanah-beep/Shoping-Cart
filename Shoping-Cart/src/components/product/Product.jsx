import "./Product.css";
import { useState, useEffect } from "react";

const Product = () => {
  const [ShopingCart, setShopingCart] = useState(1);

  const HndelChange = () => {
    const Cart = setShopingCart(ShopingCart + 1);
  };
  console.log(ShopingCart);

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
