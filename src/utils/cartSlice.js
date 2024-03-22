import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
    increaseItem: (state, action) => {
      state.items.filter((item) => item.id === action.payload)[0].qty+=1;

    },
    decreaseItem: (state, action) => {
        if(state.items.filter((item) => item.id === action.payload)[0].qty===1){
            return
        }
        state.items.filter((item) => item.id === action.payload)[0].qty-=1;

    },
  },
});
export const { addItem, removeItem, clearCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
