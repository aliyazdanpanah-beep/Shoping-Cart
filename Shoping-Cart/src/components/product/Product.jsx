import "./Product.css";
import { useState, useEffect } from "react";

const Product = (props) => {
  const [ShopingCart, setShopingCart] = useState(1);

  const HndelChange = () => {
    const Cart = setShopingCart(ShopingCart + 1);
  };
  console.log(ShopingCart);

  return (
    <>
      <div className="product">
        <div className="Product-Item">
          <div className="Image"> {props.PrpData.img} </div>
          <div className="Button">
            <button onClick={HndelChange}> {props.PrpData.btn} </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
