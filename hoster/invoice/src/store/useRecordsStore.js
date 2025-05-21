import { create } from "zustand";

const useRecordsStore = create((set) => ({
  records: [],
  addRecord: (record) => {
    set((state) => ({ records: [...state.records, record] }));
  },
  updateQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((el) => {
        if (el.product_id == id) {
          if (quantity === -1) {
            const newQuantity =
              el.quantity > 1 ? el.quantity + quantity : el.quantity;
            const newCost = el.product.price * newQuantity;
            return { ...el, quantity: newQuantity, cost: newCost };
          }
          const newQuantity =
            el.quantity >= 1 ? el.quantity + quantity : el.quantity;
          const newCost = el.product.price * newQuantity;
          return { ...el, quantity: newQuantity, cost: newCost };
        }
        return el;
      }),
    })),
}));

export default useRecordsStore;
