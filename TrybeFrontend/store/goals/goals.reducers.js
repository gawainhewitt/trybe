import { createSlice } from "@reduxjs/toolkit";
import { loadGoals, uploadGoal, removeGoal, editGoal } from "./goals.actions";

const initialState = [];

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load goals success
      .addCase(loadGoals.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      // Upload goal success
      .addCase(uploadGoal.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // Delete goal success
      .addCase(removeGoal.fulfilled, (state, action) => {
        return state.filter((goal) => goal.id !== action.payload.id);
      })
      // Edit goal success
      .addCase(editGoal.fulfilled, (state, action) => {
        const index = state.findIndex((goal) => goal.id === action.payload.id);
        state[index] = action.payload;
        return state;
      });
  },
});

export default goalSlice.reducer;
