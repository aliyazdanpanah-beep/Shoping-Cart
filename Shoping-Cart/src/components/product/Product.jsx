import "./Product.css";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <div className="Product-Item">
          <div className="Image"> {props.PrpData.img} </div>
          <div className="Button">
            <button className="btn btn-primary m-auto ">
              {" "}
              {props.PrpData.btnS}{" "}
            </button>
            <p>0</p>
            <button className="btn btn-primary m-auto ">
              {" "}
              {props.PrpData.btnM}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
