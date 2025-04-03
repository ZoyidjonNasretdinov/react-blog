import {createSlice} from "@reduxjs/toolkit"


export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 1,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
  },
})

export const {increment, decrement, reset} = countSlice.actions
export default countSlice.reducer