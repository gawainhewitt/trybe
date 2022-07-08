import { createSlice } from '@reduxjs/toolkit';
import { loadGoals } from './goals.actions';

const initialState = [];

const goalSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Load peeps success
      .addCase(loadGoals.fulfilled, (state, action) => {
        return state = action.payload;
      })
    }
});

export default goalSlice.reducer;