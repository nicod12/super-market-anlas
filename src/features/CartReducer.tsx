"use client"
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "Add"; payload: CartItem }
  | { type: "Remove" | "Increase" | "Decrease"; payload: { id: number } };

const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "Add":
      // Si el producto ya está en el carrito, no lo añadas de nuevo, solo incrementa la cantidad
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.quantity < item.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "Remove":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case "Increase":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.quantity < item.stock
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "Decrease":
      return {
        ...state,
        items: state.items
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    default:
      return state;
  }
}
export default CartReducer;
