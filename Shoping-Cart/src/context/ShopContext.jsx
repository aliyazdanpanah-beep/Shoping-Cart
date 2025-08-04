import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const AddtoCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const RemoveFromCart = (productId) => {
    setCartItems((prev) => {
      if (!prev[productId]) return prev;

      if (prev[productId] === 1) {
        const newItems = { ...prev };
        delete newItems[productId];
        return newItems;
      }

      return {
        ...prev,
        [productId]: prev[productId] - 1,
      };
    });
  };

  const ContextValue = { cartItems, AddtoCart, RemoveFromCart };

  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};
