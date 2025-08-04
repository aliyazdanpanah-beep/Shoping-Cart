import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const AddtoCart = () => {};

  const RemoveFromCart = () => {};

  const ContextValue = { cartItem, AddtoCart, RemoveFromCart };
  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};
