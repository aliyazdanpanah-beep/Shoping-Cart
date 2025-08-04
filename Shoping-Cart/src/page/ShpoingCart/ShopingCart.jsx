import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

const ShopingCart = ({ products }) => {
  const { cartItems } = useContext(ShopContext);

  // تابع برای یافتن اطلاعات محصول بر اساس ID
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <div className="shopping-cart">
      <h1>سبد خرید شما</h1>

      {Object.keys(cartItems).length === 0 ? (
        <p>سبد خرید شما خالی است</p>
      ) : (
        <div className="cart-items">
          {Object.entries(cartItems).map(([productId, quantity]) => {
            const product = getProductById(productId);
            return (
              <div key={productId} className="cart-item">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>قیمت: {product.price} تومان</p>
                <p>تعداد: {quantity}</p>
                <p>جمع: {product.price * quantity} تومان</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShopingCart;
