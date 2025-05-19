import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) => {
    set((state) => ({ records: [...state.records, record] }));
  },
  deleteRecord: (id) =>
    set((state) => ({
      records: state.records.filter((record) => record.id != id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = record.quantity + quantity;
          const newCost = record.product.price * newQuantity;  
          return { ...record, quantity: newQuantity, cost: parseFloat(newCost.toFixed(2)) };
        }
        return record;
      }),
    })),

  clearRecords: () =>
    set(() => ({
      records: [],
    })),
}));

export default useRecordStore;
