import { createContext, useContext } from "react";
import { useState } from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [CartItem, setCartItem] = useState([]);

  const AddtoCart = () => {

  }

  const RemoveFromCart = () => {

  }
  const ContextValue = {CartItem, AddtoCart, RemoveFromCart}

  return <ShopContextProvider value={ContextValue}> {props.children} </ShopContextProvider>
};
