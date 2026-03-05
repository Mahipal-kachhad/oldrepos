import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      let isItemAdded = false;
      state.items = state.items.map((val) => {
        if (val.id === action.payload.id) {
          val.count++;
          isItemAdded = true;
        }
        return val;
      });
      if (!isItemAdded) state.items.push({ ...action.payload, count: 1 });
      state.total = 0;
      state.items = state.items.map((val) => {
        let finalPrice =
          val.price * (1 - val.discountPercentage / 100).toFixed(2);
        val.itemTotal = finalPrice * val.count;
        state.total += val.itemTotal;
        return val;
      });
      state.total = state.total.toFixed(2);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((val, idx) => action.payload !== idx);
      state.total = 0;
      state.items = state.items.map((val) => {
        state.total += val.itemTotal;
        return val;
      });
      state.total = state.total.toFixed(2);
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
