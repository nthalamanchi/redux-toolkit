import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterslice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement: (state) => {
            state.count -= 1
          },
          incrementByAmount: (state, action) => {
            state.count += action.payload
          },
    }
})

export const {increment,decrement,incrementByAmount} = counterslice.actions
export default counterslice.reducer