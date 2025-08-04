import { ShopContext } from "../../context/ShopContext";
import "./Product.css";
import { useContext } from "react";

const Product = (props) => {
  const { AddtoCart, RemoveFromCart, cartItems } = useContext(ShopContext);
  const productId = props.PrpData.id;

  return (
    <div className="product">
      <div className="Product-Item">
        <div className="Image"> {props.PrpData.img} </div>
        <div className="Button">
          <button
            onClick={() => AddtoCart(productId)}
            className="btn btn-primary m-auto"
          >
            {props.PrpData.btnS}
          </button>
          <p>{cartItems[productId] || 0}</p>{" "}
          <button
            onClick={() => RemoveFromCart(productId)}
            className="btn btn-primary m-auto"
          >
            {props.PrpData.btnM}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
