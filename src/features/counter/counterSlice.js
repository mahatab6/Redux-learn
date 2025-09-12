import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0},
    reducers:{
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, actions) => {
            state.value = state.value + actions.payload;
        }
    }
 });

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer