import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./slices/employeesSlice";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export * from "./slices/employeesSlice";
export { store };
