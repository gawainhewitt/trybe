import { createSlice } from "@reduxjs/toolkit";
import { loadGoals, uploadGoal, removeGoal } from "./goals.actions";

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
        state.push(action.payload.items[0]);
      })
      // Delete peep success
      .addCase(removeGoal.fulfilled, (state, action) => {
        return state.filter((goal) => goal._uuid !== action.payload._uuid);
      });
  },
});

export default goalSlice.reducer;
