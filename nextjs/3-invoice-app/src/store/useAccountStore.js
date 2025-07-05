import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccountStore = create(
  persist((set) => ({
    token: null,
    setToken: (token) => set({ token }),

    account: {},
    setAccount: (account) => set({ account }),

    logout: () => set({ token: null, account: {} }),
  })),
  {
    name: "account-storage", // unique name for the storage
    getStorage: () => localStorage, // use localStorage as the storage
  }
);

export default useAccountStore;
