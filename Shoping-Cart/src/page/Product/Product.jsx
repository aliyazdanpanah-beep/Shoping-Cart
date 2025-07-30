import Product from "../../components/product/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product").then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  return (
    <>
      <div>
        {product.map((PrpData) => (
          <Product key={PrpData.id} PrpData={PrpData} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
