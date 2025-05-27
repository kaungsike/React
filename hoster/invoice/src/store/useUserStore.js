import { create } from "zustand";


const useUserStore = create((set) => ({
    userStore : {},
    setUserStore: (user) => set(() => ({ userStore: user })),
    clearUserStore: () => set(() => ({ userStore: {} })),
}))


export default useUserStore;