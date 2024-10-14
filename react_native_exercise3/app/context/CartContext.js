import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((prevCart) => {
      const isExist = prevCart.find((e) => e.id === item.id);
      if (isExist) {
        console.log("fefefefefefe", item.quantity);
        return prevCart.map((e) =>
          e.id === item.id ? { ...e, quantity: (e.quantity += 1) } : e
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }

  function updateCart(item) {
    setCart((prevCart) => {
      return prevCart.map((e) => (e.id === item.id ? item : e));
    });
  }

  function removeItemFromCart(id) {
    setCart((prevCart) => {
      const index = prevCart.findIndex((product) => product.id === id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        console.log(`Product with ID ${id} has been deleted.`);
        return updatedCart;
      } else {
        console.log(`Product with ID ${id} not found.`);
        return prevCart;
      }
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, updateCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
