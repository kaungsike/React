import { create } from "zustand";

// const useCounterStore = create((set) => {
//   return {
//     count: 3,
//     resetCount: () => {
//       return set({ count: 0 });
//     },
//     increaseCount: () => {
//       return set((state) => {
//         return {
//           count: state.count + 1,
//         };
//       });
//     },
// 	 decreaseCount : () => {
// 		return set((state) => {
// 			return {
// 				count : state.count - 1,
// 			}
// 		})
// 	 }
//   };
// });

const useCounterStore = create((set) => {
  return {
    count: 0,
    resetCount: () => (
      set({ count: 0 })
    ),
    increaseCount: () => {
      return set((state) => {
        return {
          count: state.count + 1,
        };
      });
    },
    decreaseCount: () => {
      return set((state) => {
        return {
          count: state.count - 1,
        };
      });
    },
  };
});

export default useCounterStore;
