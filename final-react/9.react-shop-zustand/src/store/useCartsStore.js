import { atRule } from "postcss";
import { create } from "zustand";

const useCartsStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 2,
    },
    {
      id: 2,
      productId: 3,
      quantity: 5,
    },
  ],
  increaseQuantity : (id) => set((state) => ({
    carts : state.carts.map((cart) => cart.id == id ? {...cart,quantity : cart.quantity+1} : cart)
  }) ) ,
  decreaseQuantity : (id) => set((state) => ({
    carts : state.carts.map((cart) => cart.id==id ? {...cart,quantity : cart.quantity>1 ? cart.quantity-1 : 1} : cart)
  }) ),
  addNewCart: (newCart) =>
    set((state) => ({
      carts: [...state.carts, newCart],
    })),
/*******  0f9e2fe7-9217-403c-8f1d-6bc716203f13  *******/
    removeCart : (id) => set((state) => ({
      carts : [...state.carts.filter((cart) => cart.id!=id)]
    }) ) 
  
}));

export default useCartsStore;
