import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
      changeFilter: (state, action) => {
          state.name = action.payload
    },
  },
});

export const selectNameFilter = (state) => state.filters.name


export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions