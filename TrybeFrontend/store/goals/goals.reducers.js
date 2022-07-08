import { createSlice } from '@reduxjs/toolkit';
import { loadGoals, uploadGoal } from './goals.actions';

const initialState = [];

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Load goals success
      .addCase(loadGoals.fulfilled, (state, action) => {
        return state = action.payload;
      })
      // Upload goal success
      .addCase(uploadGoal.fulfilled, (state, action) => {
        state.push(action.payload.items[0]);
      })
    }
});

export default goalSlice.reducer;