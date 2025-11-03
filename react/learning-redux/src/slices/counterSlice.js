import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: 0,
    reducers: {
        increment: (state) => { return state + 1 },
        decrement: (state) => { return state - 1 },
        changeByValue: (state, action) => {
            // console.log("State is ", state);
            // console.log("Action is ", action.payload);
            return state + action.payload;
        }
    }

})


// we want reducers of counterSlice

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, changeByValue } = counterSlice.actions;