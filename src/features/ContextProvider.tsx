"use client"
import { createContext, useReducer, ReactNode } from "react";
import CartReducer, { CartAction, CartState } from "./CartReducer";

interface Props {
  children: ReactNode;
}

// Tipo del contexto
interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}

// Valor por defecto del contexto
const defaultCartContextValue: CartContextType = {
  cart: { items: [] },
  dispatch: () => { }
};

// Crear el contexto con el valor por defecto
const CartContext = createContext<CartContextType>(defaultCartContextValue);

const ContextProvider = ({ children }: Props) => {
  const [cart, dispatch] = useReducer(CartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default ContextProvider;
export { CartContext };
