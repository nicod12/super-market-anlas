// useStore.ts
import create from 'zustand';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<CartStore>(set => ({
  cart: [],
  addToCart: (id, quantity) => set(state => {
    const existingItem = state.cart.find(item => item.id === id);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      };
    } else {
      return { cart: [...state.cart, { id, quantity }] };
    }
  }),
  removeFromCart: id => set(state => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
}));
