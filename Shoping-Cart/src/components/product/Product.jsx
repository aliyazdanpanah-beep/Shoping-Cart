import "./Product.css";
import { useState, useEffect } from "react";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="Product-Item">
          <div className="Image"> {props.PrpData.img} </div>
          <div className="Button">
            <button className="btn btn-primary"> {props.PrpData.btn} </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
