import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const mySlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {},
});

export const {} = mySlice.actions;

export default mySlice.reducer;
