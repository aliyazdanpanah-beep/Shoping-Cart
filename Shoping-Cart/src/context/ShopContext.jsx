import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(0);

  const AddtoCart = () => {
    setCount(count + 1);
  };

  const RemoveFromCart = () => {
    setCount(count + 2);
  };

  const ContextValue = { cartItem, AddtoCart, RemoveFromCart };
  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};
