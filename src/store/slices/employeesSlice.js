import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addEmployee: addEmployee } = employeeSlice.actions;
export const employeesReducer = employeeSlice.reducer;
