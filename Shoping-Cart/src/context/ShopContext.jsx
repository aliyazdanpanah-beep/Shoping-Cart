import { useState, createContext } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // تغییر به آبجکت برای ذخیره تعداد هر محصول

  const AddtoCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1, // افزایش تعداد محصول خاص
    }));
  };

  const RemoveFromCart = (productId) => {
    setCartItems((prev) => {
      if (!prev[productId]) return prev; // اگر محصول وجود نداشت، چیزی تغییر نکن

      if (prev[productId] === 1) {
        const newItems = { ...prev };
        delete newItems[productId]; // اگر تعداد 1 بود، محصول را حذف کن
        return newItems;
      }

      return {
        ...prev,
        [productId]: prev[productId] - 1, // کاهش تعداد محصول
      };
    });
  };

  const ContextValue = { cartItems, AddtoCart, RemoveFromCart };

  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};
