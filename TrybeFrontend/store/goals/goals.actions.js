import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchGoals from '../../src/functions/fetchGoals';

export const loadGoals = createAsyncThunk(
  'goals/loadGoals',
  async (thunkAPI) => {
    try {
      const response = await fetchGoals();
      return response;
    } catch(err) {
      throw err;
    }
  }
);